function displayLastModified() {
    const lastModified = document.lastModified;
    const lastModifiedElement = document.getElementById("last-modified");
    lastModifiedElement.innerHTML = `Last modified: ${lastModified}`;
    let date =  new Date().getFullYear();
    const dateYear = document.getElementById("year-Name")
    dateYear.innerHTML = `© ${date} Tucson Chamber | Alexander Hansen | WDD 230 Project`;
    var today = new Date();
    var date1 = today.toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})
    document.getElementById("date").innerHTML = date1 + " Hello world";

  }
window.onload = displayLastModified;

let banner = document.getElementById("banner");
banner.innerHTML = "banner";

