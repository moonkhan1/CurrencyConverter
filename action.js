

var buttons = document.querySelectorAll('.b');
var btn = document.querySelector('.b');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(button => button.classList.remove('active'));
    button.classList.add('active');
    });
});

var buttons2 = document.querySelectorAll('.b2');
buttons2.forEach(button => {
  button.addEventListener('click', () => {
    buttons2.forEach(button => button.classList.remove('active'));
    button.classList.add('active');
    });
});
  

const op1 = document.querySelectorAll('.left-currencies');
const op2 = document.querySelectorAll('.right-currencies');
    const con_from = document.querySelector(".from");
    const con_to = document.querySelector(".to");
    fetch('https://api.frankfurter.app/currencies').then((data) => data.json())
      .then((data) => {
        display(data);
      });
    function display(data) {
      const entries = Object.entries(data);
      for (var i = 0; i < entries.length; i++) {
        select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]} : ${entries[i][1]}</option>`;
        select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]} : ${entries[i][1]}</option>`;
      }
    }