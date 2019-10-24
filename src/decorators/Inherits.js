import { inherits } from "../utils/inherits";

export function Inherits(base, baseAttrsOverride) {
  return element => inherits(element, base, baseAttrsOverride);
}
