import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jewelery } from './jewelery';

describe('Jewelery', () => {
  let component: Jewelery;
  let fixture: ComponentFixture<Jewelery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jewelery],
    }).compileComponents();

    fixture = TestBed.createComponent(Jewelery);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
