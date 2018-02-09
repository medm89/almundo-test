/**
 * Created by emto on 26/01/2018.
 */
import {Component, OnInit} from '@angular/core';

import {HotelService } from '../service/hotels.service';
import {Hotel} from '../modelo/hotel';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-leftbar',
  templateUrl: './left.component.html',
  styleUrls: ['../app.component.css']

})
export class LeftBarComponent  {
 title = 'Filtros';
 stars = [0,0,0,0,0,0,6];
 hotelStars = {
  skills: [
    { name: 'Todas las estrellas',  selected: true, id: 6 },
    { name: '5',  selected: false, id: 5 },
    { name: '4',  selected: false, id: 4 },
    { name: '3',  selected: false, id: 3 },
    { name: '2',  selected: false, id: 2 },
    { name: '1',  selected: false, id: 1 },
  ]
}
form;
constructor(private hotelService: HotelService, private fb: FormBuilder) {
   this.form = this.fb.group({
     skills: this.buildSkills()
   });
}

get skills(): FormArray {
  return this.form.get('skills') as FormArray;
  };
buildSkills() {
  const arr = this.hotelStars.skills.map(s => {
    return this.fb.control(s.selected);
  })
  return this.fb.array(arr);
}
getHotelByName(hotelName: string) {
   if( hotelName.length > 0 ){
   this.hotelService.getHotelByName(hotelName.toUpperCase()).subscribe(hotels =>  {
      this.hotelService.updateHotels(hotels);
     }
   );
  }else{
    window.alert("Por favor ingrese información");
  }
 }
  getHotelByStar(star: number) {
    if(this.stars[star] != 0){
      this.stars[star] = 0;  
    }else{
      if(this.stars[6] != 0 && star != 6){
        this.stars[6] = 0;
      }
      this.stars[star] = star;  
    }
    this.hotelService.getHotelByStars(this.stars).subscribe(hotels =>  {
      this.hotelService.updateHotels(hotels);
    }
    );
  }
  getStars(starsNumber: number ): Array<String> {
    const stars = [];
    for (let _i = 0; _i < starsNumber; _i++) {
      stars.push(_i);
    }
    return stars;
  }  
}


