/*
 * @Author: wdy
 * @Date: 2021-07-13 18:09:10
 * @Last Modified by: wdy
 * @Last Modified time: 2021-07-13 18:11:42
 */
// types
// configs
// apis
// utils
// stores
// components
const downloadFile = async (blob: Blob, fileName: string) => {
  try {
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${fileName}`);
    document.body.appendChild(link);
    link.click();
    window.URL.revokeObjectURL(link.href);
    document.body.removeChild(link);
  } catch (error) {
    console.error(error);
  }
};

export {downloadFile};
