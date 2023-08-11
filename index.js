const quote=document.querySelector('.quote')
const author=document.querySelector('.author')
const newbtn=document.querySelector('.new')
const tweetbtn=document.querySelector('.tweet')

newbtn.addEventListener('click',randomQuote)
tweetbtn.addEventListener('click',tweet)

async function randomQuote() {
    const response = await fetch('https://api.quotable.io/random')
    const data = await response.json()
    
    // Output the quote and author name
    quote.innerHTML=data.content
    author.innerHTML=`${data.author}`
  }

  function tweet()
  {
    window.open("https://twitter.com/intent/tweet?text="+quote.innerHTML+"---- by"+author.innerHTML,"Tweet window","width=600, height=300");
  }