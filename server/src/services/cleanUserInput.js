export const cleanUserInput = (formInput) => {
  Object.keys(formInput).forEach((field) => {
    if (formInput[field] == "" || formInput[field] == null || formInput[field] == undefined) {
      delete formInput[field];
    }
  });
  return formInput;
};
