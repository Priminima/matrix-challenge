import {alternatives, aspects} from "./sampleData";
const calcScore = (id) => {
  console.log(id);
  let score = 0;
  for (let a of aspects) {
    const value = alternatives[id-1].values[a.id];
    console.log(a);
    if (a.weight) {
        score +=  value * a.weight;
        console.log(score);
    }
  }
  return score;
};

export default calcScore;
