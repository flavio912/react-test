import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.contact, action: any) => {
  switch (action.type) {
    case types.GET_CONTACTS:
      return {
        ...state,
        list: [
          ...action.payload.contacts_ids.map((item: any) => {
            return action.payload.contacts[item]
          })
        ],
        listLoaded: action.payload.listLoaded
      };
    default:
      return state;  
  }
};