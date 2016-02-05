Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [  4.94493675,   6.48056602,   5.14030409,  10.945961  ,        10.41475773,   8.07816029,   4.05161238,   2.55469799,         6.28224945,   7.38118267,   4.35631847,   5.75167465,         6.7597661 ,   3.34139013,   7.05887556,   4.80132484,         5.37513638,   8.75182247,   6.32484579,   4.98469305,         5.13653564,   9.10547447,   8.10743523,   3.46172237,         8.14787292,  13.18286037,   7.90589285,   9.11028099,         6.66626596,   4.8809247 ,   6.5430789 ,   5.12215567,         5.9287343 ,   6.37478495,   7.00281668,   4.52008343,         4.86753893,   7.65792131,   3.49384451,   4.3513217 ,         8.64851952,   9.73256969,   4.81522274,  18.51196098,         4.70710373,   8.31186581,   4.35097075,  10.15935993]
FluxHistoryError = [[  2.53354096,   7.69889212],       [  3.6204896 ,   9.5070343 ],       [  2.74241972,   7.80777264],       [  8.24762821,  13.78344536],       [  7.96654034,  13.02173042],       [  4.86424303,  11.54270935],       [  1.80348372,   6.59431076],       [  0.23844743,   5.15016794],       [  3.55305219,   9.30544949],       [  4.88278866,  10.04215431],       [  1.72648859,   7.29117012],       [  3.37340498,   8.29236698],       [  4.36280537,   9.45711994],       [  0.83751678,   5.91299152],       [  4.37000942,   9.89864445],       [  1.99267316,   7.93883324],       [  3.31478667,   7.61513805],       [  5.78514957,  12.05123806],       [  3.77091432,   8.95672417],       [  2.41112065,   7.81388617],       [  2.3674171 ,   8.06463528],       [  6.61900616,  11.74293709],       [  5.05034351,  11.28299713],       [  1.42642212,   5.68185043],       [  5.63795662,  10.86334038],       [ 10.38699532,  16.07373047],       [  5.11738873,  10.89304161],       [  6.56672096,  11.84973145],       [  4.35061884,   9.17230606],       [  2.25187087,   7.69350052],       [  4.26056862,   8.99844265],       [  2.34502912,   8.27252388],       [  3.6381886 ,   8.40365028],       [  3.64501095,   9.29546452],       [  4.71342039,   9.44426346],       [  1.96782875,   7.26194763],       [  2.57449722,   7.39066124],       [  4.99724388,  10.51259613],       [  1.05926013,   6.36253357],       [  2.04224133,   6.76864147],       [  5.69723701,  11.79206467],       [  7.20811892,  12.3920536 ],       [  2.58572936,   7.30231667],       [ 15.13974857,  22.0033989 ],       [  2.66066527,   6.93466187],       [  5.27819395,  11.56952953],       [  2.39429903,   6.43874931],       [  7.22079563,  13.16211605]], dtype=float32
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.56847244e+02],       [  5.47000000e+02,   2.65368103e+02],       [  1.73200000e+03,   8.22056580e+01],       [  5.47700000e+03,   1.53365126e+01],       [  3.16220000e+04,   9.93672490e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   4.61508896e+02],       [  5.47000000e+02,   2.13823624e+02,   3.16511322e+02],       [  1.73200000e+03,   7.45346985e+01,   8.98766174e+01],       [  5.47700000e+03,   1.34950981e+01,   1.72566681e+01],       [  3.16220000e+04,   6.08765483e-01,   1.45122683e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]