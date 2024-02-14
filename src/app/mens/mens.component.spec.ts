import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, convertToParamMap } from '@angular/router'; // Import ActivatedRoute and convertToParamMap
import { MensComponent } from './mens.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../Header/Header.component';
import { RouterTestingModule } from '@angular/router/testing';


describe('MensComponent', () => {
  let component: MensComponent;
  let fixture: ComponentFixture<MensComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [ MensComponent, HeaderComponent, FooterComponent ],
      imports: [HttpClientModule, RouterTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
