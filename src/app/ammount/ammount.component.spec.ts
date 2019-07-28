import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmmountComponent } from './ammount.component';

describe('AmmountComponent', () => {
  let component: AmmountComponent;
  let fixture: ComponentFixture<AmmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
