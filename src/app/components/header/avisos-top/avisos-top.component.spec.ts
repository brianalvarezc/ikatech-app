import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisosTopComponent } from './avisos-top.component';

describe('AvisosTopComponent', () => {
  let component: AvisosTopComponent;
  let fixture: ComponentFixture<AvisosTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvisosTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvisosTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
