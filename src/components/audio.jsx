import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import AppContext from './AppContext';


export const Audio = (props) => {

    const {
      transcript,
      listening,
      resetTranscript,
      browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    const [displayTranscript, setDisplayTranscript] = useState(true)

    const history = useHistory();

    const myContext = useContext(AppContext);

    if (!browserSupportsSpeechRecognition) {
      return <span>Browser doesn't support speech recognition.</span>;
    }

    const startListening = () => {
      SpeechRecognition.startListening({ continuous: true })
    }

    const stopListening = () => {
      SpeechRecognition.stopListening();
      console.log(transcript)
      //make api call here
      //redirect to another website 
    }

    

    const onSubmit = (e) => {
      //make api call here
      //redirect to another website 
      e.preventDefault()

      axios.post(`http://54.254.7.252:3000/predict_text?text=${transcript}`, {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      })
        .then(response => {
          console.log(response)

          myContext.setLawCategories(response.data)

          let path = '/questions#page-top'
          history.push(path)
          
      
      });

      // 54.254.7.252:3000/predict_text?text=I got stabbed.

      let path = '/questions#page-top'
      history.push(path)
    }

    return (
      <div id='audio' className='text-center'>
        <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Audio Transmission</h2>
          <p>Simply speak your situation, and we will do the rest.</p>

          <p>
            Microphone: {listening ? 'on' : 'off'}
          </p>

            <button className='btn btn-custom btn-lg btn-padding' onClick={startListening}>Start</button>
            <button className='btn btn-custom btn-lg btn-padding' onClick={stopListening}>Stop</button>
            <p>{displayTranscript ? transcript : <div></div>}</p>
         
        </div>
          <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
              <button className='btn btn-custom btn-lg btn-padding' onClick={resetTranscript}>RESET</button>
              <button className='btn btn-custom btn-lg btn-padding' onClick={onSubmit}>SUBMIT</button>
                
              </div>
            </div>
        </div>
        
      </div>
    )
  }
  