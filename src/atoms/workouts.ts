import { atom } from "jotai";

export const workoutsAtom = atom({
    "Chest": {
        "INCLINEBENCHPRESS": {
            "label": "Incline Bench Press"
        },
        "PUSHUP": {
            "label": "Push Up"
        },
        "INCLINECHESTFLYS": {
            "label": "Incline Chest Flys"
        }
    },
    "Back": {
        "DUMBBELLROWBILATERAL": {
            "label": "Dumbbell Row Bilateral"
        },
        "DUMBBELLROWUNILATERAL": {
            "label": "Dumbbell Row Unilateral"
        },
        "DUMBBELLROMANIANDEADLIFT": {
            "label": "Dumbbell Romanian Deadlift"
        },
    },
    "Shoulder": {
        "DUMBBELLSEATEDOVERHEADPRESS": {
            "label": "Dumbbell Seated Overhead Press"
        },
        "DUMBBELLSEATEDREARDELTFLY": {
            "label": "Dumbbell Seated Rear Delt Fly"
        },
        "DUMBBELLLATERALRAISE": {
            "label": "Dumbbell Lateral Raise"
        },
        "DUMBBELLREARDELTROW": {
            "label": "Dumbbell Rear Delt Row"
        },
        "DUMBBELLFRONTRAISE": {
            "label": "Dumbbell Front Raise"
        }
    },
    "Arm": {
        "categories": {
            "BICEPS": {
                "DUMBBELLCURL": {
                    "label": "Dumbbell Curl"
                },
                "DUMBBELLHAMMERCURL": {
                    "label": "Dumbbell Hammer Curl"
                },
                "DUMBBELLREVERSECURL": {
                    "label": "Dumbbell Reverse Curl"
                },
            },
            "TRICEPS": {
                "DUMBBELLSEATEDOVERHEADTRICEPEXTENSION": {
                    "label": "Dumbbell Seated Overhead Tricep Extension"
                },
                "DUMBBELLALTERNATINGSINGLEARMPRESS": {
                    "label": "Dumbbell Alternating Single Arm Press"
                },
                "DUMBBELLSKULLCRUSHER": {
                    "label": "Dumbbell Skullcrusher"
                },
            },
            "FOREARM": {
                "DUMBBELLWRISTCURL": {
                    "label": "Dumbbell Wrist Curl"
                },
                "DUMBBELLWRISTEXTENSION": {
                    "label": "Dumbbell Wrist Extension"
                },
            }
        }
    },
    "ABS": {
        "DUMBBELLCRUNCH": {
            "label": "Dumbbell Crunch"
        },

        "PLANK": {
            "label": "Plank"
        },

        "NORMALCRUNCHES": {
            "label": "Normal Crunches"
        },
    }
});