import axios from "axios";

export const masterMindApi = async () => {
  const BASE_URL = `https://www.random.org/integers`;
  const params = `?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new`;
  const url = `${BASE_URL}/${params}`;

  try {
    const response = await axios.get(url);
    console.log({ response });
    if (response.status === 200) {
      const data = response.data.replace(/\s+/g, "");
      return data.split("");
    }
  } catch (error) {
    console.error(error);
    console.error("error calling api");
    return apiBackup();
  }
};

// Backup Api In case of api not working it seems a little buggy
const apiBackup = (number) => {
  const numbers = [];
  for (let i = 0; i < 4; i++) {
    numbers.push(randomNumberGenerator(number).toString());
  }

  return numbers;
};

const randomNumberGenerator = (number) => {
  return Math.floor(Math.random() * (number + 1));
};
