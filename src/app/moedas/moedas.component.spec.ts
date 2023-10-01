import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoedasComponent } from './moedas.component';

describe('MoedasComponent', () => {
  let component: MoedasComponent;
  let fixture: ComponentFixture<MoedasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoedasComponent]
    });
    fixture = TestBed.createComponent(MoedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
