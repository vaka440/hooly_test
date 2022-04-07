import { DayDto } from "../features/reservation/models/day-dto";
import { LocationDto } from "../features/reservation/models/location-dto";
import { ReservationDto } from "../features/reservation/models/reservation-dto";
import { SocietyDto } from "../features/reservation/models/society-dto";
import { UserDto } from "../features/reservation/models/user-dto";

export const locations: number[] = [1,2,3,4,5,6,7];

export const reservations: ReservationDto[] = [
  {
    id: '1',
    day: {id: 1, dateReservation: '2022-04-21', dateBegin: '2022-04-18', dateEnd: '2022-04-24', weekNo: 16} as DayDto,
    location: {id: 1, locationNo: 1} as LocationDto,
    society: {id: 1, name: 'société 1'} as SocietyDto,
    user: {id: 1, username: 'foodtrack 1'} as UserDto
  }
];

export const society1: SocietyDto = {
  id: 1,
  name: 'société 1'
};
