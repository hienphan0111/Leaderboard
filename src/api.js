const game = {
  name: 'hiengame',
  id: 'AiEF51ktLuSpHuo0CyOf',
};

const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${game.id}/scores/`;

const getScores = async () => {
  let json;
  try {
    const response = await fetch(url);
    json = await response.json();
  } catch (e) {
    throw new Error('Something went wrong, try again');
  }
  return json.result;
};

const pushScore = async (score) => {
  try {
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(score),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  } catch (e) {
    throw new Error('Something went wrong, try again');
  }
};

export { getScores, pushScore };
