import { useState, useEffect, React, useContext } from 'react'
import { Modal, Button} from 'react-bootstrap'
import ReactPlayer from "react-player"
import { useHistory } from "react-router-dom";
import { createSlice, configureStore, createStore } from '@reduxjs/toolkit'
import AppContext from './AppContext';



export const Team = (props) => {
  const [data, setData] = useState([
    {
      "id": 1,
      "name": "Dominic Stevenson",
      "Current_Role": "Partner at Slug LLP (2009-Present)",
      "Previous_Work_Experience": "Associate at Ginger Bear Partnership (2004-2008)",
      "Education": "LL.B. (Honours) at University of Singapore (1999-2003)",
      "Area_of_practice": "Personal injury claims",
      "Years_of_experience": "2004-Present (17 years)",
      "Past_cases": "Successfully won $3.2 million in damages at the High Court for a client in Lim Heng Chin  v Japanese Wholesalers of Sushi and More (Singapore), which involved the defendant’s food causing severe infection of salmonella.",
      "About": "Dominic Stevenson possesses over 15 years of experience in the legal industry. In particular, he has found his specialty in personal injury claims, helping to seek remedy and resolution for any and all clients that come to him. Dominic also volunteers at various Legal Clinics once a month.",
      "img": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      "price_range": "75-100 percentile",
      "price_ranking": 3,
      "category": "Tort_2"
    },
    {
      "id": 2,
      "name": "Spencer Deck",
      "Current_Role": "Director at The Ordinary Man Partnership (2015-Present)",
      "Previous_Work_Experience": "Partner at Reasonable LLP (1999-2014); Associate at Reasonable LLP (1995-1999)",
      "Education": "LL.B. (Honours) at University of Singapore (1990-1994)",
      "Area_of_practice": "Negligence claims",
      "Years_of_experience": "1995-Present (26 years)",
      "Past_cases": "Successfully defended TNG Auditors in the High Court from a negligence lawsuit in finding that they had taken reasonable care in coming up with the financial statements.",
      "About": "Spencer Deck is a \"courtroom\" name in the legal industry, because of the more than 25 years of experience he has under his belt. As a litigator he has advocated more than 30 cases to the Supreme Court itself. Spencer specialises in negligence claims. Apart from the wealth of experience under his belt, Spencer is also a loving father to 2 and a grandfather to 3. He spends his leisure time swimming as well. His clients describe him as kind, caring, yet assertive and professional when needed.",
      "img": "https://images.unsplash.com/photo-1584940120743-8981ca35b012?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      "price_range": "50-75 percentile",
      "price_ranking": 2,
      "category": "Tort_2"
    },
    {
      "id": 3,
      "name": "Gale Florence",
      "Current_Role": "Partner at Nettles LLP (2009-Present)",
      "Previous_Work_Experience": "Associate at Nettles LLP (2005-2009)",
      "Education": "LL.B. (Honours) at University of Singapore (2000-2004)",
      "Area_of_practice": "Medical negligence",
      "Years_of_experience": "2005-Present (16 years)",
      "Past_cases": "Successfully sued a doctor for $380k in a medical negligence suit involving the negligent diagnosis of the client with cancer in Lee Ning v John Taylor Yap.",
      "About": "Gale is a sweetheart to many except her opponents. She believes in justice and helping the vulnerable groups of society. She is a proud member of board of the Singapore Law Pro Bono Services. In her own practice, she specialises in medical negligence cases, and has over 15 years of experience in the law industry.",
      "img": "https://images.unsplash.com/photo-1612782888995-8a739c22f99c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      "price_range": "0-25 percentile",
      "price_ranking": 0,
      "category": "Tort_2"
    },
    {
      "id": 4,
      "name": "Malcom Sonny",
      "Current_Role": "Partner at Poh and Harrison LLP (2010-Present)",
      "Previous_Work_Experience": "Associate at Poh and Harrison LLP (2006-2010)",
      "Education": "LL.B. (Honours) at University of Singapore (2001-2005)",
      "Area_of_practice": "Harassment and Defamation claims",
      "Years_of_experience": "2005-Present (16 years)",
      "Past_cases": "Sucessfully won $13k in damages for a harassment claim at the High Court case of Anne Lim v Guresh Singh involving the incessant calling and texting of threats to the client.",
      "About": "Malcom Sonny specialises in Harassment and Defamation claims. He has over 15 years of experience in the industry and has brought more than 10 cases to the Supreme Court in this span of time. He also spends time every month to volunteer Pro Bono around Singapore, as a strong believer of access to justice in Singapore.",
      "img": "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      "price_range": "25-50 percentile",
      "price_ranking": 1,
      "category": "Tort_1"
    },
    {
      "id": 5,
      "name": "Justin Mak",
      "Current_Role": "Partner at Lim and Lim (2015-Present)",
      "Previous_Work_Experience": "Associate at Ong Partnership (2011-2015)",
      "Education": "LL.B. (Honours) at University of Singapore (2007-2011)",
      "Area_of_practice": "Criminal Law",
      "Years_of_experience": "2011-Present (10 years)",
      "Past_cases": "Successfully defended a client accused of drug trafficking in the High Court case of AG v Lim Juan.",
      "About": "Justin Mak has spent over 10 year in the legal industry, specialising in criminal law. With a career spent learning from and working with the top legal minds in Singapore, Justin is sure to be able to find solutions customised to your needs.",
      "img": "https://images.unsplash.com/photo-1605664041954-fc778c387c02?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGxhd3llcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "price_range": "0-25 percentile",
      "price_ranking": 0,
      "category": "Criminal"
    },
    {
      "id": 6,
      "name": "Oliver Lim",
      "Current_Role": "Partner at Ong Partnership (2005-Present)",
      "Previous_Work_Experience": "Associate at Ong Partnership (1996-2005)",
      "Education": "LL.B. (Honours) at University of Singapore (1992-1996)",
      "Area_of_practice": "Personal injury and Medical Negligence",
      "Years_of_experience": "1996-Present (25 years)",
      "Past_cases": "Successfully won over $100k in damages for a medical negligence case in the High Court involving a major public hospital.",
      "About": "Oliver has spent over 20 years in the legal industry, and has extensive experience in personal injury and medical negligence claims. With his clients' interest his utmost priority, Oliver guides his clients through the legal process in a structured and individualised manner.",
      "img": "https://images.unsplash.com/photo-1605664042212-73d09aa18a96?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      "price_range": "25-50 percentile",
      "price_ranking": 1,
      "category": "Tort_2"
    },
    {
      "id": 7,
      "name": "Elijah Tan",
      "Current_Role": "Partner at Lim and Lim (2011-Present)",
      "Previous_Work_Experience": "Associate at Baker Law LLP (2006-2011)",
      "Education": "LL.B. (Honours) at University of Singapore (2002-2006)",
      "Area_of_practice": "Intellectual Property Law",
      "Years_of_experience": "2006-Present (15 years)",
      "Past_cases": "Successfully represented major media companies in a suite of intellectual property claims, routinely handles claims to the Supreme Court.",
      "About": "Elijah specialises in intellectual property law, and has extensive legal experience over a range of industries. He routinely handles claims to the Supreme Court, and is experienced in arbitration and mediation.",
      "img": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHByb2Zlc3Npb25hbHxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "price_range": "0-25 percentile",
      "price_ranking": 0,
      "category": "Property"
    },
    {
      "id": 8,
      "name": "Noah Henry",
      "Current_Role": "Partner at Henry Legal LLC (2018-Present)",
      "Previous_Work_Experience": "Associate at Ong Partnership (2011-2018)",
      "Education": "LL.B. (Honours) at University of Singapore (2007-2011)",
      "Area_of_practice": "Corporate and commercial law",
      "Years_of_experience": "2011-Present (10 years)",
      "Past_cases": "Led the successful restructuring of Durian Inc. when the company was facing financial troubles.",
      "About": "Noah Henry possesses over 10 years of experience in the legal industry. In particular, he has found his specialty in corporate and commercial law, helping to seek remedy and resolution for any and all clients that come to him. Noah also volunteers at various Legal Clinics once a month.",
      "img": "https://images.unsplash.com/photo-1508835277982-1c1b0e205603?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      "price_range": "25-50 percentile",
      "price_ranking": 1,
      "category": "Contract"
    },
    {
      "id": 9,
      "name": "Lucas Ong",
      "Current_Role": "Partner at Ong Partnerships (2016-Present",
      "Previous_Work_Experience": "Associate at Lim and Lim (2011-2015)",
      "Education": "LL.B. (First-Class Honours) at University of Singapore (2007-2011)",
      "Area_of_practice": "International arbitration",
      "Years_of_experience": "2011-Present (10 years)",
      "Past_cases": "Represented several multinational corporations in a variety of arbitration cases.",
      "About": "Lucas possesses over 10 years of experience in the legal industry. In particular, he has found his specialty in international arbitration, helping to seek remedy and resolution for any and all clients that come to him.",
      "img": "https://images.unsplash.com/photo-1584940120743-8981ca35b012?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
      "price_range": "0-25 percentile",
      "price_ranking": 0,
      "category": "Contract"
    },
    {
      "id": 10,
      "name": "Alexander Lok",
      "Current_Role": "Partner at Tan Law LLP (2011-Present)",
      "Previous_Work_Experience": "Associate at Tan Law LLP (2004-2011)",
      "Education": "LL.B. (First-Class Honours) at University of Singapore (2000-2004)",
      "Area_of_practice": "Property law",
      "Years_of_experience": "2004-Present (17 years)",
      "Past_cases": "Successfully argued the case of Wong Mei How v Tan Chew Beng and got damages worth 250k for his client.",
      "About": "Alexander possesses over 15 years of experience in the legal industry. In particular, he has found his specialty in property law, helping to seek remedy and resolution for any and all clients that come to him. Alexander also volunteers at various Legal Clinics once a month.",
      "img": "https://images.unsplash.com/photo-1524538198441-241ff79d153b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      "price_range": "25-50 percentile",
      "price_ranking": 1,
      "category": "Property"
    },
    {
      "id": 11,
      "name": "Alexis Teo",
      "Current_Role": "Partner at Baker Law LLP (2018-Present)",
      "Previous_Work_Experience": "Associate at Baker Law LLP (2011-2018)",
      "Education": "LL.B. (First-Class Honours) at University of Singapore (2007-2011)",
      "Area_of_practice": "Family law",
      "Years_of_experience": "2011-Present (10 years)",
      "Past_cases": "Appeared in the Court of Appeal to argue cases such as XYZ v ABK and HOI v GDS, two seminal adoption cases in Singapore.",
      "About": "Alexis possesses over 10 years of experience in the legal industry. In particular, she has found her specialty in family law, helping to seek remedy and resolution for any and all clients that come to her. Alexis also volunteers at various Legal Clinics once a month.",
      "img": "https://images.unsplash.com/photo-1612782888995-8a739c22f99c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      "price_range": "0-25 percentile",
      "price_ranking": 0,
      "category": "Family"
    },
    {
      "id": 12,
      "name": "Parthip Raj",
      "Current_Role": "Partner at Loo Lim Wong LLP (2015-Present)",
      "Previous_Work_Experience": "Associate at Tan Law LLP (2012-2014)",
      "Education": "LL.B. (First-Class Honours) at University of Singapore (2008-2012)",
      "Area_of_practice": "Family Law",
      "Years_of_experience": "2012-Present (9 years)",
      "Past_cases": "Successfully argued the case of Tan Sok Wee v Au Yong involving the distribution of matrimonial assets",
      "About": "Parthip Raj possesses over 9 years of experience in the law industry. In particular, he has found his specialty in Family claims, helping to seek remedy and resolution for any and all clients that come to him. Parthip also volunteers at various Pro Bono projects in his free time.",
      "img": "https://images.unsplash.com/photo-1515938736719-95b568dc8dd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      "price_range": "25-50 percentile",
      "price_ranking": 1,
      "category": "Family"
    },
    {
      "id": 13,
      "name": "Stacey Lim SC",
      "Current_Role": "Partner at Lim and Lim (2013-Present)",
      "Previous_Work_Experience": "Partner at Elijah Wong LLP (2011-2013)",
      "Education": "LL.B. (First-Class Honours) at University of Singapore (2000-2004)",
      "Area_of_practice": "Criminal Law",
      "Years_of_experience": "2004-Present (17 years)",
      "Past_cases": "Successfully represented the accused on appeal in Lim Teow Eng v PP in overturning his conviction for murder under 300(a) of the Penal Code, which was amended to a charge of culpable homicide not amounting to murder.",
      "About": "Stacey Lim SC is one of the leading criminal litigators in Singapore. She has been featured on the Singapore Law Review and commended by the Chief Justice for her contribution to the legal scene. She is known for her excellent representation at affordable prices.",
      "img": "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
      "price_range": "0-25 percentile",
      "price_ranking": 0,
      "category": "Criminal"
    },
    {
      "id": 14,
      "name": "Tanya Ong",
      "Current_Role": "Partner at Elijah Wong LLP (2011-Present)",
      "Previous_Work_Experience": "Associate at Poh and Harrison LLP (2006-2010)",
      "Education": "LL.B. (First-Class Honours) at University of Singapore (2000-2004)",
      "Area_of_practice": "Contract Law",
      "Years_of_experience": "2004-Present (17 years)",
      "Past_cases": "Successfully represented Orange Inc. in their contract dispute against Pineapple Inc. in 2015 in the case of Orange v Pineapple",
      "About": "Tanya is one of the leading contract lawyers in Singapore. She possesses over 17 years of experience in the legal industry. In particular, she has found her specialty in contract disputes involving large corporations.",
      "img": "https://images.unsplash.com/photo-1625503036445-35473a5c4b2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      "price_range": "25-50 percentile",
      "price_ranking": 2,
      "category": "Contract"
    },
    {
      "id": 15,
      "name": "Morhan Raj",
      "Current_Role": "Partner at Trust LLP (2015-Present)",
      "Previous_Work_Experience": "Associate at Lim and Lim (2011-2015)",
      "Education": "LL.B. (First-Class Honours) at University of Singapore (2001-2005)",
      "Area_of_practice": "Property Law",
      "Years_of_experience": "2005-Present (16 years)",
      "Past_cases": "Successfully represented developer Tang Ju Pte Ltd involving a claim for $500m in the leading case of Tang Ju Pte Ltd v Samston Pte Ltd",
      "About": "Morhan Raj possesses over 16 years of experience in the legal industry. In particular, he has found his specialty in property claims, helping to seek remedy and resolution for any and all clients that come to him. Morhan also volunteers at various pro bono initiative in his free time",
      "img": "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
      "price_range": "0-25 percentile",
      "price_ranking": 1,
      "category": "Property"
    },
    {
      "id": 16,
      "name": "Shirley Wong",
      "Current_Role": "Partner at Elijah Wong LLP (2014-Present)",
      "Previous_Work_Experience": "Associate at Poh and Harrison LLP (2008-2014)",
      "Education": "LL.B. (First-Class Honours) at University of Singapore (2003-2007)",
      "Area_of_practice": "Defamation and Harassment",
      "Years_of_experience": "2007-Present (14 years)",
      "Past_cases": "Successfully represented local celebrity Chris Wong involving a claim for $300k for defamatory posts on instagram made against him in Chris Wong v Ong Han Wu.",
      "About": "Shirley is a one of the leading harassment and defamation lawyers in Singapore having litigated over 100 cases. Her strengths lie in her ability to disect complex legal issues and strong grasp of social media",
      "img": "https://images.unsplash.com/photo-1543165365-07232ed12fad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      "price_range": "75-100 percentile",
      "price_ranking": 3,
      "category": "Tort_1"
    },
    {
      "id": 17,
      "name": "Avery Davidson",
      "Current_Role": "Partner at Elijah Wong LLP (2014-Present)",
      "Previous_Work_Experience": "Partner at Elijah Wong LLP (2011-2013)",
      "Education": "LL.B. (First-Class Honours) at University of Singapore (2004-2008)",
      "Area_of_practice": "Personal injury and Medical Negligence",
      "Years_of_experience": "2008-Present (13 years)",
      "Past_cases": "Successfully defended a doctor in a medical negligence suit involving a claim for $500k for the negligent diagnosis of the client with lukemia in Wu Wen v Terrence J Lim",
      "About": "Avery is a passionate litigator with a speciality in medical negligence and personal injury claims. Her clients describe her as empathetic and compassionate, excellent at understanding their needs.",
      "img": "https://images.unsplash.com/photo-1600275669439-14e40452d20b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
      "price_range": "50-75 percentile",
      "price_ranking": 2,
      "category": "Tort_2"
    }
  ])

  
  

  const myContext = useContext(AppContext);

  useEffect(() => {
    //price is for price question
    console.log(myContext.nameOfUser)
    console.log(myContext.pricePoint)
    console.log(myContext.finalisedTopics)
    console.log(myContext.questionsAsked)

    let myData = [].concat(data)
    for (let i = 0; i < myContext.finalisedTopics.length; i++) {
      myData = [].concat(myData)
      .sort((a, b) => (a.category === b.category && a.price_ranking > b.price_ranking ? 1 : -1))
      myData = [].concat(myData)
      .sort((a, b) => (a.category !== myContext.finalisedTopics[i] && b.category === myContext.finalisedTopics[i]) ? 1 : -1)
      // .map((item, i) => 
      //     <div key={i}> {item.matchID} {item.timeM}{item.description}</div>
      // );
    }

    
    setData(myData)
    // console.log(myData)
  }, []);
  

  const [indexData, setIndexData] = useState([0, 1, 2, 3])

  const history = useHistory();


  const [counter, setCounter] = useState(4)

  const [currentModalToShow, setCurrentModalToShow] = useState(0)

  const [show, setShow] = useState(false);

  const openModal = (i) => {
    // alert(i)
    setCurrentModalToShow({currentModalToShow: i})
    handleShow()
    
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAccept = () => {
    handleClose()

    myContext.setLawyerChosen(data[currentModalToShow.currentModalToShow])
    

    let path = '/finalised'
    history.push(path)

  }


  const handleReject = () => {
    handleClose()
    for (var i = 0; i < indexData.length; i++) {
      if (indexData[i] === currentModalToShow.currentModalToShow) {
        indexData[i] = counter
        setCounter(counter => counter + 1)
        break;
      }
    }
  }


  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
        {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
          <h2>We suggest these lawyers</h2>
          <p>
            Carefully tailored and suggested based on our AI, with a detailed assessment of their strengths in relation to your case. 
          </p>
        </div>
        <div id='row'>
          {indexData
            ? indexData.map((d, i) => (
                <div key={`${data[d].name}-${i}`} className='col-md-3 col-sm-6 team'>
                  <div className='thumbnail'>
                    {' '}
                    <div className='caption'>
                      <h4>{data[d].name}</h4>
                      <p>{data[d].Current_Role}</p>
                    </div>
                    <img src={data[d].img} alt='...' className='team-img' />
                    {/* openModal(i) */}
                    <button className='btn btn-custom btn-lg btn-padding' onClick = {() => openModal(d)}>LEARN MORE</button>
                  </div>
                </div>
              ))
            : 'loading'}
            <Modal show={show} onHide={handleClose} animation={false} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
                      <Modal.Header>
                        <div className = "text-center">
                          <Modal.Title><h3>{
data[currentModalToShow.currentModalToShow] && data[currentModalToShow.currentModalToShow].name
                          }</h3></Modal.Title>
                        </div>
                      </Modal.Header>
                      <Modal.Body>
                        <div className="about-text text-center">
                          <h3>Price</h3>
                          <ul>
                            {data[currentModalToShow.currentModalToShow] && data[currentModalToShow.currentModalToShow].price_range}
                          </ul>
                          <h3>Years of Experience</h3>
                          <ul>
                            {data[currentModalToShow.currentModalToShow] && data[currentModalToShow.currentModalToShow].Years_of_experience}
                          </ul>
                          <h3>
                            Previous Experience
                          </h3>
                          <ul>
                            {data[currentModalToShow.currentModalToShow] && data[currentModalToShow.currentModalToShow].Previous_Work_Experience}
                          </ul>
                          <h3>Past Cases</h3>
                          <ul>
                            {data[currentModalToShow.currentModalToShow] && data[currentModalToShow.currentModalToShow].Past_cases}
                          </ul>
                          <h3>About the lawyer</h3>
                          <ul>
                            {data[currentModalToShow.currentModalToShow] && data[currentModalToShow.currentModalToShow].About}
                          </ul>
                          <h3>Advantages of lawyer <mark>tailored to your situation</mark></h3>
                          <ul>
                            {Math.floor(Math.random() * 2) === 1 ? "The lawyer has experience in defending clients on the high court for similar cases.": null}
                            
                          </ul>
                          <ul>
                          {Math.floor(Math.random() * 2) === 1 ? "The lawyer has a good volunteer experience record.": null}
                          </ul>
                          <ul>
                            {Math.floor(Math.random() * 2) === 1 ? "The lawyer has successfully represented the needy in many landmark cases.": null}
                          </ul>
                          <ul>
                          {Math.floor(Math.random() * 2) === 1 ? "The lawyer is described by clients as passionate and understanding.": null}
                          </ul>
                          <ul>
                            {Math.floor(Math.random() * 2) === 1 ? "The lawyer has a good work experience record.": null}
                          </ul>
                          <h3>Augmented Reality Immersive Experience</h3>
                          
                        </div>
                        <ReactPlayer 
                            url="https://www.youtube.com/watch?v=DB7bYc2wqq8"
                          />
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleReject}>
                          Reject
                        </Button>
                        <Button variant="primary" onClick={handleAccept}>
                          Request Quote
                        </Button>
                      </Modal.Footer>
                    </Modal>
        </div>
      </div>
    </div>
  ) 
}
