let gameboardArr = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];

let gameboard = {
  gameboardArr
};

let gameFlow = {};

const playerFactory = (name) => {
  const move = () => console.log('move');
  return {name};
};

const player1 = playerFactory('jon');
