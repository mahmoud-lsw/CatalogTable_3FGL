Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 1.23254859,  0.47885963,  1.35851717,  2.39416218,  2.16477799,        1.92100704,  0.        ,  0.        ,  0.57964045,  2.84513903,        0.91884619,  1.14405894,  1.30423117,  0.        ,  2.20136309,        1.17236161,  0.85606307,  0.96334463,  0.24758415,  0.        ,        0.10128465,  1.71285105,  0.85472047,  0.        ,  0.9126277 ,        0.        ,  1.26950741,  0.25151166,  1.01033723,  0.76465166,        0.        ,  0.        ,  0.        ,  0.        ,  0.77634275,        0.21995424,  1.86637938,  1.23640704,  2.02368641,  0.        ,        0.        ,  0.81691247,  0.61092138,  1.51820099,  0.2574195 ,        2.23202968,  0.        ,  0.        ]
FluxHistoryError = [[ 0.38400221,  2.35043573],       [ 0.        ,  3.7323105 ],       [ 0.23349869,  2.68837452],       [ 1.07410491,  3.8625555 ],       [ 1.05772948,  3.44585657],       [ 0.32642233,  3.52138233],       [ 0.        ,  2.67557406],       [ 0.        ,  2.76612234],       [ 0.        ,  3.39078909],       [ 1.66249001,  4.30113316],       [ 0.        ,  4.19887   ],       [ 0.0496577 ,  2.44009805],       [ 0.33529431,  2.55361199],       [ 0.        ,  2.86297894],       [ 1.11316025,  3.4356513 ],       [ 0.12770057,  2.34560585],       [ 0.        ,  3.39135927],       [ 0.        ,  3.1672588 ],       [ 0.        ,  2.64409308],       [ 0.        ,  2.31248927],       [ 0.        ,  2.64045968],       [ 0.50050008,  3.08403683],       [ 0.        ,  3.27410376],       [ 0.        ,  2.14012194],       [ 0.        ,  3.2372129 ],       [ 0.        ,  2.31906557],       [ 0.23286414,  2.42350292],       [ 0.        ,  2.5550414 ],       [ 0.        ,  3.34042227],       [ 0.        ,  2.7445215 ],       [ 0.        ,  2.41641879],       [ 0.        ,  2.11564946],       [ 0.        ,  2.23387218],       [ 0.        ,  1.40137815],       [ 0.        ,  3.00981343],       [ 0.        ,  2.29259585],       [ 0.63624513,  3.14442348],       [ 0.0779171 ,  2.49589729],       [ 0.85368562,  3.28447533],       [ 0.        ,  2.16668987],       [ 0.        ,  2.17831707],       [ 0.0596965 ,  1.77927291],       [ 0.0641191 ,  1.43755007],       [ 0.58703107,  2.60639572],       [ 0.        ,  3.05605403],       [ 1.15947092,  3.43227959],       [ 0.        ,  2.11373591],       [ 0.        ,  2.22468758]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   6.84157562e+01],       [  5.47000000e+02,   1.22913980e+01],       [  1.73200000e+03,   7.23800540e-01],       [  5.47700000e+03,   3.66492122e-01],       [  3.16220000e+04,   5.17866760e-02]]
SpectrumError = [[  1.73000000e+02,   4.33660698e+01,   9.36327972e+01],       [  5.47000000e+02,   8.70808601e+00,   1.59984999e+01],       [  1.73200000e+03,   2.27029532e-01,   1.29108977e+00],       [  5.47700000e+03,   2.00246409e-01,   5.80180109e-01],       [  3.16220000e+04,   1.20359473e-02,   1.29089683e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]