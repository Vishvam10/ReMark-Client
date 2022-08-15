import fetchMock from "jest-fetch-mock";
import { DELETE } from "../../../../src/js/apiFactory";
import { BASE_API_URL } from "../../../../src/js/constants";

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

describe('API : FACTORY : DELETE method', () => {
  const url = `${BASE_API_URL}/api/testing/12341234`;

  it("Without error", async () => {
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
  
  it("With error (in body data)", async () => {
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

})