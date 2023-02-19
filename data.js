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
export const loseURL =
  'https://previews.123rf.com/images/lkeskinen/lkeskinen1709/lkeskinen170908913/86154548-you-lose-rubber-stamp.jpg';
export const menuURL =
  'https://cdn4.vectorstock.com/i/1000x1000/25/23/dartboard-with-dart-over-blue-background-vector-2122523.jpg';
export const wheelURL =
  'https://cdn4.iconfinder.com/data/icons/blue-common-symbols-vol-1/1024/cog_wheel_sprocket_piece_gear_app_mobile-512.png';
export const language = {
  he: {
    //------- Game ---------
    showSecretBtn: 'הראה לי את הקוד',
    makeMoveBtn: 'בצע מהלך!',
    backToMainMenuBtn: 'חזרה לתפריט הראשי',
    warningAlertTitle: 'האם אתה בטוח?',
    warningAlertDetails: 'אתה בטוח רוצה לצפות בקוד הסודי עכשיו?',
    yes: 'כן',
    no: 'לא',

    //Menu
    mainTitle: 'בול פגיעה',
    startGameBtn: 'התחל משחק',
    gameSettings: 'הגדרות',

    //--------- Rules ---------
    ruleTitle: 'איך לשחק?',
    ruleSubTitle1: 'מטרת המשחק:',
    ruleSubTitle2: 'מהלך המשחק:',
    text1: 'עליך למצוא את הקוד הסודי המורכב מארבעה צבעים שונים.',
    text2: 'לרשותך 10 תורות. (הראשון מתחיל מהשורה התחתונה).',
    text3: `בכל תור עליך לבחור 4 צבעים שונים בשורה באופן הבא: יש לבחור צבע מרשימת הצבעים בצד. לאחר בחירת הצבע ניתן להציבו בלוח על ידי לחיצה עליו במקום המתאים.`,
    text4: `לאחר שנבחרו ארבעה צבעים, ניתן לסיים את התור. כל עוד התור לא נגמר, ניתן להסיר צבע נבחר מהלוח על ידי לחיצה עליו. לאחר סיום התור, אנו מקבלים רמזים באופן הבא:`,
    text5: `על כל צבע נכון שנמצא במיקום הנכון ברצף, מקבלים "בול" (מסומן בסיכה אדומה). על כל צבע נכון שלא נמצא במיקום הנכון ברצף מקבלים "פגיעה" (סיכה צהובה). המשחק מסתיים בניצחון כאשר כל ארבעת הצבעים מתגלים בעמדה הנכונה (ארבעה "בולים").`,
    backBtn: 'חזרה',

    //------- Settings -----------
    changeLanguageBtn: 'שנה שפה',
    rulesBtn: 'חוקים',
    settings: 'הגדרות',
  },
  en: {
    //------- Game ---------
    showSecretBtn: 'Show Me the secret',
    makeMoveBtn: 'Make a move!',
    backToMainMenuBtn: 'Back to main menu',
    warningAlertTitle: 'Are your sure?',
    warningAlertDetails: 'Are you sure you want to watch the secret code now?',
    yes: 'Yes',
    no: 'No',

    //Menu
    mainTitle: 'The Secret Code',
    startGameBtn: 'Start Game',
    gameSettings: 'Game Settings',

    //--------- Rules ---------
    ruleTitle: 'How To Play?',
    ruleSubTitle1: 'Goal:',
    ruleSubTitle2: 'Gameplay:',
    text1: ' You need to find the code consisting of four different colors.',
    text2: ' You have 10 turns. (The first starts from the bottom line).',
    text3: ` In each turn you must choose 4 different colors in a row as follows:
    You must choose a color from the color list on the side. After the
    color is selected, it can be placed in the board by clicking on the
    board in the appropriate place.`,
    text4: `After four colors have been selected, the turn can be ended. As long
    as the turn is not over, you can remove a selected color from the
    board by clicking on it. After a turn ends, we are given hints as
    follows:`,
    text5: `For each correct color that is in the correct position in the
    sequence, you get a "bull" (indicated by a red pin). For each correct
    color that is not in the correct position in the sequence, you get a
    "hit" (yellow pin). The game ends in victory when all four colors are
    discovered in the correct position (four "bulls").`,
    backBtn: 'Back',

    //------- Settings -----------
    changeLanguageBtn: 'Change Language',
    rulesBtn: 'Rules',
    settings: 'Game Settings',
  },
};
