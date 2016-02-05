Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.        ,  0.        ,  0.38679171,  0.7997002 ,        1.5756315 ,  1.41464436,  1.78445041,  0.        ,  0.42262331,        1.52887392,  1.49443209,  1.26830041,  1.2145288 ,  0.        ,        0.44667506,  1.04521227,  2.30757308,  1.74623764,  1.04342663,        0.52500641,  1.32448959,  0.        ,  0.        ,  1.51758611,        0.56966096,  1.97638035,  4.99484587,  0.2678569 ,  5.50133085,        2.59030986,  1.72565079,  1.4925375 ,  2.12010741,  1.47741365,        0.24019352,  0.        ,  0.33602738,  0.        ,  0.81449753,        0.99420971,  0.        ,  0.        ,  0.        ,  0.        ,        2.1884923 ,  0.4735046 ,  2.72316766]
FluxHistoryError = [[ 0.        ,  2.95726824],       [ 0.        ,  2.99622631],       [ 0.        ,  1.23135734],       [ 0.        ,  2.79710698],       [ 0.        ,  3.27159494],       [ 0.60610551,  2.70882034],       [ 0.32805777,  2.78027511],       [ 0.47827852,  3.25584269],       [ 0.        ,  1.57678533],       [ 0.        ,  3.38519731],       [ 0.38776326,  2.79888535],       [ 0.22632837,  2.94144464],       [ 0.14677465,  2.46687937],       [ 0.        ,  5.06278634],       [ 0.        ,  2.84531522],       [ 0.        ,  4.18794298],       [ 0.24254555,  2.18574238],       [ 0.91716242,  3.87552857],       [ 0.20127773,  3.52365541],       [ 0.06878096,  2.24736476],       [ 0.        ,  4.56491578],       [ 0.19826269,  2.65619493],       [ 0.        ,  2.82503366],       [ 0.        ,  1.82292426],       [ 0.27523053,  2.94558716],       [ 0.        ,  4.05763251],       [ 0.76812637,  3.44907904],       [ 3.10702038,  7.07250547],       [ 0.        ,  2.35553223],       [ 3.7157526 ,  7.45048094],       [ 1.29597211,  4.06425095],       [ 0.50656033,  3.32593679],       [ 0.11173415,  3.24569798],       [ 0.88781548,  3.4945159 ],       [ 0.02679884,  3.13165855],       [ 0.        ,  2.50559989],       [ 0.        ,  2.95485282],       [ 0.        ,  3.88335729],       [ 0.        ,  1.98846328],       [ 0.        ,  3.95761925],       [ 0.        ,  3.8656587 ],       [ 0.        ,  3.48767853],       [ 0.        ,  2.12617588],       [ 0.        ,  2.8557353 ],       [ 0.        ,  2.4250474 ],       [ 1.03818071,  3.53527212],       [ 0.        ,  3.5550788 ],       [ 1.56329775,  4.02159691]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   4.47116814e+01],       [  5.47000000e+02,   1.86523037e+01],       [  1.73200000e+03,   1.67421126e+00],       [  5.47700000e+03,   6.50392249e-02],       [  3.16220000e+04,   1.04285809e-05]]
SpectrumError = [[  1.73000000e+02,   1.42992935e+01,   7.54378662e+01],       [  5.47000000e+02,   1.41790123e+01,   2.32787018e+01],       [  1.73200000e+03,   9.67264414e-01,   2.48795366e+00],       [  5.47700000e+03,   0.00000000e+00,   6.23509653e-01],       [  3.16220000e+04,   0.00000000e+00,   2.94249771e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]