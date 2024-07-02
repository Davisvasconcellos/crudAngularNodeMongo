import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudimpactComponent } from './crudimpact.component';

describe('CrudimpactComponent', () => {
  let component: CrudimpactComponent;
  let fixture: ComponentFixture<CrudimpactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudimpactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudimpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
