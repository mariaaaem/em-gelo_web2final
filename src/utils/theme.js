const theme = (isDarkMode) => ({
    palette: {
        mode: isDarkMode ? 'dark' : 'light',
        primary: {
            //main: '#639BC8',
            main: '#639BC8',
            contrastText: 'rgba(0, 0, 0, 0.87)',
        },
        secondary: {
            main: '#EC884D',
            contrastText: 'rgba(0, 0, 0, 0.87)',
        },
        thirtiary: {
            main: '#39D400',
        },
        info: {
            main: '#2196f3',
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
});
export default theme;