import {createMuiTheme} from '@material-ui/core/styles'

const colors = {
    primary: {
        main: '#FFFFFF',
        secondary: '#1e1e1e',
        accent1: '#c64349',
        accent2: '#5b81aa'
    },
}

const theme = createMuiTheme({
    palette: {
        ...colors
    },
    fonts: {
        header: "'Sora', sans-serif",
        subheader: "'Sora', sans-serif",
        body: 'Montserrat'
    }
})

export default theme