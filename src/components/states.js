import { recoilPersist } from "recoil-persist";

const { atom } = require("recoil");
const { persistAtom } = recoilPersist();

const userState = atom({
  key: "user",
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export { userState };
