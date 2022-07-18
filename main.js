const str = `
010-1234-5678
test@gmail.com
https://regexr.com/
Hi my name is Lee Jin Gyu. This is string for testing.
abbcccdddd
http://localhost:1234
d`

// const regexp = new RegExp('h', 'gi')
const regexp = /(?<=@).{1,}/g;
// console.log(regexp.test(str))
console.log(str.match(regexp))
// g같은걸 플래그라 한다. g는 다 찾는거
// i는 대/소문자 구분 안하는 것
