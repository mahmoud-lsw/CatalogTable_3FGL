Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 2.81940866,  2.34927893,  0.95023912,  0.        ,  2.12839246,        2.51483941,  1.48399115,  0.38143435,  0.        ,  0.10012797,        0.        ,  0.        ,  1.42780709,  0.        ,  1.50462306,        3.24058509,  0.        ,  0.71471632,  0.46183982,  0.61948448,        1.38289678,  0.        ,  0.        ,  0.        ,  0.        ,        1.18185866,  1.88623905,  1.34123027,  1.89351451,  1.96696174,        0.78328907,  0.        ,  0.        ,  0.        ,  1.6148349 ,        2.50812888,  0.55534303,  0.        ,  0.75193727,  1.79592514,        1.69528937,  0.45823979,  0.44742489,  1.21730781,  0.        ,        0.        ,  0.        ,  0.17767873]
FluxHistoryError = [[ 1.51315176,  4.35390377],       [ 1.05051005,  3.8673377 ],       [ 0.        ,  3.53593725],       [ 0.        ,  2.19997382],       [ 0.76781905,  3.68423748],       [ 1.16746235,  4.0056982 ],       [ 0.17929721,  3.0010674 ],       [ 0.        ,  3.41466036],       [ 0.        ,  1.69415367],       [ 0.        ,  2.09760824],       [ 0.        ,  2.33103371],       [ 0.        ,  2.68684673],       [ 0.44196057,  2.70114946],       [ 0.        ,  3.31619   ],       [ 0.55419993,  2.6171813 ],       [ 1.75653827,  4.90658808],       [ 0.        ,  1.5349052 ],       [ 0.        ,  3.72135985],       [ 0.        ,  3.23770872],       [ 0.        ,  2.42515892],       [ 0.        ,  4.50539076],       [ 0.        ,  1.43375349],       [ 0.        ,  2.60799456],       [ 0.        ,  1.8992331 ],       [ 0.        ,  2.61701274],       [ 0.        ,  3.62969363],       [ 0.90269071,  3.01699162],       [ 0.13365066,  2.81681299],       [ 0.85284436,  3.05289817],       [ 0.54199326,  3.56192923],       [ 0.        ,  2.91175592],       [ 0.        ,  2.87962198],       [ 0.        ,  2.95572352],       [ 0.        ,  2.14009762],       [ 0.30103374,  3.13759518],       [ 1.35904014,  3.76330256],       [ 0.        ,  2.97297633],       [ 0.        ,  2.09149623],       [ 0.        ,  3.37893665],       [ 0.49694765,  3.16380739],       [ 0.6356703 ,  2.90709782],       [ 0.        ,  2.69306874],       [ 0.        ,  2.68622828],       [ 0.        ,  4.06292796],       [ 0.        ,  2.2633841 ],       [ 0.        ,  2.71496129],       [ 0.        ,  2.30537581],       [ 0.        ,  2.47069135]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   5.53335609e+01],       [  5.47000000e+02,   1.02114944e+01],       [  1.73200000e+03,   1.24725223e+00],       [  5.47700000e+03,   6.83196008e-01],       [  3.16220000e+04,   1.01580163e-05]]
SpectrumError = [[  1.73000000e+02,   2.44389439e+01,   8.67853622e+01],       [  5.47000000e+02,   5.87570190e+00,   1.46221752e+01],       [  1.73200000e+03,   4.36644316e-01,   2.15007186e+00],       [  5.47700000e+03,   4.05515671e-01,   1.02770877e+00],       [  3.16220000e+04,   0.00000000e+00,   3.04591145e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]