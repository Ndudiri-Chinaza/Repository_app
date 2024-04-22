import React, {useState, useEffect} from "react";
import {userParams} from "react-route-dom";
import axios from "axios";


const RepositoriesDetails = ( {userName}) => {
  const {repoId} = userParams();
  const [repoDetails, setRepoDetails] = useState(null);

  useEffect( () => {
    const fetchRepoDetails = async() => {
      try{
        const response = await axios.get(
          `https://api.github.com/repos/Ndudiri-Chinaza/${repoId}`
        );
        setRepoDetails(response.data);
      } catch (error) {
        console.log("Error fetching repository details:", error);
      }
    };
    fetchRepoDetails();
  }, [repoId]);

  if(!repoDetails) {
    return <div>Loading...</div>
  };

  return (
    <div className="repo_details">
      <h2>{repoDetails.name}</h2>
      <p>{repoDetails.description}</p>

    </div>
  );
};

export default RepositoriesDetails;