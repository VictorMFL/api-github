import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./Repositories";

import { Loading, Carregamento, Container, Sidebar, Main } from "./styles";
import { getUser, getRepos, getLangsFrom } from "../../services/api";
import ErrorPage from "../../components/ErrorPage";

const RepositoriesPage = () => {
  const { login } = useParams();
  const [user, setUser] = useState();
  const [repositories, setRepositories] = useState();
  const [languages, setLanguages] = useState();
  const [currentLanguage, setCurrentLanguage] = useState();
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = React.useState(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        const [userResponse, repositoriesResponse] = await Promise.all([
          getUser(login),
          getRepos(login),
        ]);
  
        setUser(userResponse.data);
        setRepositories(repositoriesResponse.data);
        setLanguages(getLangsFrom(repositoriesResponse.data));
  
        
      } catch(error) {
        console.log(error)
        setErro(true)
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  if(erro) return <ErrorPage />
  if (loading) {
    return (
      <Loading>
        <Carregamento />
      </Loading>
    );
  }
  if(user === null) return <p>erro</p>
  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter
          languages={languages}
          currentLanguage={currentLanguage}
          onClick={onFilterClick}
        />
      </Sidebar>
      <Main>
        <Repositories
          repositories={repositories}
          currentLanguage={currentLanguage}
        />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
