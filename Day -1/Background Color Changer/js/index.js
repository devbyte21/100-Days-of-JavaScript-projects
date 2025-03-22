
const button = document.querySelector('button');
const container = document.querySelector('.container');

const colors = [
  '#1F3A3D', // Dark teal
  '#2C3E50', // Dark blue-gray
  '#16A085', // Strong teal
  '#D35400', // Vibrant orange
  '#2980B9', // Medium blue
  '#8E44AD', // Purple
  '#E74C3C', // Strong red
  '#27AE60', // Green
  '#F39C12', // Yellow-orange
  '#F1C40F', // Bright yellow
  '#2ECC71', // Light green
  '#C0392B', // Dark red
  '#34495E', // Charcoal blue-gray
  '#9B59B6', // Lavender
  '#D5DBDB', // Light gray
  '#F5B041', // Golden yellow
  '#16A085', // Aqua green
  '#7F8C8D', // Medium gray
  '#95A5A6', // Soft blue-gray
  '#F4D03F', // Bright yellow-green2
];

function handleChangeBackground() {
  const colorIndex = parseInt(Math.random() * colors.length);
  container.style.backgroundColor = colors[colorIndex];
}

container.style.backgroundColor = colors[2];
button.addEventListener('click', handleChangeBackground);
