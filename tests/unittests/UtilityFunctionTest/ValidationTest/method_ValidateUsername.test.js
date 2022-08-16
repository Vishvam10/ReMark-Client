import { validateUsername } from "../../../../src/js/utils/validations";

describe('UTILITY FUNCTIONS : VALIDATE USERNAME', () => {
  it("Without error", async () => {
    const testCases = [
        {
            "username" : "username",
            "expected_result" : true
        },
        {
            "username" : "Username1234",
            "expected_result" : true
        },
        {
            "username" : "user123!",
            "expected_result" : false
        },
        {
            "username" : "user name",
            "expected_result" : false
        },
        {
            "username" : "test_name",
            "expected_result" : true
        },
        {
            "username" : "",
            "expected_result" : false
        },
    ]
    for(const t of testCases) {
        const check = validateUsername(t["username"]);
        expect(check).toEqual(t["expected_result"]);
    }
  });

})