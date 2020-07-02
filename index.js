//JOIN

let join = (a,b) => {
    let result = a.reduce((acc, item, index = 0, arr) => {
        if (index != arr.length - 1) {
            return acc + String(item) + b;
        } else {
            return acc + String(item);
        }
    }, "");
    return String(result);
}

module.exports.join = join;


//LAST

let last = (arr) => {
    return arr[arr.length - 1];
};

module.exports.last = last;


//MIN


let min = (arr) => {
    let result = arr.reduce((a, b) => {
        if (a > b) { a = b; }
        return a;
    }, arr[0]);
    return result;
}

module.exports.min = min


//MAX

let max = (arr) => {
    let result = arr.reduce((a, b) => {
        if (a < b) { a = b; }
        return a;
    }, arr[0]);
    return result;
}

module.exports.max = max;


//nth

let nth = (arr, index) => {
    if (index < 0) {
        return arr[arr.length - Math.abs(Number(index))];
    } else {
        return arr[Number(index)];
    }
};

module.exports.nth = nth;


//SUM

let sum = (arr) => {
  let result = arr.reduce((a,b) => {
            return Number(a)+Number(b)
    })
    return result;
}

module.exports.sum = sum;


//FLATTEN DEEP

let flatDeep = (arr) => {
    let d = 1;
    return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
    : arr.slice();
}

module.exports.flatDeep = flatDeep;

//HEAD

let head = (arr) => {
    return arr[0]
}

module.exports.head = head;


//INITIAL

let initial = (arr) => {
    return arr.splice(0,arr.length-1)
}

module.exports.initial = initial;


//CONCAT

let concat = (...arr) => {
    let result = [];
   arr.forEach((i) => {
    result.push(...i)
   })
   
    return result;
};

module.exports.concat = concat;




