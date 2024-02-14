import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import HttpClientTestingModule
import { GoldComponent } from './gold.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../Header/Header.component';

describe('GoldComponent', () => {
  let component: GoldComponent;
  let fixture: ComponentFixture<GoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoldComponent, HeaderComponent, FooterComponent],
      imports: [HttpClientTestingModule], // Add HttpClientTestingModule to imports
    }).compileComponents();
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
