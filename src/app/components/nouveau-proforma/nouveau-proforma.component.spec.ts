import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauProformaComponent } from './nouveau-proforma.component';

describe('NouveauProformaComponent', () => {
  let component: NouveauProformaComponent;
  let fixture: ComponentFixture<NouveauProformaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauProformaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouveauProformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
