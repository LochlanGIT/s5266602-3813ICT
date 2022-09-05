import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomgrouplistComponent } from './roomgrouplist.component';

describe('RoomgrouplistComponent', () => {
  let component: RoomgrouplistComponent;
  let fixture: ComponentFixture<RoomgrouplistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomgrouplistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomgrouplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
