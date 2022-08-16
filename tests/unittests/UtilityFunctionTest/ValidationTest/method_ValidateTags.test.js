import { validateTags } from "../../../../src/js/utils/validations";

// Only comma separated lower case alphabet and number. 
// No special character and no trailing or leading spaces.

describe('UTILITY FUNCTIONS : VALIDATE TAGS', () => {
  it("Without error", async () => {
    const testCases = [
        {
            "tags" : "tag1",
            "expected_result" : true
        },
        {
            "tags" : "tag1,tag2",
            "expected_result" : true
        },
        {
            "tags" : "tag_1, tag_2, tag3 ",
            "expected_result" : false
        },
        {
            "tags" : "tag_1, tag_2, tag3",
            "expected_result" : true
        },
        {
            "tags" : ",tag1",
            "expected_result" : false
        },
        {
            "tags" : "tag1,",
            "expected_result" : false
        },
        {
            "tags" : ",tag1,",
            "expected_result" : false
        },
        {
            "tags" : ",,",
            "expected_result" : false
        },
        {
            "tags" : "",
            "expected_result" : false
        },
        {
            "tags" : "asdasd1234",
            "expected_result" : true
        },
        {
            "tags" : "asdaSd1234",
            "expected_result" : false
        },
        {
            "tags" : "priority1",
            "expected_result" : true
        },
        {
            "tags" : "test!12",
            "expected_result" : false
        },
        {
            "tags" : "#$%!asd",
            "expected_result" : false
        },
    ]
    for(const t of testCases) {
        const check = validateTags(t["tags"]);
        expect(check).toEqual(t["expected_result"]);
    }
  });

})