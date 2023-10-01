import React from "react";
import { Redirect } from "react-router-dom";
import { getAccountPermission } from "../services/util/auth"

// This HOC checks if the user has the required permission
const WithPermission = (WrappedComponent, requiredPermission) => {
  return class extends React.Component {
    render() {
      // Assuming you have a user object with permissions
      const permission = JSON.parse(getAccountPermission());

      if (permission && permission.access_levels.includes(requiredPermission)) {
        return <WrappedComponent {...this.props} />;
      } else {
        // Redirect or display an access denied message
        return <Redirect to="/login" />;
      }
    }
  };
};

export default WithPermission;
