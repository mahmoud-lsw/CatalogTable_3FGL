Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.11506393,  3.06043339,  5.12241268,  1.07370436,        0.4176496 ,  1.23829758,  0.        ,  1.61458278,  1.61299634,        0.4434351 ,  0.        ,  1.93945694,  0.        ,  4.02581787,        0.61458266,  0.        ,  2.76394534,  0.        ,  0.        ,        4.46525764,  0.        ,  2.91421676,  1.06987309,  0.        ,        1.53290248,  1.53944433,  0.84714067,  2.63985348,  0.        ,        0.        ,  3.43029666,  2.22047138,  0.        ,  1.67375648,        2.65634227,  0.75805408,  1.31913269,  0.80755121,  0.        ,        1.22744226,  0.1753965 ,  0.23237006,  0.        ,  0.        ,        1.39679015,  0.        ,  1.8161974 ]
FluxHistoryError = [[ 0.        ,  4.47083759],       [ 0.        ,  5.32432773],       [ 0.96892762,  5.42121792],       [ 3.08983636,  7.47322559],       [ 0.        ,  5.60773957],       [ 0.        ,  4.70516714],       [ 0.        ,  6.10135281],       [ 0.        ,  5.85880232],       [ 0.        ,  6.11349273],       [ 0.        ,  6.0560348 ],       [ 0.        ,  4.81286278],       [ 0.        ,  4.46436787],       [ 0.        ,  5.93638277],       [ 0.        ,  4.54768324],       [ 2.04367399,  6.15884542],       [ 0.        ,  4.16927516],       [ 0.        ,  2.94512129],       [ 0.62508798,  4.88487148],       [ 0.        ,  3.1967876 ],       [ 0.        ,  3.69941068],       [ 2.43709064,  6.63069391],       [ 0.        ,  2.8205514 ],       [ 1.41368067,  4.61831665],       [ 0.        ,  4.39183211],       [ 0.        ,  3.21302533],       [ 0.        ,  5.50486827],       [ 0.18264568,  3.33867645],       [ 0.        ,  4.07073629],       [ 0.71220827,  4.82415009],       [ 0.        ,  2.95871234],       [ 0.        ,  4.7247324 ],       [ 1.09963465,  5.77595186],       [ 0.24436748,  4.39262962],       [ 0.        ,  3.57288313],       [ 0.        ,  5.99171817],       [ 0.71976793,  4.81267357],       [ 0.        ,  5.14267856],       [ 0.        ,  5.33547199],       [ 0.        ,  4.04383546],       [ 0.        ,  3.01069045],       [ 0.        ,  5.24550438],       [ 0.        ,  4.00142652],       [ 0.        ,  4.92638461],       [ 0.        ,  3.31800222],       [ 0.        ,  3.66796064],       [ 0.16055596,  2.97609282],       [ 0.        ,  2.37862182],       [ 0.        ,  6.04193783]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.28992252e+01],       [  5.47000000e+02,   1.81744366e+01],       [  1.73200000e+03,   5.88775396e+00],       [  5.47700000e+03,   1.78937525e-01],       [  3.16220000e+04,   2.02086210e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   1.56753031e+02],       [  5.47000000e+02,   9.54106808e+00,   2.68741856e+01],       [  1.73200000e+03,   4.38194275e+00,   7.44698620e+00],       [  5.47700000e+03,   0.00000000e+00,   8.56699377e-01],       [  3.16220000e+04,   9.24800038e-02,   3.53279740e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]