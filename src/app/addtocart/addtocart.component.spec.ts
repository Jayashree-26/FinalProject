import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import HttpClientTestingModule
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../Header/Header.component';
import { AddtocartComponent } from './addtocart.component';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { RouterTestingModule } from '@angular/router/testing';

describe('AddtocartComponent', () => {
  let component: AddtocartComponent;
  let fixture: ComponentFixture<AddtocartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddtocartComponent, HeaderComponent, FooterComponent],
      imports: [HttpClientTestingModule, RouterTestingModule], // Import HttpClientTestingModule

    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtocartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
