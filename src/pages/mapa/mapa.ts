
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ModalController, ViewController, ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google: any;


@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {

  public mapa: any;
  public lat: any;
  public long: any;
  public marker: any;
  public locations = [
    ['Minha Posição', 0, 0],
    ['PetZoo', -18.582561, -46.518970],
    ['PetMania', -18.585497, -46.511188],
    ['PetZooFilial', -18.586545, -46.510272],
    ['Boi&Cão', -18.587046, -46.511315],
    ['Boi&Cão&Gato', -18.590901, -46.517939],
    ['KãoKiLate', -18.593784, -46.517396],
    ['Zoomed', -18.594306, -46.517335],
    ['Clinicão', -18.601406, -46.516054],
    ['FormulaAnimal', -18.590788, -46.519742]
  ];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public geolocation: Geolocation,
    public platform: Platform,
    public modal: ModalController,
    public view: ViewController,
    public toastCtrl: ToastController
    ) {
      platform.ready().then(() => {
        this.posicaoAtual();
      })
  }

  mostrarMapa() {
    let mapContainer = document.getElementById('map');
    this.mapa = new google.maps.Map(
      mapContainer,
      {
        center: new google.maps.LatLng(this.lat, this.long), zoom: 14
      }
    );

    //adicionando Marcador no mapa
    this.addMarker(this.marker, this.mapa)
  }

  posicaoAtual(): any {
    this.geolocation.getCurrentPosition({ timeout: 30000 })
    .then(res => {
      this.lat = res.coords.latitude;
      this.long = res.coords.longitude;

      this.locations[0][1] = this.lat
      this.locations[0][2] = this.long
      this.mostrarMapa();
    })
    .catch((err) => {
      console.log(err);
      this.lat = -18.574;
      this.long = -46.514;
      this.locations[0][1] = this.lat
      this.locations[0][2] = this.long
      this.mostrarMapa();
    })
  }

  
  addMarker(position,map){
    for (let i = 0; i < this.locations.length; i++) {
      if(this.locations[i][0] === 'Minha Posição') {
        this.marker = new google.maps.Marker({
          position: new google.maps.LatLng(this.locations[i][1], this.locations[i][2]),
          map: map,
          icon: 'assets/imgs/marcador.png'
        });
      } else {
        this.marker = new google.maps.Marker({
          position: new google.maps.LatLng(this.locations[i][1], this.locations[i][2]),
          map: map
        });
      }
    }
  }
}
