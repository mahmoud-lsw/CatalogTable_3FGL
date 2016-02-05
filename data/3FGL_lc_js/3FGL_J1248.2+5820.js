Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 3.07783628,  4.45240307,  4.40370369,  4.85691166,  3.75599456,        3.15591574,  4.49654818,  4.39423561,  6.0967536 ,  3.96846366,        4.86727238,  3.70931864,  3.06657362,  3.60814428,  3.3475945 ,        4.96793175,  2.69692469,  3.65068722,  2.93987608,  2.87621117,        2.49318075,  2.7065239 ,  3.99528265,  3.2460947 ,  4.79813051,        4.15147781,  2.07093549,  3.51247954,  2.98162413,  2.600775  ,        2.83155894,  3.66005754,  3.58592796,  2.49060869,  1.75986195,        2.40301442,  3.65597415,  1.59237707,  2.92234802,  4.62980938,        2.56192327,  3.76442599,  3.60288548,  3.82277083,  3.75019979,        4.7556057 ,  4.39269304,  2.87608647]
FluxHistoryError = [[ 2.32196331,  3.92845607],       [ 3.55844212,  5.41874266],       [ 3.53313184,  5.35205364],       [ 3.96924996,  5.8419919 ],       [ 2.97940302,  4.57346296],       [ 2.38006115,  4.02028179],       [ 3.60312104,  5.4253912 ],       [ 3.48695564,  5.40505314],       [ 5.10684776,  7.15427876],       [ 3.15640831,  4.82531261],       [ 3.99354315,  5.8259964 ],       [ 2.9368844 ,  4.56342697],       [ 2.36152315,  3.85474801],       [ 2.84820223,  4.45361853],       [ 2.69661474,  4.05376101],       [ 4.09176922,  5.91363239],       [ 2.03782201,  3.43949342],       [ 2.95741177,  4.41150856],       [ 2.22921801,  3.72787046],       [ 2.25004244,  3.57000899],       [ 1.78735924,  3.2911973 ],       [ 2.03376722,  3.45475388],       [ 3.24152708,  4.81963396],       [ 2.55137253,  4.00980425],       [ 4.03665257,  5.63512707],       [ 3.34984326,  5.03622866],       [ 1.53739238,  2.68004298],       [ 2.7968924 ,  4.302876  ],       [ 2.32493019,  3.71692276],       [ 1.90675521,  3.38155532],       [ 2.13951612,  3.59403753],       [ 2.90296197,  4.49466467],       [ 2.76727819,  4.48734474],       [ 1.91175365,  3.13808513],       [ 1.16522563,  2.45954418],       [ 1.83889222,  3.05037355],       [ 2.91693687,  4.48819208],       [ 1.03957939,  2.25186872],       [ 2.27782536,  3.63603878],       [ 3.84152484,  5.48314333],       [ 1.94347548,  3.24329329],       [ 3.03058887,  4.56509399],       [ 2.90128732,  4.37144375],       [ 3.08152008,  4.61179543],       [ 3.04074764,  4.53100491],       [ 3.94770837,  5.5966959 ],       [ 3.6043942 ,  5.26543713],       [ 2.19030857,  3.64244223]], dtype=float32
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   2.11680496e+02],       [  5.47000000e+02,   8.22155380e+01],       [  1.73200000e+03,   2.75992355e+01],       [  5.47700000e+03,   1.01754274e+01],       [  3.16220000e+04,   3.86862254e+00]]
SpectrumError = [[  1.73000000e+02,   1.82298004e+02,   2.41367279e+02],       [  5.47000000e+02,   7.75654068e+01,   8.68656693e+01],       [  1.73200000e+03,   2.60333500e+01,   2.91651211e+01],       [  5.47700000e+03,   9.37350941e+00,   1.09773455e+01],       [  3.16220000e+04,   3.40846920e+00,   4.37235117e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]