import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TabsPage } from '../../tabs/tabs';

/**
 * Generated class for the AddVacineInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-vacine-info',
  templateUrl: 'add-vacine-info.html',
})
export class AddVacineInfoPage {

  public data: any;
  public nome: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddVacineInfoPage');
  }

  addVacina() {
    if(this.data && this.nome) {
      const alert = this.alertCtrl.create({
        title: 'Sucesso',
        subTitle: 'Vacina Cadastrada com sucesso!!',
        buttons: [{
          text: 'OK',
          handler: data => {
            this.navCtrl.setRoot(TabsPage)
          }
        }]
      });
      alert.present();
    }
  }
}
