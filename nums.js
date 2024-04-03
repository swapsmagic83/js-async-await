async function getFact(number) {
  try {
      response = await axios.get(`http://numbersapi.com/${number}`)
      console.log(response.data)
      $(".1").append(`<p>${response.data}</p>`)
  }
  catch(e) {
      console.error(e)
  }
}

getFact(10)

async function getTwoFact(numbers){
  try {
      for (let number of numbers){
      response= await axios.get(`http://numbersapi.com/${number}`)
      console.log(response.data)
      $(".2").append(`<p>${response.data}</p>`)
      }
  }
  catch(e){
      console.error(e)
  }
}
getTwoFact([23,24,25,27])

async function multipleFact(number){
  res1= await axios.get(`http://numbersapi.com/${number}`)
  console.log(res1.data)
  $(".3").append(`<p>${res1.data}</p>`)
  res2=await axios.get(`http://numbersapi.com/${number}`)
  console.log(res2.data)
  $(".4").append(`<p>${res2.data}</p>`)
  res3=await axios.get(`http://numbersapi.com/${number}`)
  console.log(res3.data)
  $(".5").append(`<p>${res3.data}</p>`)
  res4=await axios.get(`http://numbersapi.com/${number}`)
  console.log(res4.data)
  $(".6").append(`<p>${res4.data}</p>`)

}
multipleFact(35)