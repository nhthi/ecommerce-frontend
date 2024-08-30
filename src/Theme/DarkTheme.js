const { createTheme } = require("@mui/material");

export const darkTheme = createTheme({
    // palette:{
    //     mode:'dark',
    //     primary:{
    //         main:'#e91e63'
    //     },
    //     secondary:{
    //         main:'#5A20CB'
    //     },
    //     black:{
    //         main:'#0D0D0D'
    //     },
    //     background:{
    //         main:'#000000',
    //         default:'#0D0D0D',
    //         paper:'#0D0D0D'
    //     },
    //     textColor:{
    //         main:'#111111'
    //     }
    // }
    palette: {
        mode: 'light',
        primary: {
            main: '#ff5722', // Vibrant orange for primary elements
        },
        secondary: {
            main: '#4caf50', // Fresh green for secondary elements
        },
        background: {
            main: '#ffffff', // White background
            default: '#f0f4c3', // Light, soft green-yellow for default background
            paper: '#ffffff', // White for paper elements
        },
        textColor: {
            main: '#424242', // Deep gray for text
        },
        accent: {
            main: '#00bcd4', // Bright cyan for accent elements
        }
    },
})