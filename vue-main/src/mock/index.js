/*
 * @Author: wdy
 * @Date: 2022-01-17 10:41:38
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-17 10:42:20
 */
import Mock from 'mockjs';

import {mockApiAuthSessionLogin} from './auth';

Mock.setup({timeout: 1000});

Mock.mock(/\/api\/auth/, mockApiAuthSessionLogin);

export default Mock;
