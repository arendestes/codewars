// A student was working on a function and made some syntax mistakes while coding. 
// Help them find their mistakes and fix them.

function main (verb, noun){
    if(!verb || !noun) return;
  return   `${verb.trim()} ${noun.trim()}`;
};

const result = main('run       ', 'dog');

console.log(result);