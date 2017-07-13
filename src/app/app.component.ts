import { Component } from '@angular/core';
import { Geocoding } from './services/geocoding.service';
import { Location } from './location';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Geocoding]
})
export class AppComponent {
  lat: number = 51.678418;
  lng: number = 7.809007;
  model:any;
  item:any;
  arrLocations:any = JSON.parse(localStorage.getItem('arrLocations')) || [];
  constructor(private geo: Geocoding){
    this.model = {
      address:''
    }
  }

  getGeo(){
    this.geo.getGecoding(this.model.address).subscribe((data)=>{
      this.lat = data.results[0].geometry.location.lat;
      this.lng = data.results[0].geometry.location.lng;
      this.item = new Location(this.lat,this.lng);
      console.log(this.arrLocations);
      console.log(this.item);
      this.arrLocations = this.arrLocations.push(JSON.stringify(this.item));
      localStorage.setItem('arrLocations', JSON.stringify(this.arrLocations));
    });
  }

}
