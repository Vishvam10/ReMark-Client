/**
 * @jest-environment jsdom
*/

// We need jsdom for Xpath checks

import fetchMock from "jest-fetch-mock";
import * as auth from "./../../../../src/js/auth";
// import { handlePostLoginSetup } from "./../../../../src/js/handlers";

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
  jest.spyOn(auth, "postLogin");
});

it("API : AUTHENTICATION : login method without error", async () => {

    // Setup
    
    let remark_login_button_text = "Login";
    let remark_disabled_class = "remark_disabled_button";

    const remark_markup = `
        <div class="remark_init_container">
            <span class="remark_init_text">REMARK</span>
            <button type="button" class="remark_standard_button remark_init_button remark_login_button" id="remark_login_button">${remark_login_button_text}</button>
            <button type="button" class="remark_standard_button remark_init_button ${remark_disabled_class}" id="remark_start">Start Annotation</button>
        </div>
    `
    document.body.insertAdjacentHTML("afterbegin", remark_markup);

    const bodyData = {
        "username": "Testing",
        "password": "tag1,tag2,tag3",
        "authority": "//html[1]/body[1]/div[0]",
    }

    const return_value = {
        "message": "Logged in successfully",
        "status": 200,
        "user_id": "dasmdfoasdfopqjiwe0qjr2p3iwe",
        "user_name": "Testing",
        "access_token": "adnfaosdnf0qjwfiasjdf02-23ijnldfasndioCnaisudonfweaulfaskdhasncq3h8hwe9uaosdjskmd",
        "user_authority": "user"
    }
    
    fetch.mockResponse(JSON.stringify(return_value));
    // const data = await auth.login(bodyData);
    // console.log(data);

});


