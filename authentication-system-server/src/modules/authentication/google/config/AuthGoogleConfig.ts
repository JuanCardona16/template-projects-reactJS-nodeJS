import { CLIENT_GOOGLE_ID, CLIENT_GOOGLE_SECRET } from '@/constants';
import { OAuth2Client } from 'google-auth-library'

export const client = new OAuth2Client(CLIENT_GOOGLE_ID, CLIENT_GOOGLE_SECRET, "postmessage");