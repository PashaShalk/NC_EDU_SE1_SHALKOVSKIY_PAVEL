import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesGridListComponent } from './images-grid-list.component';

describe('ImagesGridListComponent', () => {
  let component: ImagesGridListComponent;
  let fixture: ComponentFixture<ImagesGridListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesGridListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
