// Drag-and-Drop Logic
function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var item = document.getElementById(data).cloneNode(true);
    item.setAttribute("draggable", "false");
    ev.target.appendChild(item);
  }
  
  // Geolocation
  function getLocation() {
    const status = document.getElementById("location-status");
    const map = document.getElementById("map");
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        status.innerText = `Latitude: ${lat}, Longitude: ${lon}`;
        map.innerHTML = `<iframe width="100%" height="300" frameborder="0" 
          src="https://maps.google.com/maps?q=${lat},${lon}&z=15&output=embed">
        </iframe>`;
      }, () => {
        status.innerText = "Unable to retrieve location.";
      });
    } else {
      status.innerText = "Geolocation is not supported by your browser.";
    }
  }
  