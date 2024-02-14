import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs'; // Import 'of' from rxjs
import { UpdateComponent } from './Update.component';
import { ApiService } from '../api.service'; // Import ApiService
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [UpdateComponent],
      imports: [RouterTestingModule,HttpClientTestingModule, ReactiveFormsModule,HttpClientModule, FormsModule], // Import HttpClientModule
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
