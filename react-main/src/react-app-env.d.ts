/// <reference types="react-scripts" />
declare module '*.module.less' {
  const classes: {readonly [key: string]: any};
  export default classes;
}

declare interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}
