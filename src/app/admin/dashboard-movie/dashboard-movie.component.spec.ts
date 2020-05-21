import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMovieComponent } from './dashboard-movie.component';

describe('DashboardMovieComponent', () => {
  let component: DashboardMovieComponent;
  let fixture: ComponentFixture<DashboardMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
