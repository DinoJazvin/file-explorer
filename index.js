newFileBtn = document.querySelector(".new-file-btn")
backBtn = document.querySelector(".back-btn")
nextFileBtn = document.querySelector(".forward-btn")
fileContainer = document.querySelector(".file-container")

let root = {id: "root", content: []}
let currentFile = root
let forwardFile = null
let fileStack = []
let forwardStack = []
let count = 0


newFileBtn.addEventListener("click", (event) => {
    addFile()
})

backBtn.addEventListener(("click"), (event) => {
    backOutOfFile()
})

nextFileBtn.addEventListener(("click"), (event) => {
    goForwardFile()
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
    renderFiles()
}

function gotIntoFile(newFile){
    forwardStack = []
    fileContainer.classList.add("swipe-left")
    setTimeout(() => {
        fileStack.push(currentFile)
        currentFile = newFile
        renderFiles()
        fileContainer.classList.remove("swipe-left")
    }, 300)
}

function backOutOfFile() {
    if(fileStack.length > 0){
        forwardFile = currentFile
        forwardStack.push(currentFile)
        currentFile = fileStack.pop()
        // console.log("Regular Stack: ", fileStack)
        // console.log("Forward Stack: ", forwardStack)
        renderFiles()
    }
}

function goForwardFile() {
    if(forwardStack.length > 0){
        fileStack.push(currentFile)
        currentFile = forwardStack.pop()
        forwardFile = forwardStack.length ? forwardStack[forwardStack.length-1] : null
        renderFiles()
        // console.log("Regular Stack: ", fileStack)
        // console.log("Forward Stack: ", forwardStack)
    }
    
}

function renderFiles(){
    fileContainer.innerHTML = ""
    currentFile.content.forEach((file) => {
        return fileContainer.innerHTML += 
        `<div class="file-holder">
            <img class="folder-icon" src="images/folder-basic.png" alt="folder icon"/>
            <p class="folder" id="${file.id}"> File ${file.id}</p>
        </div>
        `
    })
}