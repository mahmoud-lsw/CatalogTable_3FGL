Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.        ,  0.        ,  0.36495197,  0.        ,        0.        ,  0.30757409,  0.        ,  0.        ,  0.32860437,        0.        ,  1.55620122,  0.55312139,  0.        ,  0.        ,        1.11647558,  0.51225787,  0.        ,  1.39311552,  0.63744819,        0.50442988,  0.37663862,  0.61075449,  0.29371086,  1.18847489,        1.26265466,  1.29644501,  0.        ,  1.72288883,  0.17889032,        1.26150143,  0.        ,  0.        ,  0.51532537,  0.        ,        0.58567256,  1.14478362,  0.27994511,  1.69684041,  1.54182732,        0.        ,  1.81901646,  0.44061053,  0.95525044,  0.        ,        0.76408541,  0.        ,  0.        ]
FluxHistoryError = [[ 0.        ,  0.96310163],       [ 0.        ,  1.45022619],       [ 0.        ,  0.88095194],       [ 0.03681356,  0.90001339],       [ 0.        ,  1.22393072],       [ 0.        ,  1.62104273],       [ 0.        ,  2.21299785],       [ 0.        ,  1.69508851],       [ 0.        ,  1.85646665],       [ 0.        ,  2.54429546],       [ 0.        ,  1.58039749],       [ 0.52847874,  2.72521973],       [ 0.        ,  2.15948838],       [ 0.        ,  1.75030589],       [ 0.        ,  1.16082883],       [ 0.55349296,  1.84826446],       [ 0.16522449,  1.07738256],       [ 0.        ,  1.64546549],       [ 0.59802067,  2.31494737],       [ 0.17425084,  1.33922541],       [ 0.        ,  2.25527948],       [ 0.        ,  1.92252824],       [ 0.07050484,  1.33152485],       [ 0.03437167,  0.75999761],       [ 0.31653315,  2.18574619],       [ 0.55414802,  2.13016248],       [ 0.60494834,  2.17401171],       [ 0.        ,  1.45114601],       [ 0.90229928,  2.71949959],       [ 0.        ,  1.39613983],       [ 0.49370521,  2.17997527],       [ 0.        ,  2.0162797 ],       [ 0.        ,  1.21247387],       [ 0.        ,  2.20235974],       [ 0.        ,  1.53613997],       [ 0.17372411,  1.16425395],       [ 0.49191004,  1.95667362],       [ 0.        ,  2.30588266],       [ 0.85164201,  2.70724106],       [ 0.80902725,  2.44161391],       [ 0.        ,  1.8198849 ],       [ 1.09438777,  2.68991232],       [ 0.        ,  2.44260514],       [ 0.39261222,  1.69673276],       [ 0.        ,  1.06301093],       [ 0.20698142,  1.5174346 ],       [ 0.        ,  1.52154648],       [ 0.        ,  1.38940477]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.15132942e+02],       [  5.47000000e+02,   7.18669510e+00],       [  1.73200000e+03,   3.04617047e-01],       [  5.47700000e+03,   1.34232628e+00],       [  3.16220000e+04,   3.60935241e-01]]
SpectrumError = [[  1.73000000e+02,   8.27360077e+01,   1.47964371e+02],       [  5.47000000e+02,   2.31273460e+00,   1.22466526e+01],       [  1.73200000e+03,   0.00000000e+00,   2.07701564e+00],       [  5.47700000e+03,   9.83735502e-01,   1.75213218e+00],       [  3.16220000e+04,   2.14965686e-01,   5.55191398e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]