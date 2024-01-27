import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VccComponent } from './vcc.component';

describe('VccComponent', () => {
  let component: VccComponent;
  let fixture: ComponentFixture<VccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VccComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
