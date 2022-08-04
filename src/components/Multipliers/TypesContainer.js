import { typeColor } from "../../data/typeColor";
import "./typesContainer.css";
import { getArrayOfTypesFromObject } from "../../functions/typesfunc";
export const TypesContainer = (props) => {
  const { rawTypes } = props;
  let types = [];

  if (Object.keys(rawTypes).length > 0) {
    types = getArrayOfTypesFromObject(rawTypes);
  }
  // console.log(types)
  return (
    <div className="multipliers-types-container">
      {types.map((iterator, index) => (
        <div
          className="multipliers-type"
          key={index}
          style={{
            "--custom-type-color": typeColor.find(
              (findType) => findType.type === iterator
            ).color,
          }}
        >
          {iterator}
        </div>
      ))}
    </div>
  );
};
