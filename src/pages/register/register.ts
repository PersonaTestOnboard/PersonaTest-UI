import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



// import { RegistrationComponent } from '../../components/registration/registration';

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, 
  public navParams: NavParams 
  ) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
