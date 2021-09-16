import moment from "jalali-moment";

const default_format = 'YYYY/MM/DD';

export const fa_day_names = ['شنبه', 'یک‌شنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه']

export function date_detail(date, type = 'fa', format = default_format) {
    var new_date = moment(date, format).locale(type);
    var year = new_date.format('YYYY');
    var month = new_date.format('MM');
    var day = new_date.format('DD');
    return [year, month, day]
}

export function set_days(date, input_type, min_date, max_date, format = default_format) {

    if (input_type == 'jalali') {
        return fa_days(date, min_date, max_date, format);
    }
    else {

        return en_days(date, min_date, max_date, format);
    }
}

export function get_day_names(input_type) {
    var days = [];

    if (input_type == 'jalali') {
        days = ['شنبه', 'یک‌شنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه'];
    }
    else {
        //    days = ['Saturday','Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    }

    return days;

}

export function day_names(input_type) {
    var days = [];
    if (input_type == 'jalali') {
        days = ['یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنج شنبه', 'جمعه', 'شنبه']
    }
    else {
        days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    }

    return days;

}

function fa_days(date, min_date, max_date, format = default_format) {

    var day_name = moment(date, format).set('date', 1).locale('fa').format('dddd');
    var day_name_index = fa_day_names.findIndex(a => a.indexOf(day_name) > -1);



    var new_date = moment(date, format);
    var month = new_date.format('MM');

    var year = moment(date, format).format('YYYY');
    var min_year = moment(min_date, format).format('YYYY');
    var min_month = moment(min_date, format).format('MM');
    var max_month = moment(max_date, format).format('MM');
    var max_year = moment(max_date, format).format('YYYY');
    var min_day = moment(min_date, format).format('DD');
    var max_day = moment(max_date, format).format('DD');

    // console.log(year)
    // console.log(month)
    // console.log(min_month)
    // console.log(min_year)

    // console.log(Number(year) + '  '+  Number(min_year)  + '  '+  Number(month) + '  '+  Number(min_month))

    var days = [];
    var count = 30;
    if (month <= 6) {
        count = 31;
    }
    else {
        count = 30;
    }

    var _i = -1 * day_name_index;
    for (var i = _i; i < count; i++) {
        var data = {};
        data.day = i + 1;

        data.active = true;
        data.hidden = false;
        if (i < 0) {
            data.hidden = true;
        }
        if (i >= 0) {

            if (i + 1 < Number(min_day) && Number(year) == Number(min_year) && Number(month) == Number(min_month)) {
                data.active = false;
            }
            if (i + 1 > Number(max_day) && Number(year) == Number(max_year) && Number(month) == Number(max_month)) {
                data.active = false;
            }
        }
        days.push(data);
    }

    return days;
}

function en_days(date, min_date, max_date, format = default_format) {

    var day_name = moment(date, format).set('date', 1).format('dddd');
    var day_name_index = get_day_names('gero').findIndex(a => a.indexOf(day_name) > -1);

    var new_date = moment(date, format);
    var month = new_date.format('MM');

    var year = moment(date, format).format('YYYY');
    var min_year = moment(min_date, format).format('YYYY');
    var min_month = moment(min_date, format).format('MM');
    var max_month = moment(max_date, format).format('MM');
    var max_year = moment(max_date, format).format('YYYY');
    var min_day = moment(min_date, format).format('DD');
    var max_day = moment(max_date, format).format('DD');
    var month_name = moment(date, format).format('MMMM').toLowerCase();




    //    console.log(Number(year) + '  '+  Number(min_year)  + '  '+  Number(month) + '  '+  Number(min_month))

    var days = [];
    var count = 30;

    if (month_name == 'january' || month_name == 'march' || month_name == 'may' || month_name == 'july' || month_name == 'august' || month_name == 'october' || month_name == 'december') {
        count = 31;
    }

    if (month_name == 'april' || month_name == 'june' || month_name == 'september' || month_name == 'november') {
        count = 30;
    }

    if (month_name == 'february') {
        count = 29;
    }



    var _i = -1 * day_name_index;
    for (var i = _i; i < count; i++) {
        var data = {};
        data.day = i + 1;

        data.active = true;
        data.hidden = false;
        if (i < 0) {
            data.hidden = true;
        }
        if (i >= 0) {

            if (i + 1 < Number(min_day) && Number(year) == Number(min_year) && Number(month) == Number(min_month)) {
                data.active = false;
            }
            if (i + 1 > Number(max_day) && Number(year) == Number(max_year) && Number(month) == Number(max_month)) {
                data.active = false;
            }
        }
        days.push(data);
    }

    return days;

}






export function set_years(date, min_date, max_date, format = default_format) {
    var min_year;
    if (!min_date) {
        min_year = moment(date, format).subtract(30, 'years').format('YYYY');
    }
    else {
        min_year = moment(min_date, format).format('YYYY');
    }

    var max_year;

    if (!max_date) {
        max_year = moment(date, format).add(30, 'years').format('YYYY');
    }
    else {
        max_year = moment(max_date, format).format('YYYY');
    }

    min_year = Number(min_year)
    max_year = Number(max_year)

    var years = [];

    for (var i = min_year; i < max_year + 1; i++) {
        years.push(i)
    }

    return years;



}

export function set_months(date, input_type, min_date, max_date, format) {
    var months = [];
    if (input_type == 'jalali') {
        months = [
            {
                name: 'فروردین',
                show: true,
                index: 1
            },
            {
                name: 'اردیبهشت',
                show: true,
                index: 2

            },
            {
                name: 'خرداد',
                show: true,
                index: 3
            },
            {
                name: 'تیر',
                show: true,
                index: 4

            },
            {
                name: 'مرداد',
                show: true,
                index: 5

            },
            {
                name: 'شهریور',
                show: true,
                index: 6

            },
            {
                name: 'مهر',
                show: true,
                index: 7

            },
            {
                name: 'آبان',
                show: true,
                index: 8

            },
            {
                name: 'آذر',
                show: true,
                index: 9

            },
            {
                name: 'دی',
                show: true,
                index: 10

            },
            {
                name: 'بهمن',
                show: true,
                index: 11

            },
            {
                name: 'اسفند',
                show: true,
                index: 12

            },
        ];
    }
    else {
        months = [
            {
                name: 'January',
                show: true,
                index: 1

            },
            {
                name: 'February',
                show: true,
                index: 2

            },
            {
                name: 'March',
                show: true,
                index: 3

            },
            {
                name: 'April',
                show: true,
                index: 4

            },
            {
                name: 'May',
                show: true,
                index: 5

            },
            {
                name: 'June',
                show: true,
                index: 6

            },
            {
                name: 'July',
                show: true,
                index: 7

            },
            {
                name: 'August',
                show: true,
                index: 8

            },
            {
                name: 'September',
                show: true,
                index: 9

            },
            {
                name: 'October',
                show: true,
                index: 10

            },
            {
                name: 'November',
                show: true,
                index: 11

            },
            {
                name: 'December',
                show: true,
                index: 12

            },
        ];
    }



    var month = moment(date, format).format('MM');
    var year = moment(date, format).format('YYYY');
    var min_year = moment(min_date, format).format('YYYY');
    var max_year = moment(max_date, format).format('YYYY');
    var min_month = moment(min_date, format).format('M');
    var max_month = moment(max_date, format).format('MM');


    months.forEach((item, index) => {
        if ((index + 1) < min_month && year == min_year) {
            item.show = false;
        }
        else if ((index + 1) > max_month && year == max_year) {
            item.show = false;
        }
        else {
            item.show = true;
        }
    })

    return months;
}




