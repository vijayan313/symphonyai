import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterviewService } from './interview.service';
import { FormsModule} from '@angular/forms';
import { PostJobComponent } from './post-job/post-job.component';
import { ShotListComponent } from './shot-list/shot-list.component';
import { InteviewComponent } from './inteview/inteview.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    PostJobComponent,
    ShotListComponent,
    InteviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [InterviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
