import Repo from "./assets/Repositories";
// import NotFoundPage from './NotFoundPage';
// import ErrorBoundary from './ErrorBoundary';
// import ErrorPage from './ErrorPage';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const username = "Ndudiri-Chinaza";

  return (
    <>
      <div className="app">
        <Repo username={username} />
      </div>
    </>
  );
}

export default App;
