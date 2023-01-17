function displayLastModified() {
    const lastModified = document.lastModified;
    const lastModifiedElement = document.getElementById("last-modified");
    lastModifiedElement.innerHTML = `Last modified: ${lastModified}`;
    let date =  new Date().getFullYear();
    const dateYear = document.getElementById("year-Name")
    dateYear.innerHTML = `© ${date} | Alexander Hansen | Arizona`;

  }
  

window.onload = displayLastModified;
