Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.        ,  0.07133432,  0.        ,  0.05586229,        0.        ,  0.29311132,  0.35159427,  0.        ,  0.63088489,        0.63665724,  1.13342345,  1.73665619,  2.83622336,  0.        ,        0.        ,  2.56320477,  1.47854626,  1.60693169,  5.05139351,        2.74022746,  1.8467716 ,  1.46287978,  1.51401103,  0.        ,        0.10678889,  2.43252778,  3.02856612,  2.65116358,  0.18713838,        0.15144418,  0.99143016,  1.91905928,  0.97191036,  1.21970093,        0.75910974,  0.54306406,  0.1444198 ,  1.14772689,  0.88707745,        0.61624867,  1.2285887 ,  2.5205245 ,  3.09615827,  4.45769072,        5.19551945,  0.92302674,  0.91467696]
FluxHistoryError = [[ 0.        ,  3.25677943],       [ 0.        ,  2.80344009],       [ 0.        ,  3.11225291],       [ 0.        ,  3.27817535],       [ 0.        ,  2.60988818],       [ 0.        ,  2.24314332],       [ 0.        ,  3.1133604 ],       [ 0.        ,  3.13463837],       [ 0.        ,  2.81407118],       [ 0.        ,  3.26143456],       [ 0.05729038,  1.6135366 ],       [ 0.14224118,  2.39060783],       [ 0.71903372,  2.9892807 ],       [ 1.73406446,  4.0923686 ],       [ 0.        ,  1.36982107],       [ 0.        ,  2.33158875],       [ 1.56644273,  3.67627072],       [ 0.57166421,  2.58217287],       [ 0.68207246,  2.67678928],       [ 3.85495162,  6.35160398],       [ 1.72206414,  3.92297316],       [ 0.99376214,  2.92383242],       [ 0.54867309,  2.53689909],       [ 0.58111602,  2.65078926],       [ 0.        ,  1.6846565 ],       [ 0.        ,  2.58615328],       [ 1.47855902,  3.56193209],       [ 1.94573331,  4.22834206],       [ 1.60279107,  3.82489014],       [ 0.        ,  2.51007015],       [ 0.        ,  1.69467746],       [ 0.        ,  3.36597598],       [ 0.71355653,  3.2988925 ],       [ 0.        ,  3.52853811],       [ 0.55505103,  2.08529186],       [ 0.18690956,  1.61839485],       [ 0.        ,  2.4493193 ],       [ 0.        ,  2.89171208],       [ 0.42125636,  2.07552981],       [ 0.20611846,  1.80341399],       [ 0.02669495,  1.49857998],       [ 0.35781032,  2.30990744],       [ 1.47295928,  3.69166493],       [ 1.94272327,  4.39859915],       [ 3.24684119,  5.75809956],       [ 3.88354754,  6.63481951],       [ 0.06361747,  1.9644649 ],       [ 0.        ,  3.3149758 ]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.00766098e+02],       [  5.47000000e+02,   2.89306278e+01],       [  1.73200000e+03,   7.09013176e+00],       [  5.47700000e+03,   2.30013585e+00],       [  3.16220000e+04,   3.73610884e-01]]
SpectrumError = [[  1.73000000e+02,   6.62178650e+01,   1.35286942e+02],       [  5.47000000e+02,   2.31198387e+01,   3.48912125e+01],       [  1.73200000e+03,   5.78896713e+00,   8.47024441e+00],       [  5.47700000e+03,   1.83107042e+00,   2.82366252e+00],       [  3.16220000e+04,   2.14019775e-01,   5.86604834e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]