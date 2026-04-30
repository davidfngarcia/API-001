import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Electronicos } from './electronicos';

describe('Electronicos', () => {
  let component: Electronicos;
  let fixture: ComponentFixture<Electronicos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Electronicos],
    }).compileComponents();

    fixture = TestBed.createComponent(Electronicos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
