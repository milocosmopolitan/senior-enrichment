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
  pinkA100, pinkA200, pinkA400, 
  grey600,
  white, fullWhite, darkBlack, fullBlack
} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {fade} from 'material-ui/utils/colorManipulator';


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: cyan700,
    primary2Color: cyan700,
    primary3Color: grey600,
    accent1Color: pinkA200,
    accent2Color: pinkA400,
    accent3Color: pinkA100,
    textColor: darkBlack,
    secondaryTextColor: (0, fade)(darkBlack, 0.7),
    alternateTextColor: '#FFFFFF',
    canvasColor: '#303030',
    borderColor: (0, fade)(darkBlack, 0.3),
    disabledColor: (0, fade)(darkBlack, 0.3),
    pickerHeaderColor: (0, fade)(darkBlack, 0.12),
    clockCircleColor: (0, fade)(darkBlack, 0.12)
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

