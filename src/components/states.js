import { recoilPersist } from "recoil-persist";

const { atom } = require("recoil");
const { persistAtom } = recoilPersist();

const userState = atom({
  key: "user",
  default: {},
  effects_UNSTABLE: [persistAtom],
});

const checkState = atom({
  key: "check",
  default: new Set(),
  effects_UNSTABLE: [persistAtom],
});
const cateState = atom({
  key: "cate",
  default: [[], [], []],
  effects_UNSTABLE: [persistAtom],
});
const nameState = atom({
  key: "name",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
export { userState, cateState, nameState, checkState };
