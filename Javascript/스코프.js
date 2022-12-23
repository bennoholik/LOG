let foo = 5;

function addTwo(num) {
  return (num += 2);
}

foo = addTwo(foo);
console.log(foo);
