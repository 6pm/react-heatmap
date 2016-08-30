# React github-like heatmap component

> Easily create diagram. Data in diagran can dynamically changed and updated.

### Demo

![alt text](https://raw.githubusercontent.com/6pm/react-heatmap/master/heatmap-demo.gif)




### Dependencies

* ES6
* moment.js
* eventemitter3
 


### Installation & Usage

Run demo:


```bash
# 1. clone in to 'folder'
# 2. cd react-heatmap
# 3. Install dependencies
npm i
bower i
# 4. Run local webserver
npm start
```
And run in  in browser: [localhost:3000/](localhost:3000/)

### Initialize
```javascript
import { Heatmap, HeatmapEmitter } from './components/react-github-heatmap/react-github-heatmap'

<Heatmap
    start={'01-02-2016'} 
    end={'21-03-2018'}
    showDays={true}
    gorizontalView={true}
    size={20}
    margin={1}
    data={dataObject}
    legendSettings={ArraySettins}
/>
```

## Options

<dl>
  <dt>start(String)</dt>
  <dd>Start date, since even as diagram will be render. Must be in format 'D-M-YYYY'. For manipulation with dates are using [moment.js](http://momentjs.com)</dd>

  <dt>end(String)</dt>
  <dd>End date, for diagram. Must be in format 'D-M-YYYY'.</dd>
  
  <dt>showDays(Boolean)</dt>
  <dd>Display number of days in calendar. Default value - false</dd>
  
  <dt>gorizontalView(Boolean)</dt>
  <dd>Set gorizontal(from left to right) or vertical(from top to bottom) view for diagram. Default value - true</dd>
    
  <dt>margin(Number)</dt>
  <dd>Set margin for day item in 'px'. Default value - 1</dd>

  <dt>data(Object)</dt>
  <dd>Data for render in diagram. Must be in format:</dd>  
  
</dl>

```javascript
let data = {
     2016: { // year
         2: { // month
             1: 120, // day: count of items
             // .... days
             30: 111 // day: count of items
         },

         3: { // month
              1: 120, // day: count of items
              // .... days
              30: 111 // day: count of items
          },
     }
}
```
### Change legend colors and values

<dl>
    <dt>legendSettings(Array)</dt>
    <dd>Settings for legend must be in this format:</dd>  
</dl>


```javascript
let ArrSettings = [
                     {
                        color: '#dee086', // color 
                        min: 0, // value from
                        max: 10 // value to
                    },
                    // ... 
                    {
                        color: '#37621e',
                        min: 75,
                        max: 100
                    }
                ]
```


### How to add data afrer coponent rendered?

You can push new data into component:
```javascript
HeatmapEmitter.emit('changeMainData', newDataObject);
```

### Feedback
If you have any questions or suggestions - create a new issue.

