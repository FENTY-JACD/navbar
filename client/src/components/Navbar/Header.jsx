import React from 'react';
import Nav from './Nav.jsx';
import Search from './Search.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSearchBar: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('Clicked!');

    this.setState({
      showSearchBar: !this.state.showSearchBar
    });
  }

  render() {
    if (this.state.showSearchBar) {
      return (
        <header>
          <div className='headerContainer'>
            <div className='logo'>
              {/*TODO: Change src to whatever/wherever the homepage is*/}
              <a src='#'/>
              <img src="https://i.ibb.co/1RyTT3n/fentybeauty-logo.png" alt="fentybeauty-logo" border="0" className='logo-img'/>
            </div>
            <Nav showSearch={this.handleClick}/>
            <Search />
          </div>
        </header>
      );
    } else {
      return (
        <header>
          <div className='headerContainer'>
            <div className='logo'>
              {/*TODO: Change src to whatever/wherever the homepage is*/}
              <a src='#'/>
              <img src="https://i.ibb.co/1RyTT3n/fentybeauty-logo.png" alt="fentybeauty-logo" border="0" className='logo-img'/>
            </div>
            <Nav showSearch={this.handleClick}/>
          </div>
        </header>
      );
    }

  }

}

export default Header;