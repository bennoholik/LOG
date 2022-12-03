function solution(numbers) {
    let answer = [];
    for(let i = 0; i < numbers.length; i++){
        for(let j = i + 1; j < numbers.length; j++){
            let sum = numbers[i] + numbers[j]
            console.log(sum)
            if (answer.indexOf(sum) === -1){
                answer.push(sum)
            }
        }
    }
    answer.sort((a,b) => {return a - b})
    
    return answer
}


console.log(solution([2,1,3,4,1]))
