import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFactureCltComponent } from './detail-facture-clt.component';

describe('DetailFactureCltComponent', () => {
  let component: DetailFactureCltComponent;
  let fixture: ComponentFixture<DetailFactureCltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailFactureCltComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailFactureCltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
