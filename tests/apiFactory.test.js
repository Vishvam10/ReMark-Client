/*
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

*/ 

import fetchMock from "jest-fetch-mock";
import { POST } from "../src/js/apiFactory";
import { BASE_API_URL } from "./../src/js/constants";

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});


it("Logs the user in", async () => {
  const url = `${BASE_API_URL}/api/login`;
  
  const bodyData = {
    message: "Logged in successfully",
    status: 200,
    user_id: "7cc822be13634bc7b1c7c8dbc08cbb53",
    user_name: "Testing1234",
    access_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY2MDUwODc1MiwianRpIjoiMjFlM2IyZWUtYjk1YS00ZWE5LWEzZDUtNzI3YWZkZjA1MjZkIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IlZpc2h2YW0xMCIsIm5iZiI6MTY2MDUwODc1MiwiZXhwIjoxNjYwNTMwMzUyfQ.ls3slFWk93meaftrz8qtSZtFedXRHtE7Foi97nBxHDI",
    user_authority: "user"
  }

  fetch.mockResponseOnce(JSON.stringify(bodyData));

  const res = await POST(url, bodyData);
  const data = await res.json();
  console.log(data);
  expect(data.status).toEqual(200);
});
