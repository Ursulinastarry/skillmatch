import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateProfileComponent } from './create-update-profile.component';

describe('CreateUpdateProfileComponent', () => {
  let component: CreateUpdateProfileComponent;
  let fixture: ComponentFixture<CreateUpdateProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateUpdateProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUpdateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
