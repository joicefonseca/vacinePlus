import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AlertInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alert-info',
  templateUrl: 'alert-info.html',
})
export class AlertInfoPage {

  public data: any;
  public vacinaSelecionada: any;
  public alerts = [
    { date: '06/07/2018', vacine: 'Vacina 1' },
    { date: '07/08/2018', vacine: 'Vacina 2' }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertInfoPage');
  }

  addAlert() {
    if (this.data && this.vacinaSelecionada) {
      this.alerts = this.alerts.concat( { date: this.data, vacine: this.vacinaSelecionada } )
    }
    this.data = ''
    this.vacinaSelecionada = ''
  }

  removeAlert(index) {
    this.alerts.splice(index, 1)
  }

}
