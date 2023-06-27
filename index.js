import { getUserProfile } from 'tiktok-search';

const ACCOUNTS = ['iamturnbull', 'liamoimfmxo']; // Replace with the TikTok account usernames you want to fetch

const displayAccountData = (data) => {
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';

  data.forEach((account) => {
    const accountDiv = document.createElement('div');
    accountDiv.innerHTML = `
      <h3>${account.username}</h3>
      <p>Total Views: ${account.stats.videoCount}</p>
      <p>Total Followers: ${account.stats.followerCount}</p>
      <p>Last Post: ${account.latestPost.time}</p>
    `;
    resultsContainer.appendChild(accountDiv);
  });
};

const fetchAccountData = async () => {
  try {
    const promises = ACCOUNTS.map((account) => getUserProfile(account));
    const data = await Promise.all(promises);
    displayAccountData(data);
  } catch (error) {
    console.error('Error fetching account data:', error);
  }
};

fetchAccountData();
