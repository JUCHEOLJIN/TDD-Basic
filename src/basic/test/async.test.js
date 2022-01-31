const fetchProduct = require("../async.js");

describe("Async", () => {
  it("async - done", (done) => {
    fetchProduct("success").then((data) => {
      expect(data).toEqual({ item: "Milk", price: 200 });
      done();
    });
  });

  it("async - return", () => {
    return fetchProduct("success").then((data) => {
      expect(data).toEqual({ item: "Milk", price: 200 });
    });
  });

  it("async - await", async () => {
    const product = await fetchProduct("success").then((data) => {
      expect(data).toEqual({ item: "Milk", price: 200 });
    });
  });

  it("async - resolves", () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: "Milk",
      price: 200,
    });
  });

  it("async - rejects", () => {
    return expect(fetchProduct("error")).rejects.toEqual("network error");
  });
});
