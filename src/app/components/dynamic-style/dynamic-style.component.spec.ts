import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicStyleComponent } from './dynamic-style.component';

describe('DynamicStyleComponent', () => {
  let component: DynamicStyleComponent;
  let fixture: ComponentFixture<DynamicStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicStyleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
