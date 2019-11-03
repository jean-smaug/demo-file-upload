const form = document.getElementById("form");
const message = document.getElementById("message");

function toggleFileInputStatus() {
  if (form.className.includes("FormGroup--WillDrop")) {
    form.className = "FormGroup";

    return;
  }

  form.className += " FormGroup--WillDrop";
}

// fileInput.addEventListener("dragenter", toggleFileInputStatus);
// fileInput.addEventListener("dragleave", toggleFileInputStatus);

form.addEventListener("submit", async function(e) {
  e.preventDefault();

  if (!window.fetch || !window.FormData) {
    alert("Tu crois que c'est du respect mon garçon ? Est ce que tu crois que c'est du respect d'utiliser un navigateur archaïque ?");
  }

  const formData = new FormData(this);

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

  this.reset()

  setTimeout(() => {
    message.innerText = "";
  }, 2000);
});
