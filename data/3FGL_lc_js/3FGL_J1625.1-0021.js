Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 1.03206444,  1.41827774,  1.29281986,  1.65973616,  0.95325518,        1.13492823,  0.75979102,  1.96094275,  0.70170337,  0.77597928,        0.81000823,  0.78690976,  0.97568578,  0.86748058,  0.89488673,        2.11859083,  0.97749758,  1.55495775,  0.91749257,  1.42832327,        0.65137929,  1.34712243,  1.07224309,  1.00298202,  1.56422377,        1.63780916,  1.78092408,  0.61539948,  1.07241571,  1.08783078,        1.27617121,  0.95384598,  1.06836224,  1.34656489,  0.51812357,        1.09668839,  1.33092391,  0.70283532,  1.09927619,  1.71079028,        2.00454783,  1.01291752,  0.55155784,  1.31619871,  1.30883956,        1.36093426,  1.00153363,  1.24676204]
FluxHistoryError = [[ 0.68665475,  1.43823278],       [ 1.03327763,  1.85738277],       [ 0.96125364,  1.67158735],       [ 1.24874902,  2.12616181],       [ 0.65030122,  1.30240834],       [ 0.761222  ,  1.56460214],       [ 0.48277786,  1.09356523],       [ 1.53038073,  2.44635987],       [ 0.38460824,  1.07728851],       [ 0.4791891 ,  1.13156569],       [ 0.48132184,  1.20728278],       [ 0.52711415,  1.0951165 ],       [ 0.6561029 ,  1.35428154],       [ 0.51577032,  1.28279948],       [ 0.56418586,  1.29248631],       [ 1.55004418,  2.75840616],       [ 0.59861982,  1.42557526],       [ 1.08416033,  2.10462403],       [ 0.5197655 ,  1.39131355],       [ 1.00427866,  1.92493856],       [ 0.2945407 ,  1.0991497 ],       [ 0.91352361,  1.84044075],       [ 0.66980904,  1.5483706 ],       [ 0.66768199,  1.40390038],       [ 1.07860708,  2.11718273],       [ 1.14158285,  2.19931531],       [ 1.25995755,  2.37526083],       [ 0.29015759,  1.02119875],       [ 0.6901896 ,  1.5297842 ],       [ 0.68961573,  1.54158401],       [ 0.88412273,  1.73699093],       [ 0.5904268 ,  1.40652657],       [ 0.64327019,  1.57778561],       [ 0.88427746,  1.9014442 ],       [ 0.22895393,  0.89431286],       [ 0.68300045,  1.57020056],       [ 0.88524246,  1.85921168],       [ 0.34010902,  1.15518212],       [ 0.59768236,  1.67996073],       [ 1.29604888,  2.17889619],       [ 1.46326423,  2.61944723],       [ 0.66110104,  1.43012536],       [ 0.26777783,  0.90829492],       [ 0.86776876,  1.83588195],       [ 0.92387474,  1.75139284],       [ 0.91357565,  1.89441299],       [ 0.64011794,  1.42955661],       [ 0.78698856,  1.78997159]], dtype=float32
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   6.11946335e+01],       [  5.47000000e+02,   3.98616333e+01],       [  1.73200000e+03,   3.15796223e+01],       [  5.47700000e+03,   6.63486242e+00],       [  3.16220000e+04,   9.37652811e-02]]
SpectrumError = [[  1.73000000e+02,   4.21966438e+01,   8.10693741e+01],       [  5.47000000e+02,   3.46291542e+01,   4.52822647e+01],       [  1.73200000e+03,   2.93907337e+01,   3.37685127e+01],       [  5.47700000e+03,   5.84027910e+00,   7.49249029e+00],       [  3.16220000e+04,   2.45184377e-02,   2.27504462e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]