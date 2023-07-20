import axios from 'axios';
import queryString from 'query-string';
import { AccessRightsInterface, AccessRightsGetQueryInterface } from 'interfaces/access-rights';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAccessRights = async (
  query?: AccessRightsGetQueryInterface,
): Promise<PaginatedInterface<AccessRightsInterface>> => {
  const response = await axios.get('/api/access-rights', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createAccessRights = async (accessRights: AccessRightsInterface) => {
  const response = await axios.post('/api/access-rights', accessRights);
  return response.data;
};

export const updateAccessRightsById = async (id: string, accessRights: AccessRightsInterface) => {
  const response = await axios.put(`/api/access-rights/${id}`, accessRights);
  return response.data;
};

export const getAccessRightsById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/access-rights/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteAccessRightsById = async (id: string) => {
  const response = await axios.delete(`/api/access-rights/${id}`);
  return response.data;
};
