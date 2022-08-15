/**
 * @jest-environment jsdom
*/

import { hideAlert, showAlert } from "./../src/js/alert";


test('ALERTS : Show alert method ', () => {
    const types = ["SUCCESS", "INTIMATION", "ERROR"];
    const message = "Testing message !";
    for(const t of types) {
        const element = showAlert(t, message);
        document.body.innerHTML = element;
        const alert = document.getElementById("remark_error_container");
        expect(alert).not.toBeNull();
        expect(alert.children.length).toEqual(1);
    }
});

test('ALERTS : hide alert method ', () => {
    const alertMarkup = `
        <div id="remark_error_container" class="remark_error_container remark_error_container_error">
            <p class="remark_error_text">Testing Message !</p>
        </div>
    `
    document.body.innerHTML = alertMarkup;
    const alert = document.getElementById("remark_error_container");
    console.log(alert.childElementCount);
    hideAlert()
  
});