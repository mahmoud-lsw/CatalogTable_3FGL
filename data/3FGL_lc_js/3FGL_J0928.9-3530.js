Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  2.68559551,  3.41260672,  2.21497107,  3.35910797,        0.1859567 ,  2.5686605 ,  6.53893852,  3.20536017,  1.6331501 ,        0.90355104,  0.35876492,  0.        ,  2.40424991,  1.06676841,        0.        ,  1.60488641,  1.24839187,  2.48985815,  0.42941988,        1.68205643,  2.49790049,  3.0568881 ,  0.        ,  2.82606721,        1.51969242,  4.45996857,  0.48721293,  0.380992  ,  2.33287573,        1.26193571,  1.94250751,  4.36440277,  2.12887526,  3.5322299 ,        0.75293511,  1.5201211 ,  5.31724644,  4.46545172,  0.        ,        0.        ,  3.1425004 ,  1.36344433,  3.15233874,  1.56644249,        1.29638457,  0.75726742,  2.3377142 ]
FluxHistoryError = [[ 0.        ,  4.71001863],       [ 1.17116725,  4.33990765],       [ 1.66190922,  5.35077381],       [ 0.68311   ,  3.98099756],       [ 1.97576356,  4.91931486],       [ 0.        ,  3.70993827],       [ 1.25805151,  4.11829662],       [ 4.34443903,  8.9027195 ],       [ 1.75916278,  4.84133911],       [ 0.37409091,  3.25023317],       [ 0.        ,  4.02700633],       [ 0.        ,  3.37091234],       [ 0.        ,  2.68717289],       [ 0.89665997,  4.07471323],       [ 0.        ,  5.88332963],       [ 0.        ,  2.87657642],       [ 0.01682496,  3.58946586],       [ 0.        ,  4.41057539],       [ 1.15781927,  4.1027236 ],       [ 0.        ,  3.85980403],       [ 0.55236804,  3.01205254],       [ 0.89379382,  4.4572835 ],       [ 1.58057594,  4.70643568],       [ 0.        ,  3.76333594],       [ 1.49567783,  4.32391787],       [ 0.        ,  5.45010686],       [ 2.42885828,  6.65532875],       [ 0.        ,  3.72069862],       [ 0.        ,  4.73287874],       [ 0.68437719,  4.07787037],       [ 0.        ,  5.36686182],       [ 0.41548681,  3.66501713],       [ 2.42052078,  6.46622753],       [ 0.46457064,  4.10931635],       [ 1.9127779 ,  5.28359032],       [ 0.        ,  4.95014971],       [ 0.46667349,  2.91221333],       [ 2.93639255,  7.90464067],       [ 2.53436184,  6.49811888],       [ 0.        ,  3.27025986],       [ 0.        ,  3.83604336],       [ 1.54297984,  4.86945677],       [ 0.36099017,  2.81901145],       [ 1.59197676,  4.86438799],       [ 0.        ,  5.61879826],       [ 0.48340535,  2.42670178],       [ 0.        ,  4.12582487],       [ 0.33956873,  4.53702497]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   2.16722916e+02],       [  5.47000000e+02,   2.17451973e+01],       [  1.73200000e+03,   3.90375257e+00],       [  5.47700000e+03,   1.27152240e+00],       [  3.16220000e+04,   1.36269063e-01]]
SpectrumError = [[  1.73000000e+02,   1.82501190e+02,   2.51421692e+02],       [  5.47000000e+02,   1.57245913e+01,   2.80476265e+01],       [  1.73200000e+03,   2.69887757e+00,   5.20890284e+00],       [  5.47700000e+03,   9.08508301e-01,   1.69648576e+00],       [  3.16220000e+04,   3.49918976e-02,   3.03943753e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]