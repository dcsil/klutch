# Klutch App
<p align="center">
  <img src="../logo.png" alt="Klutch logo"/>
</p>

## What is Klutch?
Klutch a mobile application that digitizes medical notes saving health professionals time and helping them help better.

## Architecture 



## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* Android device to run the application

### Installation 
You can install a live version of the app by downloading the APK onto your android device. 

Please ensure that your device allows for downloading apks from unknown sources. If it's not, then follow this  [guide.](https://www.expressvpn.com/support/vpn-setup/enable-apk-installs-android/)

Link to APK here: <https://drive.google.com/open?id=1rA8wtZNdgu-RieI0Owev-02Sh5KPnt9U>

Please open and install the above link with your android device

### Development Set-up

1. Clone this repo
2. Navigate to the app directory: `cd klutch/app`
3. run bootstrap script: `script/bootstrap`
4. Set up backend server
5. Set up app/frontend

#### Backend Set-up
Navigate to the app/server/ directory and run the server from command line:
   ``` 
   $ npm run start:dev
   ```

#### Frontend/App Set-up
Now that Backend server is setup, we can run our app!

Navigate to the app/client directory and run the app from the command line:
        ```
        $ ionic serve --devapp
        ```

#### Debugging
Both frontend and backend environments have live reloading enabled. 

To test native features (such as camera) There are two ways to do this:

   1. Ionic DevApp
      1. Download the Ionic DevApp mobile app from Google Playstore.
      2. Make sure phone and computer are connected to the same network.
      3. Run the following command in the CLI:
        ```
        $ ionic serve --devapp
        ```
      4. Open the Ionic DevApp on your phone. Your app should show up on the homescreen. Click on it and it should launch your app. If your app still doesn't show up after a while, you can find the IP address and port number on the command line and enter them manually through the menu option. 
   2. USB debugging via Visual Studio Code. Follow this [guide](https://geeklearning.io/live-debug-your-cordova-ionic-application-with-visual-studio-code/) to live debug the app with VSC.


## Deployment
### Continous Integration 

Using Github actions we have a CI script for the frontend here, and the backend here ADD LINK

### Logging and exceptions 
Logging is implemented using LogDNA. You can view a screenshot of the dashboard [here](https://drive.google.com/open?id=1lgJzBo6tyD-u23j4glsOaeqkU3N2YFol)

Exceptions are tracked using Sentry. You can view a screenshot of the dashboard [here](https://drive.google.com/open?id=1oWjTR3NZCPBQN03FKJp9LXwT9RrCw4bF)

### Backend deployments
Done through Heroku, our backend is hosted here ```https://klucth-app.herokuapp.com/ ```

Heroku git remote: ``` https://git.heroku.com/klucth-app.git```

Push your server changes to the heroku git remote to automatically deploy your changes. 

### App build

First, make sure your your path points to the android sdk:
```
ANDROID_HOME=[path to android sdk]
```
or run the following command on your current terminal session:
```
$ export ANDROID_HOME=~/Library/Android/sdk && export PATH=${PATH}:${ANDROID_HOME}/tools && export PATH=${PATH}:${ANDROID_HOME}/platform-tools
```

You can then build the android app by following these commands
```
$ cd app/server
$ ionic cordova build android
```
An apk file will be generated in this path ```platforms/android/app/build/outputs/apk/debug/app-debug.apk```

you can directly install it to your device using [ADB](https://developer.android.com/studio/command-line/adb?gclid=Cj0KCQiA2vjuBRCqARIsAJL5a-I7Vc9tUXbm1p5mqz2mg02VmFo_qsZ7U65t6t95rh45bkr6N7Z6E6waAt5WEALw_wcB)
```
$ adb install platforms/android/app/build/outputs/apk/debug/app-debug.apk
```


###

## Built with
You can refer to the [service.yml](./service.yml) file to see where some of those services are used

* [NEST js](https://nestjs.com/) - A progressive Node.js framework for building efficient, reliable and scalable server-side applications.
* [Ionic](https://ionicframework.com/) - Hybrid mobile application framework
* [Heroku](https://www.heroku.com) - platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.
* [Firebase](https://firebase.google.com/docs/database) - Service that stores and syncs data with a NoSQL cloud database.
* [Google Vision AI](https://cloud.google.com/vision/) - Assign labels to images and quickly classify them into millions of predefined categories. 
* [IBM Watson](https://cloud.ibm.com/apidocs/natural-language-understanding/natural-language-understanding?code=node#introduction) - Service that provides NLP extraction functionality from unstructured data.
* [LogDNA](https://logdna.com) - a cloud-services-based server-log management and analysis tool.
* [Github Actions](https://github.com/actions) - used to set up a CI action
* [Sentry](https://sentry.io) - Self-hosted and cloud-based error monitoring that helps software teams discover, triage, and prioritize errors in real-time.

#### Debugging tools
* [Ionic Devapp](https://play.google.com/store/apps/details?id=io.ionic.devapp&hl=en) - Used to debug ionic applications that are run on localhost
* [Android studio](https://developer.android.com/studio)- Used to build apk (application file)
* [Postman](https://www.getpostman.com/) - Quickly and easily send REST, SOAP, and GraphQL requests directly within Postman.
* [Visual Studio Code](https://code.visualstudio.com)

## Troubleshooting

* Heroku's free plan lets the site to "shut down" if inactive, so the first request will take sometime to go through. You can avoid this by pinging https://klucth-app.herokuapp.com/ directly before testing

## Decision Log

## Authors

* **Shawnee Rizqa** -  [shawneerizqa](https://github.com/shawneerizqa)

* **Sonata Katt** -  [sonatata](https://github.com/sonatata)

## Acknowledgments

* Julian, our CSC491 instructor, for guiding us through the process.
* Our 454 teammates [Andrea](https://github.com/andreathniah) and [Jemin](https://github.com/jeminsieow) for helping us brainstorm the idea 


