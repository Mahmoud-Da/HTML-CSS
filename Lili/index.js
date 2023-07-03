function searchBox() {
  let input = document.getElementById("text-check");
  let container = document.getElementById("container");

  if (input.value.length === 0) {
    alert("入力してください。");
  } else if (input.value === "lili") {
    for (let i = 1; i <= 100; i++) {
      // Create a new element
      let element = document.createElement("div");

      // Set the text content or any other properties
      element.textContent = "wehweh " + i;

      // Append the element to the container
      container.appendChild(element);
    }
  } else {
    alert(`${input.value}見つかれません。`);
  }
}
