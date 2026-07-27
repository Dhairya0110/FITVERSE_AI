from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from typing import Optional

router = APIRouter(prefix="/api/avatar", tags=["Avatar"])

class AvatarUpdate(BaseModel):
    gender: Optional[str] = None
    body_type: Optional[str] = None # Skinny, Lean, Fit, Plus
    skin_color: Optional[str] = None
    hair_style: Optional[str] = None
    outfit: Optional[str] = None

@router.get("/")
def get_avatar():
    return {
        "gender": "Male",
        "body_type": "Fit",
        "skin_color": "#ffdbac",
        "hair_style": "cyber_fade",
        "outfit": "neon_armor",
        "level": 3,
        "evolution_stage": "Phase 2 - Cyber Athlete"
    }

@router.put("/update")
def update_avatar(avatar: AvatarUpdate):
    return {
        "message": "Avatar updated successfully",
        "avatar": avatar
    }

@router.post("/evolve")
def evolve_avatar(xp: int, weight_change: float):
    # Evolution algorithm based on XP and body metrics
    new_level = max(1, xp // 100)
    return {
        "new_level": new_level,
        "evolved": True,
        "unlocked_accessories": ["Gold Cyber Visor", "Neon Aura Effect"],
        "message": f"Avatar evolved to Level {new_level}!"
    }
