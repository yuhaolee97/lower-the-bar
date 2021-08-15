import {Switch, Redirect, Route, BrowserRouter as Router} from 'react-router-dom';
import App from './App'
import Questions from './Questions'
import Lawyers from './Lawyers'
import Finalised from './Finalised';
import AppContext from './components/AppContext';
import { useState } from 'react'
import RedirectToQuestions from './RedirectToQuestions'



const Main = () => {
    /*from the user to questions*/
    const [lawCategoriesValue, setLawCategories] = useState(["",""]);
    const [questionsValue, setQuestions] = useState([]);
    const [lawyersValue, setLawyers] = useState([]);
    /*from the questions to the lawyers*/
    const [questionsAskedValue, setQuestionsAsked] = useState([]);
    const [finalisedTopicsValue, setFinalisedTopics] = useState([]);
    const [pricePointValue, setPricePoint] = useState(0)
    const [nameOfUserValue, setNameOfUser] = useState(null)
    

    /*from the lawyers to the result*/
    const [lawyerChosenValue, setLawyerChosen] = useState({})

    const userSettings = {
        lawCategories: lawCategoriesValue,
        questions: questionsValue,
        lawyers: lawyersValue,
        finalisedTopics: finalisedTopicsValue,
        questionsAsked: questionsAskedValue,
        pricePoint: pricePointValue,
        nameOfUser: nameOfUserValue,
        lawyerChosen: lawyerChosenValue,
        setLawCategories,
        setQuestions,
        setLawyerChosen,
        setFinalisedTopics,
        setQuestionsAsked,
        setPricePoint,
        setNameOfUser
    };

    return (
    <div>
        <Router>
            <Switch>
                <AppContext.Provider value={userSettings}>
                    <Route path = "/" exact component = {App}/>
                    <Route path = "/redirecttoquestions" exact component = {RedirectToQuestions}/>
                    <Route path = "/questions" exact component = {Questions}/>
                    <Route path = "/lawyers" exact component = {Lawyers}/>
                    <Route path = "/finalised" exact component = {Finalised}/>
                </AppContext.Provider>
            </Switch>
        </Router>

    </div>
    )
}

export default Main;