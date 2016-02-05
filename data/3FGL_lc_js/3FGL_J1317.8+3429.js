Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 3.88231635,  0.        ,  0.        ,  0.        ,  0.        ,        0.71313602,  5.582479  ,  3.46785617,  0.        ,  0.52790415,        2.34578133,  0.78739059,  0.53970635,  0.        ,  0.        ,        0.64344394,  0.13610075,  0.16119301,  0.        ,  0.65443343,        2.77605081,  0.09293168,  0.        ,  2.8347404 ,  1.70569527,        3.81632161,  1.56522071,  0.40183932,  0.70287144,  0.98830837,        1.59999073,  0.        ,  0.3201451 ,  0.27344251,  0.34384909,        0.57292956,  0.        ,  0.        ,  0.        ,  1.98601651,        0.82020319,  0.59399456,  0.        ,  0.45155802,  1.13172889,        0.6407783 ,  0.43501371,  2.03357816]
FluxHistoryError = [[ 2.51022863,  5.43141031],       [ 0.        ,  1.70677853],       [ 0.        ,  2.06398869],       [ 0.        ,  1.9741528 ],       [ 0.        ,  2.22970963],       [ 0.        ,  3.35602742],       [ 4.25917673,  7.02397919],       [ 2.11886501,  4.97040272],       [ 0.        ,  1.57554543],       [ 0.        ,  2.9019407 ],       [ 1.09117043,  3.7621603 ],       [ 0.        ,  1.89794421],       [ 0.        ,  3.11184514],       [ 0.        ,  2.17505884],       [ 0.        ,  1.55966508],       [ 0.        ,  3.14358866],       [ 0.        ,  2.46607183],       [ 0.        ,  2.84794652],       [ 0.        ,  2.17859101],       [ 0.        ,  2.80504054],       [ 1.54526532,  4.24840069],       [ 0.        ,  2.38780373],       [ 0.        ,  2.10641193],       [ 1.60183454,  4.27091217],       [ 0.5594312 ,  3.00841761],       [ 2.38857698,  5.42564201],       [ 0.46094131,  2.8167932 ],       [ 0.        ,  3.35189611],       [ 0.        ,  3.29624522],       [ 0.        ,  3.48278517],       [ 0.64747792,  2.77327013],       [ 0.        ,  2.59212756],       [ 0.        ,  2.99539015],       [ 0.        ,  2.54121232],       [ 0.        ,  3.09673372],       [ 0.        ,  2.93244141],       [ 0.        ,  2.42014432],       [ 0.        ,  2.27591467],       [ 0.        ,  1.87502074],       [ 0.94172859,  3.18442917],       [ 0.        ,  2.9773103 ],       [ 0.        ,  3.05981582],       [ 0.        ,  1.95228648],       [ 0.        ,  2.85129634],       [ 0.        ,  3.97545362],       [ 0.        ,  3.01360512],       [ 0.        ,  3.48013419],       [ 1.06418371,  3.23959541]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   7.10376892e+01],       [  5.47000000e+02,   1.44872656e+01],       [  1.73200000e+03,   1.96706998e+00],       [  5.47700000e+03,   5.82717478e-01],       [  3.16220000e+04,   9.96249855e-06]]
SpectrumError = [[  1.73000000e+02,   4.35387573e+01,   9.92270737e+01],       [  5.47000000e+02,   1.06392555e+01,   1.84841156e+01],       [  1.73200000e+03,   1.27728796e+00,   2.75321388e+00],       [  5.47700000e+03,   3.42387795e-01,   8.76896799e-01],       [  3.16220000e+04,   0.00000000e+00,   2.18471372e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]