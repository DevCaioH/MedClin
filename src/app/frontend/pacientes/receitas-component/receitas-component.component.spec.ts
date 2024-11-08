import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitasComponentComponent } from './receitas-component.component';

describe('ReceitasComponentComponent', () => {
  let component: ReceitasComponentComponent;
  let fixture: ComponentFixture<ReceitasComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceitasComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceitasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
