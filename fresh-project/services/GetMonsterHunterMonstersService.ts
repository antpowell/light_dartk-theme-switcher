// const axios = require("axios");
const getMonsterHunterMonstersService = async () => {
  const url = 'https://mhw-db.com/monsters?q={"name":"Great Jagras"}';
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7000d0d5d9msh5deea80c3f4d04cp14be7cjsncebfaf73886e",
      "X-RapidAPI-Host": "monster-hunter-basic-information.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

getMonsterHunterMonstersService();
