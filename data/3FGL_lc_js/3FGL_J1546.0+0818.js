Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.49036166,  0.09097867,  0.18333378,  0.09561677,  0.125443  ,        0.16434748,  0.20469034,  0.        ,  0.        ,  0.        ,        0.49201301,  0.05611065,  0.31517127,  0.1943226 ,  0.61847544,        0.71596348,  1.04964912,  1.45063424,  0.        ,  0.        ,        0.        ,  0.        ,  0.3105548 ,  0.        ,  0.21926947,        0.        ,  0.        ,  0.        ,  0.18270655,  0.37267971,        1.08239675,  0.894409  ,  0.36727771,  0.40769511,  0.        ,        1.55044425,  0.        ,  0.73777992,  0.49590176,  0.        ,        0.32428139,  0.11274695,  0.13748235,  0.70050192,  0.34256893,        0.        ,  0.        ,  0.        ]
FluxHistoryError = [[ 0.12792066,  0.95270443],       [ 0.        ,  0.6946141 ],       [ 0.        ,  0.84453538],       [ 0.        ,  1.25460918],       [ 0.03631275,  0.29801479],       [ 0.        ,  1.00936337],       [ 0.04839963,  0.47603995],       [ 0.        ,  0.66561455],       [ 0.        ,  0.96755069],       [ 0.        ,  0.46361479],       [ 0.14772135,  0.93046749],       [ 0.        ,  0.73567632],       [ 0.00857517,  0.74142981],       [ 0.04667708,  0.47227198],       [ 0.23477557,  1.12267137],       [ 0.26343232,  1.33066964],       [ 0.60826588,  1.61626887],       [ 0.87037164,  2.15377092],       [ 0.        ,  0.59382683],       [ 0.        ,  1.01222253],       [ 0.        ,  0.62885827],       [ 0.        ,  0.73109305],       [ 0.1028083 ,  0.65480351],       [ 0.        ,  0.64788693],       [ 0.03979154,  0.54164612],       [ 0.        ,  0.88150579],       [ 0.        ,  1.04623711],       [ 0.        ,  1.07693803],       [ 0.        ,  1.19283421],       [ 0.0883674 ,  0.79913974],       [ 0.62088418,  1.6643014 ],       [ 0.46802324,  1.45901799],       [ 0.04036152,  0.87234235],       [ 0.11852828,  0.82759571],       [ 0.        ,  0.97081989],       [ 1.01619613,  2.19756627],       [ 0.        ,  0.70656103],       [ 0.33823934,  1.30111778],       [ 0.18846512,  0.95931673],       [ 0.        ,  0.96701503],       [ 0.05425674,  0.78603721],       [ 0.        ,  1.06808978],       [ 0.        ,  0.89655089],       [ 0.33086962,  1.20571876],       [ 0.11190042,  0.72076201],       [ 0.        ,  0.8327204 ],       [ 0.        ,  0.84974295],       [ 0.        ,  0.72354603]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   6.15100318e-04],       [  5.47000000e+02,   5.60595810e-01],       [  1.73200000e+03,   3.55997276e+00],       [  5.47700000e+03,   1.65694845e+00],       [  3.16220000e+04,   8.02463830e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   4.76412439e+01],       [  5.47000000e+02,   0.00000000e+00,   8.52453023e+00],       [  1.73200000e+03,   2.59889078e+00,   4.61885357e+00],       [  5.47700000e+03,   1.24933577e+00,   2.13196564e+00],       [  3.16220000e+04,   5.63318253e-01,   1.09719121e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]