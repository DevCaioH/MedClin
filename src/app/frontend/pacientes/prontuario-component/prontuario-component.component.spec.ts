import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProntuarioComponentComponent } from './prontuario-component.component';

describe('ProntuarioComponentComponent', () => {
  let component: ProntuarioComponentComponent;
  let fixture: ComponentFixture<ProntuarioComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProntuarioComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProntuarioComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
