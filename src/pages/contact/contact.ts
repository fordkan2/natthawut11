import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

bmr:number;
tdee:number;

  constructor(public navCtrl: NavController) {

  }


  caltdee1() {   
    this.tdee = 1.2*this.bmr
    alert("ค่า TDEE ของคุณคือ :  " + this.tdee.toFixed(2))
    
   }
   caltdee2() {   
    this.tdee = 1.375*this.bmr
    alert("ค่า TDEE ของคุณคือ :  " + this.tdee.toFixed(2))
    
   }
   caltdee3() {   
    this.tdee = 1.55*this.bmr
    alert("ค่า TDEE ของคุณคือ :  " + this.tdee.toFixed(2))
    
   }
   caltdee4() {   
    this.tdee = 1.7*this.bmr
    alert("ค่า TDEE ของคุณคือ :  " + this.tdee.toFixed(2))
    
   }
   caltdee5() {   
    this.tdee = 1.9*this.bmr
    alert("ค่า TDEE ของคุณคือ :  " + this.tdee.toFixed(2))
    
   }

}
