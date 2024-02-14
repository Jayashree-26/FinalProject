import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { of } from 'rxjs'; // Import of from rxjs
import { GoldbanglesComponent } from './goldbangles.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../Header/Header.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('GoldbanglesComponent', () => {
  let component: GoldbanglesComponent;
  let fixture: ComponentFixture<GoldbanglesComponent>;



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoldbanglesComponent, HeaderComponent, FooterComponent],
      imports: [HttpClientModule, RouterTestingModule],

    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldbanglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
