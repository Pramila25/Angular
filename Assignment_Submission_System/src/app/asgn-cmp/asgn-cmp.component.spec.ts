import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsgnCmpComponent } from './asgn-cmp.component';

describe('AsgnCmpComponent', () => {
  let component: AsgnCmpComponent;
  let fixture: ComponentFixture<AsgnCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsgnCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsgnCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
