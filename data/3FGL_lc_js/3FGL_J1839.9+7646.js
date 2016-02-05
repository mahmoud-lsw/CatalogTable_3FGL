Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.        ,  0.58589965,  0.62038732,  0.84446859,        0.6701743 ,  0.        ,  0.        ,  1.15472996,  0.        ,        0.        ,  0.68565238,  0.        ,  0.83685821,  0.29463306,        0.        ,  0.05400768,  0.11538048,  0.        ,  0.23452303,        2.35399318,  0.        ,  0.23602882,  0.4662883 ,  1.61022508,        0.        ,  1.20120585,  0.35152191,  0.42412737,  1.08358085,        0.        ,  0.85565323,  1.93865919,  0.        ,  0.        ,        2.07600403,  1.74046373,  0.        ,  0.10204966,  0.6313985 ,        2.06769848,  1.44033241,  2.74878383,  2.08106518,  3.05104113,        0.30612734,  2.31942868,  1.67729437]
FluxHistoryError = [[ 0.        ,  2.96290803],       [ 0.        ,  2.69121718],       [ 0.        ,  3.20673877],       [ 0.        ,  3.43170953],       [ 0.06709635,  1.93251431],       [ 0.        ,  3.51694649],       [ 0.        ,  1.68951523],       [ 0.        ,  1.30531514],       [ 0.        ,  4.02724516],       [ 0.        ,  2.15059376],       [ 0.        ,  2.90475869],       [ 0.        ,  2.7447387 ],       [ 0.        ,  2.42928219],       [ 0.        ,  3.18237537],       [ 0.        ,  1.87534001],       [ 0.        ,  1.49854815],       [ 0.        ,  1.45435229],       [ 0.        ,  2.34989639],       [ 0.        ,  2.26182532],       [ 0.        ,  2.44833681],       [ 1.19478464,  3.62132788],       [ 0.        ,  2.02032495],       [ 0.        ,  2.37135044],       [ 0.        ,  2.99985835],       [ 0.5992825 ,  2.73210096],       [ 0.        ,  2.40492225],       [ 0.18155968,  2.3566184 ],       [ 0.        ,  2.49804658],       [ 0.        ,  2.92526272],       [ 0.34514815,  2.01747704],       [ 0.        ,  2.1486423 ],       [ 0.        ,  3.1471886 ],       [ 0.62492752,  3.30582905],       [ 0.        ,  1.86689138],       [ 0.        ,  2.00845981],       [ 1.10713816,  3.14944506],       [ 0.56072676,  3.02123117],       [ 0.        ,  2.20097876],       [ 0.        ,  2.01810069],       [ 0.        ,  2.88068873],       [ 1.04259813,  3.22846317],       [ 0.23426104,  2.71359444],       [ 1.55668235,  4.00609589],       [ 0.95986378,  3.29977465],       [ 1.73925972,  4.45509768],       [ 0.        ,  2.48534086],       [ 1.27294147,  3.49109221],       [ 0.66326761,  2.85203314]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   4.86940880e+01],       [  5.47000000e+02,   1.15924234e+01],       [  1.73200000e+03,   1.65259778e+00],       [  5.47700000e+03,   4.41805929e-01],       [  3.16220000e+04,   2.94614071e-03]]
SpectrumError = [[  1.73000000e+02,   2.47921963e+01,   7.30777893e+01],       [  5.47000000e+02,   7.58913755e+00,   1.57215004e+01],       [  1.73200000e+03,   9.31442082e-01,   2.45725083e+00],       [  5.47700000e+03,   2.35056698e-01,   7.02088058e-01],       [  3.16220000e+04,   0.00000000e+00,   2.38061237e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]