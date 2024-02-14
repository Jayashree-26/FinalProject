import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../Header/Header.component';
import { DiamondBanglesComponent } from './diamond-bangles.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('DiamondBanglesComponent', () => {
  let component: DiamondBanglesComponent;
  let fixture: ComponentFixture<DiamondBanglesComponent>;



  beforeEach(async() => {
    const mockActivatedRoute = {
      paramMap: of(convertToParamMap({ id: 'mock-id' }))
    };
    await TestBed.configureTestingModule({
      declarations: [DiamondBanglesComponent, HeaderComponent, FooterComponent],
      imports: [HttpClientModule, RouterTestingModule],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiamondBanglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
