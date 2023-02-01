
const game = {
  name: 'hiengame',
  id: 'AiEF51ktLuSpHuo0CyOf',
}

const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${game.id}/scores/`;

const getScores = async () => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json.result;
  } catch(e) {
    
  }
}

const pushScore = async (score) => {
    
  try {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(score),
      headers: {
        'Content-type': 'application/json; charset=UTF-8' 
      },
    });
    if(res.ok) {
      // window.location.reload();
    }    
  } catch (e) {
    throw Error('Something went wrong, try again');
  }
}

export { getScores, pushScore };