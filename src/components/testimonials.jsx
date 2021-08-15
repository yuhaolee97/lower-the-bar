import { createStore } from 'redux'
import { Document, Page, pdfjs } from 'react-pdf';
import { useState, useEffect, React, useContext } from 'react'
import AppContext from './AppContext';
import { useHistory } from "react-router-dom";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export const Testimonials = (props) => {
  const [data, setData] = useState({})

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const myContext = useContext(AppContext);

  const history = useHistory();

  const goBack = (e) => {
    e.preventDefault()

    let path = '/lawyers'
    history.push(path)

  }

  useEffect(() => { 
    setData(myContext.lawyerChosen)
  }, []);
  return (
    <div id='testimonials'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>Confirmation</h2>
          <h3>Thank you {myContext.nameOfUser} for choosing your lawyer. See below for further details:</h3>
          <h3>Your case, along with a customised referral letter has been sent to this lawyer for him/her to assist you.</h3>
          <h3>You may go back to browse more lawyers.</h3>

        </div>
        <div className='section-title text-center'>
          <button type='submit' className='btn btn-custom btn-lg' onClick = {goBack}>
              Back
          </button>
        </div>
        <div className='text-center'>
          <h3>Finalised lawyer details</h3>
          <h4>{data.name}</h4>
          <p>{data.Current_Role}</p>
          <img src={data.img} alt='...' className='team-img' />
          
        </div>
        {/* <div className = "section-title text-center">
          <h3>Automated referral generator</h3>
          <Document
            file="sample.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
          >
        <Page pageNumber={pageNumber} />
      </Document>
        </div> */}
      </div>
    </div>
  )
}
