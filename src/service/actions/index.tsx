export const authLogin = (email:string, password:string) => ({
    type: 'AUTH_LOGIN',
    payload: {
      email,
      password,
    },
  });
  
  export const authRegister = (email:string, password:string) => ({
    type: 'AUTH_REGISTER',
    payload: {
      email,
      password,
    },
  });
  export const authLogout = () => ({
    type: 'AUTH_LOGOUT',
  });
  
  export const fetchRepasTypes = () => ({
    type: 'FETCH_REPAS_TYPES',
  });
  
  export const fetchCantine = (id = null) => ({
    type: 'FETCH_CANTINE',
    payload: {
      id,
    },
  });
  
  export const fetchCantineByLocation = (location = null, isFromCantine = false) => ({
    type: 'FETCH_CANTINE_LOCATION',
    payload: {
      location,
      isFromCantine,
    },
  });
  
  export const fetchCommandes = () => ({
    type: 'FETCH_COMMANDES',
  });
  
  export const doCancelCommande = () => ({
    type: 'CANCEL_COMMANDE',
  });
  
  export const createCommande = (repas:string, total:number) => ({
    type: 'CREATE_COMMANDE',
    payload: {
      repas,
      total,
    },
  });
  
  