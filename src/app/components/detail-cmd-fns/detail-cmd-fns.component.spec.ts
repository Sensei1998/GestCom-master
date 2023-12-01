import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCmdFnsComponent } from './detail-cmd-fns.component';

describe('DetailCmdFnsComponent', () => {
  let component: DetailCmdFnsComponent;
  let fixture: ComponentFixture<DetailCmdFnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCmdFnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCmdFnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
