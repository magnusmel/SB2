import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { PageHeaderModule } from './../../shared';

import { CampStatsComponent } from './campstats.component';

describe('CampStatsComponent', () => {
  let component: CampStatsComponent;
  let fixture: ComponentFixture<CampStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      Ng2Charts,
      PageHeaderModule
    ],
    declarations: [CampStatsComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
