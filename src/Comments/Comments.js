import React from "react";
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

function Comments() {
  let { path, url } = useRouteMatch();

  return (
    <div style={{ margin: "1rem" }}>
      <h2>Choose comments demo:</h2>
      <nav style={{ display: "flex", flexDirection: "column" }}>
        <Link to={`${url}/create-comment`}>Create</Link>
        <Link to={`${url}/get-comment`}>Get</Link>
        <Link to={`${url}/update-comment`}>Update</Link>
        <Link to={`${url}/delete-comment`}>Delete</Link>
        <Link to={`${url}/vote-comment`}>Vote</Link>
        <Link to={`${url}/flag-comment`}>Flag</Link>
      </nav>

      <Switch>
        <Route path={`${path}/:demo`}>
          <CommentsDemo />
        </Route>
      </Switch>
    </div>
  );
}

function CommentsDemo() {
  let { demo } = useParams();

  return (
    <div>
      <h4>{demo}</h4>
    </div>
  );
}

export default Comments;
