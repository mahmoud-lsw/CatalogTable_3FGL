Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.8488583 ,  2.08978224,  0.        ,  3.28652239,  3.35252976,        1.63952088,  4.09305286,  0.        ,  3.16162682,  0.9914003 ,        1.15869105,  3.0978229 ,  3.68109202,  1.02772164,  4.62129068,        2.63001895,  2.38864732,  0.5506044 ,  1.72350478,  0.60256004,        5.38766813,  0.        ,  2.92428088,  3.43006444,  0.81725305,        0.        ,  2.41698718,  0.        ,  1.7256006 ,  2.47918391,        0.        ,  0.42717633,  3.93800116,  3.4726913 ,  0.        ,        5.44660044,  7.00180817,  6.19356394,  3.15891147,  2.81314731,        1.03310716,  3.1589241 ,  0.        ,  0.92434961,  1.87465239,        1.06154704,  2.51236129,  4.48230171]
FluxHistoryError = [[ 0.        ,  3.58363217],       [ 0.82014716,  3.56762743],       [ 0.        ,  4.06173801],       [ 1.55357814,  5.21218681],       [ 2.10581446,  4.78480816],       [ 0.        ,  4.61180949],       [ 2.61553335,  5.73310995],       [ 0.        ,  2.05918264],       [ 1.5831368 ,  4.95764303],       [ 0.        ,  3.32253128],       [ 0.        ,  4.61319888],       [ 1.63119078,  4.69803619],       [ 1.95496571,  5.55655193],       [ 0.        ,  4.70686245],       [ 3.39314222,  5.93698215],       [ 0.89302564,  4.45333195],       [ 1.22324622,  3.76055694],       [ 0.        ,  3.03715926],       [ 0.0937165 ,  3.52327609],       [ 0.        ,  3.77002811],       [ 3.69614506,  7.23974895],       [ 0.        ,  1.90851474],       [ 1.04621947,  5.30841541],       [ 2.36952758,  4.6651516 ],       [ 0.11957353,  1.79135036],       [ 0.        ,  3.10514927],       [ 1.46743059,  3.5753541 ],       [ 0.        ,  3.74440742],       [ 0.07321358,  3.45668292],       [ 1.21255457,  3.93380213],       [ 0.        ,  3.44406033],       [ 0.        ,  4.56563696],       [ 2.55305958,  5.44738293],       [ 2.20796633,  4.85191059],       [ 0.        ,  3.62089372],       [ 3.84458327,  7.08972692],       [ 5.32877111,  8.82454872],       [ 4.14206362,  8.32813931],       [ 1.83243656,  4.73733282],       [ 1.22498441,  4.54957771],       [ 0.        ,  3.52912652],       [ 1.89554679,  4.56724644],       [ 0.        ,  2.11707997],       [ 0.1631068 ,  2.07652712],       [ 0.61301231,  3.33759785],       [ 0.        ,  4.8895154 ],       [ 1.38713467,  3.77801943],       [ 3.28397155,  5.83246231]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.64044601e+02],       [  5.47000000e+02,   4.44127655e+01],       [  1.73200000e+03,   6.67352629e+00],       [  5.47700000e+03,   1.22666442e+00],       [  3.16220000e+04,   3.50215212e-02]]
SpectrumError = [[  1.73000000e+02,   1.01552963e+02,   2.26824478e+02],       [  5.47000000e+02,   3.78337936e+01,   5.11115761e+01],       [  1.73200000e+03,   5.52567196e+00,   7.90447617e+00],       [  5.47700000e+03,   8.76056552e-01,   1.64040589e+00],       [  3.16220000e+04,   0.00000000e+00,   3.72993119e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]