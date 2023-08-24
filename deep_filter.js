// Input:
const obj = {
  a: 1,
  b: {
    c: 5,
    d: -2,
    e: {
     f: {
       g: -4,
      },
    },
    h: 2,
  },
};

const filter = (s) =>  s>= 0;

//Output
//  {
//     a: 1,
//     b: {
//         c : 5,
//         h: 2
//     }
//  }

function deepFilter(obj, fn) {
    for(let key in obj) {
        let val = obj[key];
        
        if(typeof val === 'object') {
            deepFilter(val, fn);
        } else {
            if(filter(val) === false) {
                delete obj[key];
            }
        }

        if(JSON.stringify(val) === '{}') {
            delete obj[key];
        }
    }
}

deepFilter(obj, filter);
console.log(obj);