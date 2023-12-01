import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCmdClientsComponent } from './detail-cmd-clients.component';

describe('DetailCmdClientsComponent', () => {
  let component: DetailCmdClientsComponent;
  let fixture: ComponentFixture<DetailCmdClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCmdClientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCmdClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
