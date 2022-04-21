const API_URL = 'https://dog.ceo/api/breeds/image/random/3';
async function getRandomDog() {
  const response = await fetch(API_URL);
  const json = await response.json();
  console.log(json.message);
}

getRandomDog();
