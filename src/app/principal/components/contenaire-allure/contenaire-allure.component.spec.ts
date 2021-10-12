import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenaireAllureComponent } from './contenaire-allure.component';

describe('ContenaireAllureComponent', () => {
  let component: ContenaireAllureComponent;
  let fixture: ComponentFixture<ContenaireAllureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenaireAllureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenaireAllureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
