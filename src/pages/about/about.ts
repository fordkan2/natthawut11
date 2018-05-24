import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  weight: number;
  height: number;
  age: number;
  bmr: number;
  constructor(public navCtrl: NavController) {

  }

  CalbmrMen() {   
    this.bmr = 66+(13.7*this.weight)+(5*this.height)-(6.8*this.age)
    alert("ค่า BMR ของคุณคือ :  " + this.bmr.toFixed(2))
    
   }
   CalbmrWomen() {   
    this.bmr = 665+(9.6*this.weight)+(1.8*this.height)-(4.7*this.age)
    alert("ค่า BMR ของคุณคือ :  " + this.bmr.toFixed(2))
    
   }

}
