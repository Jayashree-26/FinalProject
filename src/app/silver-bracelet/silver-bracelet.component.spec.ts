import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { of } from 'rxjs'; // Import 'of' from rxjs
import { SilverBraceletComponent } from './silver-bracelet.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../Header/Header.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SilverBraceletComponent', () => {
  let component: SilverBraceletComponent;
  let fixture: ComponentFixture<SilverBraceletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SilverBraceletComponent, HeaderComponent, FooterComponent],
      imports: [HttpClientModule, RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SilverBraceletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
