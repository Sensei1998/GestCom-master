import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBcmdClientsComponent } from './detail-bcmd-clients.component';

describe('DetailBcmdClientsComponent', () => {
  let component: DetailBcmdClientsComponent;
  let fixture: ComponentFixture<DetailBcmdClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBcmdClientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailBcmdClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
