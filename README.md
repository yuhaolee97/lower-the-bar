
# Lower The Bar

Champions of SMU LIT Hackathon 2021

Done by: Lee Yu Hao, Aw Khai Loong, Galen Ong, Natalia Mai, Ezra Lim

# Description


Navigating the legal system today can be an incredibly daunting task for the average person on the street. LowerTheBar aims to address these issues and increase access to justice. 

LowerTheBar uses text and speech recognition AI to classify problems faced by clients. The AI is trained using legal case facts to recognise key terms in simple, conversational language, and match these terms to respective legal issues. First, the user is given the option of inputting their issue via text or speech. The AI will then identify the top categories which the claim might fall under. Confirmatory questions will be asked to ensure that the correct issues have been identified. 

Once the questions are answered, the applicant will be presented with lawyers that specialise in that area of the law. The applicant will be able to see the experience and description of the lawyer, as well as the price range (grouped by percentile) that the lawyer falls under. An AR introduction from the lawyer will also be provided to give the applicant a more realistic and personal experience. The applicant can then request a quote from the lawyer. The lawyer will be sent a transcript which includes all of the inputs from the applicant to help in determining a price. 

This system also can be used in collaboration with volunteer lawyers. Applicants will use LowerTheBar before visiting the legal clinic. After the consultation, the volunteer lawyers will then be given access to a) edit the specific area of the law the claims fall under and b) add details about the client in the transcript. 

LowerTheBar is a novel and unique solution that leverages on speech recognition, deep learning and an AR experience to provide applicants with the most seamless, accurate and immersive experience in finding an appropriate lawyer.

# Frontend

Simply run a npm install, then do a npm start

# Backend

# lit-flask

This is the Flask code for deploying the deep learning model as a prediction API for the SMU-LIT Hackathon 2021.

Setup your virtual environment using requirements.txt. The relevant code for the app is in app.py.

# lit-deep-learning

This is the deep learning code for the SMU-LIT Hackathon 2021.

We train a deep learning model using lit_deep_learning_final_training.ipynb, which outputs saved_model and tokenizer.pickle






