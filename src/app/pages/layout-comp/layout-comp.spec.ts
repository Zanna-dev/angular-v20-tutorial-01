import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComp } from './layout-comp';

describe('LayoutComp', () => {
  let component: LayoutComp;
  let fixture: ComponentFixture<LayoutComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
