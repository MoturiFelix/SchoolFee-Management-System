import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithBalanceComponent } from './with-balance.component';

describe('WithBalanceComponent', () => {
  let component: WithBalanceComponent;
  let fixture: ComponentFixture<WithBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithBalanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
