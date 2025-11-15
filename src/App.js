import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';

// // Import the new Clarifai dependencies
// import { ClarifaiStub, grpc } from "@clarifai/clarifai-js-grpc";

// // Create the Clarifai stub and metadata
// const stub = ClarifaiStub.json();
// const metadata = new grpc.Metadata();
// metadata.set("authorization", "Key " + process.env.REACT_APP_CLARIFAI_API_KEY);


class App extends Component {
  constructor () {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  // onButtonSubmit = () => {
  //   this.setState({imageUrl: this.state.input});
    
  //   stub.PostModelOutputs(
  //       {
  //           // This is the face detection model ID.
  //           model_id: "a403429f2ddf4b49b307e318f00e528b",
  //           inputs: [{data: {image: {url: this.state.input}}}]
  //       },
  //       metadata,
  //       (err, response) => {
  //           if (err) {
  //               console.log("Error: " + err);
  //               return;
  //           }

  //           if (response.status.code !== 10000) {
  //               console.log("Received failed status: " + response.status.description + "\n" + response.status.details);
  //               return;
  //           }
            
  //           this.displayFaceBox(this.calculateFaceLocation(response))
  //       }
  //   );
  // }

  render() {
    const { imageUrl, box } = this.state;
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition box={box} imageUrl={imageUrl} />
      </div>
    );
  }
}

export default App;
