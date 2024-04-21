import React, {useState, useEffect} from "react";
import axios from "axios";

const Repo = ({userName}) => {
  const [Repositories, setRepositories] = useState([])

  
  useEffect(() =>{
    fetchRepo();
  }, []);
    const fetchRepo = async () =>{

      try{
        // fetching the repo using axios

        const response = await axios.get(`https://api.github.com/users/${userName}/repos`);

       setRepositories(response.data);
       console.log(response.data)
      } catch (error){
        console.error("error fetching repo", error)
      }

    };
  return (
    <div>
      <h1>My GitHub Repositories</h1>

      <ul>
        {Repositories.map((repo) => (
         <li key = {repo.id}>
          <a href= {repo.html_url}>{repo.name}</a>

         </li>

        )) }
      </ul>
    </div>

  )
};

export default Repo;