import * as APP from './constStr'

/*
* 添加
* */
export function add(num) {
  num++
  return {type: APP.ADD, number:num};
}
/*
*减少
* */
export function remove(num) {
  num--
  return {type: APP.REMOVE, number:num};
}

export function addAsync() {
  return (dispatch, getState) => {
    setTimeout(function () {
      dispatch(addCreator());
    }, 1000);
  }
}