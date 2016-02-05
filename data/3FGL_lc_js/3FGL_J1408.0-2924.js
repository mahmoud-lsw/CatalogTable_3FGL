Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 1.11892629,  2.1937077 ,  3.23468924,  2.59085464,  0.        ,        1.85165036,  2.49515438,  5.57388067,  2.6744771 ,  0.51005584,        1.30200672,  2.37303996,  3.25326157,  0.43448392,  0.        ,        0.36475265,  2.6295557 ,  2.85152197,  1.17801213,  1.9694916 ,        0.09906735,  2.51061106,  0.96991402,  2.32227421,  4.00469589,        0.        ,  4.48129368,  0.45192358,  3.14880705,  0.        ,        4.84284067,  0.59059018,  0.        ,  0.        ,  3.04778457,        3.83822894,  0.        ,  4.51238537,  2.0152185 ,  3.22711563,        2.08343053,  0.08049954,  1.19400477,  2.21646976,  2.86945629,        0.34208381,  1.84770596,  4.73307037]
FluxHistoryError = [[ 0.        ,  4.53733778],       [ 0.41257215,  4.09516907],       [ 1.69740605,  4.91596127],       [ 1.08014274,  4.40349293],       [ 0.        ,  2.77870798],       [ 0.20606482,  3.7168076 ],       [ 0.9912132 ,  4.16644287],       [ 3.48355174,  7.82038736],       [ 1.12575734,  4.3652668 ],       [ 0.        ,  4.01994306],       [ 0.        ,  4.90213776],       [ 1.02262509,  3.85812235],       [ 1.24536419,  5.42339659],       [ 0.        ,  3.42995086],       [ 0.        ,  3.36956167],       [ 0.        ,  4.12568486],       [ 0.93204844,  4.45752239],       [ 0.95938909,  4.97510195],       [ 0.11124825,  2.51413131],       [ 0.        ,  6.5615288 ],       [ 0.        ,  3.33610548],       [ 0.97715998,  4.32392359],       [ 0.        ,  4.31508571],       [ 0.82906044,  3.97191191],       [ 2.0962944 ,  6.1044693 ],       [ 0.        ,  2.49807453],       [ 2.33592534,  6.98834515],       [ 0.        ,  3.53367493],       [ 1.09018421,  5.32319736],       [ 0.        ,  2.7461884 ],       [ 3.17553449,  6.67818499],       [ 0.        ,  4.21803159],       [ 0.        ,  2.48804879],       [ 0.        ,  4.1947298 ],       [ 1.43566644,  4.71655464],       [ 1.68983984,  6.18012714],       [ 0.        ,  3.32925081],       [ 2.77520657,  6.41167259],       [ 0.12299204,  4.11366463],       [ 1.66478133,  4.91710854],       [ 0.25513208,  4.12742329],       [ 0.        ,  3.12691415],       [ 0.        ,  4.97689605],       [ 0.37060916,  4.21774006],       [ 1.09805691,  4.8136816 ],       [ 0.        ,  4.07856047],       [ 0.44963264,  3.35355353],       [ 2.15354419,  7.54490566]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.38748901e+02],       [  5.47000000e+02,   2.95553761e+01],       [  1.73200000e+03,   2.96792364e+00],       [  5.47700000e+03,   1.71701893e-01],       [  3.16220000e+04,   6.30332623e-03]]
SpectrumError = [[  1.73000000e+02,   1.06759094e+02,   1.71105255e+02],       [  5.47000000e+02,   2.40171490e+01,   3.52599335e+01],       [  1.73200000e+03,   1.97769141e+00,   4.05488205e+00],       [  5.47700000e+03,   0.00000000e+00,   7.40840957e-01],       [  3.16220000e+04,   0.00000000e+00,   3.15198378e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]