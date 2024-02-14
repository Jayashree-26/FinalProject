import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ActivatedRoute, convertToParamMap } from '@angular/router'; // Import ActivatedRoute and convertToParamMap
import { of } from 'rxjs'; // Import of operator
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from '../api.service';
import { DiamondBraceletComponent } from './diamond-bracelet.component';
import { HeaderComponent } from '../Header/Header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('DiamondBraceletComponent', () => {
  let component: DiamondBraceletComponent;
  let fixture: ComponentFixture<DiamondBraceletComponent>;


  beforeEach(async() => {
    const mockActivatedRoute = {
      queryParams: of({ id: 'your-param-value' })
    };
    await TestBed.configureTestingModule({
      declarations: [ DiamondBraceletComponent, FooterComponent,HeaderComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ],
     
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiamondBraceletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
