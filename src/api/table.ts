import request from '@/utils/request';

/**
 * 登录
 * @param {*} data
 * @returns
 */
export function getTableList(params?: any) {
  return request({
    url: '/api/table/list',
    method: 'get',
    params
  })
}