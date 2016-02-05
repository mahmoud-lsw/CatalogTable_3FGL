Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.46236628,  0.92971158,  1.25955009,  0.        ,  0.        ,        0.7168507 ,  0.        ,  1.23235285,  0.        ,  1.63910925,        0.        ,  0.        ,  0.39568889,  0.        ,  0.        ,        0.        ,  0.70796382,  0.20497619,  0.25975806,  0.08096518,        0.        ,  1.06405485,  0.        ,  0.48351267,  1.44210362,        0.11266168,  1.16203213,  0.        ,  0.55263752,  1.00807917,        1.36254311,  0.        ,  0.        ,  0.37326801,  0.        ,        0.15331845,  0.        ,  0.        ,  0.        ,  0.        ,        0.24486056,  0.58747649,  0.63977253,  0.        ,  1.24755263,        0.77189893,  0.11301594,  0.        ]
FluxHistoryError = [[ 0.        ,  2.28422731],       [ 0.16811019,  1.87552416],       [ 0.46286303,  2.24790764],       [ 0.        ,  1.72961807],       [ 0.        ,  1.68363333],       [ 0.04876059,  1.55849302],       [ 0.        ,  1.50556338],       [ 0.50198632,  2.17884803],       [ 0.        ,  0.81992531],       [ 0.88600165,  2.53036094],       [ 0.        ,  1.3045423 ],       [ 0.        ,  1.25321376],       [ 0.        ,  2.24024117],       [ 0.        ,  1.34200799],       [ 0.        ,  0.79747266],       [ 0.        ,  1.16575372],       [ 0.09906596,  1.46654582],       [ 0.        ,  1.31208287],       [ 0.        ,  1.57656354],       [ 0.        ,  1.50121679],       [ 0.        ,  1.40323126],       [ 0.49226195,  1.77832067],       [ 0.        ,  1.24503708],       [ 0.        ,  2.07885662],       [ 0.72216463,  2.26310396],       [ 0.        ,  1.75221916],       [ 0.53063709,  1.91005504],       [ 0.        ,  1.36911225],       [ 0.19221696,  1.09395504],       [ 0.48994774,  1.67930329],       [ 0.51549524,  2.30153537],       [ 0.        ,  1.23859382],       [ 0.        ,  1.4725672 ],       [ 0.        ,  1.6369282 ],       [ 0.        ,  1.55767846],       [ 0.        ,  1.82894854],       [ 0.        ,  0.78258681],       [ 0.        ,  1.04035115],       [ 0.        ,  0.89406437],       [ 0.        ,  1.13245928],       [ 0.        ,  1.44204059],       [ 0.        ,  2.2293452 ],       [ 0.19220984,  1.25750041],       [ 0.        ,  1.23660386],       [ 0.65419769,  1.98056126],       [ 0.11676514,  1.56042922],       [ 0.        ,  1.30243855],       [ 0.        ,  1.21314836]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.10421972e+01],       [  5.47000000e+02,   3.87816072e+00],       [  1.73200000e+03,   1.81262541e+00],       [  5.47700000e+03,   6.31356299e-01],       [  3.16220000e+04,   5.38747944e-02]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   5.59027815e+01],       [  5.47000000e+02,   4.07854319e-01,   7.45809841e+00],       [  1.73200000e+03,   1.09824169e+00,   2.60302591e+00],       [  5.47700000e+03,   3.89595300e-01,   9.28674221e-01],       [  3.16220000e+04,   1.32040009e-02,   1.32863984e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]