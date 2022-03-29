export function setDarkMode(value) {
  if (value) {
    document.body.classList.add("light-mode");
  } else {
    document.body.classList.remove("light-mode");
  }
}

export function getCV() {
  const a = document.createElement("a");
  a.href = "src/fichiers/cv.pdf";
  a.setAttribute("download", "cv.pdf");
  a.click();
}
