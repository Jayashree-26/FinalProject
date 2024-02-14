import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { of } from 'rxjs'; // Import 'of' from rxjs
import { DiamondRingComponent } from './diamond-ring.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../Header/Header.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('DiamondRingComponent', () => {
  let component: DiamondRingComponent;
  let fixture: ComponentFixture<DiamondRingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiamondRingComponent,HeaderComponent, FooterComponent],
      imports: [HttpClientModule, RouterTestingModule], // Import HttpClientModule here

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiamondRingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
