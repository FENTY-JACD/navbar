import React from 'react';
import axios from 'axios';
import SearchResults from './SearchResults.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: 'What Are You Looking For?',
      clicked: false,
      products: [],
      searched: false
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSearch(e) {
    console.log(e.target.value);
    this.setState({
      query: e.target.value
    }, () => {
      this.handleSubmit();
    });
  }

  handleClick() {
    console.log('Click from Search!');
    this.setState({
      query: '',
      clicked: true
    });
  }

  handleSubmit() {
    //this will query the database based on what is typed
    //search results show up as sooon as 1 character is entered
    let toQuery = this.state.query;

    axios.get('http://localhost:4201/search', {params: {search: toQuery}})
      .then((res) =>{
        console.log('Searched:', res.data);
        this.setState({
          products: res.data,
          searched: true
        }, ()=>console.log(this.state.products));
      })
      .catch((err)=>console.error(err));
  }



  render() {
    //https://stackoverflow.com/questions/2006134/float-a-div-above-page-content
    //how to have a div appear over a page

    let style = {
      backgroundImage: this.state.clicked ? 'none' : 'url(https://feccapstone.s3-us-west-1.amazonaws.com/searchBox_Icon.png)',
      paddingLeft: this.state.clicked ? '4px' : '60px'
    };

    //padding order is top right bottom left
    let resultsStyle = {
      backgroundColor: 'white',
      color: '#000',
      padding: '1px 50px 2px 110px',
      position: 'relative',
      zIndex: '9',
      cursor: 'pointer'
    };

    let allStyle = {
      textAlign: 'center',
      textDecoration: 'underline',
      borderTop: '1px solid black',
      backgroundColor: 'white',
      color: 'black',
      padding: '25px 0 25px 0',
      fontSize: '20px'
    };

    let searchBarStyle = {
      textAlign: 'center',
      backgroundColor: '#000',
      borderTop: '1px solid #454545',
      margin: '0',
      height: '110px',
      clear: 'both',
      position: 'relative',
      width: '100%',
      zIndex: '9'
    };


    if (this.state.searched) {
      return (
        <div className='searchWithResults' style={{position: 'fixed', width: '100%', zIndex: '9'}} onScroll={this.props.closeSearc}>
          <div className='searchBar' style={searchBarStyle}>
            <input type='text' style={style} value={this.state.query} onChange={this.handleSearch} onClick={this.handleClick}className='searchBox'></input>
            <span className='butt' onClick={this.props.closeSearch}>X</span>
          </div>

          <div className='searchResultsContainer' style={resultsStyle}>
            <SearchResults products={this.state.products}/>
          </div>

          <div className='resultsFooter' style={allStyle}>
            <strong><h3 style={{cursor: 'pointer'}}>SEE ALL RESULTS</h3></strong>
          </div>
        </div>

      );
    } else {
      return (
        <div className='searchBar' style={searchBarStyle}>
          <input type='text' style={style} value={this.state.query} onChange={this.handleSearch} onClick={this.handleClick} className='searchBox'/>
          <span className='butt' onClick={this.props.closeSearch}>X</span>
        </div>
      );
    }
  }
}

export default Search;