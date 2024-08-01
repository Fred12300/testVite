import { requestShow } from './getShows'
export const sendRequest = async (val) => {const reponse = await fetch(`https://api.tvmaze.com/search/shows?q=${val}`)
const series = await reponse.json()
console.log(series)
let resultsZone = document.querySelector(".results")
series.map((x) => {
    let resultCard = document.createElement("div")
        resultCard.style.display = "flex"
        resultCard.style.margin = "10px"
        resultCard.style.justifyContent = "left"
        resultCard.style.alignItems = "center"
        resultCard.className = "result"
        resultsZone.appendChild(resultCard)
        resultCard.addEventListener("click", () => {
            requestShow(x.show.name)
        })

    let image = document.createElement("img")

        image.src = x.show.image?.medium || "https://st2.depositphotos.com/4323461/9818/v/950/depositphotos_98187808-stock-illustration-oops-problem-man-business-concept.jpg"

        image.className = "imageResult"
    resultCard.appendChild(image)

    let resultat = document.createElement("div")
        resultat.innerText = x.show.name
        resultat.style.marginLeft = "10px"
    resultCard.appendChild(resultat)
    
    
})}