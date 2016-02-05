Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.40026391,  0.44030407,  0.65630245,  0.63794214,        0.        ,  0.        ,  0.        ,  0.        ,  0.        ,        0.        ,  0.13655257,  1.03859985,  0.        ,  0.        ,        0.15808889,  0.54592121,  0.50265908,  0.75934058,  0.        ,        0.43505019,  0.        ,  0.10153814,  0.24547721,  0.        ,        0.        ,  0.48789036,  0.98817664,  0.42691442,  0.18270949,        0.80226183,  0.        ,  0.        ,  0.21416506,  0.33526769,        0.        ,  0.15284967,  0.        ,  0.        ,  0.12477135,        0.        ,  0.        ,  0.67282254,  0.        ,  0.34428862,        0.        ,  0.        ,  0.29676536]
FluxHistoryError = [[ 0.        ,  1.77094412],       [ 0.        ,  1.86359465],       [ 0.        ,  2.04286709],       [ 0.27048054,  1.22396779],       [ 0.23938996,  1.26607943],       [ 0.        ,  0.83141655],       [ 0.        ,  1.06347084],       [ 0.        ,  1.52006423],       [ 0.        ,  1.11676943],       [ 0.        ,  1.06087732],       [ 0.        ,  0.92388761],       [ 0.        ,  1.23824894],       [ 0.47338355,  1.77380502],       [ 0.        ,  1.42271471],       [ 0.        ,  0.86947703],       [ 0.        ,  1.25908336],       [ 0.1575298 ,  1.14742517],       [ 0.01990363,  1.13638234],       [ 0.08992857,  1.58372772],       [ 0.        ,  0.61703354],       [ 0.01858616,  1.07821822],       [ 0.        ,  1.21482873],       [ 0.        ,  1.22479434],       [ 0.        ,  1.93171562],       [ 0.        ,  0.90610701],       [ 0.        ,  1.46158504],       [ 0.08611605,  1.01487815],       [ 0.31751668,  1.81581712],       [ 0.14162827,  0.8747915 ],       [ 0.        ,  1.55155542],       [ 0.25450659,  1.55276513],       [ 0.        ,  1.29931128],       [ 0.        ,  1.39549923],       [ 0.        ,  1.41839108],       [ 0.        ,  1.93433204],       [ 0.        ,  1.26405632],       [ 0.        ,  1.34432483],       [ 0.        ,  0.9639014 ],       [ 0.        ,  0.84634125],       [ 0.        ,  1.56208216],       [ 0.        ,  0.91630703],       [ 0.        ,  0.94687265],       [ 0.3020547 ,  1.20870554],       [ 0.        ,  0.89204121],       [ 0.        ,  1.70403066],       [ 0.        ,  0.83802181],       [ 0.        ,  1.85831809],       [ 0.        ,  1.72715858]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   7.92637348e+00],       [  5.47000000e+02,   8.19378853e+00],       [  1.73200000e+03,   7.59397969e-02],       [  5.47700000e+03,   3.34466279e-01],       [  3.16220000e+04,   3.10876012e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   5.67158175e+01],       [  5.47000000e+02,   4.76271343e+00,   1.18079739e+01],       [  1.73200000e+03,   0.00000000e+00,   1.35295775e+00],       [  5.47700000e+03,   1.71559885e-01,   5.54102480e-01],       [  3.16220000e+04,   1.72685981e-01,   5.01849413e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]