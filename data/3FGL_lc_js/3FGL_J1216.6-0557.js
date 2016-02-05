Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 2.04028535,  0.78002048,  3.79702711,  0.10419475,  2.89367509,        0.        ,  0.38783517,  0.        ,  1.07902777,  2.86902404,        1.30806184,  1.42219496,  0.84848636,  1.14644122,  1.13412845,        1.30163312,  0.        ,  0.        ,  0.        ,  2.80419326,        4.16210938,  0.48141503,  0.        ,  0.        ,  0.        ,        0.32383814,  2.95506382,  3.74433494,  3.7597754 ,  0.        ,        0.7605949 ,  2.26239634,  4.99263048,  1.37747419,  1.91678405,        3.27100086,  0.        ,  0.54805255,  0.        ,  0.        ,        0.        ,  0.        ,  0.70382237,  0.36396343,  0.        ,        0.48631087,  2.92390037,  1.1236136 ]
FluxHistoryError = [[ 0.50028038,  3.80038619],       [ 0.        ,  3.61900854],       [ 2.46886849,  5.29368258],       [ 0.        ,  3.37028372],       [ 1.53249478,  4.44740152],       [ 0.        ,  2.59598541],       [ 0.        ,  3.15220681],       [ 0.        ,  2.27439308],       [ 0.09803051,  2.22050858],       [ 1.57976866,  4.36428547],       [ 0.        ,  4.21832085],       [ 0.17589056,  2.81693792],       [ 0.        ,  4.23740786],       [ 0.        ,  4.16489172],       [ 0.        ,  4.58337009],       [ 0.        ,  4.6539824 ],       [ 0.        ,  2.33185029],       [ 0.        ,  2.67569375],       [ 0.        ,  2.29725432],       [ 1.00295484,  4.86715364],       [ 2.58795404,  5.9134984 ],       [ 0.        ,  3.69981313],       [ 0.        ,  1.55804718],       [ 0.        ,  2.77755666],       [ 0.        ,  3.17164278],       [ 0.        ,  3.7113215 ],       [ 0.8111434 ,  5.14857817],       [ 2.23595905,  5.45380497],       [ 1.72374439,  5.97386789],       [ 0.        ,  3.09795809],       [ 0.        ,  3.80885798],       [ 0.53869402,  4.15221405],       [ 3.12785196,  7.05933619],       [ 0.        ,  5.06603301],       [ 0.44079578,  3.60163331],       [ 0.89072156,  5.86916494],       [ 0.        ,  3.35439014],       [ 0.        ,  4.16665769],       [ 0.        ,  3.69394803],       [ 0.        ,  2.02255893],       [ 0.        ,  2.79698157],       [ 0.        ,  2.1227777 ],       [ 0.        ,  3.52592325],       [ 0.        ,  4.27786762],       [ 0.        ,  2.31770182],       [ 0.        ,  3.40765086],       [ 1.14300597,  4.85756636],       [ 0.        ,  5.34932113]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   9.90088120e+01],       [  5.47000000e+02,   1.46704836e+01],       [  1.73200000e+03,   3.14882231e+00],       [  5.47700000e+03,   7.67480910e-01],       [  3.16220000e+04,   1.03136255e-04]]
SpectrumError = [[  1.73000000e+02,   5.22045250e+01,   1.46591232e+02],       [  5.47000000e+02,   9.08013535e+00,   2.04756050e+01],       [  1.73200000e+03,   2.11248231e+00,   4.28784132e+00],       [  5.47700000e+03,   4.12480384e-01,   1.19009757e+00],       [  3.16220000e+04,   0.00000000e+00,   2.65668561e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]