Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.        ,  0.        ,  0.        ,  0.        ,        0.        ,  0.        ,  0.        ,  0.        ,  0.06737144,        0.12934242,  0.32454935,  0.        ,  0.16708146,  0.21096683,        0.12997474,  0.        ,  1.38226199,  0.24021736,  0.35765767,        0.13787659,  0.71843559,  0.72769314,  0.        ,  0.19373934,        0.        ,  0.        ,  0.24438976,  0.61523527,  0.        ,        0.36641687,  0.        ,  0.        ,  0.        ,  0.53468162,        0.6028769 ,  0.        ,  0.7297765 ,  0.36642104,  0.        ,        0.        ,  0.16926177,  0.12817284,  0.        ,  0.        ,        0.        ,  0.        ,  0.1278294 ]
FluxHistoryError = [[ 0.        ,  0.96851903],       [ 0.        ,  0.67844945],       [ 0.        ,  0.77662408],       [ 0.        ,  0.58252662],       [ 0.        ,  0.81859064],       [ 0.        ,  0.74897033],       [ 0.        ,  0.8316347 ],       [ 0.        ,  0.67865241],       [ 0.        ,  0.67307037],       [ 0.        ,  0.87078596],       [ 0.        ,  1.09631436],       [ 0.06402043,  0.6857689 ],       [ 0.        ,  0.91664034],       [ 0.        ,  1.55441962],       [ 0.0603119 ,  0.50160635],       [ 0.        ,  1.53319468],       [ 0.        ,  1.06915855],       [ 0.75999498,  2.12855816],       [ 0.04679868,  0.59250116],       [ 0.07520428,  0.8352586 ],       [ 0.        ,  1.51018794],       [ 0.30933794,  1.2937566 ],       [ 0.26604339,  1.32566404],       [ 0.        ,  0.86210674],       [ 0.        ,  1.09697168],       [ 0.        ,  0.89886349],       [ 0.        ,  0.97753131],       [ 0.03531089,  0.60248691],       [ 0.16516083,  1.20610428],       [ 0.        ,  1.07347131],       [ 0.11598676,  0.78542173],       [ 0.        ,  1.03976548],       [ 0.        ,  0.96820235],       [ 0.        ,  1.36805117],       [ 0.21458527,  0.99341464],       [ 0.25945023,  1.09474587],       [ 0.        ,  1.26555216],       [ 0.30474317,  1.32350314],       [ 0.05973473,  0.88946766],       [ 0.        ,  0.62913561],       [ 0.        ,  0.92368102],       [ 0.03410603,  0.44660705],       [ 0.        ,  1.4289529 ],       [ 0.        ,  0.91757774],       [ 0.        ,  0.62279618],       [ 0.        ,  1.25607038],       [ 0.        ,  0.69827032],       [ 0.        ,  1.22302625]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.36353806e-01],       [  5.47000000e+02,   2.56649160e+00],       [  1.73200000e+03,   1.30936599e+00],       [  5.47700000e+03,   3.02012026e-01],       [  3.16220000e+04,   5.91933250e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   4.30401967e+01],       [  5.47000000e+02,   0.00000000e+00,   9.90210438e+00],       [  1.73200000e+03,   4.90067124e-01,   2.23163271e+00],       [  5.47700000e+03,   1.03226915e-01,   5.68466008e-01],       [  3.16220000e+04,   3.65367323e-01,   8.79636884e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]