Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.19759619,  0.02439648,  0.        ,  0.15173656,  0.        ,        0.        ,  0.47430483,  0.15332283,  0.        ,  0.        ,        0.        ,  0.94407547,  0.25656432,  0.        ,  0.        ,        0.46675003,  0.        ,  0.38847193,  0.        ,  0.        ,        0.21370839,  0.        ,  0.        ,  0.        ,  0.        ,        0.49194407,  0.        ,  0.        ,  0.44518954,  0.15238458,        0.        ,  0.        ,  0.        ,  0.        ,  0.68656141,        0.05281305,  1.08206463,  0.41113734,  0.        ,  0.2439972 ,        0.2496084 ,  0.        ,  0.        ,  0.        ,  0.        ,        0.21162768,  0.        ,  0.        ]
FluxHistoryError = [[ 0.        ,  0.94694579],       [ 0.        ,  0.71236873],       [ 0.        ,  0.6010381 ],       [ 0.        ,  0.92467809],       [ 0.        ,  0.53710032],       [ 0.        ,  0.57636231],       [ 0.22401521,  0.82120228],       [ 0.        ,  0.99513204],       [ 0.        ,  0.60525602],       [ 0.        ,  0.55794483],       [ 0.        ,  0.63895124],       [ 0.56212711,  1.41489804],       [ 0.07440342,  0.57120907],       [ 0.        ,  0.59809482],       [ 0.        ,  1.38293731],       [ 0.13389573,  0.95073527],       [ 0.        ,  0.59111398],       [ 0.13067999,  0.80727786],       [ 0.        ,  0.54961163],       [ 0.        ,  0.59295774],       [ 0.06653881,  0.46907341],       [ 0.        ,  0.85200471],       [ 0.        ,  0.85696864],       [ 0.        ,  0.65677708],       [ 0.        ,  0.63108152],       [ 0.03254902,  1.07095981],       [ 0.        ,  0.91942507],       [ 0.        ,  0.67456019],       [ 0.11222237,  0.94562918],       [ 0.        ,  1.10759306],       [ 0.        ,  0.61944014],       [ 0.        ,  0.73982489],       [ 0.        ,  0.64902639],       [ 0.        ,  0.74648774],       [ 0.34045255,  1.15238702],       [ 0.        ,  1.23901605],       [ 0.57531732,  1.70337546],       [ 0.0267787 ,  0.92718399],       [ 0.        ,  1.29033244],       [ 0.03030458,  0.5863753 ],       [ 0.0700821 ,  0.57510215],       [ 0.        ,  0.73960108],       [ 0.        ,  0.88004255],       [ 0.        ,  0.83129311],       [ 0.        ,  0.5867669 ],       [ 0.05311008,  0.50545299],       [ 0.        ,  0.6776067 ],       [ 0.        ,  0.68544674]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.10532188e+02],       [  5.47000000e+02,   2.89145410e-01],       [  1.73200000e+03,   1.53703427e+00],       [  5.47700000e+03,   7.66337216e-02],       [  3.16220000e+04,   5.65409601e-01]]
SpectrumError = [[  1.73000000e+02,   8.07733154e+01,   1.42622894e+02],       [  5.47000000e+02,   0.00000000e+00,   7.89787906e+00],       [  1.73200000e+03,   7.78900921e-01,   2.37581062e+00],       [  5.47700000e+03,   0.00000000e+00,   6.31317645e-01],       [  3.16220000e+04,   3.58321846e-01,   8.32127213e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]