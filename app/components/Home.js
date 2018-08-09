// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fs from 'fs';
import path from 'path';
import routes from '../constants/routes.json';
import styles from './Home.css';
import textFile from '../files/foo.txt';

console.log(textFile);
const fileRead = fs.readFileSync(
  path.join(__dirname, '..', 'files', 'foo.txt')
);

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>Home</h2>
        {textFile}
        {fileRead.toString()}
        <Link to={routes.COUNTER}>to Counter</Link>
      </div>
    );
  }
}
