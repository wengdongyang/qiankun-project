/*
 * @Author: wdy
 * @Date: 2022-01-17 10:40:21
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-17 10:49:23
 */
const mockApiAuthSessionLogin = req => {
  return {
    code: '200',
    data: {
      name: 'admin',
      user_id: '2',
      token: 'admin',
      avatar: 'https://avatars0.githubusercontent.com/u/20942571?s=460&v=4',
    },
  };
};
export {mockApiAuthSessionLogin};
