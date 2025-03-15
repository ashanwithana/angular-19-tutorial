import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwtchCaseComponent } from './swtch-case.component';

describe('SwtchCaseComponent', () => {
  let component: SwtchCaseComponent;
  let fixture: ComponentFixture<SwtchCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwtchCaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwtchCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
