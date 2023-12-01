import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesFournisseursComponent } from './pages-fournisseurs.component';

describe('PagesFournisseursComponent', () => {
  let component: PagesFournisseursComponent;
  let fixture: ComponentFixture<PagesFournisseursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesFournisseursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesFournisseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
