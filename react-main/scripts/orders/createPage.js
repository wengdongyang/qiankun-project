/*
 * @Author: wdy
 * @Date: 2022-01-07 15:04:09
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-19 16:43:33
 */
const path = require('path');
const {pageGroups, pageArrays} = require('../configs/index');
const {capitalizeWord, mkdirSync, writeFileSync, copyGitKeepSync} = require('../utils/index');
const {
  templateIndexTsxFun,
  templateTypesDTsFun,
  templateEmptyFileTsFun,
  templatePageComponentTsxFun,
  templateComponentModuleLessFun,
} = require('../templates/index');

const projectRootPath = path.resolve(__dirname, '../../');
const basePagesPath = path.join(projectRootPath, './src/pages');

pageGroups.forEach(async group => {
  const {path: groupPath, pages = []} = group;
  const groupFullPath = `${basePagesPath}/${groupPath}`;

  await mkdirSync(`${groupFullPath}`);

  pages.forEach(async page => {
    const {pages: subPages} = page;
    if (!subPages) {
      const {path: pagePath, components = []} = page;
      const pageFullPath = `${groupFullPath}/${pagePath}`;
      const ViewName = capitalizeWord(pagePath);
      await mkdirSync(`${pageFullPath}`);
      await mkdirSync(`${pageFullPath}/components`);
      await mkdirSync(`${pageFullPath}/assets`);
      await mkdirSync(`${pageFullPath}/assets/images`);
      await mkdirSync(`${pageFullPath}/assets/icons`);

      await copyGitKeepSync(`${pageFullPath}/components`);
      await copyGitKeepSync(`${pageFullPath}/assets/images`);
      await copyGitKeepSync(`${pageFullPath}/assets/icons`);

      components.forEach(async component => {
        const componentFullPath = `${pageFullPath}/components/${component}`;
        const ComponentName = capitalizeWord(component);
        await mkdirSync(componentFullPath);

        await writeFileSync(`${componentFullPath}/${ComponentName}.tsx`, templatePageComponentTsxFun(`${ComponentName}`, '../../'));
        await writeFileSync(`${componentFullPath}/${ComponentName}.module.less`, templateComponentModuleLessFun()); // /component/View.module.tsx
      });

      /**
       * 写入文件
       */
      await writeFileSync(`${pageFullPath}/index.tsx`, templateIndexTsxFun(ViewName)); // index.tsx
      await writeFileSync(`${pageFullPath}/utils.ts`, templateEmptyFileTsFun('Utils')); // utils.ts
      await writeFileSync(`${pageFullPath}/configs.ts`, templateEmptyFileTsFun('Configs')); // configs.ts
      await writeFileSync(`${pageFullPath}/hooks.ts`, templateEmptyFileTsFun('Hooks')); // configs.ts
      await writeFileSync(`${pageFullPath}/${ViewName}Component.tsx`, templatePageComponentTsxFun(`${ViewName}Component`, './'));
      await writeFileSync(`${pageFullPath}/${ViewName}Component.module.less`, templateComponentModuleLessFun()); // ViewComponent.module.less
      await writeFileSync(`${pageFullPath}/types.d.ts`, templateTypesDTsFun());
    } else {
      subPages.forEach(async subPage => {
        const {path: pagePath, components = []} = subPage;
        const pageFullPath = `${groupFullPath}/${pagePath}`;
        const ViewName = capitalizeWord(pagePath);
        await mkdirSync(`${pageFullPath}`);
        await mkdirSync(`${pageFullPath}/components`);
        await mkdirSync(`${pageFullPath}/assets`);
        await mkdirSync(`${pageFullPath}/assets/images`);
        await mkdirSync(`${pageFullPath}/assets/icons`);

        await copyGitKeepSync(`${pageFullPath}/components`);
        await copyGitKeepSync(`${pageFullPath}/assets/images`);
        await copyGitKeepSync(`${pageFullPath}/assets/icons`);

        components.forEach(async component => {
          const componentFullPath = `${pageFullPath}/components/${component}`;
          const ComponentName = capitalizeWord(component);
          await mkdirSync(componentFullPath);

          await writeFileSync(`${componentFullPath}/${ComponentName}.tsx`, templatePageComponentTsxFun(`${ComponentName}`, '../../'));
          await writeFileSync(`${componentFullPath}/${ComponentName}.module.less`, templateComponentModuleLessFun()); // /component/View.module.tsx
        });

        /**
         * 写入文件
         */
        await writeFileSync(`${pageFullPath}/index.tsx`, templateIndexTsxFun(ViewName)); // index.tsx
        await writeFileSync(`${pageFullPath}/utils.ts`, templateEmptyFileTsFun('Utils')); // utils.ts
        await writeFileSync(`${pageFullPath}/configs.ts`, templateEmptyFileTsFun('Configs')); // configs.ts
        await writeFileSync(`${pageFullPath}/${ViewName}Component.tsx`, templatePageComponentTsxFun(`${ViewName}Component`, './'));
        await writeFileSync(`${pageFullPath}/${ViewName}Component.module.less`, templateComponentModuleLessFun()); // ViewComponent.module.less
        await writeFileSync(`${pageFullPath}/types.d.ts`, templateTypesDTsFun());
      });
    }
  });
});
pageArrays.forEach(async pageArray => {
  const paths = Array.from(new Set(pageArray.map(el => el.path)));
  if (paths.length === 1) {
    const [folderPath] = paths;
    const pageFullPath = `${basePagesPath}/${folderPath}`;
    await writeFileSync(`${pageFullPath}/routes.ts`, templatePageRoutesFun(folderPath, pageArray), true); // index.tsx
  } else {
    console.error('路径定义错误！！！');
  }
});
