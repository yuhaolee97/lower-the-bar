import { useState, useContext } from 'react'
import emailjs from 'emailjs-com'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import AppContext from './AppContext';



const initialState = {
  message: '',
}

export const Text = (props) => {
    const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }

  const history = useHistory();

  const myContext = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault()
    
    console.log(myContext)

    axios.post(`http://54.254.7.252:3000/predict_text?text=${message}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })
        .then(response => {
          console.log(response)
          var lawNames = response.data.split(",");
          for (var i = 0; i < lawNames.length; i++) {
            if (lawNames[i] === "Tort_1") {
              lawNames[i] = "Protection from Harrassment"
            } else if (lawNames[i] === "Tort_2") {
              lawNames[i] = "Personal Injury"
            }
          }
          myContext.setLawCategories(lawNames)

          let path = '/questions'
          history.push(path)
      
      });

    // emailjs
    //   .sendForm(
    //     'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text)
    //       clearState()
    //     },
    //     (error) => {
    //       console.log(error.text)
    //     }
    //   )
  }

    return (
      <div id='text' className='text-center'>
        <div className='container'>
          <div className='col-md-8 col-md-offset-2 section-title'>
            <h2>Text</h2>
            <h3>Type out your situation</h3>
              <p>
                Please describe your issue as accurately as possible, giving details where appropriate.
              </p>
  
          </div>
        <div className='container'>
            <div className='contact'>
             
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='8'
                    placeholder='Message'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Submit
                </button>
              </form>
            </div>
      </div>
          {/* <div className='row'>
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                    {' '}
                    <i className={d.icon}></i>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                    <a
                      href='#about'
                      className='btn btn-custom btn-lg page-scroll'
                    >
                      Select
                    </a>{' '}
                  </div>
                ))
              : 'Loading...'}
  
              
  
          </div> */}
        </div>
      </div>
    )
  }
  