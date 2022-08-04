import { calcPoints2 } from "./utils";

export const getArrayOfTypesFromObject = (rawTypes) => {
  let types = [];
  Object.keys(rawTypes).forEach((type) => {
    if (rawTypes[type]) {
      types.push(type);
    }
  });
  // console.log(types)
  return types;
};

export const getPoints = (attackTypes, defenceTypes, types) => {
  const arrayTypes1 = getArrayOfTypesFromObject(attackTypes);
  const arrayTypes2 = getArrayOfTypesFromObject(defenceTypes);
  const attackPoints = calcPoints2(arrayTypes1, arrayTypes2, types).toFixed(2);
  const defencePoints = calcPoints2(arrayTypes2, arrayTypes1, types).toFixed(2);

  // console.log(attackPoints)

  return { attack: attackPoints, defence: defencePoints };
};
