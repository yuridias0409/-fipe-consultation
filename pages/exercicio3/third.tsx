import React from 'react';

interface DataObject { name: string; gender: any; image: any; species: any; }

const Third = () => {
  const characters = ['Rick Sanchez', 'Morty Smith', 'Summer Smith', 'Beth Smith', 'Jerry Smith'];

  function fetchDataFromAPI() {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao obter os dados da API');
        }
        return response.json();
      })
      .then(data => {
        console.log(data.results.map((character: DataObject) => {
          if(characters.includes(character.name)){
            return {
              nome: character.name,
              genero: character.gender,
              avatar: character.image,
              especie: character.species
            }
          };
          return null;
        }).filter((item: null) => item !== null));
      })
      .catch(error => {
        console.error('Erro ao buscar dados da API:', error);
      });
  }

  fetchDataFromAPI();

  return (
    <div style={containerStyle}>
      <h1>EXERCICIO 3</h1>
      <h2>Abra o console 😊</h2>
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

export default Third;
