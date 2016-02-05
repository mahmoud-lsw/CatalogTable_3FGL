Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.25391144,  0.46494555,  2.2837224 ,  0.        ,        0.5780654 ,  0.11758713,  0.        ,  0.19055502,  3.4817636 ,        0.        ,  0.61448669,  1.09657359,  0.9056235 ,  0.        ,        0.        ,  1.58235776,  1.6200943 ,  0.87376207,  0.85261947,        1.72615206,  0.        ,  0.        ,  0.23125395,  0.52133518,        0.        ,  0.        ,  1.13638473,  0.        ,  0.71869975,        1.12893701,  0.8844831 ,  1.29532957,  1.44205594,  2.37841916,        0.72751838,  0.        ,  1.45151985,  1.67970371,  1.75751758,        1.63488376,  0.19969054,  0.        ,  0.        ,  0.        ,        0.82215166,  0.        ,  0.        ]
FluxHistoryError = [[ 0.        ,  2.54033589],       [ 0.        ,  1.95218104],       [ 0.        ,  2.51404786],       [ 1.29165626,  3.47381592],       [ 0.        ,  1.56858015],       [ 0.        ,  2.90707088],       [ 0.        ,  2.16222481],       [ 0.        ,  3.19017243],       [ 0.        ,  2.33789055],       [ 2.2205193 ,  4.88356686],       [ 0.        ,  1.45134771],       [ 0.        ,  3.5063076 ],       [ 0.41040301,  2.0358901 ],       [ 0.        ,  3.59115416],       [ 0.        ,  2.02083683],       [ 0.        ,  1.55053389],       [ 0.6437338 ,  2.76863098],       [ 0.50979245,  2.953192  ],       [ 0.        ,  3.19184989],       [ 0.        ,  3.66317159],       [ 0.45419943,  3.29361296],       [ 0.        ,  1.82969248],       [ 0.        ,  2.36595845],       [ 0.        ,  3.03450975],       [ 0.        ,  3.35721689],       [ 0.        ,  1.1549474 ],       [ 0.        ,  2.09303188],       [ 0.        ,  3.78204465],       [ 0.        ,  2.47019196],       [ 0.        ,  3.14668161],       [ 0.07619643,  2.37627935],       [ 0.26098055,  1.89163423],       [ 0.41516209,  2.44945431],       [ 0.68390292,  2.47906923],       [ 0.79010069,  4.04348183],       [ 0.        ,  3.8457852 ],       [ 0.        ,  2.18184447],       [ 0.26491857,  2.7651186 ],       [ 0.72263658,  2.89739227],       [ 0.65795219,  3.03158712],       [ 0.57668364,  2.87750101],       [ 0.        ,  2.63921566],       [ 0.        ,  2.14553928],       [ 0.        ,  2.48144341],       [ 0.        ,  1.69950986],       [ 0.        ,  3.87019539],       [ 0.        ,  1.9932754 ],       [ 0.        ,  1.97754169]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   7.58765411e+01],       [  5.47000000e+02,   1.00015602e+01],       [  1.73200000e+03,   1.57139933e+00],       [  5.47700000e+03,   3.02753747e-01],       [  3.16220000e+04,   2.65282869e-01]]
SpectrumError = [[  1.73000000e+02,   4.03783951e+01,   1.11640259e+02],       [  5.47000000e+02,   5.05104876e+00,   1.48336277e+01],       [  1.73200000e+03,   6.87146962e-01,   2.56251740e+00],       [  5.47700000e+03,   1.00290939e-01,   5.73786736e-01],       [  3.16220000e+04,   1.37735978e-01,   4.58993077e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]