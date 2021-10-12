import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationHautComponent } from './navigation-haut.component';

describe('NavigationHautComponent', () => {
  let component: NavigationHautComponent;
  let fixture: ComponentFixture<NavigationHautComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationHautComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationHautComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
