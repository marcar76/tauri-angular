import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebartestComponent } from './sidebartest.component';

describe('SidebartestComponent', () => {
  let component: SidebartestComponent;
  let fixture: ComponentFixture<SidebartestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebartestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebartestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
