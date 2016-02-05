Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 1.03758538,  0.26604682,  0.        ,  0.05703347,  0.66748172,        0.65452623,  0.        ,  0.        ,  0.6946702 ,  0.49854991,        0.5074954 ,  0.60695487,  0.91671425,  1.15479469,  0.        ,        0.42308766,  0.        ,  0.        ,  0.67984509,  1.62871122,        1.23926711,  2.4642694 ,  1.34800732,  1.89527893,  0.82634515,        1.02021861,  3.3324945 ,  3.00374627,  0.75778902,  0.        ,        0.91155273,  0.87612778,  1.3052913 ,  1.29591238,  0.64280391,        0.47099879,  0.        ,  1.33385313,  1.80840659,  0.1351155 ,        0.        ,  0.08618918,  1.39650464,  2.00643826,  0.50370443,        0.02816703,  1.89211118,  0.64896047]
FluxHistoryError = [[ 0.27984059,  1.95394492],       [ 0.        ,  1.33069152],       [ 0.        ,  1.18087971],       [ 0.        ,  1.67986935],       [ 0.17988136,  1.30723703],       [ 0.        ,  2.17512023],       [ 0.        ,  0.77161431],       [ 0.        ,  1.61486971],       [ 0.25626543,  1.21179581],       [ 0.09922764,  1.08575642],       [ 0.        ,  1.99243653],       [ 0.15136424,  1.22200632],       [ 0.29857212,  1.70529521],       [ 0.57373142,  1.94314361],       [ 0.        ,  1.7104547 ],       [ 0.        ,  2.47261578],       [ 0.        ,  1.27834904],       [ 0.        ,  1.25367105],       [ 0.14003772,  1.48978615],       [ 0.93301904,  2.49478626],       [ 0.57670671,  2.05714965],       [ 1.51556802,  3.53666496],       [ 0.45091671,  2.38096046],       [ 1.11288118,  2.82181525],       [ 0.18125796,  1.64779592],       [ 0.3795954 ,  1.93640304],       [ 2.31563187,  4.49530602],       [ 1.94360983,  4.1961565 ],       [ 0.12626213,  1.57550454],       [ 0.        ,  1.01801014],       [ 0.37316132,  1.6508764 ],       [ 0.22541314,  1.78323567],       [ 0.57881975,  2.24250603],       [ 0.56274235,  2.22263598],       [ 0.23396876,  1.24173522],       [ 0.        ,  2.27692822],       [ 0.        ,  2.47832394],       [ 0.60212886,  2.2678256 ],       [ 1.03858829,  2.72589207],       [ 0.        ,  1.82325888],       [ 0.        ,  1.5387702 ],       [ 0.        ,  1.70618466],       [ 0.73742193,  2.24048829],       [ 1.17038655,  3.00283098],       [ 0.        ,  2.6790911 ],       [ 0.        ,  1.48098041],       [ 1.12006855,  2.82637167],       [ 0.18018642,  1.38704407]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   4.47954788e+01],       [  5.47000000e+02,   1.79283447e+01],       [  1.73200000e+03,   4.60413933e+00],       [  5.47700000e+03,   1.45116067e+00],       [  3.16220000e+04,   8.07655454e-01]]
SpectrumError = [[  1.73000000e+02,   7.94077682e+00,   8.30702667e+01],       [  5.47000000e+02,   1.34580145e+01,   2.26857681e+01],       [  1.73200000e+03,   3.63314867e+00,   5.65956259e+00],       [  5.47700000e+03,   1.05588830e+00,   1.90831590e+00],       [  3.16220000e+04,   5.55700481e-01,   1.11256957e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]