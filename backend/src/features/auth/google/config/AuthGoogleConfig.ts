import { CLIENT_GOOGLE_ID, CLIENT_GOOGLE_SECRET } from '@/config/env/env';
import { OAuth2Client } from 'google-auth-library';

export const client = new OAuth2Client(CLIENT_GOOGLE_ID, CLIENT_GOOGLE_SECRET, 'postmessage');
