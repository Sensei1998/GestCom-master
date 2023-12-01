import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandesClientsComponent } from './commandes-clients.component';

describe('CommandesClientsComponent', () => {
  let component: CommandesClientsComponent;
  let fixture: ComponentFixture<CommandesClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandesClientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandesClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
