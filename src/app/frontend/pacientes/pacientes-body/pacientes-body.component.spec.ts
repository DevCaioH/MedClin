import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesBodyComponent } from './pacientes-body.component';

describe('PacientesBodyComponent', () => {
  let component: PacientesBodyComponent;
  let fixture: ComponentFixture<PacientesBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacientesBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacientesBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
