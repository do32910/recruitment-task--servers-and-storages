import { request } from 'api/apiClient';
import { IStorage} from 'upcloud';

async function getStorages() {
  const response = await request({ method: 'get', url: '/storage' });
  const storages = response.data.storages.storage.filter((storage: IStorage) => storage.type === 'normal').sort(( a: IStorage,b: IStorage ) => a.title.localeCompare(b.title));
  return { data: storages, error: null, status: response.status };
}

export { getStorages };
