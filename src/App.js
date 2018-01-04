import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  render() {
    const style = {
      background: '#607d8b',
    };
    return (
      <MuiThemeProvider>
        <div className="row">
          <AppBar style={style} >
            <Toolbar>
              <Typography type="title" color="inherit">
                Wifi Login Page
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <div className="row">
          <Card >
            <CardContent>
              <Typography >Word of the Day</Typography>
              <Typography type="headline" component="h2">

              </Typography>
              <Typography >adjective</Typography>
              <Typography component="p">
                well meaning and kindly.<br />

              </Typography>
            </CardContent>
            <CardActions>
              <Button dense>Learn More</Button>
            </CardActions>
          </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
