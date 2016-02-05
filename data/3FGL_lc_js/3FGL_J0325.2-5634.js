Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.09248918,  0.33726045,  1.1041019 ,  2.17105865,  0.        ,        0.65927505,  0.        ,  1.38744605,  0.        ,  0.89495105,        1.31883216,  0.94013649,  1.54406261,  0.72867703,  0.80529684,        0.28846776,  0.78827852,  0.77692997,  0.81568044,  0.70159245,        1.22454739,  0.88879192,  0.10567768,  0.        ,  1.7952193 ,        1.28570819,  1.01393735,  0.38770178,  0.88137305,  0.84358484,        0.93237072,  0.64444971,  2.14677954,  0.28284296,  0.83516926,        0.60894036,  1.45171738,  0.54874164,  0.26110229,  0.        ,        0.13530715,  0.        ,  0.61598927,  1.50986838,  0.76772565,        0.73833758,  0.        ,  0.        ]
FluxHistoryError = [[ 0.        ,  2.40073054],       [ 0.        ,  2.44096395],       [ 0.3198787 ,  2.07752228],       [ 1.3245517 ,  3.14738917],       [ 0.        ,  1.03263736],       [ 0.        ,  2.42141998],       [ 0.        ,  1.88043046],       [ 0.63209552,  2.35877824],       [ 0.        ,  1.4504925 ],       [ 0.25062352,  1.81035423],       [ 0.55149102,  2.26021123],       [ 0.3003546 ,  1.76939893],       [ 0.82981908,  2.43262911],       [ 0.0594784 ,  1.55609775],       [ 0.36871278,  1.39469826],       [ 0.        ,  1.98060322],       [ 0.07420123,  1.71329939],       [ 0.19400388,  1.49831569],       [ 0.14451653,  1.77525544],       [ 0.06683195,  1.45596027],       [ 0.6165061 ,  2.02408361],       [ 0.29360384,  1.6502248 ],       [ 0.        ,  1.66047616],       [ 0.        ,  1.27787352],       [ 1.04619074,  2.64655924],       [ 0.49027246,  2.27818155],       [ 0.46344727,  1.7098428 ],       [ 0.        ,  2.08065477],       [ 0.30674005,  1.56387377],       [ 0.26483065,  1.60161376],       [ 0.32284778,  1.70362353],       [ 0.11550617,  1.36899829],       [ 1.18827283,  3.28963041],       [ 0.        ,  1.68952522],       [ 0.24593705,  1.60027242],       [ 0.16466174,  1.24956203],       [ 0.58400327,  2.44361448],       [ 0.11622587,  1.19947064],       [ 0.        ,  1.59311339],       [ 0.        ,  1.62674284],       [ 0.        ,  1.17727347],       [ 0.        ,  1.64794433],       [ 0.19080865,  1.21707535],       [ 0.84951973,  2.31518269],       [ 0.17645669,  1.5369333 ],       [ 0.24110955,  1.37731969],       [ 0.        ,  1.86229634],       [ 0.        ,  1.08936787]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   4.96496658e+01],       [  5.47000000e+02,   1.20997267e+01],       [  1.73200000e+03,   4.41301203e+00],       [  5.47700000e+03,   8.68807495e-01],       [  3.16220000e+04,   2.81307310e-01]]
SpectrumError = [[  1.73000000e+02,   2.82765980e+01,   7.14917297e+01],       [  5.47000000e+02,   8.74168682e+00,   1.55837126e+01],       [  1.73200000e+03,   3.56261301e+00,   5.33931637e+00],       [  5.47700000e+03,   5.95662355e-01,   1.19801676e+00],       [  3.16220000e+04,   1.54589713e-01,   4.56892014e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]