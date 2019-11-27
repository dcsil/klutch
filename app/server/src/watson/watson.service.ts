import { Injectable } from '@nestjs/common';
import { json } from 'body-parser';
const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

@Injectable()
export class WatsonService {

    async getEntityAnalysis(text) {
        const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
          version: '2019-07-12',
          authenticator: new IamAuthenticator({
            apikey: 'yJnBgYsv_BHjkUEtVTI6W4Fhj03esdmq1r-eyRKwCC5Q',
          }),
          url: 'https://gateway.watsonplatform.net/natural-language-understanding/api',
        });
    
        const analyzeParams = {
          'text': `${text}`,
          'features': {
            'entities': {
              'sentiment': false,
              'limit': 10
            }
          }
        };
        
        const analysis = await naturalLanguageUnderstanding.analyze(analyzeParams);
        const result = analysis.result;
        console.log(JSON.stringify(result));
        return result.entities;
      }
      
}
