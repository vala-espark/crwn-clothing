import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import HomePage from './Pages/homePage/HomePage';
import './App.scss';


// const HomePage = (props) => {
//   console.log(props);
//   return (
//     <>
//       <Link to="/topic" exact="">
//         Topics
//       </Link>
//       <br />
//       <button onClick={() => props.history.push('/topic')}>Topics</button>
//       <h1>HOME PAGE</h1>
//     </>
//   );
// }
const TopicList = (props) => {
  console.log(props);
  return (
    <>
    <button onClick={() => props.history.push('/')}>Home</button>
      <h1>Topic Pages</h1>

      <Link to={`${props.match.url}/13`}>TO Topic 13</Link>
      <Link to={`${props.match.url}/14`}>TO Topic 14</Link>
      <Link to={`${props.match.url}/15`}>TO Topic 15</Link>
    </>
  );
}
const TopicDetails = (props) => {
  console.log(props);
  return (
    <>
    <button onClick={() => props.history.push('/')}>Home</button>
      <h1>Topic Details Pages: {props.match.params.topicid}</h1>
    </>
  );
}

const ErrorPage = () => {
  return (
    <>
      <h1>404 Pages</h1>
    </>
  );
}
const Hats = (props) => {
  console.log(props);
  return (
    <>
      <h1>Hats Pages</h1>
    </>
  );
}

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={Hats} />
        {/* <Route exact path="/topic" component={TopicList} />
        <Route exact path="/topic/:topicid" component={TopicDetails} />
        <Route component={ErrorPage}></Route> */}
      </Switch>
    </>
  );
}

export default App;
