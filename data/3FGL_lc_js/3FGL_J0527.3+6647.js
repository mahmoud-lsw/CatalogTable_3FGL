Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.        ,  0.10079595,  0.        ,  0.6054951 ,        0.42843178,  0.16792268,  0.48544684,  0.34668377,  0.        ,        0.50962073,  0.        ,  0.        ,  0.45740166,  0.        ,        0.33206454,  0.44980761,  0.        ,  0.11828675,  0.        ,        0.        ,  0.        ,  0.36384347,  0.        ,  0.        ,        0.        ,  0.        ,  0.        ,  0.        ,  0.19332591,        0.        ,  0.21921274,  0.18619007,  0.        ,  0.88337189,        0.        ,  0.        ,  0.        ,  0.5374102 ,  0.24892722,        0.13876474,  0.        ,  0.        ,  0.37609994,  0.44751295,        0.        ,  0.69864082,  0.        ]
FluxHistoryError = [[ 0.        ,  1.36681128],       [ 0.        ,  1.29478896],       [ 0.        ,  1.22588655],       [ 0.        ,  0.98217535],       [ 0.09497356,  1.28656411],       [ 0.13386029,  0.88378119],       [ 0.        ,  1.02161294],       [ 0.15311745,  1.04037178],       [ 0.08693689,  0.79624379],       [ 0.        ,  0.73762608],       [ 0.16994867,  1.04350162],       [ 0.        ,  0.70393193],       [ 0.        ,  0.78809094],       [ 0.08908832,  0.94753599],       [ 0.        ,  0.78138518],       [ 0.09199871,  0.70894372],       [ 0.16297555,  0.8520177 ],       [ 0.        ,  0.79845339],       [ 0.        ,  0.90879931],       [ 0.        ,  1.1038214 ],       [ 0.        ,  0.83380991],       [ 0.        ,  0.79475713],       [ 0.03942752,  0.82074207],       [ 0.        ,  0.76955998],       [ 0.        ,  0.58983958],       [ 0.        ,  1.14549744],       [ 0.        ,  0.97670782],       [ 0.        ,  0.68973112],       [ 0.        ,  0.64540035],       [ 0.        ,  1.39811555],       [ 0.        ,  0.81691802],       [ 0.06384517,  0.50634086],       [ 0.        ,  1.11922497],       [ 0.        ,  0.87259108],       [ 0.47579539,  1.38711917],       [ 0.        ,  0.62973356],       [ 0.        ,  0.76183754],       [ 0.        ,  0.82688248],       [ 0.1933482 ,  1.00874305],       [ 0.        ,  1.1772372 ],       [ 0.        ,  1.24825692],       [ 0.        ,  0.57329696],       [ 0.        ,  0.61885303],       [ 0.11753261,  0.77105939],       [ 0.        ,  1.61623058],       [ 0.        ,  0.99133486],       [ 0.33910039,  1.17121518],       [ 0.        ,  0.72944236]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.47723417e+01],       [  5.47000000e+02,   1.22514576e-01],       [  1.73200000e+03,   8.61769795e-01],       [  5.47700000e+03,   5.97271621e-01],       [  3.16220000e+04,   2.73317724e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   7.21636877e+01],       [  5.47000000e+02,   0.00000000e+00,   7.77945074e+00],       [  1.73200000e+03,   1.54513299e-01,   1.64608002e+00],       [  5.47700000e+03,   3.75070751e-01,   8.68354440e-01],       [  3.16220000e+04,   1.59586355e-01,   4.24886703e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]