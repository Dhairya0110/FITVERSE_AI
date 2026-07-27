from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional

router = APIRouter(prefix="/api/workouts", tags=["Workouts"])

class ExerciseDetail(BaseModel):
    name: str
    sets: int
    reps: int
    rest_sec: int
    target_muscle: str

class WorkoutPlanResponse(BaseModel):
    id: int
    title: str
    difficulty: str
    duration_minutes: int
    calories_burned: float
    exercises: List[ExerciseDetail]

@router.get("/")
def get_workouts():
    return [
        {
            "id": 101,
            "title": "Hypertrophy Upper Body Protocol",
            "difficulty": "Intermediate",
            "duration_minutes": 45,
            "calories_burned": 380,
            "exercises": [
                {"name": "Barbell Bench Press", "sets": 4, "reps": 10, "rest_sec": 60, "target_muscle": "Chest"},
                {"name": "Incline Dumbbell Press", "sets": 3, "reps": 12, "rest_sec": 45, "target_muscle": "Upper Chest"},
                {"name": "Cable Crossover", "sets": 3, "reps": 15, "rest_sec": 30, "target_muscle": "Chest"}
            ]
        },
        {
            "id": 102,
            "title": "Leg & Core Destruction",
            "difficulty": "Advanced",
            "duration_minutes": 50,
            "calories_burned": 520,
            "exercises": [
                {"name": "Barbell Back Squat", "sets": 5, "reps": 8, "rest_sec": 90, "target_muscle": "Quadriceps"},
                {"name": "Romanian Deadlift", "sets": 4, "reps": 10, "rest_sec": 60, "target_muscle": "Hamstrings"},
                {"name": "Bulgarian Split Squat", "sets": 3, "reps": 12, "rest_sec": 45, "target_muscle": "Glutes"}
            ]
        }
    ]

@router.post("/log")
def log_workout(workout_id: int, duration: int, calories: float):
    return {
        "status": "success",
        "xp_earned": 50,
        "coins_earned": 10,
        "message": "Workout logged! XP +50, Coins +10"
    }
