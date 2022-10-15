export const fetchCartRepas = () => ({
    type: 'FETCH_CART_REPAS',
  });
  
  export const updateCartRepas = (data:any, qty:number) => ({
    type: 'UPDATE_CART_REPAS',
    payload: {
      ...data,
      qty,
    },
  });
  
  export const updateCartRepasQty = (id:string, qty:number) => ({
    type: 'UPDATE_CART_REPAS_QTY',
    payload: {
      foodId: id,
      qty,
    },
  });
  
  export const deleteCartRepas = (id:any) => ({
    type: 'DELETE_CART_REPAS',
    payload: id,
  });
  
  export const saveNewCart = (data:any) => ({
    type: 'SAVE_NEW_CART',
    payload: data,
  });
  
  
  export const saveRepasInfoToCart = (data:any) => ({
    type: 'SAVE_REPAS_INFO',
    payload: data,
  });
  
  export const cleanCart = () => ({
    type: 'CLEAN_CART_REPAS',
  });
  