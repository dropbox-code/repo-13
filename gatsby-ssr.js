import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script src="https://unpkg.com/rapidoc/dist/rapidoc-min.js"/>
  ])
};