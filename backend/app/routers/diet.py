from fastapi import APIRouter
from pydantic import BaseModel
from typing import List, Dict

router = APIRouter(prefix="/api/diet", tags=["Diet & Nutrition"])

@router.get("/current")
def get_current_diet():
    return {
        "calories": 2400,
        "protein": 180,
        "carbs": 240,
        "fat": 70,
        "water_target_ml": 3500,
        "water_logged_ml": 2250,
        "meals": [
            {"time": "08:00 AM", "name": "Protein Oatmeal & Banana", "calories": 450, "protein": 30},
            {"time": "01:00 PM", "name": "Chicken Breast & Brown Rice", "calories": 650, "protein": 50},
            {"time": "05:00 PM", "name": "Pre-Workout Whey Shake", "calories": 200, "protein": 25},
            {"time": "08:30 PM", "name": "Grilled Salmon & Broccoli", "calories": 600, "protein": 45}
        ]
    }

@router.post("/log-water")
def log_water(amount_ml: int = 250):
    return {
        "status": "success",
        "logged_ml": amount_ml,
        "message": f"Logged {amount_ml}ml of water!"
    }
