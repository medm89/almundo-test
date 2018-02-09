/**
 * Created by emto on 26/01/2018.
 */
import {Component, OnInit} from '@angular/core';
import {Hotel} from '../modelo/hotel';
import {HotelService} from '../service/hotels.service';


@Component({
  selector: 'app-rightbar',
  templateUrl: './right.component.html',
  styleUrls: ['../app.component.css']
}
)

export class RightBarComponent implements OnInit {
  title = 'Filtros';
  hotels: Hotel[];

  constructor(private hotelService: HotelService) {
    this.hotelService.listHotel().subscribe(hotels =>  {
       this.hotels = hotels;
      } );
  }
  public getStars(starsNumber: number ): Array<String> {
    const stars = [];
    for (let _i = 0; _i < starsNumber; _i++) {
      stars.push(_i);
    }
    return stars;
  }
  ngOnInit() {
    this.hotelService.updatedHotel.subscribe(listFromService => {
      this.hotels = listFromService;
    });
  }
}

