Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.20098571,  0.28476682,  0.36056948,  0.22075231,        0.17445882,  0.        ,  0.46275428,  0.        ,  0.16204563,        0.        ,  0.14453742,  0.        ,  0.52346319,  0.14117296,        0.        ,  0.86045867,  0.33036157,  0.27123716,  0.        ,        0.        ,  0.        ,  0.41166329,  0.17095006,  0.36745015,        0.13337776,  0.47659996,  0.06567638,  0.        ,  0.        ,        0.        ,  0.        ,  0.        ,  0.13249917,  0.12029225,        0.16469601,  0.57339776,  0.        ,  0.        ,  0.55123979,        0.32707864,  0.07822093,  0.14215125,  0.        ,  0.        ,        0.58625036,  0.43044239,  0.        ]
FluxHistoryError = [[ 0.        ,  0.74184448],       [ 0.0624326 ,  0.43964252],       [ 0.10098338,  0.57560074],       [ 0.15185794,  0.64547861],       [ 0.06063285,  0.48933697],       [ 0.05131542,  0.40375343],       [ 0.        ,  0.5532499 ],       [ 0.10730702,  0.91546452],       [ 0.        ,  0.53984451],       [ 0.        ,  1.10613427],       [ 0.        ,  0.60797113],       [ 0.        ,  0.88799843],       [ 0.        ,  0.39115644],       [ 0.23986402,  0.88876534],       [ 0.02527741,  0.36593562],       [ 0.        ,  0.68496412],       [ 0.50678128,  1.34010291],       [ 0.12506148,  0.63412321],       [ 0.06416816,  0.61799026],       [ 0.        ,  0.52833748],       [ 0.        ,  0.59932905],       [ 0.        ,  0.5531159 ],       [ 0.14853245,  0.79533929],       [ 0.        ,  0.9394291 ],       [ 0.15142253,  0.67842215],       [ 0.00526625,  0.37414619],       [ 0.16547   ,  0.9452278 ],       [ 0.        ,  0.94642591],       [ 0.        ,  0.64968938],       [ 0.        ,  0.65316755],       [ 0.        ,  0.51098144],       [ 0.        ,  0.62348658],       [ 0.        ,  0.77038288],       [ 0.02534629,  0.33254457],       [ 0.        ,  0.81818944],       [ 0.        ,  1.03185794],       [ 0.19161421,  1.05767632],       [ 0.        ,  0.55687404],       [ 0.        ,  0.50111473],       [ 0.24129328,  0.9776352 ],       [ 0.11275633,  0.66360134],       [ 0.        ,  0.86180677],       [ 0.03772756,  0.33552209],       [ 0.        ,  0.6116361 ],       [ 0.        ,  0.78525543],       [ 0.29180956,  0.9880197 ],       [ 0.17462322,  0.80486929],       [ 0.        ,  0.68420893]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   3.46876640e+01],       [  5.47000000e+02,   3.11134744e+00],       [  1.73200000e+03,   1.36763811e+00],       [  5.47700000e+03,   1.44248629e+00],       [  3.16220000e+04,   1.07039499e+00]]
SpectrumError = [[  1.73000000e+02,   2.37983322e+00,   6.76262131e+01],       [  5.47000000e+02,   0.00000000e+00,   1.18161395e+01],       [  1.73200000e+03,   4.55846012e-01,   2.39756250e+00],       [  5.47700000e+03,   1.05471063e+00,   1.88833570e+00],       [  3.16220000e+04,   7.92532206e-01,   1.40498543e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]