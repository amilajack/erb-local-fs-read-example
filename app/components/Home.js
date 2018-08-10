// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fs from 'fs';
import path from 'path';
import { ipcRenderer } from 'electron';
import routes from '../constants/routes.json';
import styles from './Home.css';
import textFile from '../files/foo.txt';

const fileRead = fs.readFileSync(
  path.join(__dirname, '..', 'files', 'foo.txt')
);

ipcRenderer.send('asynchronous-message', 'ping');

ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log(`Loaded file from main process: ${arg}`);
});

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>Home</h2>
        <Link to={routes.COUNTER}>to Counter</Link>
        <span>
          {textFile}
          {fileRead.toString()}
        </span>
      </div>
    );
  }
}
