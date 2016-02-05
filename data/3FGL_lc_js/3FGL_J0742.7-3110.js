Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 1.39189923,  0.80233163,  2.33933783,  1.8029089 ,  0.42024288,        2.81972694,  4.45891237,  0.6340645 ,  3.10212803,  2.22996068,        3.14277959,  4.17222881,  3.62946892,  3.54896307,  2.44241548,        0.07996237,  0.22209778,  0.        ,  0.        ,  1.64166749,        0.72932041,  1.70443237,  6.04022074,  0.        ,  0.87732327,        2.55177188,  2.44020987,  0.        ,  0.        ,  0.        ,        0.        ,  1.11240399,  1.20866096,  0.        ,  0.        ,        0.        ,  3.14727592,  0.        ,  1.35802376,  0.96635741,        0.        ,  0.        ,  1.99617183,  2.54889178,  3.84358144,        0.92654347,  1.20877004,  5.11941051]
FluxHistoryError = [[ 0.02862668,  3.43038559],       [ 0.        ,  3.80064887],       [ 0.09148169,  4.57606888],       [ 0.        ,  5.66525698],       [ 0.        ,  4.09781608],       [ 1.14911664,  4.81265688],       [ 2.58964634,  6.54217911],       [ 0.        ,  5.64239532],       [ 1.50175178,  4.87672949],       [ 0.70668125,  4.27229881],       [ 1.19697285,  5.31735325],       [ 1.93873835,  6.61542511],       [ 1.71615827,  5.68331385],       [ 1.64036071,  5.69071293],       [ 0.22950935,  4.84381676],       [ 0.        ,  4.37717402],       [ 0.        ,  5.77834454],       [ 0.        ,  3.90452909],       [ 0.        ,  4.7668581 ],       [ 0.        ,  5.6062001 ],       [ 0.        ,  4.3529979 ],       [ 0.        ,  6.76342189],       [ 3.97949982,  8.23951626],       [ 0.        ,  4.88621759],       [ 0.        ,  3.9805721 ],       [ 0.01664782,  5.13944626],       [ 0.50096416,  4.65512753],       [ 0.        ,  3.48951983],       [ 0.        ,  3.21676826],       [ 0.        ,  2.88460779],       [ 0.        ,  3.34077597],       [ 0.10245776,  2.58166575],       [ 0.        ,  5.79715335],       [ 0.        ,  2.61492276],       [ 0.        ,  3.65772629],       [ 0.        ,  4.32895803],       [ 1.38059723,  5.03949594],       [ 0.        ,  3.2909019 ],       [ 0.        ,  4.82629335],       [ 0.        ,  5.07474822],       [ 0.        ,  4.19890642],       [ 0.        ,  3.04445934],       [ 0.        ,  6.77493274],       [ 0.96692944,  4.47197819],       [ 1.50618029,  6.7071104 ],       [ 0.        ,  4.64628577],       [ 0.        ,  6.30697513],       [ 3.02231026,  7.64084244]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.13467331e+02],       [  5.47000000e+02,   3.56687813e+01],       [  1.73200000e+03,   4.43950605e+00],       [  5.47700000e+03,   9.57572341e-01],       [  3.16220000e+04,   3.81083563e-02]]
SpectrumError = [[  1.73000000e+02,   5.08958397e+01,   1.76552658e+02],       [  5.47000000e+02,   2.60153961e+01,   4.55244522e+01],       [  1.73200000e+03,   2.75292754e+00,   6.25813389e+00],       [  5.47700000e+03,   5.32223105e-01,   1.46116614e+00],       [  3.16220000e+04,   0.00000000e+00,   4.80773397e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]