Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [  8.20903397,   6.64099407,   5.22354555,   3.53163981,         5.11980295,   5.36893177,   4.86502171,   2.04187584,         1.19744706,   7.17391253,   5.74235392,   8.22416592,        15.15495014,   3.10375595,   9.2928133 ,   4.21912622,         9.79552841,  23.07076454,   8.8839283 ,   6.99339962,         6.56129599,   9.06013012,   3.31595135,   7.97930241,         3.08564329,   3.51665926,   3.5935638 ,   6.68105507,         4.83645153,   6.85421705,   4.24989033,   8.44361496,        11.37714195,  19.97621918,  10.39917278,   9.51767921,         5.99454451,   7.50716448,   4.04426289,  11.52191067,        14.81348324,   6.61962938,  22.10437202,  13.10993671,        15.57058907,   7.29206419,   6.84810352,   7.05582094]
FluxHistoryError = [[  6.86033916,   9.66253567],       [  5.42313385,   7.9561429 ],       [  4.07542324,   6.46816826],       [  2.55532885,   4.61201763],       [  3.91555333,   6.4239254 ],       [  4.2000165 ,   6.63412571],       [  3.72565603,   6.10656738],       [  1.09823811,   3.14114022],       [  0.44331557,   2.095752  ],       [  5.9148531 ,   8.51922989],       [  4.5340023 ,   7.04740953],       [  6.97974634,   9.55662441],       [ 13.6551218 ,  16.72236633],       [  2.22759604,   4.07352448],       [  8.12027931,  10.52854061],       [  3.29228091,   5.21935368],       [  8.52902317,  11.10625172],       [ 21.46440315,  24.67712593],       [  7.68770742,  10.1432209 ],       [  5.93153667,   8.11976624],       [  5.48469639,   7.71269655],       [  7.86658478,  10.31951618],       [  2.45260525,   4.26126242],       [  6.81092739,   9.2118187 ],       [  2.24997568,   4.00477219],       [  2.56110334,   4.56722355],       [  2.62730384,   4.64693975],       [  5.66880465,   7.75941849],       [  3.85108709,   5.90450239],       [  5.719944  ,   8.05636501],       [  3.23309183,   5.33350992],       [  7.25829124,   9.69785309],       [ 10.00112534,  12.82231903],       [ 18.45222664,  21.50021172],       [  9.18413258,  11.67890549],       [  8.29113674,  10.80651283],       [  4.9414382 ,   7.12098122],       [  6.3071394 ,   8.78439045],       [  3.13157725,   5.03537416],       [ 10.26340866,  12.8397522 ],       [ 13.41771317,  16.20925331],       [  5.53524637,   7.77183771],       [ 20.50982475,  23.6989193 ],       [ 11.80596638,  14.41390705],       [ 14.07110023,  17.0700779 ],       [  6.19899082,   8.46787262],       [  5.75129271,   8.01908112],       [  5.85016584,   8.33919525]], dtype=float32
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   6.63294250e+02],       [  5.47000000e+02,   1.62069183e+02],       [  1.73200000e+03,   3.88227539e+01],       [  5.47700000e+03,   1.11160145e+01],       [  3.16220000e+04,   2.34704828e+00]]
SpectrumError = [[  1.73000000e+02,   6.37342407e+02,   6.89246094e+02],       [  5.47000000e+02,   1.56440384e+02,   1.67697983e+02],       [  1.73200000e+03,   3.70453224e+01,   4.06001854e+01],       [  5.47700000e+03,   1.03069410e+01,   1.19250879e+01],       [  3.16220000e+04,   2.00178623e+00,   2.72869563e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]