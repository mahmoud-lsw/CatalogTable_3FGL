Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.98460877,  1.68867636,  1.26191306,  2.98796964,  0.77212894,        1.47213066,  2.54983974,  1.881055  ,  2.58829403,  2.52910113,        2.92849755,  1.28289664,  3.88779211,  2.96069145,  2.46634436,        2.59758019,  1.70531929,  2.26762772,  0.        ,  3.19282556,        2.75319767,  1.19940817,  3.35672355,  0.61369872,  1.97023058,        0.54324937,  1.95363939,  2.05722189,  1.72761238,  1.79863679,        2.36644721,  6.74556875,  4.63733435,  2.88649154,  4.29948521,        4.44927168,  2.87323284,  4.61443615,  5.08879328,  4.43665981,        4.50113106,  3.38289213,  5.23789215,  4.5755744 ,  6.86491919,        3.51617408,  4.28787613,  2.21717691]
FluxHistoryError = [[ 0.37821072,  1.75649667],       [ 0.97392619,  2.54104209],       [ 0.63786209,  2.03309965],       [ 2.15482473,  3.91583371],       [ 0.06936526,  1.61720824],       [ 0.81307751,  2.23923159],       [ 1.70852542,  3.5171206 ],       [ 1.09019375,  2.8304739 ],       [ 1.78916132,  3.50209188],       [ 1.70725298,  3.48343992],       [ 2.1481781 ,  3.80172062],       [ 0.5853337 ,  2.14686775],       [ 2.99925852,  4.87078571],       [ 1.89105129,  4.20883608],       [ 1.57401395,  3.5133388 ],       [ 1.48597503,  3.88831663],       [ 0.93961525,  2.62957501],       [ 1.48277926,  3.17434359],       [ 0.        ,  2.12530494],       [ 2.20148945,  4.30756903],       [ 1.5733732 ,  4.11845207],       [ 0.35443288,  2.16529417],       [ 2.33057213,  4.52703953],       [ 0.        ,  2.53395236],       [ 1.14971328,  2.91276693],       [ 0.        ,  2.83781052],       [ 1.11722016,  2.92478037],       [ 1.22365975,  3.06745529],       [ 0.96597475,  2.61149836],       [ 0.95208859,  2.82450056],       [ 1.47377086,  3.39439487],       [ 5.35238838,  8.25900173],       [ 3.31709719,  6.1285224 ],       [ 2.01865888,  3.85878778],       [ 3.1525135 ,  5.55819368],       [ 3.49316049,  5.51518679],       [ 1.77666807,  4.11687136],       [ 3.39116526,  5.99349213],       [ 3.9732976 ,  6.31785774],       [ 3.27671385,  5.74377966],       [ 3.41823506,  5.69425583],       [ 2.20514822,  4.73489809],       [ 4.13055134,  6.45362711],       [ 3.46337891,  5.81969643],       [ 5.48012733,  8.3667841 ],       [ 2.49377942,  4.65520763],       [ 3.10241795,  5.62811089],       [ 1.46502948,  3.09997725]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.49970047e+02],       [  5.47000000e+02,   6.58454514e+01],       [  1.73200000e+03,   1.48959846e+01],       [  5.47700000e+03,   4.39923906e+00],       [  3.16220000e+04,   1.03422427e+00]]
SpectrumError = [[  1.73000000e+02,   1.25475479e+02,   1.74838470e+02],       [  5.47000000e+02,   6.06279755e+01,   7.10629272e+01],       [  1.73200000e+03,   1.34666605e+01,   1.63253098e+01],       [  5.47700000e+03,   3.78219557e+00,   5.08011627e+00],       [  3.16220000e+04,   7.59475708e-01,   1.36054397e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]