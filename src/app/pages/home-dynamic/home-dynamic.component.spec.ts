import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDynamicComponent } from './home-dynamic.component';

describe('HomeDynamicComponent', () => {
  let component: HomeDynamicComponent;
  let fixture: ComponentFixture<HomeDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeDynamicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
