Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.24625415,  0.        ,  0.        ,  0.        ,  0.        ,        0.        ,  0.18139134,  0.        ,  0.        ,  0.        ,        0.49488777,  0.51288092,  0.        ,  0.        ,  0.17635705,        0.        ,  0.        ,  0.64425832,  0.15671393,  0.        ,        0.09804935,  0.        ,  0.        ,  0.        ,  0.        ,        0.25526544,  0.        ,  0.25149065,  0.        ,  0.2063975 ,        0.31116429,  0.        ,  0.        ,  0.09079886,  0.        ,        0.76698887,  0.3138164 ,  0.        ,  0.        ,  0.        ,        0.57580018,  0.24185888,  0.        ,  0.74233574,  0.        ,        0.60919482,  0.27170929,  0.        ]
FluxHistoryError = [[ 0.        ,  1.39809519],       [ 0.        ,  0.87383229],       [ 0.        ,  0.70358354],       [ 0.        ,  1.1122092 ],       [ 0.        ,  0.70517254],       [ 0.        ,  0.70480287],       [ 0.        ,  1.30212735],       [ 0.        ,  0.96546298],       [ 0.        ,  0.88672918],       [ 0.        ,  0.85584676],       [ 0.21416265,  0.89727354],       [ 0.20943853,  0.92614007],       [ 0.        ,  0.88272572],       [ 0.        ,  0.85956573],       [ 0.        ,  1.24030234],       [ 0.        ,  0.87215364],       [ 0.        ,  0.79929477],       [ 0.18636876,  1.24646664],       [ 0.        ,  0.93135145],       [ 0.        ,  0.74846953],       [ 0.        ,  0.76702309],       [ 0.        ,  1.22619617],       [ 0.        ,  0.77442259],       [ 0.        ,  0.82445449],       [ 0.        ,  0.72595352],       [ 0.05901615,  0.60700876],       [ 0.        ,  1.04549682],       [ 0.04588172,  0.56719047],       [ 0.        ,  0.98086613],       [ 0.06193621,  0.47164544],       [ 0.08321597,  0.67019635],       [ 0.        ,  1.25276172],       [ 0.        ,  0.63380945],       [ 0.        ,  1.33355475],       [ 0.        ,  0.69888377],       [ 0.16586423,  1.53343582],       [ 0.        ,  1.33535168],       [ 0.        ,  0.93930107],       [ 0.        ,  0.76166415],       [ 0.        ,  0.51776123],       [ 0.02653176,  1.29626393],       [ 0.0353515 ,  0.59621459],       [ 0.        ,  0.91490877],       [ 0.33501297,  1.3068378 ],       [ 0.        ,  1.15740967],       [ 0.25877595,  1.10213089],       [ 0.08694766,  0.6328541 ],       [ 0.        ,  0.89215416]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   2.89791322e+00],       [  5.47000000e+02,   1.40544546e+00],       [  1.73200000e+03,   9.43070531e-01],       [  5.47700000e+03,   3.26252759e-01],       [  3.16220000e+04,   4.04754996e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   5.15766127e+01],       [  5.47000000e+02,   0.00000000e+00,   9.27692211e+00],       [  1.73200000e+03,   2.40493536e-01,   1.74704003e+00],       [  5.47700000e+03,   1.02259248e-01,   6.18164659e-01],       [  3.16220000e+04,   2.45300815e-01,   6.15455270e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]