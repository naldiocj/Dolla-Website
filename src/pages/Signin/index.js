import React from 'react';
import { Scroll } from 'react-scroll/modules/mixins/Helpers';
import SigninForm from '../../components/SigninForm';
import ScrollToTop from '../../utils/ScrollToTop';

function Signin() {
  return (
    <>
      <ScrollToTop />
      <SigninForm />
    </>
  );
}

export default Signin;
