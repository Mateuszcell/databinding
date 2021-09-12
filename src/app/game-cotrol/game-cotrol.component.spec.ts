import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCotrolComponent } from './game-cotrol.component';

describe('GameCotrolComponent', () => {
  let component: GameCotrolComponent;
  let fixture: ComponentFixture<GameCotrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameCotrolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameCotrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
