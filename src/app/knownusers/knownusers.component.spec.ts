import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnownusersComponent } from './knownusers.component';

describe('KnownusersComponent', () => {
  let component: KnownusersComponent;
  let fixture: ComponentFixture<KnownusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnownusersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnownusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
