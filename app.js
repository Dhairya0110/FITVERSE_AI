// ==========================================
// 1. MULTI-LANGUAGE TRANSLATION DICTIONARY
// ==========================================
const translations = {
  "en": {
    "brand_subtitle": "AI FITNESS ECOSYSTEM",
    "login": "Login",
    "signup": "Sign Up",
    "email": "Email Address",
    "username": "Username",
    "password": "Password",
    "remember_me": "Remember Me",
    "forgot_password": "Forgot Password?",
    "no_account": "Don't have an account?",
    "have_account": "Already have an account?",
    "create_account": "Create Account",
    "or_social": "Or Connect Via",
    "google_sign_in": "Sign in with Google",
    "logout": "Log Out",
    "welcome_back": "Welcome Back, Fighter",
    "welcome_desc": "Enter your credentials to interface with your personalized AI fitness avatar.",
    "register_title": "Start Your Ascent",
    "register_desc": "Establish your profile and launch your custom-designed fitness regime.",
    "forgot_title": "Restore Access",
    "forgot_desc": "Enter your registered email below to receive a secure recovery code.",
    "send_recovery": "Send Recovery Link",
    "back_to_login": "Back to Login",
    "onboarding_title": "Configure Your DNA",
    "onboarding_step_1": "Identity",
    "onboarding_step_2": "Targets",
    "onboarding_step_3": "Diet",
    "onboarding_step_4": "Allergies",
    "onboarding_step_5": "Region",
    "onboarding_step_6": "Vibe",
    "fullname": "Full Name",
    "age": "Age",
    "gender": "Gender",
    "height": "Height",
    "weight": "Current Weight",
    "target_weight": "Target Weight",
    "fitness_goal": "Fitness Goal",
    "workout_pref": "Workout Preference",
    "fitness_level": "Fitness Level",
    "diet_pref": "Dietary Preference",
    "allergy": "Allergies",
    "country": "Country",
    "state_region": "State or Region",
    "preferred_lang": "Interface Language",
    "music_lang": "Music Lyrics Language",
    "preferred_units": "Preferred Units",
    "current_mood": "Current Mood",
    "favorite_music": "Favorite Music Genre",
    "generate_btn": "Generate My Fitness Journey",
    "male": "Male",
    "female": "Female",
    "other": "Other",
    "fat_loss": "Fat Loss",
    "muscle_gain": "Muscle Gain",
    "maintenance": "Weight Maintenance",
    "endurance": "Endurance Improvement",
    "home": "Home Workout",
    "gym": "Gym Workout",
    "beginner": "Beginner",
    "intermediate": "Intermediate",
    "advanced": "Advanced",
    "vegetarian": "Vegetarian",
    "non_vegetarian": "Non-Vegetarian",
    "vegan": "Vegan",
    "custom_diet": "Custom Diet",
    "menu_dash": "Dashboard",
    "menu_plan": "AI Workout & Diet",
    "menu_coach": "AI Fitness Coach",
    "menu_avatar": "Evolving Avatar",
    "menu_knowledge": "Today's Knowledge",
    "menu_music": "Music & Motivation",
    "menu_settings": "Settings",
    "stat_bmi": "BMI",
    "stat_water": "Water Intake",
    "stat_streak": "Daily Streak",
    "stat_calories_consumed": "Consumed",
    "stat_calories_burned": "Burned",
    "stat_xp": "XP Level",
    "quick_log_water": "Log 250ml",
    "quick_log_reset": "Reset Logs",
    "progress_chart_title": "Weekly Weight Tracking",
    "achievements_title": "Unlocked Milestones",
    "chat_header": "AI FITNESS COMMAND",
    "chat_placeholder": "Ask Coach anything (e.g. 'Give chest exercises' or 'Motivate me')...",
    "speech_active": "Listening to Voice Command...",
    "dark_mode": "Dark Theme",
    "light_mode": "Light Theme",
    "voice_commands": "Voice Commands (Speech-to-Text)",
    "voice_feedback": "Voice Synthesizer (Text-to-Speech)"
  },
  "es": {
    "brand_subtitle": "ECOSISTEMA DE FITNESS IA",
    "login": "Iniciar Sesión",
    "signup": "Registrarse",
    "email": "Correo Electrónico",
    "username": "Usuario",
    "password": "Contraseña",
    "remember_me": "Recordarme",
    "forgot_password": "¿Olvidaste tu contraseña?",
    "no_account": "¿No tienes una cuenta?",
    "have_account": "¿Ya tienes una cuenta?",
    "create_account": "Crear Cuenta",
    "or_social": "O Conéctate Vía",
    "google_sign_in": "Iniciar sesión con Google",
    "logout": "Cerrar Sesión",
    "welcome_back": "Bienvenido de nuevo, Guerrero",
    "welcome_desc": "Ingresa tus credenciales para conectarte con tu avatar de fitness de IA.",
    "register_title": "Comienza Tu Ascenso",
    "register_desc": "Establece tu perfil e inicia tu régimen de fitness personalizado.",
    "forgot_title": "Restaurar Acceso",
    "forgot_desc": "Ingresa tu correo registrado para recibir un enlace de recuperación seguro.",
    "send_recovery": "Enviar Enlace de Recuperación",
    "back_to_login": "Volver al Inicio",
    "onboarding_title": "Configura tu ADN",
    "onboarding_step_1": "Identidad",
    "onboarding_step_2": "Objetivos",
    "onboarding_step_3": "Dieta",
    "onboarding_step_4": "Alergias",
    "onboarding_step_5": "Región",
    "onboarding_step_6": "Vibras",
    "fullname": "Nombre Completo",
    "age": "Edad",
    "gender": "Género",
    "height": "Altura",
    "weight": "Peso Actual",
    "target_weight": "Peso Objetivo",
    "fitness_goal": "Meta de Fitness",
    "workout_pref": "Preferencia de Entrenamiento",
    "fitness_level": "Nivel de Fitness",
    "diet_pref": "Preferencia Dietética",
    "allergy": "Alergias",
    "country": "País",
    "state_region": "Estado o Región",
    "preferred_lang": "Idioma del Sistema",
    "music_lang": "Idioma de Música",
    "preferred_units": "Unidades",
    "current_mood": "Estado de Ánimo",
    "favorite_music": "Género Musical",
    "generate_btn": "Generar Mi Viaje IA",
    "male": "Masculino",
    "female": "Femenino",
    "other": "Otro",
    "fat_loss": "Pérdida de Grasa",
    "muscle_gain": "Ganancia de Músculo",
    "maintenance": "Mantenimiento",
    "endurance": "Mejora de Resistencia",
    "home": "Entrenamiento en Casa",
    "gym": "Entrenamiento en Gimnasio",
    "beginner": "Principiante",
    "intermediate": "Intermedio",
    "advanced": "Avanzado",
    "vegetarian": "Vegetariano",
    "non_vegetarian": "No Vegetariano",
    "vegan": "Vegano",
    "custom_diet": "Dieta Personalizada",
    "menu_dash": "Tablero",
    "menu_plan": "Plan IA",
    "menu_coach": "Coach de IA",
    "menu_avatar": "Avatar Evolutivo",
    "menu_knowledge": "Sabiduría de Hoy",
    "menu_music": "Música y Vibras",
    "menu_settings": "Ajustes",
    "stat_bmi": "IMC",
    "stat_water": "Agua Consumida",
    "stat_streak": "Racha Diaria",
    "stat_calories_consumed": "Consumidas",
    "stat_calories_burned": "Quemadas",
    "stat_xp": "Nivel de XP",
    "quick_log_water": "Añadir 250ml",
    "quick_log_reset": "Reiniciar",
    "progress_chart_title": "Peso Semanal",
    "achievements_title": "Logros Desbloqueados",
    "chat_header": "COMANDO DE FITNESS IA",
    "chat_placeholder": "Pregunta al Coach...",
    "speech_active": "Escuchando comando de voz...",
    "dark_mode": "Modo Oscuro",
    "light_mode": "Modo Claro",
    "voice_commands": "Comandos de Voz",
    "voice_feedback": "Retroalimentación de Voz"
  },
  "hi": {
    "brand_subtitle": "एआई फिटनेस इकोसिस्टम",
    "login": "लॉगिन",
    "signup": "साइन अप",
    "email": "ईमेल पता",
    "username": "यूज़रनेम",
    "password": "पासवर्ड",
    "remember_me": "मुझे याद रखें",
    "forgot_password": "पासवर्ड भूल गए?",
    "no_account": "खाता नहीं है?",
    "have_account": "पहले से खाता है?",
    "create_account": "खाता बनाएं",
    "or_social": "या इसके माध्यम से जुड़ें",
    "google_sign_in": "गूगल से लॉगिन करें",
    "logout": "लॉग आउट",
    "welcome_back": "स्वागत है, योद्धा",
    "welcome_desc": "अपने व्यक्तिगत एआई फिटनेस अवतार से जुड़ने के लिए क्रेडेंशियल दर्ज करें।",
    "register_title": "अपनी चढ़ाई शुरू करें",
    "register_desc": "अपनी प्रोफ़ाइल स्थापित करें और अपना कस्टम-डिज़ाइन किया गया फिटनेस शासन शुरू करें।",
    "forgot_title": "पहुंच बहाल करें",
    "forgot_desc": "एक सुरक्षित पुनर्प्राप्ति कोड प्राप्त करने के लिए नीचे अपना पंजीकृत ईमेल दर्ज करें।",
    "send_recovery": "रिकवरी लिंक भेजें",
    "back_to_login": "लॉगिन पर वापस जाएं",
    "onboarding_title": "अपने डीएनए को कॉन्फ़िगर करें",
    "onboarding_step_1": "पहचान",
    "onboarding_step_2": "लक्ष्य",
    "onboarding_step_3": "आहार",
    "onboarding_step_4": "एलर्जी",
    "onboarding_step_5": "क्षेत्र",
    "onboarding_step_6": "वाइब",
    "fullname": "पूरा नाम",
    "age": "उम्र",
    "gender": "लिंग",
    "height": "ऊंचाई",
    "weight": "वर्तमान वजन",
    "target_weight": "लक्ष्य वजन",
    "fitness_goal": "फिटनेस लक्ष्य",
    "workout_pref": "कसरत प्राथमिकता",
    "fitness_level": "फिटनेस स्तर",
    "diet_pref": "आहार प्राथमिकता",
    "allergy": "एलर्जी",
    "country": "देश",
    "state_region": "राज्य या क्षेत्र",
    "preferred_lang": "इंटरफ़ेस भाषा",
    "music_lang": "संगीत भाषा",
    "preferred_units": "पसंदीदा इकाइयां",
    "current_mood": "वर्तमान मूड",
    "favorite_music": "पसंदीदा संगीत शैली",
    "generate_btn": "मेरी फिटनेस यात्रा उत्पन्न करें",
    "male": "पुरुष",
    "female": "महिला",
    "other": "अन्य",
    "fat_loss": "वजन घटाना",
    "muscle_gain": "मांसपेशियों का विकास",
    "maintenance": "वजन रखरखाव",
    "endurance": "सहनशक्ति में सुधार",
    "home": "घर पर कसरत",
    "gym": "जिम कसरत",
    "beginner": "शुरुआती",
    "intermediate": "मध्यम",
    "advanced": "उन्नत",
    "vegetarian": "शाकाहारी",
    "non_vegetarian": "मांसाहारी",
    "vegan": "शाकाहारी (वेगन)",
    "custom_diet": "कस्टम आहार",
    "menu_dash": "डैशबोर्ड",
    "menu_plan": "एआई योजना",
    "menu_coach": "एआई कोच",
    "menu_avatar": "बदलता अवतार",
    "menu_knowledge": "आज का ज्ञान",
    "menu_music": "संगीत और प्रेरणा",
    "menu_settings": "सेटिंग्स",
    "stat_bmi": "बीएमआई",
    "stat_water": "पानी का सेवन",
    "stat_streak": "दैनिक स्ट्रीक",
    "stat_calories_consumed": "खपत",
    "stat_calories_burned": "जलाया",
    "stat_xp": "एक्सपी स्तर",
    "quick_log_water": "250ml दर्ज करें",
    "quick_log_reset": "लॉग रीसेट करें",
    "progress_chart_title": "साप्ताहिक वजन ट्रैकिंग",
    "achievements_title": "अनलॉक किए गए मील के पत्थर",
    "chat_header": "एआई फिटनेस कमांड",
    "chat_placeholder": "कोच से कुछ भी पूछें...",
    "speech_active": "वॉयस कमांड सुन रहा है...",
    "dark_mode": "डार्क थीम",
    "light_mode": "लाइट थीम",
    "voice_commands": "वॉयस कमांड (स्पीच-टू-टेक्स्ट)",
    "voice_feedback": "वॉयस सिंथेसाइज़र (टेक्स्ट-टू-स्पीच)"
  },
  "gu": {
    "brand_subtitle": "એઆી ફિટનેસ ઇકોસિસ્ટમ",
    "login": "લોગિન",
    "signup": "સાઇન અપ",
    "email": "ઈમેલ સરનામું",
    "username": "યુઝરનેમ",
    "password": "પાસવર્ડ",
    "remember_me": "મને યાદ રાખો",
    "forgot_password": "પાસવર્ડ ભૂલી ગયા છો?",
    "no_account": "ખાતું નથી?",
    "have_account": "પહેલેથી જ ખાતું છે?",
    "create_account": "ખાતું બનાવો",
    "or_social": "અથવા આના દ્વારા કનેક્ટ કરો",
    "google_sign_in": "ગૂગલ થી લોગિન કરો",
    "logout": "લોગ આઉટ",
    "welcome_back": "સ્વાગત છે, યોદ્ધા",
    "welcome_desc": "તમારા વ્યક્તિગત એઆઈ ફિટનેસ અવતાર સાથે જોડાવા માટે ઓળખપત્ર દાખલ કરો.",
    "register_title": "તમારી ચઢાણ શરૂ કરો",
    "register_desc": "તમારી પ્રોફાઇલ સેટ કરો અને તમારી કસ્ટમ-ડિઝાઇન કરેલી ફિટનેસ યોજના શરૂ કરો.",
    "forgot_title": "ઍક્સેસ પુનઃસ્થાપિત કરો",
    "forgot_desc": "સુરક્ષિત પુનઃપ્રાપ્તિ કોડ મેળવવા માટે નીચે તમારો રજિસ્ટર્ડ ઈમેલ દાખલ કરો.",
    "send_recovery": "રિકવરી લિંક મોકલો",
    "back_to_login": "લોગિન પર પાછા જાઓ",
    "onboarding_title": "તમારા ડીએનએ સુયોજિત કરો",
    "onboarding_step_1": "ઓળખ",
    "onboarding_step_2": "લક્ષ્યો",
    "onboarding_step_3": "આહાર",
    "onboarding_step_4": "એલર્જી",
    "onboarding_step_5": "વિસ્તાર",
    "onboarding_step_6": "વાઇબ",
    "fullname": "પૂરું નામ",
    "age": "ઉંમર",
    "gender": "લિંગ",
    "height": "ઊંચાઈ",
    "weight": "વર્તમાન વજન",
    "target_weight": "લક્ષ્ય વજન",
    "fitness_goal": "ફિટનેસ લક્ષ્ય",
    "workout_pref": "કસરત પસંદગી",
    "fitness_level": "ફિટનેસ સ્તર",
    "diet_pref": "આહાર પસંદગી",
    "allergy": "એલર્જી",
    "country": "દેશ",
    "state_region": "રાજ્ય કે વિસ્તાર",
    "preferred_lang": "ભાષા",
    "music_lang": "સંગીત ભાષા",
    "preferred_units": "પસંદગીના એકમો",
    "current_mood": "વર્તમાન મૂડ",
    "favorite_music": "પસંદગીની સંગીત શૈલી",
    "generate_btn": "મારી ફિટનેસ યાત્રા શરૂ કરો",
    "male": "પુરુષ",
    "female": "મહિલા",
    "other": "અન્ય",
    "fat_loss": "વજન ઘટાડવું",
    "muscle_gain": "સ્નાયુઓનો વિકાસ",
    "maintenance": "વજન જાળવણી",
    "endurance": "સ્ટેમિના સુધારણા",
    "home": "ઘર પર કસરત",
    "gym": "જીમ કસરત",
    "beginner": "શરૂઆત કરનાર",
    "intermediate": "મધ્યમ",
    "advanced": "અુચ્ચ",
    "vegetarian": "શાકાહારી",
    "non_vegetarian": "માંસાહારી",
    "vegan": "વેગન",
    "custom_diet": "કસ્ટમ આહાર",
    "menu_dash": "ડેશબોર્ડ",
    "menu_plan": "એઆઈ યોજના",
    "menu_coach": "એઆઈ કોચ",
    "menu_avatar": "બદલાતો અવતાર",
    "menu_knowledge": "આજનું જ્ઞાન",
    "menu_music": "સંગીત અને પ્રેરણા",
    "menu_settings": "સેટિંગ્સ",
    "stat_bmi": "બીએમઆઈ",
    "stat_water": "પાણીનો વપરાશ",
    "stat_streak": "દૈનિક સ્ટ્રીક",
    "stat_calories_consumed": "વપરાશ",
    "stat_calories_burned": "બર્ન કરેલ",
    "stat_xp": "એક્સપી સ્તર",
    "quick_log_water": "250ml ઉમેરો",
    "quick_log_reset": "લોગ રીસેટ કરો",
    "progress_chart_title": "સાપ્તાહિક વજન ટ્રેકિંગ",
    "achievements_title": "અનલોક કરેલ સિદ્ધિઓ",
    "chat_header": "એઆઈ ફિટનેસ કમાન્ડ",
    "chat_placeholder": "કોચને કંઈપણ પૂછો...",
    "speech_active": "વાઇસ કમાન્ડ સાંભળી રહ્યા છીએ...",
    "dark_mode": "ડાર્ક થીમ",
    "light_mode": "લાઈટ થીમ",
    "voice_commands": "વોઇસ કમાન્ડ્સ (સ્પીચ-ટુ-ટેક્સ્ટ)",
    "voice_feedback": "વોઇસ સિન્થેસાઇઝર (ટેક્સ્ટ-ટુ-સ્પીચ)"
  },
  "ja": {
    "brand_subtitle": "AIフィットネスエコシステム",
    "login": "ログイン",
    "signup": "サインアップ",
    "email": "メールアドレス",
    "username": "ユーザー名",
    "password": "パスワード",
    "remember_me": "ログイン状態を保持",
    "forgot_password": "パスワードを忘れた場合",
    "no_account": "アカウントをお持ちでない方",
    "have_account": "すでにアカウントをお持ちの方",
    "create_account": "アカウント作成",
    "or_social": "またはソーシャル接続",
    "google_sign_in": "Googleでログイン",
    "logout": "ログアウト",
    "welcome_back": "おかえりなさい、ファイター",
    "welcome_desc": "資格情報を入力して、AIフィットネスアバターに接続します。",
    "register_title": "アセンションの開始",
    "register_desc": "プロフィールを設定し、カスタムフィットネスプランを開始します。",
    "forgot_title": "アクセス復旧",
    "forgot_desc": "登録済みのメールアドレスを入力して、回復リンクを受信します。",
    "send_recovery": "回復リンクを送信",
    "back_to_login": "ログインに戻る",
    "onboarding_title": "DNA設定",
    "onboarding_step_1": "身元",
    "onboarding_step_2": "目標",
    "onboarding_step_3": "食事",
    "onboarding_step_4": "アレルギー",
    "onboarding_step_5": "地域",
    "onboarding_step_6": "バイブ",
    "fullname": "フルネーム",
    "age": "年齢",
    "gender": "性別",
    "height": "身長",
    "weight": "現在の体重",
    "target_weight": "目標体重",
    "fitness_goal": "フィットネス目標",
    "workout_pref": "トレーニング選択",
    "fitness_level": "フィットネスレベル",
    "diet_pref": "食事の好み",
    "allergy": "アレルギー",
    "country": "国",
    "state_region": "都道府県・地域",
    "preferred_lang": "システム言語",
    "music_lang": "音楽言語",
    "preferred_units": "優先単位",
    "current_mood": "現在の気分",
    "favorite_music": "お気に入りの音楽ジャンル",
    "generate_btn": "フィットネス旅程を作成",
    "male": "男性",
    "female": "女性",
    "other": "その他",
    "fat_loss": "体脂肪減少",
    "muscle_gain": "筋肉量増加",
    "maintenance": "現状維持",
    "endurance": "持久力向上",
    "home": "自宅トレーニング",
    "gym": "ジムトレーニング",
    "beginner": "初心者",
    "intermediate": "中級者",
    "advanced": "上級者",
    "vegetarian": "ベジタリアン",
    "non_vegetarian": "非ベジタリアン",
    "vegan": "ビーガン",
    "custom_diet": "カスタムダイエット",
    "menu_dash": "ダッシュボード",
    "menu_plan": "AIプラン",
    "menu_coach": "AIコーチ",
    "menu_avatar": "アバター進化",
    "menu_knowledge": "今日の知識",
    "menu_music": "音楽とバイブス",
    "menu_settings": "設定",
    "stat_bmi": "BMI",
    "stat_water": "水分補給",
    "stat_streak": "継続日数",
    "stat_calories_consumed": "摂取カロリー",
    "stat_calories_burned": "消費カロリー",
    "stat_xp": "XPレベル",
    "quick_log_water": "250ml記録",
    "quick_log_reset": "リセット",
    "progress_chart_title": "週間体重推移",
    "achievements_title": "獲得マイルストーン",
    "chat_header": "AIフィットネス指令",
    "chat_placeholder": "コーチに質問する...",
    "speech_active": "音声コマンド聞き取り中...",
    "dark_mode": "ダークテーマ",
    "light_mode": "ライトテーマ",
    "voice_commands": "音声コマンド（音声認識）",
    "voice_feedback": "音声フィードバック（音声合成）"
  }
};

// ==========================================
// 2. EXPANDED BODYBUILDING LEGENDS DATABASE
// ==========================================
const bodybuildingLegends = {
  "en": [
    {
      "name": "Arnold Schwarzenegger",
      "title": "The Austrian Oak",
      "quote": "The last three or four reps is what makes the muscle grow. This area of pain divides the champion from someone else who is not.",
      "biography": "Born in Austria, rose to become a 7-time Mr. Olympia, legendary Hollywood action star, and Governor of California.",
      "achievements": "7-time Mr. Olympia (1970-1975, 1980), 5-time Mr. Universe.",
      "philosophy": "High volume, high frequency splits, mind-muscle connection, visualizing muscles growing like mountains.",
      "motivation": "Work your butt off, break some rules, don't be afraid to fail, ignore the naysayers.",
      "tip": "Squeeze the muscle at the absolute peak of contraction to trigger deep muscular hypertrophy."
    },
    {
      "name": "Ronnie Coleman",
      "title": "The King",
      "quote": "Everybody wants to be a bodybuilder, but nobody wants to lift no heavy-ass weight.",
      "biography": "Hailing from Louisiana, worked as a police officer while dominating bodybuilding with unmatched size and strength.",
      "achievements": "8-time Mr. Olympia (1998-2005), 26 IFBB Professional wins.",
      "philosophy": "Powerbuilding - combining raw powerlifting compounds (heavy squats/deadlifts) with standard volume splits.",
      "motivation": "Ain't nothing to it but to do it. Push through the doubt and work hard every day.",
      "tip": "Keep compound barbell movements as the foundation of your routine for absolute muscle thickness."
    },
    {
      "name": "Jay Cutler",
      "title": "Quad Stomp Master",
      "quote": "I'm not training to be average. I'm training to win.",
      "biography": "Born in Massachusetts, built a quad-dominant massive physique, becoming Ronnie Coleman's biggest rival and successor.",
      "achievements": "4-time Mr. Olympia (2006, 2007, 2009, 2010), 3-time Arnold Classic Champion.",
      "philosophy": "High density volume training, strict rest intervals, and immense daily caloric intake.",
      "motivation": "Consistency and persistence. Success is built upon the reps you perform when you feel exhausted.",
      "tip": "Use drop sets on your final exercise blocks to fully exhaust muscle fibers and draw in blood flow."
    },
    {
      "name": "Chris Bumstead",
      "title": "CBum",
      "quote": "Champion is a mindset. It's about doing the work when no one is watching, even when you feel like quitting.",
      "biography": "Canadian bodybuilding icon who revolutionized the modern era by dominating the Classic Physique division with vintage flow.",
      "achievements": "5-time Classic Physique Mr. Olympia (2019-2023).",
      "philosophy": "Aesthetic symmetry, vacuum control, progressive overload on basics, and mechanical tension.",
      "motivation": "Vulnerability and resilience. True victory is conquering your own doubts, not just the competitors.",
      "tip": "Focus on clean negative eccentric phases (3-second lowering) to stimulate myofibrillar tear."
    },
    {
      "name": "Phil Heath",
      "title": "The Gift",
      "quote": "Being a champion is not about a title; it's about your daily habits and dedication.",
      "biography": "Former college basketball player from Seattle who possessed extraordinary muscle roundness and 3D density.",
      "achievements": "7-time Mr. Olympia (2011-2017).",
      "philosophy": "Time under tension, FST-7 fascial stretch training, and isolating individual muscle bellies.",
      "motivation": "Block out the noise. The only opponent that matters is the reflection in the mirror.",
      "tip": "Incorporate active fascial stretching between sets to expand the muscle sheets for faster growth."
    },
    {
      "name": "Dorian Yates",
      "title": "The Shadow",
      "quote": "If you are going to do something, do it with absolute intensity and concentration.",
      "biography": "English powerhouse who revolutionized bodybuilding by introducing the 'mass monster' era in the 1990s.",
      "achievements": "6-time Mr. Olympia (1992-1997).",
      "philosophy": "HIT (High Intensity Training) - brief, infrequent sessions pushing a single working set to absolute failure.",
      "motivation": "Let your work speak for itself. Train in silence, away from distractions, and build your temple.",
      "tip": "Warm up thoroughly, then perform only one all-out working set to failure with forced reps."
    },
    {
      "name": "Frank Zane",
      "title": "The Chemist",
      "quote": "The mind is the limit. What the mind can visualize, the body can achieve.",
      "biography": "Chemistry teacher who defeated much heavier competitors by presenting the most vacuum-posed, symmetrical body in history.",
      "achievements": "3-time Mr. Olympia (1977-1979), Mr. Universe, Mr. America.",
      "philosophy": "Aesthetics over mass, mind-muscle synchronization, light-to-moderate weights with perfect contraction.",
      "motivation": "Find balance. Fitness is a lifetime art form, combining mental clarity with physical symmetry.",
      "tip": "Train with absolute focus on form; never sacrifice contraction quality for heavy weights."
    },
    {
      "name": "Lee Haney",
      "title": "Total-Lee Awesome",
      "quote": "Stimulate, don't annihilate. The goal of training is to trigger growth, not destroy the joints.",
      "biography": "Charismatic legend from Georgia who dominated the 1980s with an incredible V-taper and massive back.",
      "achievements": "8-time Mr. Olympia (1984-1991), breaking Arnold's record.",
      "philosophy": "Quality stimulation, high protein, active recovery, and protecting joint longevity.",
      "motivation": "Patience. A premium physique is sculpted over years of smart, sustainable progression.",
      "tip": "Avoid training past absolute joint pain; prioritize recovery to ensure you can train for decades."
    },
    {
      "name": "Kai Greene",
      "title": "The Predator",
      "quote": "If you don't have a dream, you don't have anything. Visualise your destiny and sculpt it.",
      "biography": "Artistic Brooklyn native who rose from foster care to become one of the most legendary posing artists.",
      "achievements": "3-time Arnold Classic Champion, Mr. Olympia Runner-up.",
      "philosophy": "Bodybuilding as an art form, extreme mind-muscle connection, high repetition feel-based training.",
      "motivation": "Build character. True strength lies in your ability to express your authentic self.",
      "tip": "Don't just move weight; contract the muscle to pull the weight. Focus on the muscle, not the iron."
    },
    {
      "name": "Sam Sulek",
      "title": "The Bulk Sensation",
      "quote": "Just lift heavy, eat big, and stay consistent. The rest is details.",
      "biography": "Modern college diver turned social media icon who popularised raw daily training vlogs with old-school focus.",
      "achievements": "Global fitness influencer, over 5M subscribers, face of modern youth lifting.",
      "philosophy": "Heavy basic compounds, high-calorie bulks, simple split execution with maximum consistency.",
      "motivation": "Don't overthink it. Go to the gym, get the pump, and repeat tomorrow.",
      "tip": "Keep your training intensity high and track your daily calorie intake to ensure progressive weight gain."
    },
    {
      "name": "Sangram Chougule",
      "title": "The Maratha Pride",
      "quote": "Commitment is doing what you said you would do, long after the mood you said it in has left you.",
      "biography": "An electrical engineer from Pune who rose to become one of India's most celebrated international bodybuilders.",
      "achievements": "Mr. Universe title winner (2012), 6-time Mr. India.",
      "philosophy": "Relentless discipline, clean Indian home-cooked muscle fuel, and relentless heavy squatting.",
      "motivation": "In India, we have talent; all we need is the focus to conquer the international stage.",
      "tip": "Incorporate eggs, chicken, or high-quality paneer as main protein sources, and never miss your post-workout meal."
    },
    {
      "name": "Suhas Khamkar",
      "title": "The Iron Man of Maharashtra",
      "quote": "Dreams do not compile through magic; they take sweat, determination, and hard work.",
      "biography": "Hailing from a family of fitness enthusiasts, Suhas became a dominant force in Indian bodybuilding, winning multiple national championships.",
      "achievements": "First Indian to win Mr. Asia (2010), 10-time Mr. India title winner.",
      "philosophy": "Heavy structural overloading, high-volume conditioning, and dedicated cardio routines.",
      "motivation": "Stay grounded. Your strength is a gift to inspire others, not to boast.",
      "tip": "Focus on lateral raises and overhead presses to build shoulder width and achieve the V-taper shape."
    },
    {
      "name": "Varinder Singh Ghuman",
      "title": "The Punjabi Giant",
      "quote": "A vegetarian diet can build a world-class physique if you combine it with the right discipline.",
      "biography": "A massive vegetarian bodybuilder from Punjab who also starred in movies and promoted healthy living across India.",
      "achievements": "Mr. India title winner, Mr. Asia Runner-up.",
      "philosophy": "Pure vegetarian mass-building, utilizing dairy, soy, and lentils to compile an enormous frame.",
      "motivation": "Prove the skeptics wrong. vegetarian power is real and highly sustainable.",
      "tip": "Utilize high-quality whey protein, milk, and paneer to meet your daily protein targets without meat."
    },
    {
      "name": "Murli Kumar",
      "title": "The Navy Commander",
      "quote": "Discipline is the bridge between goals and accomplishment.",
      "biography": "Served in the Indian Navy and began bodybuilding late, displaying incredible grit to dominate national contests.",
      "achievements": "Multi-time Mr. India winner, top international competitor representing India.",
      "philosophy": "Military-grade discipline, structured daily routines, and strict caloric control.",
      "motivation": "Age is just a number. If you have the mental fortitude, you can build your dream body at any phase of life.",
      "tip": "Ensure adequate sleep and hydration; a well-rested muscle recovers twice as fast."
    },
    {
      "name": "Rajendran Mani",
      "title": "The Indian Gladiator",
      "quote": "Hard work has no substitute. You have to grind in the gym day in and day out.",
      "biography": "Served in the Indian Army, building one of the thickest and most powerful physiques in Indian history.",
      "achievements": "Mr. World Champion (2013), 8-time Mr. India.",
      "philosophy": "Powerlifting-based bodybuilding, lifting heavy with perfect posture and massive volume.",
      "motivation": "Never surrender. When you face structural exhaustion, search deep inside for the warrior spirit.",
      "tip": "Always include deadlifts in your weekly back sessions to build thick spinal erectors."
    },
    {
      "name": "Thakur Anoop Singh",
      "title": "The Cyber Warrior",
      "quote": "Your body is a temple; treat it with respect and push its limits every day.",
      "biography": "Pilot turned actor and pro bodybuilder who achieved international fame by winning gold at the world championships.",
      "achievements": "Gold Medalist at World Bodybuilding Championship (2015).",
      "philosophy": "Aesthetic symmetry, highly athletic conditioning, and matching fitness with performance arts.",
      "motivation": "Diversify your skills. Your physical fitness is the engine that drives your entire career.",
      "tip": "Focus on core vacuum controls and oblique exercises to slim your waist and look athletic."
    },
    {
      "name": "Rohit Khatri",
      "title": "The Fitness Educator",
      "quote": "Fitness is not about being better than someone else; it's about being better than you used to be.",
      "biography": "A prominent Indian fitness YouTuber and online coach who simplified nutrition and workouts for millions of young lifters.",
      "achievements": "One of India's leading online fitness educators and coaches.",
      "philosophy": "Science-based training splits, flexible dieting, and tracking daily macros meticulously.",
      "motivation": "Education is key. Learn how your metabolism works so you can control your transformation.",
      "tip": "Keep a food diary; tracking your food blocks is the most guaranteed way to ensure fat loss or muscle gain."
    },
    {
      "name": "Sahil Khan",
      "title": "The Aesthetic King",
      "quote": "One life, make it large. Gym is my life, fitness is my passion.",
      "biography": "Bollywood actor turned fitness entrepreneur who popularised the aesthetic gym lifestyle in India.",
      "achievements": "Recipient of prestigious fitness leadership awards in India.",
      "philosophy": "Aesthetic symmetry, healthy lifestyle branding, and high-frequency training blocks.",
      "motivation": "Make fitness fun. It should be a lifestyle you enjoy, not a chore.",
      "tip": "Combine progressive weight training with low-intensity steady-state cardio (LISS) for clean fat loss."
    },
    {
      "name": "Yatinder Singh",
      "title": "The Comeback Legend",
      "quote": "A serious injury can break your body, but it can never break your will if you refuse to quit.",
      "biography": "Overcame a severe spinal injury that nearly paralyzed him, returning to build an elite international physique.",
      "achievements": "Mr. World Silver Medalist (2015), Mr. India Winner.",
      "philosophy": "Biomechanical safety, strict form, rehabilitation focus, and high muscle contraction quality.",
      "motivation": "Never lose hope. Every setback is a setup for an even greater comeback.",
      "tip": "Warm up your rotator cuffs and joints before pushing heavy weights to prevent long-term wear."
    },
    {
      "name": "Satnam Khattra",
      "title": "The Lion of Punjab",
      "quote": "Train hard, stay humble, and help those who are trying to rise.",
      "biography": "Well-known Punjabi fitness coach and kabaddi athlete who inspired youth with his massive size and motivational spirit.",
      "achievements": "Celebrated regional fitness coach and cultural icon.",
      "philosophy": "Functional strength training, high power compound exercises, and clean rustic diet fuels.",
      "motivation": "Stay connected to your roots. Gym training should make you a stronger member of your community.",
      "tip": "Incorporate functional compound movements like farmers walks and tire flips to build raw grip and core power."
    }
  ],
  "es": [
    {
      "name": "Arnold Schwarzenegger",
      "title": "The Austrian Oak",
      "quote": "The last three or four reps is what makes the muscle grow. This area of pain divides the champion from someone else who is not.",
      "biography": "Born in Austria, rose to become a 7-time Mr. Olympia, legendary Hollywood action star, and Governor of California.",
      "achievements": "7-time Mr. Olympia (1970-1975, 1980), 5-time Mr. Universe.",
      "philosophy": "High volume, high frequency splits, mind-muscle connection, visualizing muscles growing like mountains.",
      "motivation": "Work your butt off, break some rules, don't be afraid to fail, ignore the naysayers.",
      "tip": "Squeeze the muscle at the absolute peak of contraction to trigger deep muscular hypertrophy."
    },
    {
      "name": "Ronnie Coleman",
      "title": "The King",
      "quote": "Everybody wants to be a bodybuilder, but nobody wants to lift no heavy-ass weight.",
      "biography": "Hailing from Louisiana, worked as a police officer while dominating bodybuilding with unmatched size and strength.",
      "achievements": "8-time Mr. Olympia (1998-2005), 26 IFBB Professional wins.",
      "philosophy": "Powerbuilding - combining raw powerlifting compounds (heavy squats/deadlifts) with standard volume splits.",
      "motivation": "Ain't nothing to it but to do it. Push through the doubt and work hard every day.",
      "tip": "Keep compound barbell movements as the foundation of your routine for absolute muscle thickness."
    },
    {
      "name": "Jay Cutler",
      "title": "Quad Stomp Master",
      "quote": "I'm not training to be average. I'm training to win.",
      "biography": "Born in Massachusetts, built a quad-dominant massive physique, becoming Ronnie Coleman's biggest rival and successor.",
      "achievements": "4-time Mr. Olympia (2006, 2007, 2009, 2010), 3-time Arnold Classic Champion.",
      "philosophy": "High density volume training, strict rest intervals, and immense daily caloric intake.",
      "motivation": "Consistency and persistence. Success is built upon the reps you perform when you feel exhausted.",
      "tip": "Use drop sets on your final exercise blocks to fully exhaust muscle fibers and draw in blood flow."
    },
    {
      "name": "Chris Bumstead",
      "title": "CBum",
      "quote": "Champion is a mindset. It's about doing the work when no one is watching, even when you feel like quitting.",
      "biography": "Canadian bodybuilding icon who revolutionized the modern era by dominating the Classic Physique division with vintage flow.",
      "achievements": "5-time Classic Physique Mr. Olympia (2019-2023).",
      "philosophy": "Aesthetic symmetry, vacuum control, progressive overload on basics, and mechanical tension.",
      "motivation": "Vulnerability and resilience. True victory is conquering your own doubts, not just the competitors.",
      "tip": "Focus on clean negative eccentric phases (3-second lowering) to stimulate myofibrillar tear."
    },
    {
      "name": "Phil Heath",
      "title": "The Gift",
      "quote": "Being a champion is not about a title; it's about your daily habits and dedication.",
      "biography": "Former college basketball player from Seattle who possessed extraordinary muscle roundness and 3D density.",
      "achievements": "7-time Mr. Olympia (2011-2017).",
      "philosophy": "Time under tension, FST-7 fascial stretch training, and isolating individual muscle bellies.",
      "motivation": "Block out the noise. The only opponent that matters is the reflection in the mirror.",
      "tip": "Incorporate active fascial stretching between sets to expand the muscle sheets for faster growth."
    },
    {
      "name": "Dorian Yates",
      "title": "The Shadow",
      "quote": "If you are going to do something, do it with absolute intensity and concentration.",
      "biography": "English powerhouse who revolutionized bodybuilding by introducing the 'mass monster' era in the 1990s.",
      "achievements": "6-time Mr. Olympia (1992-1997).",
      "philosophy": "HIT (High Intensity Training) - brief, infrequent sessions pushing a single working set to absolute failure.",
      "motivation": "Let your work speak for itself. Train in silence, away from distractions, and build your temple.",
      "tip": "Warm up thoroughly, then perform only one all-out working set to failure with forced reps."
    },
    {
      "name": "Frank Zane",
      "title": "The Chemist",
      "quote": "The mind is the limit. What the mind can visualize, the body can achieve.",
      "biography": "Chemistry teacher who defeated much heavier competitors by presenting the most vacuum-posed, symmetrical body in history.",
      "achievements": "3-time Mr. Olympia (1977-1979), Mr. Universe, Mr. America.",
      "philosophy": "Aesthetics over mass, mind-muscle synchronization, light-to-moderate weights with perfect contraction.",
      "motivation": "Find balance. Fitness is a lifetime art form, combining mental clarity with physical symmetry.",
      "tip": "Train with absolute focus on form; never sacrifice contraction quality for heavy weights."
    },
    {
      "name": "Lee Haney",
      "title": "Total-Lee Awesome",
      "quote": "Stimulate, don't annihilate. The goal of training is to trigger growth, not destroy the joints.",
      "biography": "Charismatic legend from Georgia who dominated the 1980s with an incredible V-taper and massive back.",
      "achievements": "8-time Mr. Olympia (1984-1991), breaking Arnold's record.",
      "philosophy": "Quality stimulation, high protein, active recovery, and protecting joint longevity.",
      "motivation": "Patience. A premium physique is sculpted over years of smart, sustainable progression.",
      "tip": "Avoid training past absolute joint pain; prioritize recovery to ensure you can train for decades."
    },
    {
      "name": "Kai Greene",
      "title": "The Predator",
      "quote": "If you don't have a dream, you don't have anything. Visualise your destiny and sculpt it.",
      "biography": "Artistic Brooklyn native who rose from foster care to become one of the most legendary posing artists.",
      "achievements": "3-time Arnold Classic Champion, Mr. Olympia Runner-up.",
      "philosophy": "Bodybuilding as an art form, extreme mind-muscle connection, high repetition feel-based training.",
      "motivation": "Build character. True strength lies in your ability to express your authentic self.",
      "tip": "Don't just move weight; contract the muscle to pull the weight. Focus on the muscle, not the iron."
    },
    {
      "name": "Sam Sulek",
      "title": "The Bulk Sensation",
      "quote": "Just lift heavy, eat big, and stay consistent. The rest is details.",
      "biography": "Modern college diver turned social media icon who popularised raw daily training vlogs with old-school focus.",
      "achievements": "Global fitness influencer, over 5M subscribers, face of modern youth lifting.",
      "philosophy": "Heavy basic compounds, high-calorie bulks, simple split execution with maximum consistency.",
      "motivation": "Don't overthink it. Go to the gym, get the pump, and repeat tomorrow.",
      "tip": "Keep your training intensity high and track your daily calorie intake to ensure progressive weight gain."
    },
    {
      "name": "Sangram Chougule",
      "title": "The Maratha Pride",
      "quote": "Commitment is doing what you said you would do, long after the mood you said it in has left you.",
      "biography": "An electrical engineer from Pune who rose to become one of India's most celebrated international bodybuilders.",
      "achievements": "Mr. Universe title winner (2012), 6-time Mr. India.",
      "philosophy": "Relentless discipline, clean Indian home-cooked muscle fuel, and relentless heavy squatting.",
      "motivation": "In India, we have talent; all we need is the focus to conquer the international stage.",
      "tip": "Incorporate eggs, chicken, or high-quality paneer as main protein sources, and never miss your post-workout meal."
    },
    {
      "name": "Suhas Khamkar",
      "title": "The Iron Man of Maharashtra",
      "quote": "Dreams do not compile through magic; they take sweat, determination, and hard work.",
      "biography": "Hailing from a family of fitness enthusiasts, Suhas became a dominant force in Indian bodybuilding, winning multiple national championships.",
      "achievements": "First Indian to win Mr. Asia (2010), 10-time Mr. India title winner.",
      "philosophy": "Heavy structural overloading, high-volume conditioning, and dedicated cardio routines.",
      "motivation": "Stay grounded. Your strength is a gift to inspire others, not to boast.",
      "tip": "Focus on lateral raises and overhead presses to build shoulder width and achieve the V-taper shape."
    },
    {
      "name": "Varinder Singh Ghuman",
      "title": "The Punjabi Giant",
      "quote": "A vegetarian diet can build a world-class physique if you combine it with the right discipline.",
      "biography": "A massive vegetarian bodybuilder from Punjab who also starred in movies and promoted healthy living across India.",
      "achievements": "Mr. India title winner, Mr. Asia Runner-up.",
      "philosophy": "Pure vegetarian mass-building, utilizing dairy, soy, and lentils to compile an enormous frame.",
      "motivation": "Prove the skeptics wrong. vegetarian power is real and highly sustainable.",
      "tip": "Utilize high-quality whey protein, milk, and paneer to meet your daily protein targets without meat."
    },
    {
      "name": "Murli Kumar",
      "title": "The Navy Commander",
      "quote": "Discipline is the bridge between goals and accomplishment.",
      "biography": "Served in the Indian Navy and began bodybuilding late, displaying incredible grit to dominate national contests.",
      "achievements": "Multi-time Mr. India winner, top international competitor representing India.",
      "philosophy": "Military-grade discipline, structured daily routines, and strict caloric control.",
      "motivation": "Age is just a number. If you have the mental fortitude, you can build your dream body at any phase of life.",
      "tip": "Ensure adequate sleep and hydration; a well-rested muscle recovers twice as fast."
    },
    {
      "name": "Rajendran Mani",
      "title": "The Indian Gladiator",
      "quote": "Hard work has no substitute. You have to grind in the gym day in and day out.",
      "biography": "Served in the Indian Army, building one of the thickest and most powerful physiques in Indian history.",
      "achievements": "Mr. World Champion (2013), 8-time Mr. India.",
      "philosophy": "Powerlifting-based bodybuilding, lifting heavy with perfect posture and massive volume.",
      "motivation": "Never surrender. When you face structural exhaustion, search deep inside for the warrior spirit.",
      "tip": "Always include deadlifts in your weekly back sessions to build thick spinal erectors."
    },
    {
      "name": "Thakur Anoop Singh",
      "title": "The Cyber Warrior",
      "quote": "Your body is a temple; treat it with respect and push its limits every day.",
      "biography": "Pilot turned actor and pro bodybuilder who achieved international fame by winning gold at the world championships.",
      "achievements": "Gold Medalist at World Bodybuilding Championship (2015).",
      "philosophy": "Aesthetic symmetry, highly athletic conditioning, and matching fitness with performance arts.",
      "motivation": "Diversify your skills. Your physical fitness is the engine that drives your entire career.",
      "tip": "Focus on core vacuum controls and oblique exercises to slim your waist and look athletic."
    },
    {
      "name": "Rohit Khatri",
      "title": "The Fitness Educator",
      "quote": "Fitness is not about being better than someone else; it's about being better than you used to be.",
      "biography": "A prominent Indian fitness YouTuber and online coach who simplified nutrition and workouts for millions of young lifters.",
      "achievements": "One of India's leading online fitness educators and coaches.",
      "philosophy": "Science-based training splits, flexible dieting, and tracking daily macros meticulously.",
      "motivation": "Education is key. Learn how your metabolism works so you can control your transformation.",
      "tip": "Keep a food diary; tracking your food blocks is the most guaranteed way to ensure fat loss or muscle gain."
    },
    {
      "name": "Sahil Khan",
      "title": "The Aesthetic King",
      "quote": "One life, make it large. Gym is my life, fitness is my passion.",
      "biography": "Bollywood actor turned fitness entrepreneur who popularised the aesthetic gym lifestyle in India.",
      "achievements": "Recipient of prestigious fitness leadership awards in India.",
      "philosophy": "Aesthetic symmetry, healthy lifestyle branding, and high-frequency training blocks.",
      "motivation": "Make fitness fun. It should be a lifestyle you enjoy, not a chore.",
      "tip": "Combine progressive weight training with low-intensity steady-state cardio (LISS) for clean fat loss."
    },
    {
      "name": "Yatinder Singh",
      "title": "The Comeback Legend",
      "quote": "A serious injury can break your body, but it can never break your will if you refuse to quit.",
      "biography": "Overcame a severe spinal injury that nearly paralyzed him, returning to build an elite international physique.",
      "achievements": "Mr. World Silver Medalist (2015), Mr. India Winner.",
      "philosophy": "Biomechanical safety, strict form, rehabilitation focus, and high muscle contraction quality.",
      "motivation": "Never lose hope. Every setback is a setup for an even greater comeback.",
      "tip": "Warm up your rotator cuffs and joints before pushing heavy weights to prevent long-term wear."
    },
    {
      "name": "Satnam Khattra",
      "title": "The Lion of Punjab",
      "quote": "Train hard, stay humble, and help those who are trying to rise.",
      "biography": "Well-known Punjabi fitness coach and kabaddi athlete who inspired youth with his massive size and motivational spirit.",
      "achievements": "Celebrated regional fitness coach and cultural icon.",
      "philosophy": "Functional strength training, high power compound exercises, and clean rustic diet fuels.",
      "motivation": "Stay connected to your roots. Gym training should make you a stronger member of your community.",
      "tip": "Incorporate functional compound movements like farmers walks and tire flips to build raw grip and core power."
    }
  ],
  "hi": [
    {
      "name": "Arnold Schwarzenegger",
      "title": "The Austrian Oak",
      "quote": "The last three or four reps is what makes the muscle grow. This area of pain divides the champion from someone else who is not.",
      "biography": "Born in Austria, rose to become a 7-time Mr. Olympia, legendary Hollywood action star, and Governor of California.",
      "achievements": "7-time Mr. Olympia (1970-1975, 1980), 5-time Mr. Universe.",
      "philosophy": "High volume, high frequency splits, mind-muscle connection, visualizing muscles growing like mountains.",
      "motivation": "Work your butt off, break some rules, don't be afraid to fail, ignore the naysayers.",
      "tip": "Squeeze the muscle at the absolute peak of contraction to trigger deep muscular hypertrophy."
    },
    {
      "name": "Ronnie Coleman",
      "title": "The King",
      "quote": "Everybody wants to be a bodybuilder, but nobody wants to lift no heavy-ass weight.",
      "biography": "Hailing from Louisiana, worked as a police officer while dominating bodybuilding with unmatched size and strength.",
      "achievements": "8-time Mr. Olympia (1998-2005), 26 IFBB Professional wins.",
      "philosophy": "Powerbuilding - combining raw powerlifting compounds (heavy squats/deadlifts) with standard volume splits.",
      "motivation": "Ain't nothing to it but to do it. Push through the doubt and work hard every day.",
      "tip": "Keep compound barbell movements as the foundation of your routine for absolute muscle thickness."
    },
    {
      "name": "Jay Cutler",
      "title": "Quad Stomp Master",
      "quote": "I'm not training to be average. I'm training to win.",
      "biography": "Born in Massachusetts, built a quad-dominant massive physique, becoming Ronnie Coleman's biggest rival and successor.",
      "achievements": "4-time Mr. Olympia (2006, 2007, 2009, 2010), 3-time Arnold Classic Champion.",
      "philosophy": "High density volume training, strict rest intervals, and immense daily caloric intake.",
      "motivation": "Consistency and persistence. Success is built upon the reps you perform when you feel exhausted.",
      "tip": "Use drop sets on your final exercise blocks to fully exhaust muscle fibers and draw in blood flow."
    },
    {
      "name": "Chris Bumstead",
      "title": "CBum",
      "quote": "Champion is a mindset. It's about doing the work when no one is watching, even when you feel like quitting.",
      "biography": "Canadian bodybuilding icon who revolutionized the modern era by dominating the Classic Physique division with vintage flow.",
      "achievements": "5-time Classic Physique Mr. Olympia (2019-2023).",
      "philosophy": "Aesthetic symmetry, vacuum control, progressive overload on basics, and mechanical tension.",
      "motivation": "Vulnerability and resilience. True victory is conquering your own doubts, not just the competitors.",
      "tip": "Focus on clean negative eccentric phases (3-second lowering) to stimulate myofibrillar tear."
    },
    {
      "name": "Phil Heath",
      "title": "The Gift",
      "quote": "Being a champion is not about a title; it's about your daily habits and dedication.",
      "biography": "Former college basketball player from Seattle who possessed extraordinary muscle roundness and 3D density.",
      "achievements": "7-time Mr. Olympia (2011-2017).",
      "philosophy": "Time under tension, FST-7 fascial stretch training, and isolating individual muscle bellies.",
      "motivation": "Block out the noise. The only opponent that matters is the reflection in the mirror.",
      "tip": "Incorporate active fascial stretching between sets to expand the muscle sheets for faster growth."
    },
    {
      "name": "Dorian Yates",
      "title": "The Shadow",
      "quote": "If you are going to do something, do it with absolute intensity and concentration.",
      "biography": "English powerhouse who revolutionized bodybuilding by introducing the 'mass monster' era in the 1990s.",
      "achievements": "6-time Mr. Olympia (1992-1997).",
      "philosophy": "HIT (High Intensity Training) - brief, infrequent sessions pushing a single working set to absolute failure.",
      "motivation": "Let your work speak for itself. Train in silence, away from distractions, and build your temple.",
      "tip": "Warm up thoroughly, then perform only one all-out working set to failure with forced reps."
    },
    {
      "name": "Frank Zane",
      "title": "The Chemist",
      "quote": "The mind is the limit. What the mind can visualize, the body can achieve.",
      "biography": "Chemistry teacher who defeated much heavier competitors by presenting the most vacuum-posed, symmetrical body in history.",
      "achievements": "3-time Mr. Olympia (1977-1979), Mr. Universe, Mr. America.",
      "philosophy": "Aesthetics over mass, mind-muscle synchronization, light-to-moderate weights with perfect contraction.",
      "motivation": "Find balance. Fitness is a lifetime art form, combining mental clarity with physical symmetry.",
      "tip": "Train with absolute focus on form; never sacrifice contraction quality for heavy weights."
    },
    {
      "name": "Lee Haney",
      "title": "Total-Lee Awesome",
      "quote": "Stimulate, don't annihilate. The goal of training is to trigger growth, not destroy the joints.",
      "biography": "Charismatic legend from Georgia who dominated the 1980s with an incredible V-taper and massive back.",
      "achievements": "8-time Mr. Olympia (1984-1991), breaking Arnold's record.",
      "philosophy": "Quality stimulation, high protein, active recovery, and protecting joint longevity.",
      "motivation": "Patience. A premium physique is sculpted over years of smart, sustainable progression.",
      "tip": "Avoid training past absolute joint pain; prioritize recovery to ensure you can train for decades."
    },
    {
      "name": "Kai Greene",
      "title": "The Predator",
      "quote": "If you don't have a dream, you don't have anything. Visualise your destiny and sculpt it.",
      "biography": "Artistic Brooklyn native who rose from foster care to become one of the most legendary posing artists.",
      "achievements": "3-time Arnold Classic Champion, Mr. Olympia Runner-up.",
      "philosophy": "Bodybuilding as an art form, extreme mind-muscle connection, high repetition feel-based training.",
      "motivation": "Build character. True strength lies in your ability to express your authentic self.",
      "tip": "Don't just move weight; contract the muscle to pull the weight. Focus on the muscle, not the iron."
    },
    {
      "name": "Sam Sulek",
      "title": "The Bulk Sensation",
      "quote": "Just lift heavy, eat big, and stay consistent. The rest is details.",
      "biography": "Modern college diver turned social media icon who popularised raw daily training vlogs with old-school focus.",
      "achievements": "Global fitness influencer, over 5M subscribers, face of modern youth lifting.",
      "philosophy": "Heavy basic compounds, high-calorie bulks, simple split execution with maximum consistency.",
      "motivation": "Don't overthink it. Go to the gym, get the pump, and repeat tomorrow.",
      "tip": "Keep your training intensity high and track your daily calorie intake to ensure progressive weight gain."
    },
    {
      "name": "Sangram Chougule",
      "title": "The Maratha Pride",
      "quote": "Commitment is doing what you said you would do, long after the mood you said it in has left you.",
      "biography": "An electrical engineer from Pune who rose to become one of India's most celebrated international bodybuilders.",
      "achievements": "Mr. Universe title winner (2012), 6-time Mr. India.",
      "philosophy": "Relentless discipline, clean Indian home-cooked muscle fuel, and relentless heavy squatting.",
      "motivation": "In India, we have talent; all we need is the focus to conquer the international stage.",
      "tip": "Incorporate eggs, chicken, or high-quality paneer as main protein sources, and never miss your post-workout meal."
    },
    {
      "name": "Suhas Khamkar",
      "title": "The Iron Man of Maharashtra",
      "quote": "Dreams do not compile through magic; they take sweat, determination, and hard work.",
      "biography": "Hailing from a family of fitness enthusiasts, Suhas became a dominant force in Indian bodybuilding, winning multiple national championships.",
      "achievements": "First Indian to win Mr. Asia (2010), 10-time Mr. India title winner.",
      "philosophy": "Heavy structural overloading, high-volume conditioning, and dedicated cardio routines.",
      "motivation": "Stay grounded. Your strength is a gift to inspire others, not to boast.",
      "tip": "Focus on lateral raises and overhead presses to build shoulder width and achieve the V-taper shape."
    },
    {
      "name": "Varinder Singh Ghuman",
      "title": "The Punjabi Giant",
      "quote": "A vegetarian diet can build a world-class physique if you combine it with the right discipline.",
      "biography": "A massive vegetarian bodybuilder from Punjab who also starred in movies and promoted healthy living across India.",
      "achievements": "Mr. India title winner, Mr. Asia Runner-up.",
      "philosophy": "Pure vegetarian mass-building, utilizing dairy, soy, and lentils to compile an enormous frame.",
      "motivation": "Prove the skeptics wrong. vegetarian power is real and highly sustainable.",
      "tip": "Utilize high-quality whey protein, milk, and paneer to meet your daily protein targets without meat."
    },
    {
      "name": "Murli Kumar",
      "title": "The Navy Commander",
      "quote": "Discipline is the bridge between goals and accomplishment.",
      "biography": "Served in the Indian Navy and began bodybuilding late, displaying incredible grit to dominate national contests.",
      "achievements": "Multi-time Mr. India winner, top international competitor representing India.",
      "philosophy": "Military-grade discipline, structured daily routines, and strict caloric control.",
      "motivation": "Age is just a number. If you have the mental fortitude, you can build your dream body at any phase of life.",
      "tip": "Ensure adequate sleep and hydration; a well-rested muscle recovers twice as fast."
    },
    {
      "name": "Rajendran Mani",
      "title": "The Indian Gladiator",
      "quote": "Hard work has no substitute. You have to grind in the gym day in and day out.",
      "biography": "Served in the Indian Army, building one of the thickest and most powerful physiques in Indian history.",
      "achievements": "Mr. World Champion (2013), 8-time Mr. India.",
      "philosophy": "Powerlifting-based bodybuilding, lifting heavy with perfect posture and massive volume.",
      "motivation": "Never surrender. When you face structural exhaustion, search deep inside for the warrior spirit.",
      "tip": "Always include deadlifts in your weekly back sessions to build thick spinal erectors."
    },
    {
      "name": "Thakur Anoop Singh",
      "title": "The Cyber Warrior",
      "quote": "Your body is a temple; treat it with respect and push its limits every day.",
      "biography": "Pilot turned actor and pro bodybuilder who achieved international fame by winning gold at the world championships.",
      "achievements": "Gold Medalist at World Bodybuilding Championship (2015).",
      "philosophy": "Aesthetic symmetry, highly athletic conditioning, and matching fitness with performance arts.",
      "motivation": "Diversify your skills. Your physical fitness is the engine that drives your entire career.",
      "tip": "Focus on core vacuum controls and oblique exercises to slim your waist and look athletic."
    },
    {
      "name": "Rohit Khatri",
      "title": "The Fitness Educator",
      "quote": "Fitness is not about being better than someone else; it's about being better than you used to be.",
      "biography": "A prominent Indian fitness YouTuber and online coach who simplified nutrition and workouts for millions of young lifters.",
      "achievements": "One of India's leading online fitness educators and coaches.",
      "philosophy": "Science-based training splits, flexible dieting, and tracking daily macros meticulously.",
      "motivation": "Education is key. Learn how your metabolism works so you can control your transformation.",
      "tip": "Keep a food diary; tracking your food blocks is the most guaranteed way to ensure fat loss or muscle gain."
    },
    {
      "name": "Sahil Khan",
      "title": "The Aesthetic King",
      "quote": "One life, make it large. Gym is my life, fitness is my passion.",
      "biography": "Bollywood actor turned fitness entrepreneur who popularised the aesthetic gym lifestyle in India.",
      "achievements": "Recipient of prestigious fitness leadership awards in India.",
      "philosophy": "Aesthetic symmetry, healthy lifestyle branding, and high-frequency training blocks.",
      "motivation": "Make fitness fun. It should be a lifestyle you enjoy, not a chore.",
      "tip": "Combine progressive weight training with low-intensity steady-state cardio (LISS) for clean fat loss."
    },
    {
      "name": "Yatinder Singh",
      "title": "The Comeback Legend",
      "quote": "A serious injury can break your body, but it can never break your will if you refuse to quit.",
      "biography": "Overcame a severe spinal injury that nearly paralyzed him, returning to build an elite international physique.",
      "achievements": "Mr. World Silver Medalist (2015), Mr. India Winner.",
      "philosophy": "Biomechanical safety, strict form, rehabilitation focus, and high muscle contraction quality.",
      "motivation": "Never lose hope. Every setback is a setup for an even greater comeback.",
      "tip": "Warm up your rotator cuffs and joints before pushing heavy weights to prevent long-term wear."
    },
    {
      "name": "Satnam Khattra",
      "title": "The Lion of Punjab",
      "quote": "Train hard, stay humble, and help those who are trying to rise.",
      "biography": "Well-known Punjabi fitness coach and kabaddi athlete who inspired youth with his massive size and motivational spirit.",
      "achievements": "Celebrated regional fitness coach and cultural icon.",
      "philosophy": "Functional strength training, high power compound exercises, and clean rustic diet fuels.",
      "motivation": "Stay connected to your roots. Gym training should make you a stronger member of your community.",
      "tip": "Incorporate functional compound movements like farmers walks and tire flips to build raw grip and core power."
    }
  ],
  "gu": [
    {
      "name": "Arnold Schwarzenegger",
      "title": "The Austrian Oak",
      "quote": "The last three or four reps is what makes the muscle grow. This area of pain divides the champion from someone else who is not.",
      "biography": "Born in Austria, rose to become a 7-time Mr. Olympia, legendary Hollywood action star, and Governor of California.",
      "achievements": "7-time Mr. Olympia (1970-1975, 1980), 5-time Mr. Universe.",
      "philosophy": "High volume, high frequency splits, mind-muscle connection, visualizing muscles growing like mountains.",
      "motivation": "Work your butt off, break some rules, don't be afraid to fail, ignore the naysayers.",
      "tip": "Squeeze the muscle at the absolute peak of contraction to trigger deep muscular hypertrophy."
    },
    {
      "name": "Ronnie Coleman",
      "title": "The King",
      "quote": "Everybody wants to be a bodybuilder, but nobody wants to lift no heavy-ass weight.",
      "biography": "Hailing from Louisiana, worked as a police officer while dominating bodybuilding with unmatched size and strength.",
      "achievements": "8-time Mr. Olympia (1998-2005), 26 IFBB Professional wins.",
      "philosophy": "Powerbuilding - combining raw powerlifting compounds (heavy squats/deadlifts) with standard volume splits.",
      "motivation": "Ain't nothing to it but to do it. Push through the doubt and work hard every day.",
      "tip": "Keep compound barbell movements as the foundation of your routine for absolute muscle thickness."
    },
    {
      "name": "Jay Cutler",
      "title": "Quad Stomp Master",
      "quote": "I'm not training to be average. I'm training to win.",
      "biography": "Born in Massachusetts, built a quad-dominant massive physique, becoming Ronnie Coleman's biggest rival and successor.",
      "achievements": "4-time Mr. Olympia (2006, 2007, 2009, 2010), 3-time Arnold Classic Champion.",
      "philosophy": "High density volume training, strict rest intervals, and immense daily caloric intake.",
      "motivation": "Consistency and persistence. Success is built upon the reps you perform when you feel exhausted.",
      "tip": "Use drop sets on your final exercise blocks to fully exhaust muscle fibers and draw in blood flow."
    },
    {
      "name": "Chris Bumstead",
      "title": "CBum",
      "quote": "Champion is a mindset. It's about doing the work when no one is watching, even when you feel like quitting.",
      "biography": "Canadian bodybuilding icon who revolutionized the modern era by dominating the Classic Physique division with vintage flow.",
      "achievements": "5-time Classic Physique Mr. Olympia (2019-2023).",
      "philosophy": "Aesthetic symmetry, vacuum control, progressive overload on basics, and mechanical tension.",
      "motivation": "Vulnerability and resilience. True victory is conquering your own doubts, not just the competitors.",
      "tip": "Focus on clean negative eccentric phases (3-second lowering) to stimulate myofibrillar tear."
    },
    {
      "name": "Phil Heath",
      "title": "The Gift",
      "quote": "Being a champion is not about a title; it's about your daily habits and dedication.",
      "biography": "Former college basketball player from Seattle who possessed extraordinary muscle roundness and 3D density.",
      "achievements": "7-time Mr. Olympia (2011-2017).",
      "philosophy": "Time under tension, FST-7 fascial stretch training, and isolating individual muscle bellies.",
      "motivation": "Block out the noise. The only opponent that matters is the reflection in the mirror.",
      "tip": "Incorporate active fascial stretching between sets to expand the muscle sheets for faster growth."
    },
    {
      "name": "Dorian Yates",
      "title": "The Shadow",
      "quote": "If you are going to do something, do it with absolute intensity and concentration.",
      "biography": "English powerhouse who revolutionized bodybuilding by introducing the 'mass monster' era in the 1990s.",
      "achievements": "6-time Mr. Olympia (1992-1997).",
      "philosophy": "HIT (High Intensity Training) - brief, infrequent sessions pushing a single working set to absolute failure.",
      "motivation": "Let your work speak for itself. Train in silence, away from distractions, and build your temple.",
      "tip": "Warm up thoroughly, then perform only one all-out working set to failure with forced reps."
    },
    {
      "name": "Frank Zane",
      "title": "The Chemist",
      "quote": "The mind is the limit. What the mind can visualize, the body can achieve.",
      "biography": "Chemistry teacher who defeated much heavier competitors by presenting the most vacuum-posed, symmetrical body in history.",
      "achievements": "3-time Mr. Olympia (1977-1979), Mr. Universe, Mr. America.",
      "philosophy": "Aesthetics over mass, mind-muscle synchronization, light-to-moderate weights with perfect contraction.",
      "motivation": "Find balance. Fitness is a lifetime art form, combining mental clarity with physical symmetry.",
      "tip": "Train with absolute focus on form; never sacrifice contraction quality for heavy weights."
    },
    {
      "name": "Lee Haney",
      "title": "Total-Lee Awesome",
      "quote": "Stimulate, don't annihilate. The goal of training is to trigger growth, not destroy the joints.",
      "biography": "Charismatic legend from Georgia who dominated the 1980s with an incredible V-taper and massive back.",
      "achievements": "8-time Mr. Olympia (1984-1991), breaking Arnold's record.",
      "philosophy": "Quality stimulation, high protein, active recovery, and protecting joint longevity.",
      "motivation": "Patience. A premium physique is sculpted over years of smart, sustainable progression.",
      "tip": "Avoid training past absolute joint pain; prioritize recovery to ensure you can train for decades."
    },
    {
      "name": "Kai Greene",
      "title": "The Predator",
      "quote": "If you don't have a dream, you don't have anything. Visualise your destiny and sculpt it.",
      "biography": "Artistic Brooklyn native who rose from foster care to become one of the most legendary posing artists.",
      "achievements": "3-time Arnold Classic Champion, Mr. Olympia Runner-up.",
      "philosophy": "Bodybuilding as an art form, extreme mind-muscle connection, high repetition feel-based training.",
      "motivation": "Build character. True strength lies in your ability to express your authentic self.",
      "tip": "Don't just move weight; contract the muscle to pull the weight. Focus on the muscle, not the iron."
    },
    {
      "name": "Sam Sulek",
      "title": "The Bulk Sensation",
      "quote": "Just lift heavy, eat big, and stay consistent. The rest is details.",
      "biography": "Modern college diver turned social media icon who popularised raw daily training vlogs with old-school focus.",
      "achievements": "Global fitness influencer, over 5M subscribers, face of modern youth lifting.",
      "philosophy": "Heavy basic compounds, high-calorie bulks, simple split execution with maximum consistency.",
      "motivation": "Don't overthink it. Go to the gym, get the pump, and repeat tomorrow.",
      "tip": "Keep your training intensity high and track your daily calorie intake to ensure progressive weight gain."
    },
    {
      "name": "Sangram Chougule",
      "title": "The Maratha Pride",
      "quote": "Commitment is doing what you said you would do, long after the mood you said it in has left you.",
      "biography": "An electrical engineer from Pune who rose to become one of India's most celebrated international bodybuilders.",
      "achievements": "Mr. Universe title winner (2012), 6-time Mr. India.",
      "philosophy": "Relentless discipline, clean Indian home-cooked muscle fuel, and relentless heavy squatting.",
      "motivation": "In India, we have talent; all we need is the focus to conquer the international stage.",
      "tip": "Incorporate eggs, chicken, or high-quality paneer as main protein sources, and never miss your post-workout meal."
    },
    {
      "name": "Suhas Khamkar",
      "title": "The Iron Man of Maharashtra",
      "quote": "Dreams do not compile through magic; they take sweat, determination, and hard work.",
      "biography": "Hailing from a family of fitness enthusiasts, Suhas became a dominant force in Indian bodybuilding, winning multiple national championships.",
      "achievements": "First Indian to win Mr. Asia (2010), 10-time Mr. India title winner.",
      "philosophy": "Heavy structural overloading, high-volume conditioning, and dedicated cardio routines.",
      "motivation": "Stay grounded. Your strength is a gift to inspire others, not to boast.",
      "tip": "Focus on lateral raises and overhead presses to build shoulder width and achieve the V-taper shape."
    },
    {
      "name": "Varinder Singh Ghuman",
      "title": "The Punjabi Giant",
      "quote": "A vegetarian diet can build a world-class physique if you combine it with the right discipline.",
      "biography": "A massive vegetarian bodybuilder from Punjab who also starred in movies and promoted healthy living across India.",
      "achievements": "Mr. India title winner, Mr. Asia Runner-up.",
      "philosophy": "Pure vegetarian mass-building, utilizing dairy, soy, and lentils to compile an enormous frame.",
      "motivation": "Prove the skeptics wrong. vegetarian power is real and highly sustainable.",
      "tip": "Utilize high-quality whey protein, milk, and paneer to meet your daily protein targets without meat."
    },
    {
      "name": "Murli Kumar",
      "title": "The Navy Commander",
      "quote": "Discipline is the bridge between goals and accomplishment.",
      "biography": "Served in the Indian Navy and began bodybuilding late, displaying incredible grit to dominate national contests.",
      "achievements": "Multi-time Mr. India winner, top international competitor representing India.",
      "philosophy": "Military-grade discipline, structured daily routines, and strict caloric control.",
      "motivation": "Age is just a number. If you have the mental fortitude, you can build your dream body at any phase of life.",
      "tip": "Ensure adequate sleep and hydration; a well-rested muscle recovers twice as fast."
    },
    {
      "name": "Rajendran Mani",
      "title": "The Indian Gladiator",
      "quote": "Hard work has no substitute. You have to grind in the gym day in and day out.",
      "biography": "Served in the Indian Army, building one of the thickest and most powerful physiques in Indian history.",
      "achievements": "Mr. World Champion (2013), 8-time Mr. India.",
      "philosophy": "Powerlifting-based bodybuilding, lifting heavy with perfect posture and massive volume.",
      "motivation": "Never surrender. When you face structural exhaustion, search deep inside for the warrior spirit.",
      "tip": "Always include deadlifts in your weekly back sessions to build thick spinal erectors."
    },
    {
      "name": "Thakur Anoop Singh",
      "title": "The Cyber Warrior",
      "quote": "Your body is a temple; treat it with respect and push its limits every day.",
      "biography": "Pilot turned actor and pro bodybuilder who achieved international fame by winning gold at the world championships.",
      "achievements": "Gold Medalist at World Bodybuilding Championship (2015).",
      "philosophy": "Aesthetic symmetry, highly athletic conditioning, and matching fitness with performance arts.",
      "motivation": "Diversify your skills. Your physical fitness is the engine that drives your entire career.",
      "tip": "Focus on core vacuum controls and oblique exercises to slim your waist and look athletic."
    },
    {
      "name": "Rohit Khatri",
      "title": "The Fitness Educator",
      "quote": "Fitness is not about being better than someone else; it's about being better than you used to be.",
      "biography": "A prominent Indian fitness YouTuber and online coach who simplified nutrition and workouts for millions of young lifters.",
      "achievements": "One of India's leading online fitness educators and coaches.",
      "philosophy": "Science-based training splits, flexible dieting, and tracking daily macros meticulously.",
      "motivation": "Education is key. Learn how your metabolism works so you can control your transformation.",
      "tip": "Keep a food diary; tracking your food blocks is the most guaranteed way to ensure fat loss or muscle gain."
    },
    {
      "name": "Sahil Khan",
      "title": "The Aesthetic King",
      "quote": "One life, make it large. Gym is my life, fitness is my passion.",
      "biography": "Bollywood actor turned fitness entrepreneur who popularised the aesthetic gym lifestyle in India.",
      "achievements": "Recipient of prestigious fitness leadership awards in India.",
      "philosophy": "Aesthetic symmetry, healthy lifestyle branding, and high-frequency training blocks.",
      "motivation": "Make fitness fun. It should be a lifestyle you enjoy, not a chore.",
      "tip": "Combine progressive weight training with low-intensity steady-state cardio (LISS) for clean fat loss."
    },
    {
      "name": "Yatinder Singh",
      "title": "The Comeback Legend",
      "quote": "A serious injury can break your body, but it can never break your will if you refuse to quit.",
      "biography": "Overcame a severe spinal injury that nearly paralyzed him, returning to build an elite international physique.",
      "achievements": "Mr. World Silver Medalist (2015), Mr. India Winner.",
      "philosophy": "Biomechanical safety, strict form, rehabilitation focus, and high muscle contraction quality.",
      "motivation": "Never lose hope. Every setback is a setup for an even greater comeback.",
      "tip": "Warm up your rotator cuffs and joints before pushing heavy weights to prevent long-term wear."
    },
    {
      "name": "Satnam Khattra",
      "title": "The Lion of Punjab",
      "quote": "Train hard, stay humble, and help those who are trying to rise.",
      "biography": "Well-known Punjabi fitness coach and kabaddi athlete who inspired youth with his massive size and motivational spirit.",
      "achievements": "Celebrated regional fitness coach and cultural icon.",
      "philosophy": "Functional strength training, high power compound exercises, and clean rustic diet fuels.",
      "motivation": "Stay connected to your roots. Gym training should make you a stronger member of your community.",
      "tip": "Incorporate functional compound movements like farmers walks and tire flips to build raw grip and core power."
    }
  ],
  "ja": [
    {
      "name": "Arnold Schwarzenegger",
      "title": "The Austrian Oak",
      "quote": "The last three or four reps is what makes the muscle grow. This area of pain divides the champion from someone else who is not.",
      "biography": "Born in Austria, rose to become a 7-time Mr. Olympia, legendary Hollywood action star, and Governor of California.",
      "achievements": "7-time Mr. Olympia (1970-1975, 1980), 5-time Mr. Universe.",
      "philosophy": "High volume, high frequency splits, mind-muscle connection, visualizing muscles growing like mountains.",
      "motivation": "Work your butt off, break some rules, don't be afraid to fail, ignore the naysayers.",
      "tip": "Squeeze the muscle at the absolute peak of contraction to trigger deep muscular hypertrophy."
    },
    {
      "name": "Ronnie Coleman",
      "title": "The King",
      "quote": "Everybody wants to be a bodybuilder, but nobody wants to lift no heavy-ass weight.",
      "biography": "Hailing from Louisiana, worked as a police officer while dominating bodybuilding with unmatched size and strength.",
      "achievements": "8-time Mr. Olympia (1998-2005), 26 IFBB Professional wins.",
      "philosophy": "Powerbuilding - combining raw powerlifting compounds (heavy squats/deadlifts) with standard volume splits.",
      "motivation": "Ain't nothing to it but to do it. Push through the doubt and work hard every day.",
      "tip": "Keep compound barbell movements as the foundation of your routine for absolute muscle thickness."
    },
    {
      "name": "Jay Cutler",
      "title": "Quad Stomp Master",
      "quote": "I'm not training to be average. I'm training to win.",
      "biography": "Born in Massachusetts, built a quad-dominant massive physique, becoming Ronnie Coleman's biggest rival and successor.",
      "achievements": "4-time Mr. Olympia (2006, 2007, 2009, 2010), 3-time Arnold Classic Champion.",
      "philosophy": "High density volume training, strict rest intervals, and immense daily caloric intake.",
      "motivation": "Consistency and persistence. Success is built upon the reps you perform when you feel exhausted.",
      "tip": "Use drop sets on your final exercise blocks to fully exhaust muscle fibers and draw in blood flow."
    },
    {
      "name": "Chris Bumstead",
      "title": "CBum",
      "quote": "Champion is a mindset. It's about doing the work when no one is watching, even when you feel like quitting.",
      "biography": "Canadian bodybuilding icon who revolutionized the modern era by dominating the Classic Physique division with vintage flow.",
      "achievements": "5-time Classic Physique Mr. Olympia (2019-2023).",
      "philosophy": "Aesthetic symmetry, vacuum control, progressive overload on basics, and mechanical tension.",
      "motivation": "Vulnerability and resilience. True victory is conquering your own doubts, not just the competitors.",
      "tip": "Focus on clean negative eccentric phases (3-second lowering) to stimulate myofibrillar tear."
    },
    {
      "name": "Phil Heath",
      "title": "The Gift",
      "quote": "Being a champion is not about a title; it's about your daily habits and dedication.",
      "biography": "Former college basketball player from Seattle who possessed extraordinary muscle roundness and 3D density.",
      "achievements": "7-time Mr. Olympia (2011-2017).",
      "philosophy": "Time under tension, FST-7 fascial stretch training, and isolating individual muscle bellies.",
      "motivation": "Block out the noise. The only opponent that matters is the reflection in the mirror.",
      "tip": "Incorporate active fascial stretching between sets to expand the muscle sheets for faster growth."
    },
    {
      "name": "Dorian Yates",
      "title": "The Shadow",
      "quote": "If you are going to do something, do it with absolute intensity and concentration.",
      "biography": "English powerhouse who revolutionized bodybuilding by introducing the 'mass monster' era in the 1990s.",
      "achievements": "6-time Mr. Olympia (1992-1997).",
      "philosophy": "HIT (High Intensity Training) - brief, infrequent sessions pushing a single working set to absolute failure.",
      "motivation": "Let your work speak for itself. Train in silence, away from distractions, and build your temple.",
      "tip": "Warm up thoroughly, then perform only one all-out working set to failure with forced reps."
    },
    {
      "name": "Frank Zane",
      "title": "The Chemist",
      "quote": "The mind is the limit. What the mind can visualize, the body can achieve.",
      "biography": "Chemistry teacher who defeated much heavier competitors by presenting the most vacuum-posed, symmetrical body in history.",
      "achievements": "3-time Mr. Olympia (1977-1979), Mr. Universe, Mr. America.",
      "philosophy": "Aesthetics over mass, mind-muscle synchronization, light-to-moderate weights with perfect contraction.",
      "motivation": "Find balance. Fitness is a lifetime art form, combining mental clarity with physical symmetry.",
      "tip": "Train with absolute focus on form; never sacrifice contraction quality for heavy weights."
    },
    {
      "name": "Lee Haney",
      "title": "Total-Lee Awesome",
      "quote": "Stimulate, don't annihilate. The goal of training is to trigger growth, not destroy the joints.",
      "biography": "Charismatic legend from Georgia who dominated the 1980s with an incredible V-taper and massive back.",
      "achievements": "8-time Mr. Olympia (1984-1991), breaking Arnold's record.",
      "philosophy": "Quality stimulation, high protein, active recovery, and protecting joint longevity.",
      "motivation": "Patience. A premium physique is sculpted over years of smart, sustainable progression.",
      "tip": "Avoid training past absolute joint pain; prioritize recovery to ensure you can train for decades."
    },
    {
      "name": "Kai Greene",
      "title": "The Predator",
      "quote": "If you don't have a dream, you don't have anything. Visualise your destiny and sculpt it.",
      "biography": "Artistic Brooklyn native who rose from foster care to become one of the most legendary posing artists.",
      "achievements": "3-time Arnold Classic Champion, Mr. Olympia Runner-up.",
      "philosophy": "Bodybuilding as an art form, extreme mind-muscle connection, high repetition feel-based training.",
      "motivation": "Build character. True strength lies in your ability to express your authentic self.",
      "tip": "Don't just move weight; contract the muscle to pull the weight. Focus on the muscle, not the iron."
    },
    {
      "name": "Sam Sulek",
      "title": "The Bulk Sensation",
      "quote": "Just lift heavy, eat big, and stay consistent. The rest is details.",
      "biography": "Modern college diver turned social media icon who popularised raw daily training vlogs with old-school focus.",
      "achievements": "Global fitness influencer, over 5M subscribers, face of modern youth lifting.",
      "philosophy": "Heavy basic compounds, high-calorie bulks, simple split execution with maximum consistency.",
      "motivation": "Don't overthink it. Go to the gym, get the pump, and repeat tomorrow.",
      "tip": "Keep your training intensity high and track your daily calorie intake to ensure progressive weight gain."
    },
    {
      "name": "Sangram Chougule",
      "title": "The Maratha Pride",
      "quote": "Commitment is doing what you said you would do, long after the mood you said it in has left you.",
      "biography": "An electrical engineer from Pune who rose to become one of India's most celebrated international bodybuilders.",
      "achievements": "Mr. Universe title winner (2012), 6-time Mr. India.",
      "philosophy": "Relentless discipline, clean Indian home-cooked muscle fuel, and relentless heavy squatting.",
      "motivation": "In India, we have talent; all we need is the focus to conquer the international stage.",
      "tip": "Incorporate eggs, chicken, or high-quality paneer as main protein sources, and never miss your post-workout meal."
    },
    {
      "name": "Suhas Khamkar",
      "title": "The Iron Man of Maharashtra",
      "quote": "Dreams do not compile through magic; they take sweat, determination, and hard work.",
      "biography": "Hailing from a family of fitness enthusiasts, Suhas became a dominant force in Indian bodybuilding, winning multiple national championships.",
      "achievements": "First Indian to win Mr. Asia (2010), 10-time Mr. India title winner.",
      "philosophy": "Heavy structural overloading, high-volume conditioning, and dedicated cardio routines.",
      "motivation": "Stay grounded. Your strength is a gift to inspire others, not to boast.",
      "tip": "Focus on lateral raises and overhead presses to build shoulder width and achieve the V-taper shape."
    },
    {
      "name": "Varinder Singh Ghuman",
      "title": "The Punjabi Giant",
      "quote": "A vegetarian diet can build a world-class physique if you combine it with the right discipline.",
      "biography": "A massive vegetarian bodybuilder from Punjab who also starred in movies and promoted healthy living across India.",
      "achievements": "Mr. India title winner, Mr. Asia Runner-up.",
      "philosophy": "Pure vegetarian mass-building, utilizing dairy, soy, and lentils to compile an enormous frame.",
      "motivation": "Prove the skeptics wrong. vegetarian power is real and highly sustainable.",
      "tip": "Utilize high-quality whey protein, milk, and paneer to meet your daily protein targets without meat."
    },
    {
      "name": "Murli Kumar",
      "title": "The Navy Commander",
      "quote": "Discipline is the bridge between goals and accomplishment.",
      "biography": "Served in the Indian Navy and began bodybuilding late, displaying incredible grit to dominate national contests.",
      "achievements": "Multi-time Mr. India winner, top international competitor representing India.",
      "philosophy": "Military-grade discipline, structured daily routines, and strict caloric control.",
      "motivation": "Age is just a number. If you have the mental fortitude, you can build your dream body at any phase of life.",
      "tip": "Ensure adequate sleep and hydration; a well-rested muscle recovers twice as fast."
    },
    {
      "name": "Rajendran Mani",
      "title": "The Indian Gladiator",
      "quote": "Hard work has no substitute. You have to grind in the gym day in and day out.",
      "biography": "Served in the Indian Army, building one of the thickest and most powerful physiques in Indian history.",
      "achievements": "Mr. World Champion (2013), 8-time Mr. India.",
      "philosophy": "Powerlifting-based bodybuilding, lifting heavy with perfect posture and massive volume.",
      "motivation": "Never surrender. When you face structural exhaustion, search deep inside for the warrior spirit.",
      "tip": "Always include deadlifts in your weekly back sessions to build thick spinal erectors."
    },
    {
      "name": "Thakur Anoop Singh",
      "title": "The Cyber Warrior",
      "quote": "Your body is a temple; treat it with respect and push its limits every day.",
      "biography": "Pilot turned actor and pro bodybuilder who achieved international fame by winning gold at the world championships.",
      "achievements": "Gold Medalist at World Bodybuilding Championship (2015).",
      "philosophy": "Aesthetic symmetry, highly athletic conditioning, and matching fitness with performance arts.",
      "motivation": "Diversify your skills. Your physical fitness is the engine that drives your entire career.",
      "tip": "Focus on core vacuum controls and oblique exercises to slim your waist and look athletic."
    },
    {
      "name": "Rohit Khatri",
      "title": "The Fitness Educator",
      "quote": "Fitness is not about being better than someone else; it's about being better than you used to be.",
      "biography": "A prominent Indian fitness YouTuber and online coach who simplified nutrition and workouts for millions of young lifters.",
      "achievements": "One of India's leading online fitness educators and coaches.",
      "philosophy": "Science-based training splits, flexible dieting, and tracking daily macros meticulously.",
      "motivation": "Education is key. Learn how your metabolism works so you can control your transformation.",
      "tip": "Keep a food diary; tracking your food blocks is the most guaranteed way to ensure fat loss or muscle gain."
    },
    {
      "name": "Sahil Khan",
      "title": "The Aesthetic King",
      "quote": "One life, make it large. Gym is my life, fitness is my passion.",
      "biography": "Bollywood actor turned fitness entrepreneur who popularised the aesthetic gym lifestyle in India.",
      "achievements": "Recipient of prestigious fitness leadership awards in India.",
      "philosophy": "Aesthetic symmetry, healthy lifestyle branding, and high-frequency training blocks.",
      "motivation": "Make fitness fun. It should be a lifestyle you enjoy, not a chore.",
      "tip": "Combine progressive weight training with low-intensity steady-state cardio (LISS) for clean fat loss."
    },
    {
      "name": "Yatinder Singh",
      "title": "The Comeback Legend",
      "quote": "A serious injury can break your body, but it can never break your will if you refuse to quit.",
      "biography": "Overcame a severe spinal injury that nearly paralyzed him, returning to build an elite international physique.",
      "achievements": "Mr. World Silver Medalist (2015), Mr. India Winner.",
      "philosophy": "Biomechanical safety, strict form, rehabilitation focus, and high muscle contraction quality.",
      "motivation": "Never lose hope. Every setback is a setup for an even greater comeback.",
      "tip": "Warm up your rotator cuffs and joints before pushing heavy weights to prevent long-term wear."
    },
    {
      "name": "Satnam Khattra",
      "title": "The Lion of Punjab",
      "quote": "Train hard, stay humble, and help those who are trying to rise.",
      "biography": "Well-known Punjabi fitness coach and kabaddi athlete who inspired youth with his massive size and motivational spirit.",
      "achievements": "Celebrated regional fitness coach and cultural icon.",
      "philosophy": "Functional strength training, high power compound exercises, and clean rustic diet fuels.",
      "motivation": "Stay connected to your roots. Gym training should make you a stronger member of your community.",
      "tip": "Incorporate functional compound movements like farmers walks and tire flips to build raw grip and core power."
    }
  ]
};

// ==========================================
// 3. APPLICATION STATE MANAGEMENT
// ==========================================
const state = {
  "theme": "dark",
  "language": "en",
  "units": "metric",
  "voiceCommands": false,
  "voiceFeedback": false,
  "auth": {
    "isLoggedIn": false,
    "user": null,
    "rememberMe": false
  },
  "onboarding": {
    "currentStep": 1,
    "fullname": "",
    "age": "",
    "gender": "male",
    "height": "",
    "weight": "",
    "targetWeight": "",
    "initialWeight": "",
    "initialBodyType": "lean",
    "goal": "muscle_gain",
    "workoutPref": "gym",
    "level": "intermediate",
    "diet": "vegetarian",
    "allergy": "None",
    "country": "United States",
    "region": "California",
    "preferredLang": "en",
    "musicLang": "en",
    "units": "metric",
    "budget": "moderate",
    "activityLevel": "lightly_active",
    "mood": "motivated",
    "musicGenres": []
  },
  "userStats": {
    "bmi": 0,
    "bmiStatus": "Normal",
    "bodyFat": 0,
    "goalProgress": 0,
    "lastWorkoutDate": null,
    "chartMode": "weekly",
    "weightHistory": [],
    "waterCurrent": 0,
    "waterGoal": 2500,
    "streak": 3,
    "workoutsCompleted": 3,
    "caloriesConsumed": 0,
    "caloriesBurned": 0,
    "xp": 150,
    "level": 1,
    "achievements": [
      {
        "id": "welcome",
        "name": "First Steps",
        "desc": "Complete user onboarding setup.",
        "unlocked": true,
        "icon": "🏆"
      },
      {
        "id": "water_1",
        "name": "First Drop",
        "desc": "Log your first glass of water.",
        "unlocked": false,
        "icon": "💧"
      },
      {
        "id": "water_goal",
        "name": "Hydration Hero",
        "desc": "Reach daily water intake target.",
        "unlocked": false,
        "icon": "🌟"
      },
      {
        "id": "level_up",
        "name": "Ascending Cyber",
        "desc": "Unlock Level 2 or higher.",
        "unlocked": false,
        "icon": "⚡"
      },
      {
        "id": "chat_ask",
        "name": "Neural Sync",
        "desc": "Interact with the AI Fitness Coach.",
        "unlocked": false,
        "icon": "🤖"
      },
      {
        "id": "streak_7",
        "name": "Consistency Legend",
        "desc": "Reach a 7-day streak to unlock special hair.",
        "unlocked": false,
        "icon": "🔥"
      },
      {
        "id": "workouts_30",
        "name": "Sweat Machine",
        "desc": "Complete 30 workouts to unlock the Apex tracksuit.",
        "unlocked": false,
        "icon": "💪"
      },
      {
        "id": "weight_5",
        "name": "5KG Milestone",
        "desc": "Lose/gain 5kg to unlock special badge.",
        "unlocked": false,
        "icon": "🏆"
      },
      {
        "id": "goal_reached",
        "name": "Peak Condition",
        "desc": "Achieve target weight to unlock the Gold Smartwatch.",
        "unlocked": false,
        "icon": "👑"
      }
    ]
  },
  "avatar": {
    "gender": "female",
    "bodyType": "lean",
    "skinToneName": "medium",
    "hairStyle": "hair-short-crop",
    "hairColor": "#111111",
    "skinTone": "#ffcd94",
    "outfit": "outfit-gym",
    "accessory": "acc-none",
    "faceShape": "face-round",
    "eyeShape": "eyes-oval",
    "eyeColor": "#5c3816",
    "eyebrows": "eyebrows-normal",
    "nose": "nose-straight",
    "lips": "lips-neutral",
    "freckles": false,
    "facialHair": "none",
    "facialHairColor": "#111111",
    "glasses": "glasses-none",
    "earrings": "earring-none",
    "watch": "none",
    "cap": "none",
    "shoes": "shoes-gym",
    "currentExpression": "neutral",
    "activeCategory": "face"
  },
  "dietTargets": {
    "cals": 2000,
    "protein": 120,
    "carbs": 220,
    "fats": 65,
    "water": 2500
  },
  "reminders": {
    "meals": false,
    "water": false
  },
  "music": {
    "playing": false,
    "currentTrackIndex": 0,
    "tracks": [],
    "workoutPlaylist": [],
    "playSource": "catalog"
  }
};

// ==========================================
// 4. MUSIC DATABASE MAP
// ==========================================
const musicTracksDatabase = [
  // Pop
  { title: "Cyber-Vibe Pop", artist: "DJ FitVerse", genre: "Pop", mood: "Happy", language: "en", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", duration: "6:12", bpm: 122, energy: "medium" },
  { title: "Dynamic Cardio", artist: "Neon Sparks", genre: "Pop", mood: "Excited", language: "en", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", duration: "7:05", bpm: 128, energy: "high" },
  { title: "Brit-Pop Cardio", artist: "West End Boys", genre: "Pop", mood: "Happy", language: "en", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", duration: "5:44", bpm: 120, energy: "medium" },
  
  // Hip-Hop
  { title: "Beast Mode Bars", artist: "Iron Grip", genre: "Hip-Hop", mood: "Motivated", language: "en", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", duration: "5:02", bpm: 95, energy: "high" },
  { title: "Low-Energy Revival", artist: "Lofi Champ", genre: "Hip-Hop", mood: "Low Energy", language: "en", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", duration: "6:30", bpm: 85, energy: "low" },
  
  // Rock
  { title: "Heavy Iron Shreds", artist: "Thunder Riffs", genre: "Rock", mood: "Motivated", language: "en", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3", duration: "6:02", bpm: 135, energy: "high" },
  { title: "Adrenaline Surge", artist: "The Anvils", genre: "Rock", mood: "Excited", language: "en", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3", duration: "5:18", bpm: 145, energy: "high" },
  
  // EDM
  { title: "Neon Cyber Pulse", artist: "Synthesizer X", genre: "EDM", mood: "Motivated", language: "en", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3", duration: "6:10", bpm: 130, energy: "high" },
  { title: "Bass Drop Sweat", artist: "Glitch Lord", genre: "EDM", mood: "Excited", language: "en", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3", duration: "5:55", bpm: 140, energy: "high" },
  { title: "London Electronic Pulse", artist: "UK Grid", genre: "EDM", mood: "Motivated", language: "en", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3", duration: "6:05", bpm: 128, energy: "high" },

  // Bollywood / Hindi
  { title: "Zinda (Motivation)", artist: "Siddharth Mahadevan", genre: "Bollywood", mood: "Motivated", language: "hi", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3", duration: "4:15", bpm: 125, energy: "high" },
  { title: "Chak De India Beat", artist: "Sukhwinder Singh", genre: "Bollywood", mood: "Excited", language: "hi", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3", duration: "3:50", bpm: 130, energy: "high" },

  // Punjabi
  { title: "Power Bhangra", artist: "GTR Punjab", genre: "Bollywood", mood: "Motivated", language: "pun", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3", duration: "4:02", bpm: 132, energy: "high" },

  // Tamil / Telugu
  { title: "Rowdy Baby Gym Mix", artist: "Dhanush Beats", genre: "Bollywood", mood: "Happy", language: "ta", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3", duration: "4:40", bpm: 128, energy: "high" },
  { title: "Telugu Thunder (Mass Beat)", artist: "DSP Remix", genre: "Bollywood", mood: "Motivated", language: "te", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3", duration: "4:22", bpm: 135, energy: "high" },

  // Gujarati
  { title: "Khalasi (Aesthetic Beat)", artist: "Aditya Gadhvi", genre: "Regional Music", mood: "Motivated", language: "gu", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3", duration: "3:25", bpm: 110, energy: "medium" },
  { title: "Garba Cardio Mix", artist: "Falguni Vibe", genre: "Regional Music", mood: "Happy", language: "gu", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", duration: "4:40", bpm: 120, energy: "medium" },

  // Spanish / Latin
  { title: "Danza Kuduro Power", artist: "Don Omar", genre: "Latin", mood: "Excited", language: "es", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", duration: "3:30", bpm: 130, energy: "high" },
  { title: "Gasolina Cardio", artist: "Daddy Yankee", genre: "Latin", mood: "Motivated", language: "es", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", duration: "3:10", bpm: 125, energy: "high" },

  // K-Pop
  { title: "Dynamite Sprint", artist: "BTS Synth", genre: "K-Pop", mood: "Happy", language: "ko", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", duration: "3:45", bpm: 120, energy: "medium" },
  { title: "How You Like That Gym Mix", artist: "Blackpink Remake", genre: "K-Pop", mood: "Motivated", language: "ko", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", duration: "3:35", bpm: 130, energy: "high" },

  // J-Pop / Anime
  { title: "Gurenge Gym Mix", artist: "LiSA Synth", genre: "J-Pop", mood: "Motivated", language: "ja", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3", duration: "3:56", bpm: 135, energy: "high" },
  { title: "Silhouette Run", artist: "KANA-BOON Remake", genre: "J-Pop", mood: "Excited", language: "ja", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3", duration: "4:00", bpm: 140, energy: "high" },

  // Ambient / Yoga & Meditation
  { title: "Zen Oasis", artist: "Buddha Lounge", genre: "Ambient", mood: "Calm", language: "en", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3", duration: "8:12", bpm: 60, energy: "low" },
  { title: "Deep Breathing Pad", artist: "Prana Chill", genre: "Ambient", mood: "Calm", language: "en", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3", duration: "9:30", bpm: 65, energy: "low" },

  // Classical / Stretching & Recovery
  { title: "Soft Recovery Guitar", artist: "Acoustic Flow", genre: "Classical", mood: "Calm", language: "en", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3", duration: "5:22", bpm: 72, energy: "low" },
  { title: "Fluid Motion Piano", artist: "Lumina Key", genre: "Classical", mood: "Calm", language: "en", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3", duration: "6:05", bpm: 75, energy: "low" }
];
function saveStateToLocalStorage() {
  localStorage.setItem("fitverse_state", JSON.stringify(state));
}

function loadStateFromLocalStorage() {
  const saved = localStorage.getItem("fitverse_state");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      const savedMusic = parsed.music || {};
      Object.assign(state, parsed);
      
      // Ensure music sub-properties are safely initialised
      state.music = {
        playing: false,
        currentTrackIndex: savedMusic.currentTrackIndex || 0,
        tracks: [],
        workoutPlaylist: savedMusic.workoutPlaylist || [],
        playSource: savedMusic.playSource || "catalog"
      };
    } catch (e) {
      console.error("Error parsing localstorage state", e);
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  loadStateFromLocalStorage();
  preloadAvatars();
  updateWorkoutStreak(false);
  applySavedTheme();
  setupUIEventListeners();
  initRouter();
  updateTranslationText();
  renderAvatar();
  recalculateHealthMetrics();
  generateAIPlan();
  setupMusicZone();
  setupSpeechSystems();
});

function initRouter() {
  // If not logged in, force Login screen
  if (!state.auth.isLoggedIn) {
    showView("view-auth");
  } else {
    // If logged in, check if onboarding was completed
    const onboardingComplete = localStorage.getItem("fitverse_onboarding_completed") === "true";
    if (!onboardingComplete) {
      showView("view-onboarding");
    } else {
      showView("view-dashboard");
      switchDashTab("tab-home");
    }
  }
}

function showView(viewId) {
  document.querySelectorAll(".view-container").forEach(el => {
    el.classList.remove("active");
  });
  const view = document.getElementById(viewId);
  if (view) {
    view.classList.add("active");
    window.scrollTo(0, 0);
  }
  
  // Toggle Navbar actions
  const navActions = document.querySelector(".nav-actions");
  if (viewId === "view-auth") {
    if (navActions) navActions.style.display = "none";
  } else {
    if (navActions) navActions.style.display = "flex";
  }
}

function switchDashTab(tabId) {
  document.querySelectorAll(".dash-menu-item").forEach(btn => {
    btn.classList.remove("active");
  });
  document.querySelectorAll(".dash-pane").forEach(pane => {
    pane.classList.remove("active");
  });
  
  const activeMenu = document.querySelector(`.dash-menu-item[data-tab="${tabId}"]`);
  if (activeMenu) activeMenu.classList.add("active");
  
  const pane = document.getElementById(tabId);
  if (pane) pane.classList.add("active");
  
  // Specific tab actions
  if (tabId === "tab-music") {
    setupMusicZone();
  } else if (tabId === "tab-knowledge") {
    renderTodayKnowledge();
  } else if (tabId === "tab-avatar") {
    renderAvatarEditorOptions();
  } else if (tabId === "tab-plan" || tabId === "tab-diet") {
    renderAIWorkoutView();
  }
}

// ==========================================
// 8. THEME & LANGUAGE RUNNERS
// ==========================================
function applySavedTheme() {
  document.documentElement.setAttribute("data-theme", state.theme);
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.checked = (state.theme === "dark");
  }
}

function updateTranslationText() {
  const dict = translations[state.language] || translations["en"];
  
  // Search for any element with data-t key
  document.querySelectorAll("[data-t]").forEach(el => {
    const key = el.getAttribute("data-t");
    if (dict[key]) {
      // If input or textarea, translate placeholder
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // Re-translate dropdowns or selections in onboarding steps
  translateOnboardingInterface();
}

function translateOnboardingInterface() {
  const lang = state.language;
  const goalSelect = document.getElementById("ob-goal");
  const dietSelect = document.getElementById("ob-diet");
  const levelSelect = document.getElementById("ob-level");
  
  // Direct updates
  if (goalSelect) {
    const dict = translations[lang];
    goalSelect.options[0].text = dict.fat_loss;
    goalSelect.options[1].text = dict.muscle_gain;
    goalSelect.options[2].text = dict.maintenance;
    goalSelect.options[3].text = dict.endurance;
  }
  if (dietSelect) {
    const dict = translations[lang];
    dietSelect.options[0].text = dict.vegetarian;
    dietSelect.options[1].text = dict.non_vegetarian;
    dietSelect.options[2].text = dict.vegan;
    dietSelect.options[3].text = dict.custom_diet;
  }
  if (levelSelect) {
    const dict = translations[lang];
    levelSelect.options[0].text = dict.beginner;
    levelSelect.options[1].text = dict.intermediate;
    levelSelect.options[2].text = dict.advanced;
  }
}

// ==========================================
// 9. HEALTH AND STATS METRICS ENGINE
// ==========================================
function recalculateHealthMetrics() {
  let w = parseFloat(state.onboarding.weight) || 75;
  let h = parseFloat(state.onboarding.height) || 175;
  const isImperial = state.onboarding.units === "imperial";
  
  let bmiVal = 0;
  if (isImperial) {
    bmiVal = (w / (h * h)) * 703;
  } else {
    const hMeter = h / 100;
    bmiVal = w / (hMeter * hMeter);
  }
  
  state.userStats.bmi = bmiVal.toFixed(1);
  
  if (bmiVal < 18.5) {
    state.userStats.bmiStatus = "Underweight";
  } else if (bmiVal < 25) {
    state.userStats.bmiStatus = "Normal Weight";
  } else if (bmiVal < 30) {
    state.userStats.bmiStatus = "Overweight";
  } else {
    state.userStats.bmiStatus = "Obese";
  }
  
  // Calculate Body Fat (US Navy Formula approximation or simplified formula)
  const age = parseFloat(state.onboarding.age) || 25;
  const gender = state.onboarding.gender || "male";
  let bodyFat = 0;
  if (gender === "male") {
    bodyFat = 1.20 * bmiVal + 0.23 * age - 16.2;
  } else {
    bodyFat = 1.20 * bmiVal + 0.23 * age - 5.4;
  }
  state.userStats.bodyFat = Math.max(2, Math.min(60, parseFloat(bodyFat.toFixed(1))));

  // Calculate Goal Completion Progress
  const startWeight = parseFloat(state.onboarding.initialWeight) || parseFloat(state.onboarding.weight) || 75;
  const curWeight = parseFloat(state.onboarding.weight) || 75;
  const tgtWeight = parseFloat(state.onboarding.targetWeight) || 70;
  
  let progress = 0;
  const totalDiff = Math.abs(startWeight - tgtWeight);
  if (totalDiff > 0.1) {
    const curDiff = Math.abs(startWeight - curWeight);
    progress = Math.min(100, Math.max(0, Math.round((curDiff / totalDiff) * 100)));
  } else {
    progress = 100;
  }
  state.userStats.goalProgress = progress;
  
  // Calculate recommended Water goal
  const wKg = isImperial ? w * 0.453592 : w;
  state.userStats.waterGoal = Math.round(wKg * 35);
  
  updateDashboardDOM();
}

function updateDashboardDOM() {
  const bmiValEl = document.getElementById("bmiVal");
  const bmiStatusEl = document.getElementById("bmiStatus");
  const currWeightEl = document.getElementById("currWeight");
  const targetWeightEl = document.getElementById("targetWeight");
  const streakValEl = document.getElementById("streakVal");
  const headerStreakVal = document.getElementById("headerStreakVal");
  const caloriesConsumedEl = document.getElementById("caloriesConsumed");
  const caloriesBurnedEl = document.getElementById("caloriesBurned");
  const xpValEl = document.getElementById("xpVal");
  const levelValEl = document.getElementById("levelVal");
  const headerXpVal = document.getElementById("headerXpVal");
  const userNameEl = document.getElementById("dashUserName");
  
  const bodyFatValEl = document.getElementById("bodyFatVal");
  const goalCompletionValEl = document.getElementById("goalCompletionVal");
  const lastWorkoutDateValEl = document.getElementById("lastWorkoutDateVal");
  
  const unitLabel = state.onboarding.units === "imperial" ? "lbs" : "kg";
  
  if (bmiValEl) bmiValEl.textContent = state.userStats.bmi;
  if (bmiStatusEl) bmiStatusEl.textContent = state.userStats.bmiStatus;
  if (currWeightEl) currWeightEl.textContent = `${state.onboarding.weight || 0} ${unitLabel}`;
  if (targetWeightEl) targetWeightEl.textContent = `${state.onboarding.targetWeight || 0} ${unitLabel}`;
  if (streakValEl) streakValEl.textContent = `${state.userStats.streak} Days`;
  if (headerStreakVal) headerStreakVal.textContent = `${state.userStats.streak} Days`;
  if (caloriesConsumedEl) caloriesConsumedEl.textContent = `${state.userStats.caloriesConsumed} kcal`;
  if (caloriesBurnedEl) caloriesBurnedEl.textContent = `${state.userStats.caloriesBurned} kcal`;
  if (xpValEl) xpValEl.textContent = state.userStats.xp;
  if (headerXpVal) headerXpVal.textContent = state.userStats.xp;
  if (levelValEl) levelValEl.textContent = `LEVEL ${state.userStats.level}`;
  
  if (bodyFatValEl) bodyFatValEl.textContent = state.userStats.bodyFat || "--";
  if (goalCompletionValEl) goalCompletionValEl.textContent = `${state.userStats.goalProgress || 0}%`;
  if (lastWorkoutDateValEl) lastWorkoutDateValEl.textContent = state.userStats.lastWorkoutDate || "None";
  
  if (userNameEl) {
    userNameEl.textContent = state.onboarding.fullname || state.auth.user || "User";
  }

  // Update Water Tracker fill and numbers
  const waterFill = document.getElementById("waterFill");
  const waterPercentText = document.getElementById("waterPercentText");
  const waterMetricText = document.getElementById("waterMetricText");
  
  if (waterFill && waterPercentText && waterMetricText) {
    const pct = Math.min(100, Math.round((state.userStats.waterCurrent / state.userStats.waterGoal) * 100));
    waterFill.style.height = `${pct}%`;
    waterPercentText.textContent = `${pct}%`;
    waterMetricText.textContent = `${state.userStats.waterCurrent} / ${state.userStats.waterGoal} ml`;
  }
  
  // Render dynamic charts
  renderWeightSVGChart();
  
  // Render Achievements
  renderMilestones();
  
  // Update Chart toggles active styling
  const btnWeekly = document.getElementById("btnWeeklyChart");
  const btnMonthly = document.getElementById("btnMonthlyChart");
  if (btnWeekly && btnMonthly) {
    if (state.userStats.chartMode === "monthly") {
      btnWeekly.classList.remove("active");
      btnWeekly.style.background = "transparent";
      btnWeekly.style.color = "var(--text-muted)";
      btnMonthly.classList.add("active");
      btnMonthly.style.background = "var(--grad-primary)";
      btnMonthly.style.color = "white";
    } else {
      btnMonthly.classList.remove("active");
      btnMonthly.style.background = "transparent";
      btnMonthly.style.color = "var(--text-muted)";
      btnWeekly.classList.add("active");
      btnWeekly.style.background = "var(--grad-primary)";
      btnWeekly.style.color = "white";
    }
  }
}

function renderWeightSVGChart() {
  const chartEl = document.getElementById("weightChartBox");
  if (!chartEl) return;
  
  const startWeight = parseFloat(state.onboarding.weight) || 75;
  const targetWeight = parseFloat(state.onboarding.targetWeight) || 70;
  
  let weights = [];
  let days = [];
  
  if (state.userStats.chartMode === "monthly") {
    // 30 days mock history
    const totalDays = 30;
    const step = (startWeight - targetWeight) / (totalDays - 1);
    for (let i = 0; i < totalDays; i++) {
      const fluctuation = Math.sin(i * 0.8) * 0.4 + (i % 3 === 0 ? 0.2 : -0.1);
      const val = startWeight - step * i + fluctuation;
      weights.push(parseFloat(val.toFixed(1)));
      if (i % 5 === 0 || i === totalDays - 1) {
        days.push(`Day ${i + 1}`);
      } else {
        days.push("");
      }
    }
  } else {
    // 7 days weekly mode
    if (state.userStats.weightHistory && state.userStats.weightHistory.length > 0) {
      weights = state.userStats.weightHistory.map(w => w.weight);
      days = state.userStats.weightHistory.map(w => w.date.replace("Day ", ""));
    } else {
      const step = (startWeight - targetWeight) / 6;
      weights = [
        startWeight,
        startWeight - step * 0.5 + 0.2,
        startWeight - step + 0.5,
        startWeight - step * 1.2 - 0.3,
        startWeight - step * 1.8 + 0.1,
        startWeight - step * 2.2 - 0.2,
        startWeight - step * 2.5
      ].map(v => parseFloat(v.toFixed(1)));
      days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    }
  }
  
  const width = chartEl.clientWidth || 500;
  const height = 240;
  const paddingX = 45;
  const paddingY = 35;
  
  const minWeight = Math.min(...weights, targetWeight) - 2;
  const maxWeight = Math.max(...weights, startWeight) + 2;
  const rangeY = maxWeight - minWeight;
  
  let gridLines = "";
  let pointsStr = "";
  let areaPointsStr = `${paddingX},${height - paddingY} `;
  let markerTags = "";
  let textLabels = "";
  
  for (let i = 0; i <= 4; i++) {
    const yVal = minWeight + (rangeY * i) / 4;
    const yCoord = height - paddingY - ((yVal - minWeight) / rangeY) * (height - 2 * paddingY);
    gridLines += `<line class="chart-gridline" x1="${paddingX}" y1="${yCoord}" x2="${width - paddingX}" y2="${yCoord}" />`;
    textLabels += `<text class="chart-axis-lbl" x="${paddingX - 10}" y="${yCoord + 4}" text-anchor="end">${yVal.toFixed(0)}</text>`;
  }
  
  const divVal = weights.length > 1 ? weights.length - 1 : 1;
  weights.forEach((wt, idx) => {
    const xCoord = paddingX + (idx / divVal) * (width - 2 * paddingX);
    const yCoord = height - paddingY - ((wt - minWeight) / rangeY) * (height - 2 * paddingY);
    
    pointsStr += `${xCoord},${yCoord} `;
    areaPointsStr += `${xCoord},${yCoord} `;
    
    const shouldDrawLabel = state.userStats.chartMode !== "monthly" || idx % 5 === 0 || idx === weights.length - 1;
    if (shouldDrawLabel) {
      markerTags += `
        <circle class="chart-marker" cx="${xCoord}" cy="${yCoord}" r="5" data-val="${wt}" />
        <text class="chart-axis-lbl" x="${xCoord}" y="${yCoord - 10}" text-anchor="middle" font-weight="bold" fill="white">${wt}</text>
      `;
    }
    
    if (days[idx]) {
      textLabels += `<text class="chart-axis-lbl" x="${xCoord}" y="${height - paddingY + 20}" text-anchor="middle">${days[idx]}</text>`;
    }
  });
  
  areaPointsStr += `${width - paddingX},${height - paddingY}`;
  
  const svg = `
    <svg class="chart-svg" width="${width}" height="${height}">
      <defs>
        <linearGradient id="cyan-area-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="var(--neon-cyan)" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="var(--neon-cyan)" stop-opacity="0"/>
        </linearGradient>
      </defs>
      ${gridLines}
      <polyline class="chart-area-cyan" points="${areaPointsStr}" />
      <polyline class="chart-line-cyan" points="${pointsStr}" />
      ${markerTags}
      ${textLabels}
    </svg>
  `;
  
  chartEl.innerHTML = svg;
}

function generateAIPlan() {
  const goal = state.onboarding.goal;
  const pref = state.onboarding.workoutPref;
  const lvl = state.onboarding.level;
  const dietType = state.onboarding.diet;
  const allergy = state.onboarding.allergy || "None";
  const country = state.onboarding.country || "United States";
  const region = state.onboarding.region || "";
  const budget = state.onboarding.budget || "moderate";
  const activity = state.onboarding.activityLevel || "lightly_active";
  
  // Calculate Target Daily Intake (Basic estimation)
  // BMR = 10 * weight (kg) + 6.25 * height (cm) - 5 * age + (gender offset)
  const isImperial = state.onboarding.units === "imperial";
  const weightKg = isImperial ? parseFloat(state.onboarding.weight) * 0.453592 : parseFloat(state.onboarding.weight);
  const heightCm = isImperial ? parseFloat(state.onboarding.height) * 2.54 : parseFloat(state.onboarding.height);
  const ageVal = parseFloat(state.onboarding.age) || 25;
  const genderOffset = state.onboarding.gender === "male" ? 5 : -161;
  
  let bmr = Math.round(10 * weightKg + 6.25 * heightCm - 5 * ageVal + genderOffset);
  if (isNaN(bmr) || bmr < 500) bmr = 1750; // Fallback
  
  // Activity Level Multipliers
  let actMultiplier = 1.375; // lightly_active
  if (activity === "sedentary") actMultiplier = 1.2;
  else if (activity === "moderately_active") actMultiplier = 1.55;
  else if (activity === "very_active") actMultiplier = 1.725;
  
  let tdee = Math.round(bmr * actMultiplier);
  
  let calorieTarget = tdee;
  let proteinPct = 0.3;
  let carbsPct = 0.45;
  let fatsPct = 0.25;
  
  if (goal === "fat_loss") {
    calorieTarget = Math.round(tdee * 0.85); // 15% deficit
    proteinPct = 0.4;
    carbsPct = 0.3;
    fatsPct = 0.3;
  } else if (goal === "muscle_gain") {
    calorieTarget = Math.round(tdee * 1.15); // 15% surplus
    proteinPct = 0.35;
    carbsPct = 0.45;
    fatsPct = 0.2;
  } else if (goal === "endurance") {
    calorieTarget = Math.round(tdee * 1.1);
    proteinPct = 0.25;
    carbsPct = 0.55;
    fatsPct = 0.2;
  }
  
  if (calorieTarget < 1200) calorieTarget = 1200; // safe lower bound
  
  state.userStats.caloriesBurned = Math.round(calorieTarget * 0.25); // Simulated workout burn
  
  const targetProtein = Math.round((calorieTarget * proteinPct) / 4);
  const targetCarbs = Math.round((calorieTarget * carbsPct) / 4);
  const targetFats = Math.round((calorieTarget * fatsPct) / 9);
  const targetWater = Math.round(weightKg * 35); // 35 ml per kg
  
  state.dietTargets = {
    cals: calorieTarget,
    protein: targetProtein,
    carbs: targetCarbs,
    fats: targetFats,
    water: targetWater
  };
  
  // Construct Weekly Workout schedule
  const planExercises = {
    beginner: [
      { name: "Bodyweight Squats", sets: 3, reps: 12 },
      { name: "Incline Push-ups", sets: 3, reps: 10 },
      { name: "Glute Bridges", sets: 3, reps: 12 },
      { name: "Plank Hold", sets: 3, reps: "30s" }
    ],
    intermediate: [
      { name: "Barbell Squats", sets: 4, reps: 10 },
      { name: "Dumbbell Bench Press", sets: 4, reps: 10 },
      { name: "Bent-Over Rows", sets: 4, reps: 8 },
      { name: "Hanging Knee Raises", sets: 3, reps: 15 }
    ],
    advanced: [
      { name: "Heavy Deadlifts", sets: 5, reps: 5 },
      { name: "Weighted Dips", sets: 4, reps: 8 },
      { name: "Barbell Overhead Press", sets: 4, reps: 6 },
      { name: "Romanian Deadlifts", sets: 4, reps: 10 },
      { name: "AB Wheel Rollouts", sets: 4, reps: 12 }
    ]
  };
  
  const exercises = planExercises[lvl] || planExercises.intermediate;
  
  state.workoutPlan = [
    { day: "Day 1", focus: goal === "fat_loss" ? "HIIT Cardio" : "Push Routine", exercises: exercises, rest: false },
    { day: "Day 2", focus: goal === "fat_loss" ? "Core Workout" : "Pull Routine", exercises: exercises, rest: false },
    { day: "Day 3", focus: "Rest & Active Recovery", exercises: [], rest: true },
    { day: "Day 4", focus: goal === "fat_loss" ? "Cardio Circuit" : "Legs Hypertrophy", exercises: exercises, rest: false },
    { day: "Day 5", focus: "Upper Body Strength", exercises: exercises, rest: false },
    { day: "Day 6", focus: "Rest Day", exercises: [], rest: true },
    { day: "Day 7", focus: "Full Body Mobility", exercises: exercises, rest: false }
  ];

  // Advanced Cultural & Budget Food Matrix compiler
  const lowCountry = country.toLowerCase();
  const lowRegion = region.toLowerCase();
  
  // Helper function to build template
  function getRawMeals(loc, dietType, bud) {
  const isVegan = dietType === "vegan";
  const isVeg = dietType === "vegetarian" || dietType === "vegan";

  if (loc === "gujarati") {
    if (isVegan) {
      if (bud === "low") {
        return {
          breakfast: { name: "Bajra Thepla & Coriander Chutney", meals: "2 thin Bajra Thepla cooked in peanut oil, served with fresh garlic-mint chutney", portion: "2 pieces" },
          midMorningSnack: { name: "Mint Cucumber Infusion", meals: "1 glass of cold water seasoned with fresh mint, grated cucumber, cumin powder, and black salt", portion: "250 ml" },
          lunch: { name: "Sev Tameta Shaak & Bajra Rotla", meals: "Tangy tomato and sev curry cooked in vegetable oil, served with 1 hot Bajra Rotla", portion: "1 bowl curry + 1 rotla" },
          eveningSnack: { name: "Roasted Masala Chana", meals: "Dry-roasted black chickpeas tossed with chopped onions, tomatoes, coriander, and lemon juice", portion: "50 grams" },
          dinner: { name: "Moong Dal Khichdi with Oil", meals: "Soft cooked split green moong dal and rice khichdi prepared with a dash of turmeric and mustard oil", portion: "1.5 bowls" },
          preworkout: { name: "Ripe Banana", meals: "1 fresh local banana", portion: "1 medium banana" },
          postworkout: { name: "Soya Chunks Stir-fry", meals: "Boiled soya chunks lightly sautéed with cumin seeds, mustard seeds, and curry leaves in peanut oil", portion: "80 grams soya chunks" }
        };
      } else if (bud === "premium") {
        return {
          breakfast: { name: "Almond Flour Methi Thepla", meals: "Almond flour Methi theplas cooked in organic cold-pressed sesame oil, served with unsweetened almond milk curd", portion: "2 theplas + 100g almond curd" },
          midMorningSnack: { name: "Almond Milk Chaas & Berries", meals: "Chaas made from organic almond milk yogurt, seasoned with roasted cumin and mint, served with organic berries", portion: "1 glass + 50g berries" },
          lunch: { name: "Quinoa Khichdi & Organic Shaak", meals: "Organic royal quinoa and yellow split moong dal khichdi, served with organic stuffed baby eggplants cooked in olive oil", portion: "1 plate khichdi + 1 bowl shaak" },
          eveningSnack: { name: "Quinoa Handvo with Seeds", meals: "Baked savory cake made of organic quinoa and mixed lentils (no dairy), topped with sesame, sunflower, and pumpkin seeds", portion: "2 thick slices" },
          dinner: { name: "Tofu Skewers & Broccoli Shaak", meals: "Seared organic tofu skewers tossed in cold-pressed peanut oil, served with steamed broccoli and red cabbage shaak", portion: "200 grams tofu + greens" },
          preworkout: { name: "Organic Makhana in Peanut Oil", meals: "Organic foxnuts roasted in cold-pressed peanut oil, sprinkled with pink Himalayan salt", portion: "40 grams" },
          postworkout: { name: "Premium Tofu Steaks", meals: "Thick organic tofu slabs marinated in tandoori spices and pan-grilled, served with mustard microgreens", portion: "250 grams tofu" }
        };
      } else { // moderate
        return {
          breakfast: { name: "Oats & Methi Muthiya", meals: "Steamed oats Muthiyas flavored with fresh fenugreek leaves and sesame seeds, cooked with oil", portion: "6-8 pieces" },
          midMorningSnack: { name: "Mint Lemon Chaas", meals: "1 glass of watered-down soy yogurt chaas with fresh mint and roasted cumin", portion: "1 glass" },
          lunch: { name: "Gujarati Dal, Brown Rice & Shaak", meals: "Tuvar dal sweetened with jaggery, brown rice, mixed vegetable shaak, and a bowl of cucumber salad", portion: "1 bowl dal + 1 cup rice + 1 bowl shaak" },
          eveningSnack: { name: "Vegetable Handvo", meals: "Baked mixed lentil and vegetable savory cake (prepared without yogurt or curd), served with coriander dip", portion: "1 slice (100g)" },
          dinner: { name: "Vegetable Khichdi & Tomato Soup", meals: "Moong dal and rice khichdi loaded with green peas and carrots, served with warm spiced tomato soup", portion: "1.5 cups khichdi + 1 bowl soup" },
          preworkout: { name: "Roasted Spicy Makhana", meals: "Puffed foxnuts dry-roasted and tossed with turmeric and olive oil", portion: "30 grams" },
          postworkout: { name: "Tofu Bhurji", meals: "Scrambled tofu cooked with green chillies, onions, tomatoes, and fresh spinach in oil", portion: "120 grams tofu" }
        };
      }
    } else if (isVeg) { // vegetarian
      if (bud === "low") {
        return {
          breakfast: { name: "Bajra Thepla & Chutney", meals: "2 thin Bajra Thepla cooked with minimal oil, served with garlic-mint chutney", portion: "2 pieces" },
          midMorningSnack: { name: "Spiced Buttermilk", meals: "1 glass of buttermilk (chaas) seasoned with roasted cumin powder and rock salt", portion: "250 ml" },
          lunch: { name: "Sev Tameta Shaak & Rotla", meals: "Sev tameta vegetable curry served with 1 hot Bajra Rotla and cucumber slices", portion: "1 bowl curry + 1 rotla" },
          eveningSnack: { name: "Roasted Masala Chana", meals: "Dry-roasted black chickpeas tossed with chopped onions, tomatoes, and lemon juice", portion: "50 grams" },
          dinner: { name: "Moong Dal Khichdi", meals: "Soft cooked split green moong dal and rice khichdi with a dash of turmeric", portion: "1.5 bowls" },
          preworkout: { name: "Ripe Banana", meals: "1 fresh local banana", portion: "1 medium banana" },
          postworkout: { name: "Soya Chunks Stir-fry", meals: "Boiled soya chunks lightly sautéed with cumin seeds, mustard seeds, and coriander", portion: "80 grams soya chunks" }
        };
      } else if (bud === "premium") {
        return {
          breakfast: { name: "Almond Flour Methi Thepla", meals: "Almond flour Methi theplas cooked in organic A2 cow ghee, served with strained Greek yogurt", portion: "2 theplas + 100g yogurt" },
          midMorningSnack: { name: "Almond Milk Chaas & Berries", meals: "Chaas made from organic almond milk yogurt, served alongside fresh organic berries", portion: "1 glass + 50g berries" },
          lunch: { name: "Quinoa Khichdi & Organic Shaak", meals: "Organic royal quinoa and yellow split moong dal khichdi, served with organic stuffed baby eggplants", portion: "1 plate khichdi + 1 bowl shaak" },
          eveningSnack: { name: "Quinoa Handvo with Seeds", meals: "Baked savory cake made of organic quinoa and mixed lentils, topped with sunflower and pumpkin seeds", portion: "2 thick slices" },
          dinner: { name: "Tofu Paneer Platter", meals: "Seared organic paneer and tofu skewers tossed in cold-pressed peanut oil, served with steamed broccoli and red cabbage", portion: "200 grams paneer/tofu + greens" },
          preworkout: { name: "Organic Makhana in Ghee", meals: "Organic foxnuts roasted in pure A2 cow ghee, sprinkled with pink Himalayan salt", portion: "40 grams" },
          postworkout: { name: "Premium Tofu Steaks", meals: "Thick organic tofu slabs marinated in tandoori spices and pan-grilled, served with microgreens", portion: "250 grams tofu" }
        };
      } else { // moderate
        return {
          breakfast: { name: "Oats & Methi Muthiya", meals: "Steamed whole wheat and oats Muthiyas flavored with fresh fenugreek leaves, sesame seeds", portion: "6-8 pieces" },
          midMorningSnack: { name: "Chaas & Roasted Almonds", meals: "1 glass of spiced buttermilk served with a handful of raw almonds", portion: "1 glass + 10 almonds" },
          lunch: { name: "Gujarati Dal, Rice & Shaak", meals: "Sweet-sour Tuvar dal, brown rice, mixed vegetable hand-cut shaak, and a bowl of curd", portion: "1 bowl dal + 1 cup rice + 1 bowl shaak" },
          eveningSnack: { name: "Vegetable Handvo", meals: "Baked mixed lentil and vegetable savory cake, served with mint coriander dip", portion: "1 slice (100g)" },
          dinner: { name: "Vegetable Khichdi & Kadhi", meals: "Moong dal and rice khichdi loaded with green peas and carrots, served with hot spiced kadhi", portion: "1.5 cups khichdi + 1 bowl kadhi" },
          preworkout: { name: "Roasted Spicy Makhana", meals: "Puffed foxnuts dry-roasted and tossed with turmeric and pinch of salt", portion: "30 grams" },
          postworkout: { name: "Spiced Paneer Bhurji", meals: "Scrambled cottage cheese (paneer) cooked with green chillies, onions, and fresh spinach", portion: "120 grams paneer" }
        };
      }
    } else { // non-veg Gujarati (chicken curry / eggs prepared Gujarati style)
      if (bud === "low") {
        return {
          breakfast: { name: "Gujarati Egg Bhurji & Thepla", meals: "3 eggs scrambled with green garlic, chillies, and tomatoes, served with 2 wheat theplas", portion: "3 eggs + 2 theplas" },
          midMorningSnack: { name: "Spiced Buttermilk", meals: "1 glass of buttermilk (chaas) seasoned with cumin powder and rock salt", portion: "250 ml" },
          lunch: { name: "Gujarati Egg Curry & Rotla", meals: "Boiled egg curry cooked in light tomato-onion gravy, served with 1 Bajra Rotla", portion: "2 eggs + 1 rotla" },
          eveningSnack: { name: "Roasted Masala Chana", meals: "Dry-roasted black chickpeas tossed with onions, tomatoes, and lemon juice", portion: "50 grams" },
          dinner: { name: "Kathiyawadi Chicken & Khichdi", meals: "150g boneless chicken breast cooked in hot Kathiyawadi masala gravy, served with plain khichdi", portion: "150g chicken + 1 bowl khichdi" },
          preworkout: { name: "Ripe Banana", meals: "1 fresh local banana", portion: "1 banana" },
          postworkout: { name: "Boiled Egg Whites", meals: "5 hard-boiled egg whites with black pepper", portion: "5 egg whites" }
        };
      } else if (bud === "premium") {
        return {
          breakfast: { name: "Green Garlic Omelet & Sourdough", meals: "3 organic free-range eggs cooked with fresh green garlic, coriander, served on organic sourdough toast", portion: "3 eggs + 1 toast" },
          midMorningSnack: { name: "Tender Coconut Water & Berries", meals: "1 glass of coconut water with a bowl of fresh organic berries", portion: "1 glass + 50g berries" },
          lunch: { name: "Premium Chicken Shaak & Quinoa", meals: "Organic grass-fed chicken breast curry prepared with Gujarati spices, served with royal quinoa", portion: "180g chicken + 1 cup quinoa" },
          eveningSnack: { name: "Chicken Kabobs with Mint Dip", meals: "Spiced minced chicken breasts skewers grilled in clay oven, served with mint chutney", portion: "120g chicken" },
          dinner: { name: "Pomfret Fry & Millet Khichdi", meals: "Fresh local pomfret fish pan-fried with mustard and turmeric, served with multi-grain khichdi", portion: "180g fish + 1 bowl khichdi" },
          preworkout: { name: "Dates & Organic Walnuts", meals: "3 organic dates stuffed with raw walnuts", portion: "3 dates + 10 nuts" },
          postworkout: { name: "Premium Iso-Whey Shake", meals: "1 scoop grass-fed whey isolate with water or light milk", portion: "1 shake" }
        };
      } else { // moderate
        return {
          breakfast: { name: "Egg Bhurji & Toast", meals: "Double egg scramble with onions, tomatoes, and coriander, served with whole wheat toast", portion: "2 eggs + 2 toasts" },
          midMorningSnack: { name: "Chaas & Almonds", meals: "1 glass of buttermilk served with a handful of raw almonds", portion: "1 glass + 10 almonds" },
          lunch: { name: "Chicken Masala, Rice & Shaak", meals: "Gujarati style chicken curry, brown rice, green vegetable shaak, and cucumber slices", portion: "150g chicken + 1 cup rice + salad" },
          eveningSnack: { name: "Boiled Egg White Salad", meals: "4 egg whites chopped and tossed with cucumber, tomato, and black pepper", portion: "4 egg whites" },
          dinner: { name: "Fish Curry & Bajra Rotla", meals: "150g pan-seared fish cooked in sour-spicy tomato gravy, served with 1 hot Bajra Rotla", portion: "150g fish + 1 rotla" },
          preworkout: { name: "Banana & Peanut Butter", meals: "1 medium banana with a tablespoon of peanut butter", portion: "1 banana + 1 tbsp" },
          postworkout: { name: "Whey Protein Shake", meals: "1 scoop whey protein shaken in water", portion: "1 shake" }
        };
      }
    }
  }

  if (loc === "indian") {
    if (isVegan) {
      if (bud === "low") {
        return {
          breakfast: { name: "Onion Oats Poha", meals: "Rolled oats cooked poha-style with mustard seeds, curry leaves, onions, and green chillies", portion: "1 plate" },
          midMorningSnack: { name: "Seasonal Guava/Apple", meals: "Fresh local seasonal fruit with a sprinkle of black salt", portion: "1 medium fruit" },
          lunch: { name: "Dal Tadka & Bajra Roti", meals: "Yellow split dal tadka cooked with cumin and tomatoes, served with 2 bajra rotis (no ghee)", portion: "1 bowl dal + 2 rotis" },
          eveningSnack: { name: "Sprouts Chaat", meals: "Boiled green gram sprouts tossed with chopped cucumbers, tomatoes, and lemon squeeze", portion: "1 bowl" },
          dinner: { name: "Soya Chunk Curry & Rice", meals: "High-protein soya chunks curry cooked in onion-tomato gravy, served with steamed brown rice", portion: "1 bowl curry + 1 cup rice" },
          preworkout: { name: "Ripe Banana", meals: "1 fresh banana", portion: "1 banana" },
          postworkout: { name: "Roasted Sattu Drink", meals: "Roasted chickpea flour (sattu) dissolved in cold water with lemon and black salt", portion: "1 shaker (30g powder)" }
        };
      } else if (bud === "premium") {
        return {
          breakfast: { name: "Oats Cheela with Tofu", meals: "Organic oat flour crepes stuffed with spiced scrambled tofu and bell peppers, cooked in sesame oil", portion: "2 cheelas" },
          midMorningSnack: { name: "Avocado & Coconut Water", meals: "Fresh tender coconut water served alongside half an organic avocado", portion: "1 coconut + 1/2 avocado" },
          lunch: { name: "Black Rice & Organic Dal", meals: "High-fiber organic black rice served with organic green lentil soup and asparagus stir-fry in olive oil", portion: "1 cup rice + 1 bowl dal" },
          eveningSnack: { name: "Almond Butter Toast", meals: "Almond butter spread over toasted gluten-free multigrain bread, topped with chia seeds", portion: "1 slice toast" },
          dinner: { name: "Tofu Skewers & Quinoa", meals: "Organic herb-marinated tofu cubes grilled with bell peppers and onions, served over royal quinoa", portion: "200g tofu + 1 cup quinoa" },
          preworkout: { name: "Organic Banana & Almonds", meals: "1 organic banana served with a handful of raw organic almonds", portion: "1 banana + 12 almonds" },
          postworkout: { name: "Organic Pea Protein Shake", meals: "Premium vegan plant protein shake blended with cold organic coconut milk", portion: "1 shake (35g protein)" }
        };
      } else { // moderate
        return {
          breakfast: { name: "Vegetable Rava Upma", meals: "Semolina cooked with carrots, green peas, curry leaves, served with unsweetened almond milk", portion: "1 plate" },
          midMorningSnack: { name: "Fresh Coconut Water", meals: "1 glass of natural tender coconut water", portion: "250 ml" },
          lunch: { name: "Dal, Brown Rice & Bhindi", meals: "Moong dal soup, brown rice, sautéed okra (bhindi), and a bowl of fresh cucumber-tomato salad", portion: "1 bowl dal + 1 cup rice + salad" },
          eveningSnack: { name: "Boiled Chickpea Salad", meals: "Kabuli chickpeas tossed with tomatoes, cucumber, coriander, and fresh lemon juice", portion: "1 bowl" },
          dinner: { name: "Tofu Tikka & Gluten Free Roti", meals: "Organic tofu cubes marinated in vegan soy yogurt and spices and pan-grilled, served with 2 gluten-free rotis", portion: "120g tofu + 2 rotis" },
          preworkout: { name: "Banana & Peanut Butter", meals: "1 medium banana with a tablespoon of creamy peanut butter", portion: "1 banana + 1 tbsp butter" },
          postworkout: { name: "Soy Protein Shake", meals: "1 scoop soy protein isolate blended with water or soy milk", portion: "1 shake" }
        };
      }
    } else if (isVeg) { // vegetarian
      if (bud === "low") {
        return {
          breakfast: { name: "Onion Oats Poha", meals: "Rolled oats cooked poha-style with mustard seeds, curry leaves, onions, and green chillies", portion: "1 plate" },
          midMorningSnack: { name: "Seasonal Guava/Apple", meals: "Fresh local seasonal fruit with a sprinkle of chaat masala", portion: "1 medium fruit" },
          lunch: { name: "Dal Tadka & Roti", meals: "Yellow split dal tadka cooked with cumin and tomatoes, served with 2 whole wheat rotis", portion: "1 bowl dal + 2 rotis" },
          eveningSnack: { name: "Sprouts Chaat", meals: "Boiled green gram sprouts tossed with chopped cucumbers, tomatoes, and lemon squeeze", portion: "1 bowl" },
          dinner: { name: "Soya Chunk Curry & Rice", meals: "High-protein soya chunks curry cooked in onion-tomato gravy, served with steamed brown rice", portion: "1 bowl curry + 1 cup rice" },
          preworkout: { name: "Ripe Banana", meals: "1 fresh banana", portion: "1 banana" },
          postworkout: { name: "Roasted Sattu Drink", meals: "Roasted chickpea flour (sattu) dissolved in cold water with lemon and black salt", portion: "1 shaker (30g powder)" }
        };
      } else if (bud === "premium") {
        return {
          breakfast: { name: "Oats Cheela with Paneer", meals: "Organic oat flour crepes stuffed with spiced shredded cottage cheese and bell peppers", portion: "2 cheelas" },
          midMorningSnack: { name: "Avocado & Coconut Water", meals: "Fresh tender coconut water served alongside half an organic avocado", portion: "1 coconut + 1/2 avocado" },
          lunch: { name: "Black Rice & Organic Dal", meals: "High-fiber organic black rice served with organic green lentil soup and asparagus stir-fry", portion: "1 cup rice + 1 bowl dal" },
          eveningSnack: { name: "Almond Butter Toast", meals: "Almond butter spread over toasted gluten-free multigrain bread, topped with chia seeds", portion: "1 slice toast" },
          dinner: { name: "Tofu Skewers & Quinoa", meals: "Organic herb-marinated tofu cubes grilled with bell peppers and onions, served over royal quinoa", portion: "200g tofu + 1 cup quinoa" },
          preworkout: { name: "Organic Banana & Almonds", meals: "1 organic banana served with a handful of raw organic almonds", portion: "1 banana + 12 almonds" },
          postworkout: { name: "Organic Pea Protein Shake", meals: "Premium vegan plant protein shake blended with cold organic coconut milk", portion: "1 shake (35g protein)" }
        };
      } else { // moderate
        return {
          breakfast: { name: "Vegetable Rava Upma", meals: "Semolina cooked with carrots, green peas, curry leaves, served with hot skimmed milk", portion: "1 plate" },
          midMorningSnack: { name: "Fresh Coconut Water", meals: "1 glass of natural tender coconut water", portion: "250 ml" },
          lunch: { name: "Dal, Brown Rice & Bhindi", meals: "Moong dal soup, brown rice, sautéed okra (bhindi), and a bowl of fresh curd", portion: "1 bowl dal + 1 cup rice + 1 cup curd" },
          eveningSnack: { name: "Boiled Chickpea Salad", meals: "Kabuli chickpeas tossed with tomatoes, cucumber, coriander, and fresh lemon juice", portion: "1 bowl" },
          dinner: { name: "Paneer Tikka & Roti", meals: "Cottage cheese cubes marinated in yogurt and spices and pan-grilled, served with 2 rotis", portion: "120g paneer + 2 rotis" },
          preworkout: { name: "Banana & Peanut Butter", meals: "1 medium banana with a tablespoon of creamy peanut butter", portion: "1 banana + 1 tbsp butter" },
          postworkout: { name: "Whey Protein Shake", meals: "1 scoop whey protein isolate blended with water or skimmed milk", portion: "1 shake" }
        };
      }
    } else { // non-veg
      if (bud === "low") {
        return {
          breakfast: { name: "Spiced Egg Bhurji", meals: "3 eggs scrambled with onions, tomatoes, and green chillies, served with 2 slices whole wheat bread", portion: "3 eggs + 2 slices" },
          midMorningSnack: { name: "Local Apple", meals: "1 fresh local apple", portion: "1 medium apple" },
          lunch: { name: "Egg Curry & Brown Rice", meals: "Boiled egg curry in traditional onion gravy served with steamed brown rice", portion: "2 eggs + 1 cup rice" },
          eveningSnack: { name: "Roasted Chana", meals: "Roasted chickpeas seasoned with black pepper", portion: "50 grams" },
          dinner: { name: "Chicken Masala & Roti", meals: "150g chicken breast pieces cooked in light spice gravy with 2 chapati rotis", portion: "150g chicken + 2 rotis" },
          preworkout: { name: "Banana", meals: "1 ripe banana", portion: "1 banana" },
          postworkout: { name: "Egg White Scramble", meals: "4 egg whites scrambled with black pepper and salt", portion: "4 egg whites" }
        };
      } else if (bud === "premium") {
        return {
          breakfast: { name: "Free-range Egg Avocado Toast", meals: "2 poached organic free-range eggs on top of smashed avocado on sourdough bread", portion: "2 eggs + 1 slice sourdough" },
          midMorningSnack: { name: "Organic Berries & Nuts", meals: "A mix of organic blueberries, raspberries, and raw organic walnuts", portion: "1 small bowl" },
          lunch: { name: "Grass-fed Chicken & Black Rice", meals: "Organic grilled chicken breast marinated in Indian herbs served with black rice and asparagus", portion: "180g chicken + 1 cup rice" },
          eveningSnack: { name: "Almond Butter Celery", meals: "Organic celery sticks filled with raw almond butter and organic hemp seeds", portion: "3 sticks" },
          dinner: { name: "Wild Salmon Tikka", meals: "Wild-caught salmon filet cubes marinated in tandoori spices and baked, served with broccoli", portion: "180g salmon + greens" },
          preworkout: { name: "Dates & Almonds", meals: "3 organic medjool dates stuffed with almond butter", portion: "3 dates" },
          postworkout: { name: "Premium Iso-Whey Shake", meals: "1 scoop grass-fed whey protein isolate blended with organic almond milk", portion: "1 shake (35g protein)" }
        };
      } else { // moderate
        return {
          breakfast: { name: "Omelet & Toast", meals: "Double egg omelet with spinach and mushrooms, served with whole wheat toast", portion: "2 eggs + 2 slices toast" },
          midMorningSnack: { name: "Greek Yogurt", meals: "Low fat plain Greek yogurt with a drizzle of honey", portion: "150 grams" },
          lunch: { name: "Chicken Curry & Brown Rice", meals: "Skinless chicken breast curry cooked in light tomato gravy, brown rice, and green salad", portion: "150g chicken + 1 cup rice" },
          eveningSnack: { name: "Chicken Tikka Skewers", meals: "Grilled chicken breast chunks lightly seasoned with lemon and pepper", portion: "100 grams chicken" },
          dinner: { name: "Grilled Fish & Steamed Veggies", meals: "150g pan-seared fish fillet served with broccoli, baby carrots, and cauliflower", portion: "150g fish + greens" },
          preworkout: { name: "Banana & Almonds", meals: "1 banana and 10 almonds", portion: "1 banana + 10 almonds" },
          postworkout: { name: "Whey Protein Shake", meals: "1 scoop whey protein shaken in cold water", portion: "1 shake" }
        };
      }
    }
  }

  if (loc === "japanese") {
    if (isVegan) {
      if (bud === "low") {
        return {
          breakfast: { name: "Rice & Natto Bowl", meals: "Steamed white rice mixed with fermented soybeans (nattō), chopped green scallions, and soy sauce", portion: "1 bowl" },
          midMorningSnack: { name: "Steamed Edamame", meals: "Boiled green soybeans in pods, sprinkled with sea salt", portion: "80 grams" },
          lunch: { name: "Teriyaki Tofu & White Rice", meals: "Slices of tofu seared in teriyaki sauce (prepared with maple syrup instead of honey) served with steamed white rice", portion: "150g tofu + 1 cup rice" },
          eveningSnack: { name: "Cucumber Sunomono", meals: "Thinly sliced cucumbers pickled in sweet rice vinegar and sesame seeds", portion: "1 bowl" },
          dinner: { name: "Soba Noodle Soup", meals: "Buckwheat soba noodles in warm seaweed kelp (kombu) broth with chopped scallions and tofu", portion: "1 large bowl" },
          preworkout: { name: "Nori Rice Ball (Onigiri)", meals: "White rice ball filled with pickled plum (umeboshi), wrapped in nori seaweed", portion: "1 piece" },
          postworkout: { name: "Soy Milk & Oats", meals: "Unsweetened soy milk blended with a small portion of rolled oats", portion: "1 glass" }
        };
      } else if (bud === "premium") {
        return {
          breakfast: { name: "Premium Matcha & Organic Natto", meals: "Organic brown rice with organic nattō, served with premium ceremonial matcha", portion: "1 bowl + 1 cup tea" },
          midMorningSnack: { name: "Organic Edamame & Berries", meals: "Premium organic edamame pods served with a cup of fresh organic blackberries", portion: "100g edamame + 50g berries" },
          lunch: { name: "Tofu Steaks & Black Rice", meals: "Organic silken tofu steaks pan-grilled with organic seaweed salad, served with organic black rice", portion: "200g tofu + 1 cup rice" },
          eveningSnack: { name: "Shiitake Red Miso Soup", meals: "Red miso soup containing organic shiitake mushrooms, wakame seaweed, and microgreens", portion: "1 bowl" },
          dinner: { name: "Handmade Soba & Tempura Tofu", meals: "Artisanal buckwheat soba noodles in rich mushroom broth with organic baby spinach and seared tofu", portion: "1 large bowl" },
          preworkout: { name: "Organic Plum Onigiri", meals: "Organic brown rice ball with premium pickled umeboshi plum in nori", portion: "1 large onigiri" },
          postworkout: { name: "Pea Protein Matcha Shake", meals: "Organic pea protein powder shaken with cold organic soy milk and organic matcha powder", portion: "1 shake" }
        };
      } else { // moderate
        return {
          breakfast: { name: "Miso Soup & Rice", meals: "Standard miso soup with tofu cubes, steaming brown rice, and nori sheets", portion: "1 bowl soup + 1 cup rice" },
          midMorningSnack: { name: "Salted Edamame", meals: "A bowl of steamed edamame with sea salt", portion: "100 grams" },
          lunch: { name: "Agedashi Tofu & Brown Rice", meals: "Lightly seared tofu cubes with daikon radish grates in mushroom dashi, served with brown rice", portion: "150g tofu + 1 cup rice" },
          eveningSnack: { name: "Wakame Seaweed Salad", meals: "Savory sesame marinated green seaweed salad", portion: "100 grams" },
          dinner: { name: "Millet Soba & Veggies", meals: "Soba noodles served with sautéed shiitake mushrooms, carrots, and sweet green peas", portion: "1 bowl" },
          preworkout: { name: "Umeboshi Onigiri", meals: "Onigiri filled with pickled plum wrapped in nori", portion: "1 piece" },
          postworkout: { name: "Soy Protein Shake", meals: "1 scoop soy protein isolate blended with soy milk", portion: "1 shake" }
        };
      }
    } else if (isVeg) { // vegetarian
      if (bud === "low") {
        return {
          breakfast: { name: "Tamagoyaki & Rice", meals: "Japanese rolled omelet made with 2 eggs, served with white rice and green tea", portion: "2 eggs + 1 cup rice" },
          midMorningSnack: { name: "Steamed Edamame", meals: "Boiled green soybeans in pods, sprinkled with sea salt", portion: "80 grams" },
          lunch: { name: "Teriyaki Tofu & White Rice", meals: "Slices of tofu seared in teriyaki sauce served with steamed white rice", portion: "150g tofu + 1 cup rice" },
          eveningSnack: { name: "Cucumber Sunomono", meals: "Thinly sliced cucumbers pickled in sweet rice vinegar and sesame seeds", portion: "1 bowl" },
          dinner: { name: "Soba Noodle Soup", meals: "Buckwheat soba noodles in warm seaweed kelp broth with chopped scallions and tofu", portion: "1 large bowl" },
          preworkout: { name: "Nori Rice Ball (Onigiri)", meals: "White rice ball filled with pickled plum, wrapped in nori seaweed", portion: "1 piece" },
          postworkout: { name: "Soy Milk & Oats", meals: "Unsweetened soy milk blended with a small portion of rolled oats", portion: "1 glass" }
        };
      } else if (bud === "premium") {
        return {
          breakfast: { name: "Premium Matcha & Tamagoyaki", meals: "Organic brown rice with organic tamagoyaki (2 eggs), served with premium ceremonial matcha", portion: "1 bowl + 1 cup tea" },
          midMorningSnack: { name: "Organic Edamame & Berries", meals: "Premium organic edamame pods served with a cup of fresh organic blackberries", portion: "100g edamame + 50g berries" },
          lunch: { name: "Tofu Steaks & Black Rice", meals: "Organic silken tofu steaks pan-grilled, served with black rice and organic seaweed salad", portion: "200g tofu + 1 cup rice" },
          eveningSnack: { name: "Shiitake Red Miso Soup", meals: "Red miso soup containing organic shiitake mushrooms, wakame seaweed, and microgreens", portion: "1 bowl" },
          dinner: { name: "Handmade Soba & Tempura Tofu", meals: "Artisanal buckwheat soba noodles in rich broth with organic baby spinach and seared tofu", portion: "1 large bowl" },
          preworkout: { name: "Organic Plum Onigiri", meals: "Organic brown rice ball with premium pickled umeboshi plum in nori", portion: "1 large onigiri" },
          postworkout: { name: "Pea Protein Matcha Shake", meals: "Organic pea protein powder shaken with cold organic soy milk and organic matcha powder", portion: "1 shake" }
        };
      } else { // moderate
        return {
          breakfast: { name: "Miso Soup & Rice with Egg", meals: "Standard miso soup with tofu cubes, steaming brown rice, nori sheets, and a side of soft boiled egg", portion: "1 bowl soup + 1 cup rice + 1 egg" },
          midMorningSnack: { name: "Salted Edamame", meals: "A bowl of steamed edamame with sea salt", portion: "100 grams" },
          lunch: { name: "Agedashi Tofu & Brown Rice", meals: "Lightly seared tofu cubes with daikon radish grates, served with brown rice", portion: "150g tofu + 1 cup rice" },
          eveningSnack: { name: "Wakame Seaweed Salad", meals: "Savory sesame marinated green seaweed salad", portion: "100 grams" },
          dinner: { name: "Millet Soba & Veggies", meals: "Soba noodles served with sautéed shiitake, carrots, and sweet green peas", portion: "1 bowl" },
          preworkout: { name: "Umeboshi Onigiri", meals: "Onigiri filled with pickled plum wrapped in nori", portion: "1 piece" },
          postworkout: { name: "Soy Protein Shake", meals: "1 scoop soy protein isolate blended with soy milk", portion: "1 shake" }
        };
      }
    } else { // non-veg
      if (bud === "low") {
        return {
          breakfast: { name: "Tamagoyaki & Rice", meals: "Japanese rolled omelet made with 3 eggs, served with white rice and green tea", portion: "3 eggs + 1 cup rice" },
          midMorningSnack: { name: "Edamame", meals: "Boiled edamame pods with salt", portion: "80 grams" },
          lunch: { name: "Chicken Teriyaki & Rice", meals: "Chicken breast strips in teriyaki sauce over steamed white rice", portion: "150g chicken + 1 cup rice" },
          eveningSnack: { name: "Miso Soup with Clams", meals: "Hot miso soup containing small local clams and green onions", portion: "1 cup" },
          dinner: { name: "Grilled Saba Mackerel", meals: "Grilled salted mackerel fillet served with white rice and sliced cucumber", portion: "150g mackerel + 1 cup rice" },
          preworkout: { name: "Salmon Onigiri", meals: "White rice ball stuffed with grilled salted salmon, wrapped in nori", portion: "1 piece" },
          postworkout: { name: "Egg Scramble", meals: "Scrambled egg whites with black pepper", portion: "4 egg whites" }
        };
      } else if (bud === "premium") {
        return {
          breakfast: { name: "Wild Salmon & Tamagoyaki", meals: "Sashimi-grade grilled wild salmon fillet, organic tamagoyaki, and premium brown rice", portion: "150g salmon + 2 eggs + rice" },
          midMorningSnack: { name: "Organic Edamame & Avocado", meals: "Steamed organic edamame pods served with half an organic avocado", portion: "100g edamame + 1/2 avocado" },
          lunch: { name: "Wagyu Beef Donburi bowl", meals: "Premium thin-sliced Wagyu beef simmered with onions, served over organic black rice", portion: "150g beef + 1 cup rice" },
          eveningSnack: { name: "Red Caviar & Cucumber Sunomono", meals: "Pickled cucumber salad topped with wild salmon roe (Ikura)", portion: "1 plate" },
          dinner: { name: "Wild Bluefin Tuna Sashimi", meals: "Fresh wild-caught bluefin tuna sashimi slices served with daikon radish and wasabi", portion: "180g sashimi + daikon" },
          preworkout: { name: "Premium Salmon Onigiri", meals: "Organic brown rice ball with wild-caught grilled salmon filling", portion: "1 large onigiri" },
          postworkout: { name: "Grass-fed Whey & Matcha", meals: "1 scoop grass-fed whey isolate blended with organic milk and ceremonial matcha", portion: "1 shake" }
        };
      } else { // moderate
        return {
          breakfast: { name: "Mackerel & Omelet Breakfast", meals: "Grilled saba mackerel fillet served with tamagoyaki, brown rice, and hot miso soup", portion: "1 fillet + 2 eggs + rice" },
          midMorningSnack: { name: "Boiled Edamame", meals: "Steamed edamame pods with sea salt", portion: "100 grams" },
          lunch: { name: "Chicken Teriyaki & Brown Rice", meals: "Pan-grilled chicken breast in teriyaki sauce served with brown rice and broccoli", portion: "150g chicken + 1 cup rice" },
          eveningSnack: { name: "Tuna Cucumber Salad", meals: "Canned flaked light tuna tossed with cucumbers and light soy dressing", portion: "120 grams tuna" },
          dinner: { name: "Grilled Salmon & Asparagus", meals: "150g salmon fillet grilled with garlic, served with asparagus spears", portion: "150g salmon + greens" },
          preworkout: { name: "Tuna Onigiri", meals: "Onigiri filled with flaked tuna and light mayo wrapped in nori", portion: "1 piece" },
          postworkout: { name: "Whey Protein shake", meals: "1 scoop whey isolate with water", portion: "1 shake" }
        };
      }
    }
  }

  if (loc === "mediterranean") {
    if (isVegan) {
      if (bud === "low") {
        return {
          breakfast: { name: "Tomato Cucumber Hummus Toast", meals: "Whole wheat toast topped with sliced cucumbers, tomatoes, and chickpea hummus", portion: "2 slices toast + 3 tbsp hummus" },
          midMorningSnack: { name: "Celery Sticks & Hummus", meals: "Celery sticks served with 2 tablespoons of classic chickpea hummus", portion: "3 sticks + 2 tbsp hummus" },
          lunch: { name: "Mediterranean Chickpea Salad", meals: "Boiled chickpeas tossed with chopped tomatoes, cucumbers, red onions, kalamata olives, and olive oil", portion: "1 large bowl" },
          eveningSnack: { name: "Green Olives", meals: "A small handful of cured green olives", portion: "40 grams" },
          dinner: { name: "Baked Falafel & Pita", meals: "Homemade baked chickpea falafels in a whole wheat pita pocket with cucumber slices and tahini", portion: "3 falafels in pita" },
          preworkout: { name: "Fresh Grapes", meals: "A small bunch of red or green grapes", portion: "100 grams" },
          postworkout: { name: "Pea Protein Shake", meals: "Pea protein isolate powder dissolved in water", portion: "1 shake" }
        };
      } else if (bud === "premium") {
        return {
          breakfast: { name: "Avocado & Tomato Sourdough", meals: "Organic sourdough toast topped with smashed organic avocado, heirloom tomatoes, and cold-pressed olive oil", portion: "2 slices toast + avocado" },
          midMorningSnack: { name: "Kalamata Olives & Walnut Bites", meals: "Organic kalamata olives served alongside raw organic walnuts", portion: "50g olives + 30g nuts" },
          lunch: { name: "Quinoa Chickpea Salad & Avocado", meals: "Organic chickpeas, quinoa, cherry tomatoes, and avocado salad tossed in cold-pressed olive oil", portion: "1 large plate" },
          eveningSnack: { name: "Organic Hummus & Seed Crackers", meals: "Organic garlic hummus served with gluten-free organic flaxseed crackers", portion: "3 tbsp hummus + 6 crackers" },
          dinner: { name: "Stuffed Bell Peppers & Tempeh", meals: "Organic bell peppers stuffed with quinoa, pine nuts, spinach, and grilled organic tempeh cubes", portion: "2 stuffed peppers" },
          preworkout: { name: "Fresh Organic Figs & Walnuts", meals: "3 fresh organic figs served with a handful of raw organic walnuts", portion: "3 figs + 10 walnuts" },
          postworkout: { name: "Premium Vegan Protein Shake", meals: "Organic plant protein blended with sugar-free organic almond milk", portion: "1 shake (35g protein)" }
        };
      } else { // moderate
        return {
          breakfast: { name: "Almond Yogurt & Walnuts", meals: "Standard unsweetened almond milk yogurt served with raw walnuts, a drizzle of maple syrup, and chia seeds", portion: "150g yogurt + 15g walnuts" },
          midMorningSnack: { name: "Olives & Cherry Tomatoes", meals: "A mix of black olives, cherry tomatoes, and cubed cucumber", portion: "1 cup mix" },
          lunch: { name: "Chickpea Salad with Olive Oil", meals: "Boiled chickpeas tossed with olives, cucumbers, cherry tomatoes, and cold-pressed olive oil", portion: "1 large bowl" },
          eveningSnack: { name: "Hummus with Cucumber Sticks", meals: "Creamy chickpea hummus with freshly cut cucumber slices", portion: "3 tbsp hummus + cucumber" },
          dinner: { name: "Falafel & Tabbouleh", meals: "Baked falafels served with fresh parsley-mint tabbouleh salad and tahini dressing", portion: "4 falafels + 1 plate salad" },
          preworkout: { name: "Fresh Figs & Grapes", meals: "2 fresh figs and a small handful of seedless grapes", portion: "100 grams" },
          postworkout: { name: "Pea Protein Shake", meals: "1 scoop pea protein isolate shaken with water", portion: "1 shake" }
        };
      }
    } else if (isVeg) { // vegetarian
      if (bud === "low") {
        return {
          breakfast: { name: "Tomato Cucumber Feta Toast", meals: "Whole wheat toast topped with sliced cucumbers, tomatoes, and crumbled feta cheese", portion: "2 slices toast + 30g feta" },
          midMorningSnack: { name: "Celery Sticks & Hummus", meals: "Celery sticks served with 2 tablespoons of classic chickpea hummus", portion: "3 sticks + 2 tbsp hummus" },
          lunch: { name: "Mediterranean Chickpea Salad", meals: "Boiled chickpeas tossed with chopped tomatoes, cucumbers, onions, and olive oil", portion: "1 large bowl" },
          eveningSnack: { name: "Green Olives", meals: "A small handful of cured green olives", portion: "40 grams" },
          dinner: { name: "Baked Falafel & Pita", meals: "Homemade baked chickpea falafels in a whole wheat pita pocket with cucumber slices", portion: "3 falafels in pita" },
          preworkout: { name: "Fresh Grapes", meals: "A small bunch of red or green grapes", portion: "100 grams" },
          postworkout: { name: "Pea Protein Shake", meals: "Pea protein isolate powder dissolved in water", portion: "1 shake" }
        };
      } else if (bud === "premium") {
        return {
          breakfast: { name: "Sheep Milk Greek Yogurt", meals: "Organic sheep milk Greek yogurt topped with organic walnuts, fresh figs, and organic raw honey", portion: "200g yogurt + 30g nuts" },
          midMorningSnack: { name: "Kalamata Olives & Goat Cheese", meals: "Organic kalamata olives served with organic goat cheese and cucumber rounds", portion: "50g olives + 50g cheese" },
          lunch: { name: "Quinoa Chickpea Salad & Avocado", meals: "Organic chickpeas, quinoa, cherry tomatoes, and avocado salad tossed in cold-pressed olive oil", portion: "1 large plate" },
          eveningSnack: { name: "Organic Hummus & Seed Crackers", meals: "Organic garlic hummus served with gluten-free organic flaxseed crackers", portion: "3 tbsp hummus + 6 crackers" },
          dinner: { name: "Stuffed Bell Peppers & Tempeh", meals: "Organic bell peppers stuffed with quinoa, pine nuts, spinach, and grilled organic tempeh", portion: "2 stuffed peppers" },
          preworkout: { name: "Fresh Organic Figs & Walnuts", meals: "3 fresh organic figs served with a handful of raw organic walnuts", portion: "3 figs + 10 walnuts" },
          postworkout: { name: "Premium Vegan Protein Shake", meals: "Organic plant protein blended with sugar-free organic almond milk", portion: "1 shake (35g protein)" }
        };
      } else { // moderate
        return {
          breakfast: { name: "Greek Yogurt & Walnuts", meals: "Standard low-fat Greek yogurt served with raw walnuts, a drizzle of honey, and chia seeds", portion: "150g yogurt + 15g walnuts" },
          midMorningSnack: { name: "Olives & Cherry Tomatoes", meals: "A mix of black olives, cherry tomatoes, and cubed cucumber", portion: "1 cup mix" },
          lunch: { name: "Chickpea Salad with Feta", meals: "Boiled chickpeas tossed with olives, cucumbers, cherry tomatoes, crumbled feta, and olive oil", portion: "1 large bowl" },
          eveningSnack: { name: "Hummus with Cucumber Sticks", meals: "Creamy chickpea hummus with freshly cut cucumber slices", portion: "3 tbsp hummus + cucumber" },
          dinner: { name: "Falafel & Tabbouleh", meals: "Baked falafels served with fresh parsley-mint tabbouleh salad and tzatziki sauce", portion: "4 falafels + 1 plate salad" },
          preworkout: { name: "Fresh Figs & Grapes", meals: "2 fresh figs and a small handful of seedless grapes", portion: "100 grams" },
          postworkout: { name: "Pea Protein Shake", meals: "1 scoop pea protein isolate shaken with water", portion: "1 shake" }
        };
      }
    } else { // non-veg
      if (bud === "low") {
        return {
          breakfast: { name: "Spinach Egg Scramble", meals: "3 eggs scrambled in olive oil with spinach leaves and chopped tomatoes", portion: "3 eggs + spinach" },
          midMorningSnack: { name: "Carrot Sticks & Tzatziki", meals: "Carrot sticks served with 2 tablespoons of yogurt-cucumber tzatziki sauce", portion: "1 cup" },
          lunch: { name: "Sardine Salad & Roti", meals: "Canned sardines in olive oil tossed with cucumber and tomatoes, served with 1 flatbread", portion: "1 can + 1 flatbread" },
          eveningSnack: { name: "Cured Olives", meals: "A small handful of black olives", portion: "40 grams" },
          dinner: { name: "Baked Tilapia & Vegetables", meals: "Baked tilapia fillet seasoned with oregano, garlic, and olive oil, served with green beans", portion: "150g fish + beans" },
          preworkout: { name: "Fresh Apple", meals: "1 local green or red apple", portion: "1 apple" },
          postworkout: { name: "Egg White Scramble", meals: "4 egg whites scrambled with salt and pepper", portion: "4 whites" }
        };
      } else if (bud === "premium") {
        return {
          breakfast: { name: "Organic Scramble with Goat Cheese", meals: "3 free-range organic eggs scrambled in premium olive oil with heirloom tomatoes and goat cheese", portion: "3 eggs + 30g cheese" },
          midMorningSnack: { name: "Wild Salmon Sashimi Bites", meals: "Small cuts of fresh wild-caught salmon sashimi served with lemon wedge", portion: "80 grams" },
          lunch: { name: "Organic Chicken Skewers & Quinoa", meals: "Free-range grilled chicken breast skewers served with organic quinoa salad and olive oil vinaigrette", portion: "180g chicken + 1 cup quinoa" },
          eveningSnack: { name: "Avocado & Prosciutto Wraps", meals: "Thin organic prosciutto slices wrapped around fresh avocado wedges", portion: "3 wraps" },
          dinner: { name: "Wild Sea Bass & Asparagus", meals: "Baked wild-caught sea bass fillet seasoned with fresh rosemary and lemon, served with roasted asparagus", portion: "180g fish + asparagus" },
          preworkout: { name: "Dates & Organic Walnuts", meals: "3 medjool dates served with a handful of raw organic walnuts", portion: "3 dates + 10 nuts" },
          postworkout: { name: "Grass-fed Whey & Almond Butter", meals: "1 scoop grass-fed whey isolate blended with organic almond milk and organic almond butter", portion: "1 shake" }
        };
      } else { // moderate
        return {
          breakfast: { name: "Spinach, Tomato & Feta Omelet", meals: "Double egg omelet cooked in olive oil with baby spinach, tomatoes, and crumbled feta", portion: "2 eggs + 30g feta" },
          midMorningSnack: { name: "Hummus & Carrot Sticks", meals: "Hummus dip served with raw carrot sticks", portion: "3 tbsp hummus + carrots" },
          lunch: { name: "Grilled Chicken & Greek Salad", meals: "Grilled chicken breast strips on top of a classic Greek salad with olives and feta cheese", portion: "150g chicken + salad" },
          eveningSnack: { name: "Canned Tuna & Cucumber", meals: "Canned light tuna in olive oil served on cucumber slices with black pepper", portion: "1 can tuna + cucumber" },
          dinner: { name: "Baked Salmon & Roast Veggies", meals: "150g salmon fillet baked with lemon and herbs, served with roasted zucchini and sweet potato", portion: "150g salmon + veggies" },
          preworkout: { name: "Fresh Figs", meals: "3 sweet fresh figs", portion: "3 medium figs" },
          postworkout: { name: "Whey Protein Shake", meals: "1 scoop whey protein shaken in water", portion: "1 shake" }
        };
      }
    }
  }

  // Western / Default location
  if (isVegan) {
    if (bud === "low") {
      return {
        breakfast: { name: "Oatmeal with Banana", meals: "Rolled oats cooked in water, served with sliced banana and a pinch of cinnamon", portion: "1 bowl" },
        midMorningSnack: { name: "Apple & Peanut Butter", meals: "Sliced local apple served with 1 tablespoon of peanut butter", portion: "1 apple + 1 tbsp butter" },
        lunch: { name: "Black Bean & Corn Salad", meals: "Canned black beans and sweet corn tossed with tomatoes, lime juice, and chopped cilantro", portion: "1 large plate" },
        eveningSnack: { name: "Celery with Peanut Butter", meals: "Fresh celery stalks filled with peanut butter", portion: "3 sticks + 1 tbsp butter" },
        dinner: { name: "Stuffed Sweet Potato", meals: "Baked sweet potato loaded with canned black beans and steamed spinach", portion: "1 large potato" },
        preworkout: { name: "Toast & Maple Syrup", meals: "1 slice of toasted whole wheat bread with a drizzle of pure maple syrup", portion: "1 slice" },
        postworkout: { name: "Soy Milk Smoothie", meals: "Unsweetened soy milk blended with 1 banana", portion: "1 glass" }
      };
    } else if (bud === "premium") {
      return {
        breakfast: { name: "Organic Steel-cut Oats", meals: "Steel-cut oats cooked in unsweetened macadamia milk, topped with organic blueberries and hemp seeds", portion: "1 bowl" },
        midMorningSnack: { name: "Organic Apple & Almond Butter", meals: "Organic Honeycrisp apple slices served with raw organic almond butter", portion: "1 apple + 2 tbsp butter" },
        lunch: { name: "Quinoa Avocado Salad", meals: "Organic royal white quinoa tossed with organic black beans, fresh avocado, organic corn, and cold-pressed lime dressing", portion: "1 large plate" },
        eveningSnack: { name: "Raw Nuts & Dark Chocolate", meals: "Organic raw walnuts and almonds served with 2 squares of 90% dark chocolate", portion: "40g nuts + 20g chocolate" },
        dinner: { name: "Baked Sweet Potato & Tempeh", meals: "Organic baked sweet potato served with pan-seared organic tempeh cubes and sautéed organic kale", portion: "1 sweet potato + 150g tempeh" },
        preworkout: { name: "Gluten-free Toast & Maple Syrup", meals: "Toasted gluten-free artisanal bread topped with organic maple syrup", portion: "1 slice toast" },
        postworkout: { name: "Organic Pea Protein & Berries", meals: "Premium organic pea protein powder blended with organic coconut water and fresh organic berries", portion: "1 shake" }
      };
    } else { // moderate
      return {
        breakfast: { name: "Oatmeal with Almond Milk & Berries", meals: "Rolled oats cooked in unsweetened almond milk, topped with fresh chia seeds and mixed berries", portion: "1 bowl" },
        midMorningSnack: { name: "Apple & Almond Butter", meals: "Sliced red apple served with creamy almond butter", portion: "1 apple + 1.5 tbsp butter" },
        lunch: { name: "Quinoa, Bean & Avocado Bowl", meals: "Steamed quinoa, black beans, half an avocado, and chopped tomatoes with lime dressing", portion: "1 bowl" },
        eveningSnack: { name: "Mixed Seeds & Nuts Platter", meals: "A handful of raw walnuts, almonds, pumpkin seeds, and sunflower seeds", portion: "40 grams" },
        dinner: { name: "Baked Sweet Potato & Beans", meals: "Sweet potato baked and stuffed with black beans, kale, and drizzled with creamy tahini sauce", portion: "1 large potato" },
        preworkout: { name: "Toast & Fruit Maple Syrup", meals: "Whole wheat toast topped with sliced banana and a drizzle of maple syrup", portion: "1 slice toast + fruit" },
        postworkout: { name: "Plant Protein shake", meals: "1 scoop vegan pea protein blended with unsweetened almond milk", portion: "1 shake" }
      };
    }
  } else if (isVeg) { // vegetarian
    if (bud === "low") {
      return {
        breakfast: { name: "Oatmeal with Banana", meals: "Rolled oats cooked in water, served with sliced banana and a pinch of cinnamon", portion: "1 bowl" },
        midMorningSnack: { name: "Apple & Peanut Butter", meals: "Sliced local apple served with 1 tablespoon of peanut butter", portion: "1 apple + 1 tbsp butter" },
        lunch: { name: "Black Bean & Corn Salad", meals: "Canned black beans and sweet corn tossed with tomatoes, lime juice, and chopped cilantro", portion: "1 large plate" },
        eveningSnack: { name: "Celery with Peanut Butter", meals: "Fresh celery stalks filled with peanut butter", portion: "3 sticks + 1 tbsp butter" },
        dinner: { name: "Stuffed Sweet Potato", meals: "Baked sweet potato loaded with canned black beans and steamed spinach", portion: "1 large potato" },
        preworkout: { name: "Toast & Honey", meals: "1 slice of toasted whole wheat bread with a drizzle of honey", portion: "1 slice" },
        postworkout: { name: "Soy Milk Smoothie", meals: "Unsweetened soy milk blended with 1 banana", portion: "1 glass" }
      };
    } else if (bud === "premium") {
      return {
        breakfast: { name: "Organic Steel-cut Oats", meals: "Steel-cut oats cooked in unsweetened macadamia milk, topped with organic blueberries and hemp seeds", portion: "1 bowl" },
        midMorningSnack: { name: "Organic Apple & Almond Butter", meals: "Organic Honeycrisp apple slices served with raw organic almond butter", portion: "1 apple + 2 tbsp butter" },
        lunch: { name: "Quinoa Avocado Salad", meals: "Organic royal white quinoa tossed with organic black beans, fresh avocado, organic corn, and cold-pressed lime dressing", portion: "1 large plate" },
        eveningSnack: { name: "Raw Nuts & Dark Chocolate", meals: "Organic raw walnuts and almonds served with 2 squares of 90% dark chocolate", portion: "40g nuts + 20g chocolate" },
        dinner: { name: "Baked Sweet Potato & Tempeh", meals: "Organic baked sweet potato served with pan-seared organic tempeh cubes and sautéed organic kale", portion: "1 sweet potato + 150g tempeh" },
        preworkout: { name: "Gluten-free Toast & Raw Honey", meals: "Toasted gluten-free artisanal bread topped with organic raw honeycomb", portion: "1 slice toast" },
        postworkout: { name: "Organic Pea Protein & Berries", meals: "Premium organic pea protein powder blended with organic coconut water and fresh organic berries", portion: "1 shake" }
      };
    } else { // moderate
      return {
        breakfast: { name: "Oatmeal with Almond Milk & Berries", meals: "Rolled oats cooked in unsweetened almond milk, topped with fresh chia seeds and mixed berries", portion: "1 bowl" },
        midMorningSnack: { name: "Apple & Almond Butter", meals: "Sliced red apple served with creamy almond butter", portion: "1 apple + 1.5 tbsp butter" },
        lunch: { name: "Quinoa, Bean & Avocado Bowl", meals: "Steamed quinoa, black beans, half an avocado, and chopped tomatoes with lime dressing", portion: "1 bowl" },
        eveningSnack: { name: "Mixed Nuts Platter", meals: "A handful of raw walnuts, almonds, and cashew nuts", portion: "40 grams" },
        dinner: { name: "Baked Sweet Potato & Beans", meals: "Sweet potato baked and stuffed with black beans, kale, and drizzled with creamy tahini sauce", portion: "1 large potato" },
        preworkout: { name: "Toast & Fruit Honey", meals: "Whole wheat toast topped with sliced banana and a drizzle of honey", portion: "1 slice toast + fruit" },
        postworkout: { name: "Plant Protein shake", meals: "1 scoop vegan pea protein blended with unsweetened almond milk", portion: "1 shake" }
      };
    }
  } else { // non-veg
    if (bud === "low") {
      return {
        breakfast: { name: "Scrambled Eggs & Toast", meals: "3 eggs scrambled in a small pat of butter, served with 2 slices whole wheat toast", portion: "3 eggs + 2 slices toast" },
        midMorningSnack: { name: "Apple & Peanut Butter", meals: "Sliced apple with peanut butter", portion: "1 apple + 1 tbsp butter" },
        lunch: { name: "Chicken & Brown Rice", meals: "150g boiled chicken breast diced and served with steamed brown rice and green beans", portion: "150g chicken + 1 cup rice" },
        eveningSnack: { name: "Canned Tuna Salad", meals: "Canned light tuna in water drained and tossed with celery and a touch of light mayo", portion: "1 can tuna" },
        dinner: { name: "Baked Tilapia & Broccoli", meals: "Tilapia fillet baked with salt and lemon, served with a large portion of steamed broccoli", portion: "150g tilapia + greens" },
        preworkout: { name: "Banana", meals: "1 ripe banana", portion: "1 banana" },
        postworkout: { name: "Scrambled Egg Whites", meals: "4 egg whites scrambled dry with salt and pepper", portion: "4 whites" }
      };
    } else if (bud === "premium") {
      return {
        breakfast: { name: "Organic Eggs & Sourdough Toast", meals: "2 poached organic free-range eggs served over fresh organic sliced avocado on artisanal sourdough toast", portion: "2 eggs + 1 slice toast" },
        midMorningSnack: { name: "Organic Apple & Almond Butter", meals: "Organic Honeycrisp apple slices with raw organic almond butter", portion: "1 apple + 2 tbsp butter" },
        lunch: { name: "Organic Chicken Breast & Asparagus", meals: "Organic skinless chicken breast grilled with herbs, served with roasted organic sweet potatoes and asparagus", portion: "180g chicken + sweet potato" },
        eveningSnack: { name: "Smoked Salmon & Cucumber Roll", meals: "Wild-caught smoked salmon slices wrapped around cucumber sticks with organic cream cheese", portion: "100 grams salmon" },
        dinner: { name: "Wild Salmon & Quinoa", meals: "Wild-caught baked salmon fillet served with organic steamed quinoa and organic roasted broccoli", portion: "180g salmon + quinoa" },
        preworkout: { name: "Organic Dates & Walnuts", meals: "3 medjool dates filled with almond butter and raw organic walnuts", portion: "3 dates" },
        postworkout: { name: "Grass-fed Iso-Whey Shake", meals: "1 scoop grass-fed whey isolate blended with cold organic coconut water and chia seeds", portion: "1 shake (35g protein)" }
      };
    } else { // moderate
      return {
        breakfast: { name: "Scrambled Eggs, Bacon & Toast", meals: "2 eggs scrambled, 2 slices turkey bacon, served with whole wheat toast", portion: "2 eggs + 2 slices bacon + toast" },
        midMorningSnack: { name: "Apple & Almond Butter", meals: "Sliced apple served with creamy almond butter", portion: "1 apple + 1.5 tbsp butter" },
        lunch: { name: "Chicken, Sweet Potato & Green Beans", meals: "150g grilled chicken breast served with roasted sweet potato cubes and steamed green beans", portion: "150g chicken + sweet potato" },
        eveningSnack: { name: "Tuna Cucumber Wraps", meals: "Canned light tuna in water drained and wrapped in romaine lettuce leaves with cucumber", portion: "1 can tuna + greens" },
        dinner: { name: "Baked Salmon & Quinoa", meals: "150g salmon fillet baked with lemon and dill, served with quinoa and steamed broccoli", portion: "150g salmon + quinoa" },
        preworkout: { name: "Banana & Peanut Butter", meals: "1 banana and 1 tablespoon of peanut butter", portion: "1 banana + 1 tbsp" },
        postworkout: { name: "Whey Protein Shake", meals: "1 scoop whey isolate blended with unsweetened almond milk", portion: "1 shake" }
      };
    }
  }
}

  // Determine Location code matching database
  let loc = "western";
  if (lowCountry.includes("india") || lowCountry.includes("bharat")) {
    if (lowRegion.includes("gujarat")) {
      loc = "gujarati";
    } else {
      loc = "indian";
    }
  } else if (lowCountry.includes("japan")) {
    loc = "japanese";
  } else if (lowCountry.includes("spain") || lowCountry.includes("mexico") || lowCountry.includes("greece") || lowCountry.includes("italy") || lowCountry.includes("mediterranean")) {
    loc = "mediterranean";
  }

  // Get raw meals template based on filters
  const rawPlan = getRawMeals(loc, dietType, budget);

  // Define healthy swaps/alternatives catalog for quick overlay rendering
  const alternativesCatalog = {
    "Bajra Thepla & Chutney": ["Whole wheat chapati", "Oats thepla", "Jowar rotla"],
    "Bajra Thepla & Coriander Chutney": ["Whole wheat chapati", "Oats thepla", "Jowar rotla"],
    "Almond Flour Methi Thepla": ["Coconut flour keto flatbread", "Gluten-free multigrain wrap"],
    "Oats & Methi Muthiya": ["Steamed idli", "Brown rice flour cakes"],
    "Spiced Buttermilk": ["Oat milk salted lassi", "Vegan soy curd chaas", "Lime water"],
    "Mint Cucumber Infusion": ["Oat milk salted lassi", "Vegan soy curd chaas", "Lime water"],
    "Sev Tameta Shaak & Rotla": ["Mixed vegetable curry & whole wheat roti", "Bhindi masala & jowar rotla"],
    "Sev Tameta Shaak & Bajra Rotla": ["Mixed vegetable curry & whole wheat roti", "Bhindi masala & jowar rotla"],
    "Quinoa Khichdi & Organic Shaak": ["Millet khichdi & sautéed organic spinach", "Brown rice dal khichdi"],
    "Gujarati Dal, Rice & Shaak": ["Yellow dal tadka, quinoa, cabbage sabzi", "Lentil soup, brown rice, bhindi fry"],
    "Gujarati Dal, Brown Rice & Shaak": ["Yellow dal tadka, quinoa, cabbage sabzi", "Lentil soup, brown rice, bhindi fry"],
    "Roasted Masala Chana": ["Sprouts salad", "Boiled peanut chaat"],
    "Quinoa Handvo with Seeds": ["Savoury oats pancake", "Lentil chilla"],
    "Vegetable Handvo": ["Savoury semolina cake", "Paneer stuffed pancake"],
    "Moong Dal Khichdi": ["Oats khichdi", "Boiled brown rice & dal"],
    "Moong Dal Khichdi with Oil": ["Oats khichdi", "Boiled brown rice & dal"],
    "Tofu Paneer Platter": ["Pan-seared tempeh steaks", "Grilled seitan cubes"],
    "Vegetable Khichdi & Kadhi": ["Millet vegetable khichdi & tomato soup", "Quinoa and lentil curry"],
    "Vegetable Khichdi & Tomato Soup": ["Millet vegetable khichdi & tomato soup", "Quinoa and lentil curry"],
    "Ripe Banana": ["Apple slices", "Fresh papaya bowl", "Pear"],
    "Organic Makhana in Ghee": ["Raw organic pumpkin seeds", "Baked walnut halves"],
    "Organic Makhana in Peanut Oil": ["Raw organic pumpkin seeds", "Baked walnut halves"],
    "Roasted Spicy Makhana": ["Roasted chickpeas", "Dry-roasted peanuts"],
    "Soya Chunks Stir-fry": ["Boiled black chickpeas", "Sautéeed tofu cubes"],
    "Premium Tofu Steaks": ["Seared tempeh blocks", "High-protein seitan cuts"],
    "Spiced Paneer Bhurji": ["Soya bhurji", "Tofu scramble", "Hard boiled egg scramble"],
    "Tofu Bhurji": ["Soya bhurji", "Paneer bhurji", "Hard boiled egg scramble"],
    
    "Onion Oats Poha": ["Rice poha with peanuts", "Savoury vegetable oats porridge"],
    "Oats Cheela with Paneer": ["Besan cheela with tofu stuffing", "Mung dal cheela"],
    "Oats Cheela with Tofu": ["Besan cheela with tofu stuffing", "Mung dal cheela"],
    "Vegetable Rava Upma": ["Quinoa vegetable upma", "Daliya (broken wheat) upma"],
    "Seasonal Guava/Apple": ["Orange slices", "Pineapple bowl"],
    "Avocado & Coconut Water": ["Fresh celery juice + chia seeds", "Lemonade + walnut bites"],
    "Fresh Coconut Water": ["Infused lemon water", "Green tea"],
    "Dal Tadka & Roti": ["Lentil soup + brown rice", "Chickpea curry + jowar flatbread"],
    "Dal Tadka & Bajra Roti": ["Lentil soup + brown rice", "Chickpea curry + jowar flatbread"],
    "Black Rice & Organic Dal": ["Quinoa + organic yellow lentil tadka", "Wild rice + mixed dal"],
    "Dal, Brown Rice & Bhindi": ["Moong dal curry + white rice + cabbage stirfry"],
    "Sprouts Chaat": ["Boiled black eyed peas salad", "Cucumber peanut chaat"],
    "Almond Butter Toast": ["Peanut butter toast", "Sunflower seed butter rice cake"],
    "Boiled Chickpea Salad": ["Sprouted mung bean salad", "Lentil and cucumber salad"],
    "Soya Chunk Curry & Rice": ["Red kidney beans (rajma) + brown rice", "Black chickpea curry + quinoa"],
    "Tofu Skewers & Quinoa": ["Tempeh cubes + wild rice", "Seared chickpea cakes + buckwheat"],
    "Paneer Tikka & Roti": ["Tofu tikka & gluten free wrap", "Soya chunks tikka + chapati"],
    "Tofu Tikka & Gluten Free Roti": ["Paneer tikka & gluten free wrap", "Soya chunks tikka + chapati"],
    "Banana & Peanut Butter": ["Apple + sunflower seed butter", "Pear + almond butter"],
    "Roasted Sattu Drink": ["Pea protein shake", "Soya milk shake"],
    "Whey Protein Shake": ["Pea protein isolate shake", "Soy protein isolate", "Collagen peptides"],
    "Organic Pea Protein Shake": ["Organic hemp protein shake", "Organic sacha inchi shake"],
    
    "Spiced Egg Bhurji": ["Tofu scramble", "Paneer bhurji", "Chicken shami kebab"],
    "Free-range Egg Avocado Toast": ["Tofu avocado toast", "Smoked salmon on gluten-free toast"],
    "Omelet & Toast": ["Egg white omelet + gluten free toast", "Savory chickpea flour crepe"],
    "Organic Berries & Nuts": ["Organic sunflower seeds & dried figs", "Organic mixed berries"],
    "Greek Yogurt": ["Coconut milk yogurt", "Soy milk yogurt", "Almond yogurt"],
    "Egg Curry & Brown Rice": ["Chicken breast + brown rice", "Tofu curry + quinoa"],
    "Grass-fed Chicken & Black Rice": ["Wild cod fillet + black rice", "Organic turkey breast + quinoa"],
    "Chicken Curry & Brown Rice": ["Egg curry + brown rice", "Turkey breast curry + rice"],
    "Almond Butter Celery": ["Peanut butter celery", "Hummus cucumber cups"],
    "Chicken Tikka Skewers": ["Turkey breast skewers", "Grilled paneer cubes", "Grilled fish cubes"],
    "Chicken Masala & Roti": ["Egg bhurji & roti", "Soya chunks dry roast & flatbread"],
    "Wild Salmon Tikka": ["Wild cod tikka", "Tandoori organic tofu blocks"],
    "Grilled Fish & Steamed Veggies": ["Baked chicken breast + steamed broccoli", "Grilled tofu + asparagus"],
    "Egg White Scramble": ["Soya protein shake", "Boiled chicken breast strips"],
    "Premium Iso-Whey Shake": ["Organic vegan plant protein", "Collagen peptides shake"],
    
    "Rice & Nattō Bowl": ["Brown rice + boiled black beans", "Quinoa + fermented soy chunks"],
    "Premium Matcha & Organic Nattō": ["Ceremonial green tea + organic tempeh slices"],
    "Miso Soup & Rice": ["Clear vegetable broth + brown rice"],
    "Steamed Edamame": ["Roasted pumpkin seeds", "Boiled green peas"],
    "Organic Edamame & Berries": ["Organic green peas + blueberries"],
    "Salted Edamame": ["Boiled black beans", "Roasted chickpeas"],
    "Teriyaki Tofu & White Rice": ["Teriyaki tempeh + brown rice", "Pan-fried tofu + quinoa"],
    "Tofu Steaks & Black Rice": ["Tempeh steaks + wild rice", "Seared chickpea steaks + black rice"],
    "Agedashi Tofu & Brown Rice": ["Sautéeed tofu cubes + brown rice", "Steamed edamame + rice"],
    "Cucumber Sunomono": ["Pickled radish salad", "Seaweed salad"],
    "Shiitake Red Miso Soup": ["Kelp broth with mixed mushrooms", "Wakame white miso soup"],
    "Wakame Seaweed Salad": ["Cucumber sesame salad", "Sautéeed spinach salad"],
    "Soba Noodle Soup": ["Rice noodles in miso broth", "Ramen noodles in vegetable dashi"],
    "Handmade Soba & Tempura Tofu": ["Gluten-free rice noodles + baked tofu", "Udon noodles + steamed edamame"],
    "Millet Soba & Veggies": ["Buckwheat soba + steamed broccoli & snap peas"],
    "Nori Rice Ball (Onigiri)": ["Brown rice ball with sesame seeds", "Quinoa onigiri"],
    "Organic Plum Onigiri": ["Organic brown rice ball with salt", "Organic millet onigiri"],
    "Umeboshi Onigiri": ["Umeboshi plum with quinoa ball"],
    "Soy Milk & Oats": ["Almond milk + chia seeds", "Oat milk + flaxseeds"],
    "Pea Protein Matcha Shake": ["Hemp protein matcha shake", "Soy protein shake"],
    "Soy Protein Shake": ["Pea protein shake", "Brown rice protein shake"],
    
    "Tamagoyaki & Rice": ["Scrambled eggs + brown rice", "Boiled eggs + white rice"],
    "Wild Salmon & Tamagoyaki": ["Grilled wild cod + organic scramble", "Grilled sea bass + rice"],
    "Mackerel & Omelet Breakfast": ["Grilled salmon + double egg scramble", "Baked cod + boiled eggs"],
    "Chicken Teriyaki & Rice": ["Pork tenderloin teriyaki + white rice", "Chicken breast stir-fry + rice"],
    "Wagyu Beef Donburi bowl": ["Sirloin steak slices + brown rice", "Grilled chicken donburi bowl"],
    "Chicken Teriyaki & Brown Rice": ["Turkey teriyaki + brown rice", "Grilled tofu teriyaki + rice"],
    "Miso Soup with Clams": ["Fish broth with green onions", "Clear chicken noodle soup"],
    "Red Caviar & Cucumber Sunomono": ["Smoked salmon strips + pickled radish"],
    "Tuna Cucumber Salad": ["Salmon cucumber salad", "Boiled chicken breast cubes + cucumber"],
    "Grilled Saba Mackerel": ["Grilled salted mackerel fillet served with white rice and sliced cucumber", "150g mackerel + 1 cup rice"],
    "Wild Bluefin Tuna Sashimi": ["Wild salmon sashimi", "Grilled red snapper fillet"],
    "Grilled Salmon & Asparagus": ["Grilled sea bass + asparagus", "Boiled chicken breast + broccoli"],
    "Salmon Onigiri": ["Tuna Mayo Onigiri", "Chicken Teriyaki Onigiri"],
    "Premium Salmon Onigiri": ["Wild-caught salmon onigiri with black rice"],
    "Tuna Onigiri": ["Katsu chicken onigiri", "Plum onigiri"],
    "Grass-fed Whey & Matcha": ["Organic plant protein + matcha shake"],
    
    "Tomato Cucumber Feta Toast": ["Hummus spread toast", "Avocado toast with sunflower seeds"],
    "Sheep Milk Greek Yogurt": ["Coconut milk Greek yogurt", "Almond milk yogurt"],
    "Greek Yogurt & Walnuts": ["Oat milk yogurt + sunflower seeds", "Soy yogurt + pumpkin seeds"],
    "Celery Sticks & Hummus": ["Cucumber slices + tzatziki", "Carrot sticks + guacamole"],
    "Kalamata Olives & Goat Cheese": ["Black olives + vegan almond cheese", "Green olives + walnuts"],
    "Olives & Cherry Tomatoes": ["Cucumber salad with lemon dressing", "Pickled onions + olives"],
    "Mediterranean Chickpea Salad": ["White bean and parsley salad", "Lentil cucumber salad"],
    "Quinoa Chickpea Salad & Avocado": ["Buckwheat chickpea salad + olive oil", "Black bean quinoa salad"],
    "Chickpea Salad with Feta": ["Chickpea salad + vegan cheese", "Kidney bean salad + olives"],
    "Green Olives": ["Black olives", "Pumpkin seeds"],
    "Organic Hummus & Seed Crackers": ["Organic hummus + celery sticks", "Guacamole + flaxseed crackers"],
    "Hummus with Cucumber Sticks": ["Tzatziki with carrot sticks", "Baba ganoush + cucumbers"],
    "Baked Falafel & Pita": ["Falafel salad wrap", "Chickpea patties in flatbread"],
    "Stuffed Bell Peppers & Tempeh": ["Stuffed tomatoes + grilled tofu", "Baked zucchini + chickpeas"],
    "Falafel & Tabbouleh": ["Lentil patties + green salad", "Baked falafel + Greek salad"],
    "Fresh Grapes": ["Fresh apple slices", "Seasonal pear"],
    "Fresh Organic Figs & Walnuts": ["Organic dates + pecans", "Organic dried plums + almonds"],
    "Fresh Figs & Grapes": ["Raisins + walnuts", "Fresh apple + almonds"],
    "Fresh Figs": ["Dried apricots", "Plum", "Peach"],
    "Canned Tuna & Cucumber": ["Canned salmon + cucumber", "Boiled chicken breast + cucumber"],
    "Baked Salmon & Roast Veggies": ["Baked cod + roasted zucchini", "Grilled turkey breast + vegetables"],
    "Baked Tilapia & Vegetables": ["Baked cod + steamed zucchini", "Seared tofu + green beans"],
    
    "Oatmeal with Banana": ["Rice porridge with banana", "Quinoa porridge + apple"],
    "Organic Steel-cut Oats": ["Organic quinoa flakes porridge", "Organic buckwheat porridge"],
    "Oatmeal with Almond Milk & Berries": ["Oats + soy milk + sliced apple"],
    "Apple & Peanut Butter": ["Pear + almond butter", "Banana + sunflower seed butter"],
    "Organic Apple & Almond Butter": ["Organic pear + pumpkin seed butter"],
    "Black Bean & Corn Salad": ["Chickpea cucumber salad", "Lentil tomato salad"],
    "Quinoa Avocado Salad": ["Brown rice avocado salad", "Millet and cucumber salad"],
    "Quinoa, Bean & Avocado Bowl": ["Quinoa + black beans + broccoli"],
    "Celery with Peanut Butter": ["Carrot sticks + hummus", "Cucumber + guacamole"],
    "Raw Nuts & Dark Chocolate": ["Sunflower seeds + organic cocoa nibs"],
    "Mixed Nuts Platter": ["Roasted pumpkin & sunflower seeds", "Walnuts"],
    "Stuffed Sweet Potato": ["Baked russet potato with beans", "Baked squash with lentils"],
    "Baked Sweet Potato & Tempeh": ["Baked potato + seared tofu", "Sweet potato + grilled chickpeas"],
    "Baked Sweet Potato & Beans": ["Baked potato + green lentils", "Sweet potato + black eyed peas"],
    "Toast & Honey": ["Rice cake + honey", "Oatcake + jam"],
    "Gluten-free Toast & Raw Honey": ["Gluten-free rice cake + maple syrup"],
    "Toast & Fruit Honey": ["Gluten free toast + sliced peach + honey"],
    "Soy Milk Smoothie": ["Almond milk + pea protein", "Oat milk + banana"],
    "Organic Pea Protein & Berries": ["Organic hemp protein + organic strawberries"],
    "Plant Protein shake": ["Pea protein shaken in water", "Soy protein shake"],
    
    "Scrambled Eggs & Toast": ["Tofu scramble + gluten free toast", "Paneer scramble + toast"],
    "Organic Eggs & Sourdough Toast": ["Poached eggs on gluten free toast", "Organic tofu scramble on toast"],
    "Scrambled Eggs, Bacon & Toast": ["Scrambled eggs + turkey bacon + rye toast"],
    "Chicken & Brown Rice": ["Turkey breast + brown rice", "Beef sirloin + brown rice", "Tofu + quinoa"],
    "Organic Chicken Breast & Asparagus": ["Organic turkey breast + roasted broccoli", "Wild cod + asparagus"],
    "Chicken, Sweet Potato & Green Beans": ["Turkey breast + sweet potato + green beans"],
    "Canned Tuna Salad": ["Canned salmon salad", "Canned chicken breast salad"],
    "Smoked Salmon & Cucumber Roll": ["Smoked turkey breast slice wrapped cucumber"],
    "Tuna Cucumber Wraps": ["Chicken breast lettuce wraps", "Turkey breast slices in romaine lettuce"],
    "Baked Tilapia & Broccoli": ["Baked cod + broccoli", "Grilled chicken breast + green beans"],
    "Wild Salmon & Quinoa": ["Wild halibut + quinoa", "Organic chicken breast + quinoa"],
    "Baked Salmon & Quinoa": ["Baked sea bass + quinoa", "Grilled chicken + quinoa"],
    "Organic Dates & Walnuts": ["Organic figs + raw pecans", "Organic dates + pumpkin seeds"],
    "Grass-fed Iso-Whey Shake": ["Organic pea protein shake", "Hemp protein isolate shake"]
  };

  // Helper function to apply allergy filtering
  function applyAllergyFilter(mealText, alternativesArray) {
    if (allergy === "None") return { text: mealText, alts: alternativesArray };
    let filteredText = mealText;
    let alts = [...alternativesArray];
    const list = allergy.toLowerCase();
    
    if (list.includes("nuts") || list.includes("peanut")) {
      filteredText = filteredText
        .replace(/almond milk/gi, "oat milk")
        .replace(/almonds/gi, "pumpkin seeds")
        .replace(/walnuts/gi, "sunflower seeds")
        .replace(/peanut butter/gi, "sunflower seed butter")
        .replace(/almond butter/gi, "pumpkin seed butter")
        .replace(/nuts/gi, "seeds")
        .replace(/pine nuts/gi, "sunflower seeds");
      alts = alts.map(a => a.replace(/almonds|peanut butter|walnuts|almond butter/gi, "pumpkin/sunflower seeds"));
    }
    
    if (list.includes("dairy") || list.includes("milk") || list.includes("lactose")) {
      filteredText = filteredText
        .replace(/Greek yogurt/gi, "Oat-based yogurt")
        .replace(/skimmed milk/gi, "soy milk")
        .replace(/milk/gi, "coconut milk")
        .replace(/paneer bhurji/gi, "tofu bhurji")
        .replace(/Paneer bhurjee/gi, "tofu scramble")
        .replace(/Paneer curry/gi, "Tempeh curry")
        .replace(/Paneer tikka/gi, "Tofu tikka")
        .replace(/Paneer/gi, "Tofu")
        .replace(/cheese/gi, "vegan cheese")
        .replace(/A2 Greek yogurt/gi, "Coconut yogurt")
        .replace(/curd/gi, "vegan soy curd")
        .replace(/Whey Protein/gi, "Pea/Brown Rice Protein");
      alts = alts.map(a => a.replace(/paneer|cheese|yogurt|whey/gi, "tofu/vegan alternatives"));
    }
    
    if (list.includes("gluten") || list.includes("wheat")) {
      filteredText = filteredText
        .replace(/whole wheat toast/gi, "gluten-free rice cakes")
        .replace(/whole wheat/gi, "gluten-free")
        .replace(/toast/gi, "gluten-free bread")
        .replace(/roti/gi, "gluten-free bajra roti")
        .replace(/Rotla/gi, "Jowar rotla")
        .replace(/Thepla/gi, "Gluten-free multigrain thepla")
        .replace(/Oats/gi, "Quinoa flakes")
        .replace(/oatmeal/gi, "quinoa porridge")
        .replace(/pita bread/gi, "gluten-free wraps")
        .replace(/soba noodles/gi, "gluten-free rice noodles")
        .replace(/Soba/gi, "Rice noodles")
        .replace(/flatbread/gi, "gluten-free wrap");
      alts = alts.map(a => a.replace(/wheat|roti|toast|pita/gi, "gluten-free alternatives"));
    }
    
    if (list.includes("soy") || list.includes("soya")) {
      filteredText = filteredText
        .replace(/soya chunks/gi, "chickpeas")
        .replace(/soy protein/gi, "pea protein")
        .replace(/soy milk/gi, "almond milk")
        .replace(/tofu/gi, "paneer")
        .replace(/tempeh/gi, "paneer");
      alts = alts.map(a => a.replace(/tofu|soy|soya/gi, "paneer/chickpeas"));
    }
    
    return { text: filteredText, alts: alts };
  }

  // Build the 7 meal plan structure in state.dietPlan
  const mealKeys = ["breakfast", "midMorningSnack", "lunch", "eveningSnack", "dinner", "preworkout", "postworkout"];
  state.dietPlan = {};

  mealKeys.forEach(key => {
    const rawMeal = rawPlan[key];
    
    // Distribute macros based on meal weight
    let weightPct = 0.25; // breakfast & lunch
    if (key === "midMorningSnack" || key === "eveningSnack") weightPct = 0.10;
    else if (key === "dinner") weightPct = 0.20;
    else if (key === "preworkout" || key === "postworkout") weightPct = 0.05;
    
    const mealCals = Math.round(calorieTarget * weightPct);
    const mealProtein = Math.round(targetProtein * weightPct);
    const mealCarbs = Math.round(targetCarbs * weightPct);
    const mealFat = Math.round(targetFats * weightPct);

    // Look up alternatives in catalog
    let rawAlts = alternativesCatalog[rawMeal.name] || ["Mixed fruits", "Lentil soup", "Boiled eggs"];
    
    // Apply Allergy filters
    const filter = applyAllergyFilter(rawMeal.meals, rawAlts);
    
    state.dietPlan[key] = {
      name: rawMeal.name,
      meals: filter.text,
      portion: rawMeal.portion,
      macros: {
        cals: mealCals,
        protein: `${mealProtein}g`,
        carbs: `${mealCarbs}g`,
        fat: `${mealFat}g`
      },
      alternatives: filter.alts
    };
  });
  
  // Render plan into active pane
  renderAIWorkoutView();
}

function renderAIWorkoutView() {
  const workoutDaysNav = document.getElementById("workoutDaysNav");
  const exerciseContainer = document.getElementById("exerciseContainer");
  const dietMealsGrid = document.getElementById("dietMealsGrid");
  
  if (!workoutDaysNav || !exerciseContainer || !dietMealsGrid) return;
  
  // 1. Build Day items
  workoutDaysNav.innerHTML = "";
  state.workoutPlan.forEach((plan, index) => {
    const item = document.createElement("div");
    item.className = `day-nav-item ${index === 0 ? 'active' : ''}`;
    item.setAttribute("data-day-idx", index);
    item.innerHTML = `
      <span class="day-nav-lbl">${plan.day}</span>
      <span class="day-nav-val">${plan.rest ? 'REST' : 'WORK'}</span>
    `;
    item.addEventListener("click", () => {
      document.querySelectorAll(".day-nav-item").forEach(el => el.classList.remove("active"));
      item.classList.add("active");
      showExercisesForDay(index);
    });
    workoutDaysNav.appendChild(item);
  });
  
  // Render day 1 default exercises
  showExercisesForDay(0);
  
  // 2. Render Target Calories & Macronutrients in Dashboard
  const dietCalTarget = document.getElementById("dietCalTarget");
  const dietProteinTarget = document.getElementById("dietProteinTarget");
  const dietCarbTarget = document.getElementById("dietCarbTarget");
  const dietFatTarget = document.getElementById("dietFatTarget");
  const dietWaterTarget = document.getElementById("dietWaterTarget");
  
  if (dietCalTarget) dietCalTarget.textContent = `${state.dietTargets.cals} kcal`;
  if (dietProteinTarget) dietProteinTarget.textContent = `${state.dietTargets.protein}g`;
  if (dietCarbTarget) dietCarbTarget.textContent = `${state.dietTargets.carbs}g`;
  if (dietFatTarget) dietFatTarget.textContent = `${state.dietTargets.fats}g`;
  if (dietWaterTarget) dietWaterTarget.textContent = `${state.dietTargets.water} ml`;
  
  // 3. Render Inline SVG Donut Chart
  const chartBox = document.getElementById("dietMacroChartBox");
  if (chartBox) {
    const p = state.dietTargets.protein;
    const c = state.dietTargets.carbs;
    const f = state.dietTargets.fats;
    const total = p + c + f;
    
    const pPct = total > 0 ? (p / total) * 100 : 30;
    const cPct = total > 0 ? (c / total) * 100 : 45;
    const fPct = total > 0 ? (f / total) * 100 : 25;
    
    const radius = 40;
    const circ = 2 * Math.PI * radius; // 251.32
    
    const pStroke = (pPct / 100) * circ;
    const cStroke = (cPct / 100) * circ;
    const fStroke = (fPct / 100) * circ;
    
    const pOffset = 0;
    const cOffset = pStroke;
    const fOffset = pStroke + cStroke;
    
    chartBox.innerHTML = `
      <svg width="120" height="120" viewBox="0 0 100 100" style="filter: drop-shadow(0 0 4px rgba(0,240,255,0.15));">
        <circle cx="50" cy="50" r="${radius}" fill="transparent" stroke="rgba(255,255,255,0.03)" stroke-width="12" />
        <!-- Protein (Rose) -->
        <circle cx="50" cy="50" r="${radius}" fill="transparent" stroke="var(--neon-rose)" stroke-width="12"
          stroke-dasharray="${pStroke} ${circ - pStroke}" stroke-dashoffset="${-pOffset}" transform="rotate(-90 50 50)" />
        <!-- Carbs (Green) -->
        <circle cx="50" cy="50" r="${radius}" fill="transparent" stroke="var(--neon-green)" stroke-width="12"
          stroke-dasharray="${cStroke} ${circ - cStroke}" stroke-dashoffset="${-cOffset}" transform="rotate(-90 50 50)" />
        <!-- Fats (Yellow) -->
        <circle cx="50" cy="50" r="${radius}" fill="transparent" stroke="#f59e0b" stroke-width="12"
          stroke-dasharray="${fStroke} ${circ - fStroke}" stroke-dashoffset="${-fOffset}" transform="rotate(-90 50 50)" />
        
        <text x="50%" y="46%" dominant-baseline="middle" text-anchor="middle" fill="var(--text-muted)" font-family="var(--font-cyber)" font-size="9" font-weight="700">
          DAILY TGT
        </text>
        <text x="50%" y="62%" dominant-baseline="middle" text-anchor="middle" fill="var(--neon-cyan)" font-family="var(--font-cyber)" font-size="11" font-weight="900">
          ${state.dietTargets.cals}
        </text>
      </svg>
    `;
  }
  
  // 4. Render Water Tracker Progress displays
  function updateWaterTrackerDisplay() {
    const target = state.dietTargets.water || 2500;
    const logged = state.userStats.dietWaterLogged || 0;
    const textEl = document.getElementById("loggedDietWater");
    if (textEl) {
      textEl.textContent = `${logged} / ${target} ml`;
      if (logged >= target) {
        textEl.style.color = "#10b981";
      } else {
        textEl.style.color = "white";
      }
    }
  }
  
  const btnLogWater = document.getElementById("btnLogWaterGlass");
  if (btnLogWater && !btnLogWater.dataset.listenerBound) {
    btnLogWater.dataset.listenerBound = "true";
    btnLogWater.addEventListener("click", () => {
      state.userStats.dietWaterLogged = (state.userStats.dietWaterLogged || 0) + 250;
      saveStateToLocalStorage();
      updateWaterTrackerDisplay();
      playSynthesizedTone("success");
      showToastNotification("💧 Hydration Logged", "Added +250ml water.");
    });
  }
  
  const btnResetWater = document.getElementById("btnResetDietWater");
  if (btnResetWater && !btnResetWater.dataset.listenerBound) {
    btnResetWater.dataset.listenerBound = "true";
    btnResetWater.addEventListener("click", () => {
      state.userStats.dietWaterLogged = 0;
      saveStateToLocalStorage();
      updateWaterTrackerDisplay();
      showToastNotification("💧 Water Reset", "Today's water logs cleared.");
    });
  }
  updateWaterTrackerDisplay();
  
  // 5. Bind Reminders alerts triggers
  const tglMeal = document.getElementById("tglMealReminders");
  if (tglMeal) {
    tglMeal.checked = !!state.reminders.meals;
    tglMeal.addEventListener("change", (e) => {
      state.reminders.meals = e.target.checked;
      saveStateToLocalStorage();
      if (state.reminders.meals) {
        showToastNotification("⏰ Meal Alerts Enabled", "Mealtimes reminders active. Prompts scheduled.");
      } else {
        showToastNotification("⏰ Meal Alerts Disabled", "Timely meal prompts cleared.");
      }
    });
  }
  
  const tglWater = document.getElementById("tglWaterReminders");
  if (tglWater) {
    tglWater.checked = !!state.reminders.water;
    tglWater.addEventListener("change", (e) => {
      state.reminders.water = e.target.checked;
      saveStateToLocalStorage();
      if (state.reminders.water) {
        showToastNotification("💧 Hydration Chime Active", "Hourly alerts enabled to help you reach your water goal.");
      } else {
        showToastNotification("💧 Hydration Chime Disabled", "Hourly hydration alerts cleared.");
      }
    });
  }
  
  // 6. Aggregated Grocery List engine
  function generateGroceryListFromPlan() {
    const basketBox = document.getElementById("groceryBasketList");
    if (!basketBox) return;
    
    basketBox.innerHTML = "";
    const ingredients = [];
    const keys = ["breakfast", "midMorningSnack", "lunch", "eveningSnack", "dinner", "preworkout", "postworkout"];
    
    keys.forEach(k => {
      if (state.dietPlan[k] && state.dietPlan[k].meals) {
        const text = state.dietPlan[k].meals;
        const parts = text.split(/, | served with | cooked in | stuffed with | and /gi);
        parts.forEach(p => {
          let clean = p.trim().replace(/^2 |^1 |^3 |^a |^glass of |^tablespoon of |^cup of /i, "").trim();
          if (clean.length > 2 && !clean.includes("minimal") && !clean.includes("gravy")) {
            clean = clean.charAt(0).toUpperCase() + clean.slice(1);
            if (!ingredients.includes(clean)) ingredients.push(clean);
          }
        });
      }
    });
    
    if (ingredients.length === 0) {
      basketBox.innerHTML = `<span style="color:var(--text-muted);">No items found.</span>`;
      return;
    }
    
    ingredients.forEach(item => {
      const div = document.createElement("label");
      div.className = "grocery-item-check";
      const isChecked = state.userStats.groceryBasketChecked && state.userStats.groceryBasketChecked.includes(item);
      
      div.innerHTML = `
        <input type="checkbox" ${isChecked ? 'checked' : ''} data-item="${item}">
        <span>${item}</span>
      `;
      
      if (isChecked) div.classList.add("checked");
      
      const cb = div.querySelector('input[type="checkbox"]');
      cb.addEventListener("change", (e) => {
        if (!state.userStats.groceryBasketChecked) state.userStats.groceryBasketChecked = [];
        if (e.target.checked) {
          div.classList.add("checked");
          if (!state.userStats.groceryBasketChecked.includes(item)) {
            state.userStats.groceryBasketChecked.push(item);
          }
        } else {
          div.classList.remove("checked");
          state.userStats.groceryBasketChecked = state.userStats.groceryBasketChecked.filter(i => i !== item);
        }
        saveStateToLocalStorage();
      });
      basketBox.appendChild(div);
    });
  }
  
  const btnGrocery = document.getElementById("btnGenerateGroceryList");
  if (btnGrocery && !btnGrocery.dataset.listenerBound) {
    btnGrocery.dataset.listenerBound = "true";
    btnGrocery.addEventListener("click", () => {
      generateGroceryListFromPlan();
      showToastNotification("🛒 Basket Compiled", "Grocery checklist updated.");
    });
  }
  generateGroceryListFromPlan();
  
  // 7. Render 7 Meal Cards in active Grid
  dietMealsGrid.innerHTML = "";
  const dietKeys = ["breakfast", "midMorningSnack", "lunch", "eveningSnack", "dinner", "preworkout", "postworkout"];
  
  dietKeys.forEach(key => {
    const meal = state.dietPlan[key];
    if (!meal) return;
    
    const card = document.createElement("div");
    card.className = "glass-card meal-card glow-cyan";
    
    let niceName = key.replace(/([A-Z])/g, " $1").trim().toUpperCase();
    
    card.innerHTML = `
      <div class="meal-badge" style="background:var(--grad-primary); color:white; font-size:0.6rem; padding:0.15rem 0.35rem; border-radius:4px; font-weight:bold; width:max-content; margin-bottom:0.5rem; text-transform:uppercase;">${niceName}</div>
      <h5 style="margin: 0.25rem 0; font-family:var(--font-cyber);">${meal.name}</h5>
      <p class="meal-ingredients" style="color:var(--text-main); font-size:0.85rem; line-height:1.4; margin-top:0.4rem; margin-bottom:0.25rem;">${meal.meals}</p>
      <div>
        <span class="meal-portion-tag">Portion: ${meal.portion}</span>
      </div>
      
      <div class="meal-macros" style="display:grid; grid-template-columns: repeat(4, 1fr); gap:0.25rem; font-size:0.7rem; color:var(--text-muted); background:rgba(0,0,0,0.15); padding:0.4rem; border-radius:6px; margin-top:0.75rem;">
        <div>Cals: <strong style="color:white; display:block;">${meal.macros.cals}kcal</strong></div>
        <div>Pro: <strong style="color:var(--neon-rose); display:block;">${meal.macros.protein}</strong></div>
        <div>Carb: <strong style="color:var(--neon-green); display:block;">${meal.macros.carbs}</strong></div>
        <div>Fat: <strong style="color:#f59e0b; display:block;">${meal.macros.fat}</strong></div>
      </div>
      
      <button class="swaps-btn" data-key="${key}">🔄 Swap / Alternatives</button>
      <div class="swaps-drawer" id="swaps-drawer-${key}">
        <span class="swaps-title">Available Swaps (Click to Swap)</span>
        <ul class="swaps-list">
          ${meal.alternatives.map(a => `<li class="swap-choice-item" data-val="${a}" style="cursor:pointer; padding: 0.35rem 0.5rem; border-radius: 4px; margin: 0.25rem 0; background: rgba(255,255,255,0.03); transition: all 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.08)'" onmouseout="this.style.background='rgba(255,255,255,0.03)'">${a}</li>`).join("")}
        </ul>
      </div>
    `;
    
    const sBtn = card.querySelector(".swaps-btn");
    const sDrawer = card.querySelector(`#swaps-drawer-${key}`);
    sBtn.addEventListener("click", () => {
      sDrawer.classList.toggle("open");
    });
    
    card.querySelectorAll(".swap-choice-item").forEach(choice => {
      choice.addEventListener("click", () => {
        const selected = choice.getAttribute("data-val");
        const oldName = meal.name;
        
        meal.name = selected;
        meal.meals = `Alternative meal option: ${selected}. Prepared according to active diet preferences.`;
        
        meal.alternatives = meal.alternatives.filter(a => a !== selected);
        if (!meal.alternatives.includes(oldName)) {
          meal.alternatives.push(oldName);
        }
        
        saveStateToLocalStorage();
        renderAIWorkoutView();
        showToastNotification("🔄 Meal Swapped", `Swapped to ${selected}`);
      });
    });
    
    dietMealsGrid.appendChild(card);
  });
}

function showExercisesForDay(index) {
  const container = document.getElementById("exerciseContainer");
  const demoFrame = document.getElementById("exerciseDemoFrame");
  if (!container) return;
  
  const plan = state.workoutPlan[index];
  container.innerHTML = "";
  
  const header = document.createElement("h4");
  header.style.fontFamily = "var(--font-cyber)";
  header.style.color = "var(--neon-cyan)";
  header.style.marginBottom = "1rem";
  header.textContent = `FOCUS: ${plan.focus}`;
  container.appendChild(header);
  
  if (plan.rest) {
    if (demoFrame) demoFrame.style.display = "none";
    const card = document.createElement("div");
    card.className = "glass-card";
    card.style.textAlign = "center";
    card.style.padding = "3rem 1rem";
    card.innerHTML = `
      <div style="font-size: 3rem; margin-bottom: 1rem;">ðŸ§˜</div>
      <h5>Rest & Recover</h5>
      <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.5rem;">
        Muscle growth happens outside the gym. Keep hydrated, complete static stretches, and prepare your body for tomorrow's performance.
      </p>
    `;
    container.appendChild(card);
    return;
  }
  
  plan.exercises.forEach((ex, idx) => {
    const div = document.createElement("div");
    div.className = "exercise-item";
    div.innerHTML = `
      <div class="exercise-meta">
        <h5>${ex.name}</h5>
        <p>Perform targeted reps with controlled tempo.</p>
      </div>
      <div class="exercise-stats">
        <span class="exercise-stat-chip">Sets: ${ex.sets}</span>
        <span class="exercise-stat-chip">Reps: ${ex.reps}</span>
      </div>
    `;
    
    div.addEventListener("click", () => {
      document.querySelectorAll(".exercise-item").forEach(el => el.classList.remove("glow-cyan"));
      div.classList.add("glow-cyan");
      renderExerciseAnimation(ex.name);
    });
    
    container.appendChild(div);
    
    if (idx === 0) {
      div.classList.add("glow-cyan");
    }
  });

  // Render animation for the first exercise initially
  if (plan.exercises.length > 0) {
    renderExerciseAnimation(plan.exercises[0].name);
  }

  // Append Complete Workout Button for training days
  const startSessionBtn = document.createElement("button");
  startSessionBtn.className = "btn btn-cyber-outline";
  startSessionBtn.style.marginTop = "1rem";
  startSessionBtn.style.width = "100%";
  startSessionBtn.id = "btnStartWorkoutSession";
  startSessionBtn.innerHTML = "⏱️ Start Active Session (Auto-Music Sync)";
  startSessionBtn.addEventListener("click", () => {
    startActiveWorkoutSession(plan.focus);
  });
  container.appendChild(startSessionBtn);

  const completeBtn = document.createElement("button");
  completeBtn.className = "btn btn-primary";
  completeBtn.style.marginTop = "1.5rem";
  completeBtn.style.width = "100%";
  completeBtn.id = "btnCompleteWorkout";
  completeBtn.innerHTML = "💪 Log Workout as Completed";
  completeBtn.addEventListener("click", () => {
    completeTodayWorkout(plan.focus);
  });
  container.appendChild(completeBtn);
}

function updateWorkoutStreak(isNewWorkout) {
  if (!state.userStats.workoutDates) {
    state.userStats.workoutDates = [];
  }
  
  const now = new Date();
  const offset = now.getTimezoneOffset();
  const localDate = new Date(now.getTime() - (offset * 60 * 1000));
  const todayStr = localDate.toISOString().split('T')[0]; // YYYY-MM-DD
  
  // Calculate yesterday's date string
  const yesterday = new Date(localDate);
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split('T')[0];
  
  const lastDate = state.userStats.lastWorkoutDate;
  
  if (isNewWorkout) {
    if (lastDate === todayStr) {
      // Already logged a workout today, do not increase streak
    } else if (lastDate === yesterdayStr) {
      state.userStats.streak = (state.userStats.streak || 0) + 1;
      state.userStats.lastWorkoutDate = todayStr;
      if (!state.userStats.workoutDates.includes(todayStr)) {
        state.userStats.workoutDates.push(todayStr);
      }
    } else {
      state.userStats.streak = 1;
      state.userStats.lastWorkoutDate = todayStr;
      if (!state.userStats.workoutDates.includes(todayStr)) {
        state.userStats.workoutDates.push(todayStr);
      }
    }
  } else {
    if (!lastDate) {
      state.userStats.streak = 0;
    } else if (lastDate !== todayStr && lastDate !== yesterdayStr) {
      state.userStats.streak = 0;
    }
  }
  
  const streakValEl = document.getElementById("streakVal");
  const headerStreakVal = document.getElementById("headerStreakVal");
  if (streakValEl) streakValEl.textContent = `${state.userStats.streak} Days`;
  if (headerStreakVal) headerStreakVal.textContent = `${state.userStats.streak} Days`;
  
  saveStateToLocalStorage();
}

function completeTodayWorkout(focusName) {
  playSynthesizedTone("success");
  
  state.userStats.workoutsCompleted = (state.userStats.workoutsCompleted || 0) + 1;
  updateWorkoutStreak(true);
  state.avatar.currentExpression = "celebrating";
  
  let achUnlocked = false;
  
  if (state.userStats.streak >= 7) {
    const ach = state.userStats.achievements.find(a => a.id === "streak_7");
    if (ach && !ach.unlocked) {
      ach.unlocked = true;
      achUnlocked = true;
      showToastNotification("ðŸ”¥ Achievement: 7-Day Streak!", "Unlocked Gold Dreadlocks!");
      addXP(100);
    }
  }
  
  if (state.userStats.workoutsCompleted >= 30) {
    const ach = state.userStats.achievements.find(a => a.id === "workouts_30");
    if (ach && !ach.unlocked) {
      ach.unlocked = true;
      achUnlocked = true;
      showToastNotification("ðŸ‹ï¸ Achievement: Sweat Machine!", "Unlocked Apex Tracksuit!");
      addXP(150);
    }
  }
  
  const startWeight = parseFloat(state.onboarding.weight) || 75;
  const targetWeight = parseFloat(state.onboarding.targetWeight) || 70;
  const step = (startWeight - targetWeight) / 6;
  const currentWeight = parseFloat((startWeight - step * 2.5).toFixed(1));
  const lost = Math.abs(startWeight - currentWeight);
  
  if (lost >= 5) {
    const ach = state.userStats.achievements.find(a => a.id === "weight_5");
    if (ach && !ach.unlocked) {
      ach.unlocked = true;
      achUnlocked = true;
      showToastNotification("⚖️ Achievement: 5KG Transformation!", "Unlocked special badge!");
      addXP(150);
    }
  }
  
  if (currentWeight === targetWeight || Math.abs(currentWeight - targetWeight) < 0.2) {
    const ach = state.userStats.achievements.find(a => a.id === "goal_reached");
    if (ach && !ach.unlocked) {
      ach.unlocked = true;
      achUnlocked = true;
      showToastNotification("ðŸ† Achievement: Peak Condition!", "Unlocked Gold Smartwatch!");
      addXP(200);
    }
  }
  
  addXP(100);
  
  saveStateToLocalStorage();
  renderAvatar();
  renderAvatarEditorOptions();
  
  const streakValEl = document.getElementById("streakVal");
  const headerStreakVal = document.getElementById("headerStreakVal");
  if (streakValEl) streakValEl.textContent = `${state.userStats.streak} Days`;
  if (headerStreakVal) headerStreakVal.textContent = `${state.userStats.streak} Days`;
  
  showToastNotification("Workout Logged! 💪", "Earned +100 XP. Your avatar is celebrating!");
  
  updateCoachBubble(
    "Workout Completed! 🎉",
    `Incredible intensity on that ${focusName} session! You've logged ${state.userStats.workoutsCompleted} workouts total. Your digital twin is celebrating your progress!`
  );
  
  setTimeout(() => {
    state.avatar.currentExpression = "neutral";
    renderAvatar();
    renderAvatarEditorOptions();
  }, 5000);
}

// ==========================================
// 11. INTERACTIVE CUSTOM SVG AVATAR SYSTEM
// ==========================================
// Helper to update the dashboard coach dialogue bubble
function updateCoachBubble(title, text) {
  const titleEl = document.getElementById("coachBubbleTitle");
  const textEl = document.getElementById("coachBubbleText");
  if (titleEl && textEl) {
    titleEl.textContent = title;
    textEl.textContent = text;
  }
}

// Generates Snapchat Bitmoji/WhatsApp style full-body SVG templates
// Helper to shade colors for 3D depth
function getShadeColor(color, percent) {
  if (!color || color[0] !== '#') return color;
  let num = parseInt(color.replace("#",""), 16),
      amt = Math.round(2.55 * percent),
      R = (num >> 16) + amt,
      G = (num >> 8 & 0x00FF) + amt,
      B = (num & 0x0000FF) + amt;
  return "#" + (0x1000000 + (R<255?R<0?0:R:255)*0x10000 + (G<255?G<0?0:G:255)*0x100 + (B<255?B<0?0:B:255)).toString(16).slice(1);
}

function getOutfitBaseColor(outfit) {
  switch (outfit) {
    case "outfit-gym": return "#2563eb"; // Blue
    case "outfit-casual": return "#f97316"; // Orange
    case "outfit-hoodie": return "#4b5563"; // Gray
    case "outfit-tracksuit": return "#1e293b"; // Dark Slate
    case "outfit-jersey": return "#10b981"; // Emerald
    case "outfit-fit-tank": return "#ff005b"; // Red-pink
    case "outfit-legendary": return "#ffd700"; // Gold
    default: return "#4b5563";
  }
}

// Generates Snapchat Bitmoji/WhatsApp style full-body SVG templates
function getAvatarSVGContent(isWaving = false) {
  const skin = state.avatar.skinTone || "#ffcd94";
  const hair = state.avatar.hairStyle || "hair-short-crop";
  const hairColor = state.avatar.hairColor || "#111111";
  const outfit = state.avatar.outfit || "outfit-gym";
  const acc = state.avatar.accessory || "acc-none";
  
  // Custom Granular Settings
  const faceShape = state.avatar.faceShape || "face-round";
  const eyeShape = state.avatar.eyeShape || "eyes-oval";
  const eyeColor = state.avatar.eyeColor || "#5c3816";
  const eyebrows = state.avatar.eyebrows || "eyebrows-normal";
  const nose = state.avatar.nose || "nose-straight";
  const lips = state.avatar.lips || "lips-neutral";
  const freckles = state.avatar.freckles || false;
  const facialHair = state.avatar.facialHair || "none";
  const facialHairColor = state.avatar.facialHairColor || "#111111";
  const glasses = state.avatar.glasses || "glasses-none";
  const earrings = state.avatar.earrings || "earring-none";
  const watch = state.avatar.watch || "none";
  const cap = state.avatar.cap || "none";
  const shoes = state.avatar.shoes || "shoes-gym";
  
  // Dynamic Mood Expressions mapping
  const expr = state.avatar.currentExpression || state.onboarding.mood || "neutral";
  
  // Posture setup based on daily streak consistency
  const streak = state.userStats.streak || 0;
  const isSlouched = streak < 3;
  const headY = isSlouched ? 124 : 120;
  const neckY = isSlouched ? 152 : 150;
  const neckH = isSlouched ? 30 : 34;
  
  // Dynamic Mouth Paths based on expressions & selected lip shape
  let mouthPath = `M95,${headY + 20} Q110,${headY + 23} 125,${headY + 20}`; // neutral
  if (expr === "happy" || expr === "celebrating" || expr === "proud") {
    if (lips === "lips-full") {
      mouthPath = `M94,${headY + 18} Q110,${headY + 36} 126,${headY + 18} Q110,${headY + 22} 94,${headY + 18} Z`; // smiling full lips
    } else {
      mouthPath = `M95,${headY + 18} Q110,${headY + 34} 125,${headY + 18} Z`; // smiling open mouth
    }
  } else if (expr === "excited") {
    mouthPath = `M93,${headY + 16} Q110,${headY + 38} 127,${headY + 16} Z`; // wide open excitement
  } else if (expr === "motivated" || expr === "focused") {
    mouthPath = `M96,${headY + 20} Q110,${headY + 24} 124,${headY + 18}`; // smirk/focus
  } else if (expr === "sad") {
    mouthPath = `M95,${headY + 25} Q110,${headY + 15} 125,${headY + 25}`; // frown
  } else if (expr === "stressed" || expr === "tired") {
    mouthPath = `M98,${headY + 22} L122,${headY + 22}`; // flat line
  } else if (expr === "beast-mode") {
    mouthPath = `M94,${headY + 22} Q110,${headY + 16} 126,${headY + 22} Q110,${headY + 28} 94,${headY + 22} Z`; // determined grit smile
  } else if (expr === "exhausted") {
    mouthPath = `M98,${headY + 18} Q110,${headY + 34} 122,${headY + 18} Z`; // panting mouth
  }
  
  // Lip color overlay if full/thin lips selected or panting tongue needed
  let lipOverlay = "";
  if (expr === "exhausted") {
    lipOverlay = `<path d="M104,${headY + 23} Q110,${headY + 33} 116,${headY + 23} Z" fill="#ff4d6d" stroke="#111" stroke-width="1.2" />`;
  } else if (lips === "lips-full" && expr !== "happy" && expr !== "excited" && expr !== "beast-mode") {
    lipOverlay = `
      <path d="M94,${headY + 20} Q110,${headY + 25} 126,${headY + 20}" stroke="#e11d48" stroke-width="2.5" fill="none" opacity="0.65" />
      <path d="M94,${headY + 20} Q110,${headY + 16} 126,${headY + 20}" stroke="#e11d48" stroke-width="1.2" fill="none" opacity="0.65" />
    `;
  } else if (lips === "lips-thin" && expr !== "beast-mode") {
    lipOverlay = `<path d="M95,${headY + 20} Q110,${headY + 22} 125,${headY + 20}" stroke="#fda4af" stroke-width="1.2" fill="none" />`;
  }

  // Dynamic floating sweat drops for exhausted state
  let sweatSvg = "";
  if (expr === "exhausted") {
    sweatSvg = `
      <!-- sweat drop flying near left temple -->
      <path d="M76,${headY - 20} C72,${headY - 15} 72,${headY - 10} 76,${headY - 8} C80,${headY - 10} 80,${headY - 15} 76,${headY - 20}" fill="#38bdf8" stroke="#1d4ed8" stroke-width="0.8" opacity="0.85" />
      <!-- sweat drop flying near right temple -->
      <path d="M144,${headY - 18} C140,${headY - 13} 140,${headY - 8} 144,${headY - 6} C148,${headY - 8} 148,${headY - 13} 144,${headY - 18}" fill="#38bdf8" stroke="#1d4ed8" stroke-width="0.8" opacity="0.85" />
    `;
  }
  
  // Eye shapes rendering
  let eyeLeft = `<circle cx="95" cy="${headY - 5}" r="4.5" fill="#111" /><circle cx="96" cy="${headY - 6.2}" r="1.5" fill="#fff" />`;
  let eyeRight = `<circle cx="125" cy="${headY - 5}" r="4.5" fill="#111" /><circle cx="126" cy="${headY - 6.2}" r="1.5" fill="#fff" />`;
  let eyebrowLeft = `M85,${headY - 15} L105,${headY - 15}`;
  let eyebrowRight = `M115,${headY - 15} L135,${headY - 15}`;
  
  if (expr === "happy" || expr === "celebrating" || expr === "proud") {
    eyeLeft = `<path d="M88,${headY - 2} Q95,${headY - 10} 102,${headY - 2}" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round" />`;
    eyeRight = `<path d="M118,${headY - 2} Q125,${headY - 10} 132,${headY - 2}" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round" />`;
    eyebrowLeft = `M85,${headY - 18} Q95,${headY - 25} 105,${headY - 18}`;
    eyebrowRight = `M115,${headY - 18} Q125,${headY - 25} 135,${headY - 18}`;
  } else if (expr === "motivated" || expr === "focused") {
    eyebrowLeft = `M85,${headY - 14} L105,${headY - 20}`;
    eyebrowRight = `M115,${headY - 20} L135,${headY - 14}`;
  } else if (expr === "sad") {
    eyebrowLeft = `M85,${headY - 20} L105,${headY - 14}`;
    eyebrowRight = `M115,${headY - 14} L135,${headY - 20}`;
  } else if (expr === "stressed" || expr === "tired") {
    eyeLeft = `<line x1="88" y1="${headY - 5}" x2="102" y2="${headY - 5}" stroke="#111" stroke-width="3" stroke-linecap="round" />`;
    eyeRight = `<line x1="118" y1="${headY - 5}" x2="132" y2="${headY - 5}" stroke="#111" stroke-width="3" stroke-linecap="round" />`;
  } else if (expr === "beast-mode") {
    eyebrowLeft = `M85,${headY - 12} L105,${headY - 19}`;
    eyebrowRight = `M115,${headY - 19} L135,${headY - 12}`;
  } else if (expr === "exhausted") {
    eyeLeft = `<path d="M91,${headY - 9} L99,${headY - 1} M99,${headY - 9} L91,${headY - 1}" stroke="#111" stroke-width="2.5" stroke-linecap="round" />`;
    eyeRight = `<path d="M121,${headY - 9} L129,${headY - 1} M129,${headY - 9} L121,${headY - 1}" stroke="#111" stroke-width="2.5" stroke-linecap="round" />`;
    eyebrowLeft = `M85,${headY - 18} L105,${headY - 13}`;
    eyebrowRight = `M115,${headY - 13} L135,${headY - 18}`;
  }
  
  // Custom eye shapes
  let eyesIrisSvg = "";
  if (expr === "beast-mode") {
    let innerEyeRx = 9;
    let innerEyeRy = 5.5;
    eyesIrisSvg = `
      <g class="eye-group">
        <!-- Left Eye outer -->
        <ellipse cx="95" cy="${headY - 5}" rx="${innerEyeRx}" ry="${innerEyeRy}" fill="#fff" stroke="#111" stroke-width="1.2" />
        <circle cx="95" cy="${headY - 5}" r="5.2" fill="var(--neon-cyan)" filter="drop-shadow(0 0 3px var(--neon-cyan))" />
        <circle cx="95" cy="${headY - 5}" r="2.2" fill="#111" />
        <circle cx="93.5" cy="${headY - 6.5}" r="1" fill="#fff" />
        
        <!-- Right Eye outer -->
        <ellipse cx="125" cy="${headY - 5}" rx="${innerEyeRx}" ry="${innerEyeRy}" fill="#fff" stroke="#111" stroke-width="1.2" />
        <circle cx="125" cy="${headY - 5}" r="5.2" fill="var(--neon-cyan)" filter="drop-shadow(0 0 3px var(--neon-cyan))" />
        <circle cx="125" cy="${headY - 5}" r="2.2" fill="#111" />
        <circle cx="123.5" cy="${headY - 6.5}" r="1" fill="#fff" />
      </g>
    `;
  } else if (expr !== "happy" && expr !== "celebrating" && expr !== "proud" && expr !== "stressed" && expr !== "tired" && expr !== "exhausted") {
    let innerEyeRx = 9;
    let innerEyeRy = 6;
    if (eyeShape === "eyes-round") {
      innerEyeRx = 8.5;
      innerEyeRy = 8.5;
    } else if (eyeShape === "eyes-hooded") {
      innerEyeRx = 9.5;
      innerEyeRy = 4.5;
    } else if (eyeShape === "eyes-almond") {
      innerEyeRx = 10;
      innerEyeRy = 5.2;
    }
    
    eyesIrisSvg = `
      <g class="eye-group">
        <!-- Left Eye outer -->
        <ellipse cx="95" cy="${headY - 5}" rx="${innerEyeRx}" ry="${innerEyeRy}" fill="#fff" stroke="#111" stroke-width="1.2" />
        <circle cx="95" cy="${headY - 5}" r="5.2" fill="${eyeColor}" />
        <circle cx="95" cy="${headY - 5}" r="2.8" fill="#111" />
        <circle cx="93" cy="${headY - 6.8}" r="1.3" fill="#fff" />
        <circle cx="96.5" cy="${headY - 3.8}" r="0.6" fill="#fff" />
        
        <!-- Right Eye outer -->
        <ellipse cx="125" cy="${headY - 5}" rx="${innerEyeRx}" ry="${innerEyeRy}" fill="#fff" stroke="#111" stroke-width="1.2" />
        <circle cx="125" cy="${headY - 5}" r="5.2" fill="${eyeColor}" />
        <circle cx="125" cy="${headY - 5}" r="2.8" fill="#111" />
        <circle cx="123" cy="${headY - 6.8}" r="1.3" fill="#fff" />
        <circle cx="126.5" cy="${headY - 3.8}" r="0.6" fill="#fff" />
      </g>
    `;
  } else {
    eyesIrisSvg = `
      <g class="eye-group">
        ${eyeLeft}
        ${eyeRight}
      </g>
    `;
  }
  
  // Face shapes rendering with 3D gradient
  let faceSvg = `<circle cx="110" cy="${headY}" r="40" fill="url(#skin3D)" stroke="#111" stroke-width="2" />`;
  if (faceShape === "face-oval") {
    faceSvg = `<ellipse cx="110" cy="${headY}" rx="36" ry="43" fill="url(#skin3D)" stroke="#111" stroke-width="2" />`;
  } else if (faceShape === "face-square") {
    faceSvg = `<rect x="73" y="${headY - 40}" width="74" height="80" rx="14" fill="url(#skin3D)" stroke="#111" stroke-width="2" />`;
  } else if (faceShape === "face-angular") {
    faceSvg = `<polygon points="110,${headY - 44} 147,${headY - 15} 142,${headY + 30} 110,${headY + 45} 78,${headY + 30} 73,${headY - 15}" fill="url(#skin3D)" stroke="#111" stroke-width="2" />`;
  } else if (faceShape === "face-heart") {
    faceSvg = `<path d="M110,${headY + 44} C60,${headY + 15} 65,${headY - 40} 110,${headY - 32} C155,${headY - 40} 160,${headY + 15} 110,${headY + 44} Z" fill="url(#skin3D)" stroke="#111" stroke-width="2" />`;
  } else if (faceShape === "face-diamond") {
    faceSvg = `<polygon points="110,${headY - 44} 146,${headY} 110,${headY + 44} 74,${headY}" fill="url(#skin3D)" stroke="#111" stroke-width="2" />`;
  }
  
  // Nose shapes rendering
  let noseSvg = `<path d="M110,${headY} L110,${headY + 12} L114,${headY + 12}" fill="none" stroke="#111" stroke-width="1.8" stroke-linecap="round" />`;
  if (nose === "nose-button") {
    noseSvg = `<circle cx="110" cy="${headY + 8}" r="3" fill="#111" />`;
  } else if (nose === "nose-pointed") {
    noseSvg = `<path d="M107,${headY} L110,${headY + 10} L115,${headY}" fill="none" stroke="#111" stroke-width="1.8" />`;
  } else if (nose === "nose-wide") {
    noseSvg = `<path d="M106,${headY + 7} C106,${headY + 7} 107,${headY + 11} 110,${headY + 11} C113,${headY + 11} 114,${headY + 7} 114,${headY + 7} M106,${headY + 11} L114,${headY + 11}" fill="none" stroke="#111" stroke-width="1.8" stroke-linecap="round" />`;
  }
  
  // Eyebrows styling
  let eyebrowSvg = `
    <path d="${eyebrowLeft}" fill="none" stroke="#111" stroke-width="${eyebrows === 'eyebrows-bushy' ? '3.5' : eyebrows === 'eyebrows-thin' ? '1' : '2'}" stroke-linecap="round" />
    <path d="${eyebrowRight}" fill="none" stroke="#111" stroke-width="${eyebrows === 'eyebrows-bushy' ? '3.5' : eyebrows === 'eyebrows-thin' ? '1' : '2'}" stroke-linecap="round" />
  `;
  
  // Freckles mapping
  let frecklesSvg = "";
  if (freckles) {
    frecklesSvg = `
      <g fill="#8b5a2b" opacity="0.6">
        <circle cx="88" cy="${headY + 6}" r="1" />
        <circle cx="90" cy="${headY + 8}" r="1" />
        <circle cx="93" cy="${headY + 7}" r="0.8" />
        <circle cx="127" cy="${headY + 6}" r="1" />
        <circle cx="130" cy="${headY + 8}" r="1" />
        <circle cx="125" cy="${headY + 7}" r="0.8" />
      </g>
    `;
  }
  
  // Facial Hair mapping
  let beardSvg = "";
  if (facialHair === "facial-hair-stubble") {
    beardSvg = `<path d="M75,${headY + 10} C75,${headY + 50} 145,${headY + 50} 145,${headY + 10}" fill="none" stroke="#777" stroke-width="3" stroke-dasharray="2,2" opacity="0.5" />`;
  } else if (facialHair === "facial-hair-beard") {
    beardSvg = `<path d="M74,${headY} C74,${headY + 55} 146,${headY + 55} 146,${headY} C146,${headY} 135,${headY + 50} 110,${headY + 50} C85,${headY + 50} 74,${headY} 74,${headY} Z" fill="${facialHairColor}" stroke="#111" stroke-width="1" />`;
  } else if (facialHair === "facial-hair-goatee") {
    beardSvg = `
      <path d="M102,${headY + 28} L118,${headY + 28} L110,${headY + 45} Z" fill="${facialHairColor}" />
      <path d="M105,${headY + 16} Q110,${headY + 20} 115,${headY + 16}" fill="none" stroke="${facialHairColor}" stroke-width="2" />
    `;
  } else if (facialHair === "facial-hair-mustache") {
    beardSvg = `<path d="M96,${headY + 16} Q110,${headY + 22} 124,${headY + 16} C118,${headY + 14} 102,${headY + 14} 96,${headY + 16} Z" fill="${facialHairColor}" stroke="#111" stroke-width="0.5" />`;
  }
  
  // Hairstyle mapping with 3D gradient
  let hairSvg = "";
  if (hair === "hair-short-crop" || hair === "hair-short-spiky") {
    hairSvg = `<path d="M70,${headY - 35} L80,${headY - 70} L95,${headY - 55} L110,${headY - 78} L125,${headY - 55} L140,${headY - 70} L150,${headY - 35} Z" fill="url(#hairGrad)" stroke="#111" stroke-width="2" />`;
  } else if (hair === "hair-curly") {
    hairSvg = `
      <g fill="url(#hairGrad)" stroke="#111" stroke-width="1">
        <circle cx="75" cy="${headY - 35}" r="12" />
        <circle cx="85" cy="${headY - 45}" r="12" />
        <circle cx="98" cy="${headY - 48}" r="12" />
        <circle cx="110" cy="${headY - 50}" r="13" />
        <circle cx="122" cy="${headY - 48}" r="12" />
        <circle cx="135" cy="${headY - 45}" r="12" />
        <circle cx="145" cy="${headY - 35}" r="12" />
      </g>
    `;
  } else if (hair === "hair-cyber-fade" || hair === "hair-fade") {
    hairSvg = `
      <path d="M71,${headY - 35} C71,${headY - 65} 149,${headY - 65} 149,${headY - 35} L144,${headY - 25} L76,${headY - 25} Z" fill="url(#hairGrad)" stroke="#111" stroke-width="1.5" />
      <path d="M75,${headY - 27} L145,${headY - 27} L140,${headY - 15} L80,${headY - 15} Z" fill="rgba(0,0,0,0.3)" />
    `;
  } else if (hair === "hair-slick") {
    hairSvg = `
      <path d="M72,${headY - 35} C72,${headY - 68} 148,${headY - 68} 148,${headY - 35} Z" fill="url(#hairGrad)" stroke="#111" stroke-width="2" />
      <path d="M75,${headY - 35} Q110,${headY - 44} 145,${headY - 35}" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="2.5" />
      <path d="M85,${headY - 40} Q110,${headY - 48} 135,${headY - 40}" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="2.5" />
    `;
  } else if (hair === "hair-long-waves" || hair === "hair-waves") {
    hairSvg = `
      <path d="M71,${headY - 34} C71,${headY - 65} 149,${headY - 65} 149,${headY - 34} C156,${headY - 5} 154,${headY + 35} 146,${headY + 55} C140,${headY + 45} 136,${headY + 25} 138,${headY - 5} C138,${headY - 5} 110,${headY - 25} 82,${headY - 5} C84,${headY + 25} 80,${headY + 45} 74,${headY + 55} C66,${headY + 35} 64,${headY - 5} 71,${headY - 34} Z" fill="url(#hairGrad)" stroke="#111" stroke-width="1.8" />
    `;
  } else if (hair === "hair-ponytail") {
    hairSvg = `
      <path d="M71,${headY - 34} C71,${headY - 65} 149,${headY - 65} 149,${headY - 34} Z" fill="url(#hairGrad)" stroke="#111" stroke-width="1.5" />
      <path d="M142,${headY - 35} C165,${headY - 25} 185,${headY - 30} 192,${headY - 8} C182,${headY - 2} 152,${headY - 8} 142,${headY - 30} Z" fill="url(#hairGrad)" stroke="#111" stroke-width="1.5" />
    `;
  }
  
  // Dynamic Physique morphological values based on User Progress/Weight Logs
  const lvl = state.userStats.level || 1;
  const goal = state.onboarding.goal;
  const startWeight = parseFloat(state.onboarding.weight) || 75;
  const targetWeight = parseFloat(state.onboarding.targetWeight) || 70;
  
  // Calculate today's simulated weight from the progress chart logic
  const step = (startWeight - targetWeight) / 6;
  const currentWeight = parseFloat((startWeight - step * 2.5).toFixed(1));
  
  let chestWidth = 78; // Lvl 1 (Beginner)
  let waistWidth = 68;
  let armWidth = 14;
  let muscleDefinition = "";
  
  if (goal === "fat_loss") {
    // Leaner: chest and waist shrink dynamically
    const lost = Math.max(0, startWeight - currentWeight);
    chestWidth = Math.max(72, 78 - lost * 0.8);
    waistWidth = Math.max(54, 68 - lost * 1.5);
    if (lost > 2) {
      muscleDefinition = `<path d="M78,212 Q110,225 142,212" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1.5" />`;
    }
  } else if (goal === "muscle_gain") {
    // Muscular: chest expands, waist stays trim, bicep curves widen
    chestWidth = 78 + (lvl - 1) * 6;
    waistWidth = 64;
    armWidth = 14 + (lvl - 1) * 2.5;
    if (lvl >= 2) {
      muscleDefinition = `
        <path d="M72,210 Q110,226 148,210" fill="none" stroke="var(--neon-cyan)" stroke-width="1.8" filter="drop-shadow(0 0 3px var(--neon-cyan))" />
        <polygon points="102,210 118,210 110,234" fill="rgba(0, 240, 255, 0.2)" />
      `;
    }
  } else {
    // Maintenance/Endurance: standard scaling
    chestWidth = 78 + (lvl - 1) * 2;
    waistWidth = 66 - (lvl - 1) * 0.5;
    armWidth = 14 + (lvl - 1) * 0.8;
  }
  
  // Outfit mapping with 3D gradient
  let outfitSvg = "";
  
  const leftShldX = 110 - chestWidth/2;
  const rightShldX = 110 + chestWidth/2;
  const leftWstX = 110 - waistWidth/2;
  const rightWstX = 110 + waistWidth/2;
  
  let armLeftSvg = `<path d="M${leftShldX},200 L${leftShldX - 15 - armWidth/4},270 L${leftShldX - armWidth/4},270 L${leftShldX + 10},205 Z" fill="url(#skin3D)" stroke="#111" stroke-width="2" />`;
  let armRightSvg = "";
  
  if (expr === "celebrating" || expr === "proud" || isWaving) {
    // Waving right arm up in the air
    armRightSvg = `
      <g class="waving-arm">
        <path d="M${rightShldX},200 L${rightShldX + 20},130 L${rightShldX + 35},135 L${rightShldX + 10},205 Z" fill="url(#skin3D)" stroke="#111" stroke-width="2" />
        <circle cx="${rightShldX + 28}" cy="125" r="9" fill="url(#skin3D)" stroke="#111" stroke-width="1.5" />
      </g>
    `;
    if (expr === "celebrating") {
      // Celebrating: waving both arms!
      armLeftSvg = `
        <g class="celebrating-left-arm">
          <path d="M${leftShldX},200 L${leftShldX - 20},130 L${leftShldX - 35},135 L${leftShldX - 10},205 Z" fill="url(#skin3D)" stroke="#111" stroke-width="2" />
          <circle cx="${leftShldX - 28}" cy="125" r="9" fill="url(#skin3D)" stroke="#111" stroke-width="1.5" />
        </g>
      `;
    }
  } else {
    // Normal pose arms down
    armRightSvg = `<path d="M${rightShldX},200 L${rightShldX + 15 + armWidth/4},270 L${rightShldX + armWidth/4},270 L${rightShldX - 10},205 Z" fill="url(#skin3D)" stroke="#111" stroke-width="2" />`;
  }
  
  // Outfit types
  if (outfit === "outfit-gym") {
    outfitSvg = `
      <polygon points="${leftShldX},200 ${rightShldX},200 ${rightWstX},270 ${leftWstX},270" fill="url(#outfitGrad)" stroke="#111" stroke-width="1.5" />
      <polygon points="98,200 122,200 110,214" fill="url(#skin3D)" />
      ${muscleDefinition}
    `;
  } else if (outfit === "outfit-casual") {
    outfitSvg = `
      <polygon points="${leftShldX},200 ${rightShldX},200 ${rightWstX},270 ${leftWstX},270" fill="url(#outfitGrad)" stroke="#111" stroke-width="1.5" />
      <ellipse cx="110" cy="200" rx="12" ry="5" fill="url(#skin3D)" />
    `;
  } else if (outfit === "outfit-hoodie") {
    outfitSvg = `
      <polygon points="${leftShldX - 4},196 ${rightShldX + 4},196 ${rightWstX + 4},270 ${leftWstX - 4},270" fill="url(#outfitGrad)" stroke="#111" stroke-width="1.5" />
      <path d="M82,192 Q110,165 138,192 Z" fill="url(#outfitGrad)" stroke="#111" stroke-width="1" />
      <rect x="${leftWstX + 12}" y="235" width="${waistWidth - 24}" height="28" rx="6" fill="${getShadeColor(getOutfitBaseColor(outfit), -15)}" stroke="#111" />
    `;
  } else if (outfit === "outfit-tracksuit") {
    outfitSvg = `
      <polygon points="${leftShldX},198 ${rightShldX},198 ${rightWstX},270 ${leftWstX},270" fill="url(#outfitGrad)" stroke="#111" stroke-width="1.5" />
      <polygon points="${leftShldX + 12},198 ${rightShldX - 12},198 ${rightWstX - 18},180 ${leftWstX + 18},180" fill="url(#outfitGrad)" stroke="#111" />
      <line x1="110" y1="180" x2="110" y2="270" stroke="#facc15" stroke-width="2.2" />
    `;
  } else if (outfit === "outfit-jersey") {
    outfitSvg = `
      <polygon points="${leftShldX},200 ${rightShldX},200 ${rightWstX},270 ${leftWstX},270" fill="url(#outfitGrad)" stroke="#111" stroke-width="1.5" />
      <polygon points="98,200 122,200 110,218" fill="url(#skin3D)" />
      <text x="110" y="245" fill="#fff" font-family="var(--font-cyber)" font-weight="900" font-size="20" text-anchor="middle">7</text>
    `;
  } else if (outfit === "outfit-fit-tank") {
    outfitSvg = `
      <polygon points="${leftShldX},200 ${rightShldX},200 ${rightWstX},270 ${leftWstX},270" fill="url(#skin3D)" />
      <polygon points="${leftShldX + 16},200 ${rightShldX - 16},200 ${rightWstX - 5},270 ${leftWstX + 5},270" fill="url(#outfitGrad)" stroke="#111" stroke-width="1.5" />
      <path d="M96,200 L124,200 Q110,225 96,200 Z" fill="url(#skin3D)" />
    `;
  } else if (outfit === "outfit-legendary") {
    outfitSvg = `
      <polygon points="${leftShldX},198 ${rightShldX},198 ${rightWstX},270 ${leftWstX},270" fill="url(#outfitGrad)" stroke="var(--neon-gold)" stroke-width="2.5" />
      <polygon points="98,200 122,200 110,224" fill="url(#skin3D)" />
      <circle cx="110" cy="235" r="12" fill="var(--neon-gold)" filter="drop-shadow(0 0 5px var(--neon-gold))" />
      <circle cx="110" cy="235" r="7" fill="#111" />
    `;
  }
  
  // Cap overlays
  let capSvg = "";
  if (cap === "cap-gym") {
    capSvg = `
      <path d="M72,${headY - 34} C72,${headY - 70} 148,${headY - 70} 148,${headY - 34} Z" fill="#3b82f6" stroke="#111" stroke-width="1.5" />
      <path d="M142,${headY - 38} L174,${headY - 38} L168,${headY - 28} L142,${headY - 32} Z" fill="#1d4ed8" stroke="#111" stroke-width="1" />
    `;
  } else if (cap === "cap-headband") {
    capSvg = `<rect x="71" y="${headY - 34}" width="78" height="15" fill="#ef4444" stroke="#fff" stroke-width="1.5" />`;
  } else if (cap === "cap-beanie") {
    capSvg = `
      <path d="M70,${headY - 25} C70,${headY - 75} 150,${headY - 75} 150,${headY - 25} Z" fill="#10b981" stroke="#047857" stroke-width="1.5" />
      <rect x="67" y="${headY - 28}" width="86" height="10" rx="3" fill="#047857" />
    `;
  }
  
  // Watch on wrist (arm)
  let watchSvg = "";
  if (watch === "watch-fit") {
    watchSvg = `<rect x="${isWaving ? rightShldX + 12 : leftShldX - 12}" y="240" width="10" height="5" fill="#10b981" />`;
  } else if (watch === "watch-gold") {
    watchSvg = `<rect x="${isWaving ? rightShldX + 12 : leftShldX - 12}" y="240" width="11" height="6" fill="var(--neon-gold)" filter="drop-shadow(0 0 3px var(--neon-gold))" stroke="#111" stroke-width="0.5" />`;
  }
  
  // Glasses Overlay
  let glassesSvg = "";
  if (glasses === "glasses-round") {
    glassesSvg = `
      <circle cx="95" cy="${headY - 5}" r="11" fill="none" stroke="#222" stroke-width="2.5" />
      <circle cx="125" cy="${headY - 5}" r="11" fill="none" stroke="#222" stroke-width="2.5" />
      <line x1="106" y1="${headY - 5}" x2="114" y2="${headY - 5}" stroke="#222" stroke-width="2.5" />
      <line x1="84" y1="${headY - 5}" x2="74" y2="${headY - 2}" stroke="#222" stroke-width="1.8" />
      <line x1="136" y1="${headY - 5}" x2="146" y2="${headY - 2}" stroke="#222" stroke-width="1.8" />
    `;
  } else if (glasses === "glasses-square") {
    glassesSvg = `
      <rect x="84" y="${headY - 15}" width="22" height="18" rx="2" fill="none" stroke="#222" stroke-width="2.5" />
      <rect x="114" y="${headY - 15}" width="22" height="18" rx="2" fill="none" stroke="#222" stroke-width="2.5" />
      <line x1="106" y1="${headY - 6}" x2="114" y2="${headY - 6}" stroke="#222" stroke-width="2.5" />
      <line x1="84" y1="${headY - 6}" x2="74" y2="${headY - 3}" stroke="#222" stroke-width="1.8" />
      <line x1="136" y1="${headY - 6}" x2="146" y2="${headY - 3}" stroke="#222" stroke-width="1.8" />
    `;
  } else if (glasses === "glasses-sports") {
    glassesSvg = `
      <polygon points="78,${headY - 14} 142,${headY - 14} 136,${headY + 2} 84,${headY + 2}" fill="rgba(0, 240, 255, 0.85)" stroke="var(--neon-purple)" stroke-width="1.5" filter="drop-shadow(0 0 4px var(--neon-cyan))" />
      <line x1="78" y1="${headY - 10}" x2="72" y2="${headY - 6}" stroke="var(--neon-purple)" stroke-width="2" />
      <line x1="142" y1="${headY - 10}" x2="148" y2="${headY - 6}" stroke="var(--neon-purple)" stroke-width="2" />
    `;
  }
  
  // Earrings Overlay
  let earringsSvg = "";
  if (earrings === "earring-stud") {
    earringsSvg = `
      <circle cx="68" cy="${headY + 8}" r="2.5" fill="#facc15" stroke="#111" stroke-width="0.5" />
      <circle cx="152" cy="${headY + 8}" r="2.5" fill="#facc15" stroke="#111" stroke-width="0.5" />
    `;
  } else if (earrings === "earring-hoop") {
    earringsSvg = `
      <path d="M68,${headY + 8} A 5,5 0 1,1 66,${headY + 13}" fill="none" stroke="#e4e4e7" stroke-width="2" />
      <path d="M152,${headY + 8} A 5,5 0 1,1 154,${headY + 13}" fill="none" stroke="#e4e4e7" stroke-width="2" />
    `;
  } else if (earrings === "earring-hanging") {
    earringsSvg = `
      <line x1="68" y1="${headY + 8}" x2="68" y2="${headY + 16}" stroke="#cbd5e1" stroke-width="1.5" />
      <circle cx="68" cy="${headY + 17}" r="2" fill="#ef4444" />
      <line x1="152" y1="${headY + 8}" x2="152" y2="${headY + 16}" stroke="#cbd5e1" stroke-width="1.5" />
      <circle cx="152" cy="${headY + 17}" r="2" fill="#ef4444" />
    `;
  }
  
  // Pants/Legs rendering
  let pantsColor = "url(#pantsGrad)";
  if (outfit === "outfit-tracksuit") {
    pantsColor = getOutfitBaseColor(outfit);
  }
  
  let legsSvg = `
    <rect x="${leftWstX + 2}" y="270" width="${waistWidth - 4}" height="50" fill="${pantsColor}" stroke="#111" stroke-width="1.5" />
    <line x1="110" y1="270" x2="110" y2="320" stroke="#111" stroke-width="2" />
  `;
  
  if (outfit === "outfit-tracksuit") {
    legsSvg += `
      <line x1="${leftWstX + 5}" y1="270" x2="${leftWstX + 5}" y2="320" stroke="#ffffff" stroke-width="2.5" />
      <line x1="${rightWstX - 5}" y1="270" x2="${rightWstX - 5}" y2="320" stroke="#ffffff" stroke-width="2.5" />
    `;
  }
  
  // Shoes rendering
  let shoesSvg = "";
  if (shoes === "shoes-gym") {
    shoesSvg = `
      <rect x="${leftWstX - 4}" y="320" width="18" height="15" rx="4" fill="#3b82f6" stroke="#111" />
      <rect x="${rightWstX - 14}" y="320" width="18" height="15" rx="4" fill="#3b82f6" stroke="#111" />
      <line x1="${leftWstX - 2}" y1="325" x2="${leftWstX + 8}" y2="325" stroke="#fff" stroke-width="1.5" />
      <line x1="${rightWstX - 12}" y1="325" x2="${rightWstX - 2}" y2="325" stroke="#fff" stroke-width="1.5" />
    `;
  } else if (shoes === "shoes-boots") {
    shoesSvg = `
      <rect x="${leftWstX - 5}" y="318" width="20" height="20" rx="3" fill="#7c2d12" stroke="#111" />
      <rect x="${rightWstX - 15}" y="318" width="20" height="20" rx="3" fill="#7c2d12" stroke="#111" />
    `;
  } else if (shoes === "shoes-casual") {
    shoesSvg = `
      <rect x="${leftWstX - 4}" y="320" width="18" height="13" rx="5" fill="#f43f5e" stroke="#111" stroke-width="1.5" />
      <rect x="${rightWstX - 14}" y="320" width="18" height="13" rx="5" fill="#f43f5e" stroke="#111" stroke-width="1.5" />
    `;
  }
  
  return `
    <svg class="avatar-svg-canvas" viewBox="0 0 220 350">
      <defs>
        <!-- 3D Shaded Skin Tone -->
        <radialGradient id="skin3D" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.35" />
          <stop offset="35%" stop-color="${skin}" />
          <stop offset="100%" stop-color="${getShadeColor(skin, -24)}" />
        </radialGradient>
        
        <!-- 3D Shaded Hair Tone -->
        <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="${hairColor}" />
          <stop offset="35%" stop-color="${hairColor}" />
          <stop offset="100%" stop-color="${getShadeColor(hairColor, -40)}" />
        </linearGradient>
        
        <!-- 3D Metallic Shaded Outfit -->
        <linearGradient id="outfitGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="${getOutfitBaseColor(outfit)}" />
          <stop offset="45%" stop-color="${getShadeColor(getOutfitBaseColor(outfit), 25)}" />
          <stop offset="100%" stop-color="${getShadeColor(getOutfitBaseColor(outfit), -25)}" />
        </linearGradient>
        
        <!-- 3D Shaded Pants -->
        <linearGradient id="pantsGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#1f2937" />
          <stop offset="50%" stop-color="#374151" />
          <stop offset="100%" stop-color="#111827" />
        </linearGradient>
      </defs>

      <!-- Grid lines -->
      <line x1="10" y1="175" x2="210" y2="175" stroke="rgba(255,255,255,0.02)" />
      <line x1="110" y1="10" x2="110" y2="340" stroke="rgba(255,255,255,0.02)" />
      
      <!-- Legs and pants -->
      ${legsSvg}
      ${shoesSvg}

      <!-- Neck -->
      <rect x="96" y="${neckY}" width="28" height="${neckH}" fill="url(#skin3D)" stroke="#111" stroke-width="2" />
      <ellipse cx="110" cy="${neckY + 8}" rx="14" ry="6" fill="rgba(0,0,0,0.18)" />
      
      <!-- Head shape -->
      ${faceSvg}
      ${frecklesSvg}
      
      <!-- Eyes & Eyebrows -->
      ${eyesIrisSvg}
      ${eyebrowSvg}
      
      <!-- Nose & Mouth -->
      ${noseSvg}
      <path d="${mouthPath}" fill="none" stroke="#111" stroke-width="2.5" stroke-linecap="round" />
      ${lipOverlay}
      ${sweatSvg}
      
      <!-- Facial Hair -->
      ${beardSvg}

      <!-- Hair Base -->
      ${hairSvg}
      ${capSvg}
      
      <!-- Torso Outfit -->
      ${outfitSvg}
      
      <!-- Arms -->
      ${armLeftSvg}
      ${armRightSvg}
      ${watchSvg}
      
      <!-- Accessory overlays (earrings & glasses) -->
      ${earringsSvg}
      ${glassesSvg}
      ${accSvg}
    </svg>
  `;
}
// AVATAR SELECTION & EVOLUTION ASSETS
// ==========================================
const AVATAR_ASSETS = {
  female: {
    skinny: "avatars/media__1783964664563.jpg",
    lean: "avatars/media__1783964670377.jpg",
    fit: "avatars/media__1783964812583.jpg",
    plus: "avatars/media__1783964676218.jpg"
  },
  male: {
    skinny: "avatars/media__1783964694524.jpg", // male fit cropped scaled
    lean: "avatars/media__1783964694524.jpg",
    fit: "avatars/media__1783964694524.jpg",
    plus: "avatars/media__1783964683758.jpg"
  }
};

function playSynthesizedTone(type) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    
    if (type === "success") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      const now = ctx.currentTime;
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
      
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      
      osc.start(now);
      osc.stop(now + 0.35);
    } else if (type === "epic") {
      const notes = [261.63, 392.00, 523.25, 659.25]; // C4, G4, C5, E5
      notes.forEach((freq, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        const now = ctx.currentTime;
        const delay = index * 0.12;
        osc.frequency.setValueAtTime(freq, now + delay);
        
        gain.gain.setValueAtTime(0.12, now + delay);
        gain.gain.exponentialRampToValueAtTime(0.01, now + delay + 0.6);
        
        osc.start(now + delay);
        osc.stop(now + delay + 0.65);
      });
    }
  } catch (e) {
    console.warn("Audio Context blocked: ", e);
  }
}

function getAvatarId(gender, bodyType, skinToneName) {
  const gPrefix = gender === "male" ? "M" : "F";
  let bodyIdx = 0; // skinny
  if (bodyType === "lean") bodyIdx = 1;
  else if (bodyType === "fit" || bodyType === "athletic") bodyIdx = 2;
  else if (bodyType === "plus" || bodyType === "muscular") bodyIdx = 3;

  let skinIdx = 0; // light
  if (skinToneName === "medium") skinIdx = 1;
  else if (skinToneName === "dark") skinIdx = 2;

  const num = bodyIdx * 3 + skinIdx + 1;
  const numStr = num < 10 ? "0" + num : "" + num;
  return gPrefix + numStr;
}

function preloadAvatars() {
  const genders = ["M", "F"];
  for (const g of genders) {
    for (let i = 1; i <= 12; i++) {
      const id = g + (i < 10 ? "0" + i : i);
      const img = new Image();
      img.src = `avatars/${id}.jpg`;
    }
  }
}

function getAvatarHTML(g, b, s, customStyles = "") {
  const id = getAvatarId(g, b, s);
  const imgUrl = `avatars/${id}.jpg`;
  const uniqueId = "img_" + Math.random().toString(36).substr(2, 9);
  const fallbackUrl = g === "male" ? "avatars/M01.jpg" : "avatars/F01.jpg";

  // Dynamic skin tone filter enhancements for distinct visual tones across all 24 avatars
  let skinFilter = "contrast(102%) brightness(100%)";
  if (s === "medium") {
    skinFilter = "sepia(25%) hue-rotate(-12deg) contrast(106%) saturate(115%) brightness(92%)";
  } else if (s === "dark") {
    skinFilter = "sepia(45%) hue-rotate(-25deg) contrast(122%) saturate(125%) brightness(74%)";
  }

  return `
    <div class="avatar-render-box" style="position:relative; width:100%; height:100%; overflow:hidden; display:flex; align-items:center; justify-content:center; ${customStyles}">
      <div id="${uniqueId}_skeleton" class="avatar-skeleton" style="position:absolute; top:0; left:0; width:100%; height:100%; z-index:2; border-radius: 8px;"></div>
      <img id="${uniqueId}" src="${imgUrl}" style="width:100%; height:100%; object-fit:contain; display:block; margin:0 auto; filter: ${skinFilter}; transition: opacity 0.3s ease-in-out;" 
        onload="const el = document.getElementById('${uniqueId}_skeleton'); if (el) el.style.display='none'; this.style.opacity='1';"
        onerror="this.src='${fallbackUrl}'; this.onerror=null; const el = document.getElementById('${uniqueId}_skeleton'); if (el) el.style.display='none'; this.style.opacity='1';" />
    </div>
  `;
}

function getEvolvedAvatarHTML(customStyles = "") {
  const g = state.avatar.gender || state.onboarding.gender || "female";
  const b = state.avatar.bodyType || "lean";
  const s = state.avatar.skinToneName || "medium";
  const progress = state.userStats.goalProgress || 0;
  const goal = state.onboarding.goal || "fat_loss";
  
  const id = getAvatarId(g, b, s);
  const imgUrl = `avatars/${id}.jpg`;
  
  let offset = "0%";
  if (s === "medium") offset = "-33.333%";
  else if (s === "dark") offset = "-66.667%";
  
  let scaleX = 1;
  let scaleY = 1;
  let contrast = 100;
  let saturate = 100;
  let rotate = 0;
  
  // Apply gradual definition & mass shifts
  if (goal === "fat_loss") {
    scaleX = 1 - (progress / 100) * 0.08;
    contrast = 100 + (progress / 100) * 20;
    saturate = 100 + (progress / 100) * 10;
  } else if (goal === "muscle_gain") {
    scaleX = 1 + (progress / 100) * 0.06;
    scaleY = 1 + (progress / 100) * 0.02;
    contrast = 100 + (progress / 100) * 25;
  } else if (goal === "weight_gain") {
    scaleX = 1 + (progress / 100) * 0.08;
  } else if (goal === "maintenance") {
    contrast = 100 + (progress / 100) * 15;
  }
  
  const uniqueId = "img_" + Math.random().toString(36).substr(2, 9);
  const fallbackUrl = g === "male" ? "avatars/M01.jpg" : "avatars/F01.jpg";
  
  return `
    <div class="avatar-render-box" style="position:relative; width:100%; height:100%; overflow:hidden; display:flex; align-items:center; justify-content:center; transform: scaleX(${scaleX}) scaleY(${scaleY}) rotate(${rotate}deg); transition: all 0.8s ease-in-out; ${customStyles}">
      <div id="${uniqueId}_skeleton" class="avatar-skeleton" style="position:absolute; top:0; left:0; width:100%; height:100%; z-index:2; border-radius: 8px;"></div>
      <img id="${uniqueId}" src="${imgUrl}" style="position:absolute; top:0; left:0; width:300%; height:100%; object-fit:cover; transform: translateX(${offset}); filter: contrast(${contrast}%) saturate(${saturate}%); transition: all 0.8s ease; opacity: 0;" 
        onload="const el = document.getElementById('${uniqueId}_skeleton'); if (el) el.style.display='none'; this.style.opacity='1';"
        onerror="this.src='${fallbackUrl}'; this.onerror=null; const el = document.getElementById('${uniqueId}_skeleton'); if (el) el.style.display='none'; this.style.opacity='1';" />
    </div>
  `;
}

function updateAvatarEvolutionState() {
  const goal = state.onboarding.goal || "fat_loss";
  const progress = state.userStats.goalProgress || 0;
  const startBody = state.onboarding.initialBodyType || "lean";
  
  let newBody = startBody;
  
  if (goal === "fat_loss") {
    if (startBody === "plus") {
      if (progress < 25) newBody = "plus";
      else if (progress < 50) newBody = "fit";
      else if (progress < 75) newBody = "lean";
      else newBody = "skinny";
    } else if (startBody === "fit") {
      if (progress < 33) newBody = "fit";
      else if (progress < 66) newBody = "lean";
      else newBody = "skinny";
    } else if (startBody === "lean") {
      if (progress < 50) newBody = "lean";
      else newBody = "skinny";
    } else {
      newBody = "skinny";
    }
  } else if (goal === "muscle_gain" || goal === "weight_gain") {
    if (startBody === "skinny") {
      if (progress < 25) newBody = "skinny";
      else if (progress < 50) newBody = "lean";
      else if (progress < 75) newBody = "fit";
      else newBody = "plus";
    } else if (startBody === "lean") {
      if (progress < 33) newBody = "lean";
      else if (progress < 66) newBody = "fit";
      else newBody = "plus";
    } else if (startBody === "fit") {
      if (progress < 50) newBody = "fit";
      else newBody = "plus";
    } else {
      newBody = "plus";
    }
  } else {
    newBody = startBody;
  }
  
  const oldBody = state.avatar.bodyType;
  if (oldBody !== newBody) {
    state.avatar.bodyType = newBody;
    saveStateToLocalStorage();
    const onboardingComplete = localStorage.getItem("fitverse_onboarding_completed") === "true";
    if (onboardingComplete) {
      triggerAvatarEvolutionOverlay(oldBody, newBody);
    }
  }
}

function triggerAvatarEvolutionOverlay(oldBody, newBody) {
  const overlay = document.getElementById("evolutionOverlay");
  if (!overlay) return;
  
  const oldBox = document.getElementById("evoOldAvatarBox");
  const newBox = document.getElementById("evoNewAvatarBox");
  const oldLbl = document.getElementById("evoOldLabel");
  const newLbl = document.getElementById("evoNewLabel");
  const motivationEl = document.getElementById("evoMotivationMsg");
  
  const g = state.avatar.gender || "female";
  const s = state.avatar.skinToneName || "medium";
  
  if (oldBox) oldBox.innerHTML = getAvatarHTML(g, oldBody, s);
  if (newBox) newBox.innerHTML = getAvatarHTML(g, newBody, s);
  
  if (oldLbl) oldLbl.textContent = oldBody.toUpperCase();
  if (newLbl) newLbl.textContent = newBody.toUpperCase();
  
  if (motivationEl) {
    motivationEl.textContent = `"Sensational effort! Your physical companion has successfully evolved to ${newBody.toUpperCase()} mode. Your digital and physical forms are in perfect sync."`;
  }
  
  playSynthesizedTone("epic");
  overlay.style.display = "flex";
  triggerConfettiExplosion();
}

function triggerConfettiExplosion() {
  const holder = document.getElementById("confettiHolder");
  if (!holder) return;
  
  holder.innerHTML = "";
  const colors = ["var(--neon-cyan)", "var(--neon-green)", "var(--neon-rose)", "#ffd700", "#ff7b00"];
  
  for (let i = 0; i < 45; i++) {
    const dot = document.createElement("div");
    dot.className = "confetti-dot";
    dot.style.left = `${Math.random() * 100}%`;
    dot.style.background = colors[Math.floor(Math.random() * colors.length)];
    dot.style.animationDelay = `${Math.random() * 1.5}s`;
    dot.style.animationDuration = `${1.8 + Math.random() * 1.5}s`;
    holder.appendChild(dot);
  }
}

function renderLeaderboard() {
  const container = document.getElementById("leaderboardList");
  if (!container) return;
  
  const competitors = [
    { rank: 1, name: "Alexander K.", gender: "male", body: "fit", skin: "light", progress: 98, metric: "98% (Fit)" },
    { rank: 2, name: "Seraphina V.", gender: "female", body: "fit", skin: "medium", progress: 91, metric: "91% (Fit)" },
    { rank: 3, name: state.onboarding.fullname || "You", gender: state.avatar.gender, body: state.avatar.bodyType, skin: state.avatar.skinToneName, progress: state.userStats.goalProgress || 0, metric: `${state.userStats.goalProgress || 0}% (${state.avatar.bodyType})`, isUser: true },
    { rank: 4, name: "Marcus Steele", gender: "male", body: "lean", skin: "dark", progress: 68, metric: "68% (Lean)" },
    { rank: 5, name: "Elena Rostova", gender: "female", body: "lean", skin: "light", progress: 54, metric: "54% (Lean)" },
  ];
  
  competitors.sort((a, b) => b.progress - a.progress);
  competitors.forEach((c, idx) => {
    c.rank = idx + 1;
  });
  
  container.innerHTML = "";
  competitors.forEach(c => {
    const row = document.createElement("div");
    row.className = `leaderboard-row ${c.isUser ? 'user-row' : ''}`;
    row.innerHTML = `
      <div class="leaderboard-rank">#${c.rank}</div>
      <div class="leaderboard-avatar-box">
        ${getAvatarHTML(c.gender, c.body, c.skin, "width:32px; height:48px;")}
      </div>
      <div class="leaderboard-name">${c.name} ${c.isUser ? '(YOU)' : ''}</div>
      <div class="leaderboard-stats">${c.metric}</div>
    `;
    container.appendChild(row);
  });
}

function updateOnboardingAvatarPreview() {
  const preview = document.getElementById("onboardingAvatarPreview");
  const label = document.getElementById("onboardingAvatarLabel");
  if (!preview) return;
  
  const g = state.avatar.gender || "female";
  const b = state.avatar.bodyType || "lean";
  const s = state.avatar.skinToneName || "medium";
  
  // Smooth fade-out before swapping avatar
  const existingImg = preview.querySelector('img');
  if (existingImg) {
    existingImg.style.opacity = '0';
  }
  
  // Brief delay so fade-out is visible, then swap HTML
  setTimeout(() => {
    preview.innerHTML = getAvatarHTML(g, b, s);
  }, existingImg ? 150 : 0);
  
  if (label) {
    label.textContent = `${b.toUpperCase()} ${g.toUpperCase()} - ${s.toUpperCase()} SKIN`;
  }
}

function renderAvatar() {
  const displayBox = document.getElementById("avatarDisplayContainer");
  const coachBox = document.getElementById("coachBannerAvatar");
  const dashUserAvatar = document.getElementById("dashUserAvatar");
  const workoutBox = document.getElementById("workoutAvatarContainer");
  const dietBox = document.getElementById("dietAvatarContainer");
  const progressBox = document.getElementById("progressAvatarContainer");
  
  if (displayBox) displayBox.innerHTML = getEvolvedAvatarHTML();
  if (coachBox) coachBox.innerHTML = getEvolvedAvatarHTML("transform: scale(0.9);");
  if (dashUserAvatar) {
    dashUserAvatar.innerHTML = getEvolvedAvatarHTML("transform: scale(0.85); width: 44px; height: 44px; border-radius: 50%; border: 1px solid var(--neon-cyan); box-shadow: 0 0 5px rgba(0,240,255,0.3);");
  }
  if (workoutBox) workoutBox.innerHTML = getEvolvedAvatarHTML();
  if (dietBox) dietBox.innerHTML = getEvolvedAvatarHTML();
  if (progressBox) progressBox.innerHTML = getEvolvedAvatarHTML();
  
  const bodyEl = document.getElementById("avatarBodyType");
  if (bodyEl) {
    bodyEl.textContent = `${state.avatar.bodyType.toUpperCase()} (${state.avatar.skinToneName.toUpperCase()})`;
  }
  
  const titleEl = displayBox ? displayBox.nextElementSibling : null;
  if (titleEl && titleEl.classList.contains("avatar-badge-tier")) {
    let tierTitle = "CYBER RECRUIT";
    if (state.userStats.level >= 2) tierTitle = "FITNESS INTERFACE";
    if (state.userStats.level >= 3) tierTitle = "CYBER BEAST";
    if (state.userStats.level >= 5) tierTitle = "FITVERSE DEITY";
    titleEl.textContent = `${tierTitle} (Lvl ${state.userStats.level})`;
  }
  
  renderLeaderboard();
  
  updateAvatarStatsPanel();
}

function updateAvatarStatsPanel() {
  const xpFill = document.getElementById("avatarXpFill");
  const statsDetail = document.getElementById("avatarStatsDetail");
  if (!statsDetail) return;
  
  const startWeight = parseFloat(state.onboarding.weight) || 75;
  const targetWeight = parseFloat(state.onboarding.targetWeight) || 70;
  const currentWeight = parseFloat(state.userStats.currentWeight) || startWeight;
  const lost = Math.abs(startWeight - currentWeight);
  
  const totalDiff = Math.abs(startWeight - targetWeight);
  const currentDiff = Math.abs(startWeight - currentWeight);
  let progressPercent = 0;
  
  const goal = state.onboarding.goal || "fat_loss";
  if (goal === "fat_loss") {
    const progressDiff = startWeight - currentWeight;
    progressPercent = totalDiff > 0 ? Math.min(100, Math.max(0, Math.round((progressDiff / totalDiff) * 100))) : 0;
  } else if (goal === "muscle_gain" || goal === "weight_gain") {
    const progressDiff = currentWeight - startWeight;
    progressPercent = totalDiff > 0 ? Math.min(100, Math.max(0, Math.round((progressDiff / totalDiff) * 100))) : 0;
  } else if (goal === "maintenance") {
    const wc = state.userStats.workoutsCompleted || 0;
    progressPercent = Math.min(100, wc * 10);
  }
  
  state.userStats.goalProgress = progressPercent;
  updateAvatarEvolutionState();
  
  const pctEl = document.getElementById("transformationPct");
  if (pctEl) {
    pctEl.textContent = `${progressPercent}% Complete`;
  }
  
  if (xpFill) {
    xpFill.style.width = `${progressPercent}%`;
  }
  
  const bodyEl = document.getElementById("avatarBodyType");
  if (bodyEl) {
    bodyEl.textContent = `${state.avatar.bodyType.toUpperCase()} (${state.avatar.skinToneName.toUpperCase()})`;
  }
  
  const postEl = document.getElementById("avatarPosture");
  if (postEl) {
    const streak = state.userStats.streak || 0;
    if (streak >= 5) {
      postEl.textContent = `Upright (Streak: ${streak} Days)`;
      postEl.style.color = "#10b981";
    } else if (streak >= 3) {
      postEl.textContent = `Normal (Streak: ${streak} Days)`;
      postEl.style.color = "#f59e0b";
    } else {
      postEl.textContent = `Slouched (Streak: ${streak} Days)`;
      postEl.style.color = "#f43f5e";
    }
  }
  
  const unitLabel = state.onboarding.units === "imperial" ? "lbs" : "kg";
  const streak = state.userStats.streak || 0;
  const wc = state.userStats.workoutsCompleted || 0;
  const targetMet = Math.abs(currentWeight - targetWeight) < 0.2 || (goal === "fat_loss" && currentWeight <= targetWeight) || ((goal === "muscle_gain" || goal === "weight_gain") && currentWeight >= targetWeight);
  
  statsDetail.innerHTML = `
    <div style="margin-bottom:0.4rem; display:flex; justify-content:space-between;">
      <span><strong>Goal Tracker:</strong> ${currentWeight}${unitLabel} / Target: ${targetWeight}${unitLabel}</span>
      <span><strong>Level:</strong> ${state.userStats.level}</span>
    </div>
    <div style="margin-bottom:0.4rem;"><strong>Workouts Completed:</strong> ${wc} sessions</div>
    <div style="font-family:var(--font-cyber); font-size:0.75rem; color:var(--neon-cyan); margin-top:0.75rem; letter-spacing:0.5px;">WARDROBE UNLOCK PROGRESS:</div>
    <div style="display:flex; flex-direction:column; gap:0.25rem; margin-top:0.4rem; font-size:0.75rem;">
      <div style="color:${streak >= 7 ? '#10b981' : '#9ca3af'}">${streak >= 7 ? '✅' : '🔒'} Gold Dreadlocks (7-Day Streak): ${streak}/7 Days</div>
      <div style="color:${wc >= 30 ? '#10b981' : '#9ca3af'}">${wc >= 30 ? '✅' : '🔒'} Apex Tracksuit (30 Workouts): ${wc}/30 Logged</div>
      <div style="color:${lost >= 5 ? '#10b981' : '#9ca3af'}">${lost >= 5 ? '✅' : '🔒'} Transformation Badge (5${unitLabel} Diff): ${lost.toFixed(1)}/5 ${unitLabel}</div>
      <div style="color:${targetMet ? '#10b981' : '#9ca3af'}">${targetMet ? '✅' : '🔒'} Gold Smartwatch (Target Achieved): ${targetMet ? 'UNLOCKED' : 'LOCKED'}</div>
    </div>
  `;
}

function renderAvatarEditorOptions() {
  const optionsBox = document.getElementById("avatarEditorOptions");
  if (!optionsBox) return;
  
  optionsBox.innerHTML = "";
  
  const activeCat = state.avatar.activeCategory || "face";
  let items = [];

  if (activeCat === "face") {
    items = [
      { type: "skin", id: "#ffcd94", label: "Skin: Light", icon: "🎨" },
      { type: "skin", id: "#e5a65d", label: "Skin: Sand", icon: "🎨" },
      { type: "skin", id: "#d58a37", label: "Skin: Olive", icon: "🎨" },
      { type: "skin", id: "#8d5524", label: "Skin: Bronze", icon: "🎨" },
      { type: "skin", id: "#5c3816", label: "Skin: Dark", icon: "🎨" },

      { type: "faceShape", id: "face-round", label: "Face: Round", icon: "🔴" },
      { type: "faceShape", id: "face-oval", label: "Face: Oval", icon: "🥚" },
      { type: "faceShape", id: "face-square", label: "Face: Square", icon: "⬜" },
      { type: "faceShape", id: "face-heart", label: "Face: Heart", icon: "💖" },
      { type: "faceShape", id: "face-diamond", label: "Face: Diamond", icon: "💎" },
      { type: "faceShape", id: "face-angular", label: "Face: Angular", icon: "🔺" },

      { type: "nose", id: "nose-straight", label: "Nose: Straight", icon: "👃" },
      { type: "nose", id: "nose-button", label: "Nose: Button", icon: "👃" },
      { type: "nose", id: "nose-pointed", label: "Nose: Pointed", icon: "👃" },
      { type: "nose", id: "nose-wide", label: "Nose: Wide", icon: "👃" },

      { type: "lips", id: "lips-neutral", label: "Lips: Neutral", icon: "👄" },
      { type: "lips", id: "lips-thin", label: "Lips: Thin", icon: "👄" },
      { type: "lips", id: "lips-full", label: "Lips: Full", icon: "👄" },

      { type: "freckles", id: "freckles-toggle", label: "Freckles", icon: "✨" }
    ];
  } else if (activeCat === "eyes") {
    items = [
      { type: "eyeShape", id: "eyes-oval", label: "Eyes: Oval", icon: "👁️" },
      { type: "eyeShape", id: "eyes-round", label: "Eyes: Round", icon: "👁️" },
      { type: "eyeShape", id: "eyes-hooded", label: "Eyes: Hooded", icon: "👁️" },
      { type: "eyeShape", id: "eyes-almond", label: "Eyes: Almond", icon: "👁️" },

      { type: "eyeColor", id: "#5c3816", label: "Eyes: Brown", icon: "🟤" },
      { type: "eyeColor", id: "#3b82f6", label: "Eyes: Blue", icon: "🔵" },
      { type: "eyeColor", id: "#10b981", label: "Eyes: Green", icon: "🟢" },
      { type: "eyeColor", id: "#f59e0b", label: "Eyes: Amber", icon: "🟡" },
      { type: "eyeColor", id: "#6b7280", label: "Eyes: Gray", icon: "⚫" },

      { type: "eyebrows", id: "eyebrows-normal", label: "Brows: Normal", icon: "〰️" },
      { type: "eyebrows", id: "eyebrows-bushy", label: "Brows: Bushy", icon: "➰" },
      { type: "eyebrows", id: "eyebrows-thin", label: "Brows: Thin", icon: "➖" }
    ];
  } else if (activeCat === "hair") {
    items = [
      { type: "hair", id: "hair-short-crop", label: "Crop Cut", icon: "💇" },
      { type: "hair", id: "hair-curly", label: "Curly Waves", icon: "🦱" },
      { type: "hair", id: "hair-fade", label: "Neat Fade", icon: "🦲" },
      { type: "hair", id: "hair-slick", label: "Slick Back", icon: "👱" },
      { type: "hair", id: "hair-waves", label: "Wavy Flow", icon: "👩" },
      { type: "hair", id: "hair-ponytail", label: "Ponytail", icon: "👱‍♀️" },
      { type: "hair", id: "hair-bald", label: "Bald Head", icon: "🥚" },
      { type: "hair", id: "hair-golden-dread", label: "Gold Dreadlocks", icon: "👑", lockCheck: (s) => (s.userStats.streak < 7) ? "7-Day Streak" : null },

      { type: "hairColor", id: "#111111", label: "Color: Black", icon: "🌈" },
      { type: "hairColor", id: "#5c3816", label: "Color: Brown", icon: "🌈" },
      { type: "hairColor", id: "#facc15", label: "Color: Blonde", icon: "🌈" },
      { type: "hairColor", id: "#ea580c", label: "Color: Red", icon: "🌈" },
      { type: "hairColor", id: "#ffffff", label: "Color: Silver", icon: "🌈" },
      { type: "hairColor", id: "#ec4899", label: "Color: Pink", icon: "🌈" },
      { type: "hairColor", id: "#2563eb", label: "Color: Blue", icon: "🌈" },

      { type: "facialHair", id: "none", label: "Clean Shaven", icon: "🪒" },
      { type: "facialHair", id: "facial-hair-stubble", label: "Stubble", icon: "🧔" },
      { type: "facialHair", id: "facial-hair-mustache", label: "Moustache", icon: "🧔" },
      { type: "facialHair", id: "facial-hair-goatee", label: "Goatee", icon: "🧔" },
      { type: "facialHair", id: "facial-hair-beard", label: "Full Beard", icon: "🧔" }
    ];
  } else if (activeCat === "outfit") {
    items = [
      { type: "outfit", id: "outfit-gym", label: "Gym Wear", icon: "🎽" },
      { type: "outfit", id: "outfit-casual", label: "Casual Wear", icon: "👕" },
      { type: "outfit", id: "outfit-hoodie", label: "Hoodie Jacket", icon: "🧥" },
      { type: "outfit", id: "outfit-fit-tank", label: "Athletic Tank", icon: "🎽" },
      { type: "outfit", id: "outfit-jersey", label: "Sports Jersey", icon: "👕" },
      { type: "outfit", id: "outfit-tracksuit", label: "Apex Tracksuit", icon: "🥻", lockCheck: (s) => ((s.userStats.workoutsCompleted || 0) < 30) ? "30 Workouts" : null },
      { type: "outfit", id: "outfit-legendary", label: "Gold Cloak", icon: "👑", lockCheck: (s) => {
          const ach = s.userStats.achievements.find(a => a.id === "goal_reached");
          return (!ach || !ach.unlocked) ? "Goal Reached" : null;
        } 
      },

      { type: "shoes", id: "shoes-gym", label: "Trainers", icon: "👟" },
      { type: "shoes", id: "shoes-boots", label: "Boots", icon: "🥾" },
      { type: "shoes", id: "shoes-casual", label: "Casual Shoes", icon: "👞" }
    ];
  } else if (activeCat === "accessory") {
    items = [
      { type: "glasses", id: "glasses-none", label: "Glasses: None", icon: "❌" },
      { type: "glasses", id: "glasses-round", label: "Glasses: Round", icon: "👓" },
      { type: "glasses", id: "glasses-square", label: "Glasses: Square", icon: "👓" },
      { type: "glasses", id: "glasses-sports", label: "Sports Visor", icon: "🕶️" },

      { type: "earrings", id: "earring-none", label: "Earrings: None", icon: "❌" },
      { type: "earrings", id: "earring-stud", label: "Earrings: Studs", icon: "👂" },
      { type: "earrings", id: "earring-hoop", label: "Earrings: Hoops", icon: "👂" },
      { type: "earrings", id: "earring-hanging", label: "Earrings: Gems", icon: "👂" },

      { type: "cap", id: "cap-none", label: "Head: None", icon: "❌" },
      { type: "cap", id: "cap-gym", label: "Gym Cap", icon: "🧢" },
      { type: "cap", id: "cap-headband", label: "Sweatband", icon: "🧕" },
      { type: "cap", id: "cap-beanie", label: "Beanie Hat", icon: "👒" },

      { type: "watch", id: "watch-none", label: "Wrist: None", icon: "❌" },
      { type: "watch", id: "watch-fit", label: "Fitness Band", icon: "⌚" },
      { type: "watch", id: "watch-gold", label: "Gold Smartwatch", icon: "👑", lockCheck: (s) => {
          const ach = s.userStats.achievements.find(a => a.id === "goal_reached");
          return (!ach || !ach.unlocked) ? "Goal Reached" : null;
        } 
      }
    ];
  } else if (activeCat === "expression") {
    items = [
      { type: "currentExpression", id: "neutral", label: "Neutral Vibe", icon: "😐" },
      { type: "currentExpression", id: "happy", label: "Happy Vibe", icon: "😊" },
      { type: "currentExpression", id: "excited", label: "Excited Vibe", icon: "🤩" },
      { type: "currentExpression", id: "motivated", label: "Focused Power", icon: "⚡" },
      { type: "currentExpression", id: "sad", label: "Melancholy Vibe", icon: "😔" },
      { type: "currentExpression", id: "stressed", label: "Stressed Vibe", icon: "🧠" },
      { type: "currentExpression", id: "beast-mode", label: "Beast Mode", icon: "🔥" },
      { type: "currentExpression", id: "exhausted", label: "Exhausted", icon: "🥵" }
    ];
  }

  items.forEach(item => {
    const lockMsg = item.lockCheck ? item.lockCheck(state) : null;
    const isLocked = !!lockMsg;
    const btn = document.createElement("div");
    btn.className = `editor-option-btn ${isLocked ? 'locked' : ''}`;
    
    // Check if active
    let active = false;
    if (item.id === "freckles-toggle") {
      active = state.avatar.freckles;
    } else {
      if (item.type === "skin" && state.avatar.skinTone === item.id) active = true;
      if (item.type === "faceShape" && state.avatar.faceShape === item.id) active = true;
      if (item.type === "eyeColor" && state.avatar.eyeColor === item.id) active = true;
      if (item.type === "eyebrows" && state.avatar.eyebrows === item.id) active = true;
      if (item.type === "nose" && state.avatar.nose === item.id) active = true;
      if (item.type === "lips" && state.avatar.lips === item.id) active = true;
      if (item.type === "eyeShape" && state.avatar.eyeShape === item.id) active = true;
      
      if (item.type === "hair" && state.avatar.hairStyle === item.id) active = true;
      if (item.type === "hairColor" && state.avatar.hairColor === item.id) active = true;
      if (item.type === "facialHair" && state.avatar.facialHair === item.id) active = true;
      
      if (item.type === "outfit" && state.avatar.outfit === item.id) active = true;
      if (item.type === "shoes" && state.avatar.shoes === item.id) active = true;
      
      if (item.type === "glasses" && state.avatar.glasses === item.id) active = true;
      if (item.type === "earrings" && state.avatar.earrings === item.id) active = true;
      if (item.type === "cap" && state.avatar.cap === item.id) active = true;
      if (item.type === "watch" && state.avatar.watch === item.id) active = true;
      if (item.type === "currentExpression" && state.avatar.currentExpression === item.id) active = true;
    }
    
    if (active) btn.classList.add("selected");
    
    btn.innerHTML = `
      <span class="editor-option-btn-icon">${item.icon}</span>
      <span class="editor-option-btn-label">${item.label}</span>
      ${isLocked ? `<span style="font-size:0.55rem; color:#f43f5e; font-weight:bold; margin-top:2px;">🔒 ${lockMsg}</span>` : ''}
    `;
    
    if (!isLocked) {
      btn.addEventListener("click", () => {
        if (item.id === "freckles-toggle") {
          state.avatar.freckles = !state.avatar.freckles;
        } else {
          state.avatar[item.type] = item.id;
        }
        
        saveStateToLocalStorage();
        renderAvatar();
        renderAvatarEditorOptions();
        showToastNotification("🎨 Customization Applied", "Avatar parameters updated.");
      });
    } else {
      btn.addEventListener("click", () => {
        showToastNotification("🔒 Item Locked", `This premium item requires: ${lockMsg}. Complete fitness goals to unlock it!`);
      });
    }
    
    optionsBox.appendChild(btn);
  });
}

// Upgraded SVG Biomechanics Exercise visualizer animation generator
function renderExerciseAnimation(name) {
  const frame = document.getElementById("exerciseDemoFrame");
  const box = document.getElementById("exerciseDemoBox");
  const desc = document.getElementById("exerciseDemoInstructions");
  
  if (!frame || !box || !desc) return;
  
  frame.style.display = "block";
  const label = name.toLowerCase();
  
  let animationSvg = "";
  let instructions = "Simulating movement biomechanics.";

  if (label.includes("squat")) {
    instructions = "Squats: Keep back straight, hips hinge backwards, thighs reach parallel to ground.";
    animationSvg = `
      <svg class="exercise-demo-svg" viewBox="0 0 200 240">
        <!-- Floor line -->
        <line x1="20" y1="220" x2="180" y2="220" stroke="rgba(255,255,255,0.15)" stroke-width="3" />
        
        <!-- Stand pivot helper -->
        <circle cx="150" cy="220" r="4" fill="var(--neon-green)" />
        
        <!-- Joint Group Animation Skeleton -->
        <!-- Calves -->
        <g class="anim-squat-calves">
              <line x1="150" y1="220" x2="140" y2="175" stroke="#fff" stroke-width="6" stroke-linecap="round" />
          
          <!-- Thighs -->
          <g class="anim-squat-thighs" style="transform-origin: 140px 175px;">
            <line x1="140" y1="175" x2="95" y2="165" stroke="#ffaa00" stroke-width="6" stroke-linecap="round" />
            
            <!-- Torso / Spine -->
            <g class="anim-squat-torso" style="transform-origin: 95px 165px;">
              <line x1="95" y1="165" x2="90" y2="105" stroke="var(--neon-cyan)" stroke-width="8" stroke-linecap="round" />
              <!-- Arms holding weights -->
              <line x1="90" y1="115" x2="115" y2="115" stroke="#fff" stroke-width="4" />
              <line x1="115" y1="115" x2="115" y2="135" stroke="#ff005b" stroke-width="5" />
              <circle cx="115" cy="135" r="5" fill="#111" stroke="#fff" />
              
              <!-- Head -->
              <g class="anim-squat-head">
                <circle cx="90" cy="85" r="14" fill="${state.avatar.skinTone}" stroke="#fff" stroke-width="1.5" />
                <rect x="80" y="82" width="10" height="4" fill="var(--neon-cyan)" />
              </g>
            </g>
          </g>
        </g>
      </svg>
    `;
  } else if (label.includes("pushup") || label.includes("push-up")) {
    instructions = "Pushups: Engage core, keep body in single straight plank line, elbow bend 90 degrees.";
    animationSvg = `
      <svg class="exercise-demo-svg" viewBox="0 0 240 240">
        <line x1="20" y1="220" x2="220" y2="220" stroke="rgba(255,255,255,0.15)" stroke-width="3" />
        
        <!-- Pushup arms pivot -->
        <g class="anim-pushup-arms">
          <line x1="65" y1="220" x2="65" y2="185" stroke="#fff" stroke-width="5" stroke-linecap="round" />
          <line x1="65" y1="185" x2="90" y2="170" stroke="var(--neon-cyan)" stroke-width="5" stroke-linecap="round" />
        </g>

        <!-- Body straight plank group pivoting around toes on floor -->
        <g class="anim-pushup-body">
          <!-- Foot toes -->
          <circle cx="180" cy="220" r="5" fill="var(--neon-green)" />
          <!-- Spine / Body straight -->
          <line x1="180" y1="220" x2="80" y2="175" stroke="#ffaa00" stroke-width="7" stroke-linecap="round" />
          
          <!-- Head -->
          <circle cx="65" cy="168" r="13" fill="${state.avatar.skinTone}" stroke="#fff" stroke-width="1.5" />
          <rect x="58" y="165" width="8" height="3" fill="var(--neon-cyan)" />
        </g>
      </svg>
    `;
  } else if (label.includes("plank")) {
    instructions = "Planks: Brace abdominals, hold straight posture. Shivering represents core fatigue effort.";
    animationSvg = `
      <svg class="exercise-demo-svg" viewBox="0 0 240 240">
        <line x1="20" y1="220" x2="220" y2="220" stroke="rgba(255,255,255,0.15)" stroke-width="3" />
        
        <!-- Elbow forearm support -->
        <line x1="65" y1="220" x2="85" y2="220" stroke="#fff" stroke-width="5" stroke-linecap="round" />
        <line x1="85" y1="220" x2="80" y2="195" stroke="#fff" stroke-width="5" stroke-linecap="round" />
        
        <!-- High-intensity shiver group -->
        <g class="anim-plank-shake" style="transform-origin: 180px 220px;">
          <!-- Body plank spine -->
          <line x1="180" y1="220" x2="80" y2="195" class="anim-plank-breath" stroke="var(--neon-purple)" stroke-width="7" stroke-linecap="round" />
          <circle cx="180" cy="220" r="5" fill="var(--neon-green)" />
          
          <!-- Head -->
          <circle cx="65" cy="188" r="13" fill="${state.avatar.skinTone}" stroke="#fff" stroke-width="1.5" />
          
          <!-- Dripping Sweat drop -->
          <circle class="anim-plank-sweat" cx="95" cy="205" r="2.5" fill="var(--neon-cyan)" />
        </g>
      </svg>
    `;
  } else { // Bicep Curls or generic
    instructions = "Bicep Curls: Keep elbows pinned to sides, curl forearm upwards contracting biceps.";
    animationSvg = `
      <svg class="exercise-demo-svg" viewBox="0 0 200 240">
        <!-- Standing floor line -->
        <line x1="30" y1="220" x2="170" y2="220" stroke="rgba(255,255,255,0.15)" stroke-width="3" />
        
        <!-- Lower Body Static -->
        <line x1="105" y1="220" x2="105" y2="175" stroke="#fff" stroke-width="6" stroke-linecap="round" />
        
        <!-- Upper Body Torso -->
        <line x1="105" y1="175" x2="105" y2="120" stroke="var(--neon-purple)" stroke-width="8" stroke-linecap="round" />
        
        <!-- Head -->
        <circle cx="105" cy="100" r="14" fill="${state.avatar.skinTone}" stroke="#fff" stroke-width="1.5" />
        
        <!-- Upper Arm static -->
        <line x1="105" y1="130" x2="105" y2="175" stroke="#fff" stroke-width="4.5" stroke-linecap="round" />
        
        <!-- Forearm group rotating Curler -->
        <g class="anim-curl-forearm">
          <line x1="105" y1="175" x2="135" y2="195" stroke="var(--neon-cyan)" stroke-width="4.5" stroke-linecap="round" />
          <!-- Dumbbell -->
          <line x1="130" y1="185" x2="140" y2="205" stroke="#ffaa00" stroke-width="4" />
          <circle cx="130" cy="185" r="5" fill="#111" stroke="#ffaa00" />
          <circle cx="140" cy="205" r="5" fill="#111" stroke="#ffaa00" />
        </g>
      </svg>
    `;
  }
  
  box.innerHTML = animationSvg;
  desc.textContent = instructions;
}

// ==========================================
// 12. TODAY'S KNOWLEDGE GENERATOR
// ==========================================
function renderTodayKnowledge() {
  const container = document.getElementById("knowledgeContainer");
  if (!container) return;
  
  const currentLang = state.language;
  const list = bodybuildingLegends[currentLang] || bodybuildingLegends["en"];
  
  container.innerHTML = "";
  list.forEach((leg, index) => {
    const card = document.createElement("div");
    card.className = "glass-card legend-card glow-purple";
    card.innerHTML = `
      <div class="legend-header-img">
        <div class="legend-img-placeholder">💪</div>
        <div class="legend-banner">
          <h4>${leg.name}</h4>
          <p>${leg.title}</p>
        </div>
      </div>
      <div class="legend-body">
        <div>
          <blockquote class="legend-quote">"${leg.quote}"</blockquote>
          <p class="legend-philosophy">${leg.philosophy}</p>
        </div>
        <div class="legend-footer">
          <button class="btn btn-secondary btn-speak-legend" data-leg-idx="${index}">🔊 Listen Story</button>
          <span style="font-size: 0.8rem; color: var(--text-dim);">Philosopher Mode</span>
        </div>
      </div>
    `;
    
    // Wire Speech synthesis
    card.querySelector(".btn-speak-legend").addEventListener("click", () => {
      speakText(`${leg.name}. ${leg.title}. Quote: ${leg.quote}. Philosophy: ${leg.philosophy}`);
    });
    
    container.appendChild(card);
  });
}

// ==========================================
// 13. MUSIC & MOTIVATION ZONE CONTROLLER
// ==========================================

let audioPlayer = new Audio();
let audioCtx = null;
let currentSynthInterval = null;
let activeSessionTimer = null;
let filtersBound = false;

// Initialize smart music state variables if not defined
state.music.shuffle = state.music.shuffle || false;
state.music.repeat = state.music.repeat || "off"; // "off", "all", "one"
state.music.volume = state.music.volume !== undefined ? state.music.volume : 0.5;
state.music.likes = state.music.likes || []; // List of track titles liked
state.music.skips = state.music.skips || {}; // Map of track title to skip count
state.music.activeMix = state.music.activeMix || "all";

// Setup Audio Player Event Listeners
audioPlayer.volume = state.music.volume;

audioPlayer.addEventListener("timeupdate", () => {
  const current = audioPlayer.currentTime || 0;
  const duration = audioPlayer.duration || 0;
  
  const seekRange = document.getElementById("musicSeekRange");
  if (seekRange && !seekRange.dataset.isUserSeeking) {
    const pct = duration > 0 ? (current / duration) * 100 : 0;
    seekRange.value = pct;
  }
  
  const currentLabel = document.getElementById("musicTimeCurrent");
  if (currentLabel) {
    currentLabel.textContent = formatTime(current);
  }
  const durationLabel = document.getElementById("musicTimeDuration");
  if (durationLabel && duration > 0 && isFinite(duration)) {
    durationLabel.textContent = formatTime(duration);
  }
});

audioPlayer.addEventListener("ended", () => {
  if (state.music.repeat === "one") {
    audioPlayer.currentTime = 0;
    audioPlayer.play().catch(e => console.log("Play failed on loop", e));
  } else {
    nextTrack();
  }
});

audioPlayer.addEventListener("error", (e) => {
  console.warn("Audio file failed to load, falling back to procedural synthesizer loops", e);
  showToastNotification("⚠️ Audio Unavailable", "Loading error. Falling back to cyber synth loop.");
  audioPlayer.pause();
  simulateSynthesizerVibe();
});

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

// Binds all DOM elements and UI triggers for the music page
function setupMusicZone() {
  const moodFilter = document.getElementById("musicMoodFilter");
  const langFilter = document.getElementById("musicLangFilter");
  
  if (moodFilter && langFilter && !filtersBound) {
    filtersBound = true;
    moodFilter.addEventListener("change", () => {
      state.music.activeMix = "all";
      updateMixPillsStyling();
      renderTracks();
    });
    langFilter.addEventListener("change", () => {
      state.music.activeMix = "all";
      updateMixPillsStyling();
      renderTracks();
    });
  }
  
  // Set filter value defaults based on onboarding if not yet configured
  if (moodFilter && moodFilter.value === "all" && state.onboarding.mood) {
    const obMood = state.onboarding.mood;
    const moodMap = {
      motivated: "Motivated",
      happy: "Happy",
      excited: "Excited",
      tired: "Low Energy",
      stressed: "Low Energy"
    };
    if (moodMap[obMood]) moodFilter.value = moodMap[obMood];
  }
  
  if (langFilter && langFilter.value === "all" && state.onboarding.preferredLang) {
    langFilter.value = state.onboarding.preferredLang;
  }
  
  // Bind Volume Slider
  const volSlider = document.getElementById("musicVolumeSlider");
  if (volSlider) {
    volSlider.value = state.music.volume;
    volSlider.addEventListener("input", (e) => {
      const val = parseFloat(e.target.value);
      state.music.volume = val;
      audioPlayer.volume = val;
      saveStateToLocalStorage();
    });
  }
  
  // Bind Seek Range Slider
  const seekRange = document.getElementById("musicSeekRange");
  if (seekRange) {
    seekRange.addEventListener("mousedown", () => {
      seekRange.dataset.isUserSeeking = "true";
    });
    seekRange.addEventListener("mouseup", () => {
      seekRange.dataset.isUserSeeking = "false";
    });
    seekRange.addEventListener("change", (e) => {
      const pct = parseFloat(e.target.value);
      if (audioPlayer.duration) {
        audioPlayer.currentTime = (pct / 100) * audioPlayer.duration;
      }
      seekRange.dataset.isUserSeeking = "false";
    });
  }
  
  // Refresh Controls indicators
  updateControlsUI();
  updateMixPillsStyling();
  
  renderTracks();
  renderWorkoutPlaylist();
}

function updateControlsUI() {
  const shuffleBtn = document.getElementById("musicShuffleBtn");
  if (shuffleBtn) {
    if (state.music.shuffle) {
      shuffleBtn.classList.add("active");
    } else {
      shuffleBtn.classList.remove("active");
    }
  }
  
  const repeatBtn = document.getElementById("musicRepeatBtn");
  if (repeatBtn) {
    if (state.music.repeat === "off") {
      repeatBtn.textContent = "🔁";
      repeatBtn.classList.remove("active");
      repeatBtn.title = "Repeat: Off";
    } else if (state.music.repeat === "all") {
      repeatBtn.textContent = "🔁";
      repeatBtn.classList.add("active");
      repeatBtn.title = "Repeat: All";
    } else if (state.music.repeat === "one") {
      repeatBtn.textContent = "🔂";
      repeatBtn.classList.add("active");
      repeatBtn.title = "Repeat: One";
    }
  }
}

function updateMixPillsStyling() {
  const pills = ["all", "today", "muscle_gain", "fat_loss", "morning", "evening"];
  pills.forEach(mix => {
    const pill = document.getElementById(`mix-pill-${mix}`);
    if (pill) {
      if (state.music.activeMix === mix) {
        pill.classList.add("active");
      } else {
        pill.classList.remove("active");
      }
    }
  });
}

function selectMusicMix(mixName) {
  state.music.activeMix = mixName;
  updateMixPillsStyling();
  renderTracks();
  showToastNotification("Mix Selected 🎵", `Switched playlist source to ${mixName.toUpperCase().replace('_', ' ')} mix.`);
}

// Smart AI Recommendation & scoring heuristics engine
function getRecommendedPlaylist() {
  const currentLang = state.language;
  const userGoal = state.onboarding.goal || "muscle_gain";
  const userCountry = (state.onboarding.country || "United States").toLowerCase();
  const onboardingGenres = state.onboarding.musicGenres || [];
  
  const moodFilter = document.getElementById("musicMoodFilter") ? document.getElementById("musicMoodFilter").value : "all";
  const langFilter = document.getElementById("musicLangFilter") ? document.getElementById("musicLangFilter").value : "all";
  
  // Calculate a recommendation score for each track in database
  const scoredTracks = musicTracksDatabase.map((track, originalIdx) => {
    let score = 0;
    
    // 1. Country-based recommendation boosts (+15)
    if (userCountry.includes("india") || userCountry.includes("bharat")) {
      if (["hi", "pun", "ta", "te", "gu"].includes(track.language) || track.genre === "Bollywood" || track.genre === "Regional Music") {
        score += 15;
      }
    } else if (userCountry.includes("united states") || userCountry.includes("usa") || userCountry.includes("us")) {
      if (["Pop", "Hip-Hop", "EDM", "Rock"].includes(track.genre) && track.language === "en") {
        score += 15;
      }
    } else if (userCountry.includes("united kingdom") || userCountry.includes("uk")) {
      if (["Pop", "EDM"].includes(track.genre) && track.language === "en") {
        score += 15;
      }
    } else if (userCountry.includes("korea")) {
      if (track.genre === "K-Pop") {
        score += 15;
      }
    } else if (userCountry.includes("japan")) {
      if (track.genre === "J-Pop") {
        score += 15;
      }
    } else if (userCountry.includes("latin") || userCountry.includes("mexico") || userCountry.includes("spain") || userCountry.includes("brazil")) {
      if (track.genre === "Latin") {
        score += 15;
      }
    }
    
    // 2. Onboarding favorite genres boosts (+12)
    if (onboardingGenres.includes(track.genre)) {
      score += 12;
    }
    
    // 3. User explicit Likes boost (+20)
    if (state.music.likes && state.music.likes.includes(track.title)) {
      score += 20;
    }
    
    // 4. Smart feedback skip/dislike penalty (-10)
    const skipCount = state.music.skips && state.music.skips[track.title] ? state.music.skips[track.title] : 0;
    score -= (skipCount * 8);
    
    // 5. Workout specific filters (for curated mixes)
    const mix = state.music.activeMix;
    if (mix === "today") {
      if (track.energy === "high" || track.bpm >= 120) score += 10;
    } else if (mix === "muscle_gain") {
      if (["Rock", "Hip-Hop"].includes(track.genre)) score += 15;
      if (track.energy === "high") score += 5;
    } else if (mix === "fat_loss") {
      if (["EDM", "Pop"].includes(track.genre)) score += 15;
      if (track.bpm >= 128) score += 10;
    } else if (mix === "morning") {
      if (track.mood === "Happy" || track.mood === "Excited") score += 15;
    } else if (mix === "evening") {
      if (track.mood === "Calm" || track.energy === "low") score += 25;
      else score -= 15; // demote high energy
    }
    
    return { track, score, originalIdx };
  });
  
  let filtered = scoredTracks;
  if (moodFilter !== "all") {
    filtered = filtered.filter(item => item.track.mood === moodFilter);
  }
  if (langFilter !== "all") {
    filtered = filtered.filter(item => item.track.language === langFilter);
  }
  
  filtered.sort((a, b) => b.score - a.score);
  
  return filtered.map(item => ({ ...item.track, dbIndex: item.originalIdx }));
}

function renderTracks() {
  const container = document.getElementById("playlistContainer");
  const catalogCountText = document.getElementById("catalogCountText");
  if (!container) return;
  
  container.innerHTML = "";
  const recommendedTracks = getRecommendedPlaylist();
  
  state.music.tracks = recommendedTracks;
  if (catalogCountText) catalogCountText.textContent = `${recommendedTracks.length} Recommended`;
  
  if (recommendedTracks.length === 0) {
    container.innerHTML = `<div style="color:var(--text-muted); font-size:0.8rem; text-align:center; padding:1.5rem;">No tracks match the active filters.</div>`;
    return;
  }
  
  recommendedTracks.forEach((track, index) => {
    const div = document.createElement("div");
    const isActive = state.music.playSource === "catalog" && index === state.music.currentTrackIndex && state.music.playing;
    div.className = `track-item ${isActive ? 'active' : ''}`;
    
    const isLiked = state.music.likes && state.music.likes.includes(track.title);
    
    div.innerHTML = `
      <div class="track-details" style="max-width:70%;">
        <span class="track-title">${track.title} ${isLiked ? '❤️' : ''}</span>
        <span class="track-artist">${track.artist} (${track.genre} • ${track.bpm} BPM)</span>
      </div>
      <div class="track-actions">
        <button class="btn-track-action play-btn">▶️ Play</button>
        <button class="btn-track-action add-btn" style="color:var(--neon-cyan);">＋ Add</button>
      </div>
    `;
    
    div.querySelector(".play-btn").addEventListener("click", () => {
      state.music.playSource = "catalog";
      playTrack(index);
    });
    
    div.querySelector(".add-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      if (state.music.workoutPlaylist.includes(track.dbIndex)) {
        showToastNotification("Already Added", "This song is already in your custom playlist.");
      } else {
        state.music.workoutPlaylist.push(track.dbIndex);
        saveStateToLocalStorage();
        renderWorkoutPlaylist();
        showToastNotification("🎵 Playlist Updated", `"${track.title}" added to your custom playlist loop.`);
      }
    });
    
    container.appendChild(div);
  });
  
  updateNowPlayingCard();
}

function renderWorkoutPlaylist() {
  const container = document.getElementById("workoutPlaylistContainer");
  const countText = document.getElementById("playlistCountText");
  
  if (!container) return;
  container.innerHTML = "";
  
  const playlist = state.music.workoutPlaylist || [];
  if (countText) countText.textContent = `${playlist.length} Tracks`;
  
  if (playlist.length === 0) {
    container.innerHTML = `<div style="color:var(--text-muted); font-size:0.8rem; text-align:center; padding:1.5rem;">Your playlist is empty. Add tracks from the catalog!</div>`;
    return;
  }
  
  playlist.forEach((dbIndex, playlistIndex) => {
    const track = musicTracksDatabase[dbIndex];
    if (!track) return;
    
    const div = document.createElement("div");
    const isActive = state.music.playSource === "playlist" && playlistIndex === state.music.currentTrackIndex && state.music.playing;
    div.className = `track-item ${isActive ? 'active' : ''}`;
    
    div.innerHTML = `
      <div class="track-details">
        <span class="track-title" style="color:var(--neon-purple);">'${track.title}'</span>
        <span class="track-artist">${track.artist} (${track.genre})</span>
      </div>
      <div class="track-actions">
        <button class="btn-track-action play-btn">▶️ Play</button>
        <button class="btn-track-action remove-btn" style="color:var(--neon-rose);">❌ Remove</button>
      </div>
    `;
    
    div.querySelector(".play-btn").addEventListener("click", () => {
      state.music.playSource = "playlist";
      playTrack(playlistIndex);
    });
    
    div.querySelector(".remove-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      state.music.workoutPlaylist.splice(playlistIndex, 1);
      saveStateToLocalStorage();
      renderWorkoutPlaylist();
      renderTracks();
      showToastNotification("Removed Track", `Removed "${track.title}" from custom playlist.`);
    });
    
    container.appendChild(div);
  });
  
  updateNowPlayingCard();
}

// Triggers playback of a selected track
function playTrack(idx) {
  if (currentSynthInterval) {
    clearInterval(currentSynthInterval);
    currentSynthInterval = null;
  }
  
  const currentList = state.music.playSource === "playlist" ? state.music.workoutPlaylist : state.music.tracks;
  if (currentList.length === 0) return;
  
  if (idx < 0) idx = currentList.length - 1;
  if (idx >= currentList.length) idx = 0;
  
  state.music.currentTrackIndex = idx;
  state.music.playing = true;
  state.music.lastPlayTime = Date.now();
  
  const dbIndex = state.music.playSource === "playlist" ? currentList[idx] : currentList[idx].dbIndex;
  const track = musicTracksDatabase[dbIndex];
  if (!track) return;
  
  audioPlayer.src = track.url;
  audioPlayer.volume = state.music.volume;
  
  audioPlayer.play()
    .then(() => {
      const disc = document.getElementById("musicDisc");
      const playBtn = document.getElementById("musicPlayBtn");
      if (disc) disc.classList.add("playing");
      if (playBtn) playBtn.textContent = "⏸️ Pause";
      
      updateNowPlayingCard();
      addXP(5);
    })
    .catch(err => {
      console.warn("Real audio playback blocked/error. Falling back to custom procedural synthesizers", err);
      simulateSynthesizerVibe();
    });
}

function togglePlay() {
  const disc = document.getElementById("musicDisc");
  const playBtn = document.getElementById("musicPlayBtn");
  const currentList = state.music.playSource === "playlist" ? state.music.workoutPlaylist : state.music.tracks;
  
  if (currentList.length === 0) return;
  
  if (state.music.playing) {
    state.music.playing = false;
    audioPlayer.pause();
    if (currentSynthInterval) {
      clearInterval(currentSynthInterval);
      currentSynthInterval = null;
    }
    if (disc) disc.classList.remove("playing");
    if (playBtn) playBtn.textContent = "▶️ Play";
  } else {
    if (!audioPlayer.src) {
      playTrack(state.music.currentTrackIndex);
    } else {
      audioPlayer.play()
        .then(() => {
          state.music.playing = true;
          if (disc) disc.classList.add("playing");
          if (playBtn) playBtn.textContent = "⏸️ Pause";
          updateNowPlayingCard();
        })
        .catch(err => {
          simulateSynthesizerVibe();
        });
    }
  }
}

function nextTrack() {
  const currentList = state.music.playSource === "playlist" ? state.music.workoutPlaylist : state.music.tracks;
  if (currentList.length === 0) return;
  
  const lastPlay = state.music.lastPlayTime || 0;
  const playDuration = Date.now() - lastPlay;
  const currentTrack = state.music.playSource === "playlist" ? musicTracksDatabase[currentList[state.music.currentTrackIndex]] : currentList[state.music.currentTrackIndex];
  
  if (playDuration < 15000 && currentTrack) {
    if (!state.music.skips[currentTrack.title]) state.music.skips[currentTrack.title] = 0;
    state.music.skips[currentTrack.title]++;
    saveStateToLocalStorage();
    console.log(`Smart AI: Track "${currentTrack.title}" skipped early. Skip penalty applied!`);
  }
  
  let idx = 0;
  if (state.music.shuffle) {
    idx = Math.floor(Math.random() * currentList.length);
  } else {
    idx = state.music.currentTrackIndex + 1;
    if (idx >= currentList.length) idx = 0;
  }
  playTrack(idx);
}

function prevTrack() {
  const currentList = state.music.playSource === "playlist" ? state.music.workoutPlaylist : state.music.tracks;
  if (currentList.length === 0) return;
  
  let idx = state.music.currentTrackIndex - 1;
  if (idx < 0) idx = currentList.length - 1;
  playTrack(idx);
}

function toggleShuffle() {
  state.music.shuffle = !state.music.shuffle;
  saveStateToLocalStorage();
  updateControlsUI();
  showToastNotification(state.music.shuffle ? "🔀 Shuffle On" : "➡️ Shuffle Off", "Tracks playback sequence altered.");
}

function toggleRepeat() {
  const states = ["off", "all", "one"];
  let currIdx = states.indexOf(state.music.repeat || "off");
  currIdx = (currIdx + 1) % states.length;
  state.music.repeat = states[currIdx];
  saveStateToLocalStorage();
  updateControlsUI();
  showToastNotification("🔁 Repeat Mode", `Swapped repeat to: ${state.music.repeat.toUpperCase()}`);
}

function likeCurrentTrack() {
  const currentList = state.music.playSource === "playlist" ? state.music.workoutPlaylist : state.music.tracks;
  if (currentList.length === 0) return;
  
  const currentItem = currentList[state.music.currentTrackIndex];
  const track = state.music.playSource === "playlist" ? musicTracksDatabase[currentItem] : currentItem;
  if (!track) return;
  
  if (!state.music.likes) state.music.likes = [];
  const idx = state.music.likes.indexOf(track.title);
  if (idx > -1) {
    state.music.likes.splice(idx, 1);
    showToastNotification("❤️ Unliked Track", `Removed "${track.title}" from liked songs list.`);
  } else {
    state.music.likes.push(track.title);
    showToastNotification("❤️ Liked Track", `"${track.title}" added to liked playlist. Prioritizing this genre!`);
    addXP(10);
  }
  saveStateToLocalStorage();
  renderTracks();
}

function dislikeCurrentTrack() {
  const currentList = state.music.playSource === "playlist" ? state.music.workoutPlaylist : state.music.tracks;
  if (currentList.length === 0) return;
  
  const currentItem = currentList[state.music.currentTrackIndex];
  const track = state.music.playSource === "playlist" ? musicTracksDatabase[currentItem] : currentItem;
  if (!track) return;
  
  if (!state.music.skips[track.title]) state.music.skips[track.title] = 0;
  state.music.skips[track.title] += 2;
  saveStateToLocalStorage();
  showToastNotification("👎 Disliked Track", `Removed and demoted recommendations for "${track.title}".`);
  nextTrack();
}

function updateNowPlayingCard() {
  let track = null;
  const currentList = state.music.playSource === "playlist" ? state.music.workoutPlaylist : state.music.tracks;
  if (currentList.length > 0 && state.music.currentTrackIndex < currentList.length) {
    if (state.music.playSource === "playlist") {
      const dbIndex = state.music.workoutPlaylist[state.music.currentTrackIndex];
      track = musicTracksDatabase[dbIndex];
    } else {
      track = state.music.tracks[state.music.currentTrackIndex];
    }
  }
  
  if (!track) return;
  
  const titleEl = document.getElementById("npTitle");
  const artistEl = document.getElementById("npArtist");
  const tagEl = document.getElementById("npTag");
  
  if (titleEl) titleEl.textContent = track.title;
  if (artistEl) artistEl.textContent = track.artist;
  if (tagEl) tagEl.textContent = `Vibe: ${track.mood.toUpperCase()} • ${track.genre} • (${track.language.toUpperCase()})`;
  
  const catalogTracks = document.getElementById("playlistContainer") ? document.getElementById("playlistContainer").querySelectorAll(".track-item") : [];
  catalogTracks.forEach((el, index) => {
    if (state.music.playSource === "catalog" && index === state.music.currentTrackIndex && state.music.playing) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });

  const customTracks = document.getElementById("workoutPlaylistContainer") ? document.getElementById("workoutPlaylistContainer").querySelectorAll(".track-item") : [];
  customTracks.forEach((el, index) => {
    if (state.music.playSource === "playlist" && index === state.music.currentTrackIndex && state.music.playing) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

function simulateSynthesizerVibe() {
  if (currentSynthInterval) {
    clearInterval(currentSynthInterval);
    currentSynthInterval = null;
  }
  
  if (!window.AudioContext && !window.webkitAudioContext) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    
    const currentList = state.music.playSource === "playlist" ? state.music.workoutPlaylist : state.music.tracks;
    const dbIndex = state.music.playSource === "playlist" ? currentList[state.music.currentTrackIndex] : currentList[state.music.currentTrackIndex].dbIndex;
    const track = musicTracksDatabase[dbIndex] || { genre: "Pop", bpm: 120 };
    
    const bpm = track.bpm || 120;
    const intervalMs = (60 / bpm) * 1000 * 0.5;
    
    let noteIndex = 0;
    let freqs = [261.63, 329.63, 392.00, 523.25];
    if (track.genre === "Rock" || track.genre === "Hip-Hop") {
      freqs = [220.00, 261.63, 329.63, 440.00];
    } else if (track.genre === "Ambient" || track.genre === "Classical") {
      freqs = [196.00, 246.94, 293.66, 392.00, 493.88];
    }
    
    state.music.playing = true;
    const disc = document.getElementById("musicDisc");
    const playBtn = document.getElementById("musicPlayBtn");
    if (disc) disc.classList.add("playing");
    if (playBtn) playBtn.textContent = "⏸️ Pause";
    
    currentSynthInterval = setInterval(() => {
      if (!state.music.playing) {
        clearInterval(currentSynthInterval);
        currentSynthInterval = null;
        return;
      }
      
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      osc.type = track.genre === "Rock" ? "sawtooth" : "sine";
      osc.frequency.setValueAtTime(freqs[noteIndex % freqs.length], audioCtx.currentTime);
      
      gainNode.gain.setValueAtTime(state.music.volume * 0.2, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + (intervalMs / 1000) * 0.9);
      
      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      osc.start();
      osc.stop(audioCtx.currentTime + (intervalMs / 1000));
      
      noteIndex++;
    }, intervalMs);
    
    updateNowPlayingCard();
  } catch (err) {
    console.error("Synthesizer synthesis failed", err);
  }
}

function startActiveWorkoutSession(focusName) {
  const overlay = document.getElementById("workoutSessionOverlay");
  const focusTitle = document.getElementById("sessionFocusName");
  const timerText = document.getElementById("sessionTimerText");
  const phaseTag = document.getElementById("sessionPhaseTag");
  const progressFill = document.getElementById("sessionProgressFill");
  const coachTip = document.getElementById("sessionCoachTip");
  
  if (!overlay) return;
  
  if (activeSessionTimer) {
    clearInterval(activeSessionTimer);
  }
  
  overlay.style.display = "flex";
  if (focusTitle) focusTitle.textContent = focusName;
  
  let durationSeconds = 30;
  let elapsed = 0;
  
  const isCardio = focusName.toLowerCase().includes("cardio") || focusName.toLowerCase().includes("hiit") || focusName.toLowerCase().includes("mobility");
  if (isCardio) {
    state.music.activeMix = "fat_loss";
    showToastNotification("⚡ Session Auto-Music", "Running active Cardio focus: Swapping to Fat Loss EDM Mix!");
  } else {
    state.music.activeMix = "muscle_gain";
    showToastNotification("💪 Session Auto-Music", "Running heavy Strength focus: Swapping to Muscle Gain power Mix!");
  }
  
  updateMixPillsStyling();
  renderTracks();
  playTrack(0);
  
  if (phaseTag) {
    phaseTag.textContent = "🔥 PEAK INTENSITY PHASE";
    phaseTag.style.color = "var(--neon-cyan)";
  }
  if (coachTip) {
    coachTip.textContent = `"Peak duration active. Power through this set! Energy EDM/Rock synced."`;
  }
  
  activeSessionTimer = setInterval(() => {
    elapsed++;
    const remaining = durationSeconds - elapsed;
    
    const m = Math.floor(remaining / 60);
    const s = remaining % 60;
    if (timerText) timerText.textContent = `${m}:${s < 10 ? '0' : ''}${s}`;
    
    const pct = (elapsed / durationSeconds) * 100;
    if (progressFill) progressFill.style.width = `${pct}%`;
    
    if (remaining === 6) {
      state.music.activeMix = "evening";
      updateMixPillsStyling();
      renderTracks();
      playTrack(0);
      
      if (phaseTag) {
        phaseTag.textContent = "🧘 COOLDOWN & RECOVERY";
        phaseTag.style.color = "var(--neon-green)";
      }
      if (coachTip) {
        coachTip.textContent = `"Core training set complete. Lowering heart rate. Switching to Calm Zen elements."`;
      }
      showToastNotification("🧘 Cooldown Activated", "Transitioning to calming evening recovery frequencies!");
    }
    
    if (remaining <= 0) {
      clearInterval(activeSessionTimer);
      activeSessionTimer = null;
      overlay.style.display = "none";
      completeTodayWorkout(focusName);
    }
  }, 1000);
}

function stopActiveWorkoutSession() {
  if (activeSessionTimer) {
    clearInterval(activeSessionTimer);
    activeSessionTimer = null;
  }
  const overlay = document.getElementById("workoutSessionOverlay");
  if (overlay) overlay.style.display = "none";
  audioPlayer.pause();
  state.music.playing = false;
  if (currentSynthInterval) {
    clearInterval(currentSynthInterval);
    currentSynthInterval = null;
  }
  const disc = document.getElementById("musicDisc");
  const playBtn = document.getElementById("musicPlayBtn");
  if (disc) disc.classList.remove("playing");
  if (playBtn) playBtn.textContent = "▶️ Play";
  showToastNotification("Session Stopped", "Workout session aborted. Music paused.");
}

function setupSpeechSystems() {
  // 1. Setup speech synthesis toggle checks
  const feedbackToggle = document.getElementById("voiceFeedbackToggle");
  if (feedbackToggle) {
    feedbackToggle.checked = state.voiceFeedback;
    feedbackToggle.addEventListener("change", (e) => {
      state.voiceFeedback = e.target.checked;
      saveStateToLocalStorage();
      showToastNotification("Voice Response", state.voiceFeedback ? "Synthesizer feedback enabled." : "Synthesizer feedback muted.");
    });
  }

  const voiceCommandToggle = document.getElementById("voiceCommandsToggle");
  if (voiceCommandToggle) {
    voiceCommandToggle.checked = state.voiceCommands;
    voiceCommandToggle.addEventListener("change", (e) => {
      state.voiceCommands = e.target.checked;
      saveStateToLocalStorage();
      showToastNotification("Voice Controls", state.voiceCommands ? "Voice commands active. Say 'log water' or 'change theme'." : "Voice commands inactive.");
      if (state.voiceCommands) {
        initSpeechRecognition();
      } else {
        stopSpeechRecognition();
      }
    });
  }

  // Double trigger check on load
  if (state.voiceCommands) {
    initSpeechRecognition();
  }
}

function speakText(text) {
  if (!('speechSynthesis' in window)) {
    console.log("Text to speech not supported in this browser.");
    return;
  }
  
  // cancel existing
  window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(text);
  
  // Set voice language mapping
  const langCodes = { en: "en-US", es: "es-ES", hi: "hi-IN", gu: "gu-IN", ja: "ja-JP" };
  utterance.lang = langCodes[state.language] || "en-US";
  
  window.speechSynthesis.speak(utterance);
}

function initSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    showToastNotification("⚠️ Voice System Error", "Web Speech API is not supported in this browser. Please use Chrome or Edge.");
    console.log("Web Speech API Recognition not supported in this browser.");
    return;
  }
  
  if (speechRecognition) return; // already running
  
  speechRecognition = new SpeechRecognition();
  speechRecognition.continuous = true;
  speechRecognition.interimResults = false;
  
  const langCodes = { en: "en-US", es: "es-ES", hi: "hi-IN", gu: "gu-IN", ja: "ja-JP" };
  speechRecognition.lang = langCodes[state.language] || "en-US";
  
  speechRecognition.onstart = () => {
    console.log("Speech commands active. Listening...");
    const indicator = document.getElementById("speechActiveIndicator");
    if (indicator) indicator.style.display = "flex";
    
    const floatBtn = document.getElementById("voiceFloatBtn");
    if (floatBtn) floatBtn.classList.add("listening");
  };
  
  speechRecognition.onerror = (e) => {
    console.error("Speech Recognition Error", e);
    if (e.error === 'not-allowed') {
      showToastNotification("⚠️ Mic Access Denied", "Please enable microphone permission in your browser settings.");
      state.voiceCommands = false;
      const commandToggle = document.getElementById("voiceCommandsToggle");
      if (commandToggle) commandToggle.checked = false;
      const floatBtn = document.getElementById("voiceFloatBtn");
      if (floatBtn) floatBtn.classList.remove("listening");
      const indicator = document.getElementById("speechActiveIndicator");
      if (indicator) indicator.style.display = "none";
    } else {
      showToastNotification("⚠️ Speech Error", `Recognition error: ${e.error}`);
    }
  };
  
  speechRecognition.onend = () => {
    console.log("Speech engine disconnected. Restarting if enabled...");
    const indicator = document.getElementById("speechActiveIndicator");
    if (indicator) indicator.style.display = "none";
    
    const floatBtn = document.getElementById("voiceFloatBtn");
    if (floatBtn) floatBtn.classList.remove("listening");
    
    speechRecognition = null;
    if (state.voiceCommands) {
      setTimeout(initSpeechRecognition, 1000);
    }
  };
  
  speechRecognition.onresult = (event) => {
    const resultIdx = event.resultIndex;
    const commandText = event.results[resultIdx][0].transcript.trim().toLowerCase();
    
    console.log("Voice Command Interfaced:", commandText);
    processVoiceCommand(commandText);
  };
  
  speechRecognition.start();
}

function stopSpeechRecognition() {
  if (speechRecognition) {
    speechRecognition.stop();
    speechRecognition = null;
  }
}

function triggerVoiceManualListening() {
  // Temporary wake speech feedback or toggle state
  if (!state.voiceCommands) {
    state.voiceCommands = true;
    const commandToggle = document.getElementById("voiceCommandsToggle");
    if (commandToggle) commandToggle.checked = true;
    initSpeechRecognition();
    saveStateToLocalStorage();
    speakText("Voice recognition online. Speak your command.");
  } else {
    state.voiceCommands = false;
    const commandToggle = document.getElementById("voiceCommandsToggle");
    if (commandToggle) commandToggle.checked = false;
    stopSpeechRecognition();
    saveStateToLocalStorage();
    speakText("Voice recognition offline.");
  }
}

function processVoiceCommand(cmd) {
  showToastNotification("Voice Input Parsed", `"${cmd}"`);
  
  // Voice Command Routing
  if (cmd.includes("log water") || cmd.includes("पानी") || cmd.includes("પાણી") || cmd.includes("agua")) {
    addWater(250);
    speakText("Logged 250 milliliters of water. Stay hydrated.");
  }
  else if (cmd.includes("theme") || cmd.includes("dark") || cmd.includes("light") || cmd.includes("थीम") || cmd.includes("થીમ") || cmd.includes("テーマ")) {
    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
      themeToggle.click();
    }
  }
  else if (cmd.includes("chatbot") || cmd.includes("coach") || cmd.includes("कोच") || cmd.includes("કોચ") || cmd.includes("チャット")) {
    switchDashTab("tab-coach");
    speakText("AI coach console loaded.");
  }
  else if (cmd.includes("dashboard") || cmd.includes("home") || cmd.includes("डैशबोर्ड") || cmd.includes("ダッシュボード")) {
    switchDashTab("tab-home");
    speakText("Displaying dashboard metrics.");
  }
  else if (cmd.includes("music") || cmd.includes("song") || cmd.includes("संगीत") || cmd.includes("સંગીત") || cmd.includes("音楽")) {
    switchDashTab("tab-music");
    speakText("Motivation zone active.");
  }
}

// ==========================================
// 16. TOAST NOTIFICATION RUNNER
// ==========================================
function showToastNotification(title, msg) {
  const alertEl = document.getElementById("appAlertBanner");
  const alertTitle = document.getElementById("appAlertTitle");
  const alertMsg = document.getElementById("appAlertMsg");
  
  if (!alertEl || !alertTitle || !alertMsg) return;
  
  alertTitle.textContent = title;
  alertMsg.textContent = msg;
  
  alertEl.classList.add("show");
  
  // Auto slide out after 4 seconds
  setTimeout(() => {
    alertEl.classList.remove("show");
  }, 4000);
}

// ==========================================
// 17. UI EVENT HANDLERS & BINDINGS
// ==========================================
function setupUIEventListeners() {
  // Theme Toggle Button
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("change", (e) => {
      state.theme = e.target.checked ? "dark" : "light";
      saveStateToLocalStorage();
      applySavedTheme();
      renderWeightSVGChart(); // re-render charts to scale properly in colors
      showToastNotification("Theme Shifted", `Switching colors to ${state.theme} mode.`);
    });
  }
  
  // Form Screen Switching (Login, Register, Forgot)
  const tabLogin = document.getElementById("tabLogin");
  const tabSignup = document.getElementById("tabSignup");
  const formSignupGroup = document.getElementById("formSignupGroup");
  const btnSubmitAuth = document.getElementById("btnSubmitAuth");
  const authTitle = document.getElementById("authTitle");
  const authDesc = document.getElementById("authDesc");
  
  if (tabLogin && tabSignup && formSignupGroup && btnSubmitAuth && authTitle && authDesc) {
    tabLogin.addEventListener("click", () => {
      tabLogin.classList.add("active");
      tabSignup.classList.remove("active");
      formSignupGroup.style.display = "none";
      authTitle.textContent = translations[state.language].welcome_back;
      authDesc.textContent = translations[state.language].welcome_desc;
      btnSubmitAuth.textContent = translations[state.language].login;
    });
    
    tabSignup.addEventListener("click", () => {
      tabSignup.classList.add("active");
      tabLogin.classList.remove("active");
      formSignupGroup.style.display = "block";
      authTitle.textContent = translations[state.language].register_title;
      authDesc.textContent = translations[state.language].register_desc;
      btnSubmitAuth.textContent = translations[state.language].signup;
    });
  }

  // Toggle show/hide password buttons
  document.querySelectorAll(".input-icon-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const input = btn.closest(".input-wrapper").querySelector(".form-input");
      if (input.type === "password") {
        input.type = "text";
        btn.textContent = "👁️";
      } else {
        input.type = "password";
        btn.textContent = "👁️‍🗨️";
      }
    });
  });

  // Forgot password triggers
  const linkForgot = document.getElementById("linkForgot");
  const linkBackToLogin = document.getElementById("linkBackToLogin");
  const cardAuthGroup = document.getElementById("cardAuthGroup");
  const cardForgotGroup = document.getElementById("cardForgotGroup");

  if (linkForgot && linkBackToLogin && cardAuthGroup && cardForgotGroup) {
    linkForgot.addEventListener("click", (e) => {
      e.preventDefault();
      cardAuthGroup.style.display = "none";
      cardForgotGroup.style.display = "block";
    });
    linkBackToLogin.addEventListener("click", (e) => {
      e.preventDefault();
      cardForgotGroup.style.display = "none";
      cardAuthGroup.style.display = "block";
    });
  }

  // Google Login animation simulation
  const btnGoogle = document.getElementById("btnGoogle");
  if (btnGoogle) {
    btnGoogle.addEventListener("click", (e) => {
      e.preventDefault();
      btnGoogle.innerHTML = `<span>Connecting Google... 🚀</span>`;
      setTimeout(() => {
        state.auth.isLoggedIn = true;
        state.auth.user = "Google Warrior";
        saveStateToLocalStorage();
        initRouter();
        showToastNotification("Authenticated", "Connected via Google Firebase Identity.");
        // reset button text keeping the logo icon intact
        btnGoogle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48" style="vertical-align: middle; margin-right: 8px;">
          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
          <path fill="#4285F4" d="M46.5 24c0-1.55-.15-3.24-.47-4.77H24v9.03h12.75c-.55 2.87-2.22 5.29-4.72 6.96l7.3 5.66C43.51 36.6 46.5 30.93 46.5 24z"/>
          <path fill="#FBBC05" d="M10.54 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.98-6.19z"/>
          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.3-5.66c-2.2 1.47-5.01 2.47-8.59 2.47-6.26 0-11.57-4.22-13.46-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
        </svg>&nbsp; Google`;
      }, 1000);
    });
  }

  // Submit standard authentication
  const authForm = document.getElementById("authForm");
  if (authForm) {
    authForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const isSignup = tabSignup.classList.contains("active");
      const email = document.getElementById("authEmail").value || "fighter@fitverse.ai";
      const user = document.getElementById("authUsername").value || "Fighter";
      const remember = document.getElementById("rememberMe").checked;
      
      state.auth.isLoggedIn = true;
      state.auth.user = isSignup ? user : email.split("@")[0];
      state.auth.rememberMe = remember;
      
      saveStateToLocalStorage();
      showToastNotification("Authenticated", `Welcome to the grid, ${state.auth.user}`);
      initRouter();
    });
  }

  const forgotForm = document.getElementById("forgotForm");
  if (forgotForm) {
    forgotForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showToastNotification("Recovery Dispatched", "Check your virtual mailbox for the keys.");
      linkBackToLogin.click();
    });
  }

  // Logout Click
  const btnLogout = document.getElementById("btnLogout");
  if (btnLogout) {
    btnLogout.addEventListener("click", (e) => {
      e.preventDefault();
      state.auth.isLoggedIn = false;
      state.auth.user = null;
      localStorage.removeItem("fitverse_onboarding_completed");
      saveStateToLocalStorage();
      initRouter();
      showToastNotification("Logged Out", "DNA encryption closed.");
    });
  }

  // Onboarding Step transitions & selections
  setupOnboardingLogic();

  // Dashboard Sidebar Menu Items routing
  document.querySelectorAll(".dash-menu-item").forEach(btn => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-tab");
      switchDashTab(tabId);
    });
  });

  // Upgraded Avatar Category Switcher listeners
  document.querySelectorAll(".editor-category-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".editor-category-btn").forEach(el => el.classList.remove("active"));
      btn.classList.add("active");
      state.avatar.activeCategory = btn.getAttribute("data-category");
      renderAvatarEditorOptions();
    });
  });

  // Dismiss Evolution Celebration Overlay
  const btnDismissEvolution = document.getElementById("btnDismissEvolution");
  if (btnDismissEvolution) {
    btnDismissEvolution.addEventListener("click", () => {
      const overlay = document.getElementById("evolutionOverlay");
      if (overlay) overlay.style.display = "none";
    });
  }

  // Water Log Buttons
  const btnWater250 = document.getElementById("btnWater250");
  const btnWaterReset = document.getElementById("btnWaterReset");
  if (btnWater250) btnWater250.addEventListener("click", () => addWater(250));
  if (btnWaterReset) btnWaterReset.addEventListener("click", resetWaterLogs);

  // AI Chat Send button and listeners
  const btnSendChat = document.getElementById("btnSendChat");
  const chatInput = document.getElementById("chatInput");
  if (btnSendChat) btnSendChat.addEventListener("click", sendChatMessage);
  if (chatInput) {
    chatInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") sendChatMessage();
    });
  }

  // Suggestion Chips click event bindings
  document.querySelectorAll(".suggestion-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const query = chip.getAttribute("data-query");
      const input = document.getElementById("chatInput");
      if (input) {
        input.value = query;
        sendChatMessage();
      }
    });
  });

  // Voice floating trigger button
  const voiceFloatBtn = document.getElementById("voiceFloatBtn");
  if (voiceFloatBtn) voiceFloatBtn.addEventListener("click", triggerVoiceManualListening);

  // Settings form controls
  const settingsLang = document.getElementById("settingsLanguage");
  if (settingsLang) {
    settingsLang.value = state.language;
    settingsLang.addEventListener("change", (e) => {
      state.language = e.target.value;
      state.onboarding.preferredLang = e.target.value;
      saveStateToLocalStorage();
      updateTranslationText();
      // rebuild dynamic tabs to map translations
      renderTodayKnowledge();
      showToastNotification("Language Settings Updated", `System interface mapped to ${state.language.toUpperCase()}.`);
    });
  }

  const settingsUnits = document.getElementById("settingsUnits");
  if (settingsUnits) {
    settingsUnits.value = state.onboarding.units;
    settingsUnits.addEventListener("change", (e) => {
      state.onboarding.units = e.target.value;
      saveStateToLocalStorage();
      recalculateHealthMetrics();
      generateAIPlan();
      showToastNotification("Metric Units Mapped", `System metrics updated.`);
    });
  }

  const settingsBudget = document.getElementById("settingsBudget");
  if (settingsBudget) {
    settingsBudget.value = state.onboarding.budget || "moderate";
    settingsBudget.addEventListener("change", (e) => {
      state.onboarding.budget = e.target.value;
      saveStateToLocalStorage();
      generateAIPlan();
      showToastNotification("Budget Changed", `Diet target recalibrated to ${state.onboarding.budget} tier.`);
    });
  }

  const settingsActivity = document.getElementById("settingsActivity");
  if (settingsActivity) {
    settingsActivity.value = state.onboarding.activityLevel || "lightly_active";
    settingsActivity.addEventListener("change", (e) => {
      state.onboarding.activityLevel = e.target.value;
      saveStateToLocalStorage();
      generateAIPlan();
      showToastNotification("Activity Level Updated", `Diet target recalculated.`);
    });
  }

  // Weekly & Monthly chart toggles
  const btnWeekly = document.getElementById("btnWeeklyChart");
  const btnMonthly = document.getElementById("btnMonthlyChart");
  if (btnWeekly && btnMonthly) {
    btnWeekly.addEventListener("click", () => {
      state.userStats.chartMode = "weekly";
      saveStateToLocalStorage();
      updateDashboardDOM();
    });
    btnMonthly.addEventListener("click", () => {
      state.userStats.chartMode = "monthly";
      saveStateToLocalStorage();
      updateDashboardDOM();
    });
  }
  }

// ==========================================
// 18. ONBOARDING SUB-ROUTINE SETUP
// ==========================================
function setupOnboardingLogic() {
  // Step cards styling toggles (Goal, Workout pref, Diet type, etc.)
  setupCardSelect("ob-goal-grid", (val) => {
    state.onboarding.goal = val;
  });
  setupCardSelect("ob-workout-grid", (val) => {
    state.onboarding.workoutPref = val;
  });
  setupCardSelect("ob-diet-grid", (val) => {
    state.onboarding.diet = val;
  });
  setupCardSelect("ob-mood-grid", (val) => {
    state.onboarding.mood = val;
  });

  // Multi-genres checkboxes selection
  document.querySelectorAll(".genre-card").forEach(card => {
    card.addEventListener("click", () => {
      const genre = card.getAttribute("data-val");
      card.classList.toggle("selected-purple");
      
      const idx = state.onboarding.musicGenres.indexOf(genre);
      if (idx > -1) {
        state.onboarding.musicGenres.splice(idx, 1);
      } else {
        state.onboarding.musicGenres.push(genre);
      }
    });
  });

  // Step 7 Avatar Selection Button Listeners
  document.querySelectorAll(".select-gender-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".select-gender-btn").forEach(el => el.classList.remove("active"));
      btn.classList.add("active");
      const val = btn.getAttribute("data-gender");
      state.avatar.gender = val;
      state.onboarding.gender = val;
      updateOnboardingAvatarPreview();
    });
  });

  document.querySelectorAll(".select-bodytype-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".select-bodytype-btn").forEach(el => el.classList.remove("active"));
      btn.classList.add("active");
      const val = btn.getAttribute("data-body");
      state.avatar.bodyType = val;
      updateOnboardingAvatarPreview();
    });
  });

  document.querySelectorAll(".select-skin-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".select-skin-btn").forEach(el => el.classList.remove("active"));
      btn.classList.add("active");
      const val = btn.getAttribute("data-skin");
      state.avatar.skinToneName = val;
      updateOnboardingAvatarPreview();
    });
  });

  // Onboarding Nav buttons
  const btnPrev = document.getElementById("btnOnboardingPrev");
  const btnNext = document.getElementById("btnOnboardingNext");

  if (btnPrev && btnNext) {
    btnPrev.addEventListener("click", () => {
      if (state.onboarding.currentStep > 1) {
        state.onboarding.currentStep--;
        renderOnboardingStep();
      }
    });

    btnNext.addEventListener("click", () => {
      if (validateOnboardingStep(state.onboarding.currentStep)) {
        if (state.onboarding.currentStep < 7) {
          state.onboarding.currentStep++;
          renderOnboardingStep();
        } else {
          // Finish Onboarding
          try {
            finalizeOnboardingFlow();
          } catch (err) {
            console.error("Onboarding finalize error:", err);
            alert("Error: " + err.message);
          }
        }
      }
    });
  }
}

function setupCardSelect(gridId, callback) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  
  grid.querySelectorAll(".select-card").forEach(card => {
    card.addEventListener("click", () => {
      grid.querySelectorAll(".select-card").forEach(el => el.classList.remove("selected"));
      card.classList.add("selected");
      const val = card.getAttribute("data-val");
      callback(val);
    });
  });
}

function renderOnboardingStep() {
  const step = state.onboarding.currentStep;
  
  // Hide all step sections
  document.querySelectorAll(".onboarding-step").forEach(el => el.classList.remove("active"));
  
  // Show active step section
  const stepDiv = document.getElementById(`ob-step-${step}`);
  if (stepDiv) stepDiv.classList.add("active");

  if (step === 7) {
    // Sync gender button
    const userGender = state.onboarding.gender || "female";
    state.avatar.gender = userGender;
    
    const genderButtons = document.querySelectorAll(".select-gender-btn");
    genderButtons.forEach(btn => {
      if (btn.getAttribute("data-gender") === userGender) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
    
    // Sync body type button
    const bodyButtons = document.querySelectorAll(".select-bodytype-btn");
    bodyButtons.forEach(btn => {
      if (btn.getAttribute("data-body") === state.avatar.bodyType) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
    
    // Sync skin tone button
    const skinButtons = document.querySelectorAll(".select-skin-btn");
    skinButtons.forEach(btn => {
      if (btn.getAttribute("data-skin") === state.avatar.skinToneName) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
    
    updateOnboardingAvatarPreview();
  }
  
  // Update stepper UI nodes
  document.querySelectorAll(".step-node").forEach((node, idx) => {
    const num = idx + 1;
    node.className = "step-node";
    if (num < step) {
      node.classList.add("completed");
    } else if (num === step) {
      node.classList.add("active");
    }
  });
  
  // Update stepper line width
  const stepperProg = document.getElementById("stepperProgress");
  if (stepperProg) {
    stepperProg.style.width = `${((step - 1) / 6) * 100}%`;
  }
  
  // Update buttons
  const btnPrev = document.getElementById("btnOnboardingPrev");
  const btnNext = document.getElementById("btnOnboardingNext");
  
  if (btnPrev) {
    btnPrev.style.display = step === 1 ? "none" : "block";
  }
  
  if (btnNext) {
    btnNext.textContent = step === 7 ? "Choose My Fitness Companion" : "Continue →";
    if (step === 7) {
      btnNext.classList.add("btn-primary");
      btnNext.classList.remove("btn-secondary");
    } else {
      btnNext.classList.add("btn-secondary");
      btnNext.classList.remove("btn-primary");
    }
  }
}

function validateOnboardingStep(step) {
  if (step === 1) {
    const name = document.getElementById("ob-name").value.trim();
    const age = document.getElementById("ob-age").value.trim();
    const height = document.getElementById("ob-height").value.trim();
    const weight = document.getElementById("ob-weight").value.trim();
    const target = document.getElementById("ob-target").value.trim();
    
    if (!name || !age || !height || !weight || !target) {
      showToastNotification("⚠️ Details Required", "Please configure all body index inputs.");
      return false;
    }
    
    state.onboarding.fullname = name;
    state.onboarding.age = age;
    state.onboarding.gender = document.getElementById("ob-gender").value;
    state.onboarding.height = height;
    state.onboarding.weight = weight;
    state.onboarding.targetWeight = target;
  }
  else if (step === 5) {
    state.onboarding.country = document.getElementById("ob-country").value.trim() || "United States";
    state.onboarding.region = document.getElementById("ob-region").value.trim() || "California";
    state.onboarding.preferredLang = document.getElementById("ob-lang").value;
    state.onboarding.musicLang = document.getElementById("ob-music-lang").value;
    state.onboarding.units = document.getElementById("ob-units").value;
    state.onboarding.budget = document.getElementById("ob-budget").value || "moderate";
    state.onboarding.activityLevel = document.getElementById("ob-activity").value || "lightly_active";
    
    // Set global settings matchers
    state.language = state.onboarding.preferredLang;
    state.units = state.onboarding.units;
    
    // Map units selection to DOM labels
    const wLabel = state.units === "imperial" ? "lbs" : "kg";
    const hLabel = state.units === "imperial" ? "inches" : "cm";
    document.querySelectorAll(".unit-w-lbl").forEach(el => el.textContent = wLabel);
    document.querySelectorAll(".unit-h-lbl").forEach(el => el.textContent = hLabel);
    
    updateTranslationText();
  }
  else if (step === 4) {
    state.onboarding.allergy = document.getElementById("ob-allergy").value;
  }
  
  return true;
}

function finalizeOnboardingFlow() {
  localStorage.setItem("fitverse_onboarding_completed", "true");
  state.auth.isLoggedIn = true;
  
  // Set initial evolution parameters
  state.onboarding.initialBodyType = state.avatar.bodyType || "lean";
  state.onboarding.initialWeight = state.onboarding.weight;
  
  const w = parseFloat(state.onboarding.weight) || 75;
  state.userStats.weightHistory = [
    { date: new Date().toLocaleDateString(), weight: w }
  ];
  
  // Calculate final health and build schedules
  recalculateHealthMetrics();
  generateAIPlan();
  
  // Set avatar settings based on onboarding
  const skinToneMap = {
    light: "#ffcd94",
    medium: "#e5a65d",
    dark: "#5c3816"
  };
  state.avatar.skinTone = skinToneMap[state.avatar.skinToneName] || "#e5a65d";
  state.avatar.hairStyle = state.onboarding.gender === "female" ? "hair-ponytail" : "hair-short-crop";
  state.avatar.outfit = "outfit-gym";
  state.avatar.accessory = "acc-none";
  state.avatar.glasses = "glasses-none";
  state.avatar.earrings = "earring-none";
  state.avatar.currentExpression = "neutral";
  
  saveStateToLocalStorage();
  syncStateToFirebase();
  renderAvatar();
  
  // Play sound & Toast
  playSynthesizedTone("epic");
  showToastNotification("⚡ Fitness Companion Activated", "Profile saved. Dashboard initialized!");
  
  // Coach welcome speech bubble
  updateCoachBubble(`Welcome, ${state.onboarding.fullname || 'Fighter'}! 👋`, `I am your digital twin and AI coach. Today's target is active. Drink water and let's conquer our goals together!`);
  
  // Transition to dashboard automatically
  showView("view-dashboard");
  switchDashTab("tab-home");
}

// ==========================================
// 19. FIREBASE CLOUD SYNC & ADMIN PANEL API
// ==========================================
function syncStateToFirebase() {
  try {
    const cloudPayload = {
      profile: state.onboarding,
      avatar: state.avatar,
      stats: state.userStats,
      workout: state.workoutPlan,
      diet: state.dietTargets,
      music: state.music,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem("fitverse_firebase_cloud_db", JSON.stringify(cloudPayload));
    console.log("Firebase Firestore Cloud Sync verified:", cloudPayload);
  } catch(e) {
    console.warn("Firebase sync fallback:", e);
  }
}

// Music Search Handler
function onMusicSearchChange(query) {
  state.music.searchQuery = (query || "").toLowerCase().trim();
  renderTracks();
}

// Create New Playlist Handler
function createNewUserPlaylist() {
  const name = prompt("Enter new Playlist Name:", "My Pump Split");
  if (!name) return;
  if (!state.music.customPlaylists) state.music.customPlaylists = [];
  state.music.customPlaylists.push({ name: name, tracks: [] });
  saveStateToLocalStorage();
  showToastNotification("Playlist Created 🎵", `Created new playlist "${name}".`);
  renderWorkoutPlaylist();
}

// Admin Panel Handlers
function openAdminPanel() {
  const modal = document.getElementById("adminPanelModal");
  if (modal) {
    modal.style.display = "flex";
    switchAdminTab('users');
  }
}

function closeAdminPanel() {
  const modal = document.getElementById("adminPanelModal");
  if (modal) modal.style.display = "none";
}

function switchAdminTab(tabName) {
  const content = document.getElementById("adminTabContent");
  if (!content) return;

  const tabs = ['users', 'exercises', 'diets', 'bodybuilders', 'music', 'announcements'];
  tabs.forEach(t => {
    const btn = document.getElementById(`adminTab${t.charAt(0).toUpperCase() + t.slice(1)}`);
    if (btn) {
      if (t === tabName) btn.classList.add("active");
      else btn.classList.remove("active");
    }
  });

  if (tabName === "users") {
    content.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
        <h4 style="font-family:var(--font-cyber); color:var(--neon-cyan);">Registered Users (Active Session)</h4>
        <button class="btn btn-secondary btn-xs" onclick="showToastNotification('User Exported', 'Exported CSV user metrics.')">Export Data</button>
      </div>
      <table style="width:100%; border-collapse:collapse; font-size:0.85rem; text-align:left;">
        <thead>
          <tr style="border-bottom:1px solid var(--neon-cyan); color:var(--neon-cyan);">
            <th style="padding:0.5rem;">User</th>
            <th style="padding:0.5rem;">Goal</th>
            <th style="padding:0.5rem;">Streak</th>
            <th style="padding:0.5rem;">XP</th>
            <th style="padding:0.5rem;">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid var(--border-glass);">
            <td style="padding:0.5rem; font-weight:bold;">${state.onboarding.fullname || 'Fighter'} (Active)</td>
            <td style="padding:0.5rem;">${(state.onboarding.goal || 'fat_loss').toUpperCase()}</td>
            <td style="padding:0.5rem;">${state.userStats.streak} Days</td>
            <td style="padding:0.5rem;">${state.userStats.xp} XP</td>
            <td style="padding:0.5rem; color:var(--neon-green);">● Online</td>
          </tr>
          <tr style="border-bottom:1px solid var(--border-glass);">
            <td style="padding:0.5rem;">WarriorX</td>
            <td style="padding:0.5rem;">MUSCLE_GAIN</td>
            <td style="padding:0.5rem;">12 Days</td>
            <td style="padding:0.5rem;">450 XP</td>
            <td style="padding:0.5rem; color:var(--text-muted);">Offline</td>
          </tr>
        </tbody>
      </table>
    `;
  } else if (tabName === "exercises") {
    content.innerHTML = `
      <h4 style="font-family:var(--font-cyber); color:var(--neon-cyan); margin-bottom:1rem;">Exercise Repository Management</h4>
      <div style="display:flex; gap:0.5rem; margin-bottom:1rem;">
        <input type="text" class="form-input" id="adminNewExName" placeholder="Exercise Name (e.g. Incline Cable Flyes)" style="flex:1;">
        <button class="btn btn-primary" onclick="showToastNotification('Exercise Added', 'New exercise compiled into database.')">+ Add Exercise</button>
      </div>
      <div style="font-size:0.85rem; color:var(--text-muted);">Loaded ${state.workoutPlan && state.workoutPlan[0] ? state.workoutPlan[0].exercises.length : 4} exercises in current split.</div>
    `;
  } else if (tabName === "diets") {
    content.innerHTML = `
      <h4 style="font-family:var(--font-cyber); color:var(--neon-cyan); margin-bottom:1rem;">Diet Preset Catalog</h4>
      <p style="font-size:0.85rem; color:var(--text-muted);">Supports Vegetarian, Vegan, Eggetarian, Jain, Non-Vegetarian, Low Budget, Moderate, Premium tiers.</p>
      <button class="btn btn-secondary" onclick="generateAIPlan(); showToastNotification('Diets Recalibrated', 'Regenerated all diet models.');">Recalibrate All Diets</button>
    `;
  } else if (tabName === "bodybuilders") {
    content.innerHTML = `
      <h4 style="font-family:var(--font-cyber); color:var(--neon-cyan); margin-bottom:1rem;">Bodybuilder Database (26 Athletes)</h4>
      <div style="font-size:0.85rem; color:var(--text-muted); margin-bottom:1rem;">Includes Indian legends (Yatinder Singh, Sangram Chougule, Suhas Khamkar, etc.) and International legends (Arnold, Ronnie, CBum, Jay Cutler, Sam Sulek, etc.).</div>
      <button class="btn btn-secondary" onclick="showToastNotification('Knowledge Base Updated', 'Synced latest legend statistics.')">Refresh Database</button>
    `;
  } else if (tabName === "music") {
    content.innerHTML = `
      <h4 style="font-family:var(--font-cyber); color:var(--neon-cyan); margin-bottom:1rem;">Music Catalog Management</h4>
      <p style="font-size:0.85rem; color:var(--text-muted);">Current catalog contains ${musicTracksDatabase.length} tracks across 14 genres and regional languages.</p>
    `;
  } else if (tabName === "announcements") {
    content.innerHTML = `
      <h4 style="font-family:var(--font-cyber); color:var(--neon-cyan); margin-bottom:1rem;">System Announcements & Broadcasts</h4>
      <textarea class="form-input" id="adminBroadcastMsg" placeholder="Type announcement to broadcast to all fighters..." style="width:100%; height:80px; margin-bottom:1rem;"></textarea>
      <button class="btn btn-primary" onclick="const msg = document.getElementById('adminBroadcastMsg').value; if(msg) { showToastNotification('📢 Broadcast Sent', msg); updateCoachBubble('📢 Announcement', msg); closeAdminPanel(); }">Broadcast Alert 📢</button>
    `;
  }
}
