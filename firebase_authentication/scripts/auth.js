    
// setup materialize components when content has been loaded on the page
document.addEventListener('DOMContentLoaded', function() {

    // grab all the Materilaize modals and initalize them
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
    
    // grab all the Materilaize modals and initalize them
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });