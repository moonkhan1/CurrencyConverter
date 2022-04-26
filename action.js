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

var keys = /^[0-9.,\b]+$/;
var bs = /^[\b]+$/
fr.addEventListener('keypress', (event) =>{
  if(!keys.test(event.key) && !bs.test(event.key)){
    event.preventDefault()
  }
})

// FROM - RUBLE
fr.addEventListener('keyup', (event) => {
  fr.value = event.target.value.replace(',','.')

  if (document.getElementById("rub").classList.contains("active")) {
    fetch('https://api.exchangerate.host/latest?base=RUB').then(data => data.json())
      .then(data => {
        display(data);
        console.log(data)

        function display(data) {
          var entries = Object.entries(data);
          // for (var i = 0; i < entries.length; i++) {
          if (document.getElementById("usd2").classList.contains("active")) {
            fetch('https://api.exchangerate.host/latest?base=USD').then(data2 => data2.json())
              .then(data2 => {
                console.log(data2)
                var entries2 = Object.entries(data2);
                // for(var i =0; i<entries2.length;i++){
                to.value = fr.value * entries[4][1]["USD"]
                from_p.innerHTML = `1 RUB = ${entries[4][1]["USD"]} USD`
                to_p.innerHTML = `1 USD = ${entries2[4][1]["RUB"]}RUB `
              })


          }


          if (document.getElementById("eur2").classList.contains("active")) {
            fetch('https://api.exchangerate.host/latest?base=EUR').then(data2 => data2.json())
              .then(data2 => {
                console.log(data2)
                var entries2 = Object.entries(data2);
                // for(var i =0; i<entries2.length;i++){
                to.value = fr.value * entries[4][1]["EUR"]
                from_p.innerHTML = `1 RUB = ${entries[4][1]["EUR"]} EUR`
                to_p.innerHTML = `1 EUR = ${entries2[4][1]["RUB"]} RUB `

              })


          }
          if (document.getElementById("gbp2").classList.contains("active")) {
            fetch('https://api.exchangerate.host/latest?base=GBP').then(data2 => data2.json())
              .then(data2 => {
                console.log(data2)
                var entries2 = Object.entries(data2);
                // for(var i =0; i<entries2.length;i++){
                to.value = fr.value * entries[4][1]["GBP"]
                from_p.innerHTML = `1 RUB = ${entries[4][1]["GBP"]} GBP`
                to_p.innerHTML = `1 GBP = ${entries2[4][1]["RUB"]} RUB `

              })


          }
          if (document.getElementById("rub2").classList.contains("active")) {
            fetch('https://api.exchangerate.host/latest?base=RUB').then(data2 => data2.json())
              .then(data2 => {
                console.log(data2)
                var entries2 = Object.entries(data2);
                // for(var i =0; i<entries2.length;i++){
                to.value = fr.value
                from_p.innerHTML = `1 RUB = ${entries[4][1]["RUB"]} RUB`
                to_p.innerHTML = `1 RUB = ${entries2[4][1]["RUB"]} RUB `

              })


          }
        }
      })
  }

  // FROM - USD
  if (document.getElementById("usd").classList.contains("active")) {
    fetch('https://api.exchangerate.host/latest?base=USD').then(data => data.json())
      .then(data => {
        display(data);
        console.log(data)


        function display(data) {
          var entries = Object.entries(data);
          if (document.getElementById("usd2").classList.contains("active")) {
            fetch('https://api.exchangerate.host/latest?base=USD').then(data2 => data2.json())
              .then(data2 => {
                console.log(data2)
                var entries2 = Object.entries(data2);
                to.value = fr.value
                from_p.innerHTML = `1 USD = ${entries[4][1]["USD"]} USD`
                to_p.innerHTML = `1 USD = ${entries2[4][1]["USD"]}USD `
              })


          }
          if (document.getElementById("rub2").classList.contains("active")) {
            fetch('https://api.exchangerate.host/latest?base=RUB').then(data2 => data2.json())
              .then(data2 => {
                console.log(data2)
                var entries2 = Object.entries(data2);
                to.value = fr.value * entries[4][1]["RUB"]
                from_p.innerHTML = `1 USD = ${entries[4][1]["RUB"]} RUB`
                to_p.innerHTML = `1 RUB = ${entries2[4][1]["USD"]}USD `
              })


          }
          if (document.getElementById("eur2").classList.contains("active")) {
            fetch('https://api.exchangerate.host/latest?base=EUR').then(data2 => data2.json())
              .then(data2 => {
                console.log(data2)
                var entries2 = Object.entries(data2);
                to.value = fr.value * entries[4][1]["EUR"]
                from_p.innerHTML = `1 USD = ${entries[4][1]["EUR"]} EUR`
                to_p.innerHTML = `1 EUR = ${entries2[4][1]["USD"]}USD `
              })


          }
          if (document.getElementById("gbp2").classList.contains("active")) {
            fetch('https://api.exchangerate.host/latest?base=GBP').then(data2 => data2.json())
              .then(data2 => {
                console.log(data2)
                var entries2 = Object.entries(data2);
                to.value = fr.value * entries[4][1]["GBP"]
                from_p.innerHTML = `1 USD = ${entries[4][1]["GBP"]} GBP`
                to_p.innerHTML = `1 GBP = ${entries2[4][1]["USD"]}USD `
              })


          }



        }




      }
      )
  }



  // FROM - EUR
  if (document.getElementById("eur").classList.contains("active")) {
    fetch('https://api.exchangerate.host/latest?base=EUR').then(data => data.json())
      .then(data => {
        display(data);
        console.log(data)


        function display(data) {
          var entries = Object.entries(data);
          if (document.getElementById("eur2").classList.contains("active")) {
            fetch('https://api.exchangerate.host/latest?base=EUR').then(data2 => data2.json())
              .then(data2 => {
                console.log(data2)
                var entries2 = Object.entries(data2);
                to.value = fr.value
                from_p.innerHTML = `1 EUR = ${entries[4][1]["EUR"]} EUR`
                to_p.innerHTML = `1 EUR = ${entries2[4][1]["EUR"]}EUR `
              })


          }
          if (document.getElementById("rub2").classList.contains("active")) {
            fetch('https://api.exchangerate.host/latest?base=RUB').then(data2 => data2.json())
              .then(data2 => {
                console.log(data2)
                var entries2 = Object.entries(data2);
                to.value = fr.value * entries[4][1]["RUB"]
                from_p.innerHTML = `1 EUR = ${entries[4][1]["RUB"]} RUB`
                to_p.innerHTML = `1 RUB = ${entries2[4][1]["EUR"]}EUR `
              })


          }

          if (document.getElementById("usd2").classList.contains("active")) {
            fetch('https://api.exchangerate.host/latest?base=USD').then(data2 => data2.json())
              .then(data2 => {
                console.log(data2)
                var entries2 = Object.entries(data2);
                to.value = fr.value * entries[4][1]["USD"]
                from_p.innerHTML = `1 EUR = ${entries[4][1]["USD"]} USD`
                to_p.innerHTML = `1 USD = ${entries2[4][1]["EUR"]}EUR `
              })


          }
          if (document.getElementById("gbp2").classList.contains("active")) {
            fetch('https://api.exchangerate.host/latest?base=GBP').then(data2 => data2.json())
              .then(data2 => {
                console.log(data2)
                var entries2 = Object.entries(data2);
                to.value = fr.value * entries[4][1]["GBP"]
                from_p.innerHTML = `1 EUR = ${entries[4][1]["GBP"]} GBP`
                to_p.innerHTML = `1 GBP = ${entries2[4][1]["EUR"]}EUR `
              })


          }

        }
      }
      )
  }









  //FROM - GBP
  if (document.getElementById("gbp").classList.contains("active")) {
    fetch('https://api.exchangerate.host/latest?base=GBP').then(data => data.json())
      .then(data => {
        display(data);
        console.log(data)


        function display(data) {
          var entries = Object.entries(data);
          if (document.getElementById("gbp2").classList.contains("active")) {
            fetch('https://api.exchangerate.host/latest?base=GBP').then(data2 => data2.json())
              .then(data2 => {
                console.log(data2)
                var entries2 = Object.entries(data2);
                to.value = fr.value
                from_p.innerHTML = `1 GBP = ${entries[4][1]["GBP"]} GBP`
                to_p.innerHTML = `1 GBP = ${entries2[4][1]["GBP"]}GBP `
              })


          }
          if (document.getElementById("rub2").classList.contains("active")) {
            fetch('https://api.exchangerate.host/latest?base=RUB').then(data2 => data2.json())
              .then(data2 => {
                console.log(data2)
                var entries2 = Object.entries(data2);
                to.value = fr.value * entries[4][1]["RUB"]
                from_p.innerHTML = `1 GBP = ${entries[4][1]["RUB"]} RUB`
                to_p.innerHTML = `1 RUB = ${entries2[4][1]["GBP"]}GBP `
              })


          }

          if (document.getElementById("usd2").classList.contains("active")) {
            fetch('https://api.exchangerate.host/latest?base=USD').then(data2 => data2.json())
              .then(data2 => {
                console.log(data2)
                var entries2 = Object.entries(data2);
                to.value = fr.value * entries[4][1]["USD"]
                from_p.innerHTML = `1 GBP = ${entries[4][1]["USD"]} USD`
                to_p.innerHTML = `1 USD = ${entries2[4][1]["GBP"]}GBP `
              })


          }
          if (document.getElementById("eur2").classList.contains("active")) {
            fetch('https://api.exchangerate.host/latest?base=EUR').then(data2 => data2.json())
              .then(data2 => {
                console.log(data2)
                var entries2 = Object.entries(data2);
                to.value = fr.value * entries[4][1]["EUR"]
                from_p.innerHTML = `1 GBP = ${entries[4][1]["EUR"]} EUR`
                to_p.innerHTML = `1 EUR = ${entries2[4][1]["GBP"]}GBP `
              })


          }

        }
      }
      )
  }


})


