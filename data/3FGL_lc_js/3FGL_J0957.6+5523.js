Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [  9.59156799,   8.16243076,  10.33452034,   7.95364046,         8.51677036,   9.81077003,   9.67583466,   9.26825619,         8.94762421,   6.98506451,   9.88611507,   9.21279526,         8.90842342,   7.5656724 ,   8.39939594,   8.84410858,         7.56882048,   7.1869545 ,  10.27209568,   9.81260204,         7.87925911,   8.9495306 ,   9.99223232,   7.9973979 ,         9.6432848 ,   9.6526165 ,   9.11951065,   9.61594677,         9.08295059,   9.2744503 ,   6.77065945,   7.09153128,         8.67689705,   7.70306206,   8.17638683,   9.68434048,         8.42481804,   9.56290722,   8.47037792,   9.32685852,         9.8881216 ,   9.50592327,   8.25078773,   7.88426876,         7.4337883 ,   8.13851643,   7.593328  ,   9.44564724]
FluxHistoryError = [[  8.40672588,  10.85053444],       [  7.1512208 ,   9.22823429],       [  9.19104958,  11.54155922],       [  6.96944904,   8.99894333],       [  7.4826293 ,   9.61164188],       [  8.70436859,  10.9710474 ],       [  8.59189034,  10.8194437 ],       [  8.0901432 ,  10.50311279],       [  7.88469887,  10.07115746],       [  6.0153017 ,   8.0219326 ],       [  8.8106842 ,  11.02020931],       [  8.14474201,  10.32639599],       [  7.84158611,  10.03815746],       [  6.57711029,   8.61736488],       [  7.49430609,   9.34121132],       [  7.83907938,   9.90937805],       [  6.66129494,   8.52219582],       [  6.27022743,   8.16093159],       [  9.25201416,  11.34421539],       [  8.83189011,  10.84107304],       [  6.91151619,   8.91235161],       [  7.9865489 ,   9.96506691],       [  8.94404697,  11.09716988],       [  7.10291767,   8.94452286],       [  8.57614899,  10.74030113],       [  8.60827446,  10.75484753],       [  8.17939186,  10.10959244],       [  8.55644512,  10.71121407],       [  8.14117432,  10.07441235],       [  8.20672131,  10.40351677],       [  5.91420603,   7.68048191],       [  6.09096432,   8.15704536],       [  7.61073542,   9.80939484],       [  6.81720734,   8.64051819],       [  7.23002195,   9.17722988],       [  8.72354031,  10.70287704],       [  7.38761711,   9.52619267],       [  8.51827526,  10.65606976],       [  7.47764587,   9.51796532],       [  8.34551334,  10.34591103],       [  8.88405418,  10.89218903],       [  8.45650768,  10.61130047],       [  7.32721043,   9.2237606 ],       [  6.88815403,   8.92310715],       [  6.53556633,   8.3685627 ],       [  7.14923763,   9.18647957],       [  6.65007782,   8.59060955],       [  8.43379498,  10.50212955]], dtype=float32
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   5.53668701e+02],       [  5.47000000e+02,   2.39899109e+02],       [  1.73200000e+03,   7.59874039e+01],       [  5.47700000e+03,   2.35977383e+01],       [  3.16220000e+04,   6.37151766e+00]]
SpectrumError = [[  1.73000000e+02,   5.29739746e+02,   5.77597656e+02],       [  5.47000000e+02,   2.33697876e+02,   2.46100342e+02],       [  1.73200000e+03,   7.35602646e+01,   7.84145432e+01],       [  5.47700000e+03,   2.23868237e+01,   2.48086529e+01],       [  3.16220000e+04,   5.75272226e+00,   6.99031305e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]