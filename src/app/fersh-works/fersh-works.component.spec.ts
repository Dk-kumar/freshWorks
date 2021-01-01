import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FershWorksComponent } from './fersh-works.component';

describe('FershWorksComponent', () => {
  let component: FershWorksComponent;
  let fixture: ComponentFixture<FershWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FershWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FershWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
