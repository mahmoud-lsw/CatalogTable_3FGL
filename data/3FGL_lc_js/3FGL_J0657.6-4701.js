Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.08975949,  0.        ,  1.92941058,  1.12973952,  0.        ,        0.8046549 ,  0.        ,  0.71515793,  1.27848351,  0.05444988,        0.        ,  1.04266191,  0.        ,  0.        ,  0.60990012,        0.        ,  1.01970136,  0.12347328,  1.01750529,  0.        ,        0.47583243,  0.        ,  0.58304214,  0.        ,  0.14837667,        0.88328022,  1.04510307,  0.        ,  1.67537808,  1.0573734 ,        0.09678489,  0.8146193 ,  0.        ,  0.        ,  0.50286239,        0.75958461,  0.35365403,  1.25388467,  0.        ,  0.        ,        0.43609726,  0.23502029,  1.02434361,  0.        ,  0.54258615,        0.        ,  0.0883166 ,  0.        ]
FluxHistoryError = [[ 0.        ,  1.61256518],       [ 0.        ,  1.25825405],       [ 0.65148699,  3.32572365],       [ 0.45690173,  2.0111022 ],       [ 0.        ,  1.61878085],       [ 0.32314718,  1.49633408],       [ 0.        ,  1.62807655],       [ 0.21981859,  1.35326481],       [ 0.58057129,  2.13543606],       [ 0.        ,  1.85954055],       [ 0.        ,  1.42164373],       [ 0.43965816,  1.89327097],       [ 0.        ,  1.85650373],       [ 0.        ,  1.01891744],       [ 0.13956577,  1.41912079],       [ 0.        ,  1.21924591],       [ 0.29018044,  2.06448984],       [ 0.        ,  1.77861881],       [ 0.36205512,  2.01863718],       [ 0.        ,  1.47089744],       [ 0.        ,  2.04053316],       [ 0.        ,  1.42377782],       [ 0.17817098,  1.16706026],       [ 0.        ,  1.31906974],       [ 0.        ,  1.13083819],       [ 0.1153903 ,  1.83623528],       [ 0.43830919,  1.80486023],       [ 0.        ,  0.9995482 ],       [ 0.67223513,  2.85665298],       [ 0.23511797,  1.91353822],       [ 0.        ,  2.19754249],       [ 0.13151258,  1.70586371],       [ 0.        ,  2.10641742],       [ 0.        ,  1.15022266],       [ 0.0134902 ,  1.25078619],       [ 0.20264858,  1.50546741],       [ 0.        ,  1.78994429],       [ 0.38711977,  2.46277714],       [ 0.        ,  0.90171444],       [ 0.        ,  1.38862979],       [ 0.        ,  2.41690886],       [ 0.        ,  1.68524159],       [ 0.06716347,  2.22313428],       [ 0.        ,  1.43107498],       [ 0.        ,  3.03430492],       [ 0.        ,  1.41708195],       [ 0.        ,  2.13797013],       [ 0.        ,  1.04575086]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.82642221e-01],       [  5.47000000e+02,   6.30929184e+00],       [  1.73200000e+03,   1.77094507e+00],       [  5.47700000e+03,   1.24198246e+00],       [  3.16220000e+04,   1.27544984e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   7.54037955e+01],       [  5.47000000e+02,   6.23771191e-01,   1.21155872e+01],       [  1.73200000e+03,   8.60180140e-01,   2.74535871e+00],       [  5.47700000e+03,   8.64881635e-01,   1.67683673e+00],       [  3.16220000e+04,   3.87586877e-02,   2.72049010e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]