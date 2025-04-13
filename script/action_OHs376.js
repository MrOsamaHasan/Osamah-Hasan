function onDragStart(event) {
    
    event.dataTransfer.setData('text/plain', event.target.id);
    event.target.style.opacity = '0.5'; 
  }

  function onDragOver(event) {
    event.preventDefault(); 
  }

  function onDrop(event) {
    event.preventDefault();

    const id = event.dataTransfer.getData('text/plain');
    const draggedImage = document.getElementById(id);

    const dropzone = event.target;

    
    dropzone.textContent = '';

    // Move the image to the drop zone
    dropzone.appendChild(draggedImage);

    
    draggedImage.style.opacity = '0.7';

    event.dataTransfer.clearData();
  }