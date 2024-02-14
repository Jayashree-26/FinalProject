import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import HttpClientTestingModule
import { HeaderComponent } from '../Header/Header.component';
import { SilverComponent } from './silver.component';
import { FooterComponent } from '../footer/footer.component';
import { ApiService } from '../api.service'; // Import ApiService

describe('SilverComponent', () => {
  let component: SilverComponent;
  let fixture: ComponentFixture<SilverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SilverComponent, HeaderComponent, FooterComponent],
      imports: [HttpClientTestingModule], // Add HttpClientTestingModule here
      providers: [ApiService], // Provide ApiService here
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SilverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
