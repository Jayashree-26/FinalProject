import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { of } from 'rxjs'; // Import of from rxjs
import { HeaderComponent } from '../Header/Header.component';
import { FooterComponent } from '../footer/footer.component';
import { GoldbraceletComponent } from './goldbracelet.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('GoldbraceletComponent', () => {
  let component: GoldbraceletComponent;
  let fixture: ComponentFixture<GoldbraceletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoldbraceletComponent, HeaderComponent, FooterComponent],
      imports: [HttpClientModule, RouterTestingModule],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldbraceletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
