Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.        ,  1.1029377 ,  0.        ,  0.        ,        0.55730981,  0.        ,  0.        ,  0.4106428 ,  0.        ,        0.        ,  0.        ,  0.50619912,  0.07837082,  0.        ,        0.        ,  0.90891546,  0.52596313,  0.        ,  0.83980852,        0.        ,  0.        ,  0.79104376,  0.        ,  0.55323893,        0.76197243,  0.4341242 ,  0.10994972,  0.88340902,  0.84105885,        1.27794659,  0.        ,  0.        ,  0.89888978,  0.7451095 ,        0.        ,  1.455778  ,  0.        ,  0.46829003,  0.46603325,        0.57546681,  0.1682615 ,  0.        ,  0.24672055,  0.13714173,        1.18927479,  0.        ,  0.        ]
FluxHistoryError = [[ 0.        ,  1.34953344],       [ 0.        ,  1.84374189],       [ 0.1224879 ,  2.26320362],       [ 0.        ,  1.71944296],       [ 0.        ,  1.70967972],       [ 0.        ,  2.43205673],       [ 0.        ,  1.57775056],       [ 0.        ,  1.47406542],       [ 0.01984155,  1.11318016],       [ 0.        ,  1.94222653],       [ 0.        ,  1.26492441],       [ 0.        ,  1.28503442],       [ 0.14118049,  1.16955447],       [ 0.        ,  1.79026736],       [ 0.        ,  1.75578809],       [ 0.        ,  1.01618242],       [ 0.16995841,  1.81444454],       [ 0.0882867 ,  1.18377399],       [ 0.        ,  0.80591744],       [ 0.26459885,  1.64673042],       [ 0.        ,  1.1973573 ],       [ 0.        ,  1.30615437],       [ 0.30690986,  1.42950797],       [ 0.        ,  1.29190552],       [ 0.15328282,  1.19293952],       [ 0.3024731 ,  1.5447017 ],       [ 0.0093796 ,  1.092219  ],       [ 0.        ,  1.4822048 ],       [ 0.24318188,  1.61607552],       [ 0.31765765,  1.55510747],       [ 0.69131142,  2.03253222],       [ 0.        ,  1.72744024],       [ 0.        ,  1.65422392],       [ 0.36507988,  1.69476271],       [ 0.18434656,  1.47143507],       [ 0.        ,  0.9733004 ],       [ 0.58793241,  2.24276495],       [ 0.        ,  1.04049015],       [ 0.        ,  1.9952957 ],       [ 0.        ,  2.01581863],       [ 0.        ,  2.55111808],       [ 0.        ,  1.15649542],       [ 0.        ,  1.33386445],       [ 0.        ,  1.83562648],       [ 0.        ,  1.08788702],       [ 0.57854295,  1.98265421],       [ 0.        ,  1.30944848],       [ 0.        ,  1.03026354]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   2.06885976e-03],       [  5.47000000e+02,   1.81775932e+01],       [  1.73200000e+03,   1.25366509e+00],       [  5.47700000e+03,   5.85810423e-01],       [  3.16220000e+04,   5.73794901e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   6.95000013e+01],       [  5.47000000e+02,   1.05313911e+01,   2.60154133e+01],       [  1.73200000e+03,   0.00000000e+00,   3.71657360e+00],       [  5.47700000e+03,   2.69502997e-01,   9.46382165e-01],       [  3.16220000e+04,   3.85796249e-01,   8.05062890e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]