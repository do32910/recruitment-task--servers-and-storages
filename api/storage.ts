import { request } from 'api/apiClient';
import { IStorage} from 'upcloud';
import { titleCompare } from 'utils/compare';

async function getStorages() {
  const response = await request({ method: 'get', url: '/storage' });
  const storages = response.data.storages.storage.filter((storage: IStorage) => storage.type === 'normal').sort(titleCompare);
  return { data: storages, error: null, status: response.status };
}

export { getStorages };
