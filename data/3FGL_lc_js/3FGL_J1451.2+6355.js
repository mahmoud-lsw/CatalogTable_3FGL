Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.81062686,  0.32143056,  0.1221797 ,  0.        ,        0.        ,  0.        ,  0.25819805,  0.48281002,  0.70032227,        0.3319796 ,  0.16685876,  0.11086274,  0.32656705,  0.        ,        0.36274058,  0.        ,  0.30162063,  0.        ,  0.        ,        0.13399242,  0.        ,  0.70964563,  0.25094557,  0.25262198,        0.        ,  0.50298995,  0.11080307,  0.        ,  0.        ,        0.        ,  0.        ,  0.        ,  0.20207193,  0.51360554,        0.29912984,  0.04606158,  0.41244262,  0.44012287,  0.        ,        0.        ,  0.        ,  0.        ,  0.        ,  0.        ,        0.0424771 ,  0.4149605 ,  0.        ]
FluxHistoryError = [[ 0.        ,  0.96068072],       [ 0.3919363 ,  1.35747623],       [ 0.04853261,  0.69798648],       [ 0.        ,  0.87207414],       [ 0.        ,  0.69580775],       [ 0.        ,  0.74784523],       [ 0.        ,  1.01777267],       [ 0.        ,  1.27745417],       [ 0.13408941,  0.98917836],       [ 0.29787406,  1.24635029],       [ 0.04870692,  0.76018262],       [ 0.        ,  0.93548021],       [ 0.        ,  0.73406083],       [ 0.07380468,  0.69670397],       [ 0.        ,  0.91643572],       [ 0.1261342 ,  0.706532  ],       [ 0.        ,  0.65863544],       [ 0.09332263,  0.60725093],       [ 0.        ,  0.95271456],       [ 0.        ,  0.49690247],       [ 0.        ,  0.97007667],       [ 0.        ,  0.67178196],       [ 0.36138538,  1.16022372],       [ 0.03180446,  0.59791934],       [ 0.06706113,  0.54167086],       [ 0.        ,  0.82043654],       [ 0.17480743,  0.92556393],       [ 0.        ,  1.04399651],       [ 0.        ,  0.51199925],       [ 0.        ,  0.68644208],       [ 0.        ,  0.50399679],       [ 0.        ,  0.49495953],       [ 0.        ,  0.60660857],       [ 0.        ,  0.99590626],       [ 0.19274735,  0.94855964],       [ 0.09876947,  0.62352896],       [ 0.        ,  0.88767797],       [ 0.09038568,  0.8226918 ],       [ 0.14622307,  0.82744765],       [ 0.        ,  0.89042383],       [ 0.        ,  0.56841165],       [ 0.        ,  0.67799938],       [ 0.        ,  0.86442363],       [ 0.        ,  1.04707766],       [ 0.        ,  0.73382175],       [ 0.        ,  0.5730665 ],       [ 0.1144909 ,  0.8457036 ],       [ 0.        ,  0.58296859]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   5.23563080e+01],       [  5.47000000e+02,   2.50278163e+00],       [  1.73200000e+03,   1.77071595e+00],       [  5.47700000e+03,   3.79221410e-01],       [  3.16220000e+04,   2.31446192e-01]]
SpectrumError = [[  1.73000000e+02,   3.57911758e+01,   6.92168198e+01],       [  5.47000000e+02,   1.90989971e-02,   5.14283371e+00],       [  1.73200000e+03,   1.21124423e+00,   2.39763379e+00],       [  5.47700000e+03,   2.02579483e-01,   6.02745414e-01],       [  3.16220000e+04,   1.27026200e-01,   3.74684632e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]