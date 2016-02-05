Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.4819093 ,  0.42614183,  0.        ,  0.29773349,  0.61437535,        0.        ,  0.07549541,  0.        ,  0.52516693,  0.        ,        0.        ,  0.15259057,  0.        ,  0.26222807,  0.46973133,        0.        ,  0.        ,  0.28166446,  0.        ,  0.03033163,        0.44537836,  0.16545144,  0.47548819,  0.55864835,  0.        ,        0.26878577,  0.29528332,  0.        ,  0.        ,  0.        ,        0.58115226,  0.        ,  0.        ,  0.12940584,  0.        ,        0.33817616,  0.79310513,  0.0860898 ,  0.        ,  0.31022385,        0.0631673 ,  0.32069474,  0.21148144,  1.094365  ,  0.55717832,        0.71354818,  0.        ,  0.        ]
FluxHistoryError = [[ 0.18825841,  0.91049546],       [ 0.16351223,  0.78895068],       [ 0.        ,  0.70417422],       [ 0.00628889,  0.74454421],       [ 0.29472774,  0.99061704],       [ 0.        ,  0.983814  ],       [ 0.        ,  1.28739934],       [ 0.        ,  1.15228498],       [ 0.22206157,  0.94826746],       [ 0.        ,  0.79267395],       [ 0.        ,  0.92930937],       [ 0.        ,  0.96312344],       [ 0.        ,  0.7575739 ],       [ 0.08027019,  0.58296287],       [ 0.17206347,  0.87763512],       [ 0.        ,  0.50952613],       [ 0.        ,  0.66833448],       [ 0.0603779 ,  0.62895989],       [ 0.        ,  0.85083842],       [ 0.        ,  0.67920072],       [ 0.14405754,  0.87773299],       [ 0.        ,  0.98748776],       [ 0.15676734,  0.89236748],       [ 0.22926423,  0.99873734],       [ 0.        ,  0.65209264],       [ 0.052467  ,  0.64227784],       [ 0.08122677,  0.62736624],       [ 0.        ,  0.59227443],       [ 0.        ,  0.5808683 ],       [ 0.        ,  0.58471012],       [ 0.23566863,  1.02084947],       [ 0.        ,  0.86461169],       [ 0.        ,  0.80081338],       [ 0.        ,  0.86714999],       [ 0.        ,  0.77839851],       [ 0.10286278,  0.66924375],       [ 0.42349011,  1.27501452],       [ 0.        ,  0.8073879 ],       [ 0.        ,  0.58502108],       [ 0.10758188,  0.61998606],       [ 0.        ,  0.73784515],       [ 0.00602245,  0.75842142],       [ 0.04136458,  0.5437206 ],       [ 0.63995349,  1.64535892],       [ 0.25908542,  0.94965184],       [ 0.29911786,  1.18579698],       [ 0.        ,  0.59266984],       [ 0.        ,  0.90747195]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   6.46896474e-03],       [  5.47000000e+02,   2.93686819e+00],       [  1.73200000e+03,   2.36774516e+00],       [  5.47700000e+03,   6.11637414e-01],       [  3.16220000e+04,   2.91055411e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   3.98988258e+01],       [  5.47000000e+02,   6.29174232e-01,   5.35686684e+00],       [  1.73200000e+03,   1.79316998e+00,   3.00128388e+00],       [  5.47700000e+03,   3.99200350e-01,   8.76801491e-01],       [  3.16220000e+04,   1.70467198e-01,   4.54177439e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]