import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleRepository = () => {
  const { id } = useParams();
  const [repository, setRepository] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepository = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/Ndudiri-Chinaza/${id}`
        );
        setRepository(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching repositories:", error);
        setLoading(false);
      }
    };
      fetchRepository();
  }, []);

  console.log(repository);

  return (
    <div className="single_page">
      <p>Fullname: {repository?.full_name} </p>
      <p>Name: {repository?.name} </p>
      <p>Creation Date: {repository?.created_at} </p>
      <p>Default Branch: {repository?.default_branch} </p>
      <p>Forks: {repository?.forks} </p>
      <p>Watchers: {repository?.watchers} </p>
      <p>Language: {repository?.language} </p>
      <p>Open Issues: {repository?.open_issues} </p>
      <p>Network Count: {repository?.network_count} </p>
      <p>Size: {repository?.size} </p>
      <p>Stargazers Count: {repository?.stargazers_count} </p>
      <p>Id: {repository?.id} </p>


      <a href="/">Home page</a>
    </div>
  );
};

export default SingleRepository;
