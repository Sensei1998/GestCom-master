import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleCmdClientComponent } from './nouvelle-cmd-client.component';

describe('NouvelleCmdClientComponent', () => {
  let component: NouvelleCmdClientComponent;
  let fixture: ComponentFixture<NouvelleCmdClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleCmdClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelleCmdClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
