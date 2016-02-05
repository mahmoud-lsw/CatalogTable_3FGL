Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.72655886,  0.82810783,  0.        ,  1.75878501,        0.        ,  0.17466517,  0.        ,  0.37514719,  0.20180276,        0.10000668,  0.        ,  1.58976901,  1.8276701 ,  1.57275212,        0.        ,  0.11751388,  0.        ,  0.38637236,  0.        ,        2.23107338,  0.5411517 ,  1.64591098,  0.        ,  0.        ,        1.88679123,  0.27882868,  1.79151702,  1.90782452,  0.09979669,        0.        ,  1.10701978,  1.81109774,  0.43636313,  0.19794151,        0.56842685,  0.        ,  0.24004026,  0.95941049,  0.77773178,        0.        ,  0.        ,  0.        ,  1.71123064,  0.44752783,        0.25038552,  1.71174347,  0.19216225]
FluxHistoryError = [[ 0.        ,  1.7646569 ],       [ 0.        ,  2.86184186],       [ 0.25057626,  1.71463132],       [ 0.        ,  2.11501145],       [ 0.80357844,  2.85589504],       [ 0.        ,  1.70869696],       [ 0.        ,  1.9314384 ],       [ 0.        ,  1.980726  ],       [ 0.        ,  1.87435183],       [ 0.        ,  2.24448612],       [ 0.        ,  1.93367289],       [ 0.        ,  1.91302454],       [ 0.62688243,  2.7116251 ],       [ 0.76505506,  3.03089762],       [ 0.66124088,  2.61636639],       [ 0.        ,  1.73769271],       [ 0.        ,  1.98960553],       [ 0.        ,  2.0710721 ],       [ 0.        ,  2.3988035 ],       [ 0.        ,  1.46703148],       [ 1.01963198,  3.56580305],       [ 0.11218363,  1.20437133],       [ 0.76162666,  2.70373297],       [ 0.        ,  1.55561411],       [ 0.        ,  2.1534698 ],       [ 1.0404048 ,  2.85029936],       [ 0.        ,  2.23104912],       [ 0.92042792,  2.78503513],       [ 0.98589009,  2.98805046],       [ 0.        ,  2.69183628],       [ 0.        ,  1.63979232],       [ 0.12447357,  2.28916931],       [ 0.69675529,  3.04874301],       [ 0.        ,  2.62633124],       [ 0.        ,  1.97171673],       [ 0.06833225,  1.27808285],       [ 0.        ,  1.62850642],       [ 0.        ,  2.07394357],       [ 0.        ,  3.29871589],       [ 0.13193476,  1.62821555],       [ 0.        ,  1.38535392],       [ 0.        ,  1.36889172],       [ 0.        ,  1.38164258],       [ 0.5844171 ,  2.95376492],       [ 0.        ,  1.98016793],       [ 0.        ,  2.21112728],       [ 0.63505828,  2.91589546],       [ 0.        ,  2.00381634]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.39723635e+01],       [  5.47000000e+02,   1.13157806e+01],       [  1.73200000e+03,   1.35183418e+00],       [  5.47700000e+03,   4.47833925e-01],       [  3.16220000e+04,   7.05511272e-02]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   5.67812967e+01],       [  5.47000000e+02,   7.46619081e+00,   1.53032398e+01],       [  1.73200000e+03,   6.87256157e-01,   2.11081672e+00],       [  5.47700000e+03,   2.38693148e-01,   7.11153269e-01],       [  3.16220000e+04,   1.74199492e-02,   1.73062980e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]