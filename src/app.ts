import 'express-async-errors';
import express, { Express } from 'express';
import { connectDatabase, disconnectDatabase } from './config';

const app = express();
app
  .use(express.json())
  .get('/health', (_req, res) => res.send('OK!'));

export function init(): Promise<Express> {
  connectDatabase();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDatabase();
}

export default app;
