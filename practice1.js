describe("Auth Api", () => {
  const testEmail = `${Date.now()}@example.com`;

  describe("POST api/auth/register", () => {
    it("should register a user", () => {
      const res = await request(app)
        .post("/api/auth/register")
        .send({ name: "test",email: testEmail, password: "test123.", role: "student", });

      expect(res.status).toBe(201);
      expect.
    });
  });
});
