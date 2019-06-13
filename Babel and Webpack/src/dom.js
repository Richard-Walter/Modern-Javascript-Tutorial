console.log('dom.js file');

// dom queries
const body = document.querySelector('body');

// export const styleBody = () => {
const styleBody = () => {
  body.style.background = 'peachpuff';
};

// export const addTitle = (text) => {
const addTitle = (text) => {
  const title = document.createElement('h1');
  title.textContent = text;
  body.appendChild(title);
};

const contact = 'mario@thenetninja.co.uk';
//easier to export everythin gin one go
export { styleBody, addTitle, contact };

