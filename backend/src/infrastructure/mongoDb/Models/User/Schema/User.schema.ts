import { Schema } from 'mongoose';
import crypto from 'node:crypto';
import { AuthMethods, User } from '../Entity/User.entity';
import PasswordHelpers from '@/lib/Passwords/PasswordHelpers';
import { CustomError } from '@/lib';

const UserMongoSchema = new Schema<User>(
  {
    uuid: {
      type: String,
      required: true,
      unique: true,
      default: () => crypto.randomUUID(),
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      validate: {
        validator: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        message: 'Email is not valid',
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    authenticationMethod: {
      type: String,
      required: true,
      enum: Object.values(AuthMethods),
      default: AuthMethods.BASIC,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

UserMongoSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // <- evita rehashear
  // Si el usuario se autentica con Google y ya tiene una contraseña, solo la encriptamos
  if (this.authenticationMethod === 'GOOGLE') {
    if (!this.password) {
      // Generar una contraseña aleatoria si no tiene una
      this.password = PasswordHelpers.generateSecurePassword(this.username);
    }
  } else {
    // Validar la contraseña solo si el método de autenticación no es GOOGLE
    if (!PasswordHelpers.validateCharacters(this.password)) {
      return next(CustomError(400, 'Invalid Credentials'));
    }
  }
  this.password = PasswordHelpers.generateHashing(this.password, 12);
  next();
});

export default UserMongoSchema;
