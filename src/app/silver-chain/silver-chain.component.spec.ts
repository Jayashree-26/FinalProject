import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { SilverChainComponent } from './silver-chain.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../Header/Header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SilverChainComponent', () => {
  let component: SilverChainComponent;
  let fixture: ComponentFixture<SilverChainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SilverChainComponent, HeaderComponent, FooterComponent],
      imports: [HttpClientModule, RouterTestingModule],

    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SilverChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
