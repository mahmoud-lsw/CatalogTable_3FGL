Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.04873124,  0.14844164,  0.1604977 ,  0.        ,  0.16721344,        0.05110689,  0.        ,  0.        ,  0.35070732,  0.        ,        0.40536454,  0.16228618,  0.        ,  0.        ,  0.        ,        0.        ,  0.        ,  0.55777478,  0.52686739,  0.21867771,        0.        ,  0.        ,  0.07879929,  0.        ,  0.        ,        0.43486372,  0.        ,  0.07109806,  0.        ,  0.        ,        0.        ,  0.        ,  0.        ,  0.        ,  0.        ,        0.        ,  0.26230201,  0.55131662,  0.12542994,  0.        ,        0.21172619,  0.        ,  0.6269033 ,  0.35982344,  0.07841194,        0.        ,  0.        ,  0.28525409]
FluxHistoryError = [[ 0.        ,  1.00305179],       [ 0.04210943,  0.34449571],       [ 0.        ,  1.10232016],       [ 0.        ,  0.7640118 ],       [ 0.        ,  0.86913896],       [ 0.        ,  1.00497569],       [ 0.        ,  0.50525868],       [ 0.        ,  0.91198295],       [ 0.14897233,  0.63990819],       [ 0.        ,  0.6520884 ],       [ 0.12868521,  0.79315877],       [ 0.04668802,  0.38379291],       [ 0.        ,  0.74293947],       [ 0.        ,  0.50025088],       [ 0.        ,  1.12195945],       [ 0.        ,  1.12387908],       [ 0.        ,  1.04256999],       [ 0.26121262,  0.98292542],       [ 0.17069682,  1.05240786],       [ 0.03232422,  0.53674805],       [ 0.        ,  0.86381167],       [ 0.        ,  0.66466528],       [ 0.        ,  0.63844447],       [ 0.        ,  0.96830612],       [ 0.        ,  0.64123529],       [ 0.03941151,  1.00319684],       [ 0.        ,  0.83856273],       [ 0.        ,  0.71630469],       [ 0.        ,  0.93151087],       [ 0.        ,  0.67115122],       [ 0.        ,  1.09002304],       [ 0.        ,  0.7605812 ],       [ 0.        ,  0.64014894],       [ 0.        ,  0.70318836],       [ 0.        ,  0.65798914],       [ 0.        ,  1.09325016],       [ 0.        ,  1.09327075],       [ 0.1958575 ,  1.0474515 ],       [ 0.00287957,  0.35222879],       [ 0.        ,  0.74233902],       [ 0.        ,  1.27274942],       [ 0.        ,  0.6956194 ],       [ 0.2797747 ,  1.11651778],       [ 0.15912302,  0.67318052],       [ 0.        ,  0.94087345],       [ 0.        ,  0.72193718],       [ 0.        ,  0.66633832],       [ 0.03898384,  0.67349803]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.51191044e+01],       [  5.47000000e+02,   4.27601812e-03],       [  1.73200000e+03,   8.43417406e-01],       [  5.47700000e+03,   8.80090177e-01],       [  3.16220000e+04,   4.25475955e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   6.57718716e+01],       [  5.47000000e+02,   0.00000000e+00,   6.33071874e+00],       [  1.73200000e+03,   1.32540643e-01,   1.65319705e+00],       [  5.47700000e+03,   5.75274944e-01,   1.25086999e+00],       [  3.16220000e+04,   2.49271631e-01,   6.56883895e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]