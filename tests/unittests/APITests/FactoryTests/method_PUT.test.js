import fetchMock from "jest-fetch-mock";
import { PUT } from "../../../../src/js/apiFactory"
import { BASE_API_URL } from "../../../../src/js/constants";
import { getRandomNumber } from "../../../../src/js/utils/numeric";

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});


it("API : FACTORY : PUT method without error", async () => {
  const url = `${BASE_API_URL}/api/testing`;
  
  const bodyData = {
    "key1" : "value1",
    "key2" : "value2",
    "key3" : "value3",
    "key4" : "value4"
  } 

  const return_value = {
    "message": "Testing",
    "status": 201,
  }

  fetch.mockResponseOnce(JSON.stringify(return_value));

  const res = await PUT(url, bodyData);
  const data = await res.json();
  expect(data.status).toEqual(201);
});

it("API : FACTORY : PUT method with error (in body data)", async () => {
  const url = `${BASE_API_URL}/api/testing`;
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
    const bodyData = {
      "key1" : getRandomNumber(0, 100),
      "key2" : "value2",
      "key3" : `asdfasdf${getRandomNumber(0, 100)}dasdf`,
      "key4" : "value4"
    } 
    fetch.mockResponseOnce(JSON.stringify(val));
    const res = await PUT(url, bodyData);
    const data = await res.json();
    expect(data.status).not.toEqual(200);
  }

});
