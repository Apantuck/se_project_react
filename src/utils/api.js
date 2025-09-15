const baseUrl = "http://localhost:3001";

const fetchAPI = (URL, options = {}) => {
  return fetch(URL, options)
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`);
      }
      return res.json();
    })
    .catch((err) => {
      console.error(`Fetch error: ${err} for URL: ${URL}`);
      return Promise.reject(err);
    });
};

const fetchDB = (endpoint, options = {}) => {
  return fetchAPI(`${baseUrl}/${endpoint}`, options);
};

const getClothingItems = () => {
  return fetchDB("items");
};

const addClothingItem = ({ name, weather, imageUrl }) => {
  return fetchDB("items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: name, weather: weather, imageUrl: imageUrl }),
  });
};

const deleteClothingItem = (itemId) => {
  return fetchDB(`items/${itemId}`, {
    method: "DELETE",
  });
};

export { getClothingItems, addClothingItem, deleteClothingItem, fetchAPI };
