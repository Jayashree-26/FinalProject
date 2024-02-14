import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { of } from 'rxjs'; // Import 'of' from rxjs
import { FooterComponent } from '../footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../Header/Header.component';
import { DiamondChainComponent } from './diamond-chain.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('DiamondChainComponent', () => {
  let component: DiamondChainComponent;
  let fixture: ComponentFixture<DiamondChainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiamondChainComponent, FooterComponent, HeaderComponent],
      imports: [HttpClientModule, RouterTestingModule],

    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiamondChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
