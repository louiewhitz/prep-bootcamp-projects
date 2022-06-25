var modal = document.querySelector('.modal-btn');
var noBtn = document.querySelector('.no');

function modalFunc(event) {
  var survey = document.querySelector('#survey');
  survey.className = 'visible';
  var shade = document.querySelector('#shade');
  shade.className = 'visible';

}

function noFunc(event) {
  var survey = document.querySelector('#survey');
  survey.className = 'non-visible';
  var shade = document.querySelector('#shade');
  shade.className = 'non-visible';

}

modal.addEventListener('click', modalFunc);

noBtn.addEventListener('click', noFunc);
