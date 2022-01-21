/*
 * @Author: wdy
 * @Date: 2020-05-08 11:27:50
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-08 11:09:01
 */
import { Button } from 'antd';
import { connect } from 'react-redux';
import React, { FunctionComponent } from 'react';
// types
import type { Dispatch } from 'redux';
import type { TypeMenu, TypeStore } from '../../types';
// config
// api
// util
// store
// component
const PageA: FunctionComponent<any> = (props) => {
  console.error(props);

  const onClickSetGlobalState = () => {
    const { baseHostURL, baseURL, baseWebsocketURL } = props;
    props?.setGlobalState &&
      props.setGlobalState({
        baseHostURL,
        baseURL: 'edit by child',
        baseWebsocketURL
      });
  };
  return (
    <section>
      pageA
      {props.baseURL}
      <Button onClick={onClickSetGlobalState}>修改全区</Button>
    </section>
  );
};

const mapStateToProps = (state: TypeStore) => ({
  ...state
});
const mapDispatchToProps = (dispatch: Dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(PageA);
