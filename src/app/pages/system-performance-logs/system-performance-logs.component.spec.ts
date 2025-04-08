import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemPerformanceLogsComponent } from './system-performance-logs.component';

describe('SystemPerformanceLogsComponent', () => {
  let component: SystemPerformanceLogsComponent;
  let fixture: ComponentFixture<SystemPerformanceLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemPerformanceLogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemPerformanceLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
