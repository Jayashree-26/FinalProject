import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeaderComponent } from '../Header/Header.component';
import { FooterComponent } from '../footer/footer.component';
import { SilverEarringComponent } from './silver-earring.component';
import { ApiService } from '../api.service';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';



describe('SilverEarringComponent', () => {
  let component: SilverEarringComponent;
  let fixture: ComponentFixture<SilverEarringComponent>;

  beforeEach(async() => {
     TestBed.configureTestingModule({
      declarations: [SilverEarringComponent, HeaderComponent, FooterComponent],
      imports: [HttpClientModule, HttpClientTestingModule, RouterTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SilverEarringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
