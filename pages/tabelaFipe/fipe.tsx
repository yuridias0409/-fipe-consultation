import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const TabelaFipe = () => {
  const [brandList, setBrandList] = useState([]);
  const [modelsList, setModelsList] = useState([]);
  const [yearsList, setYearsList] = useState([]);
  const [selectedBrandCode, setSelectedBrandCode] = useState('');
  const [selectedModelCode, setSelectedModelCode] = useState('');
  const [selectedYearCode, setSelectedYearCode] = useState('');

  useEffect(() => {
    fetchBrandDataFromAPI();
  }, []);

  const fetchBrandDataFromAPI = () => {
    fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao obter os dados da API');
        }
        return response.json();
      })
      .then(data => {
        setBrandList(data);
      })
      .catch(error => {
        console.error('Erro ao buscar dados da API:', error);
      });
  }

  const handleBrandSelected = (brandCode) => {
    setSelectedBrandCode(brandCode);
    fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandCode}/modelos`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao obter os dados da API');
        }
        return response.json();
      })
      .then(data => {
        setModelsList(data.modelos);
        setYearsList([]);
      })
      .catch(error => {
        console.error('Erro ao buscar dados da API:', error);
      });
  }

  const handleModelSelected = (modelCode) => {
    setSelectedModelCode(modelCode);
    fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${selectedBrandCode}/modelos/${modelCode}/anos`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao obter os dados da API');
        }
        return response.json();
      })
      .then(data => {
        setYearsList(data);
      })
      .catch(error => {
        console.error('Erro ao buscar dados da API:', error);
      });
  }

  return (
    <div style={containerStyle}>
      <h1>Tabela Fipe</h1>
      <h2>Consulte o valor de um veículo de forma gratuita</h2>
      <form onSubmit={(e) => e.preventDefault()} style={formStyle}>
        <select style={selectStyle} onChange={(e) => handleBrandSelected(e.target.value)}>
          <option value="" disabled selected={!selectedBrandCode}>Selecione uma marca</option>
          {brandList.map(brand => (
            <option key={brand.codigo} value={brand.codigo}>{brand.nome}</option>
          ))}
        </select>
        <select style={selectStyle} onChange={(e) => handleModelSelected(e.target.value)} disabled={!selectedBrandCode}>
          <option value="" disabled selected={!selectedModelCode}>Selecione um modelo</option>
          {modelsList.map(model => (
            <option key={model.codigo} value={model.codigo}>{model.nome}</option>
          ))}
        </select>
        <select style={selectStyle} onChange={(e) => setSelectedYearCode(e.target.value)} disabled={!selectedModelCode}>
          <option value="" disabled selected={!selectedYearCode}>Selecione um ano</option>
          {yearsList.map(year => (
            <option key={year.codigo} value={year.codigo}>{year.nome}</option>
          ))}
        </select>
        <Link href={`/tabelaFipe/valor?marca=${selectedBrandCode}&modelo=${selectedModelCode}&ano=${selectedYearCode}`}>
          <button style={{ ...buttonStyle, backgroundColor: (!selectedBrandCode || !selectedModelCode || !selectedYearCode) ? '#ccc' : '#6c1fe9' }} disabled={!selectedBrandCode || !selectedModelCode || !selectedYearCode}>Consultar Preço</button>
        </Link>
      </form>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f9f6fc',
  minHeight: '55vh',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#ffffff',
};

const selectStyle = {
  margin: '10px',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  width: '300px',
};

const buttonStyle = {
  margin: '10px',
  padding: '10px',
  borderRadius: '5px',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
};

export default TabelaFipe;
