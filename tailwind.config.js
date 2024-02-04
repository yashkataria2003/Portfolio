/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'Yash_Bg_Verticle': 'url("src/assets/Yash_Bg_Verticle.jpg")',
      'Yash_Bg_Center': 'url("src/assets/Yash_Bg_Center.png")',
      'KanbanBoard': 'url("src/assets/KanbanBoard.png")',
      'ModernAkhbar': 'url("src/assets/ModernAkhbar.png")',
      'Mosam': 'url("src/assets/Mosam.png")',
      'Medway': 'url("src/assets/Medway.png")',
      'ModernRadio': 'url("src/assets/ModernRadio.png")',
      'LMS': 'url("src/assets/LMS.png")',
      'Quiz': 'url("src/assets/Quiz.png")',
      'BackgroundSvg': 'url("src/assets/BackgroundSvg.svg")',
      'BackgroundSvg2': 'url("src/assets/BackgroundSvg2.svg")',
      'BackgroundSvg4': 'url("src/assets/BackgroundSvg4.svg")',
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
      rocket: "url('../assets/Bullet_Point.png')",
    }
  },
  plugins: [],
}

