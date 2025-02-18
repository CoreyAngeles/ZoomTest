document.addEventListener("DOMContentLoaded", () => {
  const imageContainer = document.getElementById("image-container");
  const button = document.getElementById("myButton");

  // Настройка начальной позиции кнопки (пример: 100px от правого края, 50px сверху)
  //   button.style.right = "100px";
  //   button.style.top = "50px";

  // Инициализация Panzoom
  const panzoom = Panzoom(imageContainer, {
    maxScale: 5,
    minScale: 1,
    contain: "outside",
  });

  // Включение зума колесом мыши
  document
    .getElementById("container")
    .addEventListener("wheel", panzoom.zoomWithWheel);

  // Обновление размера кнопки при масштабировании
  panzoom.on("zoom", ({ scale }) => {
    button.style.transform = `scale(${1 / scale})`;
  });
});
