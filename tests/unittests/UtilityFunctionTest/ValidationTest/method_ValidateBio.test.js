import { validateBio } from "../../../../src/js/utils/validations";

// Any character but length < 80

describe('UTILITY FUNCTIONS : VALIDATE BIO', () => {
  it("Without error", async () => {
    const testCases = [
        {
            "bio" : "Yo ! I'm the admin.",
            "expected_result" : true
        },
        {
            "bio" : "Sample2312😁",
            "expected_result" : true
        },
        {
            "bio" : "Sample2312😁 Sample2312😁 Sample2312😁 Sample2312😁 Sample2312😁Sample2312😁Sample2312😁Sample2312😁Sample2312😁Sample2312😁D#(@JD@)#JDOIJDASD",
            "expected_result" : false
        },
       
    ]
    for(const t of testCases) {
        const check = validateBio(t["bio"]);
        expect(check).toEqual(t["expected_result"]);
    }
  });

})