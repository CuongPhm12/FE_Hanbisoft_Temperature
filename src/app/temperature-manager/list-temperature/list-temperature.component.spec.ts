import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTemperatureComponent } from './list-temperature.component';

describe('ListTemperatureComponent', () => {
  let component: ListTemperatureComponent;
  let fixture: ComponentFixture<ListTemperatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTemperatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
