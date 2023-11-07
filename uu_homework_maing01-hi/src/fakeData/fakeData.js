const shoppingListDetail = {
  id: 1,
  name: "My Shopping List",
  ownerId: 1,
  items: [
    {
      id: 1,
      name: "Milk",
      completed: false,
    },
    {
      id: 2,
      name: "Bread",
      completed: true,
    },
  ],
  members: [
    {
      id: 1,
      name: "Petr Koller",
    },
    {
      id: 2,
      name: "Jan Novak",
    },
    {
      id: 3,
      name: "Petr Novak",
    },
  ],
};
const users = [
  {
    id: 1,
    name: "Petr Koller Owner",
  },
  {
    id: 2,
    name: "Jan Novak Member",
  },
  {
    id: 3,
    name: "Petr Novak Member",
  },
  {
    id: 4,
    name: "Jan Koller Other",
  },
];

export { shoppingListDetail, users };
