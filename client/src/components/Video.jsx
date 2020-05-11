import React from 'react';
import ReactDOM from 'react-dom';
import VideoPopup from './Popup.jsx';


class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }

  openModal() {
    this.setState({ open: true });
  }
  closeModal() {
    this.setState({ open: false });
  }


  render() {
    return (

      <div className='entry' onClick={this.openModal}>

        <VideoPopup title={this.props.video.snippet.title} vidId = {this.props.video.id.videoId} isOpen={this.state.open} open={this.openModal} close={this.closeModal}/>
        <img src={buttonSource} className='buttonPlay'></img>
        <img src={this.props.video.snippet.thumbnails.medium.url} className='thumbnail'></img>
        <div className='subtitle'>
          {this.props.video.snippet.title}
        </div>
      </div>
    );
  }
}



export default Video;




