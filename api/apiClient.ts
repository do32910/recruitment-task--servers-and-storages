import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';

const API_URL = 'https://api.upcloud.com/1.3';

let axiosInstance: AxiosInstance | null = null;

function getAxios(): AxiosInstance {
  if (axiosInstance === null) {
    axiosInstance = axios.create();
  }

  return axiosInstance;
}

async function request(
  config: AxiosRequestConfig,
): Promise<{ status: number; data: any }> {
  const requestConfig: AxiosRequestConfig = {
    ...config,
    auth: { username: 'mockuser', password: 'mockpass' },
    headers: { ...config?.headers, 'X-Requested-With': 'XMLHttpRequest' },
    url: `${API_URL}${config.url || ''}`,
  };

  const response: AxiosResponse = await getAxios().request(requestConfig);
  const { data, status } = response;

  return { status, data };
}

export { request };
