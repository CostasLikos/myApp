import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NobelTableComponent } from './nobel-table.component';

describe('NobelTableComponent', () => {
  let component: NobelTableComponent;
  let fixture: ComponentFixture<NobelTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NobelTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NobelTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
