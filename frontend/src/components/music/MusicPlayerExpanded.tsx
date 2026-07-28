'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useFitStore } from '@/store/useFitStore';
import { REAL_MUSIC_DATABASE } from '@/lib/realMusicDatabase';
import { MusicTrack } from '@/types';
import {
  Music, Play, Pause, Search, Volume2, VolumeX, ListPlus, Sparkles,
  ExternalLink, History, Flame, Globe, Compass, Disc, Zap, Headphones,
  Radio, Check, RefreshCw, X
} from 'lucide-react';

const QUICK_CHIPS = [
  { label: 'Gym Motivation', icon: '🔥', query: 'Gym Motivation Workout Music' },
  { label: 'Strength Training', icon: '🏋️', query: 'Heavy Metal Strength Workout Music' },
  { label: 'Running & Cardio', icon: '🏃', query: 'High BPM Running Cardio Music' },
  { label: 'Cycling Beats', icon: '🚴', query: 'Cycling EDM Workout Mix' },
  { label: 'Bodybuilding Pump', icon: '💪', query: 'Bodybuilding Rap Workout Beats' },
  { label: 'EDM Workout', icon: '🎧', query: 'Best EDM Workout Music Mix' },
  { label: 'Hip Hop Gym', icon: '🎵', query: 'Hip Hop Workout Music' },
  { label: 'Lo-Fi Chill', icon: '🎼', query: 'Lo Fi Beats Workout Study Relax' },
  { label: 'Yoga & Flow', icon: '🧘', query: 'Calm Ambient Yoga Flow Music' },
  { label: 'Meditation', icon: '🌿', query: 'Deep Meditation Nature Sounds' },
  { label: 'Bollywood Workout', icon: '🇮🇳', query: 'High Energy Bollywood Workout Songs' },
  { label: 'English Workout', icon: '🇺🇸', query: 'Top English Workout Pop Rock Hits' },
  { label: 'K-Pop Workout', icon: '🇰🇷', query: 'K Pop High Energy Workout Playlist' },
  { label: 'Punjabi Beats', icon: '🎤', query: 'Punjabi Workout Beats High Bass' },
];

const LANGUAGES = [
  'English', 'Hindi', 'Gujarati', 'Punjabi', 'Tamil', 'Telugu',
  'Malayalam', 'Kannada', 'Bengali', 'Marathi', 'Spanish', 'French',
  'German', 'Japanese', 'Korean', 'Arabic', 'Portuguese', 'Chinese'
];

interface TrendingPlaylist {
  id: string;
  title: string;
  artistOrCurator: string;
  category: string;
  country: string;
  coverUrl: string;
  searchQuery: string;
  tracksCount: number;
}

const TRENDING_PLAYLISTS: TrendingPlaylist[] = [
  {
    id: 'tr_1',
    title: 'Punjabi High-Bass Gym Beast Mix',
    artistOrCurator: 'FitVerse Editorial • India',
    category: 'Punjabi / Gym',
    country: 'India',
    coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80',
    searchQuery: 'Punjabi High Bass Gym Workout Mix 2026',
    tracksCount: 35,
  },
  {
    id: 'tr_2',
    title: 'Top 50 International Cardio Pop Hits',
    artistOrCurator: 'Global Beats • USA',
    category: 'Pop / Cardio',
    country: 'USA',
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80',
    searchQuery: 'Top 50 Workout Pop Hits 2026',
    tracksCount: 50,
  },
  {
    id: 'tr_3',
    title: 'Anime Hyper-Drive Workout OSTs',
    artistOrCurator: 'Tokyo Pulse • Japan',
    category: 'Anime / J-Pop',
    country: 'Japan',
    coverUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80',
    searchQuery: 'Best Anime Workout Music OST High Hype',
    tracksCount: 28,
  },
  {
    id: 'tr_4',
    title: 'K-Pop Explosive Dance Cardio Beats',
    artistOrCurator: 'Seoul Rhythm • Korea',
    category: 'K-Pop',
    country: 'Korea',
    coverUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80',
    searchQuery: 'K Pop Dance Workout Playlist High BPM',
    tracksCount: 40,
  },
  {
    id: 'tr_5',
    title: 'Bollywood Hyper Nitro Gym Anthems',
    artistOrCurator: 'Desi Beats • India',
    category: 'Bollywood',
    country: 'India',
    coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80',
    searchQuery: 'Bollywood High Energy Gym Songs Workout',
    tracksCount: 42,
  },
  {
    id: 'tr_6',
    title: 'Ultra Heavy Metal Deadlift Protocol',
    artistOrCurator: 'Titan Iron • Global',
    category: 'Heavy Metal',
    country: 'USA',
    coverUrl: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&w=600&q=80',
    searchQuery: 'Heavy Metal Powerlifting Deadlift Music',
    tracksCount: 30,
  },
];

