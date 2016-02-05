Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.        ,  0.76690984,  0.79893965,  0.        ,        0.10010514,  0.        ,  0.        ,  0.28320861,  0.        ,        1.54112172,  0.53520328,  0.61987519,  1.10792518,  0.94866073,        0.79583788,  0.        ,  0.75338084,  0.38262132,  0.        ,        0.        ,  0.80441695,  1.69748485,  0.28535509,  0.        ,        0.        ,  1.3951261 ,  0.        ,  0.24662381,  1.613711  ,        0.        ,  1.14773893,  0.        ,  1.63707078,  0.10010687,        1.55685365,  0.18861903,  1.1317755 ,  0.        ,  0.        ,        0.59658337,  0.96712542,  0.        ,  0.        ,  1.08168399,        0.81247073,  0.74208432,  1.01273024]
FluxHistoryError = [[ 0.        ,  1.79004371],       [ 0.        ,  1.83854461],       [ 0.03917986,  1.64935184],       [ 0.24879694,  1.57850742],       [ 0.        ,  1.60445917],       [ 0.        ,  1.74703965],       [ 0.        ,  1.21259868],       [ 0.        ,  1.55997455],       [ 0.        ,  2.28461814],       [ 0.        ,  1.33380139],       [ 0.75341547,  2.51732063],       [ 0.        ,  2.43082136],       [ 0.10403335,  1.37635052],       [ 0.34046531,  2.16691995],       [ 0.31301016,  1.73403311],       [ 0.        ,  3.22303009],       [ 0.        ,  1.1304729 ],       [ 0.19162154,  1.59401083],       [ 0.        ,  2.41730502],       [ 0.        ,  1.02298701],       [ 0.        ,  1.57752776],       [ 0.21426803,  1.57832944],       [ 0.58116555,  3.14731812],       [ 0.        ,  2.31435633],       [ 0.        ,  1.96187055],       [ 0.        ,  2.11732912],       [ 0.48724282,  2.49787641],       [ 0.        ,  1.6528635 ],       [ 0.        ,  1.69035488],       [ 0.57813835,  2.91243267],       [ 0.        ,  2.02804494],       [ 0.0437212 ,  2.46372747],       [ 0.        ,  1.34565091],       [ 0.81359082,  2.59567237],       [ 0.        ,  2.36046019],       [ 0.88434267,  2.41558814],       [ 0.        ,  2.05595888],       [ 0.42113918,  2.07254624],       [ 0.        ,  2.03667808],       [ 0.        ,  1.26108027],       [ 0.00667793,  1.42203403],       [ 0.        ,  2.15496683],       [ 0.        ,  1.51092505],       [ 0.        ,  1.96270382],       [ 0.30590206,  2.0421977 ],       [ 0.18040633,  1.73406351],       [ 0.21590883,  1.4675889 ],       [ 0.13896191,  2.11166096]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.03558542e-03],       [  5.47000000e+02,   4.65588379e+00],       [  1.73200000e+03,   3.81504416e+00],       [  5.47700000e+03,   1.18910897e+00],       [  3.16220000e+04,   6.36807233e-02]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   5.65032748e+01],       [  5.47000000e+02,   0.00000000e+00,   1.49717093e+01],       [  1.73200000e+03,   2.70356059e+00,   5.00848627e+00],       [  5.47700000e+03,   8.10070753e-01,   1.63124228e+00],       [  3.16220000e+04,   0.00000000e+00,   4.81473252e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]