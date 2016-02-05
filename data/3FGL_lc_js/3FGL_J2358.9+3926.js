Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 1.7756952 ,  0.55863041,  0.        ,  0.79920435,  0.        ,        0.        ,  3.48937416,  0.37361017,  1.15891171,  1.82067978,        0.68634021,  0.        ,  0.08955169,  0.        ,  0.45893419,        0.59923816,  1.41688418,  0.        ,  0.        ,  0.46291465,        0.80533653,  0.        ,  0.        ,  0.        ,  0.47737265,        2.19742751,  0.12234312,  0.        ,  0.        ,  0.80770522,        0.99680924,  2.10184264,  0.        ,  0.        ,  0.15041688,        1.845976  ,  0.        ,  0.3021605 ,  0.        ,  1.05432582,        1.26605868,  0.10025011,  0.        ,  0.        ,  0.36020041,        2.77920246,  0.81329948,  0.        ]
FluxHistoryError = [[ 0.83261555,  2.96931791],       [ 0.0647206 ,  1.38665056],       [ 0.        ,  1.86626446],       [ 0.        ,  2.75948501],       [ 0.        ,  1.84087098],       [ 0.        ,  1.54053533],       [ 2.16183758,  4.99040985],       [ 0.        ,  2.19952539],       [ 0.4203971 ,  2.08590961],       [ 0.77524471,  3.03764057],       [ 0.18673426,  1.4130739 ],       [ 0.        ,  1.32596266],       [ 0.        ,  2.79298735],       [ 0.        ,  1.664711  ],       [ 0.        ,  3.01216447],       [ 0.        ,  2.81812644],       [ 0.62835407,  2.39181924],       [ 0.        ,  1.96549892],       [ 0.        ,  1.36643386],       [ 0.        ,  3.06642884],       [ 0.        ,  2.747724  ],       [ 0.        ,  1.71304309],       [ 0.        ,  1.74001825],       [ 0.        ,  1.14588058],       [ 0.        ,  2.9697082 ],       [ 1.04971981,  3.47239733],       [ 0.        ,  2.53000146],       [ 0.        ,  1.35716724],       [ 0.        ,  1.73895872],       [ 0.16265959,  1.71127141],       [ 0.3434177 ,  1.84054029],       [ 1.04269242,  3.2433629 ],       [ 0.        ,  1.98143828],       [ 0.        ,  1.93524456],       [ 0.        ,  2.20286992],       [ 0.59307015,  3.21007442],       [ 0.        ,  1.66890347],       [ 0.        ,  2.93352556],       [ 0.        ,  1.89465976],       [ 0.38430047,  1.94784713],       [ 0.04260075,  2.62394738],       [ 0.        ,  1.85270451],       [ 0.        ,  1.36364996],       [ 0.        ,  1.28789687],       [ 0.        ,  3.11830211],       [ 1.74643242,  4.04559755],       [ 0.05446321,  1.8291676 ],       [ 0.        ,  2.56778288]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   3.59708900e+01],       [  5.47000000e+02,   1.00062265e+01],       [  1.73200000e+03,   3.10696769e+00],       [  5.47700000e+03,   2.75251213e-02],       [  3.16220000e+04,   4.88936543e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   1.03025547e+02],       [  5.47000000e+02,   4.43973923e+00,   1.56950846e+01],       [  1.73200000e+03,   2.12565231e+00,   4.14658356e+00],       [  5.47700000e+03,   0.00000000e+00,   5.26418740e-01],       [  3.16220000e+04,   3.03720742e-01,   7.23097146e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]