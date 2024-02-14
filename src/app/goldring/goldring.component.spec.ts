import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../Header/Header.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import HttpClientTestingModule
import { goldringComponent } from './goldring.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('goldringComponent', () => {
  let component: goldringComponent;
  let fixture: ComponentFixture<goldringComponent>;

  beforeEach(async() => {
   TestBed.configureTestingModule({
      declarations: [goldringComponent, HeaderComponent, FooterComponent],
      imports: [HttpClientTestingModule, RouterTestingModule] // Add HttpClientTestingModule to imports
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(goldringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
