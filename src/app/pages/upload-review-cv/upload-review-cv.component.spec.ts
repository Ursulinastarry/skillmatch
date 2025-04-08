import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadReviewCvComponent } from './upload-review-cv.component';

describe('UploadReviewCvComponent', () => {
  let component: UploadReviewCvComponent;
  let fixture: ComponentFixture<UploadReviewCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadReviewCvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadReviewCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
