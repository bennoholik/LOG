// https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
  const answer = [];
  const ans = [];

  for (let i = 0; i < commands.length; i++) {
    let a = commands[i][0];
    let b = commands[i][1];
    answer.push(array.slice(a - 1, b));
    answer[i].sort((a, b) => a - b);
  }

  for (let j = 0; j < answer.length; j++) {
    ans.push(parseInt(answer[j].splice(commands[j][2] - 1, 1)));
  }

  let c = ans;

  return ans;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
