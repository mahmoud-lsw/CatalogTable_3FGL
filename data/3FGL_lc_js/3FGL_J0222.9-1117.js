Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.13527691,  0.21585092,  0.29428861,  0.92986488,  0.        ,        0.        ,  0.18074858,  0.        ,  0.22648793,  0.        ,        0.40211505,  0.        ,  0.        ,  0.90292698,  0.        ,        0.        ,  0.16292793,  0.71462327,  0.56276846,  0.        ,        0.17071211,  0.        ,  0.4042969 ,  0.59715551,  0.18942836,        0.39679131,  0.1732522 ,  0.        ,  0.        ,  0.3093707 ,        0.        ,  0.42244679,  0.19228248,  0.        ,  0.88781482,        0.        ,  0.        ,  0.        ,  0.33864808,  0.37631685,        0.        ,  0.        ,  0.75982475,  0.26366639,  0.04417403,        0.04450195,  0.62614894,  0.        ]
FluxHistoryError = [[ 0.        ,  1.18385613],       [ 0.        ,  1.00407532],       [ 0.09432824,  0.64675224],       [ 0.56818551,  1.38071275],       [ 0.        ,  1.09187412],       [ 0.        ,  0.45177308],       [ 0.        ,  1.06926316],       [ 0.        ,  0.96341354],       [ 0.        ,  1.41845387],       [ 0.        ,  0.9316991 ],       [ 0.13071871,  0.78682137],       [ 0.        ,  0.80732727],       [ 0.        ,  0.55813408],       [ 0.41819471,  1.56735015],       [ 0.        ,  0.88057083],       [ 0.        ,  0.77330327],       [ 0.        ,  0.97258115],       [ 0.36984494,  1.18227744],       [ 0.17039806,  1.15361226],       [ 0.        ,  0.94656372],       [ 0.        ,  1.87077498],       [ 0.        ,  0.76854116],       [ 0.16243888,  0.7808364 ],       [ 0.10561559,  1.20461297],       [ 0.        ,  1.22385636],       [ 0.        ,  1.89171633],       [ 0.        ,  1.22811601],       [ 0.        ,  0.88621813],       [ 0.        ,  0.86171675],       [ 0.03502426,  0.76007116],       [ 0.        ,  0.78063923],       [ 0.02455685,  1.00123179],       [ 0.        ,  1.89617638],       [ 0.        ,  0.77980393],       [ 0.36669928,  1.57630742],       [ 0.        ,  0.66915202],       [ 0.        ,  0.87194413],       [ 0.        ,  0.99195677],       [ 0.        ,  1.7340188 ],       [ 0.        ,  1.88879317],       [ 0.        ,  1.10145891],       [ 0.        ,  1.06760442],       [ 0.3738932 ,  1.27065945],       [ 0.        ,  1.38940787],       [ 0.        ,  1.52664156],       [ 0.        ,  1.05216102],       [ 0.26108128,  1.14448309],       [ 0.        ,  0.89511734]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.01203416e-02],       [  5.47000000e+02,   5.17928743e+00],       [  1.73200000e+03,   2.18022585e+00],       [  5.47700000e+03,   5.54233909e-01],       [  3.16220000e+04,   4.31014478e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   4.15727653e+01],       [  5.47000000e+02,   1.70043945e+00,   8.93756104e+00],       [  1.73200000e+03,   1.51876545e+00,   2.95745564e+00],       [  5.47700000e+03,   2.97855437e-01,   8.81739020e-01],       [  3.16220000e+04,   2.60503173e-01,   6.56999707e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]