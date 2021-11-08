import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCoffeeComponent } from './home-coffee.component';

describe('HomeCoffeeComponent', () => {
  let component: HomeCoffeeComponent;
  let fixture: ComponentFixture<HomeCoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCoffeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
