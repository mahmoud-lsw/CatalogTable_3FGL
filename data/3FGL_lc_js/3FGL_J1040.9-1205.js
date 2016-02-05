Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.85703391,  0.37167394,  0.        ,  1.21636724,        1.48088717,  1.4476887 ,  0.        ,  0.80259281,  0.        ,        0.        ,  0.3348341 ,  0.42034748,  0.        ,  0.3614651 ,        0.        ,  0.        ,  2.6464746 ,  0.        ,  0.        ,        0.        ,  0.        ,  1.32677197,  0.        ,  0.14120434,        0.        ,  0.89792895,  1.05564666,  0.78517014,  0.        ,        0.        ,  0.        ,  0.        ,  0.        ,  0.        ,        0.16016497,  0.        ,  0.        ,  0.        ,  0.24148969,        2.39767408,  0.        ,  1.17966187,  0.        ,  0.        ,        1.20419383,  2.27256274,  0.        ]
FluxHistoryError = [[ 0.        ,  1.30129457],       [ 0.32199335,  1.55342579],       [ 0.        ,  2.2469039 ],       [ 0.        ,  1.61674929],       [ 0.35859054,  2.22192812],       [ 0.75657898,  2.37810302],       [ 0.76797438,  2.26513076],       [ 0.        ,  1.68435204],       [ 0.20341319,  1.5366354 ],       [ 0.        ,  1.61942554],       [ 0.        ,  1.87387586],       [ 0.        ,  1.8502512 ],       [ 0.        ,  1.99246517],       [ 0.        ,  1.69278085],       [ 0.        ,  2.50493395],       [ 0.        ,  1.15362525],       [ 0.        ,  2.26535225],       [ 1.71048284,  3.7693224 ],       [ 0.        ,  1.15540123],       [ 0.        ,  2.11649799],       [ 0.        ,  1.320593  ],       [ 0.        ,  1.98477054],       [ 0.62904501,  2.1808548 ],       [ 0.        ,  1.27847719],       [ 0.        ,  2.17034911],       [ 0.        ,  1.44053793],       [ 0.03924447,  1.97320724],       [ 0.52166146,  1.76382279],       [ 0.25700384,  1.64403009],       [ 0.        ,  1.55713022],       [ 0.        ,  1.83170259],       [ 0.        ,  1.1641978 ],       [ 0.        ,  1.74544752],       [ 0.        ,  2.02312255],       [ 0.        ,  1.60165906],       [ 0.        ,  2.86001696],       [ 0.        ,  1.41804969],       [ 0.        ,  2.8447988 ],       [ 0.        ,  1.35262966],       [ 0.        ,  2.1620919 ],       [ 1.53129709,  3.40688753],       [ 0.        ,  1.53489614],       [ 0.37919718,  2.28141356],       [ 0.        ,  1.26232922],       [ 0.        ,  1.55873501],       [ 0.3029018 ,  2.3119216 ],       [ 1.36282468,  3.33473444],       [ 0.        ,  1.56560421]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   4.49343414e+01],       [  5.47000000e+02,   2.96611953e+00],       [  1.73200000e+03,   2.43072033e+00],       [  5.47700000e+03,   7.19969749e-01],       [  3.16220000e+04,   1.47517920e-01]]
SpectrumError = [[  1.73000000e+02,   2.01541462e+01,   7.05531311e+01],       [  5.47000000e+02,   0.00000000e+00,   1.09939735e+01],       [  1.73200000e+03,   1.59732866e+00,   3.36351180e+00],       [  5.47700000e+03,   4.40638989e-01,   1.06921315e+00],       [  3.16220000e+04,   5.38932979e-02,   2.94650137e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]