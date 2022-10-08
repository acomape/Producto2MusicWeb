import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionComponent } from './cancion.component';

describe('CancionComponent', () => {
  let component: CancionComponent;
  let fixture: ComponentFixture<CancionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
