
export type Type = 'Service' | 'Component' | 'Library' ;
export type Status = 'inProgress' | 'completed' | 'error' ;

export type Service = {
  id: number;
  name:string;
  url:string | undefined;
  type?: Type;
  initialVersion?:string;
  currentVersion?:string;
  color:string;
  status:Status
 };

 function selectColor(number:any) {
    const hue = number * 137.508; // use golden angle approximation
    return `hsl(${hue},50%,75%)`;
  }


// export const services: Service[] = [{
//   id: 01,
//   name:'WeatherForecast',
//   url:'WeatherForecast',
//   type: 'Service',
//   color:selectColor(Math.floor(Math.random() * 999)),
//   status:'inProgress'
// },
// {
//     id: 02,
//     name:'WeatherForecast',
//     url:'WeatherForecast',
//     type: 'Service',
//     color:selectColor(Math.floor(Math.random() * 999)),
//     status:'inProgress'
// },
// ];
// {
//     id: '03',
//     name:'WeatherForecast',
//     url:'WeatherForecast',
//     type: 'Service',
//     color:selectColor(Math.floor(Math.random() * 999)),
//     status:'inProgress'
// },
// {
//     id: '04',
//     name:'WeatherForecast',
//     url:'WeatherForecast',
//     type: 'Service',
//     color:selectColor(Math.floor(Math.random() * 999)),
//     status:'inProgress'
// },
// {
//     id: '05',
//     name:'WeatherForecast',
//     url:'WeatherForecast',
//     type: 'Service',
//     color:selectColor(Math.floor(Math.random() * 999)),
//     status:'inProgress'
// },
// {
//     id: '06',
//     name:'WeatherForecast',
//     url:'WeatherForecast',
//     type: 'Service',
//     color:selectColor(Math.floor(Math.random() * 999)),
//     status:'inProgress'
// },
// {
//     id: '07',
//     name:'WeatherForecast',
//     url:'WeatherForecast',
//     type: 'Service',
//     color:selectColor(Math.floor(Math.random() * 999)),
//     status:'inProgress'
// },
// {
//     id: '08',
//     name:'WeatherForecast',
//     url:'WeatherForecast',
//     type: 'Service',
//     color:selectColor(Math.floor(Math.random() * 999)),
//     status:'inProgress'
// },
// {
//     id: '09',
//     name:'WeatherForecast',
//     url:'WeatherForecast',
//     type: 'Service',
//     color:selectColor(Math.floor(Math.random() * 999)),
//     status:'inProgress'
// },
// {
//     id: '010',
//     name:'WeatherForecast',
//     url:'WeatherForecast',
//     type: 'Service',
//     color:selectColor(Math.floor(Math.random() * 999)),
//     status:'inProgress'
// },
// {
//     id: '11',
//     name:'WeatherForecast',
//     url:'WeatherForecast',
//     type: 'Service',
//     color:selectColor(Math.floor(Math.random() * 999)),
//     status:'inProgress'
// },

// ]