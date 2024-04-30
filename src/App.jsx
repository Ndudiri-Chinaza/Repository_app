import SingleRepository from  './SinglePage';
import Repo from "./Repositories";
import NotFoundPage from './NotFoundPage';
import ErrorBoundary from './ErrorBoundary';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Fallback from './Fallback';

function App() {
  return (
    <>
      {/* <div className="app">
        <Repo username={username} />
      </div> */}
      <ErrorBoundary fallback={Fallback} onReset={() => {}}>
        {/* <Router> */}
          <Routes>
            <Route exact path="/" element={<Repo />} />
            <Route
              exact
              path="/Repository/:id"
              element={<SingleRepository />}
            />
            <Route exact path="*" element={<NotFoundPage />} />
          
          </Routes>
        {/* </Router> */}
      </ErrorBoundary>
    </>
  );
}

export default App;
