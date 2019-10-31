const submitButton = document.getElementById("submitButton");
const fileInput = document.getElementById("fileInput");
const formGroup = document.getElementById("formGroup");
const message = document.getElementById("message");
const form = document.getElementById("form");

function toggleFileInputStatus() {
  if (formGroup.className.includes("FormGroup--WillDrop")) {
    formGroup.className = "FormGroup";

    return;
  }

  formGroup.className += " FormGroup--WillDrop";
}

fileInput.addEventListener("dragenter", toggleFileInputStatus);
fileInput.addEventListener("dragleave", toggleFileInputStatus);

submitButton.addEventListener("click", async e => {
  e.preventDefault();
  if (!window.fetch || !window.FormData) {
    alert("Tu crois que c'est du respect mon garçon ? Est ce que tu crois que c'est du respect d'utiliser un navigateur archaïque ?");
  }

  const formData = new FormData(form);

  try {
    await fetch("http://localhost:4000/upload.php", {
      method: "POST",
      body: formData
    });

    message.innerText = "Fichier uploadé avec succès \\o/";
  } catch (error) {
    message.innerText =
      "C'est la cata, c'est la cata, c'est la catastrophe /o\\";
  }

  setTimeout(() => {
    message.innerText = "";
  }, 2000);
});
