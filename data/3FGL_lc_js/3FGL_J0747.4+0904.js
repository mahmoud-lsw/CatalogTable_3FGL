Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.51351917,  0.93790889,  0.33820179,  2.22736359,        0.        ,  0.33706388,  0.504861  ,  0.28550562,  0.        ,        0.15692979,  0.        ,  0.17930253,  0.45321485,  0.04990865,        0.99752331,  0.        ,  0.        ,  0.29471505,  0.18281586,        0.46246704,  0.82903433,  0.73703152,  0.06450849,  0.36053604,        1.21153939,  0.65347123,  0.        ,  0.63070941,  0.51748037,        0.12317931,  0.2982218 ,  0.81817067,  0.97074491,  0.        ,        0.        ,  0.        ,  0.69776583,  1.43174028,  1.07409537,        0.        ,  0.        ,  0.7391668 ,  0.33802956,  0.54401386,        0.        ,  0.98605895,  0.        ]
FluxHistoryError = [[ 0.        ,  1.23771858],       [ 0.        ,  1.91377699],       [ 0.17996693,  1.83507967],       [ 0.01359364,  0.83062482],       [ 1.37138855,  3.22726655],       [ 0.        ,  1.11926854],       [ 0.        ,  1.59472188],       [ 0.13413161,  1.13642943],       [ 0.0254437 ,  0.69517046],       [ 0.        ,  1.30253649],       [ 0.        ,  1.17698258],       [ 0.        ,  1.8167485 ],       [ 0.        ,  1.67493065],       [ 0.11382356,  0.9970758 ],       [ 0.        ,  2.12800718],       [ 0.4296903 ,  1.76050031],       [ 0.        ,  1.12866819],       [ 0.        ,  1.879884  ],       [ 0.        ,  2.08895159],       [ 0.        ,  1.58953388],       [ 0.09290123,  1.11730933],       [ 0.        ,  2.89177132],       [ 0.        ,  2.66288394],       [ 0.        ,  1.97801536],       [ 0.        ,  2.49129337],       [ 0.46397293,  2.15430975],       [ 0.19306675,  1.39334762],       [ 0.        ,  1.61653733],       [ 0.        ,  2.68589473],       [ 0.        ,  2.06612432],       [ 0.        ,  2.39268505],       [ 0.        ,  2.44575664],       [ 0.23291409,  1.63236284],       [ 0.35298532,  1.8360641 ],       [ 0.        ,  1.28861761],       [ 0.        ,  1.41795862],       [ 0.        ,  1.12599587],       [ 0.06397039,  1.59323525],       [ 0.51491189,  2.45364952],       [ 0.39144647,  1.94776201],       [ 0.        ,  1.46908414],       [ 0.        ,  1.11318159],       [ 0.28931776,  1.40462816],       [ 0.        ,  1.79055971],       [ 0.09762943,  1.24911642],       [ 0.        ,  1.4172827 ],       [ 0.31461012,  1.85421538],       [ 0.        ,  1.03251755]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.15539675e+01],       [  5.47000000e+02,   4.65140247e+00],       [  1.73200000e+03,   2.51100945e+00],       [  5.47700000e+03,   7.70588696e-01],       [  3.16220000e+04,   1.95467263e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   6.89416628e+01],       [  5.47000000e+02,   7.59979248e-01,   8.79197407e+00],       [  1.73200000e+03,   1.70698428e+00,   3.41130424e+00],       [  5.47700000e+03,   4.87176508e-01,   1.11793172e+00],       [  3.16220000e+04,   8.76378343e-02,   3.59396756e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]