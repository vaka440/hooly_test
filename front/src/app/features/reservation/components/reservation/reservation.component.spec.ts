import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ChangeDetectorRef, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Observable, of } from 'rxjs';
import { findComponent } from 'src/app/spec-helpers/element.spec-helper';
import { reservations, society1 } from 'src/app/spec-helpers/spec-helpers';
import { ReservationDto } from '../../models/reservation-dto';
import { SocietyDto } from '../../models/society-dto';
import { HttpService } from '../../services/http.service';
import { ReservationStoreService } from '../../services/reservation-store.service';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';
import { SelectDateComponent } from '../select-date/select-date.component';
import { SelectLocationComponent } from '../select-location/select-location.component';
import { SelectSocietyComponent } from '../select-society/select-society.component';
import { SelectUserComponent } from '../select-user/select-user.component';

import { ReservationComponent } from './reservation.component';

describe('ReservationComponent', () => {
  let component: ReservationComponent;
  let fixture: ComponentFixture<ReservationComponent>;

  // les composants du fichier .html (3)
  let selectSocietyComponent: DebugElement;
  let selectUserComponent: DebugElement;
  let selectDateComponent: DebugElement;
  let selectLocationComponent: DebugElement;
  let reservationListComponent: DebugElement;

  let fakeReservationStoreService: jasmine.SpyObj<ReservationStoreService>;
  let fakeHttpService: jasmine.SpyObj<HttpService>;

  beforeEach(async () => {

    fakeReservationStoreService = jasmine.createSpyObj<ReservationStoreService>('ReservationStoreService', ['getReservationsObs', 'getLoading']);
    fakeReservationStoreService.getReservationsObs.and.returnValue(of(reservations));
    fakeReservationStoreService.getLoading.and.returnValue(of(false));


    await TestBed.configureTestingModule({
      imports: [HttpClientModule, ReactiveFormsModule, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, NoopAnimationsModule,
         MatIconModule, MatCardModule, MatDatepickerModule, MatNativeDateModule, ],
      declarations: [ ReservationComponent, ReservationListComponent, SelectSocietyComponent, SelectUserComponent, SelectDateComponent, SelectLocationComponent, ],
      providers: [
        //{ provide: HttpService, useValue: fakeHttpService },
        { provide: ReservationStoreService, useValue: fakeReservationStoreService },

      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    selectSocietyComponent = findComponent(fixture, 'app-select-society');
    selectUserComponent = findComponent(fixture, 'app-select-user');
    selectDateComponent = findComponent(fixture, 'app-select-date');
    selectLocationComponent = findComponent(fixture, 'app-select-location');
    reservationListComponent = findComponent(fixture, 'app-reservation-list');
  });

  it('should create', () => {

    expect(component).toBeTruthy()
    expect(selectUserComponent).toBeTruthy();
    expect(selectSocietyComponent).toBeTruthy();
    expect(reservationListComponent).toBeTruthy();
    expect(selectDateComponent).toBeTruthy();
    expect(selectLocationComponent).toBeTruthy();

    const fakeFormSociety = { societyId: 1};
    const fakeData = [fakeFormSociety, reservations];
    let componentDate = selectDateComponent.componentInstance;
    component.reservationForm.controls['society'].setValue(fakeFormSociety);
    fixture.detectChanges();
    expect(componentDate.data).toEqual(fakeData);
  });

  it('dateComponent:data combine for dateComponent', () => {

    const fakeFormSociety = { societyId: 1};
    const fakeData = [fakeFormSociety, reservations];
    let componentDate = selectDateComponent.componentInstance;
    component.reservationForm.controls['society'].setValue(fakeFormSociety);
    fixture.detectChanges();
    expect(componentDate.data).toEqual(fakeData);
  });
});
