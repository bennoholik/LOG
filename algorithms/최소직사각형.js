function solution(sizes) {
  var answer = 0;
  var width = [],
    height = [];
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) {
      width.push(sizes[i][1]);
      height.push(sizes[i][0]);
    } else {
      width.push(sizes[i][0]);
      height.push(sizes[i][1]);
    }
  }
  answer = Math.max(...width) * Math.max(...height);
  //전개연산자를 사용해서 배열의 모든요소를 나열하여 값을 비교. 전개연산자 없이 하면 배열 자체 내에서 최댓값 찾기 어렵다.
  return answer;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
); //4000
console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
); //120
console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
); //133
