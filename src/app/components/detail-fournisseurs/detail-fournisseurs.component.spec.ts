import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFournisseursComponent } from './detail-fournisseurs.component';

describe('DetailFournisseursComponent', () => {
  let component: DetailFournisseursComponent;
  let fixture: ComponentFixture<DetailFournisseursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailFournisseursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailFournisseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
