const quizArr = [
  {
    id: 1,
      question: "Muslims will often write the initials P.B.U.H. after the name of a prophet. What does this mean?",
      options: {
        A: "Please be utterly happy",
        B: "Peace be upon him",
        C: "Peace be under heaven",
        D: "Peace be up high",
      },
      answer: "B",  
    },
    {
       id: 2,	
      question: "In which direction do Muslims face when praying?",
      "options": {
        A: "Towards Mecca",
        B: "Towards Istanbul",
        C: "Towards Rome",
        D: "Towards Jerusalem",
      },
      answer: "A",
    },
    {
       id: 3,   	
       question: "The name Islam comes from the word 'Salaam', which means .......",
       options: {
        A: "love",
        B: "freedom",
        C: "peace",
        D: "justice",
      },
      "answer": "C",
    },
    {
      id: 4,  
      question: "The holy month of prayer, fasting and pilgrimage is known as .......",
      options: { 
       A: "Spring",
       B: "Eid",
       C: "Ramadan",
       D: "Shahadah",
      },
      answer: "C",
    },
    {
      id: 5,  
      question: "How many times a day should Muslims pray?",
      options: {
      A: "Once",
      B: "Twice",
      C: "Four times",
      D: "Five times"
      },
      answer: "D",
    },
    { 
      id: 6,
      question: "Which of the following is NOT a holy and sacred book in Islam?",
      options: {
       A: "The Koran",
       B: "The Psalms",
       C: "The Bible",
       D: "De Anima"
      },
      answer: "D",
    },
     {
      id: 7,    	
      question: "Where do Muslims go to worship?",
      options: {
        A: "temple",
        B: "church",
        C: "synagogue",
        D: "mosque",
      },
      answer: "D",
      
    },
    { 
      id: 8,
      question: "How many pillars of Islam are there?",
      options: {
       A: "Four",
       B: "Five",
       C: "Eight",
       D: "Ten",
      },
      answer: "B",
      
    },
    { 
      id: 9,  
      question: "One of the pillars of Islam is Salah, which means .......",
      options: {
       A: "prayer",
       B: "fasting",
       C: "giving to charity",
       D: "pilgrimage"
       },  
      answer: "A",
      
    },
    {
       id: 10, 
       question: "What is the name for the pilgrimage to Mecca which all faithful Muslims must try to undertake at least once?",
       options: {
       A: "Shahadah",
       B: "Salah",
       C: "Hajj",
       D  "Zakah",
      },
      answer: "C",
      "explanation": "Mecca is a city in Saudi Arabia"
  },
  {
    id: 11,
    question: "What is the correct way to create a closure in JavaScript?",
    options: {
      A: "function myFunction(){var x = 10; return function(){return x}}",
      B: "function myFunction(){let x = 10; return function(){return x}}",
      C: "function myFunction(){const x = 10; return function(){return x}}",
      D: "function myFunction(){x = 10; return function(){return x}}",
    },
    answer: "A",
  },
  {
    id: 12,
    question: "What is the difference between == and ===?",
    options: {
      A: "== checks for equality and === checks for identity",
      B: "== checks for identity and === checks for equality",
      C: "== and === checks for equality",
      D: "== and === checks for identity",
    },
    answer: "A",
  },
  {
    id: 13,
    question: "What is the correct way to check if a variable is an array?",
    options: {
      A: "Array.isArray(myArray)",
      B: "myArray instanceof Array",
      C: "myArray.isArray()",
      D: "typeof myArray === 'array'",
    },
    answer: "A",
  },
  {
    id: 14,
    question: "What is the correct way to declare a class in javascript?",
    options: {
      A: "class MyClass{}",
      B: "function MyClass(){}",
      C: "new MyClass(){}",
      D: "MyClass: function(){}",
    },
    answer: "A",
  },
  {
    id: 15,
    question: "What is the correct way to check if a variable is undefined?",
    options: {
      A: "typeof myVariable === undefined",
      B: "myVariable === undefined",
      C: "myVariable == undefined",
      D: "myVariable === 'undefined'",
    },
    answer: "B",
  },
  {
    id: 16,
    question:
      "What is the correct way to convert a string to a number in javascript?",
    options: {
      A: "parseInt(string)",
      B: "parseFloat(string)",
      C: "Number(string)",
      D: "string - 0",
    },
    answer: "C",
  },
  {
    id: 17,
    question: "What is the correct way to declare a Map in javascript?",
    options: {
      A: "var myMap = new Map();",
      B: "var myMap = {};",
      C: "var myMap = Object.create(null);",
      D: "var myMap = new Object.create(null);",
    },
    answer: "A",
  },
  {
    id: 18,
    question: "What is the difference between null and undefined?",
    options: {
      A: "null and undefined are same",
      B: "null is an assignment value and undefined is a default value",
      C: "undefined is an assignment value and null is a default value",
      D: "null is an object and undefined is not an object",
    },
    answer: "B",
  },
  {
    id: 19,
    question:
      "What is the correct way to check if a variable is a number in javascript?",
    options: {
      A: "typeof myVariable === 'number'",
      B: "isNaN(myVariable)",
      C: "myVariable instanceof Number",
      D: "Number.isFinite(myVariable)",
    },
    answer: "D",
  },
  {
    id: 20,
    question:
      "What is the correct way to check if a variable is an object in javascript?",
    options: {
      A: "typeof myVariable === 'object'",
      B: "myVariable instanceof Object",
      C: "Object.isObject(myVariable)",
      D: "myVariable.constructor === Object",
    },
    answer: "D",
  },
];
