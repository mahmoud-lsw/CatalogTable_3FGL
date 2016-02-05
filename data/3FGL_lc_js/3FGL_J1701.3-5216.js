Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  1.79703093,  0.        ,  5.00193644,  0.36499509,        1.18001437,  4.99680805,  0.        ,  2.33500338,  4.74588156,        7.04183245,  0.        ,  0.        ,  0.        ,  0.        ,        4.17998171,  6.00912189,  0.        ,  0.        ,  5.94272327,        0.        ,  1.37060308,  5.13435936,  2.11528373,  0.84469044,        0.        ,  2.50462389,  3.24617481,  0.        ,  0.        ,        2.26938748,  3.37283444,  1.68863976,  0.91106081,  1.47910559,        3.2674222 ,  5.62244034,  0.        ,  4.34255743,  3.11669064,        0.        ,  0.49975625,  2.39989758,  0.        ,  1.78865337,        0.        ,  2.48331356,  1.29480624]
FluxHistoryError = [[  0.        ,   3.80963683],       [  0.        ,   7.32941389],       [  0.        ,   4.38611364],       [  1.67842007,   8.4905405 ],       [  0.        ,   4.92963418],       [  0.        ,   6.69786334],       [  2.22982407,   8.03502083],       [  0.        ,   6.83653116],       [  0.        ,   5.20754433],       [  2.20012283,   7.4338522 ],       [  3.92713594,  10.39311028],       [  0.        ,   5.68915367],       [  0.        ,   4.81888437],       [  0.        ,   4.53321886],       [  0.        ,   4.32151747],       [  1.40379715,   7.22037697],       [  3.68828797,   8.5410881 ],       [  0.        ,   4.07488775],       [  0.        ,   3.98212123],       [  3.03921318,   9.0644989 ],       [  0.        ,   4.1521883 ],       [  0.        ,   6.33844566],       [  2.45675421,   8.12420559],       [  0.        ,   6.71036363],       [  0.        ,   6.91038716],       [  0.        ,   4.20628834],       [  0.10247588,   5.3661108 ],       [  1.64634073,   5.20429039],       [  0.        ,   4.27654266],       [  0.        ,   3.53479671],       [  0.10120535,   4.70137739],       [  0.79409146,   6.32873058],       [  0.        ,   6.69970191],       [  0.        ,   6.90441275],       [  0.        ,   5.54829562],       [  0.99098897,   5.85665464],       [  3.15359068,   8.35845947],       [  0.        ,   4.54155636],       [  1.14540219,   7.79816628],       [  1.17987347,   5.25502396],       [  0.        ,   4.00760651],       [  0.        ,   4.16364041],       [  0.91144574,   4.36230612],       [  0.        ,   5.38782263],       [  0.        ,   6.27455664],       [  0.        ,   4.91981792],       [  0.45661592,   4.86790609],       [  0.        ,   7.00947452]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.43099655e+02],       [  5.47000000e+02,   4.37540932e+01],       [  1.73200000e+03,   4.95668077e+00],       [  5.47700000e+03,   3.66606563e-01],       [  3.16220000e+04,   2.20435321e-01]]
SpectrumError = [[  1.73000000e+02,   5.15144882e+01,   2.34997070e+02],       [  5.47000000e+02,   3.32167740e+01,   5.45221405e+01],       [  1.73200000e+03,   3.24476671e+00,   6.76790428e+00],       [  5.47700000e+03,   1.39863193e-02,   8.00092161e-01],       [  3.16220000e+04,   9.50788409e-02,   4.03772235e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]