Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  2.79248786,  0.85663795,  0.50083888,  0.66225463,        1.27338696,  4.39640713,  0.        ,  0.26556572,  0.03082631,        2.4717207 ,  0.        ,  0.58674151,  5.38117552,  0.        ,        1.03011608,  0.25483966,  4.39088106,  0.        ,  6.65480995,        0.        ,  3.50270677,  0.        ,  2.84046841,  3.69547701,        0.        ,  5.3239646 ,  0.90401959,  3.22322798,  1.26089787,        1.44517589,  0.        ,  0.        ,  1.22989094,  0.        ,        0.        ,  0.        ,  2.88081336,  3.54045892,  3.81350279,        6.34182262,  0.        ,  5.96551085,  0.        ,  0.        ,        0.        ,  1.23780191,  3.72629976]
FluxHistoryError = [[ 0.        ,  4.35582066],       [ 0.75282717,  5.12019253],       [ 0.        ,  4.91444826],       [ 0.        ,  5.20050299],       [ 0.        ,  3.96557313],       [ 0.        ,  5.9090147 ],       [ 2.41079283,  6.66180468],       [ 0.        ,  4.06294584],       [ 0.        ,  5.75953278],       [ 0.        ,  4.22387049],       [ 0.2955482 ,  4.94884109],       [ 0.        ,  3.38645625],       [ 0.        ,  5.56235605],       [ 3.35226226,  7.56413555],       [ 0.        ,  4.17473412],       [ 0.        ,  5.68643522],       [ 0.        ,  3.9471221 ],       [ 1.54649258,  7.46259308],       [ 0.        ,  2.54571009],       [ 3.96825695,  9.54588699],       [ 0.        ,  2.86204076],       [ 1.43164086,  5.98868465],       [ 0.        ,  4.09570742],       [ 0.91411912,  5.02182579],       [ 1.04296017,  6.36157417],       [ 0.        ,  3.39058304],       [ 2.5583117 ,  8.49224281],       [ 0.        ,  4.71593714],       [ 0.91966891,  5.47288418],       [ 0.        ,  5.77348208],       [ 0.45176148,  2.91775751],       [ 0.        ,  5.43111992],       [ 0.        ,  4.75456572],       [ 0.        ,  6.29591334],       [ 0.        ,  3.89040017],       [ 0.        ,  4.00025415],       [ 0.        ,  3.6122551 ],       [ 0.79024315,  5.10412121],       [ 0.84284639,  6.61763   ],       [ 1.99930561,  5.77257872],       [ 3.63529778,  9.23397064],       [ 0.        ,  4.51518631],       [ 3.66320634,  8.57522774],       [ 0.        ,  3.39537358],       [ 0.        ,  3.83867049],       [ 0.        ,  4.83496189],       [ 0.        ,  4.79134095],       [ 0.53208256,  7.18103981]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.86025055e+02],       [  5.47000000e+02,   2.24723110e+01],       [  1.73200000e+03,   9.67402577e-01],       [  5.47700000e+03,   5.75086951e-01],       [  3.16220000e+04,   3.97278845e-01]]
SpectrumError = [[  1.73000000e+02,   1.24849991e+02,   2.47955154e+02],       [  5.47000000e+02,   1.41947355e+01,   3.08853951e+01],       [  1.73200000e+03,   0.00000000e+00,   3.69157755e+00],       [  5.47700000e+03,   2.05889970e-01,   1.01670015e+00],       [  3.16220000e+04,   2.20700741e-01,   6.32590592e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]