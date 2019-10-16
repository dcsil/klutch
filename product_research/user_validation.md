# User Validation

## Problem & Solution
The problem we are trying to solve is related to a nurse's workflow during emergency situations. Nurses are responsible for writing down everything they observe in the emergency room on a piece of paper. Then, they have to manually input this information into their hospital's Electronic Medical Record (EMR) system. It is estimated that this process takes 2-4 hours out of their 12-hour shift, which is highly time-consuming.

Our solution aims to improve the efficiency of the data entry process by automating the job with Machine Learning. We are going to develop a mobile application that leverages Optical Character Recognition (OCR) technology to convert nurses' handwriting into machine-encoded text. Additionally, we will implement Natural Language Processing (NLP) to retrieve meaningful information from this digital document and input them automatically to the hospital's EMR system.

## Mockup
We built our prototype for user research using Sketch and InVision. The prototype can be found [here](https://invis.io/YAUCQOLQBTR). For the MVP, we have decided to focus on integrating our product with Cerner EMR.

## User Persona
Even though we will be selling to hospitals as our target market, our end users will be the nurses at these hospitals. This is because nurses are the stakeholders that are directly affected by the problem we described earlier. The time-consuming nature of manual data entry results in decreased productivity, which could further lead to poor overall job performance.

Our product is aimed at helping nurses mitigate these consequences. Therefore, we believe it is suitable for us to develop the following user persona based on nurses as our target users.

<img src="./user_persona.jpg" width="600">

As shown in the mockup, our product is a mobile application that can easily fit in Jane's pocket and be carried with her everywhere. After writing down all the information from an emergency situation, Jane can use the application to take a picture of her handwritten note and send it to our server for processing. The result will be sent back immediately and displayed as machine-encoded text that has been labeled into categories (see below). 

<img src="./patient_info.png" width="300">

On this page, Jane can then confirm if the information matches what she wrote, and even make changes or add new information as needed. After she clicks the "Save" button, all the information will be saved and sent directly to the Cerner EMR system. This patient's information is now safely stored in the Cerner system, and can be accessed anytime.

This entire process can be done with just a few taps on Jane's phone, which streamlines the original process of manual data entry and consquently fulfills her motivation for efficiency and increased productivity. Hence, our product allows nurses to save more time, and spend it where it matters the most: patient care.

## User Research
We will follow this [process](./user_research_process.md) when conducting our user research. Since we did not have any immediate connections to real nurses, we have decided to involve a wide range of users that closely match our nurse user persona. For example, these include individuals with Bachelor's or advanced degrees, as well as individuals with some experience in the healthcare industry (e.g., research labs, clinics, etc.).

We managed to conduct 7 research sessions across a diverse group of users. The majority of our participants managed to complete most of the tasks quickly and smoothly. However, we did find a recurring theme in the feedback that we received from our users.

All of them mentioned that they did not have a good sense of “where” they were in their journey through the application. In other words, it was hard to anticipate what the next steps were after they have finished a certain task. For example, one participant mentioned that they did not expect to proceed directly to the camera screen after they entered their Cerner system ID, because the button that they tapped on only says “Enter”. A similar concern was observed in other sessions, too, where some of our participants indicated that the “Send to server” button was not descriptive enough. This does not tell them what was going to happen to their picture after they tapped the button.

Additionally, our participants raised a number of thoughtful questions for us to consider. For instance, what if the user wanted to upload multiple pages of the same note? How are we going to handle a substantial amount of information and display everything in one, tiny screen? Furthermore, some participants also pointed out some key issues that we missed. For example, one user was disappointed because they were not able to re-examine the picture they took after it has been sent to our server, while another user expressed a strong need for uploading their own pictures from their phone library.

## Research Thoughts
Conducting user testing sessions has been very useful in identifying design flaws could potentially hinder our users’ journey. We have identified multiple issues that were not considered during the initial stages of brainstorming. Despite this, we were still able to verify based on the feedback that our solution does, in fact, tackle the problem we are trying to solve. After interacting with the application, our participants managed to develop a solid understanding of the application’s purpose, and they believed it will benefit nurses in their day-to-day responsibilities by saving time.

However, we also learned from our participants that our solution does not solve the problem entirely. To recap, there were two time-consuming elements in our problem space:

1. Nurses having to write every single information down on paper
2. Nurses having to manually input the written information into the hospital’s electronic charting system

Our research participants brought up the fact that nurses will still face the first problem before they could use our application to transcribe their notes. They suggested that the problem could instead be solved by digitalizing the entire note-taking process from start to finish (i.e., typing the notes on a phone/iPad/tablet instead of writing them down). However, this solution is very expensive because it implies that each room should have and maintain a designated digital writing device. Our product, in comparison, is way less expensive and it still solves the manual data entry portion of the problem.

Nevertheless, there are a number of ways we could improve our mockup based on our users’ feedback. Our first priority is to develop a more intuitive user journey by making our buttons more descriptive. The statements should clearly describe the actions that the user is going to perform next. Additionally, we could also add an option for users to go through a “Tutorial” session before they start using the app. Next, we will address the new issues brought up by our research participants and develop new features to solve them. These include implementing the “Upload your own picture” feature, as well as a “Review” page where users can re-assess the picture they took before and after it has been processed.

Finally, in terms of the design, we generally received positive feedback from our users. A lot of them really liked the simple and clean interface, although some of them agreed that it could use a bit more colour. Moreover, we should strive to deliver consistency in the way we present certain elements in the mockup. This includes using the same font throughout the application, as well as sticking with one shape for the buttons (rectangular vs. rounded rectangular).

## Build Plan
TODO