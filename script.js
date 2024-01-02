let animationContainer = document.querySelector(".animation-container");

let anımatıonData = [
  {
    id: 1,
    name: "Mehemmed",
    img:'test',
    imgAlt:'noteFound'
  },
  {
    id: 2,
    name: "Mehemmed2",
  },
];

anımatıonData.map((item, key) => {
  animationContainer.innerHTML += `
  <div class="animation-card">
            <img src="file.png" alt=${item.imgAlt}>
            <div class="animation-card-hover">
                <p>${item.name}</p>
                <span>${item.id}</span>
            </div>
        </div>

`;
});
