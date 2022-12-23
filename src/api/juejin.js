const request = require('../utils/request');
const { COOKIE } =  require('../utils/config.js');

module.exports = function () {
  return {
    /* 查询是否签到 */
    queryCheck: function () {
      return request({
        url: 'https://api.juejin.cn/growth_api/v1/get_today_status',
        method: 'get',
        headers: {
          cookie: COOKIE,
        },
      });
    },
    /* 查询是否签到 */
    checkCount: function () {
      return request({
        url: 'https://api.juejin.cn/growth_api/v1/get_counts',
        method: 'get',
        headers: {
          cookie: COOKIE,
        },
      });
    },
    /**
     * 签到
     */
    checkIn: function () {
      return request({
        url: 'https://api.juejin.cn/growth_api/v1/check_in',
        method: 'post',
        headers: {
          cookie: COOKIE,
        },
      });
    },
    /**
     * 抽奖
     */
    drawApi: function () {
      return request({
        url: 'https://api.juejin.cn/growth_api/v1/lottery/draw',
        method: 'post',
        headers: {
          cookie: COOKIE,
        },
      });
    },
    dipLucky: function (params) {
      return request({
        url: 'https://api.juejin.cn/growth_api/v1/lottery_lucky/dip_lucky?aid=2608',
        method: 'post',
        data: params,
        headers: {
          cookie: COOKIE,
        },
      });
    },
  }
};
