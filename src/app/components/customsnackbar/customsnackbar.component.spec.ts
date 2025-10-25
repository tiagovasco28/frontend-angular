import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomsnackbarComponent } from './customsnackbar.component';

describe('CustomsnackbarComponent', () => {
  let component: CustomsnackbarComponent;
  let fixture: ComponentFixture<CustomsnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomsnackbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomsnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
