
export const getArticles = (query) => {
  // eslint-disable-next-line max-len
  return fetch(`https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?language=en&q=${query}&apiKey=${process.env.API_KEY}`, { headers: { origin: null } })
    .then(res => res.json())
    .then(json => json.articles);
};
