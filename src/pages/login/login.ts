import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username : string;
  password : string;
  infoUser : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private service: AuthProvider) {
  }

  login(){
    let user = {
      username: this.username,
      password: this.password
    };

    this.service.login(this.username).subscribe(
      data => this.infoUser = data,
      err => console.log(err),
      () => {
        this.navCtrl.setRoot(HomePage, { inf: this.infoUser });
      }
    );
  }

}
