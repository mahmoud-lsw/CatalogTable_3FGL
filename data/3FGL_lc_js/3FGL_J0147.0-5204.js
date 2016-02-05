Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.56567425,  0.        ,  0.        ,  0.        ,        0.        ,  2.28917027,  1.27217567,  1.23307228,  0.        ,        1.82181704,  0.        ,  0.        ,  0.        ,  1.34323251,        0.        ,  0.60361558,  0.        ,  0.77384901,  0.18883201,        0.63480192,  0.        ,  1.76884604,  1.03740954,  1.4464463 ,        1.34429562,  0.        ,  0.44428599,  0.71657932,  0.        ,        0.70629632,  0.34667137,  0.        ,  0.21714011,  0.63134819,        0.25012642,  0.41712892,  0.        ,  0.81462324,  0.43154553,        0.        ,  0.51094222,  1.03339326,  2.2673099 ,  0.60710311,        1.06085634,  0.37596521,  1.95673168]
FluxHistoryError = [[ 0.        ,  1.47042131],       [ 0.20340458,  1.11627412],       [ 0.        ,  1.63616574],       [ 0.        ,  1.65933275],       [ 0.        ,  1.42132711],       [ 0.        ,  1.62696719],       [ 1.35538793,  3.38448954],       [ 0.52237749,  2.21712589],       [ 0.43384486,  2.19382501],       [ 0.        ,  1.66169047],       [ 0.936409  ,  2.87345886],       [ 0.        ,  1.78850806],       [ 0.        ,  1.33557153],       [ 0.        ,  1.59899259],       [ 0.6344806 ,  2.18803382],       [ 0.        ,  1.04790652],       [ 0.18939897,  1.2639972 ],       [ 0.        ,  1.07383108],       [ 0.25775689,  1.52912402],       [ 0.        ,  1.58721241],       [ 0.08697885,  1.45379233],       [ 0.        ,  1.29620647],       [ 0.96952879,  2.70821905],       [ 0.39982778,  1.86496127],       [ 0.78330785,  2.23035407],       [ 0.56535476,  2.34927845],       [ 0.        ,  0.95514691],       [ 0.        ,  2.19660914],       [ 0.        ,  1.57189476],       [ 0.        ,  1.84474373],       [ 0.16071153,  1.43970251],       [ 0.        ,  2.07309166],       [ 0.        ,  2.35897303],       [ 0.        ,  1.44749239],       [ 0.        ,  2.50074703],       [ 0.        ,  1.52163059],       [ 0.        ,  2.27761185],       [ 0.        ,  1.47062147],       [ 0.29954433,  1.45479298],       [ 0.052452  ,  1.02820396],       [ 0.        ,  1.52350342],       [ 0.06071663,  1.22078609],       [ 0.37565398,  1.81036425],       [ 1.29937124,  3.40937257],       [ 0.        ,  2.34783304],       [ 0.45135599,  1.8120389 ],       [ 0.        ,  0.99643636],       [ 1.15981388,  2.869802  ]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.61929092e+01],       [  5.47000000e+02,   1.17224073e+01],       [  1.73200000e+03,   3.00525522e+00],       [  5.47700000e+03,   4.58699316e-01],       [  3.16220000e+04,   3.55528355e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   6.38431892e+01],       [  5.47000000e+02,   8.07748604e+00,   1.55196648e+01],       [  1.73200000e+03,   2.22504568e+00,   3.84973001e+00],       [  5.47700000e+03,   2.36004278e-01,   7.45848775e-01],       [  3.16220000e+04,   2.07325161e-01,   5.50664127e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]