
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  // c='John';have c no use karvo hoy to this.c kari ne kari sakay ena thi c print thai jase
  state={
    progress:0
  }
  setProgress =(progress) =>
  {
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar></Navbar>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} pagesize={5} country="in" category="Business"></News>} />
          </Routes>
          <Routes>
            <Route path="/Business" element={<News setProgress={this.setProgress} pagesize={5} country="in" category="Business"></News>} />
          </Routes>
          <Routes>
            <Route path="/Entertainment" element={<News setProgress={this.setProgress} pagesize={5} country="in" category="Entertainment"></News>} />
          </Routes>
          <Routes>
            <Route path="/General" element={<News setProgress={this.setProgress} pagesize={5} country="in" category="General"></News>} />
          </Routes>
          <Routes>
            <Route path="/Health" element={<News setProgress={this.setProgress} pagesize={5} country="in" category="Health"></News>} />
          </Routes>
          <Routes>
            <Route path="/Science" element={<News setProgress={this.setProgress} pagesize={5} country="in" category="Science"></News>} />
          </Routes>
          <Routes>
            <Route path="/Sports" element={<News setProgress={this.setProgress} pagesize={5} country="in" category="Sports"></News>} />
          </Routes>
          <Routes>
            <Route path="/Technology" element={<News setProgress={this.setProgress} pagesize={5} country="in" category="Technology"></News>} />
          </Routes>

        </Router>
      </div>
    )
  }
}

