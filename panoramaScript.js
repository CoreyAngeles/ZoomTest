pannellum.viewer("panorama", {
  default: {
    firstScene: "toilet",
  },
  scenes: {
    toilet: {
      type: "equirectangular",
      panorama: "panorama3.jpg",
      autoLoad: true,
      title: "Туалет",
      autoRotate: 3,
      hfov: 120,
      loop: true,
      muted: true,
      hotSpots: [
        {
          pitch: -10, // Угол наклона (вертикаль)
          yaw: 175, // Угол поворота (горизонталь)
          type: "scene", // Тип горячей точки (переход на другую сцену)
          text: "Перейти в зал", // Текст подсказки
          sceneId: "mainRoom", // ID сцены, на которую нужно перейти
          targetPitch: 0, // Угол наклона на целевой сцене
          targetYaw: 0, // Угол поворота на целевой сцене
        },
      ],
    },
    mainRoom: {
      type: "equirectangular",
      panorama: "panorama1.jpg",
      title: "Зал",
      hfov: 120,
      hotSpots: [
        {
          pitch: -10, // Угол наклона (вертикаль)
          yaw: -45, // Угол поворота (горизонталь)
          type: "scene", // Тип горячей точки (переход на другую сцену)
          text: "Перейти в туалет", // Текст подсказки
          sceneId: "toilet", // ID сцены, на которую нужно перейти
          targetPitch: 0, // Угол наклона на целевой сцене
          targetYaw: 0, // Угол поворота на целевой сцене
        },
      ],
    },
  },
});
