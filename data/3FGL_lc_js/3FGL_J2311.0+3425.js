Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [  3.79669666,   6.78932238,   4.51690865,   8.76016521,         6.94911718,   5.72806215,   3.70039892,   2.10770059,         6.90125799,   3.98901534,   0.92272002,   0.        ,         1.06817913,   0.42665944,   5.66366243,   9.50797176,        18.31122208,  16.09547234,  23.88439369,  14.04536057,        18.76119041,  13.52038383,  16.43386459,   7.96118736,        23.84059525,  25.02140808,  27.17424011,  27.2232933 ,        46.08117294,  35.13451004,  42.34674835,  18.59841728,        16.14069176,   2.4721179 ,   3.50962043,   4.56618071,         2.79639697,   1.40277636,   1.80717766,   0.12958993,         4.23882103,   4.23811388,   3.71833014,   3.03283334,         3.57797503,   3.59113884,   2.95890021,   3.11672473]
FluxHistoryError = [[  2.62462139e+00,   5.09932470e+00],       [  5.43348408e+00,   8.25436211e+00],       [  3.35566187e+00,   5.79855919e+00],       [  7.32446384e+00,   1.02747002e+01],       [  5.50008678e+00,   8.49661827e+00],       [  4.54544020e+00,   6.99695349e+00],       [  2.49725580e+00,   5.03899860e+00],       [  1.08371723e+00,   3.26636076e+00],       [  5.54047298e+00,   8.36711025e+00],       [  2.73241305e+00,   5.36764765e+00],       [  1.97735965e-01,   1.85645509e+00],       [  0.00000000e+00,   1.89181149e+00],       [  1.82101727e-02,   2.24775720e+00],       [  0.00000000e+00,   2.98953709e+00],       [  4.25257778e+00,   7.20136261e+00],       [  8.02508259e+00,   1.10883474e+01],       [  1.64136124e+01,   2.02890339e+01],       [  1.43356438e+01,   1.79360981e+01],       [  2.18226738e+01,   2.59461136e+01],       [  1.22698507e+01,   1.59226170e+01],       [  1.69694386e+01,   2.05529423e+01],       [  1.17035227e+01,   1.54252014e+01],       [  1.47158651e+01,   1.82248459e+01],       [  6.44983244e+00,   9.57944775e+00],       [  2.17513466e+01,   2.59298439e+01],       [  2.26559830e+01,   2.73868332e+01],       [  2.49436264e+01,   2.94048538e+01],       [  2.51256523e+01,   2.93209343e+01],       [  4.34430771e+01,   4.87192688e+01],       [  3.27719116e+01,   3.74971085e+01],       [  3.97279816e+01,   4.49655151e+01],       [  1.67302666e+01,   2.05480423e+01],       [  1.42023640e+01,   1.81713638e+01],       [  1.41471398e+00,   3.66464806e+00],       [  2.41806865e+00,   4.70654106e+00],       [  3.24128866e+00,   6.01611567e+00],       [  1.63959050e+00,   4.07164049e+00],       [  4.41867650e-01,   2.60867405e+00],       [  8.75961423e-01,   2.90322518e+00],       [  0.00000000e+00,   2.46178283e+00],       [  2.90196443e+00,   5.69148350e+00],       [  2.99120331e+00,   5.59380007e+00],       [  2.30109978e+00,   5.27662086e+00],       [  1.84042251e+00,   4.33534527e+00],       [  2.37055111e+00,   4.91486645e+00],       [  2.40294385e+00,   4.89968586e+00],       [  1.83525598e+00,   4.19920206e+00],       [  1.81609619e+00,   4.55133009e+00]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   7.81557556e+02],       [  5.47000000e+02,   2.26873199e+02],       [  1.73200000e+03,   4.53256264e+01],       [  5.47700000e+03,   9.04841614e+00],       [  3.16220000e+04,   6.35747612e-01]]
SpectrumError = [[  1.73000000e+02,   7.45504761e+02,   8.17610352e+02],       [  5.47000000e+02,   2.19169525e+02,   2.34576874e+02],       [  1.73200000e+03,   4.30940361e+01,   4.75572166e+01],       [  5.47700000e+03,   8.20781231e+00,   9.88901997e+00],       [  3.16220000e+04,   4.33130682e-01,   8.88848066e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]