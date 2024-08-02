import { affEle } from "./affEle"
export const requestShow = async (showSelected) => {
    const reponse = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${showSelected}`)
    const selectedShow = await reponse.json()
    let fiche = document.querySelector(".fiche")
    let displayZone = document.querySelector(".display")
    fiche.innerHTML = ""
    displayZone.innerHTML = ""
    
            Object.keys(selectedShow).forEach((key)=>{
                let oneKey = document.createElement("div")
                    oneKey.className ="oneKey"
                displayZone.appendChild(oneKey)
                let keyText = document.createElement("p")
                    keyText.innerText = key
                let checkBox = document.createElement("input")
                    checkBox.type = "checkbox"
                    checkBox.className = `${key} checkbox`
                oneKey.appendChild(checkBox)
                oneKey.appendChild(keyText)
                checkBox.addEventListener("change", () => {affEle(selectedShow,checkBox.checked,checkBox.classList
            )})
            })
            
            affEle(selectedShow)
}
