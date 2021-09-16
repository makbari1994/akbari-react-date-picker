import React, { useEffect, useRef, useState } from 'react'

import { AkbariDatePicker } from 'akbari-react-date-picker'
import 'akbari-react-date-picker/dist/index.css'


// class App extends React.Component {

//   constructor() {
//     super();
//     this.state = {
//       current_date: '1399/10/5',
//       min_date: '1300/5/5',
//       max_date: '1403/8/4',
//       input_type: 'jalali'
//     }
//     this.ref = React.createRef();
//   }

//   componentDidMount() {

//     setTimeout(() => {

//       this.setState({
//         current_date: '2020/8/5',
//         min_date: '2010/5/9',
//         max_date: '2040/10/5',
//         input_type: 'gregorian'
//       });

//       this.ref.current.change_date();
//       this.ref.current.clear_value();

//     }, 3000);



//   }






//   on_change_date(date) {
//     alert(date);
//   }

//   render() {

//     return (
//       <>
//         <div className="input">
//           <AkbariDatePicker input_type={this.state.input_type} current_date={this.state.current_date}
//             on_change_date={this.on_change_date.bind(this)}
//             min_date={this.state.min_date}
//             max_date={this.state.max_date}
//             ref={this.ref} width="300px" />
//         </div>
//         <div className="foo"></div>
//       </>
//     )
//   }
// }




const App = () => {

  const ref = useRef(null);
  const ref2 = useRef(null);

  const [current_date, set_current_date] = useState('2021/1/3');
  const [min_date, set_min_date] = useState('2000/5/5')
  const [max_date, set_max_date] = useState('2200/8/4');
  const [input_type, set_input_type] = useState('jalali')


  const [current_date2, set_current_date2] = useState('2020/10/5')
  const [min_date2, set_min_date2] = useState('2010/5/5')
  const [max_date2, set_max_date2] = useState('2040/8/4');
  const [input_type2, set_input_type2] = useState('gre')

  useEffect(() => {


    setTimeout(() => {

      set_current_date('2020/4/8')
      set_min_date('2000/8/10')
      set_max_date('2040/12/10')
      set_input_type('gregorian')

     ref.current.change_date();

      set_current_date2('1399/4/8')
      set_min_date2('1350/8/10')
      set_max_date2('1450/12/10')
      set_input_type2('jalali')

     ref2.current.change_date();



      setTimeout(() => {
        ref.current.clear_value();
      }, 1000);


    }, 3000);

  }, [])


  const on_change_date = (date) => {

  }


  return (
    <div className="items">

      <div className="item">
        <AkbariDatePicker
          theme='light'
          input_type={input_type}
          current_date={current_date}
          on_change_date={(date) => on_change_date(date)}
          min_date={min_date}
          max_date={max_date}
          ref={ref}
          width="200px" />

      </div>
      <div className="item">
        <AkbariDatePicker
          theme='blue'

          style={{ zIndex: 100000 }}
          // input_type={input_type}
          // current_date={current_date}
          on_change_date={(date) => on_change_date(date)}
          // min_date={min_date}
          // max_date={max_date}
          // ref={ref}
          width="200px" />

      </div>

      <div className="item">
        <AkbariDatePicker
          theme='yellow'
          style={{ zIndex: 999 }}
          // input_type={input_type}
          // current_date={current_date}
          on_change_date={(date) => on_change_date(date)}
          // min_date={min_date}
          // max_date={max_date}
          // ref={ref}
          width="200px" />
      </div>


      <div className="item">
        <AkbariDatePicker
          theme='red'
          style={{ zIndex: 999 }}
          // input_type={input_type}
          // current_date={current_date}
          on_change_date={(date) => on_change_date(date)}
          // min_date={min_date}
          // max_date={max_date}
          // ref={ref}
          width="200px" />
      </div>


      <div className="item">
        <AkbariDatePicker
          theme='navy_blue'
          input_type={input_type2}
          current_date={current_date2}
          on_change_date={(date) => on_change_date(date)}
          min_date={min_date2}
          max_date={max_date2}
          ref={ref2}
          width="200px" />
      </div>




      {/* <div className="foo"></div> */}
    </div>
  )
}

export default App
