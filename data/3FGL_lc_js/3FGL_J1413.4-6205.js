Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 26.28775024,  27.76223755,  24.29135513,  17.3274765 ,        20.9889431 ,  22.25589561,  22.66110992,  25.11746216,        20.82773018,  17.35483932,  23.62363243,  28.10963058,        18.53002357,  23.64149857,  23.64837837,  18.0632515 ,        24.61519623,  26.1306324 ,  26.04154968,  26.47625542,        14.32234001,  19.35948181,  25.78902435,  26.5490818 ,        21.68629646,  21.91946411,  25.3456192 ,  27.2451992 ,        21.28179359,  22.78384018,  23.28243256,  23.12771225,        20.46973228,  23.907444  ,  27.30589104,  24.96341324,        28.43273354,  17.43257713,  21.44434357,  27.36553383,        23.04167366,  22.30914116,  22.56954002,  22.90445328,        25.17116737,  20.60053253,  22.83042526,  21.78377342]
FluxHistoryError = [[ 22.50875473,  30.28403854],       [ 23.85035706,  31.83774567],       [ 20.82744598,  27.90729332],       [ 14.01504517,  20.86281967],       [ 17.7176075 ,  24.42582321],       [ 18.72410583,  25.94610977],       [ 19.31728172,  26.14836121],       [ 21.05205154,  29.31553078],       [ 17.49076843,  24.29912949],       [ 14.06641579,  20.82186508],       [ 19.95491028,  27.49983215],       [ 24.69436264,  31.63857651],       [ 15.14493084,  22.13078308],       [ 20.71188736,  26.70717049],       [ 20.3275528 ,  27.06010437],       [ 15.0842762 ,  21.19129753],       [ 21.53364944,  27.80976486],       [ 22.59581566,  29.82020569],       [ 23.12020111,  29.08486176],       [ 22.92814445,  30.17493057],       [ 11.66043568,  17.15357399],       [ 16.01025772,  22.87789726],       [ 22.65646362,  29.03295898],       [ 23.53480721,  29.6634407 ],       [ 18.29037476,  25.22303009],       [ 18.73396873,  25.24248123],       [ 21.7560482 ,  29.09886551],       [ 24.21773911,  30.38902473],       [ 18.07900047,  24.62750626],       [ 19.97314262,  25.72501373],       [ 20.26308441,  26.4294796 ],       [ 19.49437141,  26.87129784],       [ 17.23151779,  23.85933304],       [ 20.31702805,  27.65635872],       [ 24.29417801,  30.44285011],       [ 21.52532959,  28.57200623],       [ 25.27869225,  31.73090363],       [ 14.39392281,  20.63368416],       [ 18.13820267,  24.92646599],       [ 24.33704758,  30.50389862],       [ 19.69935608,  26.52626801],       [ 19.44103813,  25.29220963],       [ 19.20138359,  26.08603477],       [ 19.62824631,  26.30335808],       [ 22.16939926,  28.26873589],       [ 17.30399513,  24.05799103],       [ 19.95291519,  25.81814957],       [ 18.13297272,  25.64998436]], dtype=float32
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.14274243e+03],       [  5.47000000e+02,   6.98588989e+02],       [  1.73200000e+03,   2.28407013e+02],       [  5.47700000e+03,   5.39016151e+01],       [  3.16220000e+04,   2.76758885e+00]]
SpectrumError = [[  1.73000000e+02,   9.27846680e+02,   1.35873499e+03],       [  5.47000000e+02,   6.66893677e+02,   7.30284302e+02],       [  1.73200000e+03,   2.21360245e+02,   2.35453781e+02],       [  5.47700000e+03,   5.15039940e+01,   5.62992363e+01],       [  3.16220000e+04,   2.24376941e+00,   3.35589027e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]