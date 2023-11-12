"use strict";
const HomeworkMainUseCaseError = require("./homework-main-use-case-error");

const Create = {
  UC_CODE: `${HomeworkMainUseCaseError.ERROR_PREFIX}shopping-list/create/`,

  InvalidDtoIn: class extends HomeworkMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
};

module.exports = {
  Create,
};
