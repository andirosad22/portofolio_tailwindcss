module.exports = {
    content: ['./public/**/*.{html,js}'],
    darkMode: 'class',
    theme: {
      container:{
        center: true,
        padding: '16px',
      },
      extend: {
        colors:{
          Primary: '#0061FB',
          dark: '#0A182E',
          secondary: '#64748b',
          bgDark: '#A0BDE9',
          DarkLight: '#182E51',
        },
        screens:{
          '2xl': '1320px',
        },
      },
    },
    plugins: [],
  }