import React from 'react';
import PropsTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import AuthLayout from '~/pages/_layout/auth';
import DefaultLayout from '~/pages/_layout/default';
import store from '~/store';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signede = store.getState().auth.signed;

  if (!signede && isPrivate) {
    return <Redirect to="/" />;
  }
  if (signede && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signede ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
RouteWrapper.prototype = {
  isPrivate: PropsTypes.bool,
  component: PropsTypes.oneOfType([PropsTypes.element, PropsTypes.func])
    .isRequired,
};
RouteWrapper.defaultProps = {
  isPrivate: false,
};
