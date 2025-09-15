const baseUrl = "http://localhost:3001";

const request = (endpoint, options = {}) => {
  return fetch(`${baseUrl}/${endpoint}`, options).then((res) => {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  });
};

const getClothingItems = () => {
  return request("items");
};

const addClothingItem = ({ name, weather, imageUrl }) => {
  return request("items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: name, weather: weather, imageUrl: imageUrl }),
  });
};

const deleteClothingItem = (itemId) => {
  return request(`items/${itemId}`, {
    method: "DELETE",
  });
};

export { getClothingItems, addClothingItem, deleteClothingItem };
