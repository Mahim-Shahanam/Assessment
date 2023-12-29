import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FintechAsComponent } from './fintech-as.component';

describe('FintechAsComponent', () => {
  let component: FintechAsComponent;
  let fixture: ComponentFixture<FintechAsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FintechAsComponent]
    });
    fixture = TestBed.createComponent(FintechAsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
