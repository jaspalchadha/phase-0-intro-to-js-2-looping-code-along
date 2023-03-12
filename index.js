let frein = ["john", "candice", "andy"]
let cards = []
function writeCards(frein, eventNames){
    for ( let num = 0; num < frein.length; num++ ) {
        cards.push(`Thank you, ${frein[num]}, for the wonderful ${eventNames} gift!`);
    
    } 
  return cards;
  
}

function countDown(num){
    while(num > -1){
        console.log (num);
        num--;
    }
}