import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentsComponent } from './vents.component';

describe('VentsComponent', () => {
  let component: VentsComponent;
  let fixture: ComponentFixture<VentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
