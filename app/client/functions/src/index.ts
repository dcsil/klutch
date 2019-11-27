import * as functions from 'firebase-functions';

// Firebase
import * as admin from 'firebase-admin';
admin.initializeApp();


// Cloud Vision
import * as vision from '@google-cloud/vision';
const visionClient =  new vision.ImageAnnotatorClient();

// Dedicated bucket for cloud function invocation
const bucketName = 'dcsil-klutch';

export const imageAnalyzer = functions.storage
    
    .bucket(bucketName)
    .object()
    .onChange( async event => {

            // File data
            const object = event.data;
            const filePath = object.name;   

            // Location of saved file in bucket
            const imageUri = `gs://${bucketName}/${filePath}`;

            const docId = filePath.split('.jpg')[0];

            const docRef = admin.firestore().collection('photos').doc(docId);

            // Await the cloud vision response
            const results = await visionClient.documentTextDetection(imageUri);

            // Map the data to desired format
            const text = results.fullTextAnnotation.text;

            return docRef.set({ docId, text })           
});