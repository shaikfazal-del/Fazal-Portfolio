AOS.init();


consoleText(['Hii!,I\'m Fazal.', 'Hii!,I\'m Fazal.', 'Hii!,I\'m Fazal.'], 'text',['tomato','rebeccapurple','green']);


function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}


function openOutlook() {
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const recipient = "shaikfazal9392@gmail.com"; // Replace with your email

  const mailtoLink = `https://outlook.live.com/mail/0/deeplink/compose?to=${recipient}&subject=Message from: ${email}&body=${encodeURIComponent(message)}`;
  window.open(mailtoLink, '_blank');
}

function toggleMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('show-menu');
}