import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  private key=new BehaviorSubject('');
  private getdata=new BehaviorSubject('');
  keycast=this.key.asObservable();
  datacast=this.getdata.asObservable();

  key_assign(key){
    this.key.next(key);
  }
  data_assign(data){
    this.getdata.next(data);
  }


  private short_key=new BehaviorSubject('');
  short_key_data=this.short_key.asObservable();

  short_key_assign(newuser){
    this.short_key.next(newuser);
  }

  constructor(private httpService:HttpClient) { }

  getService(){
    return this.httpService.get('assets/bulk_data.json');
  }

}
