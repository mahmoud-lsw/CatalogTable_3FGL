Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [  8.32757759,   8.08796024,  10.55587101,   5.87872314,         6.34189034,  11.87398529,  13.82289124,   8.28019524,        11.56617641,  12.65133858,  15.16034412,  14.0033865 ,        14.26384449,   8.35128403,  10.50342941,   7.11869907,        12.7626009 ,   5.52671671,   5.54598236,  13.5886507 ,         8.81163311,  12.73883915,  10.35474968,   9.51796436,        16.17584229,  18.18167305,  16.38633156,  12.26080322,         3.50897694,   8.35402393,  12.62969971,  15.05638885,        14.84703541,   9.36735821,  24.24972916,  13.47540474,        17.62188339,   5.28958082,   9.07676601,   6.75983715,        12.26955414,  17.57691002,  15.92321491,   6.57999659,        15.52536488,   9.98506355,  18.28728867,  11.7584753 ]
FluxHistoryError = [[  4.14388943,  12.87843513],       [  3.75119448,  12.58820343],       [  6.82873583,  14.5468502 ],       [  1.84613609,  10.39819527],       [  1.85650873,  11.23754883],       [  7.37997293,  16.54454422],       [  9.30072689,  18.49550438],       [  3.6504426 ,  13.19828987],       [  7.1486659 ,  16.27088165],       [  8.36884308,  17.43291855],       [ 10.67018127,  19.9774971 ],       [ 10.06213951,  18.32898712],       [  9.50446033,  19.24902153],       [  4.25365067,  13.01293755],       [  5.68886518,  15.68388653],       [  2.14060974,  12.45273972],       [  7.95798063,  17.87557793],       [  0.5465107 ,  10.9952898 ],       [  1.09126997,  10.39658356],       [  8.55234909,  18.87699509],       [  3.83090019,  14.2006979 ],       [  7.95324373,  17.99035454],       [  3.76206779,  17.46824074],       [  4.71152496,  14.59958076],       [ 10.48510361,  22.14451981],       [ 13.11920643,  23.41739845],       [ 11.07586384,  21.98164749],       [  7.14528084,  17.88776779],       [  0.        ,  11.72663879],       [  3.64392471,  13.31702232],       [  7.9930191 ,  17.63032341],       [ 10.14089203,  20.26737404],       [  9.93105316,  19.9663105 ],       [  4.69245863,  14.39329147],       [ 18.80965042,  29.84111786],       [  8.36392212,  18.99728012],       [ 12.09582043,  23.38115311],       [  0.73210096,  10.32769585],       [  3.37179899,  15.63025475],       [  2.35512352,  11.87042713],       [  7.06948328,  17.80434418],       [ 12.43206024,  22.95877838],       [ 10.98097038,  21.26343155],       [  1.4908514 ,  11.96621609],       [ 11.16925049,  20.12818146],       [  5.18504524,  14.99311829],       [ 13.10215855,  23.7716465 ],       [  6.48979902,  17.33546066]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   3.38450378e+02],       [  5.47000000e+02,   2.87644073e+02],       [  1.73200000e+03,   1.13431961e+02],       [  5.47700000e+03,   2.38080521e+01],       [  3.16220000e+04,   2.05281401e+00]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   1.04286743e+03],       [  5.47000000e+02,   1.99569885e+02,   3.74048920e+02],       [  1.73200000e+03,   1.00552841e+02,   1.26509384e+02],       [  5.47700000e+03,   2.09654846e+01,   2.67517014e+01],       [  3.16220000e+04,   1.44231081e+00,   2.73791265e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]