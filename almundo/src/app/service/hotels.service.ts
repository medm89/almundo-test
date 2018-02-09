/**
 * Created by emto on 07/02/2018.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Hotel } from '../modelo/hotel';

@Injectable()
export class HotelService {

  private readonly URL = 'http://localhost:3300/hotels';
  private updatedHotelSource = new Subject<Hotel[]>();
  updatedHotel = this.updatedHotelSource.asObservable();
  
  constructor(protected httpClient: HttpClient) {}

  listHotel(): Observable<Hotel[]> {
     return this.httpClient.get<Hotel[]>(this.URL);
  }
  getHotelByStars(stars: number[]): Observable<Hotel[]> {
    return this.httpClient.get<Array<Hotel>>(`${this.URL}/getHotelByStars/${stars.toString()}`);
  }
  getHotelByName(hotelName: string): Observable<Hotel[]> {
      return this.httpClient.get<Array<Hotel>>(`${this.URL}/getHotelByName/${hotelName}`);
  }
  updateHotels(hotelsList: Hotel[]) {
    this.updatedHotelSource.next(hotelsList);
  }


}
