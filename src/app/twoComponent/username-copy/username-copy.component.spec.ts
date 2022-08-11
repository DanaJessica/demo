import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameCopyComponent } from './username-copy.component';

describe('UsernameCopyComponent', () => {
  let component: UsernameCopyComponent;
  let fixture: ComponentFixture<UsernameCopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsernameCopyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsernameCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
