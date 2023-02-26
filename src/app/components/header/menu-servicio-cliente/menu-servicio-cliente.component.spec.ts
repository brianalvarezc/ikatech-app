import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuServicioClienteComponent } from './menu-servicio-cliente.component';

describe('MenuServicioClienteComponent', () => {
  let component: MenuServicioClienteComponent;
  let fixture: ComponentFixture<MenuServicioClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuServicioClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuServicioClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
