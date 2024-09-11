// https://www.codewars.com/kata/59b81886460387d8fc000043

reverse = (a) => [...a].map(a.pop, a);

// reverse=a=>a.map(a.pop,[...a])

/*

 a.pop is used as a callback function,which returns the last array element and [...a] 
 stands for thisArgs,so after each iteration 'a' changes to thisArgs. for example lets
take [1,2,3] array first literation:pop returns 3 and thisArgs are [1,2] second literation:pop returns 2 and 
thisArgs are [1] third literation:pop returns 1 and thisArgs are []

*/
