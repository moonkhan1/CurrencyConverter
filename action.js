var fr = document.querySelector(".from");
var to = document.querySelector(".to");


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
  

var op1 = document.querySelectorAll('.left-currencies');
var op2 = document.querySelectorAll('.right-currencies');
    var con_from = document.querySelector(".from");
    var con_to = document.querySelector(".to");
    var from_p = document.querySelector('.from_p')
    var to_p = document.querySelector('.to_p')
    // fetch(url).then((data) => data.json())
    //   .then((data) => {
    //     display(data);
    //   });

    //   function display(data) {
    //     const entries = Object.entries(data);
    //     for (var i = 0; i < entries.length; i++) {
    //       // buttons[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]} : ${entries[i][0]}</option>`;
    //       // buttons2[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]} : ${entries[i][1]}</option>`;
    //       buttons2[0].innerHTML += `<value="${entries[4][1]["RUB"]}"`
    //       buttons2[1].innerHTML += `<value="${entries[4][1]["USD"]}"`
    //       buttons2[2].innerHTML += `<value="${entries[4][1]["EUR"]}"`
    //       buttons2[3].innerHTML += `<value="${entries[4][1]["GBP"]}"`

    //       buttons[0].innerHTML += `<value="${entries[4][1]["RUB"]}"`
    //       buttons[1].innerHTML += `<value="${entries[4][1]["USD"]}"`
    //       buttons[2].innerHTML += `<value="${entries[4][1]["EUR"]}"`
    //       buttons[3].innerHTML += `<value="${entries[4][1]["GBP"]}"`
    //       var rub = document.getElementById("rub")
    //       var usd = document.getElementById("usd")
    //       let a;
    //       console.log(data)
          fr.addEventListener('blur', _=>{            
                  if(document.getElementById("rub").classList.contains("active")){
                    fetch('https://api.exchangerate.host/latest?base=RUB').then((data) => data.json())
                      .then((data) => {
                        display(data);
                        console.log(data)
                      });
                      
                      function display(data) {
                        const entries = Object.entries(data);
                        for (var i = 0; i < entries.length; i++) {
                          if(document.getElementById("usd").classList.contains("active")){
                            to.value = fr.value * entries[4][1]["USD"]
                            from_p.innerHTML = `1 RUB = ${entries[4][1]["USD"]} USD`
                            to_p.innerHTML = `1 USD = ${entries[4][1]["USD"]}`


               }
              }
            



          // console.log(entries[4][1])
        }
          
        }
          })

      

