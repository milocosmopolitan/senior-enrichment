import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import {Link, browserHistory} from 'react-router';

// import {loadAllCampus, selectCampus} from '../reducers/campus';
// import {loadAllStudent} from '../reducers/student';

// import axios from 'axios';

const styles = {
  title: {
    cursor: 'pointer',
    fontSize: 12

  },
};

function handleTouchTap() {
  // alert('onTouchTap triggered on the title component');
  browserHistory.push('/')
}

function goToCampusList(){
  browserHistory.push('/campus')
}
function goToStudentList(){
  browserHistory.push('/students')
}

const mapState = (state)=>{

  return {
    campus: state.campus,
    student: state.student
  }
}

const mapDispatch = (dispatch)=>{
  return {    
  }
}

class Root extends Component {
  constructor(props) {
    super(props)    
  }

  render() {   
    return (
      <div>
        <AppBar
          title={<span style={styles.title}>Margaret Hamilton Interplanetary Academy of JavaScript</span>}
          onTitleTouchTap={handleTouchTap}
          showMenuIconButton={false}
          iconElementRight={<div id="nav_btn"><FlatButton onClick={goToCampusList} label="Campus" /><FlatButton onClick={goToStudentList} label="Student" /></div>}
        />
        {
          this.props.children && React.cloneElement(this.props.children, this.props)
        }
      </div>
    )
  }
}


export default connect(mapState, mapDispatch)(Root)