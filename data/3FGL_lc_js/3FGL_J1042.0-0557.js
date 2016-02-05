Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.3007406 ,  0.36254415,  0.        ,  0.        ,  0.        ,        0.        ,  0.        ,  0.84131706,  0.        ,  0.78564233,        0.55145168,  0.        ,  0.        ,  0.        ,  0.56750447,        0.16321866,  0.17426082,  0.98588079,  0.23731042,  1.02627492,        0.        ,  0.        ,  1.05216157,  0.        ,  0.05392379,        0.25521308,  0.78187591,  0.41260165,  0.82816261,  0.        ,        0.17009285,  0.73863328,  0.24406064,  0.10869741,  0.74112999,        0.        ,  0.2201138 ,  0.68543267,  0.49451834,  0.        ,        0.68386763,  0.        ,  0.55675226,  2.29486585,  0.06674898,        0.        ,  0.        ,  0.78475189]
FluxHistoryError = [[ 0.        ,  2.03311145],       [ 0.04642338,  0.83879673],       [ 0.        ,  0.97328448],       [ 0.        ,  0.94019955],       [ 0.        ,  1.23965359],       [ 0.        ,  1.08702171],       [ 0.        ,  1.27645659],       [ 0.03504527,  1.75617981],       [ 0.        ,  0.8429603 ],       [ 0.26706314,  1.49234629],       [ 0.14787811,  1.10208559],       [ 0.        ,  0.80443299],       [ 0.        ,  1.33916903],       [ 0.        ,  0.93551326],       [ 0.16209182,  1.22418571],       [ 0.        ,  1.52660756],       [ 0.        ,  1.58217821],       [ 0.4544425 ,  1.69052362],       [ 0.        ,  1.58738674],       [ 0.3244974 ,  1.95711768],       [ 0.        ,  1.15219939],       [ 0.        ,  0.99016833],       [ 0.50679725,  1.75916576],       [ 0.        ,  0.98099095],       [ 0.        ,  1.33343739],       [ 0.        ,  1.95806593],       [ 0.10555273,  1.70196223],       [ 0.06811863,  0.96410775],       [ 0.28677475,  1.63687909],       [ 0.        ,  1.01556039],       [ 0.        ,  1.71813241],       [ 0.23724985,  1.48463464],       [ 0.        ,  2.07766819],       [ 0.        ,  1.51405524],       [ 0.        ,  2.50203454],       [ 0.        ,  1.08758235],       [ 0.        ,  2.01394932],       [ 0.22172454,  1.43515074],       [ 0.01649082,  1.14261758],       [ 0.        ,  1.31833005],       [ 0.27265009,  1.27327967],       [ 0.        ,  1.01121736],       [ 0.15380317,  1.25490379],       [ 1.38192546,  3.3059876 ],       [ 0.        ,  1.66602361],       [ 0.        ,  0.7867614 ],       [ 0.        ,  1.41219103],       [ 0.        ,  3.09394836]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   6.68377228e+01],       [  5.47000000e+02,   5.74251652e+00],       [  1.73200000e+03,   7.86502242e-01],       [  5.47700000e+03,   7.19279766e-01],       [  3.16220000e+04,   2.44427323e-01]]
SpectrumError = [[  1.73000000e+02,   4.18806305e+01,   9.22297134e+01],       [  5.47000000e+02,   1.77511811e+00,   9.83649826e+00],       [  1.73200000e+03,   1.38159573e-01,   1.55877519e+00],       [  5.47700000e+03,   4.45464224e-01,   1.05805707e+00],       [  3.16220000e+04,   1.11310646e-01,   4.46407527e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]