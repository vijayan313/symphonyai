import { Component, OnInit } from '@angular/core';
import {InterviewService} from '../interview.service';
@Component({
  selector: 'app-inteview',
  templateUrl: './inteview.component.html',
  styleUrls: ['./inteview.component.css']
})
export class InteviewComponent implements OnInit {

 interview_list_data;
 main_key;
 short_key;

  constructor(private myService:InterviewService) { }

  ngOnInit() {
    this.myService.datacast.subscribe((ress)=>this.interview_list_data=ress);

    this.myService.keycast.subscribe((res)=>(this.main_key=res)); 
    this.myService.short_key_data.subscribe((resss)=>this.short_key=resss)
    console.log(this.interview_list_data[this.main_key].short_list[this.short_key].interviews)
   
  }

}
