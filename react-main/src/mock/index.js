/*
 * @Author: wdy
 * @Date: 2022-01-17 10:41:38
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-19 11:52:41
 */
import Mock from 'mockjs';

import {mockApiAuthLogin, mockApiAuthMenuTree} from './auth';

Mock.setup({timeout: 1000});

Mock.mock(/\/api\/auth\/login/, mockApiAuthLogin);
Mock.mock(/\/api\/auth\/menu\/tree/, mockApiAuthMenuTree);
export default Mock;
