import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracoesProgramaComponent } from './configuracoes-programa.component';

describe('ConfiguracoesProgramaComponent', () => {
  let component: ConfiguracoesProgramaComponent;
  let fixture: ComponentFixture<ConfiguracoesProgramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfiguracoesProgramaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiguracoesProgramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
