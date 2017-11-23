import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBlogComponent } from './input-blog.component';

describe('InputBlogComponent', () => {
  let component: InputBlogComponent;
  let fixture: ComponentFixture<InputBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
