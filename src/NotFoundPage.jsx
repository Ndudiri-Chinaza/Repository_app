import React from "react";
import { Link } from 'react-router-dom';


const NotFoundPage = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for does not exist.</p>
      <p className="not-found-message">
        Go back to{" "}
        <Link className="not-found-link" to="/">
          homepage
        </Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
