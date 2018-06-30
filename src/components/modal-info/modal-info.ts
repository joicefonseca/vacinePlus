import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'modal-info',
  templateUrl: 'modal-info.html'
})
export class ModalInfoComponent {

  public vacina: any = '';

  constructor(public navParams: NavParams, public view: ViewController) {
    
  }

  ionViewDidLoad() {
    this.vacina = this.navParams.get('vacina')
    console.log(this.vacina)
  }

  closeModal(){
    this.view.dismiss();
  }
}
