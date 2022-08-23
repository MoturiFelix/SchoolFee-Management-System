import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutBalanceComponent } from './without-balance.component';

describe('WithoutBalanceComponent', () => {
  let component: WithoutBalanceComponent;
  let fixture: ComponentFixture<WithoutBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithoutBalanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithoutBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
