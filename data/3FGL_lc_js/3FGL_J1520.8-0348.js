Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.        ,  0.68806189,  1.91698611,  1.08386636,        0.74072319,  0.9222731 ,  0.52701759,  0.19190232,  0.67648858,        1.38079917,  0.12435897,  0.24147488,  1.47470033,  1.43338192,        1.88430429,  1.09190285,  0.77358425,  0.75429505,  0.996692  ,        0.51498562,  1.80936205,  1.11666894,  0.        ,  0.        ,        0.68360955,  0.7507574 ,  0.96896076,  1.1776036 ,  1.89657485,        1.86827111,  0.49382797,  0.        ,  1.31739497,  0.9978897 ,        0.        ,  0.91726315,  1.97118199,  0.8890993 ,  0.39740601,        2.11469579,  0.15958054,  0.68214053,  0.935489  ,  1.08606017,        1.80232608,  0.54240388,  0.56639504]
FluxHistoryError = [[ 0.        ,  1.41181922],       [ 0.        ,  1.00976038],       [ 0.27336687,  1.23313773],       [ 1.23738253,  2.70194244],       [ 0.60115123,  1.67616999],       [ 0.35683787,  1.2853961 ],       [ 0.50413167,  1.4472146 ],       [ 0.17085806,  1.11338389],       [ 0.        ,  1.22935526],       [ 0.21429846,  1.29503036],       [ 0.75185448,  2.13829541],       [ 0.        ,  1.42898257],       [ 0.02400477,  0.67190731],       [ 0.80640477,  2.29064608],       [ 0.73673683,  2.30288649],       [ 1.19556642,  2.73204374],       [ 0.46690708,  1.92086136],       [ 0.21898091,  1.56024432],       [ 0.30497119,  1.3723135 ],       [ 0.47146249,  1.73172402],       [ 0.09354496,  1.20286131],       [ 0.98827606,  2.77550769],       [ 0.49288988,  1.91682673],       [ 0.        ,  1.54146314],       [ 0.        ,  1.02446651],       [ 0.10710752,  1.40996575],       [ 0.32774487,  1.37378776],       [ 0.43491542,  1.68415308],       [ 0.52041125,  2.0331049 ],       [ 1.1211946 ,  2.77323747],       [ 1.09631109,  2.81300497],       [ 0.13503382,  1.12176585],       [ 0.        ,  1.47131491],       [ 0.70865172,  2.08018756],       [ 0.52292562,  1.61415124],       [ 0.        ,  1.24118435],       [ 0.30425924,  1.73686147],       [ 1.06159854,  3.0353651 ],       [ 0.25155151,  1.71605396],       [ 0.08692971,  0.89723647],       [ 1.2677052 ,  3.12374115],       [ 0.        ,  1.51085038],       [ 0.25565812,  1.31008744],       [ 0.40784657,  1.65293002],       [ 0.50822634,  1.81569445],       [ 0.96733606,  2.81452537],       [ 0.076601  ,  1.20688522],       [ 0.1471906 ,  1.28342175]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   2.73075891e+00],       [  5.47000000e+02,   1.51281481e+01],       [  1.73200000e+03,   6.69394684e+00],       [  5.47700000e+03,   4.11206293e+00],       [  3.16220000e+04,   1.35439229e+00]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   6.62035334e+01],       [  5.47000000e+02,   9.64159298e+00,   2.07784386e+01],       [  1.73200000e+03,   5.32778215e+00,   8.15665150e+00],       [  5.47700000e+03,   3.48639107e+00,   4.79684639e+00],       [  3.16220000e+04,   1.02625263e+00,   1.73898590e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]