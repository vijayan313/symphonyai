import { Component, OnInit } from '@angular/core';
import {InterviewService} from '../interview.service';
@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
 posted_jobs;
 searchkey;
 data;
 getdata;
 short_list_data;
 main_key;

  constructor(private myService:InterviewService) { }

  ngOnInit() {
    this.myService.getService().subscribe((res)=>this.posted_jobs=res);
    this.myService.datacast.subscribe((res)=>(this.short_list_data=res));
    this.myService.keycast.subscribe((ress)=>(this.main_key=ress));
  
   }
 
   onchange(event:any){
        this.searchkey=event.target.value;
                  
         }
      search(i){
        this.getdata=this.posted_jobs.filter(x =>x.title==this.searchkey);
        this.share(0);
        this.serach(0);
        
 
      }
 
      share(i){
       this.myService.key_assign(i);
       this.myService.data_assign(this.getdata);
       
      }
     serach(i){
     this.myService.short_key_assign(i);
       }
     open(){
       this.getdata=this.posted_jobs.filter(x =>x.status=="open");
       this.share(0);
       this.serach(0);
       
     }
     close(){
       this.getdata=this.posted_jobs.filter(x =>x.status=="close");
       this.share(0);
       this.serach(0);
       
 
     }
 
      
      
 
 }
 