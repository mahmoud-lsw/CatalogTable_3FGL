Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.70623547,  1.00596559,  0.5567885 ,  0.42631567,  1.21619546,        0.        ,  0.        ,  0.28322697,  0.68975669,  0.67174518,        0.47725323,  0.09381305,  0.03613305,  0.05440575,  0.74833524,        0.        ,  0.97423321,  0.        ,  0.30152377,  0.11132865,        0.        ,  0.27891612,  0.49122745,  0.        ,  0.        ,        0.3384918 ,  0.        ,  0.87842721,  0.        ,  1.03553402,        0.        ,  0.        ,  0.        ,  0.07772424,  0.        ,        0.56016034,  0.56656045,  0.07575718,  0.        ,  0.13198897,        0.        ,  0.11010076,  0.25644729,  0.39960623,  0.05417042,        0.04488808,  0.07773689,  0.        ]
FluxHistoryError = [[ 0.32672483,  1.20865715],       [ 0.56641746,  1.49754536],       [ 0.24084735,  0.99055052],       [ 0.1798427 ,  0.78694826],       [ 0.79026574,  1.68853617],       [ 0.        ,  0.70878243],       [ 0.        ,  0.69451302],       [ 0.        ,  1.21138293],       [ 0.36063451,  1.13907456],       [ 0.30209512,  1.14560449],       [ 0.20886841,  0.87762904],       [ 0.        ,  1.14517628],       [ 0.        ,  0.7898441 ],       [ 0.        ,  1.140526  ],       [ 0.43596548,  1.12838292],       [ 0.        ,  1.14103079],       [ 0.59533793,  1.43748367],       [ 0.        ,  0.94304931],       [ 0.12350656,  0.57478756],       [ 0.        ,  0.70165507],       [ 0.        ,  1.0847472 ],       [ 0.07667321,  0.48115903],       [ 0.14813641,  0.98098791],       [ 0.        ,  0.66665667],       [ 0.        ,  0.65582711],       [ 0.14502314,  0.67349702],       [ 0.        ,  0.82582802],       [ 0.46508601,  1.38895321],       [ 0.        ,  0.46233711],       [ 0.53412521,  1.64887691],       [ 0.        ,  0.69139487],       [ 0.        ,  1.40518868],       [ 0.        ,  0.871454  ],       [ 0.        ,  0.83495267],       [ 0.        ,  0.49437267],       [ 0.24754027,  0.97353137],       [ 0.24145758,  1.02631426],       [ 0.        ,  0.65992681],       [ 0.        ,  0.74057794],       [ 0.02538445,  0.33625251],       [ 0.        ,  0.79934788],       [ 0.        ,  0.89050247],       [ 0.07383619,  0.54343379],       [ 0.13637483,  0.8092652 ],       [ 0.        ,  0.70140981],       [ 0.        ,  0.78440481],       [ 0.        ,  0.73494831],       [ 0.        ,  1.07810366]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   4.05409889e+01],       [  5.47000000e+02,   3.44517827e+00],       [  1.73200000e+03,   3.51077390e+00],       [  5.47700000e+03,   1.72620702e+00],       [  3.16220000e+04,   1.40334773e+00]]
SpectrumError = [[  1.73000000e+02,   1.30922985e+01,   6.79768524e+01],       [  5.47000000e+02,   0.00000000e+00,   1.09526584e+01],       [  1.73200000e+03,   2.51427722e+00,   4.59552002e+00],       [  5.47700000e+03,   1.31783473e+00,   2.19406104e+00],       [  3.16220000e+04,   1.08241606e+00,   1.77550602e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]