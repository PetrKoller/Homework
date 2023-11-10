const shoppingLists = [
  {
    id: "1",
    name: "My Shopping List",
    ownerId: 1,
    archived: false,
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
  },
  {
    id: "2",
    name: "Basic stuff",
    archived: false,
    ownerId: 2,
    items: [
      {
        id: 1,
        name: "Test",
        completed: false,
      },
      {
        id: 2,
        name: "Tren",
        completed: true,
      },
      {
        id: 2,
        name: "Dbol",
        completed: true,
      },
    ],
    members: [
      {
        id: 2,
        name: "Jan Novak",
      },
      {
        id: 3,
        name: "Petr Novak",
      },
    ],
  },
  {
    id: "3",
    name: "Party hard",
    archived: true,
    ownerId: 1,
    items: [
      {
        id: 1,
        name: "Alcohol",
        completed: false,
      },
      {
        id: 2,
        name: "Drugs",
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
      }
    ]
  },
  {
    id: "4",
    name: "Breaking bad",
    archived: true,
    ownerId: 4,
    items: [
      {
        id: 1,
        name: "Heroin",
        completed: false,
      },
      {
        id: 2,
        name: "Methamphetamine",
        completed: true,
      },
    ],
    members: [
      {
        id: 1,
        name: "Petr Koller",
      },
      {
        id: 3,
        name: "Petr Novak",
      },
      {
        id: 4,
        name: "Jan Koller Other",
      },
    ],
  },
  {
    id: "5",
    name: "Lactose friendly",
    archived: false,
    ownerId: 1,
    items: [
      {
        id: 1,
        name: "Milk",
        completed: false,
      },
      {
        id: 2,
        name: "Yogurt",
        completed: true,
      },
      {
        id: 3,
        name: "Cheese",
        completed: true,
      }
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
  },
]

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

export { shoppingLists, users };
