import React from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";

const Top = ({ children }) => {
  return <Box border={1}>{children}</Box>;
};

Top.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Top;
