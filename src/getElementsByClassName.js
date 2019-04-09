// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node
  ) {
    // var parentNode = document.body;
    var arr = [];
    var nodes = node || document.body;
    console.log(typeof nodes)
    if(nodes.className.includes(className)){
      arr.push(nodes);
    }
    for (var i = 0; i < nodes.children.length; i++){
      var output = getElementsByClassName(className, nodes.children[i]);
      arr = arr.concat(output);
    }
    return arr;
  };

  // if body.classname contains classname
  //push body to arr
  //loop our children (even nodes that have no children can be iterated -- non-children will be an empty array./// body.children.length
  //var node = getElementsbyClassName(classname, child)

  //push to the array, or concat to arr 

/*
    if (node.classList) {
      if (node.classList.contains(className)) arr.push(node);
    }
    
    
      for (var i = 0; i < node.children.length; i ++) {
       // console.log(node.children[i].classList)
         (child.classList.contains(className)) {
          //console.log('This is ' + node);
          //console.log('There was a match!')
          arr.push(node);
        }
        if (node.children[i].hasChildNodes()) {
          loopingThroughNodes(node.children[i].children);
        }
      }
    }
  }  
  console.log(arr)
  loopingThroughNodes(document.body);
  
  return arr;
};
*/


  //var nodeClasses = node.classList;
        
    //if (nodeClasses.value === className) {
    //  arr.push(node);
   // }
  //console.log(document.body)
  //document.body.childNodes returns an array of all child nodes but not grandchild nodes.
  //document.body.hasChildNodes() returns T/F?  
  //document.body.classList returns an array of list of classes
