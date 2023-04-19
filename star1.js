let space = ''

for (let i = 0; i < 5; i++){
  for (let a = 0; a < (5-i); a++){
    space += ' '
  }
  for (let j = 0; j < (2 * i + 1); j++) {
    space += '*'
  }
  space += '\n'
}

console.log(space)
