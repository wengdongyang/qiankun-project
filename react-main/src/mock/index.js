/*
 * @Author: wdy
 * @Date: 2022-01-17 10:41:38
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-19 11:52:41
 */
import Mock from 'mockjs';

import {mockApiPostAuthLogin, mockApiGetAuthMenuTree} from './auth';

Mock.setup({timeout: 1000});

Mock.mock(/\/api\/auth\/login/, mockApiPostAuthLogin);
Mock.mock(/\/api\/auth\/menu\/tree/, mockApiGetAuthMenuTree);
export default Mock;
