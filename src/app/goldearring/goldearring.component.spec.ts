import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { of } from 'rxjs'; // Import of from rxjs
import { GoldearringComponent } from './goldearring.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../Header/Header.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('GoldearringComponent', () => {
  let component: GoldearringComponent;
  let fixture: ComponentFixture<GoldearringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoldearringComponent,HeaderComponent, FooterComponent],
      imports: [HttpClientModule, RouterTestingModule],

    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldearringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
