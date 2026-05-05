import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopaDeMujer } from './ropa-de-mujer';

describe('RopaDeMujer', () => {
  let component: RopaDeMujer;
  let fixture: ComponentFixture<RopaDeMujer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RopaDeMujer],
    }).compileComponents();

    fixture = TestBed.createComponent(RopaDeMujer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
