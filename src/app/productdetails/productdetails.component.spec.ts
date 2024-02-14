import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../Header/Header.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { ProductdetailsComponent } from './productdetails.component';
import { ApiService } from '../api.service'; // Import ApiService or relevant service
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductdetailsComponent', () => {
  let component: ProductdetailsComponent;
  let fixture: ComponentFixture<ProductdetailsComponent>;

  beforeEach(async(() => {
   TestBed.configureTestingModule({
      declarations: [ProductdetailsComponent, HeaderComponent, FooterComponent],
      imports: [HttpClientModule, RouterTestingModule], // Import HttpClientModule

    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
