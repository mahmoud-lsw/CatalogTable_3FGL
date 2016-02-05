Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 2.26970434,  2.2836473 ,  2.92614651,  2.22635269,  0.        ,        2.170439  ,  1.06385326,  0.        ,  0.        ,  0.        ,        0.66472065,  0.        ,  0.        ,  1.10634267,  0.        ,        2.17143631,  0.        ,  0.        ,  0.        ,  7.48260927,        1.24210024,  1.2108984 ,  0.        ,  0.05302824,  1.07894659,        0.        ,  2.5400753 ,  2.43446898,  3.47482371,  0.62952077,        1.07041574,  0.65369743,  1.44686151,  0.        ,  0.14013751,        0.        ,  4.08719778,  2.24609709,  0.47441775,  0.40353113,        0.40318078,  0.        ,  0.46049169,  0.        ,  0.08476706,        0.98823041,  0.27074853,  2.33665347]
FluxHistoryError = [[ 1.04921877,  3.66982532],       [ 0.98336136,  3.7440691 ],       [ 1.52001548,  4.47907877],       [ 0.95537293,  3.62296009],       [ 0.        ,  2.73760748],       [ 0.89807379,  3.5435009 ],       [ 0.        ,  4.34485817],       [ 0.        ,  2.50098777],       [ 0.        ,  2.09701514],       [ 0.        ,  1.68756032],       [ 0.        ,  3.0576967 ],       [ 0.        ,  1.93678236],       [ 0.        ,  2.26373172],       [ 0.        ,  4.45553768],       [ 0.        ,  2.44835496],       [ 0.62323868,  3.9406848 ],       [ 0.        ,  2.68995833],       [ 0.        ,  3.2239151 ],       [ 0.        ,  3.40287375],       [ 5.43276215,  9.70782566],       [ 0.1106894 ,  2.63217306],       [ 0.        ,  4.1706326 ],       [ 0.        ,  3.21801972],       [ 0.        ,  4.02205004],       [ 0.        ,  4.20492387],       [ 0.        ,  3.20328379],       [ 1.057531  ,  4.25453758],       [ 1.12133288,  3.95525551],       [ 2.03789091,  5.11519623],       [ 0.        ,  3.63635409],       [ 0.        ,  4.39618492],       [ 0.        ,  4.05041045],       [ 0.        ,  5.15198565],       [ 0.        ,  2.64416695],       [ 0.        ,  3.11496313],       [ 0.        ,  3.11575723],       [ 2.38760638,  5.9594717 ],       [ 0.49614298,  4.28965712],       [ 0.        ,  3.8841365 ],       [ 0.        ,  3.45716482],       [ 0.        ,  3.79726404],       [ 0.        ,  2.83112216],       [ 0.        ,  4.22366861],       [ 0.        ,  1.80447125],       [ 0.        ,  3.57335205],       [ 0.        ,  4.13948601],       [ 0.        ,  2.63068619],       [ 1.02289712,  3.90262318]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   8.08175125e+01],       [  5.47000000e+02,   1.73041992e+01],       [  1.73200000e+03,   8.81947637e-01],       [  5.47700000e+03,   2.86812127e-01],       [  3.16220000e+04,   5.67547828e-02]]
SpectrumError = [[  1.73000000e+02,   4.91541443e+01,   1.12779488e+02],       [  5.47000000e+02,   1.26096964e+01,   2.21346569e+01],       [  1.73200000e+03,   1.77184939e-01,   1.69273758e+00],       [  5.47700000e+03,   8.99120420e-02,   5.39422393e-01],       [  3.16220000e+04,   0.00000000e+00,   3.91839609e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]