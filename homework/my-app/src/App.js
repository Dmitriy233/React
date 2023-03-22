
import React from 'react';
import './App.css';

const Home = () => {
  return <div>Home page</div>;
};

const News = () => {
  return <div>News page</div>
};

const CallBack = () => {
  return <div>CallBack page</div>;
};

const Contacts = () => {
  return <div>Contacts page</div>;
};

const navList = [
  {
    id: 1,
    title: "Home",
    content: Home(),
  },
  {
    id: 2,
    title: "News",
    content: News(),
  },
  {
    id: 3,
    title: "CallBack",
    content: CallBack(),
  },
  {
    id: 4,
    title: "Contacts",
    content: Contacts(),
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: navList[0].content,
    };
  };

  selectPage = (props) => {
    this.setState({ currentPage: props });
  }

  Nav = () => {
    return (
      <>
        <nav>
          <ul>
            {navList.map(({ id, title, content }) => (
              <li key={id}><a onClick={(e) => this.selectPage(content)} href="#">{title}</a></li>
            ))}
          </ul>
        </nav>
        <div className='content'>{this.state.currentPage}</div>
      </>
    );
  };
  render() {
    return (
      <div>
        <this.Nav />
      </div>
    );
  };
};

export default App;
