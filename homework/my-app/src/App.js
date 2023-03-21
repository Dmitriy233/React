
import React from 'react';
import './App.css';

const Home = (props) => {

  return <div>Home page</div>;
};

const News = (props) => {
  return <div>News page</div>;
};
const CallBack = (props) => {
  return <div>CallBack page</div>;
};
const Contacts = (props) => {
  return <div>Contacts page</div>;
};

class App extends React.Component {
  state = { currentPage: "" };
//
//
  Nav = () => {
    return (
      <nav>
        <ul>
          <li> <a onClick={this.selectHome} href="#">Home</a> </li>
          <li> <a onClick={this.selectNews} href="#">News</a> </li>
          <li> <a onClick={this.selectCallBack} href="#">CallBack</a> </li>
          <li> <a onClick={this.selectContacts} href="#">Contacts</a> </li>
        </ul>
      </nav>
    );
  }

  selectHome = () => {
    this.setState({ currentPage: this.state.currentPage = <Home/> })
  }

  selectNews = () => {
    this.setState({ currentPage: this.state.currentPage = <News/> })
  }

  selectCallBack = () => {
    this.setState({ currentPage: this.state.currentPage = <CallBack/> })
  }

  selectContacts = () => {
    this.setState({ currentPage: this.state.currentPage = <Contacts/> })
  }

  render() {
    return (
      <div>
        <this.Nav/>
        <div className='content'>{this.state.currentPage}</div>
      </div>
    )
  }

}

export default App;
