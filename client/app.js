const submitButton = document.getElementById("submitButton");
const fileInput = document.getElementById("fileInput");
const formGroup = document.getElementById("formGroup");

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
    const headers = new Headers();

    formData.append("file", fileInput.files[0])
    headers.append("Content-Type", "multipart/form-data")

    fetch("http://localhost:4000/upload", { 
        method: "POST",
        // headers,
        body: formData
    }).then(response => {
        console.log(response)
    })
})
