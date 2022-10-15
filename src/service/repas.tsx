import request from './request';
import { INFO_REPAS_URL, TYPES_REPAS_URL, CANTINE_URL } from './api_constants';

function getRepas(id = null, headers = null) {
  let params = {};
  if (id != null) {
    params = {
      id,
    };
  }
  return request({
    url: INFO_REPAS_URL, method: 'GET', params, headers,
  });
}


function getAllCuisineTypes(headers = null) {
  return request({
    url: TYPES_REPAS_URL, method: 'GET', headers,
  });
}


export default {
  getRepas,
  getAllCuisineTypes,
};
