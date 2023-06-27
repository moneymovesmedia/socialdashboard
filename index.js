const fetch = require('node-fetch');

const ACCESS_TOKEN = 'awupmyx41hmu1j2n';
const ACCOUNTS = ['iamturnbull', 'liamoimfmxo']; // Replace with the TikTok account usernames you want to fetch

const displayAccountData = (data) => {
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';

  data.forEach((account) => {
    const accountDiv = document.createElement('div');
    accountDiv.innerHTML = `
      <h3>${account.username}</h3>
      <p>Total Views: ${account.stats.totalViews}</p>
      <p>Total Likes: ${account.stats.totalLikes}</p>
      <p>Last Post: ${account.stats.lastPost}</p>
    `;
    resultsContainer.appendChild(accountDiv);
  });
};

const fetchAccountData = async () => {
  try {
    const promises = ACCOUNTS.map((account) =>
      fetch(`https://open.tiktokapis.com/v1/user/${account}/stats`, {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      })
    );
    const responses = await Promise.all(promises);
    const data = await Promise.all(responses.map((response) => response.json()));
    displayAccountData(data); 
  } catch (error) {
    console.error('Error fetching account data:', error);
  }
};

fetchAccountData();
