/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { of } from 'rxjs'; // Import of from rxjs
import { HttpClientModule } from '@angular/common/http';
import { BuynowComponent } from './Buynow.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../Header/Header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BuynowComponent', () => {
  let component: BuynowComponent;
  let fixture: ComponentFixture<BuynowComponent>;

  // Create a mock ActivatedRoute
  beforeEach(async() => {
    const mockActivatedRoute = {
      snapshot: { data: {} },
      paramMap: of({ get: (key: string) => 'some-value' }) // You can customize this as needed
    };
   await TestBed.configureTestingModule({
      declarations: [ BuynowComponent, HeaderComponent, FooterComponent ],
      imports:[HttpClientModule, HttpClientTestingModule, RouterTestingModule, ReactiveFormsModule],
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuynowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
