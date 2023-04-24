import React from "react";

const ErrorPage = () => {
  return (
    <div style={{ display: "grid", placeItems: "center", minHeight: "100vh" }}>
      <div style={{textAlign: 'center'}}>
        <h2 style={{marginBottom: '2rem'}}>Erro na busca pelo usuário.</h2>
        <a href="/api-github/">Voltar para a home</a>
      </div>
    </div>
  );
};

export default ErrorPage;
