import React from 'react';

const RapiDoc = () => {
  return (
    <rapi-doc
      theme = "light"
      show-header = "false"
      spec-url = "https://raw.githubusercontent.com/AdobeDocs/cc-libraries-api-spec/main/openapi.json"
      render-style = "read"
      nav-bg-color="#fafafa"
      bg-color="#fff"
      style = {{ height: "100vh", width: "100%" }}
    />
  )
};

export default RapiDoc