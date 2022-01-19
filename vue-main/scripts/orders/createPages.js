/*
 * @Author: wdy
 * @Date: 2022-01-07 15:04:09
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-19 17:37:47
 */
const path = require('path');
const {pageGroups} = require('../configs/index');
const {capitalizeWord, mkdirSync, writeFileSync, copyGitKeepSync} = require('../utils/index');
const {templateIndexVue, templateEmptyFileTsFun, templatePageComponentVue, templateComponentModuleLessFun} = require('../templates/index');

const projectRootPath = path.resolve(__dirname, '../../');
const basePagesPath = path.join(projectRootPath, './src/pages');

pageGroups.forEach(async group => {
  const {path: groupPath, pages = []} = group;
  const groupFullPath = `${basePagesPath}/${groupPath}`;

  await mkdirSync(`${groupFullPath}`);

  pages.forEach(async page => {
    const {pages: subPages} = page;
    if (!subPages) {
      const {path: pagePath} = page;
      const pageFullPath = `${groupFullPath}/${pagePath}`;
      const ViewName = capitalizeWord(pagePath);
      await mkdirSync(`${pageFullPath}`);
      await mkdirSync(`${pageFullPath}/assets`);
      await mkdirSync(`${pageFullPath}/assets/images`);
      await mkdirSync(`${pageFullPath}/assets/icons`);

      await copyGitKeepSync(`${pageFullPath}/assets/images`);
      await copyGitKeepSync(`${pageFullPath}/assets/icons`);

      /**
       * 写入文件
       */
      await writeFileSync(`${pageFullPath}/index.vue`, templateIndexVue(ViewName)); // index.tsx
      await writeFileSync(`${pageFullPath}/utils.js`, templateEmptyFileTsFun('Utils')); // utils.js
      await writeFileSync(`${pageFullPath}/configs.js`, templateEmptyFileTsFun('Configs')); // configs.js
      await writeFileSync(`${pageFullPath}/${ViewName}Component.vue`, templatePageComponentVue(`${ViewName}Component`, './'));
      await writeFileSync(`${pageFullPath}/${ViewName}Component.less`, templateComponentModuleLessFun()); // ViewComponent.module.less
    } else {
      subPages.forEach(async subPage => {
        const {path: pagePath} = subPage;
        const pageFullPath = `${groupFullPath}/${pagePath}`;
        const ViewName = capitalizeWord(pagePath);
        await mkdirSync(`${pageFullPath}`);
        await mkdirSync(`${pageFullPath}/assets`);
        await mkdirSync(`${pageFullPath}/assets/images`);
        await mkdirSync(`${pageFullPath}/assets/icons`);
        await copyGitKeepSync(`${pageFullPath}/assets/images`);
        await copyGitKeepSync(`${pageFullPath}/assets/icons`);
        /**
         * 写入文件
         */
        await writeFileSync(`${pageFullPath}/index.tsx`, templateIndexTsxFun(ViewName)); // index.tsx
        await writeFileSync(`${pageFullPath}/utils.js`, templateEmptyFileTsFun('Utils')); // utils.js
        await writeFileSync(`${pageFullPath}/configs.js`, templateEmptyFileTsFun('Configs')); // configs.js
        await writeFileSync(`${pageFullPath}/${ViewName}Component.vue`, templatePageComponentVue(`${ViewName}Component`, './'));
        await writeFileSync(`${pageFullPath}/${ViewName}Component.less`, templateComponentModuleLessFun()); // ViewComponent.module.less
      });
    }
  });
});
