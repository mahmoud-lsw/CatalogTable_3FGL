Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.32716429,  2.00170326,  0.        ,  0.        ,        0.        ,  1.28312087,  0.35590193,  0.53166842,  1.59514201,        0.82441092,  0.81914705,  0.59979898,  0.        ,  0.        ,        0.22650574,  0.36993256,  0.        ,  0.        ,  0.        ,        0.66373193,  0.        ,  0.0903803 ,  1.51839626,  1.89438534,        0.1313629 ,  2.47729564,  0.        ,  0.        ,  0.70342273,        1.03252196,  0.        ,  0.        ,  1.83855224,  3.25489497,        0.        ,  0.        ,  0.48386538,  2.56752324,  1.44216251,        0.69342232,  0.        ,  1.48217773,  0.97275102,  1.57737505,        0.        ,  0.58838385,  0.28436956]
FluxHistoryError = [[ 0.        ,  1.62575817],       [ 0.        ,  2.19579983],       [ 0.94888902,  3.37254953],       [ 0.        ,  2.20609021],       [ 0.        ,  1.68433833],       [ 0.        ,  2.16416216],       [ 0.15153039,  2.56559324],       [ 0.        ,  2.88514253],       [ 0.        ,  2.85824847],       [ 0.51554644,  2.72385621],       [ 0.15661794,  1.87674332],       [ 0.        ,  3.69514364],       [ 0.16529286,  1.3731662 ],       [ 0.        ,  2.55722904],       [ 0.        ,  2.05169344],       [ 0.        ,  3.26113008],       [ 0.        ,  3.38037887],       [ 0.        ,  3.3103056 ],       [ 0.        ,  3.3127954 ],       [ 0.        ,  2.02585959],       [ 0.        ,  3.27460587],       [ 0.        ,  2.56410742],       [ 0.        ,  3.15496814],       [ 0.55165434,  2.75269985],       [ 0.43853748,  3.54770708],       [ 0.        ,  3.50328182],       [ 1.28214967,  3.99488735],       [ 0.        ,  1.93851197],       [ 0.        ,  1.74269378],       [ 0.11009389,  1.56476724],       [ 0.        ,  4.1943543 ],       [ 0.        ,  1.94342482],       [ 0.        ,  2.24526381],       [ 0.8570261 ,  3.06279182],       [ 2.10740113,  4.54702806],       [ 0.        ,  1.69425988],       [ 0.        ,  1.61234367],       [ 0.        ,  3.50922   ],       [ 1.53450429,  3.75840998],       [ 0.43744421,  2.6443944 ],       [ 0.        ,  2.88526011],       [ 0.        ,  2.87393665],       [ 0.35106778,  2.94437885],       [ 0.28420258,  1.97479832],       [ 0.437433  ,  2.91208959],       [ 0.        ,  2.03782535],       [ 0.        ,  3.38116974],       [ 0.        ,  2.32726702]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   8.68542633e+01],       [  5.47000000e+02,   2.13685932e+01],       [  1.73200000e+03,   1.68178856e+00],       [  5.47700000e+03,   8.51294219e-01],       [  3.16220000e+04,   2.56473333e-01]]
SpectrumError = [[  1.73000000e+02,   1.88796844e+01,   1.56480774e+02],       [  5.47000000e+02,   1.40870495e+01,   2.90219841e+01],       [  1.73200000e+03,   6.61750913e-01,   2.79994822e+00],       [  5.47700000e+03,   5.35043180e-01,   1.23057628e+00],       [  3.16220000e+04,   1.22005537e-01,   4.43215966e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]