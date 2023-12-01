import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleCmdFournisseursComponent } from './nouvelle-cmd-fournisseurs.component';

describe('NouvelleCmdFournisseursComponent', () => {
  let component: NouvelleCmdFournisseursComponent;
  let fixture: ComponentFixture<NouvelleCmdFournisseursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleCmdFournisseursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelleCmdFournisseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
