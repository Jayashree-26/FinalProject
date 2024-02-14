import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SaveSchemeComponent } from './save-scheme.component';
import { HeaderComponent } from '../Header/Header.component';
import { FooterComponent } from '../footer/footer.component';

describe('SaveSchemeComponent', () => {
  let component: SaveSchemeComponent;
  let fixture: ComponentFixture<SaveSchemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveSchemeComponent, HeaderComponent, FooterComponent],
      imports: [ FormsModule, HttpClientTestingModule ], // Add FormsModule here
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
