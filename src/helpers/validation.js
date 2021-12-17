export const isValidString = (value) => {
  console.log(
    "🚀 ~ file: validation.js ~ line 2 ~ isValidString ~ value",
    value
  );
  return value.trim().length > 1;
};

export const isValidEmail = (value) => {
  console.log(
    "🚀 ~ file: validation.js ~ line 7 ~ isValidEmail ~ value",
    value
  );
  return (
    value
      .trim()
      .match(
        /^(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]+)])$/i
      ) !== null
  );
};

export const isValidTime = (value) => {
  console.log(value.split(":").length);
  return value.split(":").length === 2;
};
