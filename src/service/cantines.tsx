import request from './request';
import { CANTINE_FILTRE_URL, CANTINE_URL } from './api_constants';

function getCantine(id = null, headers = null) {
  let params = {};
  if (id != null) {
    params = {
      id,
    };
  }
  return request({
    url: CANTINE_URL, method: 'GET', params, headers,
  });
}

function getCantineByLocation(location:string, headers = null) {
  return request({
    url: `${CANTINE_FILTRE_URL}?location=${location}`, method: 'GET', headers,
  });
}

export default {
  getCantine,
  getCantineByLocation,
};
