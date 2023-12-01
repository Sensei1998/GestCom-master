import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBcmdFnsComponent } from './detail-bcmd-fns.component';

describe('DetailBcmdFnsComponent', () => {
  let component: DetailBcmdFnsComponent;
  let fixture: ComponentFixture<DetailBcmdFnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBcmdFnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailBcmdFnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
