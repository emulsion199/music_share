import store from '../index';

export function Sharing(value) {
    return {
      type: 'Sharing',
      value
    }
  }
export function AddData(value) {
return {
    type: 'AddData',
    value
}
}
export function SetData(value) {
  return {
      type: 'SetData',
      value
  }
  }

const initialState={
    sharing:0,
    data:[{'url':[],'name':'','desc':''}]//{'url':[],'name':'','desc':''}],

}
export default function reducer(state = initialState, action) {
    switch (action.type) {
    case 'Sharing':
      return {
        ...state,
          sharing:action.value,
      }
    case 'AddData':
    const k=[action.value].concat(state.data)
    return {
        ...state,
        data:k
    }
    case 'SetData':
    return {
        ...state,
        data:action.value
    }
 
    default:
      return state
    }
}
