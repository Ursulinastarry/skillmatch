import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewNotificationsComponent } from './interview-notifications.component';

describe('InterviewNotificationsComponent', () => {
  let component: InterviewNotificationsComponent;
  let fixture: ComponentFixture<InterviewNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewNotificationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
