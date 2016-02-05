Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 13.68340206,  26.55242157,  20.00125885,  27.04337311,        25.84314346,  24.10757065,  26.38101006,  29.77190208,        25.54288292,  15.72136497,  19.98113251,  22.43019104,        15.67902946,  17.83750534,  16.89985657,  14.54657173,        18.16997719,  19.42148972,  34.77306366,  18.63869858,        17.5325222 ,  18.41575241,  24.63838577,  16.32513809,        27.76209259,  17.38402748,  21.20369339,  20.1545639 ,        18.99021912,  15.27649689,  20.9171257 ,  24.63921738,        25.40341759,  16.91746521,  20.20809555,  18.81976128,        20.01877785,  15.88700676,  31.3993721 ,   6.77694082,        28.2571106 ,  17.72555733,  21.63531113,  34.04005051,        22.8848629 ,   9.92084599,  15.07509327,  18.39151001]
FluxHistoryError = [[  8.52176189,  18.96245766],       [ 20.67837715,  32.51567841],       [ 15.10779381,  24.96741676],       [ 21.53571701,  32.55921555],       [ 20.33514977,  31.31386185],       [ 18.89085007,  29.36980057],       [ 20.57513618,  32.38571548],       [ 24.22711182,  35.17097473],       [ 19.86402893,  31.29759407],       [ 10.78689766,  20.68801498],       [ 14.3262682 ,  25.67912292],       [ 17.20409393,  27.75812149],       [  9.90647125,  22.2007122 ],       [ 12.19034004,  23.64095497],       [ 11.44581032,  22.52047729],       [  8.83397675,  20.39505196],       [ 12.80626583,  23.70595932],       [ 12.67265606,  26.28327942],       [ 29.27619362,  40.40163422],       [ 12.7497654 ,  24.55297661],       [ 11.90178204,  23.24039268],       [ 13.33112907,  23.61377335],       [ 17.62214279,  31.70009995],       [ 11.36118221,  21.42422485],       [ 20.97038078,  34.54593277],       [ 12.17367363,  22.65618515],       [ 15.44821548,  27.06113052],       [ 14.26778984,  26.3170948 ],       [ 13.62073803,  24.36721802],       [  9.49420929,  21.24111938],       [ 16.36667824,  25.53259277],       [ 17.65055847,  31.83984375],       [ 19.43453217,  31.41378212],       [ 10.65666008,  23.23127937],       [ 14.67402363,  25.8413105 ],       [ 13.369174  ,  24.27649498],       [ 14.08438396,  26.1359539 ],       [ 10.96004391,  20.92495346],       [ 24.29014587,  38.8369751 ],       [  1.98446703,  11.62780952],       [ 21.91524887,  34.66465378],       [ 12.69648838,  22.89880371],       [ 16.61063957,  27.04703903],       [ 27.70375824,  40.03864288],       [ 17.89958763,  27.97875595],       [  3.74080038,  16.13090515],       [  9.64699173,  20.596735  ],       [ 11.91457558,  24.9893322 ]], dtype=float32
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.61391800e+02],       [  5.47000000e+02,   9.67848816e+02],       [  1.73200000e+03,   3.18436310e+02],       [  5.47700000e+03,   5.15529938e+01],       [  3.16220000e+04,   3.05515385e+00]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   8.92366470e+02],       [  5.47000000e+02,   8.25777954e+02,   1.11077539e+03],       [  1.73200000e+03,   2.71522064e+02,   3.66144287e+02],       [  5.47700000e+03,   4.49768143e+01,   5.81652832e+01],       [  3.16220000e+04,   2.06595421e+00,   4.13392305e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]