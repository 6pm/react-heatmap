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
                13: 13,
                14: 34,
                15: 65,
                16: 2,
                17: 34,
                18: 88,
                19: 54,
                20: 43,
                21: 54,
                22: 6,
                23: 11,
                24: 23,
                25: 34,
                26: 45,
                27: 45,
                28: 54,
                29: 111
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
                12: 26,
                13: 13,
                14: 34,
                15: 65,
                16: 2,
                17: 34,
                18: 88,
                19: 54,
                20: 43,
                21: 54,
                22: 6,
                23: 11,
                24: 23,
                25: 34,
                26: 45,
                27: 45,
                28: 54,
                29: 111
            },

            3: {
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
                13: 13,
                14: 34,
                15: 65,
                16: 2,
                17: 34,
                18: 88,
                19: 54,
                20: 43,
                21: 54,
                22: 6,
                23: 11,
                24: 23,
                25: 34,
                26: 45,
                27: 45,
                28: 54,
                29: 111
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
                12: 26,
                13: 13,
                14: 34,
                15: 65,
                16: 2,
                17: 34,
                18: 88,
                19: 54,
                20: 43,
                21: 54,
                22: 6,
                23: 11,
                24: 23,
                25: 34,
                26: 45,
                27: 45,
                28: 54,
                29: 111
            },

            3: {
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
                13: 13,
                14: 34,
                15: 65,
                16: 2,
                17: 34,
                18: 88,
                19: 54,
                20: 43,
                21: 54,
                22: 6,
                23: 11,
                24: 23,
                25: 34,
                26: 45,
                27: 45,
                28: 54,
                29: 111
            },
            4: {
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
                13: 13,
                14: 34,
                15: 65,
                16: 2,
                17: 34,
                18: 88,
                19: 54,
                20: 43,
                21: 54,
                22: 6,
                23: 11,
                24: 23,
                25: 34,
                26: 45,
                27: 45,
                28: 54,
                29: 111
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
                12: 26,
                13: 13,
                14: 34,
                15: 65,
                16: 2,
                17: 34,
                18: 88,
                19: 54,
                20: 43,
                21: 54,
                22: 6,
                23: 11,
                24: 23,
                25: 34,
                26: 45,
                27: 45,
                28: 54,
                29: 111
            },

            3: {
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
                13: 13,
                14: 34,
                15: 65,
                16: 2,
                17: 34,
                18: 88,
                19: 54,
                20: 43,
                21: 54,
                22: 6,
                23: 11,
                24: 23,
                25: 34,
                26: 45,
                27: 45,
                28: 54,
                29: 111
            },
            4: {
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
                13: 13,
                14: 34,
                15: 65,
                16: 2,
                17: 34,
                18: 88,
                19: 54,
                20: 43,
                21: 54,
                22: 6,
                23: 11,
                24: 23,
                25: 34,
                26: 45,
                27: 45,
                28: 54,
                29: 111
            },
            5: {
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
                13: 13,
                14: 34,
                15: 65,
                16: 2,
                17: 34,
                18: 88,
                19: 54,
                20: 43,
                21: 54,
                22: 6,
                23: 11,
                24: 23,
                25: 34,
                26: 45,
                27: 45,
                28: 54,
                29: 111
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
                12: 26,
                13: 13,
                14: 34,
                15: 65,
                16: 2,
                17: 34,
                18: 88,
                19: 54,
                20: 43,
                21: 54,
                22: 6,
                23: 11,
                24: 23,
                25: 34,
                26: 45,
                27: 45,
                28: 54,
                29: 111
            },
            3: {
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
                13: 13,
                14: 34,
                15: 65,
                16: 2,
                17: 34,
                18: 88,
                19: 54,
                20: 43,
                21: 54,
                22: 6,
                23: 11,
                24: 23,
                25: 34,
                26: 45,
                27: 45,
                28: 54,
                29: 111
            },
            4: {
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
                13: 13,
                14: 34,
                15: 65,
                16: 2,
                17: 34,
                18: 88,
                19: 54,
                20: 43,
                21: 54,
                22: 6,
                23: 11,
                24: 23,
                25: 34,
                26: 45,
                27: 45,
                28: 54,
                29: 111
            },
            5: {
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
                13: 13,
                14: 34,
                15: 65,
                16: 2,
                17: 34,
                18: 88,
                19: 54,
                20: 43,
                21: 54,
                22: 6,
                23: 11,
                24: 23,
                25: 34,
                26: 45,
                27: 45,
                28: 54,
                29: 111
            },
            6: {
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
                13: 13,
                14: 34,
                15: 65,
                16: 2,
                17: 34,
                18: 88,
                19: 54,
                20: 43,
                21: 54,
                22: 6,
                23: 11,
                24: 23,
                25: 34,
                26: 45,
                27: 45,
                28: 54,
                29: 111
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
                12: 26,
                13: 13,
                14: 34,
                15: 65,
                16: 2,
                17: 34,
                18: 88,
                19: 54,
                20: 43,
                21: 54,
                22: 6,
                23: 11,
                24: 23,
                25: 34,
                26: 45,
                27: 45,
                28: 54,
                29: 111
            },
            3: {
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
                13: 13,
                14: 34,
                15: 65,
                16: 2,
                17: 34,
                18: 88,
                19: 54,
                20: 43,
                21: 54,
                22: 6,
                23: 11,
                24: 23,
                25: 34,
                26: 45,
                27: 45,
                28: 54,
                29: 111
            },
            4: {
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
                13: 13,
                14: 34,
                15: 65,
                16: 2,
                17: 34,
                18: 88,
                19: 54,
                20: 43,
                21: 54,
                22: 6,
                23: 11,
                24: 23,
                25: 34,
                26: 45,
                27: 45,
                28: 54,
                29: 111
            },
            5: {
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
                13: 13,
                14: 34,
                15: 65,
                16: 2,
                17: 34,
                18: 88,
                19: 54,
                20: 43,
                21: 54,
                22: 6,
                23: 11,
                24: 23,
                25: 34,
                26: 45,
                27: 45,
                28: 54,
                29: 111
            },
            6: {
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
                13: 13,
                14: 34,
                15: 65,
                16: 2,
                17: 34,
                18: 88,
                19: 54,
                20: 43,
                21: 54,
                22: 6,
                23: 11,
                24: 23,
                25: 34,
                26: 45,
                27: 45,
                28: 54,
                29: 111
            },
            7: {
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
                13: 13,
                14: 34,
                15: 65,
                16: 2,
                17: 34,
                18: 88,
                19: 54,
                20: 43,
                21: 54,
                22: 6,
                23: 11,
                24: 23,
                25: 34,
                26: 45,
                27: 45,
                28: 54,
                29: 111
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
                12: 26,
                13: 13,
                14: 34,
                15: 65,
                16: 2,
                17: 34,
                18: 88,
                19: 54,
                20: 43,
                21: 54,
                22: 6,
                23: 11,
                24: 23,
                25: 34,
                26: 45,
                27: 45,
                28: 54,
                29: 111
            },
            3: {
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
                13: 13,
                14: 34,
                15: 65,
                16: 2,
                17: 34,
                18: 88,
                19: 54,
                20: 43,
                21: 54,
                22: 6,
                23: 11,
                24: 23,
                25: 34,
                26: 45,
                27: 45,
                28: 54,
                29: 111
            },
            4: {
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
                13: 13,
                14: 34,
                15: 65,
                16: 2,
                17: 34,
                18: 88,
                19: 54,
                20: 43,
                21: 54,
                22: 6,
                23: 11,
                24: 23,
                25: 34,
                26: 45,
                27: 45,
                28: 54,
                29: 111
            },
            5: {
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
                13: 13,
                14: 34,
                15: 65,
                16: 2,
                17: 34,
                18: 88,
                19: 54,
                20: 43,
                21: 54,
                22: 6,
                23: 11,
                24: 23,
                25: 34,
                26: 45,
                27: 45,
                28: 54,
                29: 111
            },
            6: {
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
                13: 13,
                14: 34,
                15: 65,
                16: 2,
                17: 34,
                18: 88,
                19: 54,
                20: 43,
                21: 54,
                22: 6,
                23: 11,
                24: 23,
                25: 34,
                26: 45,
                27: 45,
                28: 54,
                29: 111
            },
            7: {
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
                13: 13,
                14: 34,
                15: 65,
                16: 2,
                17: 34,
                18: 88,
                19: 54,
                20: 43,
                21: 54,
                22: 6,
                23: 11,
                24: 23,
                25: 34,
                26: 45,
                27: 45,
                28: 54,
                29: 111
            },
            8: {
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
                13: 13,
                14: 34,
                15: 65,
                16: 2,
                17: 34,
                18: 88,
                19: 54,
                20: 43,
                21: 54,
                22: 6,
                23: 11,
                24: 23,
                25: 34,
                26: 45,
                27: 45,
                28: 54,
                29: 111
            }
        }
    }
];


(function next(counter, maxLoops) {
    // break if maxLoops has been reached
    if (counter++ >= maxLoops) return;

    setTimeout(function() {
        // set data into component
        console.log(counter);
        HeatmapEmitter.emit('changeMainData', data[counter]);
        // call next() recursively
        next(counter, maxLoops);
    }, 2000);
})(0, data.length-1);



// end test data
// -----------------------------


// data format must be - 'D-M-YYYY'

render(
    <div>
        <Heatmap
            start={'01-02-2016'}
            end={'21-11-2016'}
            showDays={true}
            gorizontalView={false}
            size={20}
            margin={1}
            data={data[0]}
        />
    </div>,

  document.getElementById('root')
);
