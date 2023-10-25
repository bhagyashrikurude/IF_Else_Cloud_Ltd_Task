import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomTblDataComponent } from './bottom-tbl-data.component';

describe('BottomTblDataComponent', () => {
  let component: BottomTblDataComponent;
  let fixture: ComponentFixture<BottomTblDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomTblDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomTblDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
