import axios from 'axios';
import * as types from './actionTypes';
import * as CONSTANTS from '../../constants';

export const getContacts = (params: any) => (dispatch: any) => {
  if(params.refresh){
    dispatch({
      type: types.GET_CONTACTS,
      payload: {contacts_ids: [], listLoaded: false}
    });  
  }
  const query = params.query? params.query: '';
  const page = params.page? params.page: 1;
  const countryId = params.countryId? params.countryId: '';

  axios
    .get(`${CONSTANTS.API_URL}?companyId=${params.companyId}&query=${query}&page=${page}&countryId=${countryId}`, {
      headers: {
        'Authorization': `Bearer ${CONSTANTS.AUTH_TOKEN}`
      }
    })
    .then((res: any) => {
      dispatch({
        type: types.GET_CONTACTS,
        payload: {
          ...res.data,
          ...{listLoaded: true}
        },
      });
    })
    .catch((err) => {
      console.log('Error occured when get contacts');
    });
}