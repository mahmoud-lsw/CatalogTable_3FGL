Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.39765781,  0.50076848,  0.        ,  2.3575592 ,  1.87560213,        0.56863195,  0.5471912 ,  0.        ,  0.        ,  0.        ,        2.10875726,  0.        ,  1.89231193,  1.50518429,  0.        ,        1.16439068,  0.86783028,  0.        ,  0.        ,  0.        ,        0.        ,  1.57359588,  0.57103068,  0.        ,  0.04044956,        0.        ,  0.        ,  1.21494687,  1.23064888,  0.37435305,        0.70387584,  0.        ,  0.53100687,  0.        ,  0.53763521,        5.2060585 ,  2.70876932,  1.12268543,  0.        ,  2.83072162,        0.12766099,  0.2331727 ,  0.        ,  1.51729226,  0.        ,        0.        ,  1.40695357,  0.81282264]
FluxHistoryError = [[ 0.        ,  3.51442164],       [ 0.        ,  2.93553835],       [ 0.        ,  2.69687748],       [ 1.16776884,  3.74451256],       [ 0.8136034 ,  3.16467381],       [ 0.        ,  3.38609225],       [ 0.        ,  3.34236604],       [ 0.        ,  3.07927513],       [ 0.        ,  1.8503778 ],       [ 0.        ,  2.04338479],       [ 0.72497487,  3.60641241],       [ 0.        ,  2.42404008],       [ 0.47031808,  3.49916291],       [ 0.67609489,  2.54514027],       [ 0.        ,  2.67622709],       [ 0.35815179,  2.16246152],       [ 0.        ,  3.60069251],       [ 0.        ,  2.37739778],       [ 0.        ,  1.89792824],       [ 0.        ,  2.71346688],       [ 0.        ,  1.39900589],       [ 0.24248028,  3.12297487],       [ 0.        ,  2.51618832],       [ 0.        ,  2.40802217],       [ 0.        ,  2.35392159],       [ 0.        ,  2.38902879],       [ 0.        ,  2.55291533],       [ 0.31986648,  2.25528145],       [ 0.28241855,  2.44374704],       [ 0.        ,  2.3230865 ],       [ 0.        ,  3.65693551],       [ 0.        ,  2.63397217],       [ 0.        ,  2.98517185],       [ 0.        ,  2.80123854],       [ 0.        ,  2.37660992],       [ 3.64187622,  6.99902058],       [ 1.52090871,  4.03835297],       [ 0.21171093,  2.37177515],       [ 0.        ,  2.10292459],       [ 1.60367751,  4.22375631],       [ 0.        ,  2.29801917],       [ 0.        ,  2.52186374],       [ 0.        ,  2.51284695],       [ 0.64888871,  2.58326101],       [ 0.        ,  3.10114717],       [ 0.        ,  2.15072322],       [ 0.51154298,  2.49711418],       [ 0.        ,  4.00980884]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   4.55396881e+01],       [  5.47000000e+02,   1.32039604e+01],       [  1.73200000e+03,   4.38206720e+00],       [  5.47700000e+03,   2.06357792e-01],       [  3.16220000e+04,   4.51834738e-01]]
SpectrumError = [[  1.73000000e+02,   5.29516220e+00,   8.24249268e+01],       [  5.47000000e+02,   7.61369181e+00,   1.89528389e+01],       [  1.73200000e+03,   3.17127991e+00,   5.70101213e+00],       [  5.47700000e+03,   9.01721418e-03,   4.94440675e-01],       [  3.16220000e+04,   2.63044119e-01,   6.97706163e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]