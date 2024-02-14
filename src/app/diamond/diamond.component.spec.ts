import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import the HttpClientModule
import { DiamondComponent } from './diamond.component';
import { HeaderComponent } from '../Header/Header.component';
import { AuthService } from '../auth.service'; // Import the AuthService
import { FooterComponent } from '../footer/footer.component';
describe('DiamondComponent', () => {
  let diamondComponent: DiamondComponent;
  let diamondFixture: ComponentFixture<DiamondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiamondComponent, HeaderComponent,FooterComponent],
      imports: [HttpClientTestingModule], // Import the HttpClientTestingModule
      providers: [AuthService], // Provide AuthService and any other services here
    }).compileComponents();
  }));

  beforeEach(() => {
    diamondFixture = TestBed.createComponent(DiamondComponent);
    diamondComponent = diamondFixture.componentInstance;
    diamondFixture.detectChanges();
  });

  it('should create', () => {
    expect(diamondComponent).toBeTruthy();
  });
});

describe('HeaderComponent', () => {
  let headerComponent: HeaderComponent;
  let headerFixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    headerFixture = TestBed.createComponent(HeaderComponent);
    headerComponent = headerFixture.componentInstance;
    headerFixture.detectChanges();
  });

  it('should create', () => {
    expect(headerComponent).toBeTruthy();
  });
});
