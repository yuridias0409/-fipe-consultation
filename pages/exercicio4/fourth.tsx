import React from 'react';

const Fourth = () => {
  function checkIfTheFirstLetterIsUppercase(string: string) {
    return string.charAt(0) === string.charAt(0).toUpperCase();
  }

  console.log("Brasil: ", checkIfTheFirstLetterIsUppercase("Brasil"));
  console.log("mobiauto: ", checkIfTheFirstLetterIsUppercase("mobiauto"));
  console.log("xXx xXx: ", checkIfTheFirstLetterIsUppercase("xXx xXx"));
  console.log("xDD: ", checkIfTheFirstLetterIsUppercase("xDD"));
  console.log("Deu Certo!: ", checkIfTheFirstLetterIsUppercase("Deu Certo!"));

  return (
    <div style={containerStyle}>
      <h1>EXERCICIO 4</h1>
      <h2>Abra o console 😊</h2>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

export default Fourth;
