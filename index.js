
newFileButton = document.querySelector(".new-file-btn")
backButton = document.querySelector(".back-btn")
fileContainer = document.querySelector(".file-container")

fileArray = []
fileStack = []
currentFile = ""

newFileButton.addEventListener("click", function(){
    fileArray.push({
        id: `File ${fileArray.length+1}`,
        img: "📁",
        content: [],
    })
    console.log(currentFile)
    renderFiles()
})

backButton.addEventListener("click", (event) => {
    console.log(fileStack.pop().content)
    // renderNewFiles(fileStack.pop)
})

function renderFiles(fileID){
    fileContainer.innerHTML = ""
    fileArray.forEach((file, index) => {
        return fileContainer.innerHTML += `<p id="${file.id}">${file.img} ${file.id}</p>`
    })
}

function renderNewFiles(fileToRender){
    // fileContainer.innerHTML = ""
    // fileToRender = fileArray.find((file) => file.id === fileID)
    fileStack.push(fileToRender)
    console.log(fileToRender)
    fileContainer.innerHTML = ""
    fileArray = [...fileToRender.content]
    fileArray.forEach((file, index) => {
        return fileContainer.innerHTML += `<p id="${file.id}">${file.img} ${file.id}</p>`
    })
}

fileContainer.addEventListener("click", (event) => {
    event.preventDefault()
    const clickedFile = event.target
    // console.log(clickedFile)
    if(clickedFile.tagName === "P"){
        const fileId = clickedFile.getAttribute("id")
        console.log(`You clicked ${fileId}`)
        // currentFile = fileId
        fileToRender = fileArray.find((file) => file.id === fileId)
        renderNewFiles(fileToRender)
    }
}) 

