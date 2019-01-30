import { ADDCRYPTOVALUES } from "./constants"

export const addCryptoValues =( cryptovalues ) => ({
  type: ADDCRYPTOVALUES,
  payload: cryptovalues
});



