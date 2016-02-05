Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 1.96817529,  2.33511734,  1.55561626,  1.78794682,  3.41697884,        2.5785892 ,  3.08120465,  3.67952251,  2.45121741,  1.64959705,        2.27542758,  1.44057381,  1.83533776,  2.04482651,  0.65893269,        4.73187637,  3.40127707,  2.53811789,  3.64391112,  2.90954328,        1.4815917 ,  4.37691498,  2.54579234,  2.40756083,  3.25070667,        1.92314577,  2.57974505,  3.28385496,  3.88323569,  2.93793464,        2.33627939,  2.74618244,  2.34271479,  2.77604723,  2.56543374,        3.25252938,  2.67013264,  2.08088613,  2.74882269,  3.1636188 ,        3.32290649,  2.12755156,  3.92309666,  2.43060493,  1.26543367,        3.30278873,  1.86095726,  1.80078125]
FluxHistoryError = [[ 1.41816771,  2.60242963],       [ 1.70456135,  3.05909824],       [ 1.04607296,  2.15895224],       [ 1.24817061,  2.42193699],       [ 2.70041251,  4.20722771],       [ 1.99465346,  3.23172164],       [ 2.34408927,  3.91384649],       [ 2.9098978 ,  4.53241158],       [ 1.7911396 ,  3.21091986],       [ 1.14856625,  2.25591063],       [ 1.63448346,  3.006037  ],       [ 0.85115349,  2.13861656],       [ 1.26266479,  2.50918198],       [ 1.33778334,  2.87504125],       [ 0.29768056,  1.18166864],       [ 3.82537317,  5.71907854],       [ 2.59655762,  4.29203033],       [ 1.84389567,  3.34321904],       [ 2.80255198,  4.58393145],       [ 2.12703347,  3.814569  ],       [ 0.92251253,  2.16438699],       [ 3.50356889,  5.35170317],       [ 1.85660923,  3.33789682],       [ 1.71760511,  3.2111268 ],       [ 2.44585538,  4.16158772],       [ 1.24711442,  2.73027825],       [ 1.87315631,  3.39246273],       [ 2.52752733,  4.13571453],       [ 3.02194905,  4.84908772],       [ 2.1801486 ,  3.79328084],       [ 1.62708938,  3.16371965],       [ 2.05398822,  3.54132342],       [ 1.66608357,  3.13212943],       [ 2.12771654,  3.50152445],       [ 1.90106416,  3.33123827],       [ 2.46085954,  4.1394577 ],       [ 1.95343828,  3.49294996],       [ 1.44216084,  2.82733464],       [ 2.02272701,  3.57112956],       [ 2.41313076,  4.00891685],       [ 2.56212139,  4.17732763],       [ 1.50563645,  2.84861469],       [ 3.04018378,  4.90178585],       [ 1.79434872,  3.16035509],       [ 0.77163976,  1.88252807],       [ 2.56374645,  4.13604784],       [ 1.25179136,  2.57007217],       [ 1.27279091,  2.43468451]], dtype=float32
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.17532433e+02],       [  5.47000000e+02,   5.71221542e+01],       [  1.73200000e+03,   2.73337994e+01],       [  5.47700000e+03,   1.15462484e+01],       [  3.16220000e+04,   5.71240711e+00]]
SpectrumError = [[  1.73000000e+02,   8.60621490e+01,   1.49055191e+02],       [  5.47000000e+02,   5.16788025e+01,   6.25655060e+01],       [  1.73200000e+03,   2.55194302e+01,   2.91481686e+01],       [  5.47700000e+03,   1.05776138e+01,   1.25148830e+01],       [  3.16220000e+04,   5.06175852e+00,   6.40727758e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]