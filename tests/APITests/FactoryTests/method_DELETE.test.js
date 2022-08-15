import fetchMock from "jest-fetch-mock";
import { DELETE } from "../../../src/js/apiFactory";
import { BASE_API_URL } from "../../../src/js/constants";

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});


it("API : FACTORY : DELETE method without error", async () => {
  const url = `${BASE_API_URL}/api/testing/12341234`;

  const return_value = {
    "data": "Testing data",
    "message": "Testing",
    "status": 200,
  }

  fetch.mockResponseOnce(JSON.stringify(return_value));

  const res = await DELETE(url);
  const data = await res.json();
  expect(data.status).toEqual(200);
});

it("API : FACTORY : DELETE method with error (in body data)", async () => {
  const url = `${BASE_API_URL}/api/testing/12341234`;
  const error_status_codes = [400, 401, 404, 500]
  let return_values = [];
  for(const s of error_status_codes) {
      return_values.push(
        {
          "status_code": s, 
          "error_message": "Invalid parameter / value"
        }
      )
  }
  for(const val of return_values) {
    fetch.mockResponseOnce(JSON.stringify(val));
    const res = await DELETE(url);
    const data = await res.json();
    expect(data.status).not.toEqual(200);
  }

});
