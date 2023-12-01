import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProformaComponent } from './detail-proforma.component';

describe('DetailProformaComponent', () => {
  let component: DetailProformaComponent;
  let fixture: ComponentFixture<DetailProformaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailProformaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailProformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
