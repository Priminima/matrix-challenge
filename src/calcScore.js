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
  const index = id-1; // This is to get the index of the id, should preferably
                      // be replaced to a function that actually search for
                      // the id. Or the data could be reformed so the id is the
                      // key in the data structure.
  let score = 0;
  let sumOfWeights = 0;
  for (let aspect of aspects) {
    if (aspect.weight) {
      let values = [];
      // Create a list with all alternative values for this aspect
      for (let alternative of alternatives) {
        values.push(alternative.values[aspect.id]);
      }

      const relativeValue = calcRelativeValue(values, aspect.best, values[index]);
      score += relativeValue*aspect.weight;
      sumOfWeights += aspect.weight;
    }
  }
  return Math.round((score/sumOfWeights)*10);
};

export default calcScore;
