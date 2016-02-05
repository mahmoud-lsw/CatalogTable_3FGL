Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 1.46523857,  1.69452786,  1.6263783 ,  0.72214007,  1.84521377,        1.62371147,  2.22983098,  0.99166852,  1.79822147,  3.05199599,        0.230762  ,  1.66290987,  2.15009308,  1.78544116,  2.01467061,        1.87725413,  2.37664437,  1.49307144,  1.89239216,  1.63047421,        1.24060369,  2.4226799 ,  2.61615372,  2.08394146,  0.95311642,        1.40816927,  1.4805609 ,  1.52953935,  1.38638556,  1.67060232,        2.13722014,  2.37790394,  2.65294909,  1.33274293,  1.87944698,        2.77170682,  1.97706914,  0.81587803,  2.12818742,  1.45663345,        1.50796652,  2.10091901,  1.11028326,  0.81021136,  1.18650043,        1.37880337,  1.22356915,  2.39709044]
FluxHistoryError = [[ 0.81360483,  2.17293668],       [ 0.93869132,  2.5891366 ],       [ 0.92475814,  2.37196994],       [ 0.25703403,  1.32887685],       [ 1.1848886 ,  2.60748124],       [ 1.0547204 ,  2.29054236],       [ 1.37985516,  3.18250942],       [ 0.47962075,  1.62863004],       [ 1.1396414 ,  2.58056951],       [ 2.29677749,  3.88729024],       [ 0.        ,  1.70832109],       [ 1.02650547,  2.4145956 ],       [ 1.50073886,  2.89548492],       [ 1.10034466,  2.56505775],       [ 1.33375752,  2.76460695],       [ 1.20321941,  2.65843964],       [ 1.72100306,  3.10539865],       [ 0.872751  ,  2.23622227],       [ 1.25941825,  2.61755157],       [ 1.09749651,  2.23689103],       [ 0.7064454 ,  1.89450026],       [ 1.82642436,  3.08630109],       [ 1.86035705,  3.45205832],       [ 1.50351048,  2.72830272],       [ 0.47121191,  1.55386448],       [ 0.83967555,  2.07880163],       [ 0.95078993,  2.09971952],       [ 0.92583489,  2.25072098],       [ 0.88295102,  1.97202516],       [ 0.99886507,  2.45238256],       [ 1.52890205,  2.81778455],       [ 1.57311106,  3.30610681],       [ 1.89150512,  3.49434471],       [ 0.77093524,  1.9987483 ],       [ 1.21811914,  2.65408421],       [ 2.11624193,  3.49102664],       [ 1.2641108 ,  2.82191372],       [ 0.33894345,  1.40424299],       [ 1.44293141,  2.91773915],       [ 0.92375135,  2.08202243],       [ 0.94382954,  2.16350889],       [ 1.40085649,  2.90337324],       [ 0.62235683,  1.68734407],       [ 0.3089962 ,  1.47839522],       [ 0.74102426,  1.72325623],       [ 0.69307667,  2.14717317],       [ 0.71662587,  1.81613374],       [ 1.70890331,  3.16305876]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   9.31517487e+01],       [  5.47000000e+02,   5.25646935e+01],       [  1.73200000e+03,   1.91165543e+01],       [  5.47700000e+03,   4.62393379e+00],       [  3.16220000e+04,   2.20940813e-01]]
SpectrumError = [[  1.73000000e+02,   6.94475937e+01,   1.17068848e+02],       [  5.47000000e+02,   4.70405197e+01,   5.82001648e+01],       [  1.73200000e+03,   1.74845982e+01,   2.07485104e+01],       [  5.47700000e+03,   3.99638224e+00,   5.30273628e+00],       [  3.16220000e+04,   9.13424641e-02,   3.99173021e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]