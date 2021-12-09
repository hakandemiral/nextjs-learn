import { createGlobalStyle, ThemeProvider } from 'styled-components'
import '@/styles/global.css'

const theme = {
  colors: {
    primary: '#16adfc',
    lightText: '#9d9d9d'
  }
}

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App