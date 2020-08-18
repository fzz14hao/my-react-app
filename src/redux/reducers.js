import * as APP from './constStr'

const initState = {
  number:0
}


export function reducer(state = initState, action) {
  switch (action.type) {
    case APP.ADD:
      return Object.assign({}, state, action)
    case APP.REMOVE:
      return Object.assign({}, state, action)
    default:
      return state
  }
}
