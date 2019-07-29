import React from "react";
import fbConfig from "../../config/fbConfig";

const logout = () => {
  return fbConfig.auth().signOut();
};

export default logout;
