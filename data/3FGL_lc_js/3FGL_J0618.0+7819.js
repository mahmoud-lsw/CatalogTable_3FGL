Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 1.01058173,  0.        ,  1.90898228,  1.40809071,  0.        ,        0.        ,  3.4501276 ,  0.85560286,  1.42777598,  0.50255334,        0.05053579,  1.54435062,  0.        ,  2.38945889,  1.39724767,        0.75873661,  0.32383728,  2.5011332 ,  1.41165149,  1.43161166,        0.        ,  0.        ,  0.        ,  0.        ,  1.57658994,        1.18429697,  1.38109601,  1.15638828,  0.13471246,  0.        ,        0.        ,  0.30931181,  0.        ,  0.        ,  0.60213101,        0.        ,  0.        ,  0.        ,  0.        ,  1.87117147,        0.44931677,  0.        ,  0.        ,  0.25083804,  1.02798283,        0.83002371,  0.57389045,  0.47427297]
FluxHistoryError = [[ 0.1792137 ,  2.09610367],       [ 0.        ,  1.73478234],       [ 0.65350103,  3.29190731],       [ 0.30859518,  2.67409945],       [ 0.        ,  2.34002924],       [ 0.        ,  2.3990252 ],       [ 2.125453  ,  4.8837862 ],       [ 0.        ,  3.20402014],       [ 0.55076736,  2.4773922 ],       [ 0.        ,  2.68504393],       [ 0.        ,  2.28939855],       [ 0.51573956,  2.733284  ],       [ 0.        ,  1.53640091],       [ 1.44182277,  3.45351887],       [ 0.65068173,  2.29801083],       [ 0.16871995,  1.51844859],       [ 0.        ,  1.79411948],       [ 1.39045298,  3.69852829],       [ 0.7417205 ,  2.21546769],       [ 0.48705351,  2.47275925],       [ 0.        ,  1.57229328],       [ 0.        ,  1.71399868],       [ 0.        ,  1.46846664],       [ 0.        ,  1.32972026],       [ 0.8600474 ,  2.42867851],       [ 0.31809306,  2.18651438],       [ 0.4825393 ,  2.41386938],       [ 0.27777743,  2.13231325],       [ 0.        ,  1.97119582],       [ 0.        ,  1.32529724],       [ 0.        ,  1.48829627],       [ 0.        ,  2.20563489],       [ 0.        ,  1.79269814],       [ 0.        ,  1.78304338],       [ 0.        ,  2.20424008],       [ 0.        ,  1.53020597],       [ 0.        ,  1.40670037],       [ 0.        ,  1.55828369],       [ 0.        ,  1.51202905],       [ 1.0581913 ,  2.80669713],       [ 0.03031278,  1.11428607],       [ 0.        ,  1.34938705],       [ 0.        ,  1.41505492],       [ 0.        ,  2.29568052],       [ 0.30937499,  1.91407907],       [ 0.18131417,  1.65239859],       [ 0.        ,  2.03607678],       [ 0.        ,  2.78603506]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   7.40762787e+01],       [  5.47000000e+02,   1.08255415e+01],       [  1.73200000e+03,   1.26533139e+00],       [  5.47700000e+03,   5.21200359e-01],       [  3.16220000e+04,   1.38555825e-01]]
SpectrumError = [[  1.73000000e+02,   5.25253448e+01,   9.58819885e+01],       [  5.47000000e+02,   7.05027390e+00,   1.47242737e+01],       [  1.73200000e+03,   5.92392206e-01,   2.01637578e+00],       [  5.47700000e+03,   3.12041789e-01,   7.75427818e-01],       [  3.16220000e+04,   6.33169413e-02,   2.50731200e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]