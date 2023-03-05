const Var=document.getElementById("#input")
const kill = document.querySelector("#buttonss");
const mean = document.querySelector("#meaning");
const Synonyms = document.querySelector("#synonym");
kill.addEventListener("submit",function(e)
{

    e.preventDefault();
    console.log(input.value);

const apiKey = "";
const apiUrl = "https://mashape-community-urban-dictionary.p.rapidapi.com/define";

// Define a function to retrieve the data
async function getDictionaryData(word) {
  const url = `${apiUrl}?term=${word}`;
  const response = await fetch(url, {
    headers: {
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com"
    }
  });
  const data = await response.json();
  return data;
}

const word=input.value;
// Example usage
getDictionaryData(word).then(data => {
  meaning=(`Meaning of ${word}: ${data.list[0].definition}`);
  mean.innerHTML=meaning;
  synn=(`Synonyms of ${word}: ${data.list[0].example}`);
  Synonyms.innerHTML=synn;

}).catch(error => {
  console.error(`Error retrieving data for ${word}: ${error}`);
});
})
