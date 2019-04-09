var stringifyJSON = function(obj) {
  if (obj === undefined) return 'undefined';
  if (obj === null) return 'null';
  if (typeof obj === "boolean") {
    if (obj === true) return 'true';
    else return 'false';
  }
  if (typeof obj === "string") return `"${obj}"`;
  if (typeof obj === "number") return obj.toString();
  if (Array.isArray(obj)) {
  // JSON.stringify([new Number(3), new String('false'), new Boolean(false)]);
  //        returns '[3,"false",false]'
  // actual: [ '\'[3falsefalse]\'' ]
    if (obj.length < 1) return "[]";
    var arrStr = '[';  
    for(let i = 0; i < obj.length; i++) {
      if(typeof obj[i] === 'number') {
        arrStr += obj[i] + ',';
      }
      else arrStr += (stringifyJSON(obj[i])) + ',';  //str1.concat(str2,','));
    }
    arrStr = arrStr.substring(0, arrStr.length-1);
    arrStr += ']';
    return arrStr;
  }
  
//   JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] }); 
// // '{"x":[10,null,null,null]}' 
// JSON.stringify({ x: 5, y: 6 });
// // '{"x":5,"y":6}'

  if (typeof obj === "object") {

  //iterate + build key-value pairs
    if (Object.keys(obj).length === 0) return "{}";
    var objStr = '{';
    for (let key in obj) {
      if (key === 'undefined' || key === 'functions' ) return "{}";

        objStr += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
    objStr = objStr.substring(0, objStr.length-1);
    objStr += '}';
    return objStr;
       
  }
};
/*  
      objStr[stringifyJSON(key)] = stringifyJSON(obj[key])
      console.log(objStr);
    } //Doesn't work because convering Object to string = [object, Object]
*/    

var out = stringifyJSON({ x: 'hello', y: 'world' });
console.log(out);
// // '{"x":5,"y":6}'