import React from 'react';

interface DataObject {
  [key: string]: any;
}

const Second = () => {
  function updateData(objetoPrincipal: DataObject, novosDados: Partial<DataObject>) {
    for (let chave in novosDados) {
      if (objetoPrincipal.hasOwnProperty(chave)) {
        objetoPrincipal[chave] = novosDados[chave];
      }
    }
    return objetoPrincipal;
  }

  console.log(updateData({ name: "Marcos", country: "Brasil", age: 22 }, { country: "Japão", age: 33 }));
  console.log(updateData({ name: "Marcos", country: "Brasil", age: 22 }, { price: 89.9, amount: 15, description: "camiseta 100% algodão" }));
  console.log(updateData({ name: "Rafael", country: "Chile", age: 42 }, { name: "Camiseta Polo", price: 59.9, amount: 30 }));
  console.log(updateData({ name: "Pedro", country: "Chile", age: 42 }, { type: "Camiseta Polo", price: 59.9, amount: 30, age: 33 }));

  return (
    <div style={containerStyle}>
      <h1>EXERCICIO 2</h1>
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

export default Second;
