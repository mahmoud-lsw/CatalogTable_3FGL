Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.11044169,  0.5537653 ,  0.73107713,  0.        ,        0.33491033,  0.12656459,  0.49958611,  0.        ,  0.09076475,        0.        ,  0.73774981,  0.        ,  0.47178742,  0.19264352,        0.        ,  0.        ,  0.        ,  0.55606723,  0.        ,        0.        ,  0.19412449,  0.        ,  0.        ,  0.        ,        0.15839124,  0.        ,  0.2176501 ,  0.        ,  0.        ,        0.        ,  0.27829137,  0.        ,  0.        ,  0.09949432,        0.1274385 ,  0.        ,  0.        ,  0.        ,  0.09385651,        0.36344931,  0.        ,  0.        ,  0.16343595,  0.        ,        0.33211625,  0.        ,  0.21744004]
FluxHistoryError = [[ 0.        ,  0.83086491],       [ 0.        ,  0.78675158],       [ 0.225034  ,  0.98051739],       [ 0.40340811,  1.15790212],       [ 0.        ,  0.35084137],       [ 0.10716453,  0.70116448],       [ 0.0018682 ,  0.35630482],       [ 0.22224927,  0.89878428],       [ 0.        ,  0.71664965],       [ 0.        ,  0.83276062],       [ 0.        ,  0.69542158],       [ 0.42342845,  1.14037561],       [ 0.        ,  0.58536303],       [ 0.17159048,  0.92500138],       [ 0.06396626,  0.42079681],       [ 0.        ,  0.57544702],       [ 0.        ,  0.77566612],       [ 0.        ,  0.63366449],       [ 0.23858571,  0.99467087],       [ 0.        ,  0.96744025],       [ 0.        ,  0.73598212],       [ 0.        ,  1.01428905],       [ 0.        ,  0.78333956],       [ 0.        ,  0.47470596],       [ 0.        ,  0.63327473],       [ 0.        ,  0.94374311],       [ 0.        ,  0.68010861],       [ 0.        ,  1.13937537],       [ 0.        ,  0.52454555],       [ 0.        ,  0.57204932],       [ 0.        ,  0.54860079],       [ 0.03921904,  0.67849016],       [ 0.        ,  0.52787071],       [ 0.        ,  0.92967564],       [ 0.        ,  0.8895406 ],       [ 0.        ,  0.92262723],       [ 0.        ,  0.63940376],       [ 0.        ,  0.70335966],       [ 0.        ,  0.610129  ],       [ 0.        ,  1.03543687],       [ 0.09768042,  0.72587383],       [ 0.        ,  0.73982728],       [ 0.        ,  0.55306029],       [ 0.        ,  0.97190149],       [ 0.        ,  0.85736901],       [ 0.10928065,  0.67470753],       [ 0.        ,  0.66122186],       [ 0.02219374,  0.56165767]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   2.15093479e+01],       [  5.47000000e+02,   1.58365417e+00],       [  1.73200000e+03,   2.11453319e+00],       [  5.47700000e+03,   1.68839455e-01],       [  3.16220000e+04,   5.75583696e-01]]
SpectrumError = [[  1.73000000e+02,   3.18063736e-01,   4.35529327e+01],       [  5.47000000e+02,   0.00000000e+00,   7.97695565e+00],       [  1.73200000e+03,   1.41386354e+00,   2.90465021e+00],       [  5.47700000e+03,   4.39257547e-02,   3.64206910e-01],       [  3.16220000e+04,   3.81220251e-01,   8.22708130e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]