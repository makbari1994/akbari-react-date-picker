# akbari-react-date-picker

> react datepicker support persian jalali datepicker and  Gregorian datepicker


Added new Themes in new version ...

this is a fantastic datepicker with support persian jalali and en Gregorian  for react .
support responsive pretty mode. clear value with icon
in new version .
new version  is comming soon ....

## Demo 

 desktop mode
 
![demo](https://kapp.akbar-baba.ir/desktop-react.png)



responsive mode 

![demo](https://kapp.akbar-baba.ir/mobile.png)


## Install

## Step-One

run 

``` bash
npm install --save akbari-react-date-picker
```

 

## Step-two

import these lines in **App.js** . **App.js** is in **Src/App.js**   &nbsp; of react project .

``` 
import { AkbariDatePicker } from 'akbari-react-date-picker'
import 'akbari-react-date-picker/dist/index.css'

```

dont forget top lines specially css file 

## props

prop | type | default 
--- | --- | --- |
input_type | string | jalali
current_date | string | system current date to persian 
min_date | string |  30 years old 
max_date | string |  30 years later 
on_change_date | function |  null
theme | string |  light (blue, red, yellow, navy_blue)

## function 

change_date() 

see example of change_date() in bottom of page 


## Step-three

simple example of use 

``` 
         <AkbariDatePicker 
             input_type={'jalali'} 
             on_change_date={(date) => on_change_date(date)} 
             current_date={'1399/8/7'}
             min_date={'1300/8/5'}
             max_date={'1400/5/9'} 
             ref={ref}
             width="300px"
             theme='blue'
         />

```

## full example of code in function component 

``` 
import React, {useEffect, useRef, useState } from 'react'

import { AkbariDatePicker } from 'akbari-react-date-picker'
import 'akbari-react-date-picker/dist/index.css'

const App = () => {

  const ref = useRef(null);

  const [current_date, set_current_date] = useState('1399/10/5')
  const [min_date, set_min_date] = useState('1300/5/5')
  const [max_date, set_max_date] = useState('1403/8/4');
  const [input_type, set_input_type] = useState('jalali')

  useEffect(() => {
  }, [])


  const on_change_date = (date) => {
    alert(date);
  }


  return (
    <>
      <div className="input">
        <AkbariDatePicker
          input_type={input_type}
          current_date={current_date}
          on_change_date={(date) => on_change_date(date)}
          min_date={min_date}
          max_date={max_date}
          ref={ref}
          width="300px"
          theme='blue'
           />
      </div>
    </>
  )
}

export default App

```

## full example of code in React class component 

```
import React, { useEffect, useRef, useState } from 'react'

import { AkbariDatePicker } from 'akbari-react-date-picker'
import 'akbari-react-date-picker/dist/index.css'


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      current_date: '1399/10/5',
      min_date: '1300/5/5',
      max_date: '1403/8/4',
      input_type: 'jalali'
    }
    this.ref = React.createRef();
  }

  componentDidMount() {

  }

  on_change_date(date) {
    alert(date);
  }

  render() {

    return (
      <>
        <div className="input">
          <AkbariDatePicker input_type={this.state.input_type} current_date={this.state.current_date}
            on_change_date={this.on_change_date.bind(this)}
            min_date={this.state.min_date}
            max_date={this.state.max_date}
            ref={this.ref} width="300px" 
            theme='red'
            />
        </div>
        <div className="foo"></div>
      </>
    )
  }
}


export default App


```



#### if you want persian or jalali date you have to enter all prop dates in persian format for example 1399/4/8

#### if you want Gregorian or en date you have to enter all prop dates in Gregorian format for example 2020/4/8

## props 

#### input_type =>  type ="string" => select what format of date picker you want persian jalali or en Gregorian

for persian 

``` 
   <AkbariDatePicker  input_type={'jalali'}  />

```

for en Gregorian 

``` 
   <AkbariDatePicker  input_type={'gregorian'}  />

```

#### current_date =>  type ="string" => this is default  date 

you can pass type string; 

example  of persian date

``` 
   <AkbariDatePicker input_type={'jalali'} current_date={'1399/5/7'}  />

```

example  of en or Gregorian  date

``` 
<AkbariDatePicker input_type={'gregorian'} current_date={'2020/5/7'}  />

```

#### min_date =>  type ="string" => this is min date 

you can pass type string; 

example  of persian date

``` 
    <AkbariDatePicker input_type={'jalali'} min_date={'1300/10/4'}  />

```

example  of en or Gregorian  date

``` 
<AkbariDatePicker  input_type={'gregorian'}  min_date={'2010/10/7'}  />
```

#### max_date =>  type ="string" => this is max date 

you can pass type string; 

example  of persian date

``` 
  
    <AkbariDatePicker input_type={'jalali'} max_date={'1400/10/4'}  />

```

example  of en or Gregorian  date

``` 
     <AkbariDatePicker  input_type={'gregorian'}    max_date={'2030/10/7'}  />
```

#### width =>  type ="string" => width of where selected date text placed.

you can pass type string; 

example 

``` 
    <AkbariDatePicker  width="300px"  />

``` 

#### theme =>  type ="string" => themes => 'blue', 'red', 'yellow', 'navy_blue'

you can pass type string; 

example  

``` 
     /// light
     <AkbariDatePicker theme='light' />

      /// blue
     <AkbariDatePicker theme='blue' />

       /// red
     <AkbariDatePicker theme='red' />

      /// yellow
     <AkbariDatePicker theme='yellow' />
 
     ///navy_blue
     <AkbariDatePicker theme='navy_blue' />

``` 


## function props 

#### on_change_date => when user select date this prop calls.

example in function component 

``` 
  const  on_change_date = (date) => {
      alert(date);
    }

   return(
      <AkbariDatePicker on_change_date={(date) => on_change_date(date)} />
   )
```

example in function component 


example in class component 

```

 on_change_date(date) {
    alert(date);
  }

 <AkbariDatePicker   on_change_date={this.on_change_date.bind(this)}  />

``` 



#### clear_value => clear selected date;

## first you have to  ref to component . 

example of function component 

``` 
        const ref =  useRef(null);

         useEffect(() => {
          /// clear 
            ref.current.clear_value();
        }, [])

       return(
          <AkbariDatePicker ref={ref} />
         )

```

example of class component 

``` 
   constructor(){
     this.ref = React.createRef();
    }
    componentDidMount(){
       /// clear 
        this.ref.current.clear_value();
    }
      
      render(){
        return(
           <AkbariDatePicker ref={this.ref} />
        )
      }

```




#### change_date => you can change date programmatically after click some buttons or ... 

## first you have to  ref to component . 

example of function component 

``` 
        const ref =  useRef(null);

        return(
          <AkbariDatePicker ref={ref} />
         )

```

example of class component 

``` 
   constructor(){
     this.ref =  React.createRef();
    }
      
      render(){
        return(
           <AkbariDatePicker ref={this.ref} />
        )
      }

```

## then you have to change date props  for example 

in function component 

``` 
    const [current_date, set_current_date] = useState('1399/10/5')
    const [min_date, set_min_date] = useState('1300/5/5')
    const [max_date, set_max_date] = useState('1403/8/4')
    const [input_type, set_input_type] = useState('jalali')
    
    const ref =  useRef(null);

   useEffect(() => {

    setTimeout(() => {

       set_current_date('1400/4/8')
       set_min_date('1299/8/10')
       set_max_date('1410/12/10')
       set_input_type('gregorian')


       /// then call change_date from ref
       ref.current.change_date();
    }, 3000); 

      return (
        <>
        <div className="input">
          <AkbariDatePicker 
            input_type={input_type}
            ref={ref} 
            current_date={current_date} 
            min_date={min_date} 
            max_date={max_date}  
             />
         </div>
        </>
  )

```

in class component 

```

 constructor() {
    super();
    this.state = {
      current_date: '1399/10/5',
      min_date: '1300/5/5',
      max_date: '1403/8/4',
      input_type: 'jalali'
    }
    this.ref = React.createRef();
  }

  componentDidMount() {

    setTimeout(() => {

      this.setState({
        current_date: '2020/8/5',
        min_date: '2010/5/9',
        max_date: '2040/10/5',
        input_type: 'gregorian'
      });


   /// then call change_date from ref
      this.ref.current.change_date();

    }, 3000);



  }

  render() {

    return (
      <>
        <div className="input">
          <AkbariDatePicker 
            input_type={this.state.input_type} 
            current_date={this.state.current_date}
             min_date={this.state.min_date}
             max_date={this.state.max_date}
             ref={this.ref} 
            />
        </div>
      </>
    )
  }


```


### then call change date from ref = change_date()

in function component 

```

   
   const ref =  React.createRef();
    
    const [current_date, set_current_date] = useState('1399/10/5')
    const [min_date, set_min_date] = useState('1300/5/5')
    const [max_date, set_max_date] = useState('1403/8/4')
    const [input_type, set_input_type] = useState('jalali')

   useEffect(() => {


    setTimeout(() => {

       set_current_date('1400/4/8')
       set_min_date('1299/8/10')
       set_max_date('1410/12/10')
       set_input_type('gregorian')
      
       ref.current.change_date();   ///  call change_date from ref


      
    }, 3000);

   }, [])


  return (
    <>
      <div className="input">
        <AkbariDatePicker 
            input_type={input_type}
            ref={ref}
            current_date={current_date} 
            min_date={min_date}
            max_date={max_date}
          />
      </div>
    </>
  )

```


in class component 

```

 constructor() {
    super();
    this.state = {
      current_date: '1399/10/5',
      min_date: '1300/5/5',
      max_date: '1403/8/4',
      input_type: 'jalali'
    }
    this.ref = React.createRef();
  }

  componentDidMount() {

    setTimeout(() => {

      this.setState({
        current_date: '2020/8/5',
        min_date: '2010/5/9',
        max_date: '2040/10/5',
        input_type: 'gregorian'
      });


   /// then call change_date from ref
      this.ref.current.change_date();

    }, 3000);



  }

  render() {

    return (
      <>
        <div className="input">
          <AkbariDatePicker 
            input_type={this.state.input_type} 
            current_date={this.state.current_date}
             min_date={this.state.min_date}
             max_date={this.state.max_date}
             ref={this.ref} 
            />
        </div>
      </>
    )
  }


```

### hope to enjoy it

### reprot bugs to makbarics@gmail.com




