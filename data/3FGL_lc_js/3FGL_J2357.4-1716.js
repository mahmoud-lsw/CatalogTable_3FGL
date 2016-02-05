Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.63050669,  0.27777573,  0.01193383,  0.31392136,  0.51232445,        0.        ,  0.        ,  0.        ,  0.        ,  0.49075255,        0.        ,  0.27692139,  0.        ,  0.76730108,  0.056543  ,        0.10287374,  0.22758144,  0.        ,  0.19175561,  0.13189545,        0.        ,  0.1728342 ,  0.39672986,  0.        ,  0.        ,        0.888228  ,  0.26433411,  0.51259488,  0.95632213,  0.43619961,        0.11232682,  1.14320481,  0.        ,  0.32186863,  0.        ,        0.        ,  0.95158184,  0.        ,  0.05446175,  0.11088745,        0.        ,  0.23730001,  1.00141168,  0.91649193,  0.        ,        0.24131671,  0.57075351,  0.43466634]
FluxHistoryError = [[ 0.31973261,  1.04991388],       [ 0.06833409,  0.64100075],       [ 0.        ,  0.79563691],       [ 0.09951326,  0.65314001],       [ 0.20682657,  0.95309711],       [ 0.        ,  0.78293645],       [ 0.        ,  1.22205877],       [ 0.        ,  0.61942869],       [ 0.        ,  0.72989732],       [ 0.21110079,  0.89724076],       [ 0.        ,  0.65645301],       [ 0.07227267,  0.6451326 ],       [ 0.        ,  1.00525713],       [ 0.22117001,  1.54035282],       [ 0.        ,  1.04132194],       [ 0.        ,  1.26492327],       [ 0.        ,  1.29721493],       [ 0.        ,  0.60188448],       [ 0.        ,  1.3665318 ],       [ 0.        ,  0.84823903],       [ 0.        ,  1.13714361],       [ 0.        ,  1.2833945 ],       [ 0.05066833,  0.92248607],       [ 0.        ,  0.95032477],       [ 0.        ,  0.8782897 ],       [ 0.37002224,  1.60637593],       [ 0.        ,  1.31721607],       [ 0.09393489,  1.09925425],       [ 0.45616138,  1.56538773],       [ 0.10893962,  0.96326423],       [ 0.        ,  1.0634714 ],       [ 0.54455155,  1.87937009],       [ 0.        ,  1.35805905],       [ 0.05925801,  0.70510811],       [ 0.        ,  1.16724837],       [ 0.        ,  0.98002583],       [ 0.46132305,  1.62486362],       [ 0.        ,  0.91766524],       [ 0.        ,  1.32329014],       [ 0.        ,  1.7493054 ],       [ 0.        ,  0.70047802],       [ 0.        ,  1.70430598],       [ 0.60480368,  1.5141927 ],       [ 0.3952294 ,  1.67402458],       [ 0.        ,  0.65134221],       [ 0.06468853,  0.55338013],       [ 0.20852068,  1.1161896 ],       [ 0.16970712,  0.81946468]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   2.90615215e+01],       [  5.47000000e+02,   5.46088505e+00],       [  1.73200000e+03,   2.46843076e+00],       [  5.47700000e+03,   1.11705220e+00],       [  3.16220000e+04,   5.47236085e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   8.15212917e+01],       [  5.47000000e+02,   1.80510473e+00,   9.27076149e+00],       [  1.73200000e+03,   1.70124078e+00,   3.31704068e+00],       [  5.47700000e+03,   7.98872232e-01,   1.49772799e+00],       [  3.16220000e+04,   3.49001110e-01,   8.06565881e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]