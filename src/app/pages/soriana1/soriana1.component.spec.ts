import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Soriana1Component } from './soriana1.component';

describe('Soriana1Component', () => {
  let component: Soriana1Component;
  let fixture: ComponentFixture<Soriana1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Soriana1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Soriana1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
