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
We will follow this [process]() when conducting our user research. Since we did not have any immediate connections to real nurses, we have decided to involve a wide range of users that closely match our nurse user persona. For example, these include individuals with Bachelor's or advanced degrees, as well as individuals with some experience in the healthcare industry (e.g., research labs, clinics, etc.).

Research summary: TODO

## Research Thoughts
TODO

## Build Plan
TODO