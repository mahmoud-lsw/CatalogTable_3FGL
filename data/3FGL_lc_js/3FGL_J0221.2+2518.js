Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.25668108,  0.50626457,  0.90644008,  0.28098467,  0.79273754,        0.        ,  0.        ,  0.35248965,  0.63149941,  0.47311476,        0.33425066,  0.        ,  0.        ,  0.23803124,  0.        ,        0.31566131,  0.        ,  0.83667821,  0.        ,  0.7173757 ,        0.        ,  0.        ,  0.55312335,  0.40995505,  0.        ,        1.86638629,  1.03924191,  0.40060556,  0.        ,  0.        ,        0.        ,  0.45775571,  0.44339547,  0.        ,  0.0987609 ,        0.        ,  0.49603665,  1.24256444,  0.38802391,  0.        ,        0.67418313,  0.        ,  0.        ,  0.        ,  0.38379514,        0.        ,  0.14025971,  0.29713178]
FluxHistoryError = [[ 0.        ,  1.61869991],       [ 0.1034126 ,  1.12406158],       [ 0.43772998,  1.51975465],       [ 0.        ,  1.42961469],       [ 0.27144581,  1.44335818],       [ 0.        ,  0.77545035],       [ 0.        ,  1.38407767],       [ 0.05350098,  0.86304164],       [ 0.25977683,  1.17607307],       [ 0.        ,  1.87747303],       [ 0.        ,  1.63449284],       [ 0.        ,  0.98471332],       [ 0.        ,  1.16131282],       [ 0.        ,  1.55275127],       [ 0.        ,  1.4632318 ],       [ 0.        ,  1.70321918],       [ 0.        ,  1.56076944],       [ 0.39989004,  1.43189549],       [ 0.        ,  0.88297653],       [ 0.22349915,  1.37420917],       [ 0.        ,  1.6268872 ],       [ 0.        ,  1.04319501],       [ 0.22174153,  1.04564524],       [ 0.        ,  1.9127014 ],       [ 0.        ,  1.70369697],       [ 1.13476992,  2.71629524],       [ 0.38808173,  1.86647689],       [ 0.05631915,  0.98411   ],       [ 0.        ,  1.21964693],       [ 0.        ,  1.46546292],       [ 0.        ,  1.08827877],       [ 0.        ,  2.06947711],       [ 0.        ,  2.05143222],       [ 0.        ,  0.97666603],       [ 0.        ,  1.04784572],       [ 0.        ,  0.91476935],       [ 0.03001386,  1.13874578],       [ 0.35817444,  2.27967644],       [ 0.07819107,  0.87784261],       [ 0.        ,  0.92509341],       [ 0.20030025,  1.33477211],       [ 0.        ,  1.01061559],       [ 0.        ,  1.61946285],       [ 0.        ,  1.03602099],       [ 0.        ,  1.78841019],       [ 0.        ,  1.90939939],       [ 0.        ,  1.26726481],       [ 0.        ,  1.64588618]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   4.05279884e+01],       [  5.47000000e+02,   7.81731844e-01],       [  1.73200000e+03,   2.49324441e+00],       [  5.47700000e+03,   1.16126943e+00],       [  3.16220000e+04,   2.47547910e-01]]
SpectrumError = [[  1.73000000e+02,   1.24849777e+01,   6.82134933e+01],       [  5.47000000e+02,   0.00000000e+00,   1.00146744e+01],       [  1.73200000e+03,   1.61738133e+00,   3.44778037e+00],       [  5.47700000e+03,   8.08972716e-01,   1.57145917e+00],       [  3.16220000e+04,   1.09785318e-01,   4.25366163e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]