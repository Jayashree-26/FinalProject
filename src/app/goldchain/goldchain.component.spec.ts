import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GoldchainComponent } from './goldchain.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../Header/Header.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('GoldchainComponent', () => {
  let component: GoldchainComponent;
  let fixture: ComponentFixture<GoldchainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldchainComponent, HeaderComponent, FooterComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
