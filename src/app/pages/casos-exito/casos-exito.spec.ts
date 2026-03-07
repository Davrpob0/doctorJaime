import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasosExito } from './casos-exito';

describe('CasosExito', () => {
  let component: CasosExito;
  let fixture: ComponentFixture<CasosExito>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasosExito]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasosExito);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
