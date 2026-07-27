from sqlalchemy import Column, Integer, String, Float, Boolean, DateTime, ForeignKey, Text, JSON
from sqlalchemy.orm import relationship
from datetime import datetime
from .database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, index=True, nullable=False)
    email = Column(String(100), unique=True, index=True, nullable=False)
    hashed_password = Column(String(255), nullable=False)
    full_name = Column(String(100))
    age = Column(Integer)
    gender = Column(String(20))
    height = Column(Float)
    weight = Column(Float)
    target_weight = Column(Float)
    fitness_goal = Column(String(50))
    fitness_level = Column(String(50))
    xp = Column(Integer, default=0)
    coins = Column(Integer, default=0)
    streak = Column(Integer, default=0)
    created_at = Column(DateTime, default=datetime.utcnow)

    avatar = relationship("Avatar", back_populates="user", uselist=False)
    workouts = relationship("Workout", back_populates="user")
    progress = relationship("Progress", back_populates="user")
    water_logs = relationship("WaterLog", back_populates="user")
    chats = relationship("ChatHistory", back_populates="user")

class Avatar(Base):
    __tablename__ = "avatars"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), unique=True)
    gender = Column(String(20)) # Male / Female
    body_type = Column(String(20)) # Skinny, Lean, Fit, Plus
    skin_color = Column(String(20), default="#ffdbac")
    hair_style = Column(String(50), default="short")
    outfit = Column(String(50), default="cyber_suit")
    level = Column(Integer, default=1)
    
    user = relationship("User", back_populates="avatar")

class Workout(Base):
    __tablename__ = "workouts"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    title = Column(String(100))
    category = Column(String(50))
    duration_minutes = Column(Integer)
    calories_burned = Column(Float)
    difficulty = Column(String(20))
    plan_json = Column(JSON) # AI generated routine structure
    created_at = Column(DateTime, default=datetime.utcnow)

    user = relationship("User", back_populates="workouts")

class Exercise(Base):
    __tablename__ = "exercises"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), index=True)
    category = Column(String(50))
    target_muscle = Column(String(50))
    equipment = Column(String(50))
    instructions = Column(Text)
    model_3d_url = Column(String(255))

class DietPlan(Base):
    __tablename__ = "diet_plans"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    daily_calories = Column(Float)
    protein_g = Column(Float)
    carbs_g = Column(Float)
    fat_g = Column(Float)
    meals_json = Column(JSON)
    created_at = Column(DateTime, default=datetime.utcnow)

class FoodItem(Base):
    __tablename__ = "food_items"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), index=True)
    calories = Column(Float)
    protein = Column(Float)
    carbs = Column(Float)
    fat = Column(Float)
    serving_size = Column(String(50))

class MusicTrack(Base):
    __tablename__ = "music_tracks"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(100))
    artist = Column(String(100))
    genre = Column(String(50))
    mood = Column(String(50))
    duration = Column(Integer)
    url = Column(String(255))

class Progress(Base):
    __tablename__ = "progress_logs"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    weight = Column(Float)
    body_fat = Column(Float)
    calories_consumed = Column(Float)
    calories_burned = Column(Float)
    date = Column(DateTime, default=datetime.utcnow)

    user = relationship("User", back_populates="progress")

class WaterLog(Base):
    __tablename__ = "water_logs"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    amount_ml = Column(Integer)
    logged_at = Column(DateTime, default=datetime.utcnow)

    user = relationship("User", back_populates="water_logs")

class ChatHistory(Base):
    __tablename__ = "chat_history"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    role = Column(String(20)) # user or assistant
    message = Column(Text)
    timestamp = Column(DateTime, default=datetime.utcnow)

    user = relationship("User", back_populates="chats")

class Notification(Base):
    __tablename__ = "notifications"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    title = Column(String(100))
    message = Column(Text)
    is_read = Column(Boolean, default=False)
    created_at = Column(DateTime, default=datetime.utcnow)

class Achievement(Base):
    __tablename__ = "achievements"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(100))
    description = Column(Text)
    badge_icon = Column(String(50))
    xp_reward = Column(Integer)
