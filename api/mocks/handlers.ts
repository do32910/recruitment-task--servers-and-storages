import { rest } from 'msw';
import serverJson from './json/server.json';
import storageJson from './json/storage.json';

// use "msw" to mock the UpCloud API endpoints needed/used in this exercise
export const handlers = [
  rest.get('https://api.upcloud.com/1.3/server', (_req, res, ctx) =>
    res(ctx.delay(), ctx.status(200), ctx.json(serverJson)),
  ),

  rest.get('https://api.upcloud.com/1.3/storage', (_req, res, ctx) =>
    res(ctx.delay(), ctx.status(200), ctx.json(storageJson)),
  ),

  rest.get('https://api.upcloud.com/1.3/storage/private', (_req, res, ctx) => {
    const privateStorages = storageJson.storages.storage.filter(
      (s) => s.access === 'private' && s.type === 'normal',
    );
    return res(
      ctx.delay(),
      ctx.status(200),
      ctx.json({ storages: { storage: privateStorages } }),
    );
  }),
];
