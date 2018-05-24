import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  weight: number;
  height: number;
  bmi: number;
  bmiDetail: string;

  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {
    
  } 

  calculator() {   
    this.bmi = this.weight / ((this.height / 100) * (this.height / 100))  
    alert("ค่า BMI ของคุณคือ :  " + this.bmi.toFixed(2))
    
   }

  ShowAlert(bmi){
    if(this.bmi<18){
    let alert = this.alertCtrl.create({
      title: 'น้ำหนักน้อย',
      subTitle: 'เสี่ยงมากกว่าคนปกติ',
      buttons: ['OK']
    });
    alert.present();
    }
    else if(this.bmi<22){
      let alert = this.alertCtrl.create({
        title: 'ปกติ',
        subTitle: 'ภาวะเสี่ยงเท่าคนปกติ',
        buttons: ['OK']
      });
      alert.present();
      }
      else if(this.bmi<24.90){
        let alert = this.alertCtrl.create({
          title: 'ท้วม',
          subTitle: 'อันตรายระดับ1',
          buttons: ['OK']
        });
        alert.present();
        }
        else if(this.bmi<29.90){
          let alert = this.alertCtrl.create({
            title: 'อ้วน',
            subTitle: 'อันตรายระดับ2',
            buttons: ['OK']
          });
          alert.present();
          }
          else if(this.bmi>30){
            let alert = this.alertCtrl.create({
              title: 'อ้วนมาก',
              subTitle: 'อันตรายระดับ3',
              buttons: ['OK']
            });
            alert.present();
            }
  }

  
}