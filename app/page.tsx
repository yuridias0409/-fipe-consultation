import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>ESCOLHA O EXERCÍCIO A SER CONFERIDO</h1>
      <div style={{ marginTop: '20px' }}>
        <Link id="link" style={buttonStyle} href="/exercicio1/first">Exercício 1</Link>
        <Link id="link" style={buttonStyle} href="/exercicio2/second">Exercício 2</Link>
        <Link id="link" style={buttonStyle} href="/exercicio3/third">Exercício 3</Link>
        <Link id="link" style={buttonStyle} href="/exercicio4/fourth">Exercício 4</Link>
        <Link id="link" style={buttonStyle} href="/tabelaFipe/fipe">Tabela Fipe</Link>
      </div>
    </div>
  );
};

const buttonStyle = {
  backgroundColor: '#4CAF50',
  border: 'none',
  color: 'white',
  padding: '15px 32px',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '4px 2px',
  cursor: 'pointer',
  borderRadius: '12px',
};

export default Page;