import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteviewComponent } from './inteview.component';

describe('InteviewComponent', () => {
  let component: InteviewComponent;
  let fixture: ComponentFixture<InteviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
