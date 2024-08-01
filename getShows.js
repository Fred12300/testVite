export const requestShow = async (showSelected) => {
    const reponse = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${showSelected}`)
    const selectedShow = await reponse.json()
    console.log(selectedShow)
    let fiche = document.querySelector(".fiche")
    let displayZone = document.querySelector(".display")
    let resultLink = document.querySelectorAll(".result")
    let checkedDefault = ["name", "image", "summary"]

    fiche.innerHTML = ""
    displayZone.innerHTML = ""
    console.log(Object.keys(selectedShow))
               Object.keys(selectedShow).forEach((key)=>{
                   console.log(key)
                   let oneKey = document.createElement("div")
                       oneKey.className ="oneKey"
                   displayZone.appendChild(oneKey)
                   let keyText = document.createElement("p")
                       keyText.innerText = key
                   let checkBox = document.createElement("input")
                       checkBox.type = "checkbox"
                       checkBox.className = key
                   if(checkedDefault.includes(key)){
                       checkBox.checked = "true"
                   }
                   oneKey.appendChild(checkBox)
                   oneKey.appendChild(keyText)
                   checkBox.addEventListener("change", () => {affEle(

                   )})
               })


               let title = document.createElement("h1")
                   title.innerText = selectedShow.name
               fiche.appendChild(title)
               let image = document.createElement("img")
                   if(selectedShow.image === null){
                       image.src = "https://st2.depositphotos.com/4323461/9818/v/950/depositphotos_98187808-stock-illustration-oops-problem-man-business-concept.jpg"
                   } else {
                       image.src = selectedShow.image.medium
                   }
                   image.className = "imagePreview"
               fiche.appendChild(image)
               let description = document.createElement("p")
                   description.innerHTML = selectedShow.summary
               fiche.appendChild(description)
               
}
