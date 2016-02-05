Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.5032258 ,  0.10875471,  0.71312851,  0.        ,  0.68391198,        0.66821748,  0.92050046,  0.29638347,  1.02647495,  0.        ,        1.17644787,  0.13729909,  1.28983545,  0.23084091,  0.        ,        0.39751646,  1.6720717 ,  1.15498149,  0.        ,  0.28431669,        0.        ,  3.02676511,  2.53278708,  0.        ,  1.60889685,        0.3410722 ,  0.43421057,  0.64739555,  0.        ,  0.        ,        0.98908597,  0.        ,  1.22220409,  0.        ,  0.        ,        2.40348911,  0.        ,  0.18169503,  0.        ,  0.        ,        0.82942009,  0.10271847,  0.        ,  0.50616932,  0.35617393,        0.51923382,  0.        ,  0.        ]
FluxHistoryError = [[ 0.        ,  3.17686701],       [ 0.        ,  2.19647177],       [ 0.03126669,  1.64254701],       [ 0.        ,  1.79309523],       [ 0.09612125,  1.43496907],       [ 0.        ,  3.24628264],       [ 0.25585872,  1.819175  ],       [ 0.        ,  2.67263922],       [ 0.27046478,  1.95676708],       [ 0.        ,  2.50026822],       [ 0.2866528 ,  2.35625219],       [ 0.        ,  1.77293351],       [ 0.08542132,  2.63785338],       [ 0.        ,  2.59650157],       [ 0.        ,  2.17488265],       [ 0.        ,  2.22461781],       [ 0.64492416,  2.97641301],       [ 0.4091565 ,  2.1733098 ],       [ 0.        ,  2.01771498],       [ 0.        ,  3.31166545],       [ 0.        ,  1.42356372],       [ 1.88974941,  4.34423399],       [ 1.35291266,  3.79028249],       [ 0.        ,  2.67528677],       [ 0.67706901,  2.80270791],       [ 0.        ,  2.41004264],       [ 0.        ,  4.31720117],       [ 0.        ,  2.67417234],       [ 0.        ,  2.62464976],       [ 0.        ,  1.22856212],       [ 0.28698039,  1.98952794],       [ 0.        ,  1.76450181],       [ 0.25626785,  2.49905634],       [ 0.        ,  3.04914498],       [ 0.        ,  1.73921871],       [ 0.63504875,  4.40306664],       [ 0.        ,  1.94980907],       [ 0.        ,  2.22895508],       [ 0.        ,  2.30265331],       [ 0.        ,  1.54317451],       [ 0.        ,  3.29294324],       [ 0.        ,  2.83581006],       [ 0.        ,  2.16363955],       [ 0.        ,  2.77258158],       [ 0.        ,  3.1310131 ],       [ 0.        ,  3.60431302],       [ 0.        ,  1.82569408],       [ 0.        ,  2.71563244]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   4.18818703e+01],       [  5.47000000e+02,   6.87600899e+00],       [  1.73200000e+03,   2.61176920e+00],       [  5.47700000e+03,   7.48176277e-01],       [  3.16220000e+04,   1.41845644e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   1.32959103e+02],       [  5.47000000e+02,   2.13195324e-01,   1.37364178e+01],       [  1.73200000e+03,   1.56280422e+00,   3.76132298e+00],       [  5.47700000e+03,   4.14188325e-01,   1.16479146e+00],       [  3.16220000e+04,   5.61723337e-02,   2.79948831e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]