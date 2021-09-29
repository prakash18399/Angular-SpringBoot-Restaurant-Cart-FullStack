import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEditprofileComponent } from './customer-editprofile.component';

describe('CustomerEditprofileComponent', () => {
  let component: CustomerEditprofileComponent;
  let fixture: ComponentFixture<CustomerEditprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerEditprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerEditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
