import request from './request';
import { COMMANDES_URL } from './api_constants';

function getCommandes(userId:string, headers:JSON) {
  const params = {
    userId,
  };
  return request({
    url: COMMANDES_URL, method: 'GET', params, headers,
  });
}

function createCommande(userId:string, cartItems:string, totalAmount:number, headers:JSON) {
  const data = {
    userId,
    items: cartItems,
    totalCost: totalAmount,
  };
  return request({
    url: COMMANDES_URL, method: 'POST', data, headers,
  });
}


export default {
  getCommandes,
  createCommande,
};
