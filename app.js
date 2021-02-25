const paramContainer = document.querySelector("#param-container")
const paramContainerItem = document.querySelector("#param-container-item")
const firstParam = paramContainer.querySelector(".param")
const firstParamItem = paramContainerItem.querySelector(".param-item")
const btnAddParam = document.querySelector("#add-param")
const btnAddParamItem = document.querySelector("#add-param-item")
const lsParam = document.querySelector("#ls-param")
const lsParamItem = document.querySelector("#ls-param-item")
const labelArray = document.querySelector("#label-array")

let inputParam = []
let inputParamItem = []

btnAddParam.addEventListener("click", () => {
    let newInputParam = document.createElement("input")
    newInputParam.setAttribute("name", "param")
    newInputParam.setAttribute("class", "param")
    newInputParam.setAttribute("type", "text")

    firstParam.after(newInputParam)
})

btnAddParamItem.addEventListener("click", () => {
    let newInputParam = document.createElement("input")
    newInputParam.setAttribute("name", "param-item")
    newInputParam.setAttribute("class", "param-item")
    newInputParam.setAttribute("type", "text")

    firstParamItem.after(newInputParam)
})


document.querySelector('#param-array').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    inputParam = formData.getAll("param")

    lsParam.innerHTML = `Liste des parametres : ${inputParam}`

    console.log(inputParam)
})

document.querySelector('#param-array-item').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    inputParamItem = formData.getAll("param-item")

    lsParamItem.innerHTML = `Liste des parametres : ${inputParamItem}`

    console.log(inputParamItem)
})

document.querySelector('#array-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    let array = formData.get("array")

    array = array.replaceAll(/\s/g,'')

    array = array.split( "")

    for (let i=0; i < array.length; i++ ) {
        if ((array[i+1] === "0" || array[i+1] === "1" || array[i+1] === "2" || array[i+1] === "3" || array[i+1] === "4" || array[i+1] === "5" || array[i+1] === "6" || array[i+1] === "7" || array[i+1] === "8" || array[i+1] === "9") && (array[i] === "0" || array[i] === "1" || array[i] === "2" || array[i] === "3" || array[i] === "4" || array[i] === "5" || array[i] === "6" || array[i] === "7" || array[i] === "8" || array[i] === "9")) {
            array[i] = `${array[i]}${array[i+1]}`
            array.splice(i+1, 1)
        }
    }

    for (let i=0; i < array.length; i++ ) {
        for (let j=0; j < inputParam.length; j++ ) {
            if (array[i] === inputParam[j]) {
                array[i] = "1"
                break
            } else if (array[i] === inputParamItem[j]) {
                array[i] = "0"
                break
            }
        }
    }

    labelArray.innerHTML = array.join('')

})



