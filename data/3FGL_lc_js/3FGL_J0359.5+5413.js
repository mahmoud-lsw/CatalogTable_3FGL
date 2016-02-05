Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 2.92928362,  3.26050973,  5.03741932,  2.55507278,  4.6762352 ,        3.65552807,  0.54916972,  5.45665741,  4.47083282,  2.85043287,        3.65344977,  3.57196116,  5.06104183,  2.14693737,  3.62762809,        5.44782877,  4.24897671,  1.72696435,  3.51515841,  4.67577553,        3.3094151 ,  4.13908815,  1.85493362,  3.85424471,  4.83728313,        3.32400322,  4.22103357,  2.2590251 ,  2.61639071,  3.9937253 ,        3.24149489,  3.24901342,  3.19780445,  2.39475632,  3.64450026,        2.66711402,  1.41667879,  4.12985706,  3.35871387,  3.05425882,        4.07971764,  1.96913528,  2.68220592,  2.17133379,  4.47332239,        3.46333456,  2.05869365,  3.59655809]
FluxHistoryError = [[ 1.58485687,  4.43456841],       [ 1.98166919,  4.6860981 ],       [ 3.60789609,  6.58938026],       [ 1.26505244,  3.93710232],       [ 3.26136899,  6.22120237],       [ 2.49429798,  4.93890524],       [ 0.        ,  3.31848425],       [ 3.95362401,  7.10326004],       [ 3.16127539,  5.89836168],       [ 1.48798835,  4.36772013],       [ 2.35994816,  5.07051229],       [ 2.32087612,  4.95226002],       [ 3.71521068,  6.53676224],       [ 1.13273346,  3.30557299],       [ 2.33856177,  5.0556488 ],       [ 3.96720576,  7.0613389 ],       [ 2.98618984,  5.61922836],       [ 0.61162543,  3.04114962],       [ 2.37863994,  4.78131104],       [ 3.35146666,  6.1245718 ],       [ 1.99363077,  4.74676847],       [ 2.93588686,  5.45661831],       [ 0.81191111,  3.07313418],       [ 2.59225821,  5.22187805],       [ 3.45543647,  6.33271694],       [ 2.13312674,  4.63205242],       [ 2.92669797,  5.63233662],       [ 1.09955084,  3.53873634],       [ 1.37306726,  4.01595116],       [ 2.58621645,  5.51741886],       [ 2.08536863,  4.5012598 ],       [ 1.91938889,  4.70617008],       [ 1.89778864,  4.62076902],       [ 1.06370747,  3.84522438],       [ 2.26010609,  5.11903572],       [ 1.50476384,  3.9643116 ],       [ 0.39871061,  2.58390188],       [ 2.63575983,  5.73347902],       [ 2.01258087,  4.8295269 ],       [ 1.94774389,  4.27050686],       [ 2.80532837,  5.46779299],       [ 0.91883063,  3.16593122],       [ 1.52137244,  3.98174882],       [ 0.95178044,  3.50781393],       [ 3.19571018,  5.86416388],       [ 2.22722578,  4.81853247],       [ 0.91246223,  3.32200718],       [ 2.50850892,  4.80259705]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   2.16710632e+02],       [  5.47000000e+02,   1.05551750e+02],       [  1.73200000e+03,   2.84496250e+01],       [  5.47700000e+03,   5.24841595e+00],       [  3.16220000e+04,   3.05399517e-05]]
SpectrumError = [[  1.73000000e+02,   1.74866791e+02,   2.58684082e+02],       [  5.47000000e+02,   9.50663681e+01,   1.16153786e+02],       [  1.73200000e+03,   2.57754288e+01,   3.11238213e+01],       [  5.47700000e+03,   4.50995922e+00,   6.03757906e+00],       [  3.16220000e+04,   0.00000000e+00,   3.41451816e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]