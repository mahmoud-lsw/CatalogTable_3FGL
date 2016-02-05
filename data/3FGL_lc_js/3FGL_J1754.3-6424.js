Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  1.59810853,  0.        ,  1.40587366,  0.        ,        2.52053666,  0.        ,  0.        ,  3.26269865,  3.59158206,        0.        ,  3.82937074,  0.76959914,  1.40172577,  1.34695363,        1.62099683,  1.83338165,  2.24398398,  1.11140728,  0.83664286,        0.        ,  0.26685682,  0.        ,  2.40506577,  3.48552513,        0.        ,  0.        ,  1.29914558,  0.        ,  0.55741668,        0.        ,  1.93444049,  2.60848641,  0.        ,  1.64864182,        3.3366518 ,  2.97230697,  0.        ,  4.11456776,  0.        ,        0.        ,  0.70116818,  3.02227974,  1.79968524,  0.        ,        1.79955399,  0.        ,  0.        ]
FluxHistoryError = [[ 0.        ,  3.72793317],       [ 0.15003169,  3.31424332],       [ 0.        ,  2.70094848],       [ 0.19824719,  2.99497128],       [ 0.        ,  2.58288026],       [ 1.07407677,  4.20545292],       [ 0.        ,  3.23788047],       [ 0.        ,  3.64303684],       [ 1.84676039,  4.91154432],       [ 2.1167264 ,  5.27401781],       [ 0.        ,  2.56357932],       [ 2.24435616,  5.5932374 ],       [ 0.        ,  3.97161072],       [ 0.17968881,  2.76338124],       [ 0.52464831,  2.36807084],       [ 0.57027531,  2.90891647],       [ 0.87922764,  3.00425291],       [ 0.93506908,  3.76523352],       [ 0.3329702 ,  2.09668732],       [ 0.        ,  3.88569343],       [ 0.        ,  2.58493042],       [ 0.        ,  2.8935968 ],       [ 0.        ,  2.20612907],       [ 1.21018243,  3.7511766 ],       [ 1.86747718,  5.22963428],       [ 0.        ,  3.03701735],       [ 0.        ,  2.96462846],       [ 0.090451  ,  2.72501326],       [ 0.        ,  2.26523089],       [ 0.        ,  3.16730404],       [ 0.        ,  1.79593015],       [ 0.59510124,  3.54813886],       [ 1.05698884,  4.30728436],       [ 0.        ,  3.04159832],       [ 0.40268087,  3.0810225 ],       [ 2.02482939,  4.75985432],       [ 1.64803481,  4.43578529],       [ 0.        ,  2.63609838],       [ 2.55383539,  5.84397411],       [ 0.        ,  2.21238375],       [ 0.        ,  2.26919699],       [ 0.        ,  2.97519195],       [ 1.71639752,  4.50169182],       [ 0.44640815,  3.41573262],       [ 0.        ,  2.27531195],       [ 0.22859514,  3.53028631],       [ 0.        ,  2.31654501],       [ 0.        ,  2.22583628]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.09060913e+02],       [  5.47000000e+02,   2.02649975e+01],       [  1.73200000e+03,   4.25924206e+00],       [  5.47700000e+03,   5.56537151e-01],       [  3.16220000e+04,   1.70018509e-01]]
SpectrumError = [[  1.73000000e+02,   7.28455048e+01,   1.46205032e+02],       [  5.47000000e+02,   1.50039415e+01,   2.56734180e+01],       [  1.73200000e+03,   3.24180317e+00,   5.35976601e+00],       [  5.47700000e+03,   2.93052286e-01,   8.91525745e-01],       [  3.16220000e+04,   6.32248297e-02,   3.27745676e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]