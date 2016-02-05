Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.60161012,  0.        ,  0.94671434,  0.        ,        0.        ,  2.60009146,  0.48702896,  1.86127555,  2.78531575,        2.50828242,  7.61043024,  5.76733732,  0.540326  ,  2.49842429,        0.40149742,  1.33922923,  0.88261414,  0.50450718,  0.        ,        3.65046906,  1.31823981,  2.2920537 ,  0.        ,  0.        ,        0.        ,  0.37044853,  0.93768805,  0.        ,  0.        ,        0.65138227,  0.        ,  0.        ,  1.00301385,  0.4717713 ,        0.31599757,  4.53633547,  1.25389385,  1.79447675,  2.00232983,        0.        ,  2.48244071,  1.06650031,  0.37896392,  0.        ,        0.08012132,  0.        ,  0.34147578]
FluxHistoryError = [[ 0.        ,  2.71561027],       [ 0.        ,  2.97639698],       [ 0.        ,  2.10706592],       [ 0.        ,  3.27238744],       [ 0.        ,  2.22967315],       [ 0.        ,  1.58682239],       [ 1.38707018,  4.0303278 ],       [ 0.        ,  3.32156456],       [ 0.85232472,  3.06673622],       [ 1.57049048,  4.39265823],       [ 1.30485451,  3.89717484],       [ 6.02658129,  9.32740021],       [ 4.13739586,  7.52055931],       [ 0.        ,  3.17295015],       [ 1.22054112,  3.9519825 ],       [ 0.        ,  2.95083696],       [ 0.29423702,  2.5157938 ],       [ 0.        ,  3.45345378],       [ 0.        ,  2.91983283],       [ 0.        ,  1.92479599],       [ 2.28996277,  5.16777945],       [ 0.04835081,  2.70951891],       [ 1.02434659,  3.79861712],       [ 0.        ,  1.94045544],       [ 0.        ,  2.13076925],       [ 0.        ,  2.4661994 ],       [ 0.        ,  2.51912612],       [ 0.        ,  3.50996083],       [ 0.        ,  1.97336137],       [ 0.        ,  2.14894032],       [ 0.        ,  2.7959829 ],       [ 0.        ,  2.93571377],       [ 0.        ,  2.96489644],       [ 0.        ,  3.45198417],       [ 0.        ,  3.13345987],       [ 0.        ,  2.92768881],       [ 2.92069912,  6.26630306],       [ 0.        ,  4.10351229],       [ 0.59742153,  3.29120183],       [ 0.69711101,  3.41713095],       [ 0.        ,  2.14654517],       [ 1.00002611,  4.15777349],       [ 0.        ,  3.39313495],       [ 0.        ,  2.80652377],       [ 0.        ,  2.14077997],       [ 0.        ,  2.73897556],       [ 0.        ,  2.00023437],       [ 0.        ,  2.76216036]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.28777573e+02],       [  5.47000000e+02,   1.18710432e+01],       [  1.73200000e+03,   2.18896580e+00],       [  5.47700000e+03,   2.76048779e-01],       [  3.16220000e+04,   2.88425684e-01]]
SpectrumError = [[  1.73000000e+02,   9.38532257e+01,   1.63370041e+02],       [  5.47000000e+02,   8.03344822e+00,   1.59000225e+01],       [  1.73200000e+03,   1.45304704e+00,   3.00444794e+00],       [  5.47700000e+03,   1.14514217e-01,   4.99700069e-01],       [  3.16220000e+04,   1.44419119e-01,   4.85668421e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]