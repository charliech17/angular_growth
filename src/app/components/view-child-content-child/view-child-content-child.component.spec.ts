import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildContentChildComponent } from './view-child-content-child.component';

describe('ViewChildContentChildComponent', () => {
  let component: ViewChildContentChildComponent;
  let fixture: ComponentFixture<ViewChildContentChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChildContentChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewChildContentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
