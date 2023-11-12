"use strict";
const ShoppingListAbl = require("../../abl/shopping-list-abl");

class ShoppingListController {
  create(ucEnv) {
    const awid = ucEnv.getUri().getAwid();
    const dtoIn = ucEnv.parameters;
    return ShoppingListAbl.create(awid, dtoIn);
  }

  getAll(ucEnv) {
    const awid = ucEnv.getUri().getAwid();
    const dtoIn = ucEnv.parameters;
    return ShoppingListAbl.getAll(awid, dtoIn);
  }

  detail(ucEnv) {
    const awid = ucEnv.getUri().getAwid();
    const dtoIn = ucEnv.parameters;
    return ShoppingListAbl.detail(awid, dtoIn);
  }

  delete(ucEnv) {
    const awid = ucEnv.getUri().getAwid();
    const dtoIn = ucEnv.parameters;
    return ShoppingListAbl.delete(awid, dtoIn);
  }

  update(ucEnv) {
    const awid = ucEnv.getUri().getAwid();
    const dtoIn = ucEnv.parameters;
    return ShoppingListAbl.update(awid, dtoIn);
  }

  addItem(ucEnv) {
    const awid = ucEnv.getUri().getAwid();
    const dtoIn = ucEnv.parameters;
    return ShoppingListAbl.addItem(awid, dtoIn);
  }

  deleteItem(ucEnv) {
    const awid = ucEnv.getUri().getAwid();
    const dtoIn = ucEnv.parameters;
    return ShoppingListAbl.deleteItem(awid, dtoIn);
  }

  addMember(ucEnv) {
    const awid = ucEnv.getUri().getAwid();
    const dtoIn = ucEnv.parameters;
    return ShoppingListAbl.addMember(awid, dtoIn);
  }

  deleteMember(ucEnv) {
    const awid = ucEnv.getUri().getAwid();
    const dtoIn = ucEnv.parameters;
    return ShoppingListAbl.deleteMember(awid, dtoIn);
  }
}

module.exports = new ShoppingListController();
