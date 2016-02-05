Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  1.35281074,  0.4933185 ,  0.96060503,  0.52870375,        0.77257925,  0.94262803,  1.98707819,  1.14939463,  0.36678737,        1.31589305,  0.61819923,  0.26577932,  0.24386573,  0.34783155,        0.50306046,  0.37256309,  0.92436814,  1.57572019,  0.7312302 ,        0.95416832,  0.95991349,  1.24815369,  0.50321871,  0.        ,        0.82182002,  0.42587879,  0.88494331,  1.36363411,  0.04192171,        0.93229228,  2.21718335,  0.24714124,  2.64305925,  0.80660599,        0.94792128,  0.37450641,  0.34225276,  0.13041078,  0.66820377,        1.28593349,  1.35712111,  0.94801688,  0.62096316,  1.34129655,        1.28490484,  0.47022426,  0.        ]
FluxHistoryError = [[ 0.        ,  1.27282047],       [ 0.72851855,  2.05978107],       [ 0.        ,  1.63211507],       [ 0.35706592,  1.65983164],       [ 0.        ,  1.74806458],       [ 0.19556952,  1.44866753],       [ 0.34035498,  1.63731062],       [ 1.28166163,  2.77698803],       [ 0.60158771,  1.78708315],       [ 0.01279557,  0.84258616],       [ 0.71531773,  2.01169658],       [ 0.15215495,  1.15960336],       [ 0.        ,  1.26477289],       [ 0.        ,  1.45984137],       [ 0.        ,  1.56513423],       [ 0.        ,  2.20514023],       [ 0.        ,  1.64310178],       [ 0.1368221 ,  1.84201252],       [ 0.98063558,  2.2436316 ],       [ 0.16982645,  1.41636431],       [ 0.35915798,  1.65103436],       [ 0.40651798,  1.62038159],       [ 0.50492501,  2.04373145],       [ 0.10478577,  0.99376261],       [ 0.        ,  1.20088995],       [ 0.30947411,  1.44100928],       [ 0.        ,  2.07651153],       [ 0.35571158,  1.5054878 ],       [ 0.71684372,  2.08853126],       [ 0.        ,  0.95730457],       [ 0.35949063,  1.58327413],       [ 1.27444935,  3.27915668],       [ 0.        ,  1.5402621 ],       [ 1.7551384 ,  3.63301563],       [ 0.29622734,  1.42960083],       [ 0.40039891,  1.59416187],       [ 0.        ,  1.77935594],       [ 0.        ,  1.50236347],       [ 0.        ,  1.5894867 ],       [ 0.13203186,  1.29621327],       [ 0.56906229,  2.11637402],       [ 0.73220843,  2.05540514],       [ 0.40875471,  1.57044601],       [ 0.1826579 ,  1.17666721],       [ 0.75810379,  1.98607492],       [ 0.47794944,  2.1885612 ],       [ 0.        ,  1.66765404],       [ 0.        ,  1.65729868]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   5.54988708e+01],       [  5.47000000e+02,   3.81675987e+01],       [  1.73200000e+03,   1.22413797e+01],       [  5.47700000e+03,   1.28123879e+00],       [  3.16220000e+04,   7.17031816e-03]]
SpectrumError = [[  1.73000000e+02,   2.96940804e+01,   8.18270721e+01],       [  5.47000000e+02,   3.07360668e+01,   4.57677116e+01],       [  1.73200000e+03,   1.00577183e+01,   1.44922295e+01],       [  5.47700000e+03,   7.95628905e-01,   1.84470630e+00],       [  3.16220000e+04,   0.00000000e+00,   4.49384360e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]