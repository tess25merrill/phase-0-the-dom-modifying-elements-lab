// Make sure you remove the <main> with id 'main'
main.remove();
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Tess is the champion";
document.body.append(newHeader);

// Make sure your <h1> with id 'victory' includes the text \"is the champion\" inside it
