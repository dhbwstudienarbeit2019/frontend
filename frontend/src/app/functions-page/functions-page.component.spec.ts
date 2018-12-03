import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionsPageComponent } from './functions-page.component';

describe('FunctionsPageComponent', () => {
  let component: FunctionsPageComponent;
  let fixture: ComponentFixture<FunctionsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
