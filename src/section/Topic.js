import React from "react";
import { Route, Link } from "react-router-dom";
import Match from "../section/match";

export default function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/Match`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route path={`${match.path}/Match`} component={Match} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}
export function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId} </h3>
    </div>
  );
}
