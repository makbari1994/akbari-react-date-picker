import React from 'react'
import styles from './styles.module.css';
import { set_days, set_years, set_months, get_day_names } from './date_service';
import moment from 'jalali-moment';


export class AkbariDatePicker extends React.Component {

  constructor() {
    super();
    this.state = {
      show_date_picker: false,
      days: [],
      months: [],
      years: [],
      current_date: '',
      current_day: '',
      current_month: '',
      currnt_year: '',
      selected_date: '',
      date_changed: false,
      show_backdrop: false,
      day_names: [],
      theme: styles.light,
      current: ''
    }

    this.parent_ref = React.createRef();
    this.picker_ref = React.createRef();

  }

  componentDidMount() {
    this.start();
    this.set_theme();
  }




  change_size() {
    window.addEventListener('resize', () => {
      this.setState({ show_date_picker: false, show_backdrop: false })
    })
  }

  set_theme() {
    if (this.props.theme == 'light') {
      this.setState({ theme: styles.theme })
    }
    if (this.props.theme == 'blue') {
      this.setState({ theme: styles.blue })
    }
    if (this.props.theme == 'yellow') {
      this.setState({ theme: styles.yellow })
    }
    if (this.props.theme == 'red') {
      this.setState({ theme: styles.red })
    }
    if (this.props.theme == 'navy_blue') {
      this.setState({ theme: styles.navy_blue })
    }
  }

  start() {
    this.setState({current: this.props.current_date, current_date: this.props.current_date, selected_date: this.props.current_date }, () => {
      this.set_currents();
      this.set_years_months_days();
    });
    this.hide_date_picker();
  }

  set_currents() {
    var day = moment(this.state.current_date, this.props.default_format).format('DD')
    var month = moment(this.state.current_date, this.props.default_format).format('MM')
    var year = moment(this.state.current_date, this.props.default_format).format('YYYY')

    this.setState({
      current_day: day,
      current_month: Number(month),
      currnt_year: year
    })
  }
  //// function props
  change_date() {
    this.start();
  }

  clear_value() {
    this.setState({ date_changed: false, selected_date: '', current: '' });
    this.props.on_change_date('');
  }



  //// function props

  set_years_months_days() {
    this.setState({
      days: set_days(this.state.current_date, this.props.input_type, this.props.min_date, this.props.max_date, this.props.default_format),
      years: set_years(this.props.current_date, this.props.min_date, this.props.max_date, this.props.default_format),
      months: set_months(this.state.current_date, this.props.input_type, this.props.min_date, this.props.max_date, this.props.default_format),
      day_names: get_day_names(this.props.input_type)
    })
  }

  change_year(e) {

    var value = e.target.value;
    var new_date = moment(this.state.current_date, this.props.default_format).set('year', value).format(this.props.default_format);
    this.setState({ current_date: new_date }, () => {

      var min_month = moment(this.props.min_date, this.props.default_format).format('MM');
      var min_year = moment(this.props.min_date, this.props.default_format).format('YYYY');
      var max_month = moment(this.props.max_date, this.props.default_format).format('MM');
      var max_year = moment(this.props.max_date, this.props.default_format).format('YYYY');
      var month = moment(this.state.current_date, this.props.default_format).format('MM');
      var year = moment(this.state.current_date, this.props.default_format).format('YYYY');

      //    console.log(Number(month) + ' ' + Number(min_month) + ' ' + Number(year) + ' ' + Number(min_year))

      if (Number(month) < Number(min_month) && Number(year) == Number(min_year)) {
        var set_date = moment(this.state.current_date, this.props.default_format).set('month', Number(min_month) - 1).format(this.props.default_format);
        this.setState({ current_date: set_date }, () => {
          this.set_years_months_days();
          this.set_currents();
        })
      }
      else if (Number(month) > Number(max_month) && Number(year) == Number(max_year)) {
        var set_date = moment(this.state.current_date, this.props.default_format).set('month', Number(max_month) - 1).format(this.props.default_format);
        this.setState({ current_date: set_date }, () => {
          this.set_years_months_days();
          this.set_currents();
        })
      }
      else {
        this.set_years_months_days();
        this.set_currents();
      }


    });
  }

