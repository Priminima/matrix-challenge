import {alternatives, aspects} from "./sampleData";

/** Calculates a percent that represents how far the
 * value are from the best value in values
 *
 * @values an array of numbers
 * @best a string that is either "max" or "min"
 * @value the value that you want to convert to a relative value
 * */
export const calcRelativeValue = (values, best, value) => {
  let relativeValue = 0;
  const min = Math.min(...values);
  const max = Math.max(...values);
  if (best === "max") {
    relativeValue = value / max;
  } else if (best === "min") {
    relativeValue = min / value;
  }
  return relativeValue;
};

/** Calculates a score between 0 and 10 for a product
 * @id the id of the product
 * */
const calcScore = (id) => {
  id = id-1;
  let score = 0;
  let sumOfWeights = 0;
  for (let aspect of aspects) {
    if (aspect.weight) {
      let values = [];
      for (let alternative of alternatives) {
        values.push(alternative.values[aspect.id]);
      }

      const relativeValue = calcRelativeValue(values, aspect.best, values[id]);
      score += relativeValue*aspect.weight;
      sumOfWeights += aspect.weight;
    }
  }
  return Math.round(score/sumOfWeights*10);
};

export default calcScore;
