import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtestadosComponentComponent } from './atestados-component.component';

describe('AtestadosComponentComponent', () => {
  let component: AtestadosComponentComponent;
  let fixture: ComponentFixture<AtestadosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtestadosComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtestadosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
