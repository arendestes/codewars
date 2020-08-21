// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based 
// and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused 
// ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons 
// there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!

function nextId(ids) {
    //this will be awesome!
    for(i = 0; true; i++){
        if(ids.indexOf(i) === -1){
            return i;
        }
    }
}

const result = nextId([0, 1, 2, 3, 4, 5, 7, 8, 9, 10]);// should be 11

console.log(result);