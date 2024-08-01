import './style.css'

import { sendRequest } from './sendRequest'

document.querySelector('#app').innerHTML = `<div class="all">
        <div class="search">
            <input type="text" id="inputField">
            <div class="results"></div>
        </div>
        <div class="fiche"></div>
        <div class="display"></div>
    </div>`

let inputField = document.querySelector("#inputField")
let resultsZone = document.querySelector(".results")


inputField.addEventListener("keyup", () => {
    console.log("inputField " + inputField.value)
    resultsZone.innerHTML = ""
    sendRequest(inputField.value)
})
