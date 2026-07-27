from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import uvicorn

app = FastAPI(
    title="FitVerse AI API",
    description="The world's most advanced AI Fitness Ecosystem Backend API",
    version="1.0.0"
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class UserRegister(BaseModel):
    username: str
    email: str
    password: str

class UserLogin(BaseModel):
    email: str
    password: str

class WorkoutGenerateRequest(BaseModel):
    age: int
    height: float
    weight: float
    goal: str
    experience: str
    equipment: List[str]
    injury: Optional[str] = None

class DietGenerateRequest(BaseModel):
    country: str
    budget: str
    allergies: List[str]
    preference: str
    target_calories: float

@app.get("/")
def read_root():
    return {
        "status": "online",
        "system": "FitVerse AI Core",
        "version": "1.0.0",
        "message": "Welcome to FitVerse AI Neural API"
    }

@app.post("/api/auth/register")
def register(user: UserRegister):
    return {"message": "User registered successfully", "user": user.username}

@app.post("/api/auth/login")
def login(user: UserLogin):
    return {"access_token": "mock_jwt_token_fitverse", "token_type": "bearer"}

@app.post("/api/ai/workout")
def generate_workout(req: WorkoutGenerateRequest):
    return {
        "title": f"Custom AI Protocol for {req.goal.upper()}",
        "difficulty": req.experience,
        "estimated_duration": 45,
        "estimated_calories": 420,
        "schedule": [
            {
                "day": "Day 1",
                "focus": "Chest & Triceps Cyber Burst",
                "exercises": [
                    {"name": "Bench Press", "sets": 4, "reps": 10, "rest_sec": 60},
                    {"name": "Incline Dumbbell Flyes", "sets": 3, "reps": 12, "rest_sec": 45},
                    {"name": "Tricep Cable Pushdowns", "sets": 4, "reps": 12, "rest_sec": 45}
                ]
            },
            {
                "day": "Day 2",
                "focus": "Back & Biceps Core Circuit",
                "exercises": [
                    {"name": "Pull-ups", "sets": 4, "reps": 8, "rest_sec": 60},
                    {"name": "Lat Pulldowns", "sets": 3, "reps": 12, "rest_sec": 45},
                    {"name": "Barbell Curls", "sets": 4, "reps": 10, "rest_sec": 45}
                ]
            }
        ]
    }

@app.post("/api/ai/diet")
def generate_diet(req: DietGenerateRequest):
    return {
        "target_calories": req.target_calories,
        "macros": {"protein": "160g", "carbs": "210g", "fat": "65g"},
        "meals": {
            "breakfast": "Oatmeal with Almond Butter & Blueberries",
            "lunch": f"Grilled Chicken & Quinoa Bowl ({req.country} style)",
            "dinner": "Steamed Salmon with Asparagus & Sweet Potato",
            "snack": "Greek Yogurt & Protein Shake"
        },
        "shopping_list": ["Oats", "Almond Butter", "Chicken Breast", "Quinoa", "Salmon", "Asparagus", "Greek Yogurt"]
    }

@app.post("/api/ai/mood-recommendation")
def mood_recommendation(mood: str):
    recommendations = {
        "tired": {"workout": "Light Yoga & Stretching", "music": "Lo-Fi Cyber Chill", "quote": "Recovery is part of progress."},
        "motivated": {"workout": "High Intensity Beast Mode", "music": "Synthwave Cyberpunk Beats", "quote": "Break your limits today!"},
        "sad": {"workout": "Outdoor Mindful Run", "music": "Ambient Uplifting Melodies", "quote": "Movement heals the mind."},
        "lazy": {"workout": "15-Min Express Bodyweight", "music": "High Energy EDM", "quote": "Small steps lead to big victories."}
    }
    return recommendations.get(mood.lower(), recommendations["motivated"])

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
