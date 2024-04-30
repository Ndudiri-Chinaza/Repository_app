import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Repository.css";
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import ErrorBoundary from "./ErrorBoundary";
import Paginate from "./Paginate";
import ErrorThrower from "./ErrorThrower";

const Repo = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(4); 
  const gitToken = import.meta.env.VITE_GITHUB_TOKEN; 

  useEffect(() => {
    fetchRepositories();
  }, [currentPage]);

  const fetchRepositories = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/Ndudiri-Chinaza/repos`,
        {
        
          headers: { Authorization: `Bearer ${gitToken}` },
        }
      );
      setRepositories(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching repositories:", error);
      setLoading(false);
      navigate('/error'); 
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); 
  };

  const filteredRepositories = repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const lastIndex = currentPage * perPage;
  const firstIndex = lastIndex - perPage;
  const totalItems = filteredRepositories.length;
  const currentItems = filteredRepositories.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(totalItems / perPage);
  const handleNextPage = () => {
    setPage(page + 1);
  };
  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <ErrorBoundary>
      <div className="repository-container">
        <h2 className="repo-head">GitHub Repositories</h2>
        <input
          type="text"
          placeholder="Search repositories..."
          className="search-repo"
          value={searchQuery}
          onChange={handleSearch}
        />
        {loading && <h3>Loading...</h3>}
        <Button className="p404" onClick={() => navigate('/not-found')}>Test 404</Button>

        <ul className="repository-list">
            {currentItems.map((repo) => (
                <li key={repo.id}>
                  <a href={`/repository/${repo.name}`} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
              {repo.description && <p>{repo.description}</p>}
                </li>
              ))}
        </ul>
        
        <Paginate
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
       />
      </div>
       <ErrorThrower/>
    </ErrorBoundary>
  );
};
export default Repo;












