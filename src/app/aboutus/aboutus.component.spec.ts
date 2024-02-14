import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { HeaderComponent } from '../Header/Header.component';
import { AboutusComponent } from './aboutus.component';
import { FooterComponent } from '../footer/footer.component';
describe('AboutusComponent', () => {
  let component: AboutusComponent;
  let fixture: ComponentFixture<AboutusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutusComponent, HeaderComponent,FooterComponent],
      imports: [HttpClientModule], // Import HttpClientModule here
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
