import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCidadeDialogComponent } from './delete-cidade-dialog.component';

describe('DeleteCidadeDialogComponent', () => {
  let component: DeleteCidadeDialogComponent;
  let fixture: ComponentFixture<DeleteCidadeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteCidadeDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteCidadeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
