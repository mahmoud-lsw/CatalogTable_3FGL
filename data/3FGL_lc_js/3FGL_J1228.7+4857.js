Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 4.63550568,  2.79244018,  3.32066846,  0.        ,  3.42885375,        2.97976828,  3.35130072,  1.12132752,  3.48098445,  2.08276653,        1.60954499,  1.02455354,  0.        ,  0.        ,  0.        ,        1.23354089,  1.85990369,  1.95250392,  0.        ,  0.        ,        0.        ,  0.59165186,  0.        ,  1.30784225,  0.29806188,        0.        ,  0.50773859,  0.        ,  0.        ,  0.        ,        0.85065234,  0.        ,  0.        ,  0.        ,  0.        ,        0.52816862,  0.3543773 ,  0.21031104,  0.        ,  0.        ,        1.41887689,  1.55951464,  0.54401797,  0.23882598,  1.84576058,        1.6178664 ,  1.50898194,  0.        ]
FluxHistoryError = [[ 3.36434197,  6.08516216],       [ 1.63717878,  4.04215431],       [ 2.26191664,  4.53885984],       [ 0.        ,  1.96725786],       [ 1.71803844,  5.33236599],       [ 1.70912564,  4.48190212],       [ 2.04911327,  4.84726858],       [ 0.        ,  5.17708313],       [ 2.01512957,  5.25451088],       [ 1.15385246,  3.14776421],       [ 0.63500923,  2.78195524],       [ 0.48446435,  1.79635382],       [ 0.        ,  2.82539248],       [ 0.        ,  2.49292421],       [ 0.        ,  1.88401628],       [ 0.13994968,  2.51770091],       [ 0.83348119,  3.1360383 ],       [ 0.93505585,  3.06596804],       [ 0.        ,  1.85774243],       [ 0.        ,  1.65996766],       [ 0.        ,  2.5648272 ],       [ 0.        ,  2.24773782],       [ 0.        ,  1.83274841],       [ 0.45243239,  2.31525874],       [ 0.        ,  2.46786144],       [ 0.        ,  2.52852559],       [ 0.        ,  2.60310984],       [ 0.        ,  1.7689724 ],       [ 0.        ,  1.80292296],       [ 0.        ,  2.00652003],       [ 0.1730383 ,  1.84709847],       [ 0.        ,  2.59401417],       [ 0.        ,  3.12506533],       [ 0.        ,  1.41347671],       [ 0.        ,  1.8501147 ],       [ 0.        ,  2.50807303],       [ 0.        ,  2.556927  ],       [ 0.        ,  2.28419767],       [ 0.        ,  2.33328128],       [ 0.        ,  2.68221664],       [ 0.35272539,  2.64640379],       [ 0.67382318,  2.59734011],       [ 0.        ,  3.26565307],       [ 0.        ,  2.93742865],       [ 0.98036528,  2.854321  ],       [ 0.52704108,  2.79021335],       [ 0.68993878,  2.46981573],       [ 0.        ,  2.01155281]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   8.28997803e+01],       [  5.47000000e+02,   1.84717731e+01],       [  1.73200000e+03,   4.12093735e+00],       [  5.47700000e+03,   1.86888754e-01],       [  3.16220000e+04,   2.92628139e-01]]
SpectrumError = [[  1.73000000e+02,   1.96582298e+01,   1.48568268e+02],       [  5.47000000e+02,   1.36508121e+01,   2.35487957e+01],       [  1.73200000e+03,   3.22627521e+00,   5.07390881e+00],       [  5.47700000e+03,   1.16972923e-02,   4.17402685e-01],       [  3.16220000e+04,   1.68745562e-01,   4.61885095e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]