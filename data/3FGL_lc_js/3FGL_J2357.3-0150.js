Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  1.60375237,  0.26779321,  1.08025062,  0.07235084,        0.43490019,  0.92861605,  0.48116255,  0.30799928,  0.        ,        0.84077543,  1.13347745,  1.03888512,  0.        ,  0.9053492 ,        0.        ,  1.34229481,  0.2135849 ,  0.96040165,  0.7761761 ,        1.22614408,  0.06545855,  0.        ,  0.        ,  0.        ,        0.09462615,  0.        ,  0.12787385,  0.        ,  1.61638868,        0.        ,  0.        ,  0.74035519,  0.64704502,  2.11340857,        0.        ,  1.11596465,  0.06834522,  0.52765501,  0.17871527,        0.53887987,  1.20353055,  0.24610639,  0.        ,  0.38832715,        0.        ,  0.        ,  0.        ]
FluxHistoryError = [[ 0.        ,  1.02224064],       [ 0.80194682,  2.56940389],       [ 0.        ,  1.48163465],       [ 0.30684006,  1.9574616 ],       [ 0.        ,  1.79081938],       [ 0.08944297,  0.99361157],       [ 0.13051784,  1.93734503],       [ 0.14302069,  1.07604432],       [ 0.        ,  1.66306475],       [ 0.        ,  1.37663507],       [ 0.15544838,  1.65985608],       [ 0.45187753,  1.98361897],       [ 0.41879475,  1.82299685],       [ 0.        ,  2.76223588],       [ 0.        ,  3.31216711],       [ 0.        ,  1.82595658],       [ 0.71344936,  2.15587997],       [ 0.        ,  2.1467768 ],       [ 0.21643966,  2.03963137],       [ 0.21719033,  1.63628054],       [ 0.42893112,  2.29914093],       [ 0.        ,  2.14526822],       [ 0.        ,  2.49387503],       [ 0.        ,  1.89176226],       [ 0.        ,  1.05935907],       [ 0.        ,  2.07468816],       [ 0.        ,  1.6762625 ],       [ 0.        ,  1.61715479],       [ 0.        ,  1.52553177],       [ 0.81653506,  2.5918324 ],       [ 0.        ,  1.59281087],       [ 0.        ,  1.29265285],       [ 0.        ,  3.4217698 ],       [ 0.19081724,  1.31016612],       [ 1.11390305,  3.28774953],       [ 0.        ,  1.88349938],       [ 0.46496439,  2.01197624],       [ 0.        ,  2.52999774],       [ 0.07401118,  1.20888591],       [ 0.        ,  2.23183517],       [ 0.12833914,  1.16101456],       [ 0.30176967,  2.40718985],       [ 0.        ,  1.56951928],       [ 0.        ,  1.68464386],       [ 0.        ,  2.10629013],       [ 0.        ,  1.36386621],       [ 0.        ,  1.57937825],       [ 0.        ,  1.34234953]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.29909229e+01],       [  5.47000000e+02,   1.17766027e+01],       [  1.73200000e+03,   1.50432956e+00],       [  5.47700000e+03,   7.16964126e-01],       [  3.16220000e+04,   1.75425902e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   6.06019878e+01],       [  5.47000000e+02,   7.70159006e+00,   1.60371399e+01],       [  1.73200000e+03,   8.29675198e-01,   2.30256939e+00],       [  5.47700000e+03,   4.27563518e-01,   1.06998861e+00],       [  3.16220000e+04,   7.59921670e-02,   3.32120448e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]