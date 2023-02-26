import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDirectoryComponent } from './store-directory.component';

describe('StoreDirectoryComponent', () => {
  let component: StoreDirectoryComponent;
  let fixture: ComponentFixture<StoreDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreDirectoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
