import React, { Component } from 'react';
import { Ref, Popup, Input, Rating, Accordion, Rail, Sticky, Button, Container, Dropdown, Form, Grid, Header, Card, Dimmer, Icon, Modal, Checkbox, Image, Item, Label, Menu, List, Divider, Segment, Step, Table } from 'semantic-ui-react'
//
import {s,cols} from '../../styles/style'
// import * as PagesAndContainers from '../'

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
/*
TODO: stop camera on close
 */
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

class ModalCamera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoConstraints: {
        width: 1280,
        height: 720,
        facingMode: "user"
      },
      source: {}
    };
    this.theStream = {}
    this.myRef = React.createRef();
  }
  //
  render () {
    const {
      trigger,
    } = this.props
    const {
      videoConstraints,
      source,
      sourceObj,
    } = this.state


    return (
      <Modal
        trigger={trigger} basic size='small'
        onMount={async ()=>{
          await this.getVideo()
        }}
      >
        <Header icon='photo' content='Camera' />
        <Modal.Content>
          <video id="video-chat" ref={this.myRef} srcobject={source} autoPlay={true} style={s.mn(s.w('100%'))}>
          </video>
        </Modal.Content>
        <Modal.Actions>
          <Form>
            <Form.Group>
              <Button.Group icon basic inverted>
                <Button>
                  <Icon name='play' />
                </Button>
                <Button>
                  <Icon name='stop' />
                </Button>
                <Button basic inverted>
                  <Icon name='sync alternate' />
                  <Icon name='camera' />
                </Button>
              </Button.Group>
            </Form.Group>
            <Form.Group>
              <Button
                basic color='red' inverted
                onClick={async ()=>{
                  await this.takePhoto()
                }}
              >
                <Icon name='photo' /> Take picture
              </Button>
              <Button basic color='red' inverted>
                <Icon name='video' /> Take video
              </Button>
              <Button basic color='red' inverted>
                <Icon name='sound' /> Take audio
              </Button>
            </Form.Group>
          </Form>

        </Modal.Actions>
      </Modal>
    );
  }


  getUserMedia(options, successCallback, failureCallback) {
    var api = navigator.getUserMedia || navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia || navigator.msGetUserMedia;
    if (api) {
      return api.bind(navigator)(options, successCallback, failureCallback);
    }
  }


  getStream() {
    if (!navigator.getUserMedia && !navigator.webkitGetUserMedia &&
      !navigator.mozGetUserMedia && !navigator.msGetUserMedia) {
      alert('User Media API not supported.');
      return;
    }


    this.getUserMedia({ video: true }, (stream) => {
      var mediaControl = document.querySelector('video');
      if ('srcObject' in mediaControl) {
        mediaControl.srcObject = stream;
        mediaControl.src = (window.URL || window.webkitURL).createObjectURL(stream);
      } else if (navigator.mozGetUserMedia) {
        mediaControl.mozSrcObject = stream;
      }
      this.theStream = stream;
      console.log(stream)
    }, function (err) {
      alert('Error: ' + err);
    });
  }



  takePhoto() {

    if (!('ImageCapture' in window)) {
      console.log('ImageCapture is not available');
      return;
    }

    if (!this.theStream) {
      console.log('Grab the video stream first!');
      return;
    }

    var theImageCapturer = new window.ImageCapture(this.theStream.getVideoTracks()[0]);

    theImageCapturer.takePhoto()
      .then(blob => {
        this.myRef.current.src = blob
        console.log(blob)
        this.publicFileToIpfs(blob)
      })
      .catch(err => console.error('Error: ' + err));
  }


  async getVideo() {

    let res = {}
    const mediaOptions = {
      audio: true,
      video: {
        width: { min: 1280 },
        height: { min: 720 },
      }
    }

    await navigator.mediaDevices.getUserMedia(mediaOptions)
      .then(async (stream)=>{
        // console.log(stream)
        this.theStream = stream;
        this.myRef.current.srcObject = stream
      })
      .catch((err)=>{console.error(err)})

    return
  }



  publicFileToIpfs = async (file) => {

    const data = new FormData();
    // data.append('name', JSON.stringify([{name:'testName'}]));
    data.append('file', file);

    const url = 'https://ipfs.infura.io:5001/api/v0/add?pin=true&quieter=true';
    return await fetch(url, {
      method: 'POST',
      header: {
        "Content-Type": "multipart/form-data"
      },
      body: data
    }).then(res => {
      return res.json()
    }).then(res => {
      console.log('published to:',`https://ipfs.infura.io/ipfs/${res.Hash}`)
      return res.Hash
    }).catch(err => {
      console.error(err);
    });

  }



  async componentDidMount() {
    //
  }


}

export default ModalCamera;
