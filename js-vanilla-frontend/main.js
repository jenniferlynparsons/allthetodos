function startApp(){
  // add
    // capture button click and enter keypress
    // store new todo item to local storage
    // update dom with new li element
    // clear input (should replace with placeholder)

  // edit
    // grab item from local storage
    // populate the input
    // capture button click
    // overwrite stored value with new value
    // update li element in dom

  // delete
    // removed stored value from local storage
    // remove li element from dom

  // mark as complete
    // update stored value in local storage

  // mark as incomplete
    // update stored value in local storage
}



function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(startApp);
