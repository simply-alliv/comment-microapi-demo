import React from "react";
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

function CreateReply() {
  let { path, url } = useRouteMatch();

  return (
    <div style={{ margin: "1rem" }}>
      <h2>Choose replies demo:</h2>
      <nav style={{ display: "flex", flexDirection: "column" }}>
        <Link to={`${url}/create-reply`}>Create</Link>
        <Link to={`${url}/get-reply`}>Get</Link>
        <Link to={`${url}/update-reply`}>Update</Link>
        <Link to={`${url}/delete-reply`}>Delete</Link>
        <Link to={`${url}/vote-reply`}>Vote</Link>
        <Link to={`${url}/flag-reply`}>Flag</Link>
      </nav>

      <Switch>
        <Route path={`${path}/:demo`}>
          <RepliesDemo />
        </Route>
      </Switch>
    </div>
  );
}

function RepliesDemo() {
  let { demo } = useParams();

  return (
    <div>
      <h4>{demo}</h4>
    </div>
  );
}

export default CreateReply;
