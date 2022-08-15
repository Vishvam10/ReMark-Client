import { setHeaders } from "../../src/js/apiFactory";

it("API : FACTORY : Set header method", async () => {
    // Only api_key
    const api_key = "testasdfasdfweq34-12312 pim-239ie-12o3123";
   
  
    const return_value_1 = {
      'Access-Control-Allow-Origin': '*',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'API_KEY' : api_key
    }
  
    const headers_1 = setHeaders(api_key)
  
    expect(headers_1).toEqual(return_value_1);
    
    // Only auth_token
    const auth_token = "testewqe21e1fmasidufnpq93hfe9wfqmc9wex9qywx897qrie";
    
    const return_value_2 = {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${auth_token}`
    }

    const headers_2 = setHeaders(null, auth_token)
  
    expect(headers_2).toEqual(return_value_2);
    
    // Both api_key and auth_token
    const return_value_3 = {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'API_KEY' : api_key,
        'Authorization' : `Bearer ${auth_token}`,
    }
  
    const headers_3 = setHeaders(api_key, auth_token);
  
    expect(headers_3).toEqual(return_value_3);
    
    
    // Neither api_key nor auth_token
    const return_value_4 = {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
  
    const headers_4 = setHeaders()
  
    expect(headers_4).toEqual(return_value_4);
  
  });