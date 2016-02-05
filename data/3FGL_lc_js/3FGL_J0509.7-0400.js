Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.27716035,  0.20772453,  0.        ,  0.17410535,  0.20911823,        0.        ,  0.24023448,  0.        ,  0.21095636,  0.        ,        0.        ,  0.        ,  0.01962856,  0.        ,  0.27586192,        0.        ,  0.32980156,  0.        ,  0.22980893,  0.04566083,        0.0156234 ,  0.        ,  0.40872404,  0.        ,  0.44973373,        0.49003321,  0.1569396 ,  0.        ,  0.61317307,  0.        ,        0.19515947,  0.34002331,  0.        ,  0.12569603,  0.        ,        0.        ,  0.14383191,  0.        ,  0.        ,  0.27531549,        0.        ,  0.1411925 ,  0.        ,  0.        ,  0.        ,        0.        ,  0.25621775,  0.        ]
FluxHistoryError = [[ 0.0109376 ,  0.66475862],       [ 0.        ,  1.0437717 ],       [ 0.        ,  0.58271277],       [ 0.        ,  0.90422058],       [ 0.01445264,  0.4669773 ],       [ 0.        ,  0.45080096],       [ 0.        ,  1.06607448],       [ 0.        ,  0.82575113],       [ 0.02812959,  0.52569813],       [ 0.        ,  0.73895568],       [ 0.        ,  0.85117239],       [ 0.        ,  0.65529352],       [ 0.        ,  0.67527244],       [ 0.        ,  0.85393268],       [ 0.07846422,  0.62039757],       [ 0.        ,  0.71507967],       [ 0.        ,  1.69506836],       [ 0.        ,  0.69853139],       [ 0.        ,  1.2677269 ],       [ 0.        ,  0.79427145],       [ 0.        ,  1.11565669],       [ 0.        ,  0.49300882],       [ 0.13879716,  0.84347188],       [ 0.        ,  0.62845641],       [ 0.14992216,  0.86134279],       [ 0.19443569,  0.9315294 ],       [ 0.        ,  0.95743099],       [ 0.        ,  0.87839746],       [ 0.19029209,  1.21300292],       [ 0.        ,  0.56841534],       [ 0.05620468,  0.46062642],       [ 0.10954954,  0.74128711],       [ 0.        ,  1.18860471],       [ 0.        ,  1.23157248],       [ 0.        ,  0.99172556],       [ 0.        ,  0.65932059],       [ 0.        ,  0.93488747],       [ 0.        ,  0.76473272],       [ 0.        ,  0.92047989],       [ 0.02500889,  0.71452618],       [ 0.        ,  1.09268939],       [ 0.        ,  1.51826817],       [ 0.        ,  0.83725631],       [ 0.        ,  0.733872  ],       [ 0.        ,  1.09134948],       [ 0.        ,  0.84806848],       [ 0.        ,  1.29978636],       [ 0.        ,  0.50069332]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   3.31976116e-01],       [  5.47000000e+02,   1.70377600e+00],       [  1.73200000e+03,   5.61166167e-01],       [  5.47700000e+03,   5.36755562e-01],       [  3.16220000e+04,   4.56739515e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   6.11653463e+01],       [  5.47000000e+02,   0.00000000e+00,   1.18610960e+01],       [  1.73200000e+03,   0.00000000e+00,   2.23945534e+00],       [  5.47700000e+03,   2.46832460e-01,   9.10506725e-01],       [  3.16220000e+04,   2.64101267e-01,   7.04387903e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]