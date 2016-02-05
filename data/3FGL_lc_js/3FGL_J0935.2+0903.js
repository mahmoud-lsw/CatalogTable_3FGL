Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.        ,  0.54291612,  2.29269934,  1.6152674 ,        0.29848883,  0.        ,  0.        ,  0.91952986,  1.24276781,        0.        ,  0.55818278,  2.07156396,  0.7082088 ,  1.9944185 ,        0.50553524,  3.2616353 ,  2.02029729,  3.35062194,  0.45601127,        0.32408279,  0.55286813,  0.45658952,  1.66327524,  0.63064891,        0.31575513,  1.37740624,  1.99796426,  0.        ,  3.63272643,        4.31667757,  0.        ,  0.        ,  0.        ,  1.96415591,        2.7516799 ,  4.73711967,  3.20872068,  0.        ,  2.08981872,        0.59239531,  2.47232056,  0.        ,  0.        ,  1.66436887,        1.21238875,  0.41115403,  1.98486602]
FluxHistoryError = [[ 0.        ,  2.73735905],       [ 0.        ,  1.45971489],       [ 0.        ,  2.80774099],       [ 1.36176658,  3.38364601],       [ 0.63748503,  2.73310995],       [ 0.        ,  2.5128307 ],       [ 0.        ,  1.36730027],       [ 0.        ,  2.10039258],       [ 0.06214511,  1.94916415],       [ 0.08081746,  2.55559587],       [ 0.        ,  1.65026391],       [ 0.        ,  2.49667662],       [ 1.06410301,  3.28688383],       [ 0.        ,  3.45091486],       [ 0.67135131,  3.44870138],       [ 0.        ,  3.02013099],       [ 1.84590971,  4.89187813],       [ 0.90178573,  3.36770153],       [ 1.92227769,  5.01290751],       [ 0.        ,  2.51272127],       [ 0.        ,  2.87500042],       [ 0.        ,  2.90540385],       [ 0.01632935,  1.21199155],       [ 0.51982808,  3.06383896],       [ 0.        ,  4.07061487],       [ 0.        ,  2.82426548],       [ 0.26831007,  2.70298147],       [ 0.88631117,  3.31256151],       [ 0.        ,  2.31196213],       [ 2.24351716,  5.2126894 ],       [ 2.72484159,  6.08168316],       [ 0.        ,  3.17989016],       [ 0.        ,  2.38790488],       [ 0.        ,  2.27730131],       [ 0.70615256,  3.47099161],       [ 1.42223775,  4.25026798],       [ 3.14506912,  6.52546787],       [ 1.98347628,  4.63424826],       [ 0.        ,  1.2103827 ],       [ 0.95295238,  3.42140102],       [ 0.        ,  3.24094677],       [ 1.30084383,  3.86558294],       [ 0.        ,  2.84195113],       [ 0.        ,  2.29679179],       [ 0.25458622,  3.28888607],       [ 0.        ,  4.42523885],       [ 0.        ,  2.92827439],       [ 0.65080321,  3.57506013]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   3.22358284e+01],       [  5.47000000e+02,   2.50006428e+01],       [  1.73200000e+03,   4.80581617e+00],       [  5.47700000e+03,   3.54958683e-01],       [  3.16220000e+04,   4.83204030e-06]]
SpectrumError = [[  1.73000000e+02,   3.13271141e+00,   6.20963058e+01],       [  5.47000000e+02,   2.01457481e+01,   2.99936676e+01],       [  1.73200000e+03,   3.81161237e+00,   5.87969303e+00],       [  5.47700000e+03,   1.50356710e-01,   6.37181938e-01],       [  3.16220000e+04,   0.00000000e+00,   3.61183171e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]