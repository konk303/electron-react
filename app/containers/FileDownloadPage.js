// @flow
import React, { Component } from 'react';
import FileDownload from '../components/FileDownload';

export default class FileDownloadPage extends Component {
  state = {
    value: 'foo'
  }
  handleChange = (event, index, value) => {
    console.log('hoge', event, index, value);
    // this.setState({value});
  }

  render() {
    return (
      <FileDownload value={this.state.value} changeHandler={this.handleChange}/>
    );
  }
}
