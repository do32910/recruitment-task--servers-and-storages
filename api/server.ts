import { request } from 'api/apiClient';
import { hostnameCompare } from 'utils/compare';

async function getServers() {
  const response = await request({ method: 'get', url: '/server' });
  const servers = response.data.servers.server.sort(hostnameCompare);
  return { data: servers, error: null, status: response.status };
}

export { getServers };
