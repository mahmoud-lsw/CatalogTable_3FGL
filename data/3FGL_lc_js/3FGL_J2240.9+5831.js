Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 1.04470873,  1.99156201,  0.50629896,  0.58728611,  1.07649171,        0.33855638,  0.82075971,  0.        ,  1.05902696,  0.68836623,        0.46505508,  1.15894723,  0.        ,  0.        ,  0.36496988,        0.42973137,  1.32168126,  0.        ,  0.84446257,  0.70928907,        1.31661677,  0.84745342,  0.54096365,  0.576267  ,  0.22297882,        0.66487354,  0.46747717,  0.7042892 ,  0.25627473,  1.07122684,        1.03188205,  2.20717072,  0.6124503 ,  0.68598521,  0.04711049,        0.42819908,  0.8077451 ,  1.03144348,  0.        ,  0.2305724 ,        0.        ,  0.35551605,  0.36868703,  0.43503037,  0.        ,        0.46656042,  0.67211449,  1.48875976]
FluxHistoryError = [[ 0.45156991,  1.74657643],       [ 1.31681728,  2.75661802],       [ 0.08083028,  1.0601052 ],       [ 0.19716126,  1.08122444],       [ 0.52547729,  1.73475075],       [ 0.        ,  1.42692217],       [ 0.25753409,  1.49643183],       [ 0.        ,  1.11456335],       [ 0.41245025,  1.79865742],       [ 0.15356046,  1.34122705],       [ 0.07139251,  0.97603595],       [ 0.5586251 ,  1.8528018 ],       [ 0.        ,  1.04702926],       [ 0.        ,  1.0963974 ],       [ 0.        ,  1.51733354],       [ 0.01378128,  0.93981993],       [ 0.75977516,  1.95811868],       [ 0.        ,  0.89489001],       [ 0.33252811,  1.45055652],       [ 0.15512335,  1.35195374],       [ 0.7989161 ,  1.91300297],       [ 0.33137268,  1.46376252],       [ 0.08736405,  1.07316256],       [ 0.        ,  1.86814237],       [ 0.        ,  1.35981117],       [ 0.21993172,  1.21980691],       [ 0.12707418,  0.94435716],       [ 0.25391781,  1.25017905],       [ 0.        ,  1.40521243],       [ 0.47438568,  1.74632192],       [ 0.47472328,  1.68724442],       [ 1.59031725,  2.89099669],       [ 0.15455338,  1.18326616],       [ 0.23241889,  1.24692559],       [ 0.        ,  1.07611637],       [ 0.05956739,  0.92892814],       [ 0.28765243,  1.41732073],       [ 0.50603539,  1.66539204],       [ 0.        ,  0.54069746],       [ 0.        ,  1.36535388],       [ 0.        ,  0.87072468],       [ 0.        ,  1.36958072],       [ 0.01021302,  0.87354624],       [ 0.05499303,  0.91285956],       [ 0.        ,  0.79697806],       [ 0.08736283,  0.95496106],       [ 0.2182706 ,  1.21311569],       [ 0.89072889,  2.19127822]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.99227982e+01],       [  5.47000000e+02,   1.20403948e+01],       [  1.73200000e+03,   1.48851604e+01],       [  5.47700000e+03,   2.42398739e+00],       [  3.16220000e+04,   5.38232507e-06]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   1.53208977e+02],       [  5.47000000e+02,   2.35415268e+00,   2.20811920e+01],       [  1.73200000e+03,   1.25496321e+01,   1.73626137e+01],       [  5.47700000e+03,   1.80506814e+00,   3.09105444e+00],       [  3.16220000e+04,   0.00000000e+00,   3.28237581e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]