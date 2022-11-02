const { atom } = require("recoil");

const userState = atom({
  key: "user",
  default: {},
});

export { userState };
