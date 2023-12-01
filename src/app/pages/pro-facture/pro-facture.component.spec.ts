import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProFactureComponent } from './pro-facture.component';

describe('ProFactureComponent', () => {
  let component: ProFactureComponent;
  let fixture: ComponentFixture<ProFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProFactureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
