import React from 'react';
import axios from 'axios';
import getVideos from '../scripts/getVideos.js';
import Videos from './Videos.jsx';
import Header from './Navbar/Header.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      videos: [],
      current: ''
    };

    this.getYouTubeVideos = this.getYouTubeVideos.bind(this);
  }

  getProducts() {
    axios.get('/products')
      .then((res) =>{
        console.log('Got Products!', res.data);
        this.setState({
          products: res.data,
          current: res.data[12].name
        }, () => this.getYouTubeVideos(this.state.current));
      })
      .catch((err) => console.error(err));
  }

  getYouTubeVideos(name) {
    let nameToSearch = name;
    console.log('Sending To Backend:', nameToSearch);
    axios.get('/videos', {params: {productName: nameToSearch}})
      .then((res) =>{
        console.log('Sent request to backend and received:', res.data);
        this.setState({
          videos: res.data.items
        }, () => console.log('Retrieved Videos!', this.state.videos));
      })
      .catch((err)=> console.error(err));
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {

    //z-index and position: fixed lets the drop down menu appear over the videos without conflicts
    let videoStyle = {
      backgroundImage: "url(https://feccapstone.s3-us-west-1.amazonaws.com/video_background.jpg)",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      zIndex: '-1',
      position: 'fixed'
    };

    let bodyStyle = {
      backgroundColor: 'white',
      fontFamily: 'brown-regular,Questrial,Times,Arial,sans-serif',
      listStyleType: 'none'
    };

    return (
      <div className = "body" style={bodyStyle}>
        <div className='headerBox'>
          <Header />
        </div>

        <div className='videoSection' style={videoStyle}>
          <Videos videos={this.state.videos}/>
        </div>
      </div>
    );
  }


}

export default App;