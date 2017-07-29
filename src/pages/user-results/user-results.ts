import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';


@Component({
  selector: 'page-user-results',
  templateUrl: 'user-results.html',
})
export class UserResultsPage {

  @ViewChild('polarCanvas') polarCanvas;
  polarChart: any;
  test: any = {};

  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  // }

  ionViewDidLoad() {
    // this.test = this.navParams.get("test");
    // console.log('ionViewDidLoad ResultsPage');
    // console.log("Test as shown on Results Page", this.test);
    
    this.polarChart = new Chart(this.polarCanvas.nativeElement, {
      type: 'polarArea',
      data: {
        labels: [
          "Extraversion",
          "Agreeableness",
          "Conscientiousness",
          "Emotional Stability",
          "Intellect"
          ],
        datasets: [{
          data: [
            40,10,20,30,10 // Mock data until test results start being generated, saved and passed as paramaters
            
            // this.test["Extraversion"], 
            // this.test["Agreeableness"], 
            // this.test["Conscientiousness"], 
            // this.test["Emotional Stability"], 
            // this.test["Intellect"]
            ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ]
        }]
      },
      options: {
        responsive: true,
        animation: {
          animationScale: true
        },
        scale: {
          ticks: {
            beginAtZero: true,
            max: 50
          }
        }
      }
    });
    
  }


}
