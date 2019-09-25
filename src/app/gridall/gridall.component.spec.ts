import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridallComponent } from './gridall.component';

describe('GridallComponent', () => {
  let component: GridallComponent;
  let fixture: ComponentFixture<GridallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
