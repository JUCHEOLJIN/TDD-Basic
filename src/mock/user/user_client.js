class UserClient {
  login(id, password) {
    return fetch("http://example/login/id+password") //
      .then((res) => res.json());
  }
}

module.exports = UserClient;
