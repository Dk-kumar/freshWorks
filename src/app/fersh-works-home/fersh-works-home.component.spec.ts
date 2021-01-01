import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FershWorksHomeComponent } from './fersh-works-home.component';

describe('FershWorksHomeComponent', () => {
  let component: FershWorksHomeComponent;
  let fixture: ComponentFixture<FershWorksHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FershWorksHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FershWorksHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
