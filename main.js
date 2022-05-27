const form = document.querySelector('.form');
const feedback = document.querySelector('.feedback');
const button = document.querySelector('button');
const giveAwayPrice = 1000;

// ---- 😎
form.addEventListener('submit', e => {
    e.preventDefault();  // prevents form from submmiting || refreshing the page
    let userInputName = form.name.value;   // string
    let userInputAmount = form.amount.value; // number
    let userInputemail = form.email.value; // number
// ---- 😎
    let giveAway = (userInputName, userInputAmount) => {
      let cohortCodeClassLength = (Math.random()) * 119 + 1;
      let randomNumber = Math.floor(cohortCodeClassLength);
      if(userInputAmount > giveAwayPrice){
        setTimeout(() => {
            feedback.textContent = `=> Please Wait ✋`;
            setTimeout(() => {
                feedback.textContent = `=> This one no even serious 😂🤣 who wan give you NGN ${userInputAmount}. Abeg Shift 😂`;
                  setTimeout(() => {
                      document.location.reload();
                  }, 5000);
            }, 5000);
          }, 500);
      } else {
      if(userInputName === '' || userInputAmount === ''){
        setTimeout(() => {
            feedback.textContent = `=> Please Wait ✋`;
            setTimeout(() => {
                feedback.textContent = '=> This one no even serious 🙄😂🤣';
                  setTimeout(() => {
                      document.location.reload();
                  }, 5000);
            }, 5000);
          }, 500);
        //
      } else {
          if(randomNumber === 1){
            setTimeout(() => {
                feedback.textContent = `=> Please Wait ✋`;
                setTimeout(() => {
                    feedback.textContent = `=> ${userInputName}, Your are Number ${randomNumber} and you've Successfully Won NGN ${userInputAmount}, Await my message Via Your Email ${userInputemail}`;
                      setTimeout(() => {
                          document.location.reload();
                      }, 15000);
                }, 5000);
              }, 500);
            
          } else{
            setTimeout(() => {
                feedback.textContent = `=> Please Wait ✋`;
                setTimeout(() => {
                    feedback.textContent = `=> ${userInputName}, Your are Number ${randomNumber} and you can only win ${userInputAmount} if you are Number 1, Sorry!😪`;
                      setTimeout(() => {
                          document.location.reload();
                      }, 5000);
                }, 5000);
              }, 500);
          }
       }
     }
    };
    giveAway(userInputName, userInputAmount);
});
// TimmySTroge  