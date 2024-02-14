import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../Header/Header.component';
import { SilverBanglesComponent } from './silver-bangles.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SilverBanglesComponent', () => {
  let component: SilverBanglesComponent;
  let fixture: ComponentFixture<SilverBanglesComponent>;



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SilverBanglesComponent, FooterComponent,HeaderComponent ],
      imports: [HttpClientModule, RouterTestingModule],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SilverBanglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
