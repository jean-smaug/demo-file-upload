const submitButton = document.getElementById("submitButton");
const fileInput = document.getElementById("fileInput");

submitButton.addEventListener("click", (e) => {
    e.preventDefault()

    const formData = new FormData()
    const headers = new Headers();

    formData.append("profile", fileInput.files[0])
    headers.append("Content-Type", "multipart/form-data")

    fetch("http://localhost:4000/upload", { 
        method: "POST",
        // headers,
        body: formData
    }).then(response => {
        console.log(response)
    })
})
