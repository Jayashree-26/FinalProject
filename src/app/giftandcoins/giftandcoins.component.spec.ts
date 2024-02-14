import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import HttpClientTestingModule
import { GiftandcoinsComponent } from './giftandcoins.component';
import { ApiService } from '../api.service';
import { HeaderComponent } from '../Header/Header.component';
import { FooterComponent } from '../footer/footer.component';
describe('GiftandcoinsComponent', () => {
  let component: GiftandcoinsComponent;
  let fixture: ComponentFixture<GiftandcoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftandcoinsComponent, FooterComponent, HeaderComponent ], // Include HeaderComponent in declarations
      imports: [ HttpClientModule, HttpClientTestingModule ], // Include HttpClientModule and HttpClientTestingModule
      providers: [
        ApiService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftandcoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
