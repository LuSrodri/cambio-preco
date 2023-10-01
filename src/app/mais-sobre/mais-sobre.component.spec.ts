import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisSobreComponent } from './mais-sobre.component';

describe('MaisSobreComponent', () => {
  let component: MaisSobreComponent;
  let fixture: ComponentFixture<MaisSobreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaisSobreComponent]
    });
    fixture = TestBed.createComponent(MaisSobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
