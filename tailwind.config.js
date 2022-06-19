// Will generate different spacing values ((0.8rem based))
// const generateSpacing = (pixelsBase, values) => {
//     return values.reduce((acc, v) => {
//         acc[`${v.toString().replace(".", "_")}`] = `${((pixelsBase * v) * .1).toFixed(1)}rem`
//         return acc;
//     }, {})
// }
  
const generateSpacing = (values) => {
    return values.reduce((acc, v) => {
        acc[`${v.toString().replace(".", "_")}`] = `${v}vw`
        return acc;
    }, {})
}
  
  // Will generate font sizes values with "rem" as unit
//   const generateFontSizes = (values) => {
//     return values.reduce((acc, v) => {
//         acc[v] = `${(v * .1).toFixed(1)}rem`;
//         return acc;
//     }, {})
//   }

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
  
  // Generate all kinds of percent classes from 1% to 150%
  const generatePercent = () => {
    let percents = {};
    for (let p = 0; p <= 150; p++) {
        percents[p] = `${p}%`
    }
    return percents;
  }
  
  module.exports = {
    // Change the ":" separator ((like in "md:w-full")) by "-" ((to have "md-w-full"))
    //separator: "-",
    important: true,
    corePlugins: {
        container: false,
    },
    mode: 'jit',
    // Allow to delete all unused styles from the final CSS file
      content: [
          './src/**/*.{js,jsx,ts,tsx}',
      ],
    theme: {
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

            'red': '#B83D42',
            'beige': '#F5F4EC',

            'green': '#316B4B',
            'green_dark': '#1A3928'
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
        //spacing: generateSpacing(8, [0, 0.25, 0.35, 0.5, 0.75, 1, 1.25, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 7.5, 8, 9, 10, 12, 14, 16, 17.5, 18, 20, 22, 24, 26, 28, 30, 32, 40, 48, 55]),
        spacing: generateSpacing([0, 0.25, 0.35, 0.5, 0.55, 0.75, 0.8, 1, 1.1, 1.25, 1.5, 1.67, 2, 2.22, 2.5, 2.77, 3, 3.5, 4, 4.75, 5, 6, 6.25, 7, 7.5, 8, 9, 10, 12, 13, 14, 16, 16.8, 17.5, 18, 20, 22, 24, 26, 28, 30, 32, 40, 48, 55]),
        fontSize: generateFontSizes([1, 0.8, 2.5, 7.65, 12, 14, 15, 16, 18, 20, 24, 32, 36, 40, 48, 56, 72, 110, 120]),
        lineHeight: generateValues([1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2]),
        fontWeight: generateValues([100, 200, 300, 400, 500, 600, 700, 800, 900]),
        // inset: {
        //     ...generatePercent(),
        //     'auto': 'auto',
        // },
        // translate: {
        //     ...generatePercent(),
        //     'auto': 'auto',
        // },
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