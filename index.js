newFileBtn = document.querySelector(".new-file-btn")
backBtn = document.querySelector(".back-btn")
fileContainer = document.querySelector(".file-container")

let root = {id: "root", content: []}
let currentFile = root
let fileStack = []
let count = 0


newFileBtn.addEventListener("click", (event) => {
    addFile()
})

backBtn.addEventListener(("click"), (event) => {
    backOutOfFile()
})

fileContainer.addEventListener("click", (event) => {
    if(event.target.tagName === "P"){
        gotIntoFile(currentFile.content.find((file) => file.id === event.target.id))
    }
})

function addFile(){
    let newFile = {
        id: `${++count}`,
        img: "📁",
        content: [],
    }
    currentFile.content.push(newFile)
    console.log(currentFile.content)
    renderFiles()
}

function gotIntoFile(newFile){
    fileStack.push(currentFile)
    currentFile = newFile
    renderFiles()
}

function backOutOfFile() {
    if(fileStack.length > 0){
        currentFile = fileStack.pop()
        renderFiles()
    }
}

function renderFiles(){
    fileContainer.innerHTML = ""
    currentFile.content.forEach((file) => {
        return fileContainer.innerHTML += `<p id="${file.id}">${file.img} File ${file.id}</p>`
    })
}

// addFile
    // create new file
    // add it to the currentFile.content
    // renderFiles

// render files
    // loop over the currentFile.content

// gotIntoFile
    // stack.push(currentFile)
    // event delegation to identify the chosen file
    // currentFile = chosenFile
    // renderFiles
    

// backOutOfFile
    // if(fileStack.length > 0) "only if we have a parent to go back to"
        // fileStack.pop()
        // currentFile = fileStack.pop()