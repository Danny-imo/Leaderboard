import './style.css';

function createDynamicHTML() {
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

  const ul = document.createElement('ul');
  ul.className = 'uls';
  container2.appendChild(ul);

  const players = [
    { name: 'Emem', score: 100 },
    { name: 'Patrick', score: 20 },
    { name: 'Harry', score: 50 },
    { name: 'William', score: 78 },
    { name: 'Daniel', score: 125 },
    { name: 'Joy', score: 77 },
    { name: 'Jones', score: 42 },
  ];

  players.forEach((player) => {
    const li = document.createElement('li');
    li.textContent = `${player.name}: ${player.score}`;
    ul.appendChild(li);
  });

  const form = document.createElement('form');
  form.action = '';
  root.appendChild(form);

  const addScoreHeading = document.createElement('h3');
  addScoreHeading.className = 'scoreS';
  addScoreHeading.textContent = 'Add your score';
  form.appendChild(addScoreHeading);

  const nameLabel = document.createElement('label');
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

  document.body.appendChild(root);
}

createDynamicHTML();