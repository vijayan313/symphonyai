import { Component,Input } from '@angular/core';
import {InterviewService} from '../interview.service';


@Component({
  selector: 'app-shot-list',
  templateUrl: './shot-list.component.html',
  styleUrls: ['./shot-list.component.css'],

})
export class ShotListComponent {

  short_list_data;

  main_key;


  constructor(private myService:InterviewService) { }

  ngOnInit() {
    this.myService.datacast.subscribe((res)=>(this.short_list_data=res));
    this.myService.keycast.subscribe((ress)=>(this.main_key=ress));
  }

  serach(i){
 this.myService.short_key_assign(i);
 }
}
