# Klutch App
<p align="center">
  <img src="../logo.png" alt="Klutch logo"/>
</p>

Table of Contents
---
- [Klutch App](#klutch-app)
  - [Table of Contents](#table-of-contents)
  - [About the App](#about-the-app)
  - [Tech Stack and Dependencies](#tech-stack-and-dependencies)
  - [Development Setup](#development-setup)
  - [Debugging](#debugging)
  - [Decision Log](#decision-log)
  - [Resources](#resources)


## About the App
*TODO*

## Tech Stack and Dependencies
- Node.js
- Nest.js
- Ionic
- Google Vision
- IBM Watson
- Angular Firebase
- FHIR
- SMART
- *TODO*

## Development Setup
1. Clone the repository.
2. Navigate to the klutch/app/ directory and run the bootstrap script. This will set up your environment and install all required dependencies.
   ```
   cd klutch/app
   script/bootstrap
   ```
3. ... *TODO*

## Debugging
1. Make sure you have all the required dependencies. Otherwise, run the bootstrap script as outlined in [Development Setup](#development-setup).
2. Configure Google Vision API by following this [guide](https://cloud.google.com/vision/docs/before-you-begin).
3. Configure Firebase
   1. Sign in to your [Firebase Console](https://console.firebase.google.com/).
   2. For *debugging purposes only*, we are going to make our storage and database public.
      1. Navigate to Storage &rightarrow; Rules and enter the following rule:
        ```
        service firebase.storage {
        match /b/{bucket}/o {
            match /{allPaths=**} {
                allow read, write;
                }
            }   
        }
        ```
      2. Navigate to Database &rightarrow; Rules and enter the following rule:
        ```
        service cloud.firestore {
            match /databases/{database}/documents {
                match /{document=**} {
                    allow read, write;
                }
            }
        }
        ```
    3. Wait for a few minutes for the new rules to be applied before proceeding with the next steps.
4. Navigate to the app/server/ directory and run the server from command line.
   ``` 
   npm run start:dev
   ```
5. In another terminal window, navigate to the app/client/ directory and launch the app from the client side. There are two ways to do this:
   1. Ionic DevApp
      1. Download the Ionic DevApp mobile app from Google Playstore.
      2. Make sure phone and computer are connected to the same network.
      3. Run the following command in the CLI:
        ```
        ionic serve --devapp
        ```
      4. Open the Ionic DevApp on your phone. Your app should show up on the homescreen. Click on it and it should launch your app. If your app still doesn't show up after a while, you can find the IP address and port number on the command line and enter them manually through the menu option. 
   2. USB debugging via Visual Studio Code. Follow this [guide](https://geeklearning.io/live-debug-your-cordova-ionic-application-with-visual-studio-code/) to live debug the app with VSC.
   
## Decision Log
*TODO*

## Resources
*TODO*