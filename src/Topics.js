import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
          {match.url}
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
          {match.url}
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
         {match.url}
        </Link>
      </li>
    </ul>

    <Route exact path={match.url} render={() => (
      <h3>Please select a topic. {match.url}</h3>
    )}/>
  </div>
)
export default Topics;