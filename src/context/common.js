import React, { createContext } from 'react';
import PropTypes from 'prop-types';

import CommonReducer from '../reducers/common';

const CommonContext = createContext();

const CommonContextProvider = (props) => {
  const { children } = props;
  return (
    <CommonContext.Provider value={CommonReducer()}>
      { children }
    </CommonContext.Provider>
  );
};

CommonContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CommonContext, CommonContextProvider };
