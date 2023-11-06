const authUser = {
  id: 1,
  name: "Petr Koller"
}

const shoppingListDetail = {
  id: 1,
  name: "My Shopping List",
  ownerId: 1,
  items: [
      {
        id: 1,
        name: "Milk",
        completed: false
      },
    {
      id: 2,
      name: "Bread",
      completed: true
    }
  ]
}

export {authUser, shoppingListDetail};
