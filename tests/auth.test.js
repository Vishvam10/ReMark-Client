const auth = require("../src/js/auth");
const axios = require("axios");

jest.mock("axios");

it("Logs in the user", async () => {
    axios.get.mockResolvedValue({
        data: [
          {
            message: "Logged in successfully",
            status: 200,
            user_id: "7cc822be13634bc7b1c7c8dbc08cbb53",
            user_name: "Testing1234",
            access_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY2MDUwODc1MiwianRpIjoiMjFlM2IyZWUtYjk1YS00ZWE5LWEzZDUtNzI3YWZkZjA1MjZkIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IlZpc2h2YW0xMCIsIm5iZiI6MTY2MDUwODc1MiwiZXhwIjoxNjYwNTMwMzUyfQ.ls3slFWk93meaftrz8qtSZtFedXRHtE7Foi97nBxHDI",
            user_authority: "user"
          },
          {
            message: "Logged in successfully",
            status: 200,
            user_id: "cc58g8b9196d4bc7b1c7c8dbc08cbb53",
            user_name: "Testing12345",
            access_token: "eyJ0eXAadsdOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFscasdfasImlhdCI6MTY2MDUwODc1MiwianRpIjoiMjFlM2IyZWUtYjk1YS00ZasdasdasdasdtNzI3YWZkZjA1MjZkIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IlZpc2h2YW0xMCIsIm5iZiI6MTY2MDUwODc1MiwiZXhwIjoxNjYwNTMwMzUyfQ.ls3slFWk93meaftrz8qtSZtFedXRHtE7Foi97nBxHDI",
            user_authority: "admin"
          },
        ],
      });
    const res = await loginUser();
    const status = res.status;
    const message = res.message;
    expect(status).toEqual(200); 
    expect(message).toEqual("Logged in successfully");
});