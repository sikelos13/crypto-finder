import format from 'date-fns/format';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import distance from 'date-fns/formatDistanceToNow';

const DAYS_FOR_IN_WORDS_FORMAT = 7;

const short = (source: Date | number) => {
    return format(source, 'MMM d, yyyy');
};

const inWords = (source: Date | number) => {
    return distance(source, { addSuffix: true });
};

export const normalize = (source_date: Date | string | number, end_date?: Date) => {
    source_date = new Date(source_date);

    if(end_date === undefined) {
        end_date = new Date();
    }

    const days = differenceInCalendarDays(end_date, source_date);

    if (Math.abs(days) <= DAYS_FOR_IN_WORDS_FORMAT) {
        return inWords(source_date);
    } else {
        return short(source_date);
    }
};

export const DateFormat = {
    normalize: normalize
}