import { validateEmail } from "../../../../src/js/utils/validations";

// Any email but underscore and dots are not allowed

describe('UTILITY FUNCTIONS : VALIDATE EMAIL', () => {
  it("Without error", async () => {
    const testCases = [
        {
            "email_id" : "aA@3123",
            "expected_result" : false
        },
        {
            "email_id" : "adasd.asdasd@fasdf@.com",
            "expected_result" : false
        },
        {
            "email_id" : "sample123.sample.123123@gmail.co.in",
            "expected_result" : false
        },
        {
            "email_id" : "testingtext",
            "expected_result" : false
        },
        {
            "email_id" : "@gmail.com",
            "expected_result" : false
        },
        {
            "email_id" : "**sakmdf.asdasd**@asd.com",
            "expected_result" : false
        },
        {
            "email_id" : "sample_email@gmail.com",
            "expected_result" : false
        },
        {
            "email_id" : "sample1234_sample@yahoo.com",
            "expected_result" : false
        },
        {
            "email_id" : "sdf#!@#!@.com",
            "expected_result" : false
        },
        {
            "email_id" : "teting.testing@gmail.com",
            "expected_result" : false
        },
    ]
    for(const t of testCases) {
        const check = validateEmail(t["password"]);
        expect(check).toEqual(t["expected_result"]);
    }
  });

})