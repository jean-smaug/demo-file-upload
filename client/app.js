const submitButton = document.getElementById("submitButton");
const fileInput = document.getElementById("fileInput");

submitButton.addEventListener("click", (e) => {
    e.preventDefault()

    const formData = new FormData()

    formData.append("profile", fileInput.files[0])

    fetch({ 
        url: "http://localhost:8080",
        body: formData
    }).then(response => {
        console.log(response)
    })
})
