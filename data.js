export const colors = [
    {color: '#ed81a1', id: 0, key: 0, isChosen: false}, //pink
    {color: '#be0000', id: 1, key: 1, isChosen: false}, //red
    {color: '#836F6F', id: 2, key: 2, isChosen: false}, //gray
    {color: '#FFE135', id: 3, key: 3, isChosen: false}, //yellow
    {color: '#5BC85B', id: 4, key: 4, isChosen: false}, //green
    {color: '#FF6700', id: 5, key: 5, isChosen: false}, //orange
    {color: '#FFFFFF', id: 6, key: 6, isChosen: false}, //white
    {color: '#800080', id: 7, key: 7, isChosen: false}, //purple
  ];
  export const initialTurns = [
    {a: null, b: null, c: null, d: null},
    {a: null, b: null, c: null, d: null},
    {a: null, b: null, c: null, d: null},
    {a: null, b: null, c: null, d: null},
    {a: null, b: null, c: null, d: null},
    {a: null, b: null, c: null, d: null},
    {a: null, b: null, c: null, d: null},
    {a: null, b: null, c: null, d: null},
    {a: null, b: null, c: null, d: null},
    {a: null, b: null, c: null, d: null},
  ];
  
  export const Results = {
    Empty: 0,
    Shot: 1,
    Bull: 2,
  };
  
  export const initialResults = [
    [Results.Empty, Results.Empty, Results.Empty, Results.Empty],
    [Results.Empty, Results.Empty, Results.Empty, Results.Empty],
    [Results.Empty, Results.Empty, Results.Empty, Results.Empty],
    [Results.Empty, Results.Empty, Results.Empty, Results.Empty],
    [Results.Empty, Results.Empty, Results.Empty, Results.Empty],
    [Results.Empty, Results.Empty, Results.Empty, Results.Empty],
    [Results.Empty, Results.Empty, Results.Empty, Results.Empty],
    [Results.Empty, Results.Empty, Results.Empty, Results.Empty],
    [Results.Empty, Results.Empty, Results.Empty, Results.Empty],
    [Results.Empty, Results.Empty, Results.Empty, Results.Empty],
  ];
  export const arrayDeepClone = arrayToClone => {
    return arrayToClone.map(element => ({...element}));
  };
  
  export const winningURL =
    'https://img.freepik.com/free-vector/you-win-lettering-pop-art-text-banner_185004-60.jpg?size=626&ext=jpg';
  export const menuURL =
    'https://cdn4.vectorstock.com/i/1000x1000/25/23/dartboard-with-dart-over-blue-background-vector-2122523.jpg';
  