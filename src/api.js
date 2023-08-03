const API_KEY = 'Xc9LpWvBxMXHyr3QJGsT';
const API_ENDPOINT = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${API_KEY}/scores`;

// Function to save player score to the API
export const saveScoreToAPI = async (playerData) => {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(playerData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  } catch (error) {
    throw new Error(`Error saving player score: ${error.message}`);
  }
};

// Function to get scores from the API
export const getScoresFromAPI = async () => {
  try {
    const response = await fetch(API_ENDPOINT);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    // The API might return the scores as an object with 'result' property containing the array
    if (data && Array.isArray(data.result)) {
      return data.result;
    }
    throw new Error('Invalid API response: Missing or invalid "result" property.');
  } catch (error) {
    throw new Error(`Error fetching scores: ${error.message}`);
  }
};
