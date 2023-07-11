import { LightningElement, track } from 'lwc';
import analyzeTextSentiment from '@salesforce/apex/SentimentAnalysisController.analyzeTextSentiment';

export default class SentimentAnalysis extends LightningElement {
  @track textInput = '';
  @track sentimentResult = '';

  handleInputChange(event) {
    this.textInput = event.target.value;
  }

  analyzeText() {
    analyzeTextSentiment({ text: this.textInput })
      .then(result => {
        // Process the sentiment result returned from the API
        this.sentimentResult = `Sentiment: ${result.sentiment}`;
      })
      .catch(error => {
        console.error('Error analyzing text:', error);
      });
  }
}
