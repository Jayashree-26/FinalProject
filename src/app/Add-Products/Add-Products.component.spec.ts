import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AddProductsComponent } from './Add-Products.component';
import { ApiService } from '../api.service'; // Import the ApiService
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import the HttpClientModule

describe('AddProductsComponent', () => {
  let component: AddProductsComponent;
  let fixture: ComponentFixture<AddProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddProductsComponent],
      imports: [HttpClientTestingModule], // Import and add HttpClientModule and HttpClientTestingModule
      providers: [ApiService], // Provide ApiService here
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
