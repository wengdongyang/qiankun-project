/*
 * @Author: wdy
 * @Date: 2021-01-07 15:15:22
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-21 11:25:16
 */
import type { TypeMicroApp } from './types';
export {
  MENU,
  INTERNAL_PAGE,
  ASEIT_INSPECTION_PAGE,
  ASEIT_SETTING_PAGE,
  FRIEND_INNER_IFREAM,
  FRIEND_INNER_PAGE,
  FRIEND_BLANK_PAGE
} from '../../constants';

const microAppConfigs: TypeMicroApp[] = [
  {
    name: 'asInspection',
    entry: 'http://localhost:4000/',
    container: '#microApplication',
    activeRule: '/root/asInspection'
  }
  // { name: 'asSetting', entry: 'http://localhost:5000/', container: '#microApplication', activeRule: '/root/asSetting' },
  // { name: 'haoyuan', entry: 'http://localhost:6000/', container: '#microApplication', activeRule: '/root/haoyuan' }
];

export { microAppConfigs };
