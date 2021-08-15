import { useState, useContext, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import AppContext from './AppContext';


export const Problems = (props) => {
    
    const [questionNumber, setQuestionNumber] = useState(1)

    const [lists, setLists] = useState(['Kindly give us your name']) 
    
    const [price, setPrice] = useState(true) //price is for price and name question

    const [priceFromUser, setPriceFromUser] = useState(0)

    const [nameFromUser, setNameFromUser] = useState(null)

    const [questionIndex, setQuestionIndex] = useState(-1)

    const [listOfCategories, setListOfCategories] = useState([])

    const [listOfQuestions, setListOfQuestions] = useState([])

    const [currentDictionaryOfQuestions, setCurrentDictionaryOfQuestions] = useState({})

    const [openEndedField, setOpenEndedField] = useState(null)

    // const lists = ['Did you get slapped?', 'Did you get hit?', 'Are you sad?', 'Are you happy?']
// Tort_2,Contract,Criminal,Family,Tort_1,Property
const dict_of_questions = {
 "Criminal"  : ['Are you currently being charged for a crime?', 'Do you want to report a crime? (If you do, call the police)', 
  ], "Personal Injury": ['Did anyone get injured?', 
  'Did the injury occur in a traffic accident?', 'Are you being sued for causing the injury?', 
  'Do you want compensation for the injury?', 
  'Did you see a doctor?', 'Do you want to sue the doctor/hospital?', 
  'Did any item of yours get damaged?',
  'Do you want compensation for the damaged items?', 
  ], 'Contract': ['Is there a dispute over a contract?', 
  'Does this have to do with employment?', 
  'Does this have to do with loans/insurance/investment/bills?',
  'Does this have to do with consumer products/services?'], 
  'Protection from Harrassment': ['Are you being harassed by someone or accused of harassing someone?',
  'Do you want to sue someone / are you being sued for saying negative things about you?',
  'Do you want to sue someone / are you being sued for leaking your private information?'], 
  'Family': ['Did a family member cause harm to someone else in the family?',
  'Is this about marriage/divorce?',
  'Is this about inheritance/wills?',
  'Is this about adoption?'], 'Property': ['Are you disturbed by/accused of disturbing  / accused of disturbing your neighbour?', 'Is the dispute about renting a property?']
} //tort 2




    const myContext = useContext(AppContext);

    useEffect(() => {
      //price is for price question
    }, []);


    const history = useHistory();

    const handleSubmit = (e) => {
      e.preventDefault()
      var result_list  = document.getElementsByName('result')
      var result;
      if (!price) {
        for (var i = 0; i < result_list.length; i++) {
          if (result_list[i].checked) {
            result = result_list[i].value
          }
        }
      } else {
        setNameFromUser(openEndedField)
        setOpenEndedField(null)
        setPrice(false)
        

        
      }

      console.log(lists[questionNumber - 1])
      console.log(result)
      
      setCurrentDictionaryOfQuestions(prevDict => ({...prevDict, [lists[questionNumber - 1]]:result}))
      console.log(currentDictionaryOfQuestions)
      
      setQuestionNumber(prevQuestionNumber => prevQuestionNumber + 1);

      

      if (result === 'Yes' || questionNumber >= lists.length) {
        if (result === 'Yes') {
          setListOfCategories(oldArray => [...oldArray, myContext.lawCategories[questionIndex]])
        }
        //redirect to any link 
        setQuestionNumber(1)
        if (questionIndex >= 3) {
          //
          myContext.setPricePoint(priceFromUser)
          myContext.setNameOfUser(nameFromUser)
          myContext.setQuestionsAsked(listOfQuestions)
          myContext.setFinalisedTopics(listOfCategories)

          let path = '/lawyers'
          history.push(path)
        } else {
          setListOfQuestions(oldArray => [...oldArray, currentDictionaryOfQuestions])
          setCurrentDictionaryOfQuestions({})
          
          setLists(dict_of_questions[myContext.lawCategories[questionIndex + 1]])
          setQuestionIndex(prevQuestionIndex => prevQuestionIndex + 1)
        }
        
        
      }
    }

    return (
      <div id='features' className='text-center'>
        <div className='container'>
          <div className='col-md-10 col-md-offset-1 section-title' id = "padding-buffer">
            <h3>We believe your case pertains to {myContext.lawCategories[0]}, {myContext.lawCategories[1]} or {myContext.lawCategories[2]} case.</h3>
            <h3 id = "small-padding">However, Maxis wishes to better understand you</h3>
            
            {/* <h2>Question {questionNumber} </h2> */}

            <p id = "small-padding">{lists.map((data, id) => {
              return (questionNumber === id + 1 ?
              <h3>
                {data}
              </h3> : null)
            })}</p>
            <p>
            <form name='sentMessage' validate onSubmit={handleSubmit}>
              <div >
                {price ? 

                <div className = "col-md-12 text-center">
                <h3>
                  <input type="text" onChange = {e => setOpenEndedField(e.target.value)}></input>
                </h3>
                </div>
                
                :
                
                <div className = "row">
                
                  <div className = 'col-xs-6 col-md-6'>
                    <h3><input type="radio" value="Yes" name="result" /> Yes</h3>
                  </div>
                  <div>
                    <h3><input type="radio" value="No" name="result" /> No</h3>
                  </div>
                </div>
                }
                <button type='submit' className='btn btn-custom btn-lg'>
                  Submit
                </button>
                </div>
            </form>
            </p>
          </div>
        </div>
      </div>
    )
  }
  