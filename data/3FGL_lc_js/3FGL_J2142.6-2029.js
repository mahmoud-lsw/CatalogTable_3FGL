Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.        ,  0.11473665,  0.        ,  0.        ,        0.31838191,  0.        ,  0.13145532,  0.        ,  0.        ,        0.09648801,  0.        ,  0.37696025,  0.30482498,  0.14103422,        0.        ,  0.        ,  0.03509624,  0.        ,  0.        ,        0.23346929,  0.        ,  0.        ,  0.24490108,  0.01628316,        0.        ,  0.22191606,  0.        ,  0.        ,  0.        ,        0.00878752,  0.        ,  0.        ,  0.        ,  0.35172704,        0.15862937,  0.05554757,  0.1121504 ,  0.13740784,  0.        ,        0.        ,  0.        ,  0.        ,  0.24095879,  0.        ,        0.        ,  0.        ,  0.        ]
FluxHistoryError = [[ 0.        ,  0.38715041],       [ 0.        ,  0.3326968 ],       [ 0.03449105,  0.26582435],       [ 0.        ,  0.39885321],       [ 0.        ,  0.46216902],       [ 0.10795267,  0.60776317],       [ 0.        ,  0.5621078 ],       [ 0.03365479,  0.31636757],       [ 0.        ,  0.63994491],       [ 0.        ,  0.49365953],       [ 0.        ,  0.77855045],       [ 0.        ,  0.42809254],       [ 0.12613764,  0.71425915],       [ 0.06062962,  0.67448044],       [ 0.        ,  0.72644594],       [ 0.        ,  0.6075716 ],       [ 0.        ,  0.41346654],       [ 0.        ,  0.67619015],       [ 0.        ,  0.8054747 ],       [ 0.        ,  0.48411924],       [ 0.03346464,  0.58067536],       [ 0.        ,  0.4728426 ],       [ 0.        ,  0.68168694],       [ 0.09118642,  0.48256603],       [ 0.        ,  0.77395827],       [ 0.        ,  0.52747446],       [ 0.        ,  0.84041528],       [ 0.        ,  0.47685486],       [ 0.        ,  0.48914757],       [ 0.        ,  0.77708322],       [ 0.        ,  0.69137318],       [ 0.        ,  0.8782205 ],       [ 0.        ,  0.54249018],       [ 0.        ,  0.32571918],       [ 0.16111977,  0.64188308],       [ 0.        ,  0.76998033],       [ 0.        ,  1.009935  ],       [ 0.00663065,  0.31356767],       [ 0.        ,  0.83542609],       [ 0.        ,  0.5942446 ],       [ 0.        ,  0.60599166],       [ 0.        ,  0.51661968],       [ 0.        ,  0.71779239],       [ 0.        ,  1.14487343],       [ 0.        ,  0.4438718 ],       [ 0.        ,  0.47214958],       [ 0.        ,  0.5392583 ],       [ 0.        ,  0.46702957]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   6.33436346e+00],       [  5.47000000e+02,   2.39560151e+00],       [  1.73200000e+03,   7.60536492e-01],       [  5.47700000e+03,   2.25970089e-05],       [  3.16220000e+04,   5.15234232e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   5.21084304e+01],       [  5.47000000e+02,   0.00000000e+00,   8.78277707e+00],       [  1.73200000e+03,   7.39569068e-02,   1.54429793e+00],       [  5.47700000e+03,   0.00000000e+00,   4.54480178e-01],       [  3.16220000e+04,   3.22007179e-01,   7.66954899e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]