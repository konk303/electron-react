// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default function FileDownload(props) {
  return (
    <div>
      <SelectField autoWidth value={props.value} onChange={props.changeHandler}>
        <MenuItem value="foo" primaryText="foo" />
        <MenuItem value="bar" primaryText="bar" />
        <MenuItem value="baz" primaryText="baz" />
      </SelectField>
    </div>
  );
}
