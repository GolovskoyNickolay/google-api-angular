import { Component } from '@angular/core';
import { Geocoding } from './services/geocoding.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Geocoding]
})
export class AppComponent {
  lat: number = 51.678418;
  lng: number = 7.809007;
  modal:boolean = false;
  model:any;
  item:any = {};
  arr:any = JSON.parse(localStorage.getItem('arrItems')) || [];



  constructor(private geo: Geocoding){
    this.model = {
      address:'',
      name:''
    }
  }

  getGeo(){
    this.geo.getGecoding(JSON.stringify(this.model.address)).subscribe((data)=>{
      this.item = {};
      this.lat = data.results[0].geometry.location.lat;
      this.lng = data.results[0].geometry.location.lng;
      this.item.lat = this.lat;
      this.item.lng = this.lng;
      this.modal = true;
    });
  }
  saveGeo(){
        this.item.name = this.model.name;
    console.log(this.item);
        this.arr.push(this.item);
    console.log(this.arr);
        localStorage.setItem('arrItems',JSON.stringify(this.arr));
        this.modal = false;
  }
  hideModal(){
    this.modal = false;
  }
  reverseGeo(lat,lng){
        this.lat = lat;
        this.lng = lng;
  }
  remove(i){
        this.arr.splice(i,1);
        localStorage.setItem('arrItems',JSON.stringify(this.arr));
  }

}
