import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFindJobComponent } from './post-find-job.component';

describe('PostFindJobComponent', () => {
  let component: PostFindJobComponent;
  let fixture: ComponentFixture<PostFindJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostFindJobComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostFindJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
