Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [  35.49519348,  111.59648132,   29.76984215,   24.3617115 ,         26.17263222,  154.53677368,   58.43052292,  315.47436523,        222.61521912,  180.57620239,  149.90380859,  111.43103027,         43.9753952 ,   30.31215477,   39.65323257,   42.83444977,        144.12214661,  119.84290314,   46.90079117,   56.28805923,         62.78763962,   49.9252243 ,   31.15178871,   58.15281296,         65.3780365 ,   39.07704926,   32.21601486,   23.11361504,         35.93870163,   32.75761032,   45.20565414,   19.42992783,         57.47293091,   30.887146  ,   75.39325714,  138.09486389,         91.48636627,   41.97819138,  253.3210907 ,  256.63842773,         40.81054688,   89.24842834,  396.16989136,  285.9430542 ,         76.74318695,   38.38450623,   35.91304779,   29.89501381]
FluxHistoryError = [[  31.75742722,   39.23295975],       [ 106.54340363,  116.64955902],       [  26.79045486,   32.74922943],       [  20.99976921,   27.79167366],       [  22.99207306,   29.35319138],       [ 148.82853699,  160.24501038],       [  54.5402832 ,   62.32076263],       [ 308.90200806,  322.04672241],       [ 216.50883484,  228.72160339],       [ 174.71974182,  186.43266296],       [ 144.02044678,  155.78717041],       [ 107.45735931,  115.40470123],       [  40.11537933,   47.83541107],       [  26.71310043,   33.98329926],       [  35.40775681,   43.89870834],       [  38.87826157,   46.79063797],       [ 138.08595276,  150.15834045],       [ 113.24472809,  126.44107819],       [  43.02276993,   50.77881241],       [  51.06507111,   61.51104736],       [  58.05661392,   67.51866913],       [  45.35416412,   54.49628448],       [  27.4122467 ,   35.02013397],       [  53.82169342,   62.4839325 ],       [  60.6752243 ,   70.08084869],       [  35.01046371,   43.1436348 ],       [  27.96358109,   36.54628372],       [  19.5896492 ,   26.74738312],       [  31.92980194,   39.94760132],       [  29.05216599,   36.46305466],       [  41.11991119,   49.29139709],       [  16.0908699 ,   22.89798164],       [  53.43467712,   61.51118469],       [  26.72629738,   35.18437576],       [  71.1013031 ,   79.68521118],       [ 131.83050537,  144.35922241],       [  86.35208893,   96.62064362],       [  37.79395676,   46.16242599],       [ 246.24728394,  260.39489746],       [ 249.93676758,  263.34008789],       [  36.1446991 ,   45.55662537],       [  84.49028778,   94.00656891],       [ 387.50210571,  404.837677  ],       [ 277.63186646,  294.25424194],       [  71.79246521,   81.69390869],       [  33.97374725,   42.91960907],       [  32.16443634,   39.66165924],       [  25.33704948,   34.32805634]], dtype=float32
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   6.96768018e+03],       [  5.47000000e+02,   1.89369287e+03],       [  1.73200000e+03,   3.37725159e+02],       [  5.47700000e+03,   6.25398178e+01],       [  3.16220000e+04,   8.67296124e+00]]
SpectrumError = [[  1.73000000e+02,   6.85500635e+03,   7.08035400e+03],       [  5.47000000e+02,   1.87289575e+03,   1.91448999e+03],       [  1.73200000e+03,   3.31829010e+02,   3.43621307e+02],       [  5.47700000e+03,   6.02507095e+01,   6.48289261e+01],       [  3.16220000e+04,   7.81218338e+00,   9.53373909e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]