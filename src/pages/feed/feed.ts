import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public usuarios = [
    { foto: '../../assets/imgs/joana.jpg', nome: 'Joana Silva', nascimento: '05 de Novembro, 1987' },
    { foto: '../../assets/imgs/antonio.jpg', nome: 'Antônio Pereira', nascimento: '18 de Abril, 1972' },
    { foto: '../../assets/imgs/lucas.jpeg', nome: 'Lucas Alves', nascimento: '20 de Agosto, 2008' }
  ]

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

  removeUser(name) {
    const alert = this.alertCtrl.create({
      title: 'Exclusão de Usuário',
      subTitle: 'Você deseja realmente excluir o usuario ' + name,
      buttons: ['SIM', 'NÃO']
    });
    alert.present();
  }

  alert () {
    this.navCtrl.push('AlertInfoPage')
  }

  addVacine () {
    this.navCtrl.push('AddVacineInfoPage')
  }
  
  calendarVacine () {
    this.navCtrl.push('CalendarVacineInfoPage')
  }
}
