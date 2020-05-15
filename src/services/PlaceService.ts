import {DAYS_OF_WEEK} from '@shared/constants';
import {Day, APIDay} from '@interfaces';

export function transformResponse(place: any) {
  const transformedPlace = {
    openingHours: transformOpeningHours(place.opening_hours),
    name: place.displayed_what,
    address: place.displayed_where,
  };
  return transformedPlace;
}

export function transformOpeningHours(place: any) {
  const transformedDays: Day[] = [];
  const apiDays: any = place.days;
  let isPreviousWeekDayInserted: any = null;
  DAYS_OF_WEEK.forEach((dayName: string, index: number) => {
    const isDayExistsInAPI = apiDays[dayName];
    if (isDayExistsInAPI) {
      let formatedDay;
      // if we dont have previous day inserted, just push it to transformedDays without checks
      if (!isPreviousWeekDayInserted) {
        formatedDay = formatDay(apiDays[dayName], dayName);
        transformedDays.push(formatedDay);
        isPreviousWeekDayInserted = formatedDay;
        return;
      }
      formatedDay = formatDay(apiDays[dayName], dayName);
      if (previousDayIsNotSame(transformedDays[transformedDays.length - 1], formatedDay)) {
        transformedDays.push(formatedDay);
        isPreviousWeekDayInserted = formatedDay;
        return;
      } else {
        const editedDay: any = transformedDays.pop();
        editedDay.end = dayName;
        transformedDays.push(editedDay);
      }
    } else {
      transformedDays.push({
        start: dayName,
        hours: []
      });
      isPreviousWeekDayInserted = null;
    }
  });
  return transformedDays;
}

export function previousDayIsNotSame(formatedDay: Day, nextFormatedDay: Day) {
  return formatedDay.hours !== nextFormatedDay.hours;
}

export function formatDay(periods: any, dayOfWeek: string) {
  return {
    start: dayOfWeek,
    hours: periods
      .map((timePeriod: APIDay) => { return `${timePeriod.start} - ${timePeriod.end}`; })
      .join(','),
  };
}
