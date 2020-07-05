import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarkeepComponent } from './barkeep.component';

describe('BarkeepComponent', () => {
  let component: BarkeepComponent;
  let fixture: ComponentFixture<BarkeepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarkeepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarkeepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
