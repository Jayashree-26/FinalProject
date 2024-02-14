import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { of } from 'rxjs'; // Import 'of' from rxjs
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../api.service';
import { HeaderComponent } from '../Header/Header.component';
import { FooterComponent } from '../footer/footer.component';
import { SilverRingComponent } from './silver-ring.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SilverRingComponent', () => {
  let component: SilverRingComponent;
  let fixture: ComponentFixture<SilverRingComponent>;

  beforeEach(async() => {
    const mockActivatedRoute = {
      queryParams: of({ id: 'your-param-value' })
    };
    await TestBed.configureTestingModule({
      declarations: [SilverRingComponent, HeaderComponent, FooterComponent],
      imports: [HttpClientModule, RouterTestingModule],

    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SilverRingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
