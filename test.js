// const a = [1, 2, 3, 4, 5];

// const b = a.map((v, i) => {
//   //   if (i === 2 || i === 3 || i === 4) {
//   //     return 0;
//   //   } else {
//   //     return v;
//   //   }
//   if (i > 1) {
//     return 0;
//   } else {
//     return v;
//   }
// });

// console.log(b);

const k = {
  id: 2,
  name: "hello",
};

const a = [
  {
    id: 1,
    name: "hello",
  },
  {
    id: 2,
    name: "subong",
  },
  {
    id: 3,
    name: "heesu",
  },
];

// const b = a.map((v, i) => {
//   if (v.id === k.id) {
//     v.name = k.name;
//     return v;
//   } else {
//     return v;
//   }
// });

// console.log(b);

const deleteId = 2;

const b = a.filter((v) => {
  if (v.id === deleteId) {
    return false;
  } else {
    return true;
  }
});

console.log(b);
