/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GoldComponent } from './gold.component';

describe('GoldComponent', () => {
  let component: GoldComponent;
  let fixture: ComponentFixture<GoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
