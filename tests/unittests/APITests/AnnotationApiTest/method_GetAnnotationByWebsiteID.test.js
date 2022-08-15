/**
 * @jest-environment jsdom
*/

// We need jsdom for Xpath checks

import fetchMock from "jest-fetch-mock";
import { getAnnotationByWebsiteID } from "../../../../src/js/annotationAPI";
import { remarkGlobalData } from "../../../../src/js/global";

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

it("API : ANNOTATION API : Get annotation by website ID method without error", async () => {

    // Setup

    const return_values = [
        {
          "annotation_id": "92fac51c354f490990865432a1cbd3c1",
          "annotation_name": "Phone Image",
          "comments": [],
          "created_at": "Sun, 14 Aug 2022 14:56:13 GMT",
          "created_by": "Testing",
          "created_by_id": "4fa8e53790154685b993fe901aaf95bb",
          "html_id": "null",
          "html_tag": "img",
          "html_text_content": "null",
          "modified_by": null,
          "modified_by_id": null,
          "node_xpath": "//html[1]/body[1]/main[1]/section[3]/div[2]/div[2]/img[1]",
          "resolved": false,
          "tags": "phone,image",
          "updated_at": "Sun, 14 Aug 2022 14:56:13 GMT",
          "website_id": "f734145bf92b4da4a3dbf4cdd03158e1",
          "website_uri": "http://127.0.0.1:5500/demo/?new_name=COPY+%21%21%21%21%21&new_tags=asfa%2Casdf&submit="
        },
        {
          "annotation_id": "eae8c31646cb4ec0a8e3b53279d535fd",
          "annotation_name": "Phone Image Container",
          "comments": [],
          "created_at": "Sun, 14 Aug 2022 14:56:29 GMT",
          "created_by": "Testing",
          "created_by_id": "4fa8e53790154685b993fe901aaf95bb",
          "html_id": "null",
          "html_tag": "div",
          "html_text_content": "",
          "modified_by": null,
          "modified_by_id": null,
          "node_xpath": "//html[1]/body[1]/main[1]/section[3]/div[2]/div[6]",
          "resolved": false,
          "tags": "container",
          "updated_at": "Sun, 14 Aug 2022 14:56:29 GMT",
          "website_id": "f734145bf92b4da4a3dbf4cdd03158e1",
          "website_uri": "http://127.0.0.1:5500/demo/?new_name=COPY+%21%21%21%21%21&new_tags=asfa%2Casdf&submit="
        },
        {
          "annotation_id": "3c2764b08c5046d283e69c23eac463b6",
          "annotation_name": "Form element",
          "comments": [],
          "created_at": "Sun, 14 Aug 2022 14:56:40 GMT",
          "created_by": "Testing",
          "created_by_id": "4fa8e53790154685b993fe901aaf95bb",
          "html_id": "email",
          "html_tag": "input",
          "html_text_content": "null",
          "modified_by": null,
          "modified_by_id": null,
          "node_xpath": "//html[1]/body[1]/main[1]/section[7]/div[1]/div[1]/div[1]/form[1]/div[2]/input[1]",
          "resolved": false,
          "tags": "form",
          "updated_at": "Sun, 14 Aug 2022 14:56:40 GMT",
          "website_id": "f734145bf92b4da4a3dbf4cdd03158e1",
          "website_uri": "http://127.0.0.1:5500/demo/?new_name=COPY+%21%21%21%21%21&new_tags=asfa%2Casdf&submit="
        },
        {
          "annotation_id": "e180bb09090e4238b8d3e2bb9517c89b",
          "annotation_name": "Go For A Simpler Word",
          "comments": [],
          "created_at": "Sun, 14 Aug 2022 15:56:37 GMT",
          "created_by": "Testing",
          "created_by_id": "4fa8e53790154685b993fe901aaf95bb",
          "html_id": "null",
          "html_tag": "span",
          "html_text_content": "Pescatarian",
          "modified_by": null,
          "modified_by_id": null,
          "node_xpath": "//html[1]/body[1]/main[1]/section[4]/div[2]/div[3]/ul[1]/li[3]/span[1]",
          "resolved": false,
          "tags": "spelling",
          "updated_at": "Sun, 14 Aug 2022 15:57:50 GMT",
          "website_id": "f734145bf92b4da4a3dbf4cdd03158e1",
          "website_uri": "http://127.0.0.1:5500/demo/?deleteConfirmation=Image"
        },
        {
          "annotation_id": "9a8e7508ae824de5b41afa1b38344c4c",
          "annotation_name": "Testing",
          "comments": [],
          "created_at": "Mon, 15 Aug 2022 14:53:34 GMT",
          "created_by": "Testing",
          "created_by_id": "4fa8e53790154685b993fe901aaf95bb",
          "html_id": "null",
          "html_tag": "h1",
          "html_text_content": "A healthy meal delivered to your door, every single day",
          "modified_by": null,
          "modified_by_id": null,
          "node_xpath": "//html[1]/body[1]/main[1]/section[1]/div[1]/div[1]/h1[1]",
          "resolved": false,
          "tags": "tag1,tag2,tag3",
          "updated_at": "Mon, 15 Aug 2022 14:53:34 GMT",
          "website_id": "f734145bf92b4da4a3dbf4cdd03158e1",
          "website_uri": "http://127.0.0.1:5500/demo/?deleteAnnotationConfirmation=asda"
        },
        {
          "annotation_id": "361d18cb95ef4ced8fb675a97c9c1f2a",
          "annotation_name": "asdf",
          "comments": [],
          "created_at": "Mon, 15 Aug 2022 14:58:48 GMT",
          "created_by": "Testing",
          "created_by_id": "4fa8e53790154685b993fe901aaf95bb",
          "html_id": "null",
          "html_tag": "img",
          "html_text_content": "null",
          "modified_by": null,
          "modified_by_id": null,
          "node_xpath": "//html[1]/body[1]/main[1]/section[1]/div[1]/div[2]/picture[1]/img[1]",
          "resolved": false,
          "tags": "asdf",
          "updated_at": "Mon, 15 Aug 2022 14:58:48 GMT",
          "website_id": "f734145bf92b4da4a3dbf4cdd03158e1",
          "website_uri": "http://127.0.0.1:5500/demo/?deleteAnnotationConfirmation=asda"
        }
    ]

    remarkGlobalData["api_key"] = "fasdfasdfqi09fi04fq9-20i3f0q92j4foqire"
    remarkGlobalData["website_id"] = "f734145bf92b4da4a3dbf4cdd03158e1"

    // Test the function
    
    fetch.mockResponseOnce(JSON.stringify(return_values));
    const data = await getAnnotationByWebsiteID();

    expect(data).not.toBeNull();
    expect(remarkGlobalData["annotations"]).toEqual(return_values);

});



