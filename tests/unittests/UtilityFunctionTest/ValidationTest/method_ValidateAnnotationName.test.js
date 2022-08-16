import { validateAnnotationName } from "../../../../src/js/utils/validations";

describe('UTILITY FUNCTIONS : VALIDATE ANNOTATION NAME', () => {
  it("Without error", async () => {
    const testCases = [
        {
            "annotation_name" : "Change this copy !",
            "expected_result" : true
        },
        {
            "annotation_name" : "Fix this image 😐",
            "expected_result" : true
        },
        {
            "annotation_name" : "",
            "expected_result" : false
        },
        {
            "annotation_name" : "Round 1234",
            "expected_result" : true
        },
        {
            "annotation_name" : "Iteration #1",
            "expected_result" : false
        },
        {
            "annotation_name" : "*",
            "expected_result" : false
        },
    ]
    for(const t of testCases) {
        const check = validateAnnotationName(t["annotation_name"]);
        expect(check).toEqual(t["expected_result"]);
    }
  });

})