import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMvtskComponent } from './sub-mvtsk.component';

describe('SubMvtskComponent', () => {
  let component: SubMvtskComponent;
  let fixture: ComponentFixture<SubMvtskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubMvtskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubMvtskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
