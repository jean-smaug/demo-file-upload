const submitButton = document.getElementById("submitButton");
const fileInput = document.getElementById("fileInput");
const formGroup = document.getElementById("formGroup");
const message = document.getElementById("message");

function toggleFileInputStatus() {
    if(formGroup.className.includes("FormGroup--WillDrop")) {
        formGroup.className = "FormGroup"

        return
    }

    formGroup.className += " FormGroup--WillDrop"
}

fileInput.addEventListener("dragenter", toggleFileInputStatus)
fileInput.addEventListener("dragleave", toggleFileInputStatus)

submitButton.addEventListener("click", (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("file", fileInput.files[0])

    fetch("http://localhost:4000/upload", { 
        method: "POST",
        body: formData
    })
    .then(() => {
        message.innerText = "Fichier uploadé avec succès \\o/"
    })
    .catch(() => {
        message.innerText = "C'est la cata, c'est la cata, c'est la catastrophe /o\\"
    })
})
