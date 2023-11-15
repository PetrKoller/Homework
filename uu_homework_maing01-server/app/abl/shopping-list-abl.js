 "use strict";
const { Validator } = require("uu_appg01_server").Validation;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
 const { DaoFactory } = require("uu_appg01_server").ObjectStore;
 const ObjectId = require("mongodb").ObjectId;

const Errors = require("../api/errors/shopping-list-error");
const Warnings = require("../api/warnings/shopping-list-warning");
const EXECUTIVES_PROFILE = "Executives";

class ShoppingListAbl {
  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("shoppingList");
  }

  async create(awid, dtoIn, session) {
    let uuAppErrorMap = {};

    // validation of dtoIn
    const validationResult = this.validator.validate("shoppingListCreateDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.Create.UnsupportedKeys.code,
      Errors.Create.InvalidDtoIn
    );

    const ownerId = session.getIdentity().getUuIdentity();

    if(await this.dao.nameExists(awid, dtoIn.name, ownerId)) {
      throw new Errors.Create.ShoppingListAlreadyExists({uuAppErrorMap}, {name: dtoIn.name});
    }

    // prepare and return dtoOut
    dtoIn = {
      ...dtoIn,
      awid,
      ownerId: ownerId,
      items: [],
      members: [],
      archived: false,
    };

    const shoppingList = await this.dao.create(dtoIn);

    return {...shoppingList, uuAppErrorMap};
  }

  async getAll(awid, session, authorizationResult) {
    let uuAppErrorMap = {};
    const shoppingLists = authorizationResult.getAuthorizedProfiles().includes(EXECUTIVES_PROFILE) ?
      await this.dao.getAll(awid) :
      await this.dao.getAllOwnerOrMember(awid, session.getIdentity().getUuIdentity());

    return {
      awid,
      shoppingLists: shoppingLists.itemList,
      uuAppErrorMap};
  }

  async detail(awid, dtoIn) {
    let uuAppErrorMap = {};

    // validation of dtoIn
    const validationResult = this.validator.validate("shoppingListDetailDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.Create.UnsupportedKeys.code,
      Errors.Create.InvalidDtoIn
    );

    const shoppingList = await this.dao.get(awid, dtoIn.id);

    return {...shoppingList, uuAppErrorMap};
  }

  async update(awid, dtoIn) {
    let uuAppErrorMap = {};

    // validation of dtoIn
    const validationResult = this.validator.validate("shoppingListUpdateDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.Create.UnsupportedKeys.code,
      Errors.Create.InvalidDtoIn
    );

    const itemToUpdate = await this.dao.get(awid, dtoIn.id);
    const updatedItem = {
      ...itemToUpdate,
      ...dtoIn,
      awid
      // ownerId: itemToUpdate.ownerId,
    };
    // prepare and return dtoOut
    const shoppingList = await this.dao.update(updatedItem);

    return {...shoppingList, uuAppErrorMap};
  }

  async delete(awid, dtoIn) {
    let uuAppErrorMap = {};

    // validation of dtoIn
    const validationResult = this.validator.validate("shoppingListDetailDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.Create.UnsupportedKeys.code,
      Errors.Create.InvalidDtoIn
    );

    await this.dao.delete(awid, dtoIn.id);

    return {uuAppErrorMap};
  }

  async addItem(awid, dtoIn) {
    let uuAppErrorMap = {};

    // validation of dtoIn
    const validationResult = this.validator.validate("shoppingListAddItemDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.Create.UnsupportedKeys.code,
      Errors.Create.InvalidDtoIn
    );

    let shoppingList = await this.dao.get(awid, dtoIn.shoppingListId);
    shoppingList.items.push({
      name: dtoIn.name,
      id: new ObjectId().toString(),
    });
    shoppingList = await this.dao.update(shoppingList);

    return {...shoppingList, uuAppErrorMap};
  }

  async deleteItem(awid, dtoIn) {
    let uuAppErrorMap = {};

    // validation of dtoIn
    const validationResult = this.validator.validate("shoppingListDeleteItemDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.Create.UnsupportedKeys.code,
      Errors.Create.InvalidDtoIn
    );

    const shoppingList = await this.dao.deleteItem(awid, dtoIn.shoppingListId, dtoIn.id);

    return {...shoppingList, uuAppErrorMap};
  }

  async addMember(awid, dtoIn) {
    let uuAppErrorMap = {};

    // validation of dtoIn
    const validationResult = this.validator.validate("shoppingListAddMemberDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.Create.UnsupportedKeys.code,
      Errors.Create.InvalidDtoIn
    );

    let shoppingList = await this.dao.get(awid, dtoIn.shoppingListId);
    shoppingList.members.push(dtoIn.id);
    shoppingList = await this.dao.update(shoppingList);

    return {...shoppingList, uuAppErrorMap};
  }

  async deleteMember(awid, dtoIn) {
    let uuAppErrorMap = {};

    // validation of dtoIn
    const validationResult = this.validator.validate("shoppingListDeleteMemberDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.Create.UnsupportedKeys.code,
      Errors.Create.InvalidDtoIn
    );

    const shoppingList = await this.dao.deleteMember(awid, dtoIn.shoppingListId, dtoIn.id);

    return {...shoppingList, uuAppErrorMap};
  }
}

module.exports = new ShoppingListAbl();
