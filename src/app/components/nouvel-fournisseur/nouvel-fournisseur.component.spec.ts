import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelFournisseurComponent } from './nouvel-fournisseur.component';

describe('NouvelFournisseurComponent', () => {
  let component: NouvelFournisseurComponent;
  let fixture: ComponentFixture<NouvelFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelFournisseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
