import axios from "axios";

const URL =
  "https://gist.githubusercontent.com/pvukmanovic-pannonians/b08bdb366d1c4a7b65f0ec83b3eff20a/raw/3ab69cbcd117767ef245d0ce981d9b0c352632fc/minimized.json";

// axios(URL)
//   .then((response) => {
//     console.log("response.data", response.data.comments);
//   })
//   .catch((error) => {
//     console.log("error.message", error.message);
//   });

// console.log("ovo ide prvo sigurno");

async function main() {
  try {
    const promise = await axios.get(URL);
    console.log(promise.data);
  } catch (error) {
    console.log(error.message);
  }
}

main();
