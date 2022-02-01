class StubUserClient {
  async login(id, password) {
    return { result: "SUCCESS" };
  }
}

module.exports = StubUserClient;
