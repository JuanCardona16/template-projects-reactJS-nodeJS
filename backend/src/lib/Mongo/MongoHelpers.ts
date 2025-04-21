import mongoose, { model, Model, Schema } from 'mongoose';
import { CollectionsNamesMongo } from '../../infrastructure/mongoDb/Collections/Collections';

class MongoHelpers {
  constructor() {
    // Configuracion de eventos de conexión en el constructuro
    mongoose.connection.on('error', (err) => {
      console.error('Mongoose connection error: ', err);
      process.exit(1);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('Mongoose connection disconnected');
    });

    process.on('SIGINT', async () => {
      await this.closeDatabaseConnection();
      process.exit(0);
    });
  }

  async createDatabaseConnection(MONGO_ATlAS_URL: string): Promise<typeof mongoose> {
    try {
      if (!MONGO_ATlAS_URL) {
        console.log('MONGO_ATlAS_URL enviroment variable is required');
        process.exit(1);
      }

      const connection = await mongoose.connect(MONGO_ATlAS_URL);
      console.log('Connected to MongoDB');

      return connection;
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      process.exit(1);
    }
  }

  async closeDatabaseConnection(): Promise<void> {
    try {
      await mongoose.connection.close();
      console.log('Mongoose connection disconnected');
    } catch (error) {
      console.log('Error closing MongoDB connection: ', error);
    }
  }

  getDataCollectionModel<T>(Collection: CollectionsNamesMongo, Model: Schema): Model<T> {
    return model<T>(Collection, Model);
  }
}

export default new MongoHelpers();
