function solution(skill, skillTrees) {
  let count = 0;
  const skillArr = skill.split('');
  const array = Array.from({ length: skillTrees.length  }, () => true);
  
skillTrees.map((skillTree, i) => {
    let currIdx = 0;
    for (let v of skillTree) {
      if (skillArr.includes(v)) {
        if (v !== skillArr[currIdx]) {
          array[i] = false;
          break;
        } else {
          if (currIdx < skillArr.length - 1) currIdx++;
        }
      }
    }
  });

    
  const answer = array.filter(v => v);
  return answer.length;
}
