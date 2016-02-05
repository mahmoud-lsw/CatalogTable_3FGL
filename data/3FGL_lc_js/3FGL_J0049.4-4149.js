Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.30873844,  0.        ,  0.2244444 ,  0.        ,  1.05523574,        0.        ,  0.12921017,  0.        ,  0.07941019,  0.43029052,        0.54852301,  0.        ,  0.        ,  1.70481455,  0.        ,        0.6103496 ,  0.7909385 ,  0.1352164 ,  1.24140692,  0.        ,        0.        ,  0.        ,  0.15024439,  0.51035666,  0.        ,        0.89297229,  0.        ,  0.        ,  0.        ,  0.33174086,        0.37912819,  0.59400517,  0.        ,  0.        ,  0.96367103,        0.4882966 ,  0.80904722,  0.515158  ,  0.5892083 ,  0.        ,        0.55840313,  0.65143484,  0.50344193,  1.15137434,  0.68948686,        0.        ,  1.47879863,  1.45028794]
FluxHistoryError = [[ 0.        ,  2.04082498],       [ 0.        ,  1.41627836],       [ 0.        ,  1.69700707],       [ 0.        ,  1.07053006],       [ 0.46842825,  1.84453964],       [ 0.        ,  1.65300977],       [ 0.        ,  1.6384905 ],       [ 0.        ,  1.49049413],       [ 0.        ,  1.51877224],       [ 0.        ,  2.22578996],       [ 0.09479466,  1.22994506],       [ 0.        ,  1.67483199],       [ 0.        ,  1.59837437],       [ 0.91030824,  2.73019075],       [ 0.        ,  0.97472197],       [ 0.        ,  2.51825422],       [ 0.22757351,  1.56458116],       [ 0.        ,  1.23666339],       [ 0.22135723,  2.38402843],       [ 0.        ,  0.9195323 ],       [ 0.        ,  2.41162109],       [ 0.        ,  1.17176509],       [ 0.        ,  2.2290875 ],       [ 0.12658137,  1.10188246],       [ 0.        ,  1.32870948],       [ 0.        ,  3.28364831],       [ 0.        ,  1.12324429],       [ 0.        ,  1.12763298],       [ 0.        ,  1.29867172],       [ 0.        ,  2.03966963],       [ 0.        ,  2.23571023],       [ 0.        ,  2.50547916],       [ 0.        ,  2.01960659],       [ 0.        ,  1.67815411],       [ 0.34206206,  1.82619166],       [ 0.11537504,  1.0582298 ],       [ 0.00416714,  1.7760905 ],       [ 0.08583546,  1.19826555],       [ 0.08263737,  1.2472192 ],       [ 0.        ,  1.80766296],       [ 0.10660324,  1.14537621],       [ 0.        ,  2.69657964],       [ 0.1593177 ,  1.02784979],       [ 0.48864329,  2.0330956 ],       [ 0.20340586,  1.37276793],       [ 0.        ,  1.10067511],       [ 0.72371525,  2.47552681],       [ 0.53133696,  2.43854332]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   5.20953407e+01],       [  5.47000000e+02,   8.59023666e+00],       [  1.73200000e+03,   7.33679295e-01],       [  5.47700000e+03,   4.80703026e-01],       [  3.16220000e+04,   3.27710420e-01]]
SpectrumError = [[  1.73000000e+02,   3.06463413e+01,   7.38012314e+01],       [  5.47000000e+02,   5.20515060e+00,   1.21328526e+01],       [  1.73200000e+03,   2.19745636e-01,   1.37718034e+00],       [  5.47700000e+03,   2.63832659e-01,   7.57928967e-01],       [  3.16220000e+04,   1.88368455e-01,   5.21519423e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]