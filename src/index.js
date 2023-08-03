import './style.css';
import { saveScoreToAPI, getScoresFromAPI } from './api.js';

const createDynamicHTML = () => {
  const root = document.createElement('div');
  root.className = 'container1';

  const container2 = document.createElement('div');
  container2.className = 'container2';
  root.appendChild(container2);

  const recentScoresHeading = document.createElement('h2');
  recentScoresHeading.className = 'RecentS';
  recentScoresHeading.textContent = 'Recent scores';
  container2.appendChild(recentScoresHeading);

  const refreshPara = document.createElement('p');
  refreshPara.className = 'paraS';
  refreshPara.textContent = 'Refresh';
  container2.appendChild(refreshPara);

  refreshPara.addEventListener('click', () => {
    location.reload(); // Reload the page when clicked
  });

  const ul = document.createElement('ul');
  ul.id = 'scoreList';
  ul.className = 'uls';
  container2.appendChild(ul);

  const form = document.createElement('form');
  form.id = 'scoreForm';
  form.action = '';
  root.appendChild(form);

  const addScoreHeading = document.createElement('h3');
  addScoreHeading.className = 'scoreS';
  addScoreHeading.textContent = 'Add your score';
  form.appendChild(addScoreHeading);

  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Your name: ';
  form.appendChild(nameLabel);

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.name = 'Your name';
  nameInput.placeholder = 'Your name';
  form.appendChild(nameInput);

  const br1 = document.createElement('br');
  form.appendChild(br1);

  const br3 = document.createElement('br');
  form.appendChild(br3);

  const scoreLabel = document.createElement('label');
  scoreLabel.textContent = 'Your score: ';
  form.appendChild(scoreLabel);

  const scoreInput = document.createElement('input');
  scoreInput.type = 'text';
  scoreInput.name = 'Your score';
  scoreInput.placeholder = 'Your score';
  form.appendChild(scoreInput);

  const br2 = document.createElement('br');
  form.appendChild(br2);

  const br4 = document.createElement('br');
  form.appendChild(br4);

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Submit';
  form.appendChild(submitButton);

  // Add an event listener to the form to handle form submission
  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    const nameInput = form.elements['Your name'];
    const scoreInput = form.elements['Your score'];

    const nameInputValue = nameInput.value;
    const scoreInputValue = parseInt(scoreInput.value);

    if (nameInputValue && !isNaN(scoreInputValue)) {
      // Check if the name and score are not empty and score is a valid number

      // Create a new player object with the input values
      const newPlayer = { user: nameInputValue, score: scoreInputValue };

      // Save the new player to the API
      try {
        await saveScoreToAPI(newPlayer);
        // Clear the input fields
        nameInput.value = '';
        scoreInput.value = '';

        // Update the scores list by fetching data from API
        await updateScoresList();
      } catch (error) {
        throw new Error('Error saving player score:', error);
      }
    }
  });

  document.body.appendChild(root);
};

// Function to update the scores list by fetching data from the API
const updateScoresList = async () => {
  const ul = document.getElementById('scoreList');
  ul.innerHTML = ''; // Clear the existing list items

  try {
    const scores = await getScoresFromAPI();
    scores.forEach((player) => {
      const li = document.createElement('li');
      li.textContent = `${player.user}: ${player.score}`;
      ul.appendChild(li);
    });
  } catch (error) {
    throw new Error('Error fetching scores from API:', error);
  }
};

createDynamicHTML();
updateScoresList(); // Initial fetch to populate the scores list on page load
