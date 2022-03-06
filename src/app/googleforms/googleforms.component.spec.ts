import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleformsComponent } from './googleforms.component';

describe('GoogleformsComponent', () => {
  let component: GoogleformsComponent;
  let fixture: ComponentFixture<GoogleformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
