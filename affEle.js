//let actualChecked = ["name", "image", "summary"]
export const affEle = (show,checkIt,checkBox) => {
    console.log("show " + show, "checkIt " + checkIt, "checkBox " + checkBox)
    let elem = document.createElement("div")
    let elemTitle =document.createElement("h4")
    let card = document.querySelector(".fiche")
        card.innerHTML = ""
    let allKeys = document.getElementsByClassName("checkbox")
        Array.from(allKeys).map((wich) => {
            console.log(wich)
            if(actualChecked.includes(wich.classList[0])){
                wich.checked = "true"
            }
            /* wich.checked === "true" ? actualChecked.push(wich.classList[0]) : actualChecked.splice(actualChecked.indexOf(wich.classList[0]),1);
            console.log(actualChecked); */
            if(wich.checked){
                switch (wich.classList[0]) {
                    case "image":
                        elemTitle =document.createElement("h4")
                        elem = document.createElement("div")
                        elem.className = wich.classList[0]
                        elem.style.backgroundImage = `url(${show[wich.classList[0]]?.medium})`
                        elem.style.backgroundColor = "blue"
                        elem.style.width = "15rem"
                        elem.style.height = "20rem"
                        card.appendChild(elem)
                        break;
                    
                    case "schedule":
                    case "network":
                    case "rating":
                    case "externals":
                    case "_links":
                        elemTitle =document.createElement("h4")
                        elem = document.createElement("div")
                        elemTitle.innerText = wich.classList[0]
                        elem.className = wich.classList[0]
                        card.appendChild(elemTitle)
                        card.appendChild(elem)
                        for (const [key, value] of Object.entries(show[wich.classList[0]])) {
                                console.log(`${key}: ${value}`)
                            let objEle = document.createElement("h5")
                                objEle.innerText = `${key}`
                            let objEleContent = document.createElement("p")
                                objEleContent.innerText = `${value}`
                                elem.appendChild(objEle)
                                elem.appendChild(objEleContent)
                            }
                        break;
                    
                    default:
                        elemTitle =document.createElement("h4")
                        elem = document.createElement("div")
                        elemTitle.innerText = wich.classList[0]
                        elem.className = wich.classList[0]
                        elem.innerHTML = show[wich.classList[0]]
                        card.appendChild(elemTitle)
                        card.appendChild(elem)
                        break;
                }
            }
        }
    )
}