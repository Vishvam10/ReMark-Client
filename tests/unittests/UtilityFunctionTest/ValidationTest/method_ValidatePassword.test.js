import { validatePassword } from "../../../../src/js/utils/validations";

// Min 8 letter password, with at least a symbol, upper and lower case letters and a number

describe('UTILITY FUNCTIONS : VALIDATE PASSWORD', () => {
  it("Without error", async () => {
    const testCases = [
        {
            "password" : "aA@3123",
            "expected_result" : false
        },
        {
            "password" : "aaaa123@#",
            "expected_result" : false
        },
        {
            "password" : "ABSMF1234@",
            "expected_result" : false
        },
        {
            "password" : "GWRPWKDasd#$",
            "expected_result" : false
        },
        {
            "password" : "ADNSK112asdasd",
            "expected_result" : false
        },
        {
            "password" : "1234!$#!@#!@!",
            "expected_result" : false
        },
        {
            "password" : "asdfASDF1234!@#$",
            "expected_result" : true
        },
        {
            "password" : "Testing1234!@#$",
            "expected_result" : true
        },
        {
            "password" : "PASSWORDtest!@#$",
            "expected_result" : false
        },
        {
            "password" : "#!@#Test12312",
            "expected_result" : true
        },
    ]
    for(const t of testCases) {
        const check = validatePassword(t["password"]);
        if(check != t["expected_result"]) {
            expect(check).toEqual(t["expected_result"]);
        }
    }
  });

})