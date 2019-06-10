const guideList = document.querySelector('.guides')

// setup materialize components when content has been loaded on the page
document.addEventListener('DOMContentLoaded', function () {

  // grab all the Materilaize modals and initalize them
  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  // grab all the Materilaize modals and initalize them
  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});

//setup guides
const setUpGuides = (data) => {

  let html = '';

  data.forEach(doc => {
    const guide = doc.data();
    const li = `
      <li>
        <div class="collapsible-header grey lighten-4">${guide.title}</div>
        <div class="collapsible-body white">${guide.content}</div>
      </li>
      `;
      html += li
  });

  guideList.innerHTML = html
}

