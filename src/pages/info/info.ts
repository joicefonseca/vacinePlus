import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalInfoComponent } from '../../components/modal-info/modal-info';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  public vacines = [
    { title: 'Vacinas obrigatórias CRIANÇAS', text: 'BCG: dose única ao nascer. Proteje contra tuberculose. Hepatite B: isolada de outras imunizações. Outras doses irão vir em doses posteriores. 2 meses: Pentavalente: proteção contra difteria, tétano, coqueluche, hepatite B e a Haemophilus influenzae B, bactéria relacionada à pneumonia, meningite, infecções de nariz, garganta e outras partes do corpo. 3 doses dadas aos 2, 4 e 6 meses de idade e 2 reforços dados aos 15 meses e aos 4 anos. Poliomielite VIP/VOP: VIP é dada por injeção aos 2, 4 e 6 meses. O reforço é feito com a VOP aos 15 meses e aos 4 anos.  Pneumocócica: Duas doses aos 2 e 4 meses e um reforço aos 12 meses. A vacina previne doenças causadas por 10 tipos diferentes de pneumococo, como pneumonia, meningite e otite. Rotavírus: Protecão contra a rotavirose(pode causar diarreia forte) e é oferecida em duas doses (aos 2 e 4 meses).'}
  ]

  public defaultSearch: string = 'test';
  public customPlaceholder: number = 2;
  public defaultCancel: string = '';

  public isAutocorrect: string = 'on';
  public isAutocomplete: string = 'on';
  public isSpellcheck: boolean = true;
  public activeTab = '';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modal: ModalController, 
    public changeDetectorRef: ChangeDetectorRef) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

  detalhes (text) {
    const modal = this.modal.create(ModalInfoComponent, {vacina: text});

    modal.present();
  }

  
  onClearSearchbar(ev: any) {
    console.log('ionClear', ev);
  }

  onCancelSearchbar(ev: any) {
    console.log('ionCancel', ev);
  }

  triggerInput(ev: any) {
    console.log('ionInput', ev);
  }

  changedInput(ev: any) {
    console.log('ionChange', ev);
  }

  inputBlurred(ev: any) {
    console.log('ionBlur', ev);
  }

  inputFocused(ev: any) {
    console.log('ionFocus', ev);
  }

  ngAfterViewInit() {
    this.customPlaceholder = 33;
    this.defaultCancel = 'after view';
    this.changeDetectorRef.detectChanges();
  }

  changeValue() {
    this.defaultSearch = 'changed';
  }
}
