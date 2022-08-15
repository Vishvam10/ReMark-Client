/**
 * @jest-environment jsdom
*/

// We need jsdom for Xpath checks

import fetchMock from "jest-fetch-mock";
import { CREATE_ANNOTATION_MODAL } from "../../../src/js/components";
import { createAnnotation } from "../../../src/js/annotationAPI";
import { remarkGlobalData } from "../../../src/js/global";

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

it("API : ANNOTATION API : createAnnotation method without error", async () => {

    // Setup

    const testing_markup = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Testing</title>
      </head>
      <body>
          <div id="test1">
              <p id="test2" class="text">Hello World !</p>
          </div>
      </body>
      </html>
    `

    document.body.insertAdjacentHTML("beforeend", testing_markup);

    const bodyData = {
        "annotation_name": "Testing",
        "tags": "tag1,tag2,tag3",
        "node_xpath": "//html[1]/body[1]/div[0]",
        "html_tag": "p",
        "html_class": "text",
        "html_id": "test2",
        "html_text_content": "Hello World !",
        "website_uri": "http://127.0.0.1:5500/demo/",
        "user_id": "4fa8e53790154685b993fe901aaf95bb",
        "user_name": "Testing",
        "website_id": "f734145bf92b4da4a3dbf4cdd03158e1"
    }

    const return_value = {
        "data": {
          "annotation_id": "361d18cb95ef4ced8fb675a97c9c1f2a",
          "annotation_name": "asdf",
          "created_by": "Testing",
          "created_by_id": "4fa8e53790154685b993fe901aaf95bb",
          "n_annotations": 15,
          "node_xpath": "//html[1]/body[1]/div[0]"
        },
        "message": "New Annotation Created",
        "status": 201
    }

    remarkGlobalData["api_key"] = "fasdfasdfqi09fi04fq9-20i3f0q92j4foqire"
    remarkGlobalData["website_id"] = bodyData["website_id"]

    // Create the create_annotation_modal and the HTML element
    
    document.body.insertAdjacentHTML("afterbegin", CREATE_ANNOTATION_MODAL(bodyData["node_xpath"], bodyData["html_tag"], bodyData["html_class"], bodyData["html_id"], bodyData["html_text_content"]))

    const ele = document.getElementById(bodyData["html_id"]);

    // Test the function
    
    // fetch.mockResponse instead of fetch.mockResponseOnce - to
    // basically ignore the getAnnotationByWebsiteID() method 
    // nested in it
    fetch.mockResponse(JSON.stringify(return_value));
    const data = await createAnnotation(bodyData);

    expect(data).not.toBeNull();
    expect(data.status).toEqual(201);

    const create_modal_check = document.getElementById("remark_create_annotation_modal");
    expect(create_modal_check).toBeNull();

    const check = ele.className.includes("highlight_element_strong")
    expect(check).toEqual(true);


});


