async function singleCard(){
  response = await axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
  console.log(`${response.data.cards[0].value} of ${response.data.cards[0].suit}`)
}
singleCard()

async function doubleCard(){
  response1 = await axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
  let deckId=response1.data.deck_id
  console.log(`${response1.data.cards[0].value} of ${response1.data.cards[0].suit}`)
  response2 = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
  console.log(`${response2.data.cards[0].value} of ${response2.data.cards[0].suit}`)
}
doubleCard()

let deckId;
let btn= $('.button')
let textarea =$('#card-area')
let imagesrc = $('.ImageSrc')
async function drawMultipleCards(){
  response = await axios.get('https://deckofcardsapi.com/api/deck/new/')
  deckId = response.data.deck_id;  
}
async function clickButton(){
  response = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
  document.getElementById("imageid").src = response.data.cards[0].image
}
drawMultipleCards()