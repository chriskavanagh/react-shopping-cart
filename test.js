const state = {
  list: [1, 2, 3]
};

//console.log({ ...state });
//console.log(state);

var x = 10;
var y = "abc";

var a = x;
var b = y;

//console.log(x, y, a, b);

var ref = [1];
var refcopy = ref;

//console.log(ref, refcopy);

refcopy.push(2);
//console.log(ref, refcopy);

var obj = { first: "reference" };
obj = { second: "ref2" };

console.log(obj);
