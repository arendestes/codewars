function longestRepetition(s) {
    console.log(s);
      if(!s){
          return ['', 0]
      }
      let longest = [s[0], 1];
      let count = 1;
      let previous;
      let current;
      for ( let i = 0; i < s.length; i++ ){
          current = s[i];
          if ( current === previous ){
              count++;
              if ( count > longest[1] ){
                  longest = [s[i], count];
              }
          } else {
              count = 1;
          }
          previous = current;
      }
      return longest;
  }

const result = longestRepetition("ba");
console.log(result);