import { validateAuthority } from "../../../../src/js/utils/validations";

describe('UTILITY FUNCTIONS : VALIDATE AUTHORITY', () => {
  it("Without error", async () => {
    const testCases = [
        {
            "authority" : "user",
            "expected_result" : true
        },
        {
            "authority" : "User",
            "expected_result" : false
        },
        {
            "authority" : "uSer",
            "expected_result" : false
        },
        {
            "authority" : "admin",
            "expected_result" : true
        },
        {
            "authority" : "Admin",
            "expected_result" : false
        },
        {
            "authority" : "aDmin",
            "expected_result" : false
        },
        {
            "authority" : "test",
            "expected_result" : false
        },
        {
            "authority" : "",
            "expected_result" : false
        },
    ]
    for(const t of testCases) {
        const check = validateAuthority(t["authority"]);
        expect(check).toEqual(t["expected_result"]);
    }
  });

})