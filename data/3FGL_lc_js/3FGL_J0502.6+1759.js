Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 2.12822294,  0.        ,  0.        ,  2.58216667,  0.        ,        1.17971253,  0.37241882,  0.        ,  0.        ,  1.43720102,        4.53818703,  2.03238845,  3.15645003,  3.69484615,  0.        ,        4.63505793,  0.        ,  0.54861182,  1.97321701,  0.        ,        2.5860467 ,  1.71267176,  0.        ,  0.        ,  0.        ,        0.        ,  6.44485426,  0.        ,  2.98165941,  4.83058023,        0.        ,  1.09356308,  4.46125937,  2.49711323,  1.26892555,        4.24776268,  5.30797672,  1.98130667,  0.        ,  1.21816802,        1.97680366,  1.62157369,  0.        ,  0.10103289,  0.        ,        0.        ,  1.20794749,  1.68507469]
FluxHistoryError = [[ 0.        ,  6.98283625],       [ 0.        ,  3.53434658],       [ 0.        ,  3.73230982],       [ 0.69788516,  4.52009773],       [ 0.        ,  3.31517458],       [ 0.        ,  4.2550931 ],       [ 0.        ,  2.63126606],       [ 0.        ,  4.5965333 ],       [ 0.        ,  2.93973112],       [ 0.        ,  5.68408823],       [ 2.52722645,  6.69174194],       [ 0.        ,  6.01312923],       [ 1.142802  ,  5.14172649],       [ 1.55332494,  6.12149954],       [ 0.        ,  4.22213459],       [ 1.94609618,  7.54060411],       [ 0.        ,  4.41814137],       [ 0.        ,  5.51326674],       [ 0.        ,  6.0633378 ],       [ 0.        ,  3.24858141],       [ 0.96750438,  4.64876032],       [ 0.        ,  6.71393394],       [ 0.        ,  4.9592762 ],       [ 0.        ,  4.60958815],       [ 0.        ,  4.63990974],       [ 0.        ,  3.18407941],       [ 3.81556273,  9.28078556],       [ 0.        ,  4.23969698],       [ 0.63316965,  5.49655342],       [ 2.76187778,  7.17594624],       [ 0.        ,  2.05106544],       [ 0.        ,  6.61561966],       [ 2.29470086,  6.81131458],       [ 0.57552433,  5.00271511],       [ 0.        ,  5.93157804],       [ 2.03832483,  6.63858795],       [ 3.01101708,  7.7600069 ],       [ 0.        ,  6.76559842],       [ 0.        ,  4.17123175],       [ 0.        ,  6.11743188],       [ 0.47479212,  3.92132568],       [ 0.        ,  6.44031358],       [ 0.        ,  3.49441934],       [ 0.        ,  5.23726479],       [ 0.        ,  3.29769921],       [ 0.        ,  5.79821444],       [ 0.        ,  6.39991117],       [ 0.        ,  5.91046083]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.05137978e+02],       [  5.47000000e+02,   3.27824821e+01],       [  1.73200000e+03,   1.25697005e+00],       [  5.47700000e+03,   2.22230732e-01],       [  3.16220000e+04,   4.00913328e-01]]
SpectrumError = [[  1.73000000e+02,   5.37036743e+01,   1.58556717e+02],       [  5.47000000e+02,   2.45818863e+01,   4.11591797e+01],       [  1.73200000e+03,   7.65562057e-04,   2.63998461e+00],       [  5.47700000e+03,   0.00000000e+00,   1.05220753e+00],       [  3.16220000e+04,   2.26804405e-01,   6.29856348e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]