  change_month(e) {
    var value = e.target.getElementsByTagName('option')[e.target.selectedIndex].getAttribute('data-index');
    var new_date = moment(this.state.current_date, this.props.default_format).set('month', value).format(this.props.default_format);
    this.setState({ current_date: new_date }, () => {
      this.set_years_months_days();
      this.set_currents();
    });
  }

  change_day(item) {

    if (item.active && !item.hidden) {

      var day = item.day;
      var new_date = moment(this.state.current_date, this.props.default_format).set('date', day).format(this.props.default_format);
      this.setState({ current_date: new_date, selected_date: new_date, date_changed: true, show_backdrop: false }, () => {
        this.set_years_months_days();
        this.set_currents();
      })
      this.setState({ show_date_picker: false })

      if (this.props.on_change_date) {
        this.props.on_change_date(new_date);
      }
    }

  }

  next_month() {

    var max_month = moment(this.props.max_date, this.props.default_format).format('MM');
    var max_year = moment(this.props.max_date, this.props.default_format).format('YYYY');

    var month = moment(this.state.current_date, this.props.default_format).format('MM');
    var year = moment(this.state.current_date, this.props.default_format).format('YYYY');

    if (Number(month) == Number(max_month) && Number(year) == Number(max_year)) {
    }
    else {
      var new_date = moment(this.state.current_date, this.props.default_format).add(1, 'months').format(this.props.default_format);
      this.setState({ current_date: new_date }, () => {
        this.set_years_months_days();
        this.set_currents();
      })
    }

  }

  prev_month() {
    var min_month = moment(this.props.min_date, this.props.default_format).format('MM');
    var min_year = moment(this.props.min_date, this.props.default_format).format('YYYY');

    var month = moment(this.state.current_date, this.props.default_format).format('MM');
    var year = moment(this.state.current_date, this.props.default_format).format('YYYY');

    // console.log(Number(month) + ' ' + Number(min_month) + ' ' + Number(year) + ' ' + Number(min_year))

    if (Number(month) == Number(min_month) && Number(year) == Number(min_year)) {
    }
    else {
      var new_date = moment(this.state.current_date, this.props.default_format).subtract(1, 'months').format(this.props.default_format);
      this.setState({ current_date: new_date }, () => {
        this.set_years_months_days();
        this.set_currents();
      })
    }


  }


  focus(e) {

    if (window.matchMedia('(min-width:773px)').matches) {

      var rect = this.parent_ref.current.getBoundingClientRect();
      var parentRect =  this.parent_ref.current.offsetParent;
      var left = Math.abs(rect.left);
      var right = Math.abs(parentRect.clientWidth - rect.left);
      if (right < 300) {
        this.picker_ref.current.style.left = 'auto';
        this.picker_ref.current.style.right = '0px';
      }
      else {
        this.picker_ref.current.style.left = '0px';
        this.picker_ref.current.style.right = 'auto';
      }
    }
    else{
      this.setState({ show_backdrop: true })
    }

    this.setState({ show_date_picker: true })
   
    this.set_z_index();


  }

  set_z_index() {

    var date_pickers = document.getElementsByClassName('akbari-date-picker');
    var count = date_pickers.length;
    var z = 0;
    for (var i = count; i > 0; i--) {
      z++;
      if (window.matchMedia('(max-width: 773px)').matches) {
        date_pickers[i - 1].style.zIndex = 100;
      }
      else {
        date_pickers[i - 1].style.zIndex = (z) + 100000;
      }
    }

    if (window.matchMedia('(max-width: 773px)').matches) {
      this.parent_ref.current.style.zIndex = 100000;
    }
    else {
    }

  }

  hide_date_picker() {

    var my_target = this.parent_ref.current;
    window.addEventListener('click', (e) => {
      if (!my_target.contains(e.target)) {
        if (this.state.show_date_picker || this.show_backdrop) {
          this.setState({ show_date_picker: false, show_backdrop: false })
        }
      }
      else {

      }
    })

  }

