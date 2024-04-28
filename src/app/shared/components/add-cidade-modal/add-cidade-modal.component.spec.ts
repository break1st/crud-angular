import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCidadeModalComponent } from './add-cidade-modal.component';

describe('AddCidadeModalComponent', () => {
  let component: AddCidadeModalComponent;
  let fixture: ComponentFixture<AddCidadeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCidadeModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCidadeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
