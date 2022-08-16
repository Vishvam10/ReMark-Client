import fetchMock from "jest-fetch-mock";
import { GET } from "../../../../src/js/apiFactory";
import { BASE_API_URL } from "../../../../src/js/constants";

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

it("API : FACTORY : GET method without error", async () => {
  const url = `${BASE_API_URL}/api/testing`;
  
  const bodyData = {
    message: "Endpoint hit !",
    status: 200,
  }

  fetch.mockResponseOnce(JSON.stringify(bodyData));

  const res = await GET(url);
  const data = await res.json();
  expect(data.status).toEqual(200);
});

it("API : FACTORY : GET method with error", async () => {
  const url = `${BASE_API_URL}/api/testing`;
  const error_status_codes = [400, 401, 404, 500]
  let return_values = [];
  for(const s of error_status_codes) {
      return_values.push(
        {
          "status_code": s, 
          "error_message": "Testing error message"
        }
      )
  }
  for(const val of return_values) {
    fetch.mockResponseOnce(JSON.stringify(val));
    const res = await GET(url);
    const data = await res.json();
    expect(data.status).not.toEqual(200);
  }

});
