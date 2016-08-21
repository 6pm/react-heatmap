import React from 'react'
import { render } from 'react-dom'

import { Heatmap, HeatmapEmitter } from './components/react-github-heatmap/react-github-heatmap'

// include bootstrap
require('./sass/_bootstrap.scss');


// ---------------------------------------------
// test data
let data = [
    {
        2016: {
            2: {
                1: 20,
                2: 2,
                3: 45,
                4: 120,
                5: 54,
                6: 76,
                7: 20,
                8: 2,
                9: 45,
                10: 120,
                11: 54,
                12: 76,
                13: 13
            },

            3: {
                1: 111,
                2: 222,
                3: 333,
                4: 44,
                11: 20,
                12: 2,
                13: 45,
                14: 120,
                15: 54,
                16: 76,
                17: 20,
                18: 2,
                19: 45,
                20: 120,
                21: 54,
                22: 76
            }
        }
    },
    {
        2016: {
            2: {
                1: 120,
                2: 45,
                3: 96,
                4: 10,
                5: 34,
                6: 90,
                7: 54,
                8: 26,
                9: 5,
                10: 10,
                11: 5,
                12: 26
            },

            3: {
                11: 40,
                12: 26,
                13: 90,
                14: 20,
                15: 60,
                16: 16,
                17: 65,
                18: 34,
                19: 90,
                20: 23,
                21: 12,
                22: 54
            }
        }
    },
    {
        2016: {
            2: {
                1: 94,
                2: 82,
                3: 34,
                4: 45,
                5: 192,
                6: 435,
                7: 90,
                8: 60,
                9: 40,
                10: 30,
                11: 60,
                12: 79
            },

            3: {
                11: 4,
                12: 56,
                13: 30,
                14: 65,
                15: 23,
                16: 69,
                17: 100,
                18: 80,
                19: 60,
                20: 45,
                21: 70,
                22: 90
            }
        }
    }
]

function randomInteger(min, max) {
    var rand = min + Math.random() * (max - min)
    rand = Math.round(rand);
    return rand;
}

setInterval(()=>{
    let random = randomInteger(0, 2);
    HeatmapEmitter.emit('changeMainData', data[random]);
}, 4000)
// end test data
// -----------------------------


// data format must be - 'D-M-YYYY'

render(
    <div>
        <Heatmap
            start={'01-02-2016'}
            end={'21-10-2016'}
            showDays={true}
            gorizontalView={false}
            size={20}
            margin={1}
            data={data[0]}
        />
    </div>,

  document.getElementById('root')
);
