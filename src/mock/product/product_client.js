class ProductClient {
  fetchItems() {
    return fetch("https://example.com/login/id+password").then((res) =>
      res.json()
    );
  }
}

module.exports = ProductClient;
