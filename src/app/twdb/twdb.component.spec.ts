import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TWDBComponent } from './twdb.component';

describe('TWDBComponent', () => {
  let component: TWDBComponent;
  let fixture: ComponentFixture<TWDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TWDBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TWDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
