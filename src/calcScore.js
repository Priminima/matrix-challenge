import {alternatives, aspects} from "./sampleData";
const calcScore = (id) => {
  id = id-1;
  console.log("id: " + id);
  let score = 0;
  for (let aspect of aspects) {
    let values = [];
    if (aspect.weight) {
      for (let alternative of alternatives)
        values.push(alternative.values[aspect.id]);
      let relativeValue = 0;
      const min = Math.min(...values);
      const max = Math.max(...values);
      if (aspect.best === "max") {
        relativeValue = (values[id]) / max;
      } else if (aspect.best === "min") {
        relativeValue = min/(values[id]);
      }
      console.log(aspect.id + relativeValue*aspect.weight);
      score += relativeValue*aspect.weight;
    }
  }
  return score;
};

export default calcScore;
