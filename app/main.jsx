'use strict'
/* Core */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Routes from './routes'

/* Theme */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';



import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: fullBlack,
    primary2Color: fullBlack,
    primary3Color: fullBlack,
    accent1Color: fullBlack,
    accent2Color: fullBlack,
    accent3Color: fullBlack,
    textColor: white,
    alternateTextColor: white,
    canvasColor: darkBlack,
    borderColor: fullBlack,    
    pickerHeaderColor: fullBlack,    
    shadowColor: fullBlack,
  }
});

render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <Routes />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('main')
  )

