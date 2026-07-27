from fastapi import APIRouter
from typing import List

router = APIRouter(prefix="/api/music", tags=["Music & Motivation"])

@router.get("/recommendations")
def get_recommendations(mood: str = "motivated", genre: str = "synthwave"):
    tracks = [
        {
            "id": 1,
            "title": "Cyberpunk Pulse",
            "artist": "Neon Wave",
            "duration": "3:45",
            "mood": "motivated",
            "cover": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=300&q=80"
        },
        {
            "id": 2,
            "title": "Hyperdrive Sprint",
            "artist": "Vapor Core",
            "duration": "2:50",
            "mood": "motivated",
            "cover": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=300&q=80"
        },
        {
            "id": 3,
            "title": "Midnight Zen",
            "artist": "Aura Frequency",
            "duration": "4:12",
            "mood": "sad",
            "cover": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=300&q=80"
        }
    ]
    return [t for t in tracks if t["mood"] == mood] or tracks
