import TikTok from 'tiktok-search';

const searchTikTok = async (query) => {
  try {
    const posts = await TikTokScraper.search(query);
    console.log(posts);
  } catch (error) {
    console.error('Error searching TikTok:', error);
  }
};

searchTikTok('https://www.tiktok.com/@liamoimfmxo/');