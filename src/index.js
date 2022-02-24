module.exports = function toReadable (number) {
  const arr0_19 = ['zero', 'one', 'two', 'three','four','five',
  'six', 'seven','eight', 'nine', 'ten', 'eleven','twelve',
  'thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
  const arrTy = ['','', 'twenty ','thirty ','forty ','fifty ','sixty ','seventy ','eighty ','ninety ']
  const hundred = ' hundred '
  let result =''
  while(number>=0){
    if (number / 100 >= 1){
      if(number % 100 == 0){
          result = arr0_19[Math.floor(number/100)] + hundred
          break
      }
        result = arr0_19[Math.floor(number/100)] + hundred
        number = number % 100
      }
      if (number > 19){
          if(number % 10 == 0){
              result += arrTy[Math.floor(number/10)]
              break
          }
        result += arrTy[Math.floor(number/10)] + arr0_19[number % 10]
        number = -1
      }
      if (number >= 0 && number <= 19){
        result += arr0_19[number]
        number = -1
      }
  }
  return result.trim()
}
