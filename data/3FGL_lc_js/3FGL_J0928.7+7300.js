Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 1.8404814 ,  0.        ,  0.        ,  0.        ,  3.47657418,        0.        ,  0.94877481,  3.64115453,  1.45704961,  1.4960978 ,        0.29750201,  0.        ,  0.        ,  0.74620515,  0.        ,        1.27148414,  0.66835511,  0.51501918,  1.19735849,  0.        ,        0.84275788,  1.98780704,  0.26289251,  0.97086573,  0.        ,        1.07945204,  0.73941886,  1.52553988,  1.45418096,  2.33377862,        1.35837817,  1.59893596,  0.        ,  0.        ,  0.        ,        0.96085078,  2.05887723,  0.83719492,  1.11621881,  1.36835086,        0.        ,  0.44302887,  0.        ,  2.49718785,  0.        ,        1.19541848,  0.3879889 ,  1.20104766]
FluxHistoryError = [[ 0.15679085,  3.73724747],       [ 0.        ,  2.55054212],       [ 0.        ,  2.52281475],       [ 0.        ,  2.17671108],       [ 1.95316541,  5.13918877],       [ 0.        ,  2.09796858],       [ 0.        ,  3.43180871],       [ 1.92419708,  5.58108234],       [ 0.        ,  4.36644197],       [ 0.16692019,  3.04455805],       [ 0.        ,  2.78089163],       [ 0.        ,  1.90886068],       [ 0.        ,  2.10238552],       [ 0.        ,  3.15575796],       [ 0.        ,  1.96421623],       [ 0.1685816 ,  2.49752331],       [ 0.        ,  2.71685278],       [ 0.        ,  3.05771399],       [ 0.14539945,  2.39969635],       [ 0.        ,  1.70541239],       [ 0.        ,  3.46563023],       [ 0.69173002,  3.39881587],       [ 0.        ,  3.0000675 ],       [ 0.        ,  3.30251932],       [ 0.        ,  1.66404915],       [ 0.22491753,  2.17236662],       [ 0.        ,  3.21501529],       [ 0.47858179,  2.71091986],       [ 0.37916028,  2.62957716],       [ 1.08242226,  3.78801727],       [ 0.2388314 ,  2.58436894],       [ 0.45974922,  2.88506436],       [ 0.        ,  2.11790061],       [ 0.        ,  1.90525389],       [ 0.        ,  1.99351192],       [ 0.        ,  3.42638093],       [ 0.86358285,  3.49458313],       [ 0.        ,  3.49233985],       [ 0.        ,  3.38508701],       [ 0.32228708,  2.57150459],       [ 0.        ,  2.213938  ],       [ 0.        ,  2.99078935],       [ 0.        ,  1.84236002],       [ 1.26505315,  3.81597281],       [ 0.        ,  2.28390646],       [ 0.31916147,  2.2535522 ],       [ 0.        ,  2.6590465 ],       [ 0.        ,  3.87685204]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.17804367e+02],       [  5.47000000e+02,   3.02403021e+00],       [  1.73200000e+03,   1.26153421e+00],       [  5.47700000e+03,   3.05868357e-01],       [  3.16220000e+04,   3.70619297e-02]]
SpectrumError = [[  1.73000000e+02,   9.36101456e+01,   1.42522446e+02],       [  5.47000000e+02,   0.00000000e+00,   9.10239220e+00],       [  1.73200000e+03,   6.85415089e-01,   1.89806747e+00],       [  5.47700000e+03,   1.51734635e-01,   5.05740047e-01],       [  3.16220000e+04,   0.00000000e+00,   2.66120508e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]