Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.        ,  1.10540628,  0.73149115,  0.        ,        1.22124147,  0.14300382,  1.21312022,  1.52393901,  0.        ,        1.01935542,  0.        ,  0.80832046,  1.54318404,  0.        ,        0.9201749 ,  0.37305018,  0.        ,  0.        ,  0.00658541,        0.9536522 ,  0.03169364,  0.35261208,  2.04125333,  0.56575298,        0.86226296,  2.34236789,  2.31701231,  3.17938995,  1.27948868,        2.74269605,  0.10121839,  1.00331461,  0.        ,  0.68001401,        1.71909916,  1.97895837,  1.73512089,  2.78455257,  3.65472102,        2.199332  ,  1.99022686,  0.        ,  0.83771425,  0.89774758,        1.1172601 ,  2.74262238,  0.        ]
FluxHistoryError = [[ 0.        ,  1.88222349],       [ 0.        ,  1.39183676],       [ 0.46628642,  1.95995677],       [ 0.        ,  3.08426148],       [ 0.        ,  1.96431565],       [ 0.14337301,  2.42692351],       [ 0.        ,  2.49435437],       [ 0.        ,  3.94924426],       [ 0.30406368,  2.88570881],       [ 0.        ,  1.86680984],       [ 0.31470776,  1.93102384],       [ 0.        ,  2.54269934],       [ 0.00806236,  1.82738352],       [ 0.26429474,  3.00710297],       [ 0.        ,  3.6104641 ],       [ 0.        ,  3.73263055],       [ 0.        ,  2.82207868],       [ 0.        ,  1.5955596 ],       [ 0.        ,  1.91591918],       [ 0.        ,  3.0856946 ],       [ 0.        ,  3.40466553],       [ 0.        ,  2.54898614],       [ 0.        ,  2.86066228],       [ 0.80082262,  3.28168392],       [ 0.        ,  3.03754616],       [ 0.        ,  3.49561739],       [ 1.08306074,  3.71814251],       [ 1.21621156,  3.55161762],       [ 1.84120774,  4.6884532 ],       [ 0.27971089,  2.45617437],       [ 1.61436474,  4.08039522],       [ 0.        ,  3.56121437],       [ 0.        ,  3.94039142],       [ 0.        ,  2.51861548],       [ 0.        ,  2.77372181],       [ 0.48041201,  3.13151717],       [ 0.91748202,  3.27456522],       [ 0.48843467,  3.23303652],       [ 1.49495792,  4.23721886],       [ 2.26797366,  5.26426888],       [ 0.75687397,  3.87079096],       [ 0.67302251,  3.47868395],       [ 0.        ,  2.73135853],       [ 0.        ,  3.78738052],       [ 0.        ,  3.70254046],       [ 0.        ,  3.83456552],       [ 1.55829096,  4.08637905],       [ 0.        ,  3.07493067]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   8.00615463e+01],       [  5.47000000e+02,   1.38781729e+01],       [  1.73200000e+03,   4.39554405e+00],       [  5.47700000e+03,   9.19803232e-02],       [  3.16220000e+04,   9.87999514e-02]]
SpectrumError = [[  1.73000000e+02,   5.01264725e+01,   1.09513527e+02],       [  5.47000000e+02,   9.21727848e+00,   1.87188797e+01],       [  1.73200000e+03,   3.41795230e+00,   5.45608139e+00],       [  5.47700000e+03,   0.00000000e+00,   6.75046131e-01],       [  3.16220000e+04,   1.55182928e-03,   2.59797990e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]