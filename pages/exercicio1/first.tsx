import React, { useState } from 'react';

const First = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputMasked, setInputMasked] = useState('');

  function maskify() {
    setInputMasked(inputValue.replace(/.(?=.{4})/g, '#'));
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={(e) => e.preventDefault()} style={formStyle}>
        <h1>EXERCICIO 1</h1>
        <input 
          type="text" 
          value={inputValue} 
          onChange={handleInputChange} 
          placeholder="Digite o texto aqui" 
          style={inputStyle}
        />
        <button onClick={maskify} style={buttonStyle}>Mascarar</button>
        {inputMasked && <p>Resultado: {inputMasked}</p>}
      </form>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#f5f5f5',
};

const inputStyle = {
  margin: '10px',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  margin: '10px',
  padding: '10px',
  borderRadius: '5px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
};

export default First;
