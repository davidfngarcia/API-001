import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopaDeHombre } from './ropa-de-hombre';

describe('RopaDeHombre', () => {
  let component: RopaDeHombre;
  let fixture: ComponentFixture<RopaDeHombre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RopaDeHombre],
    }).compileComponents();

    fixture = TestBed.createComponent(RopaDeHombre);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
