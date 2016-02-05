Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.        ,  0.30179718,  1.53494644,  0.61462575,        3.621521  ,  0.        ,  0.        ,  0.02443083,  0.22871473,        0.        ,  0.        ,  0.        ,  1.08341181,  0.        ,        0.        ,  0.68669575,  0.        ,  0.59263772,  0.93466598,        0.26367632,  0.        ,  1.41835892,  0.34386346,  1.06782532,        0.10941976,  0.        ,  0.        ,  1.04851556,  0.64780855,        0.        ,  0.11804184,  0.16496533,  0.        ,  0.32299802,        0.        ,  0.37235293,  0.        ,  0.16427949,  0.50752181,        1.39754093,  0.66480643,  0.        ,  0.37972647,  0.52793235,        0.        ,  0.75679463,  0.        ]
FluxHistoryError = [[ 0.        ,  1.14996731],       [ 0.        ,  1.43832302],       [ 0.        ,  1.81245807],       [ 0.72776794,  2.54495287],       [ 0.        ,  2.20992512],       [ 2.480721  ,  4.86584282],       [ 0.        ,  1.1243602 ],       [ 0.        ,  1.34938896],       [ 0.        ,  1.70889338],       [ 0.        ,  1.94495288],       [ 0.        ,  1.7907958 ],       [ 0.        ,  1.37191296],       [ 0.        ,  1.33129692],       [ 0.37278569,  1.88723421],       [ 0.        ,  1.45722926],       [ 0.        ,  1.32712746],       [ 0.08337945,  1.42963755],       [ 0.        ,  0.83295941],       [ 0.15932328,  1.20082235],       [ 0.43943128,  1.55036998],       [ 0.        ,  1.64068368],       [ 0.        ,  1.63548839],       [ 0.79117393,  2.18650866],       [ 0.        ,  1.76051471],       [ 0.53658974,  1.69642496],       [ 0.        ,  1.72253793],       [ 0.        ,  0.95460647],       [ 0.        ,  0.99719113],       [ 0.27161121,  1.89704776],       [ 0.11978853,  1.31573141],       [ 0.        ,  0.75865036],       [ 0.        ,  1.25784978],       [ 0.        ,  1.12573332],       [ 0.        ,  1.18385553],       [ 0.01707178,  0.84033632],       [ 0.        ,  1.03002429],       [ 0.01538983,  0.89417684],       [ 0.        ,  1.29483271],       [ 0.        ,  1.54156235],       [ 0.        ,  2.01801759],       [ 0.64036393,  2.21787953],       [ 0.12691116,  1.35853934],       [ 0.        ,  0.87958938],       [ 0.        ,  1.61909026],       [ 0.16594583,  1.09008908],       [ 0.        ,  1.17867756],       [ 0.25268   ,  1.42751384],       [ 0.        ,  1.1183939 ]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.72401104e+01],       [  5.47000000e+02,   8.78349972e+00],       [  1.73200000e+03,   1.35741627e+00],       [  5.47700000e+03,   3.63740832e-01],       [  3.16220000e+04,   1.12946808e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   5.37133503e+01],       [  5.47000000e+02,   5.79195976e+00,   1.19114857e+01],       [  1.73200000e+03,   7.51924634e-01,   2.02646637e+00],       [  5.47700000e+03,   1.87890649e-01,   5.84728301e-01],       [  3.16220000e+04,   4.60207164e-02,   2.18634203e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]