  find_active_day(item) {

    var selected_year = Number(moment((this.state.selected_date), (this.props.default_format)).format('YYYY'));
    var selected_month = Number(moment((this.state.selected_date), (this.props.default_format)).format('MM'));

    var current_month = moment(this.state.current_date, this.props.default_format).format('MM')
    var current_year = moment(this.state.current_date, this.props.default_format).format('YYYY')
    var current_day = moment(this.state.current_date, this.props.default_format).format('DD')


    if (Number(item.day) == Number(current_day) && selected_month == current_month && selected_year == current_year) {
      return styles.active_day;
    }
    return '';

  }

  generate_days(item, index) {


  }





  render() {
    return (
      <React.Fragment>

        <div className={styles.backdrop} style={{ display: this.state.show_backdrop ? 'block' : 'none' }} id="backdrop" ></div>

        <div className={styles.akbariDatePicker + ' akbari-date-picker ' + this.state.theme} ref={this.parent_ref} style={{ width: this.props.width }}  >

          <input type="text" className={styles.input} onClick={this.focus.bind(this)} readOnly value={this.state.selected_date ? this.state.selected_date : this.state.current} />
           
           <span onClick={this.clear_value.bind(this)} className={styles.clear}>×</span>

          <div className={styles.a_datepicker} ref={this.picker_ref}  id="a_date_picker" style={{ display: this.state.show_date_picker ? 'block' : 'none' }}  >

            <div className={styles.top}>
              <div className={styles.right} onClick={this.prev_month.bind(this)}  >
                <div>{this.props.input_type == 'jalali' ? 'قبلی' : 'prev'}</div>
              </div>
              <div className={styles.center}>
                <select
                  onChange={this.change_year.bind(this)}
                  value={this.state.currnt_year}
                >
                  {/* <option value="0">انتخاب سال</option> */}
                  {this.state.years.map((item, index) => {
                    return (
                      <option key={index} value={item}>{item}</option>
                    )
                  })}
                </select>
                <select
                  onChange={this.change_month.bind(this)}
                  value={this.state.current_month}
                >
                  {/* <option value="0">انتخاب ماه</option> */}
                  {this.state.months.filter(item => item.show == true).map((item, index) => {
                    return <option key={index} data-index={item.index - 1} value={item.index} >{item.name}</option>
                  })}
                </select>
              </div>
              <div className={styles.left} onClick={this.next_month.bind(this)}> <div>{this.props.input_type == 'jalali' ? 'بعدی' : 'next'}</div></div>
            </div>

            <div className={styles.days}  style={{direction: (this.props.input_type == 'jalali'? 'rtl': 'ltr')}}  >
              {this.state.day_names.map((item, index) => {
                if (this.props.input_type == 'jalali') {
                  return (<div key={index} className={styles.day_item}>{item.split('')[0]}</div>)
                }
                else {
                  return (<div key={index} className={styles.day_item}>{item.split('')[0] + item.split('')[1]}</div>)
                }
              })}

            </div>

            <div className={styles.items} style={{direction: this.props.input_type == 'jalali'? 'rtl': 'ltr'}}  >

              {this.state.days.map((item, index) => {
                return (
                  <div key={index} onClick={this.change_day.bind(this, item)}
                    className={styles.item + ' ' +
                      (this.find_active_day(item)) + ' ' +
                      (item.hidden ? styles.hidden : '') +
                      (item.active ? '' : styles.deactive)
                    }>{item.day}</div>
                )
              })}


            </div>

          </div>

        </div>

      </React.Fragment>
    )
  }

}


AkbariDatePicker.defaultProps = {
  current_date: moment(moment(new Date, 'YYYY/MM/DD').format('YYYY/M/DD'), 'YYYY/MM/DD').locale('fa').format('YYYY/M/D'),
  input_type: 'jalali', /// georgian,
  default_format: 'YYYY/MM/DD',
  theme: styles.light
}