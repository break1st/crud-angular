import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCidadeModalComponent } from './edit-cidade-modal.component';

describe('EditCidadeModalComponent', () => {
  let component: EditCidadeModalComponent;
  let fixture: ComponentFixture<EditCidadeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCidadeModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCidadeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
