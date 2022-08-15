/**
 * @jest-environment jsdom
*/

// TODO

import { overrideContextMenu } from "../../../src/js/contextmenu";

it("CONTEXTMENU : Override contextmenu method", async () => {

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

});


