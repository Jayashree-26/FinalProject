import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { of } from 'rxjs'; // Import of from rxjs
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../Header/Header.component';
import { DiamondEarringComponent } from './diamond-earring.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DiamondEarringComponent', () => {
  let component: DiamondEarringComponent;
  let fixture: ComponentFixture<DiamondEarringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiamondEarringComponent, HeaderComponent, FooterComponent ],
      imports: [HttpClientModule, RouterTestingModule, HttpClientTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiamondEarringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
