/*
 * @Author: wdy
 * @Date: 2022-01-19 12:19:46
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-19 12:21:19
 */
type TypeRoute = Partial<{name: string; type: 'qiankun' | string; path: string}>;
type TypeMenu = Partial<{
  id: string;
  parentId: string;
  name: string;
  isLeaf: boolean;
  route: TypeRoute;
  children: TypeMenu[];
}>;
export type {TypeMenu, TypeRoute};
