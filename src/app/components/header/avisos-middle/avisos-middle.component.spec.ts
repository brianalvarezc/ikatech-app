import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisosMiddleComponent } from './avisos-middle.component';

describe('AvisosMiddleComponent', () => {
  let component: AvisosMiddleComponent;
  let fixture: ComponentFixture<AvisosMiddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvisosMiddleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvisosMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
