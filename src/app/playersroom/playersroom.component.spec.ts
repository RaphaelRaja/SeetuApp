import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersroomComponent } from './playersroom.component';

describe('PlayersroomComponent', () => {
  let component: PlayersroomComponent;
  let fixture: ComponentFixture<PlayersroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
