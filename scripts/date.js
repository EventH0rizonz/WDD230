function displayLastModified() {
    const lastModified = document.lastModified;
    const lastModifiedElement = document.getElementById("last-modified");
    lastModifiedElement.innerHTML = `Last modified: ${lastModified}`;
  }
  

window.onload = displayLastModified;