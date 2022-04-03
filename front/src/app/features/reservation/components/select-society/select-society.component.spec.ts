import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSocietyComponent } from './select-society.component';

describe('SelectSocietyComponent', () => {
  let component: SelectSocietyComponent;
  let fixture: ComponentFixture<SelectSocietyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectSocietyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSocietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
