/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'theme-dark': '#323232',
        'theme-light': '#ffffff',
        'theme-button-dark': 'rgb(180, 180, 180)',
        'theme-button-light': 'rgb(90, 90, 90)',
        'theme-button-hover-dark': 'rgb(245, 245, 245)',
        'theme-button-hover-light': 'rgb(40, 40, 40)',
        'theme-activity-bar-dark': '#323232',
        'theme-activity-bar-light': '#ffffff',
        'theme-primary-menu-dark': '#363636',
        'theme-primary-menu-light': '#f4f4f4',
        // NIC EDIT
        fuchsia: Array(10).fill('#666666'),
        violet: Array(10).fill('#666666'),
        indigo: Array(10).fill('#666666'),
        gray: {
          '200': '#f5f5f5',
        },
        fuchsia: {
          '400': '#333333',
          '500': '#AAAAAA', 
          '600': '#aaaaaa', 
          '900': '#999999', 
        },
        violet: {
          '400': '#333333',
          '500': '#AAAAAA', 
          '600': '#aaaaaa', 
          '900': '#999999',  
        },
        indigo: {
          '400': '#333333',
          '500': '#AAAAAA', 
          '600': '#aaaaaa', 
          '900': '#999999',  
        },
        // END NIC EDIT
      },
      backgroundColor: {
        'theme-dark': '#323232',
        'theme-light': '#ffffff',
        'theme-hover-dark': 'rgb(80 80 80 / 0.3)',
        'theme-hover-light': 'rgb(80 80 80 / 0.10)',
        'theme-select-dark': '#414141',
        'theme-select-light': '#414141',
        'theme-selected-dark': 'rgb(80 80 80 / 0.8)',
        'theme-selected-light': 'rgb(80 80 80 / 0.3)',
        'theme-setting-hover-dark': '#2c2c2c',
        'theme-setting-hover-light': '#fbfbfb',
        'theme-setting-selected-dark': '#303030',
        'theme-setting-selected-light': '#f6f6f6',
        'theme-dropdown-dark': '#4b4b4b',
        'theme-dropdown-light': '#ffffff',
        'theme-dropdown-hover-dark': '#707070',
        'theme-dropdown-hover-light': 'rgb(80 80 80 / 0.10)',
        'theme-tooltip-dark': '#323232',
        'theme-tooltip-light': '#ffffff',
      },
      borderColor: {
        'theme-border-dark': '#1f1f1f',
        'theme-border-light': 'rgba(210, 210, 210, 1)',
        'theme-button-border-dark': 'rgba(100, 100, 100, 1)',
        'theme-button-border-light': 'rgba(180, 180, 180, 1)',
      },
      fill: {
        'theme-tooltip-dark': '#323232',
        'theme-tooltip-light': '#ffffff',
      },
      textColor: {
        'theme-button-icon-dark': 'rgb(180, 180, 180)',
        'theme-button-icon-light': 'rgb(90, 90, 90)',
        'theme-button-icon-hover-dark': 'rgb(245, 245, 245)',
        'theme-button-icon-hover-light': 'rgb(40, 40, 40)',
        'theme-activity-bar-tab-dark': 'rgb(115 115 115 / 1)',
        'theme-activity-bar-tab-light': 'rgb(140 140 140 / 1)',
        'theme-activity-bar-tab-hover-dark': 'rgb(220 220 235 / 1)',
        'theme-activity-bar-tab-hover-light': 'rgb(65 65 65 / 1)',
        'theme-activity-bar-tab-selected-dark': 'rgb(240 240 240 / 1)',
        'theme-activity-bar-tab-selected-light': 'rgb(40 40 40 / 1)',
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        '175%': '175%',
      },
      keyframes: {
        'bg-pan': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'zoom-pulse': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        slideDownAndFade: {
          from: { opacity: 0, transform: 'translateY(-2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: 'translateX(2px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideUpAndFade: {
          from: { opacity: 0, transform: 'translateY(2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: 'translateX(-2px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        'zoom-pulse-slow': 'zoom-pulse 8s ease infinite',
        'zoom-pulse-fast': 'zoom-pulse 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'bg-pan-fast': 'bg-pan 7s ease infinite',
        'bg-pan-slow': 'bg-pan 15s ease infinite',
        slideDownAndFade:
          'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade:
          'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade:
          'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  variants: {
    extend: {
      visibility: ['group-hover'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
