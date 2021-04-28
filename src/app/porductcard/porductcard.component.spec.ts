import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorductcardComponent } from './porductcard.component';

describe('PorductcardComponent', () => {
  let component: PorductcardComponent;
  let fixture: ComponentFixture<PorductcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorductcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorductcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
