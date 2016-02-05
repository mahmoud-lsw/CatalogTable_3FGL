Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 11.00991344,   9.33871937,   9.46363068,   7.41316509,         8.51940823,   7.43575716,   7.25972891,   5.54232645,         8.99142838,  13.93037701,  12.65987778,  13.85071754,         7.91532612,   8.93701077,  10.31513119,   7.17744017,         9.7321558 ,   4.74001408,   4.52450943,   4.93769217,         5.58143568,   5.24060535,   3.02783465,   3.95528483,         5.96679068,   4.99944067,   4.79831791,   4.71357918,         5.31025553,   3.98262024,   4.69222307,   3.8502214 ,         8.49468994,   5.93407297,   6.2300272 ,   7.14360619,         5.9452095 ,   6.15784883,   6.64524364,   6.15134335,         4.79421186,   5.39384985,   6.85401487,   5.5376544 ,         4.98166132,   2.80328107,   5.08326769,   5.19211388]
FluxHistoryError = [[  9.61112022,  12.4989233 ],       [  8.16048145,  10.58426666],       [  8.19283009,  10.77231121],       [  6.2942152 ,   8.59660625],       [  7.27808714,   9.83808231],       [  6.27108526,   8.67020607],       [  6.11473179,   8.48686886],       [  4.40450573,   6.77124405],       [  7.82959747,  10.18991756],       [ 12.48195648,  15.45610237],       [ 11.35583496,  14.02533531],       [ 12.385746  ,  15.38596821],       [  6.74901295,   9.17692184],       [  7.62275267,  10.32550049],       [  9.07240772,  11.62601089],       [  6.01454878,   8.42013454],       [  8.49315453,  11.04027462],       [  3.71678877,   5.86720896],       [  3.54590631,   5.59531498],       [  3.95030832,   6.01602888],       [  4.54342175,   6.70656013],       [  4.26592207,   6.2964325 ],       [  2.21765733,   3.94829273],       [  3.08897662,   4.91575718],       [  4.83316088,   7.1802516 ],       [  4.03833389,   6.02475119],       [  3.80624604,   5.87243271],       [  3.7395153 ,   5.76342487],       [  4.33052969,   6.37089491],       [  2.97560167,   5.09586716],       [  3.73827028,   5.75513411],       [  2.84025407,   4.95664024],       [  7.27865314,   9.79372883],       [  4.90673447,   7.04328632],       [  5.15534687,   7.39103365],       [  6.0253315 ,   8.33419609],       [  4.88358021,   7.09518623],       [  5.1196084 ,   7.29302597],       [  5.57078362,   7.77373266],       [  5.16084242,   7.23062611],       [  3.79163694,   5.89725828],       [  4.32315731,   6.57229996],       [  5.79491615,   7.97473049],       [  4.46932602,   6.7078371 ],       [  4.01739597,   6.00832176],       [  1.95446908,   3.76469731],       [  4.06886053,   6.16862869],       [  4.14251232,   6.33248901]], dtype=float32
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   4.80459564e+02],       [  5.47000000e+02,   1.66040741e+02],       [  1.73200000e+03,   4.86561089e+01],       [  5.47700000e+03,   1.41563730e+01],       [  3.16220000e+04,   2.34013462e+00]]
SpectrumError = [[  1.73000000e+02,   4.48598267e+02,   5.12320862e+02],       [  5.47000000e+02,   1.59489059e+02,   1.72592422e+02],       [  1.73200000e+03,   4.64534988e+01,   5.08587189e+01],       [  5.47700000e+03,   1.31283455e+01,   1.51844006e+01],       [  3.16220000e+04,   1.95246649e+00,   2.77813864e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]