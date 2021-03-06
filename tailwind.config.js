const generateSpacing = (values) => {
    return values.reduce((acc, v) => {
        acc[`${v.toString().replace(".", "_")}`] = `${v}vw`
        return acc;
    }, {})
}

const generateFontSizes = (values) => {
    return values.reduce((acc, v) => {
        acc[`${v.toString().replace(".", "_")}`] = `${v}vw`;
        return acc;
    }, {})
}
  
const generateValues = (values) => {
    return values.reduce((acc, v) => {
        acc[`${v.toString().replace(".", "_")}`] = v;
        return acc;
    }, {})
}

const generatePercent = () => {
    let percents = {};
    for (let p = 0; p <= 150; p++) {
        percents[p] = `${p}%`
    }
    return percents;
}
  
module.exports = {
    important: true,
    corePlugins: {
        container: false,
    },
    mode: 'jit',
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                '22': 'repeat(22, minmax(0, 1fr))'
            }
        },
        screens: {
            'sm': '640px',
            'md': '1024px',
            'lg': '1280px',
            'md-only': {
                'min': '641px',
                'max': '1024px'
            },
            'sm-only': {
                'max': '640px'
            }
        },
        colors: {
            'white': '#FFFFFF',
            'black': '#000000',
            'transparent': 'transparent',

            'gray': '#EBEAE1',
            'gray_dark': '#707070',
            'gray_darker': '#2B2B2B',
            'gray_darkest': '#211B24',
            'gray_darkest_faded': '#211B241F',

            'red': '#B83D42',
            'red_dark': "#AD393D",
            'beige_faded': '#F5F4EC33',
            'beige': '#F5F4EC',
            'beige_dark': '#E2DAC3',
            'beige_darker': '#C2BAA7',

            'green_light': '#D9E0C0',
            'green': '#316B4B',
            'green_dark': '#1A3928',
        },
        borderRadius: {
            'DEFAULT': '0.6rem',
            'round': '50%',
            'full': '1000rem',
            '1': '0.8rem',
            '2': '1.6rem',
        },
        fontFamily: {
            'molgak': ['Molgak', 'serif'],
            'inter': ['Inter', 'sans-serif']
        },
        spacing: generateSpacing([0, 0.25, 0.35, 0.5, 0.55, 0.7, 0.75, 0.8, 1, 1.1, 1.25, 1.5, 1.67, 2, 2.22, 2.5, 2.77, 2.92, 3, 3.33, 3.5, 4, 4.17, 4.75, 5, 5.55, 6, 6.25, 7, 7.5, 8, 9, 9.7, 10, 10.5, 12, 12.5, 13, 13.5, 13.89, 14, 16, 16.8, 17.5, 18, 20, 20.83, 22, 24, 25, 26, 28, 30, 32, 40, 48, 55]),
        fontSize: generateFontSizes([0.7, 0.8, 0.83, 1, 1.18, 1.67, 2.22, 2.5, 2.78, 5, 7.65, 12, 12.9, 14, 15, 16, 17.36, 18, 20, 20.83, 24, 24.33, 32, 33.33, 36, 40, 48, 56, 72, 110, 120]),
        lineHeight: generateValues([1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2]),
        fontWeight: generateValues([100, 200, 300, 400, 500, 600, 700, 800, 900]),
        width: {
            ...generatePercent(),
            'auto': 'auto',
            full: '100%',
            screen: '100vw',
            content: 'fit-content',
        },
        height: {
            ...generatePercent(),
            'auto': 'auto',
            full: '100%',
            screen: '100vh',
            content: 'fit-content',
        }
    }
}