export const MusicPlayerExpanded: React.FC = () => {
  const { user, mood, currentTrack, setCurrentTrack } = useFitStore();
  const [isPlaying, setIsPlaying] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const selectedLanguage = user.language || 'English';
  const [volume, setVolume] = useState<number>(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([
    'Eminem Till I Collapse',
    'Arijit Singh Gym Mix',
    'Believer Imagine Dragons',
    'K-Pop Workout Beats',
    'Bollywood High BPM Cardio'
  ]);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const activeTrack = currentTrack || REAL_MUSIC_DATABASE[0];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn('Audio play notice:', err);
          setIsPlaying(false);
        });
    }
  };

  const handleSelectTrack = (track: MusicTrack) => {
    setCurrentTrack(track);
    setIsPlaying(true);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current
          .play()
          .catch((err) => {
            console.warn('Track play notice:', err);
            setIsPlaying(false);
          });
      }
    }, 100);
  };

  // Open YouTube Search Results in a new browser tab
  const handleOpenYouTubeSearch = (queryToSearch?: string) => {
    const q = (queryToSearch || searchQuery).trim();
    if (!q) return;

    // Save to Recent Searches (Keep last 10 unique items)
    setRecentSearches((prev) => {
      const filtered = prev.filter((item) => item.toLowerCase() !== q.toLowerCase());
      return [q, ...filtered].slice(0, 10);
    });

    const ytUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;
    window.open(ytUrl, '_blank', 'noopener,noreferrer');
  };

  const handleRemoveRecentSearch = (e: React.MouseEvent, itemToRemove: string) => {
    e.stopPropagation();
    setRecentSearches((prev) => prev.filter((item) => item !== itemToRemove));
  };

  // Get country recommendations based on user's country
  const getCountryRecommendations = () => {
    const userCountry = (user.country || 'India').toLowerCase();
    if (userCountry.includes('india')) {
      return [
        { label: 'Bollywood Workout Hits', query: 'Bollywood High Energy Gym Songs' },
        { label: 'Punjabi Heavy Bass Beats', query: 'Punjabi Workout Music Bass Boosted' },
        { label: 'Tamil & Telugu Power Beats', query: 'South Indian Workout Songs Power Beats' },
      ];
    }
    if (userCountry.includes('japan')) {
      return [
        { label: 'Anime Hyper-Drive OSTs', query: 'Anime Workout Music Hype' },
        { label: 'J-Pop High Tempo Cardio', query: 'J Pop High Energy Workout Music' },
      ];
    }
    if (userCountry.includes('korea')) {
      return [
        { label: 'K-Pop Dance Gym Mix', query: 'K-Pop Workout Playlist High BPM' },
        { label: 'Korean Hip-Hop Gym Beats', query: 'Korean Hip Hop Gym Beats' },
      ];
    }
    return [
      { label: 'USA Billboard Workout Hits', query: 'Billboard Workout Music Pop Rock' },
      { label: 'Hip-Hop Gym Motivation', query: 'US Hip Hop Workout Music' },
    ];
  };

  // Get workout recommendations based on user's goal
  const getWorkoutRecommendations = () => {
    const goal = (user.goal || 'fat_loss').toLowerCase();
    if (goal.includes('fat') || goal.includes('loss')) {
      return { title: 'High BPM Cardio & Fat Burn', query: 'High BPM Cardio Workout Music' };
    }
    if (goal.includes('muscle') || goal.includes('gain') || goal.includes('strength')) {
      return { title: 'Heavy Metal & Rap Powerlifting', query: 'Heavy Metal Rap Powerlifting Gym' };
    }
    if (goal.includes('endurance') || goal.includes('run')) {
      return { title: 'Pacing Distance Running Beats', query: 'Running Pacing 160 BPM Music' };
    }
    return { title: 'Balanced Fitness Workout Mix', query: 'Balanced Workout Gym Motivation' };
  };

  const countryRecs = getCountryRecommendations();
  const workoutRec = getWorkoutRecommendations();

  const filteredTracks = REAL_MUSIC_DATABASE.filter((t) => {
    const q = searchQuery.toLowerCase();
    return (
      t.title.toLowerCase().includes(q) ||
      t.artist.toLowerCase().includes(q) ||
      t.album.toLowerCase().includes(q) ||
      t.genre.toLowerCase().includes(q) ||
      t.country.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hidden Audio Engine Element */}
      <audio
        ref={audioRef}
        src={activeTrack.audioUrl}
        onEnded={() => setIsPlaying(false)}
        onError={(e) => {
          console.warn('Handled audio stream load event:', e);
          setIsPlaying(false);
        }}
      />

      {/* HERO SECTION: SMART YOUTUBE SEARCH ENGINE */}
      <div className="royal-card p-6 md:p-8 relative overflow-hidden border border-[#1E5EFF]/30 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E5EFF]/10 border border-[#1E5EFF]/30 text-[#1E5EFF] text-xs font-extrabold uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" /> Smart YouTube Music Integration
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[var(--text-primary)] font-heading">
              Search Any Song, Artist or Playlist on YouTube
            </h2>
            <p className="text-xs text-[var(--text-secondary)] font-semibold max-w-2xl">
              Search millions of songs on YouTube instantly or stream our high-energy curated workout playlists.
            </p>
          </div>
        </div>

        {/* SEARCH INPUT BAR */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleOpenYouTubeSearch();
          }}
          className="flex items-center gap-3"
        >
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-[var(--text-muted)] absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Search any song, artist, workout mix (e.g. Arijit Singh, Eminem, Gym Motivation)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full royal-input pl-12 pr-4 py-3.5 text-sm font-semibold focus:border-[#1E5EFF] shadow-sm"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-3.5 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <button
            type="submit"
            className="px-6 py-3.5 rounded-2xl royal-btn-primary text-xs font-extrabold flex items-center gap-2 shadow-lg cursor-pointer flex-shrink-0"
          >
            <Search className="w-4 h-4" /> Search YouTube
          </button>
        </form>

        {/* QUICK SEARCH CHIPS BAR */}
        <div className="space-y-2">
          <span className="text-[11px] font-black uppercase tracking-wider text-[var(--text-muted)] block flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-[#C9A227]" /> Quick Search Categories
          </span>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {QUICK_CHIPS.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSearchQuery(chip.query);
                  handleOpenYouTubeSearch(chip.query);
                }}
                className="whitespace-nowrap px-3.5 py-1.5 rounded-2xl text-xs font-bold royal-btn-secondary flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <span>{chip.icon}</span>
                <span>{chip.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* RECENT SEARCHES HISTORY PILLS */}
        {recentSearches.length > 0 && (
          <div className="pt-2 border-t border-[var(--border-color)] space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5">
              <History className="w-3 h-3 text-[#1E5EFF]" /> Recent Searches
            </span>
            <div className="flex items-center gap-2 flex-wrap">
              {recentSearches.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSearchQuery(item);
                    handleOpenYouTubeSearch(item);
                  }}
                  className="px-3 py-1 rounded-xl bg-[var(--input-bg)] border border-[var(--border-color)] text-xs text-[var(--text-secondary)] font-semibold flex items-center gap-2 hover:border-[#1E5EFF]/50 transition-all cursor-pointer"
                >
                  <span>{item}</span>
                  <span
                    onClick={(e) => handleRemoveRecentSearch(e, item)}
                    className="hover:text-rose-500 text-[10px] font-bold p-0.5"
                    title="Remove item"
                  >
                    ✕
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* PERSONALIZED RECOMMENDATIONS SECTION */}
      <div className="space-y-4">
        <h3 className="text-xl font-extrabold text-[var(--text-primary)] flex items-center gap-2 font-heading">
          <Compass className="w-5 h-5 text-[#1E5EFF]" /> AI Personalized Music Recommendations
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* 1. Country Recommendation */}
          <div className="royal-card p-5 border border-[var(--border-color)] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase text-[#1E5EFF] flex items-center gap-1.5">
                <Globe className="w-4 h-4" /> Country Focus ({user.country || 'India'})
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#1E5EFF]/10 text-[#1E5EFF] font-bold">Local Hits</span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] font-semibold">
              Curated energetic workout playlists tailored for listeners in {user.country || 'India'}.
            </p>
            <div className="space-y-2 pt-1">
              {countryRecs.map((rec, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOpenYouTubeSearch(rec.query)}
                  className="w-full p-2.5 rounded-xl royal-btn-secondary text-xs font-bold flex items-center justify-between text-left cursor-pointer"
                >
                  <span>{rec.label}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#1E5EFF]" />
                </button>
              ))}
            </div>
          </div>

          {/* 2. Workout Type Recommendation */}
          <div className="royal-card p-5 border border-[var(--border-color)] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase text-[#00B894] flex items-center gap-1.5">
                <Flame className="w-4 h-4" /> Goal Match ({user.goal || 'Fat Loss'})
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#00B894]/10 text-[#00B894] font-bold">Optimal BPM</span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] font-semibold">
              Music pace synchronized to maximize your {user.goal || 'Fat Loss'} workout sessions.
            </p>
            <div className="pt-2">
              <button
                onClick={() => handleOpenYouTubeSearch(workoutRec.query)}
                className="w-full p-3 rounded-xl royal-btn-primary text-xs font-extrabold flex items-center justify-between cursor-pointer shadow-md"
              >
                <span>{workoutRec.title}</span>
                <ExternalLink className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* 3. Mood Recommendation */}
          <div className="royal-card p-5 border border-[var(--border-color)] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase text-[#C9A227] flex items-center gap-1.5">
                <Headphones className="w-4 h-4" /> Current Mood ({mood.toUpperCase()})
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#C9A227]/10 text-[#C9A227] font-bold">Mood-Synced</span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] font-semibold">
              Selected audio stream to match your current {mood} mindstate.
            </p>
            <div className="pt-2">
              <button
                onClick={() => handleOpenYouTubeSearch(`${mood} workout music ${selectedLanguage}`)}
                className="w-full p-3 rounded-xl royal-btn-secondary text-xs font-extrabold flex items-center justify-between cursor-pointer"
              >
                <span>Launch {mood.toUpperCase()} {selectedLanguage} Mix</span>
                <ExternalLink className="w-4 h-4 text-[#C9A227]" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* TRENDING WORKOUT PLAYLISTS GRID */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-extrabold text-[var(--text-primary)] flex items-center gap-2 font-heading">
            <Radio className="w-5 h-5 text-[#00B894]" /> Trending YouTube Workout Playlists
          </h3>
          <span className="text-xs text-[var(--text-muted)] font-bold">Top 6 Curated Stations</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TRENDING_PLAYLISTS.map((pl) => (
            <div
              key={pl.id}
              className="royal-card p-5 border border-[var(--border-color)] hover:border-[#1E5EFF]/50 transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="flex items-start gap-4">
                <img
                  src={pl.coverUrl}
                  alt={pl.title}
                  className="w-20 h-20 rounded-2xl object-cover border border-[var(--border-color)] flex-shrink-0 shadow-md"
                />
                <div className="space-y-1">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#1E5EFF]/10 text-[#1E5EFF] font-black uppercase">
                    {pl.category}
                  </span>
                  <h4 className="text-sm font-black text-[var(--text-primary)] font-heading leading-snug">{pl.title}</h4>
                  <p className="text-[11px] text-[var(--text-muted)] font-semibold">{pl.artistOrCurator}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-[var(--border-color)] flex items-center justify-between">
                <span className="text-[11px] text-[var(--text-muted)] font-bold">{pl.tracksCount} Workout Songs</span>
                <button
                  onClick={() => handleOpenYouTubeSearch(pl.searchQuery)}
                  className="px-3.5 py-1.5 rounded-xl royal-btn-primary text-xs font-extrabold flex items-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" /> Play on YouTube ↗
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WEB AUDIO PLAYER ENGINE */}
      <div className="royal-card p-6 border border-[var(--border-color)] space-y-6">
        {/* Main Active Player Bar */}
        <div className="p-6 rounded-2xl royal-card border border-[var(--border-color)] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <img
              src={activeTrack.coverUrl}
              alt={activeTrack.title}
              className="w-20 h-20 rounded-2xl object-cover border border-[var(--border-color)] shadow-md"
            />
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1E5EFF]/10 text-[#1E5EFF] text-[10px] font-extrabold uppercase mb-1">
                <Sparkles className="w-3 h-3" /> Internal Stream • {activeTrack.genre} ({activeTrack.country})
              </div>
              <h4 className="text-lg font-black text-[var(--text-primary)] font-heading">{activeTrack.title}</h4>
              <p className="text-xs text-[var(--text-muted)] font-semibold">{activeTrack.artist} • {activeTrack.album}</p>
            </div>
          </div>

          {/* Player Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={togglePlay}
              className="w-12 h-12 rounded-full royal-btn-primary flex items-center justify-center text-white font-bold shadow-lg hover:scale-105 transition-all cursor-pointer"
            >
              {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-0.5" />}
            </button>

            {/* Volume Control */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--input-bg)] border border-[var(--border-color)]">
              <button onClick={() => setIsMuted(!isMuted)} className="text-[var(--text-muted)] hover:text-[var(--text-primary)]">
                {isMuted ? <VolumeX className="w-4 h-4 text-rose-500" /> : <Volume2 className="w-4 h-4 text-[#1E5EFF]" />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-16 accent-[#1E5EFF] cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Playlist Grid */}
        <div className="space-y-3">
          <h4 className="text-sm font-extrabold text-[var(--text-primary)] flex items-center gap-2">
            <ListPlus className="w-4 h-4 text-[#1E5EFF]" /> Real Web Audio Regional Track List
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filteredTracks.map((track) => {
              const isSelected = track.id === activeTrack.id;
              return (
                <div
                  key={track.id}
                  onClick={() => handleSelectTrack(track)}
                  className={`p-3.5 rounded-2xl border cursor-pointer flex items-center justify-between transition-all ${
                    isSelected
                      ? 'border-[#1E5EFF] bg-[#1E5EFF]/10 shadow-md'
                      : 'royal-card border-[var(--border-color)] hover:border-[#1E5EFF]/40'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <img src={track.coverUrl} alt={track.title} className="w-12 h-12 rounded-xl object-cover" />
                    <div>
                      <h5 className="text-xs font-bold text-[var(--text-primary)]">{track.title}</h5>
                      <p className="text-[11px] text-[var(--text-muted)] font-semibold">{track.artist} ({track.genre})</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[var(--input-bg)] text-[var(--text-secondary)] font-extrabold">
                      {track.duration}
                    </span>
                    <button className="p-1.5 rounded-full bg-[#1E5EFF]/10 text-[#1E5EFF]">
                      <Play className="w-3.5 h-3.5 fill-current" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
