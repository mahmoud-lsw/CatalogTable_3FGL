Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.24291541,  0.        ,  0.        ,  0.        ,  0.        ,        0.06595635,  0.        ,  0.        ,  0.        ,  0.69821739,        0.        ,  0.5902108 ,  0.21057376,  0.2596516 ,  0.        ,        0.        ,  0.3575494 ,  0.4372763 ,  0.        ,  0.        ,        0.        ,  0.37137222,  0.        ,  0.14931753,  1.02172601,        0.        ,  0.        ,  0.        ,  0.0248117 ,  0.        ,        0.30178255,  0.27688652,  0.17560507,  0.36133748,  0.        ,        0.        ,  0.20524855,  0.        ,  0.        ,  0.34824756,        0.        ,  0.5061301 ,  0.        ,  0.46764678,  0.        ,        0.        ,  0.        ,  0.38042116]
FluxHistoryError = [[ 0.07958746,  0.5199036 ],       [ 0.        ,  0.53800046],       [ 0.        ,  0.68788064],       [ 0.        ,  0.46449244],       [ 0.        ,  0.59847599],       [ 0.        ,  0.88925814],       [ 0.        ,  0.59184015],       [ 0.        ,  1.1239692 ],       [ 0.        ,  0.92250562],       [ 0.31039041,  1.21545219],       [ 0.        ,  0.61032921],       [ 0.25351447,  1.0454818 ],       [ 0.        ,  1.10439345],       [ 0.037843  ,  0.65145409],       [ 0.        ,  0.64356691],       [ 0.        ,  1.19529402],       [ 0.12284389,  0.76245403],       [ 0.15396163,  0.86651313],       [ 0.        ,  0.76566797],       [ 0.        ,  1.00053489],       [ 0.        ,  1.1700362 ],       [ 0.06462803,  0.77558744],       [ 0.        ,  1.02196586],       [ 0.        ,  0.91662195],       [ 0.56942052,  1.57515502],       [ 0.        ,  1.02762306],       [ 0.        ,  0.66681314],       [ 0.        ,  1.24816501],       [ 0.        ,  1.17935856],       [ 0.        ,  0.83619237],       [ 0.06973965,  0.69027185],       [ 0.        ,  1.47352868],       [ 0.        ,  1.13115408],       [ 0.10780761,  0.75055337],       [ 0.        ,  0.69127399],       [ 0.        ,  0.84675431],       [ 0.00792608,  0.54019076],       [ 0.        ,  1.22296047],       [ 0.        ,  0.74884081],       [ 0.10631093,  0.78056335],       [ 0.        ,  0.83659518],       [ 0.16850379,  1.03665638],       [ 0.        ,  0.73455936],       [ 0.14089024,  0.94572282],       [ 0.        ,  1.02912855],       [ 0.        ,  0.87738436],       [ 0.        ,  1.12175512],       [ 0.12713245,  0.75748467]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.66428909e+01],       [  5.47000000e+02,   7.37149477e+00],       [  1.73200000e+03,   5.30315340e-01],       [  5.47700000e+03,   6.59126282e-01],       [  3.16220000e+04,   4.10876185e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   6.72419167e+01],       [  5.47000000e+02,   3.88975096e+00,   1.11134005e+01],       [  1.73200000e+03,   0.00000000e+00,   1.83946270e+00],       [  5.47700000e+03,   3.86152357e-01,   9.92565215e-01],       [  3.16220000e+04,   2.42278591e-01,   6.38219774e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]