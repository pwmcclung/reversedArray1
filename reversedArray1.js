function digitize(n) {
  let newArr = []
  let num = String(n)
  let arr = Array.from(num)
  
  arr.reverse()
  for (let val of arr){
    newArr.push(Number(val))
  }
  return newArr
  }
