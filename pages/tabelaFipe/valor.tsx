import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Valor = () => {
  const router = useRouter();
  const [carData, setCarData] = useState(null);

  useEffect(() => {
    const { marca, modelo, ano } = router.query;
    
    if (marca && modelo && ano) {
      fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${marca}/modelos/${modelo}/anos/${ano}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro ao obter os dados da API');
          }
          return response.json();
        })
        .then(data => {
          setCarData(data);
        })
        .catch(error => {
          console.error('Erro ao buscar dados da API:', error);
        });
    }
  }, [router.query]);

  if (!carData) {
    return <p>Carregando...</p>;
  }

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={titleStyle}>Tabela Fipe: Preço {carData.Marca} {carData.Modelo}</h1>
        <div style={valueContainerStyle}>
          <div style={valueBackgroundStyle}>
            <p style={valueStyle}>{carData.Valor}</p>
          </div>
        </div>
        <p style={noteStyle}>Este é o preço de compra do veículo</p>
      </div>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '25vh',
  backgroundColor: '#dcf5f2',
};

const contentStyle = {
  textAlign: 'center',
};

const titleStyle = {
  fontWeight: 'bold',
};

const valueContainerStyle = {
  display: 'inline-block',
};

const valueBackgroundStyle = {
  backgroundColor: '#00a38c',
  borderRadius: '40px',
  padding: '5px 20px',
};

const valueStyle = {
  color: 'white',
  fontWeight: 'bold',
  fontSize: '24px',
};

const noteStyle = {
  color: 'gray',
  fontSize: '14px',
};

export default Valor;
