import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingDetailComponent } from './voting-detail.component';

describe('VotingDetailComponent', () => {
  let component: VotingDetailComponent;
  let fixture: ComponentFixture<VotingDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VotingDetailComponent]
    });
    fixture = TestBed.createComponent(VotingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
