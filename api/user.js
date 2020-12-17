import {request} from '../utils/request';
export function login(data){
  return request({
    url:'teacher/info/login.json',
    data
  })
}