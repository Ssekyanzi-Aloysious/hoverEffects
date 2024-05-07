const container = document.querySelector(".container");
let number = 1200;
const colors = [
  "#bde038",
  "#f27405",
  "#03a678",
  "#93d94e",
  "#8c3b7f",
  "#b8a0d9",
  "#f2a444",
  "#f28379",
  "#f26398",
  "#f20574",
  "#0378a6",
  "#04bfbf",
  "#04bf9d",
  "#9fc131",
  "#dbf227",
  "#f2c84b",
  "#f2a007",
  "#d97904",
  "#bf4904",
  "#cef2f2",
  "#99a63c",
  "#f2vb05",
  "#f29f05",
  "#f28705",
  "#f23030",
  "#f23d4c",
  "#f23558",
];

for (let i = 0; i < number; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    square.style.backgroundColor = color;
    square.style.transitionDuration = 0;

    square.style.boxShadow = `0 0 10px ${color}`;
    square.style.boxShadow = `0 0 15px ${color}`;
    square.style.boxShadow = `0 0 20px ${color}`;
    square.style.boxShadow = `0 0 25px ${color}`;
    square.style.boxShadow = `0 0 30px ${color}`;
    square.style.boxShadow = `0 0 35px ${color}`;
    square.style.boxShadow = `0 0 40px ${color}`;
  });
  square.addEventListener("mouseout", () => {
    square.style.backgroundColor = "#1d1d1d";
    square.style.boxShadow = `0 0 2px #000`;
  });

  container.appendChild(square);
}
