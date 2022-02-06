module.exports = function check(str, bracketsConfig) {
   
  let stack = [];
  let brackets = new Map(bracketsConfig);

  for (let i = 0; i < str.length; i++) {
     
      if (str[i] == brackets.get(stack[stack.length - 1])) {
        stack.pop();
      } else {
          stack.push(str[i]);
        }
        
    }
    return stack.length !== 0 ? false : true;
}


 

    