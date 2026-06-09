(function() {
  'use strict';


  // ============================
  //  i18n
  // ============================
  const I18N = {
    'zh-CN': {
      'home.title': 'SpeechFlow',
      'home.subtitle': '提升临场表达与思辨能力',
      'home.streak_label': '天连续练习',
      'home.checkin_info': '今日已练习 <strong>{n}</strong> 次',
      'home.start_btn': '开始今日练习',
      'home.settings_btn': '⚙️ API 配置',
      'home.favorites_btn': '⭐ 收藏',
      'home.stats_total': '总练习',
      'home.stats_lang': '平均语言力',
      'home.stats_think': '平均思辨力',
      'home.stats_overall': '平均总体力',
      'home.history': '📋 历史记录',
      'home.all': '全部',
      'home.empty': '还没有练习记录，开始第一次练习吧！',
      'home.material_hint': '配置 API 后点击「今日一抽」获取 AI 生成素材',
      'home.material_default': '演讲的源头可追溯至古希腊的广场，它不仅是修辞的艺术与辩论的锋芒，更是人类灵魂沟通的桥梁，让思想的火花在公共空间的碰撞中化作推动历史与文明前行的力量。',
      'home.draw_hint': '点击「今日一抽」获取素材',
      'home.material_tag': '今日素材',
      'home.draw_btn': '今日一抽',
      'home.drawing': '抽取中...',
      'home.fetching': '正在搜集今日素材...',
      'home.draw_history': '我抽到的',
      'home.draw_limit': '期待明日',
      'home.draw_today': '今天',
      'home.material_tag': '✨ 今日素材',
      'home.draw_btn': '今日一抽',
      'home.drawing': '抽取中...',
      'home.gathering': '正在搜集今日素材...',
      'setup.back': '← 返回',
      'setup.title': '⚙️ 练习设置',
      'setup.duration': '演讲时长',
      'setup.minutes': '分钟',
      'setup.prep': '准备时长',
      'setup.seconds': '秒',
      'setup.scene': '练习场景',
      'setup.hall_name': '🏛 演播厅',
      'setup.hall_desc': '比赛现场 · 评委氛围',
      'setup.stream_name': '📡 直播室',
      'setup.stream_desc': '网络直播 · 科技感',
      'setup.campus_name': '🎓 课堂',
      'setup.campus_desc': '校园练习 · 温暖自然',
      'setup.speech_lang': '演讲语言',
      'setup.topic_label': '题目主题偏好（可选）',
      'setup.topic_hint': '选择"随机"或留空将由 AI 自由发挥',
      'setup.start': '开始练习',
      'topic.loading': '正在生成演讲题目...',
      'topic.regenerate': '换一题',
      'topic.prepare': '开始准备',
      'topic.abandon': '放弃练习',
      'topic.paused': '已暂停生成',
      'topic.categories': { '科技': '科技', '社会': '社会', '教育': '教育', '环境': '环境', '哲学': '哲学', '文化': '文化', '经济': '经济', '伦理': '伦理', '生活': '生活', '个人成长': '个人成长', '情感': '情感', '随机': '🎲 随机' },
      'prep.pause': '⏸ 暂停',
      'prep.resume': '▶ 继续',
      'prep.start': '开始演讲',
      'prep.abandon': '放弃练习',
      'prep.time_label': '准备时间',
      'recording.ready': '准备开始',
      'recording.recording': '● 录音中',
      'recording.ready_label': '● 准备',
      'recording.stopped': '● 已停止',
      'recording.transcript_label': '实时转写',
      'recording.waiting': '等待识别...',
      'recording.recognizing': '[识别中...]',
      'recording.stop': '结束演讲',
      'recording.abandon': '放弃练习',
      'recording.wc': '字数 {n}',
      'recording.speed': '语速 {n} 字/秒',
      'recording.no_browser': '浏览器不支持语音识别，请使用 Chrome。',
      'scene.judge': '👨‍⚖️ 评委就绪',
      'scene.online': '👁 在线 {n}',
      'scene.classroom': '📝 课堂练习中',
      'processing.analyzing': '正在分析你的演讲...',
      'processing.transcribing': '📝 转写录音中...',
      'processing.whisper': '📝 正在通过 Whisper 转写...',
      'processing.whisper_fail': '⚠️ Whisper 转写失败，使用浏览器识别结果',
      'processing.transcribed': '✅ 转写完成',
      'processing.evaluating': '🔍 AI 评分中...',
      'processing.evaluated': '✅ 评分完成',
      'processing.eval_fail': '❌ 评分失败',
      'processing.eval_error': '评分失败：{msg}\n\n请检查：\n1. API Key 是否正确\n2. API 地址是否正确（注意结尾不要多余的路径）\n3. 模型是否支持\n4. 网络连接是否正常',
      'result.back': '← 主页',
      'result.title': '📊 评估报告',
      'result.lang_score': '🗣️ 语言表达',
      'result.think_score': '🧠 思辨深度',
      'result.overall_score': '⭐ 总体表现',
      'result.transcript': '📋 转写文稿',
      'result.transcript_empty': '(无转写内容)',
      'result.suggestions': '💡 改进建议',
      'result.no_suggestions': '暂无建议。',
      'result.save': '💾 保存报告',
      'result.restart': '🔄 再来一次',
      'result.lang_detail': '语言表达：{score}/10',
      'settings.title': '🔑 API 配置',
      'settings.endpoint': 'API 地址',
      'settings.key': 'API Key',
      'settings.model': '模型',
      'settings.stt': '语音识别方式',
      'settings.stt_browser': '浏览器内置（免费，需 Chrome）',
      'settings.stt_whisper': 'Whisper API（更准确，消耗 API 额度）',
      'settings.save': '保存配置',
      'settings.hint': 'OpenCode Go 用户填：https://opencode.ai/zen/go/v1',
      'settings.close': '✕',
      'history.delete': '删除',
      'history.repractice': '再来一次',
      'history.expand': '▶',
      'history.avg_score': '均分',
      'known_categories': ['科技', '社会', '教育', '环境', '哲学', '文化', '经济', '伦理', '生活', '个人成长', '情感'],
      'random_tag': '随机',
      'speech_langs': { 'zh-CN': '中文', 'en-US': 'English', 'ja-JP': '日本語', 'de-DE': 'Deutsch' },
      'filter.all_lang': '全部语言',
      'filter.all_scene': '全部场景',
      'filter.all_category': '全部主题',
      'filter.search_placeholder': '搜索题目...',
      'filter.sort_newest': '🕐 最新',
      'filter.sort_high': '⭐ 高分',
      'filter.sort_low': '⭐ 低分',
      'filter.select_btn': '☑ 选择',
      'filter.cancel_select': '☑ 取消选择',
      'filter.cancel_btn': '取消',
      'filter.selected': '已选 {n} 项',
      'filter.batch_fav': '⭐ 批量收藏',
      'filter.batch_del': '🗑 批量删除',
      'filter.batch_confirm': '确定要删除选中的 {n} 条记录吗？',
      'filter.select_all': '☐ 全选',
      'nav.home': '🏠 首页',
      'nav.profile': '👤 演说家信息',
      'nav.collection': '📋 演说集锦',
      'nav.notes': '📝 心得笔记',
      'nav.career': '🏆 演说家生涯',
      'nav.settings': '⚙️ 系统设置',
      'profile.nickname': '昵称',
      'profile.bio': '个人简介',
      'profile.save': '保存',
      'profile.stats_title': '🏅 快捷统计',
      'profile.total': '总练习',
      'profile.streak': '连续天数',
      'profile.avg': '平均分',
      'profile.favs': '收藏数',
      'career.total': '累计练习',
      'career.streak': '最长连续',
      'career.avg': '总均分',
      'career.best': '最高单次',
      'career.calendar': '📅 打卡日历',
      'career.trend': '📈 评分趋势',
      'career.advice': '💡 AI 优劣势分析',
      'career.need_more': '需要至少 5 次练习记录才能生成分析。',
      'career.click_generate': '点击下方按钮，AI 将分析你的优劣势。',
      'career.generate': '生成分析',
      'career.no_data': '暂无数据',
      'settings.ui_lang': '🌐 界面语言',
      'settings.api_title': '🔑 API 配置',
      'settings.theme_title': '🎨 界面风格',
      'settings.theme_mode': '风格模式',
      'settings.theme_auto': '跟随上次练习',
      'settings.theme_hint': '"跟随上次练习"会根据你最近一次练习的场景自动切换；手动选择则固定不变。',
      'settings.saved': '✓ 已保存',
      'memo.placeholder': '添加备注...',
      'memo.saved': '已保存',
      'memo.audio_unavailable': '录音不可用',
      'profile.nickname_placeholder': '输入昵称...',
      'profile.saved': '已保存',
      'profile.bio_placeholder': '简单介绍一下自己...',
      'sidebar.start_btn': '🚀 开始练习',
      'sidebar.user_placeholder': '用户名称',
      'settings.export_btn': '📤 导出数据',
      'settings.import_btn': '📥 导入数据',
      'settings.import_done': '✓ 数据已导入，请刷新页面',
      'notes.empty': '暂无笔记，在演说集锦中添加备忘录后会出现在这里。',
      'notes.go_to': '查看记录 →',
      'career.calendar_title': '📅 打卡日历',
      'career.trend_title': '📈 评分趋势',
      'career.analysis_title': '🧠 优劣势分析',
      'career.analyze_btn': '开始分析',
      'career.analyzing': '分析中...',
      'career.chart_empty': '需要至少2次记录来生成图表',
      'career.api_required': '请先在系统设置中配置 API Key',
      'career.min_records': '需要至少2次练习记录才能进行分析',
      'career.analyze_failed': '分析失败：',
      'career.analysis_hint': '基于你的历史练习数据，AI 将分析你的演讲优势和改进方向。',
      'settings.language_title': '🌐 语言设置',
      'settings.ui_lang': '界面语言',
      'settings.theme_title': '🎨 界面风格',
      'settings.theme_label': '恒定风格',
      'settings.theme_follow': '🔄 跟随上次练习',
      'settings.theme_hall': '🏛 恒定：演播厅',
      'settings.theme_stream': '📡 恒定：直播室',
      'settings.theme_campus': '🎓 恒定：课堂',
      'settings.api_title': '🔑 API 配置',
    },
    'en': {
      'home.title': 'SpeechFlow',
      'home.subtitle': 'Sharpen Your Expression & Critical Thinking',
      'home.streak_label': 'day streak',
      'home.checkin_info': 'Practiced <strong>{n}</strong> times today',
      'home.start_btn': 'Start Practice',
      'home.settings_btn': '⚙️ API Settings',
      'home.favorites_btn': '⭐ Fav',
      'nav.home': '🏠 Home',
      'nav.profile': '👤 Profile',
      'nav.collection': '📋 Collection',
      'nav.notes': '📝 Notes',
      'nav.career': '🏆 Career',
      'nav.settings': '⚙️ Settings',
      'profile.nickname_placeholder': 'Enter nickname...',
      'profile.nickname': 'Nickname',
      'profile.bio': 'Bio',
      'profile.save': 'Save',
      'profile.stats_title': '🏅 Quick Stats',
      'profile.total': 'Total',
      'profile.streak': 'Streak',
      'profile.avg': 'Avg Score',
      'profile.favs': 'Favorites',
      'career.total': 'Total Practices',
      'career.streak': 'Best Streak',
      'career.avg': 'Avg Overall',
      'career.best': 'Best Single',
      'career.calendar': '📅 Calendar',
      'career.trend': '📈 Score Trend',
      'career.advice': '💡 AI Analysis',
      'career.need_more': 'Need at least 5 practice records to generate analysis.',
      'career.click_generate': 'Click the button below for AI analysis.',
      'career.generate': 'Generate Analysis',
      'career.no_data': 'No data',
      'settings.ui_lang': '🌐 UI Language',
      'settings.api_title': '🔑 API Settings',
      'settings.theme_title': '🎨 Theme',
      'settings.theme_mode': 'Theme Mode',
      'settings.theme_auto': 'Follow Last Practice',
      'settings.theme_hint': '"Follow Last Practice" auto-switches to your last practice scene; manual selection stays fixed.',
      'settings.saved': '✓ Saved',
      'profile.saved': 'Saved',
      'profile.bio_placeholder': 'Tell us about yourself...',
      'sidebar.start_btn': '🚀 Start Practice',
      'sidebar.user_placeholder': 'User name',
      'settings.export_btn': '📤 Export Data',
      'settings.import_btn': '📥 Import Data',
      'settings.import_done': '✓ Data imported, please refresh',
      'notes.empty': 'No notes yet. Add memos in the Collection tab.',
      'notes.go_to': 'Go to record →',
      'career.calendar_title': '📅 Calendar',
      'career.trend_title': '📈 Score Trend',
      'career.analysis_title': '🧠 Analysis',
      'career.analyze_btn': 'Analyze',
      'career.analyzing': 'Analyzing...',
      'career.analysis_hint': 'AI will analyze your strengths and areas for improvement based on practice history.',
      'career.chart_empty': 'Need at least 2 records to generate chart',
      'career.api_required': 'Please configure API Key in Settings first',
      'career.min_records': 'Need at least 2 records for analysis',
      'career.analyze_failed': 'Analysis failed: ',
      'settings.language_title': '🌐 Language',
      'settings.ui_lang': 'UI Language',
      'settings.theme_title': '🎨 Theme',
      'settings.theme_label': 'Theme Mode',
      'settings.theme_follow': '🔄 Follow Last',
      'settings.theme_hall': '🏛 Fixed: Hall',
      'settings.theme_stream': '📡 Fixed: Stream',
      'settings.theme_campus': '🎓 Fixed: Campus',
      'settings.api_title': '🔑 API Settings',
      'home.stats_total': 'Total',
      'home.stats_lang': 'Avg Expression',
      'home.stats_think': 'Avg Reasoning',
      'home.stats_overall': 'Avg Overall',
      'home.history': '📋 History',
      'home.all': 'All',
      'home.empty': "No practice records yet. Let's start!",
      'home.material_hint': 'Configure API and click "Daily Draw" to get AI-generated material',
      'home.material_default': 'Oratory finds its roots in the ancient Greek agoras, emerging not merely as an art of rhetoric or the sharpness of debate, but as a bridge for the human soul, where the collision of ideas in the public sphere ignites the spark that propels history and civilization forward.',
      'home.draw_hint': 'Click "Daily Draw" to get material',
      'home.material_tag': 'Daily Material',
      'home.draw_btn': 'Daily Draw',
      'home.drawing': 'Drawing...',
      'home.fetching': 'Fetching daily material...',
      'home.draw_history': 'My Draws',
      'home.draw_limit': 'Await tomorrow',
      'home.draw_today': 'Today',
      'home.material_tag': '✨ Daily Material',
      'home.draw_btn': 'Daily Draw',
      'home.drawing': 'Drawing...',
      'home.gathering': 'Gathering today\'s material...',
      'setup.back': '← Back',
      'setup.title': '⚙️ Settings',
      'setup.duration': 'Speech Duration',
      'setup.minutes': 'min',
      'setup.prep': 'Preparation',
      'setup.seconds': 'sec',
      'setup.scene': 'Scene',
      'setup.hall_name': '🏛 Hall',
      'setup.hall_desc': 'Competition · Judges',
      'setup.stream_name': '📡 Stream',
      'setup.stream_desc': 'Live Stream · Tech',
      'setup.campus_name': '🎓 Classroom',
      'setup.campus_desc': 'Campus · Warm',
      'setup.speech_lang': 'Speech Language',
      'setup.topic_label': 'Topic Preference (optional)',
      'setup.topic_hint': 'Select "Random" or leave blank for AI discretion',
      'setup.start': 'Start',
      'topic.loading': 'Generating topic...',
      'topic.regenerate': 'New Topic',
      'topic.prepare': 'Prepare',
      'topic.abandon': 'Abandon',
      'topic.paused': 'Generation paused',
      'topic.categories': { '科技': 'Tech', '社会': 'Society', '教育': 'Education', '环境': 'Environment', '哲学': 'Philosophy', '文化': 'Culture', '经济': 'Economy', '伦理': 'Ethics', '生活': 'Life', '个人成长': 'Self Growth', '情感': 'Emotions', '随机': '🎲 Random' },
      'prep.pause': '⏸ Pause',
      'prep.resume': '▶ Resume',
      'prep.start': 'Start Speaking',
      'prep.abandon': 'Abandon',
      'prep.time_label': 'Preparation',
      'recording.ready': 'Get Ready',
      'recording.recording': '● Recording',
      'recording.ready_label': '● Ready',
      'recording.stopped': '● Stopped',
      'recording.transcript_label': 'Live Transcript',
      'recording.waiting': 'Listening...',
      'recording.recognizing': '[Recognizing...]',
      'recording.stop': 'End Speech',
      'recording.abandon': 'Abandon',
      'recording.wc': '{n} chars',
      'recording.speed': '{n} cps',
      'recording.no_browser': 'Speech recognition not supported. Please use Chrome.',
      'scene.judge': '👨‍⚖️ Judges Ready',
      'scene.online': '👁 {n} Watching',
      'scene.classroom': '📝 In Class',
      'processing.analyzing': 'Analyzing your speech...',
      'processing.transcribing': '📝 Transcribing...',
      'processing.whisper': '📝 Transcribing via Whisper...',
      'processing.whisper_fail': '⚠️ Whisper failed, using browser result',
      'processing.transcribed': '✅ Transcribed',
      'processing.evaluating': '🔍 AI Scoring...',
      'processing.evaluated': '✅ Scored',
      'processing.eval_fail': '❌ Scoring Failed',
      'processing.eval_error': 'Scoring failed: {msg}\n\nPlease check:\n1. API Key\n2. API Endpoint\n3. Model support\n4. Network connection',
      'result.back': '← Home',
      'result.title': '📊 Evaluation Report',
      'result.lang_score': '🗣️ Language',
      'result.think_score': '🧠 Thinking',
      'result.overall_score': '⭐ Overall',
      'result.transcript': '📋 Transcript',
      'result.transcript_empty': '(No transcript)',
      'result.suggestions': '💡 Suggestions',
      'result.no_suggestions': 'No suggestions.',
      'result.save': '💾 Save Report',
      'result.restart': '🔄 Again',
      'result.lang_detail': 'Language: {score}/10',
      'settings.title': '🔑 API Settings',
      'settings.endpoint': 'API Endpoint',
      'settings.key': 'API Key',
      'settings.model': 'Model',
      'settings.stt': 'Speech Recognition',
      'settings.stt_browser': 'Browser Built-in (free, Chrome)',
      'settings.stt_whisper': 'Whisper API (accurate, uses quota)',
      'settings.save': 'Save',
      'settings.hint': 'OpenCode Go users: https://opencode.ai/zen/go/v1',
      'settings.close': '✕',
      'history.delete': 'Delete',
      'history.repractice': 'Redo',
      'history.expand': '▶',
      'history.avg_score': 'Avg',
      'known_categories': ['Technology', 'Society', 'Education', 'Environment', 'Philosophy', 'Culture', 'Economics', 'Ethics', 'Life', 'Self Growth', 'Emotions'],
      'random_tag': 'Random',
      'speech_langs': { 'zh-CN': '中文', 'en-US': 'English', 'ja-JP': '日本語', 'de-DE': 'Deutsch' },
      'filter.all_lang': 'All Languages',
      'filter.all_scene': 'All Scenes',
      'filter.all_category': 'All Topics',
      'filter.search_placeholder': 'Search topics...',
      'filter.sort_newest': '🕐 Latest',
      'filter.sort_high': '⭐ Highest',
      'filter.sort_low': '⭐ Lowest',
      'filter.select_btn': '☑ Select',
      'filter.cancel_select': '☑ Deselect',
      'filter.cancel_btn': 'Cancel',
      'filter.selected': '{n} selected',
      'filter.batch_fav': '⭐ Batch Fav',
      'filter.batch_del': '🗑 Batch Delete',
      'filter.batch_confirm': 'Delete {n} selected items?',
      'filter.select_all': '☐ Select All',
      'memo.placeholder': 'Add note...',
      'memo.saved': 'Saved',
      'memo.audio_unavailable': 'Audio unavailable',
    },
    'ja': {
      'home.title': 'SpeechFlow',
      'home.subtitle': '表現力と思考力を磨く',
      'home.streak_label': '日連続',
      'home.checkin_info': '本日 <strong>{n}</strong> 回練習済み',
      'home.start_btn': '練習を始める',
      'home.settings_btn': '⚙️ API 設定',
      'home.favorites_btn': '⭐ お気に入り',
      'nav.home': '🏠 ホーム',
      'nav.profile': '👤 プロフィール',
      'nav.collection': '📋 スピーチ集',
      'nav.notes': '📝 メモ',
      'nav.career': '🏆 キャリア',
      'nav.settings': '⚙️ 設定',
      'profile.nickname': 'ニックネーム',
      'profile.bio': '自己紹介',
      'profile.save': '保存',
      'profile.stats_title': '🏅 クイック統計',
      'profile.total': '合計',
      'profile.streak': '連続日数',
      'profile.avg': '平均点',
      'profile.favs': 'お気に入り',
      'career.total': '累計練習',
      'career.streak': '最長連続',
      'career.avg': '総平均',
      'career.best': '最高',
      'career.calendar': '📅 カレンダー',
      'career.trend': '📈 スコア推移',
      'career.advice': '💡 AI分析',
      'career.need_more': '分析には最低5回の練習記録が必要です。',
      'career.click_generate': '下のボタンをクリックしてAI分析を開始。',
      'career.generate': '分析を生成',
      'career.no_data': 'データなし',
      'settings.ui_lang': '🌐 表示言語',
      'settings.api_title': '🔑 API設定',
      'settings.theme_title': '🎨 テーマ',
      'settings.theme_mode': 'テーマモード',
      'settings.theme_auto': '前回の練習に従う',
      'settings.theme_hint': '「前回の練習に従う」は最後の練習シーンに自動切替。手動選択は固定。',
      'settings.saved': '✓ 保存済み',
      'profile.nickname_placeholder': 'ニックネームを入力...',
      'profile.saved': '保存しました',
      'profile.bio_placeholder': '自己紹介...',
      'sidebar.start_btn': '🚀 練習を開始',
      'notes.empty': 'まだメモがありません。履歴でメモを追加するとここに表示されます。',
      'notes.go_to': '元の記録へ →',
      'career.calendar_title': '📅 カレンダー',
      'career.trend_title': '📈 スコア推移',
      'career.analysis_title': '🧠 分析',
      'career.analyze_btn': '分析を開始',
      'career.analyzing': '分析中...',
      'career.analysis_hint': '過去の練習データに基づいて、AIがあなたの強みと改善点を分析します。',
      'career.chart_empty': 'グラフ生成には最低2件の記録が必要です',
      'career.api_required': '先に設定でAPIキーを設定してください',
      'career.min_records': '分析には最低2件の練習記録が必要です',
      'career.analyze_failed': '分析失敗：',
      'settings.language_title': '🌐 言語設定',
      'settings.ui_lang': 'UI言語',
      'settings.theme_title': '🎨 テーマ',
      'settings.theme_label': 'テーマ設定',
      'settings.theme_follow': '🔄 前回に従う',
      'settings.theme_hall': '🏛 ホール固定',
      'settings.theme_stream': '📡 配信固定',
      'settings.theme_campus': '🎓 教室固定',
      'settings.api_title': '🔑 API設定',
      'home.stats_total': '総練習',
      'home.stats_lang': '平均言語力',
      'home.stats_think': '平均思考力',
      'home.stats_overall': '平均総合力',
      'home.history': '📋 履歴',
      'home.all': '全て',
      'home.empty': 'まだ記録がありません。最初の練習を始めましょう！',
      'home.material_hint': 'API を設定して「今日一抽」をクリックすると AI が素材を生成します',
      'home.material_default': '演説の源流は古代ギリシャの広場にあり、それは単なる修辞や弁論の技芸に留まらず、魂と魂を繋ぐ架け橋として、公的な場で思想が火花を散らし、歴史と文明を前へと突き動かす力となりました。',
      'home.draw_hint': '「今日一抽」をクリックして素材を入手',
      'home.material_tag': '✨ 今日の素材',
      'home.draw_btn': '今日くじ',
      'home.drawing': '抽出中...',
      'home.gathering': '今日の素材を収集中...',
      'home.draw_history': '私の抽選履歴',
      'home.draw_limit': '明日を待とう',
      'home.draw_today': '今日',
      'setup.back': '← 戻る',
      'setup.title': '⚙️ 練習設定',
      'setup.duration': 'スピーチ時間',
      'setup.minutes': '分',
      'setup.prep': '準備時間',
      'setup.seconds': '秒',
      'setup.scene': 'シーン',
      'setup.hall_name': '🏛 ホール',
      'setup.hall_desc': '大会 · 審査員',
      'setup.stream_name': '📡 配信',
      'setup.stream_desc': 'ライブ · テック',
      'setup.campus_name': '🎓 教室',
      'setup.campus_desc': 'キャンパス · 自然',
      'setup.speech_lang': 'スピーチ言語',
      'setup.topic_label': 'トピック設定（任意）',
      'setup.topic_hint': '「ランダム」を選択するか、空欄にするとAIが自由に決定します',
      'setup.start': '開始',
      'topic.loading': 'トピックを生成中...',
      'topic.regenerate': '別のトピック',
      'topic.prepare': '準備開始',
      'topic.abandon': '中止',
      'topic.paused': '生成を一時停止しました',
      'topic.categories': { '科技': 'テクノロジー', '社会': '社会', '教育': '教育', '环境': '環境', '哲学': '哲学', '文化': '文化', '经济': '経済', '伦理': '倫理', '生活': '生活', '个人成长': '自己成長', '情感': '感情', '随机': '🎲 ランダム' },
      'prep.pause': '⏸ 一時停止',
      'prep.resume': '▶ 再開',
      'prep.start': 'スピーチ開始',
      'prep.abandon': '中止',
      'prep.time_label': '準備時間',
      'recording.ready': '準備',
      'recording.recording': '● 録音中',
      'recording.ready_label': '● 準備',
      'recording.stopped': '● 停止',
      'recording.transcript_label': 'リアルタイム文字起こし',
      'recording.waiting': '聞き取り中...',
      'recording.recognizing': '[認識中...]',
      'recording.stop': 'スピーチ終了',
      'recording.abandon': '中止',
      'recording.wc': '{n} 文字',
      'recording.speed': '{n} 字/秒',
      'recording.no_browser': '音声認識非対応。Chromeをご利用ください。',
      'scene.judge': '👨‍⚖️ 審査員準備完了',
      'scene.online': '👁 {n} 人視聴中',
      'scene.classroom': '📝 授業中',
      'processing.analyzing': 'スピーチを分析中...',
      'processing.transcribing': '📝 文字起こし中...',
      'processing.whisper': '📝 Whisperで文字起こし中...',
      'processing.whisper_fail': '⚠️ Whisper失敗、ブラウザ結果を使用',
      'processing.transcribed': '✅ 文字起こし完了',
      'processing.evaluating': '🔍 AI評価中...',
      'processing.evaluated': '✅ 評価完了',
      'processing.eval_fail': '❌ 評価失敗',
      'processing.eval_error': '評価失敗：{msg}\n\n確認事項：\n1. APIキー\n2. APIエンドポイント\n3. モデル対応\n4. ネットワーク接続',
      'result.back': '← ホーム',
      'result.title': '📊 評価レポート',
      'result.lang_score': '🗣️ 言語表現',
      'result.think_score': '🧠 思考深度',
      'result.overall_score': '⭐ 総合評価',
      'result.transcript': '📋 文字起こし',
      'result.transcript_empty': '(文字起こしなし)',
      'result.suggestions': '💡 改善提案',
      'result.no_suggestions': '提案はありません。',
      'result.save': '💾 レポート保存',
      'result.restart': '🔄 もう一度',
      'result.lang_detail': '言語表現：{score}/10',
      'settings.title': '🔑 API設定',
      'settings.endpoint': 'APIエンドポイント',
      'settings.key': 'APIキー',
      'settings.model': 'モデル',
      'settings.stt': '音声認識方式',
      'settings.stt_browser': 'ブラウザ内蔵（無料、Chrome）',
      'settings.stt_whisper': 'Whisper API（高精度、API枠消費）',
      'settings.save': '保存',
      'settings.hint': 'OpenCode Goユーザー：https://opencode.ai/zen/go/v1',
      'settings.close': '✕',
      'history.delete': '削除',
      'history.repractice': 'もう一度',
      'history.expand': '▶',
      'history.avg_score': '平均',
      'known_categories': ['テクノロジー', '社会', '教育', '環境', '哲学', '文化', '経済', '倫理', '生活', '自己成長', '感情'],
      'random_tag': 'ランダム',
      'speech_langs': { 'zh-CN': '中文', 'en-US': 'English', 'ja-JP': '日本語', 'de-DE': 'Deutsch' },
      'filter.all_lang': 'すべての言語',
      'filter.all_scene': 'すべてのシーン',
      'filter.all_category': 'すべてのトピック',
      'filter.search_placeholder': 'トピック検索...',
      'filter.sort_newest': '🕐 最新',
      'filter.sort_high': '⭐ 高得点',
      'filter.sort_low': '⭐ 低得点',
      'filter.select_btn': '☑ 選択',
      'filter.cancel_select': '☑ 選択解除',
      'filter.cancel_btn': 'キャンセル',
      'filter.selected': '{n} 件選択中',
      'filter.batch_fav': '⭐ 一括お気に入り',
      'filter.batch_del': '🗑 一括削除',
      'filter.batch_confirm': '選択した {n} 件を削除しますか？',
      'filter.select_all': '☐ すべて選択',
      'memo.placeholder': 'メモを追加...',
      'memo.saved': '保存済み',
      'memo.audio_unavailable': '音声利用不可',
    },
    'de': {
      'home.title': 'SpeechFlow',
      'home.subtitle': 'Ausdruck & kritisches Denken verbessern',
      'home.streak_label': 'Tage in Folge',
      'home.checkin_info': 'Heute <strong>{n}</strong> Mal geübt',
      'home.start_btn': 'Übung starten',
      'home.settings_btn': '⚙️ API-Einstellungen',
      'home.favorites_btn': '⭐ Favoriten',
      'nav.home': '🏠 Startseite',
      'nav.profile': '👤 Profil',
      'nav.collection': '📋 Sammlung',
      'nav.notes': '📝 Notizen',
      'nav.career': '🏆 Karriere',
      'nav.settings': '⚙️ Einstellungen',
      'profile.nickname_placeholder': 'Nickname eingeben...',
      'profile.nickname': 'Spitzname',
      'profile.bio': 'Bio',
      'profile.save': 'Speichern',
      'profile.stats_title': '🏅 Schnellstatistik',
      'profile.total': 'Gesamt',
      'profile.streak': 'Serie',
      'profile.avg': 'ø Punktzahl',
      'profile.favs': 'Favoriten',
      'career.total': 'Gesamt',
      'career.streak': 'Beste Serie',
      'career.avg': 'ø Gesamt',
      'career.best': 'Bestes Einzel',
      'career.calendar': '📅 Kalender',
      'career.trend': '📈 Punkttrend',
      'career.advice': '💡 KI-Analyse',
      'career.need_more': 'Mindestens 5 Übungsaufzeichnungen für Analyse nötig.',
      'career.click_generate': 'Klicke unten für KI-Analyse.',
      'career.generate': 'Analyse erstellen',
      'career.no_data': 'Keine Daten',
      'settings.ui_lang': '🌐 UI-Sprache',
      'settings.api_title': '🔑 API-Einstellungen',
      'settings.theme_title': '🎨 Thema',
      'settings.theme_mode': 'Themenmodus',
      'settings.theme_auto': 'Letzter Übung folgen',
      'settings.theme_hint': '"Letzter Übung folgen" wechselt automatisch zur letzten Szene; manuelle Auswahl bleibt fest.',
      'settings.saved': '✓ Gespeichert',
      'profile.saved': 'Gespeichert',
      'profile.bio_placeholder': 'Erzähl uns von dir...',
      'sidebar.start_btn': '🚀 Übung starten',
      'notes.empty': 'Noch keine Notizen. Füge Memos in der Sammlung hinzu.',
      'notes.go_to': 'Zum Eintrag →',
      'career.calendar_title': '📅 Kalender',
      'career.trend_title': '📈 Punkttrend',
      'career.analysis_title': '🧠 Analyse',
      'career.analyze_btn': 'Analysieren',
      'career.analyzing': 'Analysiere...',
      'career.analysis_hint': 'KI analysiert deine Stärken und Verbesserungsbereiche basierend auf der Übungshistorie.',
      'career.chart_empty': 'Mindestens 2 Einträge für Diagramm nötig',
      'career.api_required': 'Bitte API-Key in Einstellungen konfigurieren',
      'career.min_records': 'Mindestens 2 Übungen für Analyse nötig',
      'career.analyze_failed': 'Analyse fehlgeschlagen: ',
      'settings.language_title': '🌐 Sprache',
      'settings.ui_lang': 'UI-Sprache',
      'settings.theme_title': '🎨 Thema',
      'settings.theme_label': 'Themenmodus',
      'settings.theme_follow': '🔄 Letztem folgen',
      'settings.theme_hall': '🏛 Fest: Saal',
      'settings.theme_stream': '📡 Fest: Stream',
      'settings.theme_campus': '🎓 Fest: Klassenzimmer',
      'settings.api_title': '🔑 API-Einstellungen',
      'home.stats_total': 'Gesamt',
      'home.stats_lang': 'ø Sprachkraft',
      'home.stats_think': 'ø Denkkraft',
      'home.stats_overall': 'ø Gesamt',
      'home.history': '📋 Verlauf',
      'home.all': 'Alle',
      'home.empty': 'Noch keine Aufzeichnungen. Starte deine erste Übung!',
      'home.material_hint': 'API konfigurieren und auf "Tägliche Ziehung" klicken, um KI-generierte Inhalte zu erhalten',
      'home.material_default': 'Die Wurzeln der Redekunst liegen auf den Marktplätzen des antiken Griechenlands, wo sie weit mehr war als nur Rhetorik oder die Schärfe der Debatte: Sie wurde zur Brücke zwischen den Seelen, an der sich im Austausch der Ideen jene Funken entzündeten, die den Lauf der Geschichte und den Fortschritt der Zivilisation vorantrieben.',
      'home.draw_hint': 'Klicken Sie auf "Tägliche Ziehung", um Material zu erhalten',
      'home.material_tag': '✨ Tägliches Material',
      'home.draw_btn': 'Tägliche Ziehung',
      'home.drawing': 'Ziehung...',
      'home.gathering': 'Sammle heutiges Material...',
      'home.draw_history': 'Meine Ziehungen',
      'home.draw_limit': 'Hoffe auf morgen',
      'home.draw_today': 'Heute',
      'setup.back': '← Zurück',
      'setup.title': '⚙️ Einstellungen',
      'setup.duration': 'Rededauer',
      'setup.minutes': 'Min',
      'setup.prep': 'Vorbereitung',
      'setup.seconds': 'Sek',
      'setup.scene': 'Szene',
      'setup.hall_name': '🏛 Saal',
      'setup.hall_desc': 'Wettbewerb · Jury',
      'setup.stream_name': '📡 Stream',
      'setup.stream_desc': 'Live · Tech',
      'setup.campus_name': '🎓 Klassenzimmer',
      'setup.campus_desc': 'Campus · Warm',
      'setup.speech_lang': 'Redesprache',
      'setup.topic_label': 'Themenpräferenz (optional)',
      'setup.topic_hint': '"Zufällig" oder leer lassen für KI-Auswahl',
      'setup.start': 'Starten',
      'topic.loading': 'Thema wird generiert...',
      'topic.regenerate': 'Neues Thema',
      'topic.prepare': 'Vorbereiten',
      'topic.abandon': 'Abbrechen',
      'topic.paused': 'Generierung pausiert',
      'topic.categories': { '科技': 'Technik', '社会': 'Gesellschaft', '教育': 'Bildung', '环境': 'Umwelt', '哲学': 'Philosophie', '文化': 'Kultur', '经济': 'Wirtschaft', '伦理': 'Ethik', '生活': 'Leben', '个人成长': 'Selbstentwicklung', '情感': 'Gefühle', '随机': '🎲 Zufällig' },
      'prep.pause': '⏸ Pause',
      'prep.resume': '▶ Fortsetzen',
      'prep.start': 'Rede beginnen',
      'prep.abandon': 'Abbrechen',
      'prep.time_label': 'Vorbereitung',
      'recording.ready': 'Bereitmachen',
      'recording.recording': '● Aufnahme',
      'recording.ready_label': '● Bereit',
      'recording.stopped': '● Gestoppt',
      'recording.transcript_label': 'Live-Transkript',
      'recording.waiting': 'Höre zu...',
      'recording.recognizing': '[Erkennung...]',
      'recording.stop': 'Rede beenden',
      'recording.abandon': 'Abbrechen',
      'recording.wc': '{n} Zeichen',
      'recording.speed': '{n} Z/s',
      'recording.no_browser': 'Spracherkennung nicht unterstützt. Bitte Chrome verwenden.',
      'scene.judge': '👨‍⚖️ Jury bereit',
      'scene.online': '👁 {n} Zuschauer',
      'scene.classroom': '📝 Im Unterricht',
      'processing.analyzing': 'Rede wird analysiert...',
      'processing.transcribing': '📝 Transkribiere...',
      'processing.whisper': '📝 Transkribiere via Whisper...',
      'processing.whisper_fail': '⚠️ Whisper fehlgeschlagen, Browser-Ergebnis verwendet',
      'processing.transcribed': '✅ Transkribiert',
      'processing.evaluating': '🔍 KI-Bewertung...',
      'processing.evaluated': '✅ Bewertet',
      'processing.eval_fail': '❌ Bewertung fehlgeschlagen',
      'processing.eval_error': 'Bewertung fehlgeschlagen: {msg}\n\nBitte prüfen:\n1. API-Key\n2. API-Endpunkt\n3. Modell\n4. Netzwerkverbindung',
      'result.back': '← Start',
      'result.title': '📊 Bewertung',
      'result.lang_score': '🗣️ Sprache',
      'result.think_score': '🧠 Denken',
      'result.overall_score': '⭐ Gesamt',
      'result.transcript': '📋 Transkript',
      'result.transcript_empty': '(Kein Transkript)',
      'result.suggestions': '💡 Vorschläge',
      'result.no_suggestions': 'Keine Vorschläge.',
      'result.save': '💾 Bericht speichern',
      'result.restart': '🔄 Nochmal',
      'result.lang_detail': 'Sprache: {score}/10',
      'settings.title': '🔑 API-Einstellungen',
      'settings.endpoint': 'API-Endpunkt',
      'settings.key': 'API-Key',
      'settings.model': 'Modell',
      'settings.stt': 'Spracherkennung',
      'settings.stt_browser': 'Browser (kostenlos, Chrome)',
      'settings.stt_whisper': 'Whisper API (genau, verbraucht Kontingent)',
      'settings.save': 'Speichern',
      'settings.hint': 'OpenCode Go Nutzer: https://opencode.ai/zen/go/v1',
      'settings.close': '✕',
      'history.delete': 'Löschen',
      'history.repractice': 'Wiederholen',
      'history.expand': '▶',
      'history.avg_score': 'ø',
      'known_categories': ['Technik', 'Gesellschaft', 'Bildung', 'Umwelt', 'Philosophie', 'Kultur', 'Wirtschaft', 'Ethik', 'Leben', 'Selbstentwicklung', 'Gefühle'],
      'random_tag': 'Zufällig',
      'speech_langs': { 'zh-CN': '中文', 'en-US': 'English', 'ja-JP': '日本語', 'de-DE': 'Deutsch' },
      'filter.all_lang': 'Alle Sprachen',
      'filter.all_scene': 'Alle Szenen',
      'filter.all_category': 'Alle Themen',
      'filter.search_placeholder': 'Themen suchen...',
      'filter.sort_newest': '🕐 Neueste',
      'filter.sort_high': '⭐ Höchste',
      'filter.sort_low': '⭐ Niedrigste',
      'filter.select_btn': '☑ Auswählen',
      'filter.cancel_select': '☑ Abwählen',
      'filter.cancel_btn': 'Abbrechen',
      'filter.selected': '{n} ausgewählt',
      'filter.batch_fav': '⭐ Alle faven',
      'filter.batch_del': '🗑 Alle löschen',
      'filter.batch_confirm': '{n} ausgewählte Einträge löschen?',
      'filter.select_all': '☐ Alle auswählen',
      'memo.placeholder': 'Notiz hinzufügen...',
      'memo.saved': 'Gespeichert',
      'memo.audio_unavailable': 'Audio nicht verfügbar',
    },
  };

  let uiLang = localStorage.getItem('uiLang') || 'zh-CN';

  // Multi-user helpers
  function currentUser() {
    return localStorage.getItem('current_user') || 'default';
  }
  function setCurrentUser(name) {
    localStorage.setItem('current_user', name);
  }
  function store(key, value) {
    localStorage.setItem(currentUser() + '_' + key, value);
  }
  function load(key, fallback) {
    var val = localStorage.getItem(currentUser() + '_' + key);
    return val !== null ? val : (fallback !== undefined ? fallback : null);
  }
  function remove(key) {
    localStorage.removeItem(currentUser() + '_' + key);
  }
  function storeJSON(key, obj) {
    store(key, JSON.stringify(obj));
  }
  function loadJSON(key, fallback) {
    var raw = load(key);
    if (raw) { try { return JSON.parse(raw); } catch(e) {} }
    return fallback !== undefined ? fallback : null;
  }
  // Export all user data
  function exportUserData() {
    var prefix = currentUser() + '_';
    var data = {};
    for (var i = 0; i < localStorage.length; i++) {
      var k = localStorage.key(i);
      if (k && k.startsWith(prefix)) {
        data[k.slice(prefix.length)] = localStorage.getItem(k);
      }
    }
    // Also include shared keys
    ['uiLang', 'theme_mode', 'current_user'].forEach(function(k) {
      if (localStorage.getItem(k)) data['__shared_' + k] = localStorage.getItem(k);
    });
    return data;
  }
  function importUserData(data) {
    var prefix = currentUser() + '_';
    for (var k in data) {
      if (k.startsWith('__shared_')) {
        localStorage.setItem(k.replace('__shared_', ''), data[k]);
      } else {
        localStorage.setItem(prefix + k, data[k]);
      }
    }
  }

  function t(key, vars) {
    let str = (I18N[uiLang] && I18N[uiLang][key]) || I18N['zh-CN'][key] || key;
    if (vars) {
      for (const k in vars) {
        str = str.replace('{' + k + '}', vars[k]);
      }
    }
    return str;
  }

  function setUILang(lang) {
    if (!I18N[lang]) return;
    uiLang = lang;
    localStorage.setItem('uiLang', lang);
    document.documentElement.lang = lang;
    applyI18n();
    const speechMap = { 'zh-CN': 'zh-CN', 'en': 'en-US', 'ja': 'ja-JP', 'de': 'de-DE' };
    if (speechMap[lang]) {
      state.config.speechLang = speechMap[lang];
      store('speech_lang_pref', speechMap[lang]);
    }
  }

  function applyI18n() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (key) el.textContent = t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (key) el.placeholder = t(key);
    });
  }

  function refreshUITexts() {
    if (activeTab === 'home') { renderHome(); }
    else if (activeTab === 'collection') { renderCollection(); }
    else if (activeTab === 'notes') { renderNotes(); }
    else if (activeTab === 'career') { renderCareer(); }
    else if (activeTab === 'settings') { renderSettings(); }
    else if (activeTab === 'profile') { renderProfile(); }
    updateFilterBarText();
    document.querySelectorAll('#lang-switch .lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === uiLang);
    });
    document.querySelectorAll('#settings-lang-switch .lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === uiLang);
    });
  }

  let audioCtx = null;

  function ensureAudio() {
    if (!audioCtx || audioCtx.state === 'closed') {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playClickSound(ctx, freq, dur, vol) {
    try {
      if (!ctx || ctx.state === 'closed') return;
      var osc = ctx.createOscillator();
      var gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq || 1200;
      gain.gain.setValueAtTime(vol || 0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + (dur || 0.06));
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + (dur || 0.06));
    } catch (e) { /* click sound ignored */ }
  }

  function isInteractiveElement(el) {
    if (!el || el === document.body || el === document.getElementById('app')) return false;
    var tag = el.tagName;
    if (['BUTTON', 'A', 'INPUT', 'SELECT', 'TEXTAREA', 'LABEL'].indexOf(tag) >= 0) return true;
    if (el.classList && (
        el.classList.contains('tag') ||
        el.classList.contains('history-item') ||
        el.classList.contains('note-item') ||
        el.classList.contains('scene-card') ||
        el.classList.contains('fav-star') ||
        el.classList.contains('sidebar-btn') ||
        el.classList.contains('sort-btn') ||
        el.classList.contains('lang-btn') ||
        el.classList.contains('lang-btn-settings') ||
        el.classList.contains('cal-day') ||
        el.classList.contains('profile-avatar') ||
        el.closest('.sidebar-btn'))) return true;
    return isInteractiveElement(el.parentNode);
  }

  document.addEventListener('click', function(e) {
    try {
      var target = e.target;
      if (!isInteractiveElement(target)) return;

      var ctx = ensureAudio();
      if (!ctx) return;

      var isSidebar = target.closest('#sidebar');
      var doPlay = function() {
        if (isSidebar) {
          playClickSound(ctx, 1800, 0.04, 0.08);
        } else {
          playClickSound(ctx, 1200, 0.06, 0.10);
        }
      };

      if (ctx.state === 'suspended') {
        ctx.resume().then(doPlay);
        return;
      }
      doPlay();
    } catch (e) { /* click sound error */ }
  });

  document.addEventListener('touchstart', function() { ensureAudio(); });
  document.addEventListener('keydown', function() { ensureAudio(); });

  window.onerror = function(msg, url, line, col, err) {
    const el = document.getElementById('js-error-display') || (function() {
      const e = document.createElement('div');
      e.id = 'js-error-display';
      e.style.cssText = 'position:fixed;bottom:0;left:0;right:0;background:#dc2626;color:#fff;padding:16px;font-size:14px;z-index:9999;font-family:monospace;white-space:pre-wrap';
      document.body.appendChild(e);
      return e;
    })();
    el.textContent = 'JS Error: ' + msg + '\n  at ' + url + ':' + line + ':' + col;
    el.style.display = 'block';
    console.error(err);
  };

  document.addEventListener('DOMContentLoaded', function onReady() {
    try {
      const m = document.createElement('div');
      m.id = 'js-alive';
      m.style.cssText = 'position:fixed;top:2px;right:2px;background:#10b981;color:#fff;border-radius:4px;padding:2px 8px;font:12px monospace;z-index:9999';
      m.textContent = 'JS:OK';
      document.body.appendChild(m);
      setTimeout(function() { m.remove(); }, 5000);
    } catch(e) { console.error('JS alive check failed', e); }
  });

  // ============================
  //  State
  // ============================
  const state = {
    phase: 'home',
    config: {
      speechDuration: 3,
      prepTime: 60,
      categories: [],
      apiEndpoint: 'https://api.openai.com/v1',
      apiKey: '',
      model: 'gpt-4o',
      sttMethod: 'browser',
      speechLang: '',
    },
    topic: '',
    topicCategory: '',
    topicSeen: new Set(),
    topicLoading: false,
    topicGen: 0,
    _topicAbortController: null,
    _prefetchPromise: null,
    audioBlob: null,
    transcript: '',
    evaluation: null,
    scene: 'hall',
    mediaRecorder: null,
    audioChunks: [],
    recognition: null,
    stream: null,
    history: [],
    favorites: new Set(),
  };

  // ============================
  //  DOM Cache
  // ============================
  const dom = {};
  function $(id) { return document.getElementById(id); }
  function qs(sel, ctx) { return (ctx || document).querySelector(sel); }
  function qsa(sel, ctx) { return (ctx || document).querySelectorAll(sel); }

  let activeTab = 'home';

  function cacheDom() {
    const ids = [
      'sidebar',
      'tab-home', 'tab-profile', 'tab-collection', 'tab-notes', 'tab-career', 'tab-settings',
      'phase-setup', 'phase-topic', 'phase-preparation',
      'phase-recording', 'phase-processing', 'phase-result',
      'modal-settings', 'btn-sidebar-start',
      'speech-duration', 'speech-duration-display',
      'prep-time', 'prep-time-display',
      'topic-tags', 'speech-lang',
      'api-endpoint', 'api-key', 'api-model', 'stt-method',
      'api-endpoint-modal', 'api-key-modal', 'api-model-modal', 'stt-method-modal',
      'btn-save-api', 'btn-save-api-modal', 'api-status',
      'btn-start', 'btn-setup-back', 'btn-modal-close', 'btn-result-back', 'btn-restart',
      'btn-topic-abandon', 'btn-prep-abandon', 'btn-record-abandon', 'btn-pause-prep',
      'topic-loading', 'topic-content', 'topic-category', 'topic-text',
      'btn-regenerate', 'btn-prep',
      'prep-topic', 'prep-countdown', 'btn-speak',
      'recording-indicator', 'recording-timer', 'recording-topic',
      'transcript-text', 'progress-fill', 'btn-stop',
      'cd-overlay', 'cd-number',
      'scene-select', 'scene-info',
      'stat-wc', 'stat-speed', 'stat-extra', 'recording-card',
      'duration-elapsed', 'duration-total',
      'step-transcribe', 'step-evaluate', 'processing-error',
      'score-language', 'score-thinking', 'score-overall',
      'score-fill-language', 'score-fill-thinking', 'score-fill-overall',
      'detail-language', 'detail-thinking', 'detail-overall',
      'result-transcript', 'result-suggestions', 'scores', 'btn-save-result',
      'streak-count', 'checkin-info',
      'stat-total', 'stat-lang', 'stat-think', 'stat-overall',
      'history-list', 'filter-lang', 'filter-category', 'filter-scene', 'filter-topic',
      'btn-show-favorites', 'btn-select-mode', 'batch-bar', 'batch-count',
      'btn-batch-fav', 'btn-batch-del', 'btn-cancel-select', 'btn-select-all',
      'profile-avatar', 'profile-nickname', 'profile-bio', 'btn-save-profile',
      'profile-stats', 'pstat-total', 'pstat-streak', 'pstat-avg', 'pstat-favs',
      'material-text', 'material-source',
      'notes-list',
      'cstat-total', 'cstat-streak', 'cstat-avg', 'cstat-best',
      'calendar-grid', 'trend-chart', 'advice-content', 'btn-generate-advice',
      'theme-mode', 'settings-lang-switch',
      'analysis-result', 'btn-analyze',
    ];
    ids.forEach(function(id) { dom[id] = $(id); });
  }

  // ============================
  //  Phase Management
  // ============================
  function switchPhase(phase) {
    qsa('.tab-panel').forEach(function(el) { el.classList.remove('active'); });
    qsa('.phase').forEach(function(el) { el.classList.remove('active'); });
    const el = $('phase-' + phase);
    if (el) el.classList.add('active');
    state.phase = phase;
    var hasActivePhase = qsa('.phase.active').length > 0;
    document.body.classList.toggle('phase-active', hasActivePhase);
  }

  // ============================
  //  Config
  // ============================
  function loadConfig() {
    try {
      const saved = load('speech_config');
      if (saved) Object.assign(state.config, JSON.parse(saved));
    } catch (_) {}
    const speechMap = { 'zh-CN': 'zh-CN', 'en': 'en-US', 'ja': 'ja-JP', 'de': 'de-DE' };
    if (!state.config.speechLang) {
      state.config.speechLang = load('speech_lang_pref') || speechMap[uiLang] || 'zh-CN';
    }
    // Migrate old speechDuration stored in minutes (< 60) to seconds
    if (state.config.speechDuration < 60) {
      state.config.speechDuration = Math.round(state.config.speechDuration * 60 / 5) * 5;
    }
    dom['api-endpoint'].value = state.config.apiEndpoint;
    dom['api-key'].value = state.config.apiKey;
    dom['api-model'].value = state.config.model;
    dom['speech-duration'].value = state.config.speechDuration;
    dom['prep-time'].value = state.config.prepTime;
    dom['stt-method'].value = state.config.sttMethod || 'browser';
    dom['speech-lang'].value = state.config.speechLang || 'zh-CN';
    updateDurationDisplay();
    updatePrepDisplay();
  }

  function saveConfig() {
    state.config.apiEndpoint = dom['api-endpoint'].value.trim().replace(/\/+$/, '');
    state.config.apiKey = dom['api-key'].value.trim();
    state.config.model = dom['api-model'].value;
    state.config.speechDuration = parseFloat(dom['speech-duration'].value);
    state.config.prepTime = parseInt(dom['prep-time'].value, 10);
    state.config.sttMethod = dom['stt-method'].value;
    state.config.speechLang = dom['speech-lang'].value;
    store('speech_lang_pref', state.config.speechLang);
    const tags = dom['topic-tags'].querySelectorAll('.tag.active');
    const vals = Array.from(tags).map(function(t) { return t.dataset.value; });
    state.config.categories = vals.includes('随机') ? [] : vals;
    store('speech_config', JSON.stringify(state.config));
    showApiStatus('✓ 已保存', '#10b981');
  }

  function updateDurationDisplay() {
    var sec = parseInt(dom['speech-duration'].value, 10);
    if (sec < 60) {
      dom['speech-duration-display'].textContent = sec + ' 秒';
    } else {
      dom['speech-duration-display'].textContent = (sec / 60).toFixed(1) + ' 分钟';
    }
    var numInput = document.getElementById('speech-duration-input');
    if (numInput) {
      if (parseInt(numInput.value, 10) !== sec) numInput.value = sec;
    }
  }

  function updatePrepDisplay() {
    const v = parseInt(dom['prep-time'].value, 10);
    if (v >= 60) {
      dom['prep-time-display'].textContent = (v / 60).toFixed(1) + ' 分钟';
    } else {
      dom['prep-time-display'].textContent = v + ' 秒';
    }
    var numInput = document.getElementById('prep-time-input');
    if (numInput) {
      if (parseInt(numInput.value, 10) !== v) numInput.value = v;
    }
  }

  const MODEL_ENDPOINTS = {
    'gpt': 'https://api.openai.com/v1',
    'o1': 'https://api.openai.com/v1',
    'o3': 'https://api.openai.com/v1',
    'deepseek': 'https://api.deepseek.com/v1',
    'glm': 'https://open.bigmodel.cn/api/paas/v4',
    'moonshot': 'https://api.moonshot.cn/v1',
    'qwen': 'https://dashscope.aliyuncs.com/compatible-mode/v1',
    'doubao': 'https://ark.cn-beijing.volces.com/api/v3',
    'mistral': 'https://api.mistral.ai/v1',
    'gemini': 'https://generativelanguage.googleapis.com/v1beta',
    'claude': 'https://api.anthropic.com/v1',
    'ernie': '',
    'llama': '',
    'mixtral': '',
  };

  function updateEndpointFromModel() {
    const modelEl = dom['api-model'];
    const epEl = dom['api-endpoint'];
    if (!modelEl || !epEl) return;
    const model = modelEl.value;
    if (!model) return;
    for (const [prefix, endpoint] of Object.entries(MODEL_ENDPOINTS)) {
      if (model.startsWith(prefix) && endpoint) {
        epEl.value = endpoint;
        return;
      }
    }
  }

  function showApiStatus(msg, color) {
    dom['api-status'].textContent = msg;
    dom['api-status'].style.color = color || '#10b981';
    setTimeout(function() { dom['api-status'].textContent = ''; }, 3000);
  }

  // ============================
  //  Tags
  // ============================
  function initTags(container) {
    if (!container) return;
    container.addEventListener('click', function(e) {
      const tag = e.target.closest('.tag');
      if (!tag) return;
      const val = tag.dataset.value;
      const isRandom = (val === '随机' || val === 'random');
      if (isRandom) {
        container.querySelectorAll('.tag').forEach(function(t) { t.classList.remove('active'); });
        tag.classList.add('active');
      } else {
        const randomTag = container.querySelector('.tag[data-value="随机"], .tag[data-value="random"]');
        if (randomTag) randomTag.classList.remove('active');
        tag.classList.toggle('active');
      }
    });
  }

  function renderTopicTags() {
    const container = dom['topic-tags'];
    if (!container) return;
    const tags = (I18N[uiLang] && I18N[uiLang]['topic.categories']) || I18N['zh-CN']['topic.categories'];
    container.innerHTML = '';
    for (const [value, label] of Object.entries(tags)) {
      const span = document.createElement('span');
      span.className = 'tag';
      span.dataset.value = value;
      span.textContent = label;
      container.appendChild(span);
    }
    if (!container.dataset.listenerAttached) {
      container.dataset.listenerAttached = '1';
      container.addEventListener('click', function(e) {
        const tag = e.target.closest('.tag');
        if (!tag) return;
        const val = tag.dataset.value;
        const isRandom = (val === '随机' || val === 'random');
        if (isRandom) {
          container.querySelectorAll('.tag').forEach(function(t) { t.classList.remove('active'); });
          tag.classList.add('active');
        } else {
          const randomTag = container.querySelector('.tag[data-value="随机"], .tag[data-value="random"]');
          if (randomTag) randomTag.classList.remove('active');
          tag.classList.toggle('active');
        }
        if (state._tagChangeCallback) state._tagChangeCallback();
      });
    }
  }

  function getSelectedCategories() {
    const tags = dom['topic-tags'].querySelectorAll('.tag.active');
    const vals = Array.from(tags).map(function(t) { return t.dataset.value; });
    return vals.includes('随机') ? [] : vals;
  }

  const KNOWN_CATEGORIES = ['科技', '社会', '教育', '环境', '哲学', '文化', '经济', '伦理', '生活', '个人成长', '情感'];

  const CATEGORY_I18N = {
    '科技': { en: 'Technology', ja: 'テクノロジー', de: 'Technologie' },
    '社会': { en: 'Society', ja: '社会', de: 'Gesellschaft' },
    '教育': { en: 'Education', ja: '教育', de: 'Bildung' },
    '环境': { en: 'Environment', ja: '環境', de: 'Umwelt' },
    '哲学': { en: 'Philosophy', ja: '哲学', de: 'Philosophie' },
    '文化': { en: 'Culture', ja: '文化', de: 'Kultur' },
    '经济': { en: 'Economics', ja: '経済', de: 'Wirtschaft' },
    '伦理': { en: 'Ethics', ja: '倫理', de: 'Ethik' },
    '生活': { en: 'Lifestyle', ja: '生活', de: 'Leben' },
    '个人成长': { en: 'Self Growth', ja: '自己成長', de: 'Selbstentwicklung' },
    '情感': { en: 'Emotions', ja: '感情', de: 'Gefühle' },
  };

  function pickCategory(aiCat, fallbackCat) {
    if (!aiCat) return fallbackCat || '即兴';
    const exact = KNOWN_CATEGORIES.find(function(k) { return aiCat === k; });
    if (exact) return exact;
    const fuzzy = KNOWN_CATEGORIES.find(function(k) { return aiCat.includes(k) || k.includes(aiCat); });
    if (fuzzy) return fuzzy;
    for (const k of KNOWN_CATEGORIES) {
      for (const tr of Object.values(CATEGORY_I18N[k] || {})) {
        if (aiCat === tr || aiCat.includes(tr) || tr.includes(aiCat)) return k;
      }
    }
    return fallbackCat || '其他';
  }

  function getCategoryListForLang(lang) {
    const key = lang === 'en-US' ? 'en' : lang === 'ja-JP' ? 'ja' : lang === 'de-DE' ? 'de' : null;
    if (!key) return KNOWN_CATEGORIES.join('、');
    return KNOWN_CATEGORIES.map(function(k) { return CATEGORY_I18N[k]?.[key] || k; }).join('、');
  }

  function getSpeechLang() {
    const domVal = dom['speech-lang']?.value;
    if (domVal && ['zh-CN','en-US','ja-JP','de-DE'].includes(domVal)) return domVal;
    if (state.config.speechLang) return state.config.speechLang;
    const speechMap = { 'zh-CN': 'zh-CN', 'en': 'en-US', 'ja': 'ja-JP', 'de': 'de-DE' };
    return speechMap[uiLang] || 'zh-CN';
  }

  function buildTopicPrompt(catHintPrefix, speechLang) {
    const catList = getCategoryListForLang(speechLang);
    const langs = {
      'en-US': {
        prefix: 'Topic in ENGLISH.',
        catLabel: 'Direction',
        mustBelong: 'Strictly these categories.',
        noLimit: 'No limit.',
        seen: 'Generated',
        instruction: 'New topic in ENGLISH. 10-25 words, thought-provoking, viewpoints clash. "topic" in ENGLISH. Category from: ' + catList + '.',
        output: 'Return JSON: {"topic":"...","category":"Technology"}',
      },
      'ja-JP': {
        prefix: '日本語のトピック。',
        catLabel: '方向',
        mustBelong: 'これらのカテゴリから。',
        noLimit: '制限なし。',
        seen: '既出',
        instruction: '新しいトピックを日本語で。15-30字、思索的、対立を含む。「topic」は日本語。カテゴリ: ' + catList,
        output: 'JSON: {"topic":"...","category":"テクノロジー"}',
      },
      'de-DE': {
        prefix: 'Thema auf DEUTSCH.',
        catLabel: 'Richtung',
        mustBelong: 'Diese Kategorien.',
        noLimit: 'Keine.',
        seen: 'Bisher',
        instruction: 'Neues Thema auf DEUTSCH. 10-25 Wörter, Denkanstoß, gegensätzlich. "topic" auf DEUTSCH. Kategorie: ' + catList,
        output: 'JSON: {"topic":"...","category":"Technologie"}',
      },
    };
    const L = langs[speechLang];
    if (!L) {
      const catHint = catHintPrefix ? '方向：' + catHintPrefix : '不限';
      return '即兴演讲题。' + catHint + '\n已出：\n{seen}\n\n请生成不同新题。15-30字，思辩，对立。category 从 [' + catList + '] 选。\nJSON: {"topic":"题目","category":"科技"}';
    }
    const catHint = catHintPrefix ? L.catLabel + ': ' + catHintPrefix + '。' + L.mustBelong : L.noLimit;
    return L.prefix + '\n' + catHint + '\n' + L.seen + ':\n{seen}\n\n' + L.instruction + '\n\n' + L.output;
  }

  function normalizeTopic(t) {
    return t.replace(/[。，！？、“”‘’「」【】《》\\s]/g, '').toLowerCase().slice(0, 20);
  }

  async function generateTopicInternal() {
    const cat = getSelectedCategories();
    const catHint = cat.length ? cat.join('、') : '';
    const seenList = [...state.topicSeen].slice(-5).join('\n');
    const lang = getSpeechLang();
    const langLabel = lang === 'en-US' ? 'English' : lang === 'ja-JP' ? 'Japanese' : lang === 'de-DE' ? 'German' : 'Chinese';
    var prompt = buildTopicPrompt(catHint, lang).replace('{seen}', seenList || (lang === 'zh-CN' ? '无' : lang === 'en-US' ? 'none' : lang === 'ja-JP' ? 'なし' : 'keine'));
    var singleMsg = 'Generate 1 topic in ' + langLabel + '. DIFFERENT from all below:\n\n' + prompt;
    var signal = state._topicAbortController ? state._topicAbortController.signal : undefined;
    return await callAPI([{ role: 'user', content: singleMsg }], { temperature: 0.85, max_tokens: 60, signal: signal });
  }

  async function generateTopic() {
    dom['topic-loading'].classList.remove('hidden');
    dom['topic-content'].classList.add('hidden');
    switchPhase('topic');

    if (state._topicAbortController) state._topicAbortController.abort();
    state._topicAbortController = new AbortController();
    var pauseBtn = document.getElementById('btn-topic-pause');
    if (pauseBtn) { pauseBtn.textContent = t('prep.pause'); pauseBtn.dataset.state = 'generating'; }

    var cat = getSelectedCategories();
    var lang = getSpeechLang();

    try {
      var result;
      if (state._prefetchPromise) {
        try { result = await state._prefetchPromise; }
        catch (_) { result = await generateTopicInternal(); }
        state._prefetchPromise = null;
      } else {
        result = await generateTopicInternal();
      }
      const jsonMatch = result.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]);
        state.topic = (parsed.topic || '').replace(/^[""']|[""']$/g, '').trim();
        const fallback = cat.length ? cat[0] : '即兴';
        state.topicCategory = pickCategory(parsed.category, fallback);
      } else {
        throw new Error('AI did not return JSON');
      }
      if (!state.topic || state.topic.length < 3) throw new Error('Topic too short');
      const norm = normalizeTopic(state.topic);
      if (norm) {
        if (state.topicSeen.has(norm)) throw new Error('Duplicate');
        state.topicSeen.add(norm);
      }
      showTopic();
    } catch (err) {
      if (err.name === 'AbortError') {
        dom['topic-loading'].querySelector('.spinner').classList.add('hidden');
        dom['topic-loading'].querySelector('p').textContent = t('topic.paused');
        if (pauseBtn) { pauseBtn.textContent = t('prep.resume'); pauseBtn.dataset.state = 'paused'; }
        return;
      }
      console.error('Topic generation failed:', err);
      dom['topic-loading'].classList.add('hidden');
      dom['topic-content'].classList.remove('hidden');
      const errMsg = lang === 'zh-CN' ? '出题失败，请检查 API 配置后重试。' : lang === 'en-US' ? 'Topic generation failed. Check API settings and retry.' : lang === 'ja-JP' ? 'トピック生成に失敗。API設定を確認してください。' : 'Themengenerierung fehlgeschlagen. API-Einstellungen prüfen.';
      dom['topic-text'].innerHTML = '<span class="error-msg">⚠️ ' + errMsg + '<br>' + err.message + '</span>';
      dom['topic-category'].textContent = '';
    }
  }

  function showTopic() {
    dom['topic-loading'].classList.add('hidden');
    dom['topic-content'].classList.remove('hidden');
    dom['topic-category'].textContent = state.topicCategory;
    dom['topic-text'].textContent = state.topic;
  }

  // ============================
  //  API Helper (via proxy)
  // ============================
  const USE_PROXY = window.location.port === '8080' || window.location.hostname === 'localhost';

  async function callAPI(messages, opts) {
    opts = opts || {};
    const cfg = state.config;
    if (!cfg.apiKey) throw new Error('请先配置 API Key');

    const body = {
      model: cfg.model || 'gpt-4o',
      messages: messages,
      temperature: opts.temperature !== undefined ? opts.temperature : 0.7,
      max_tokens: opts.max_tokens || 500,
    };

    var fetchOpts = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + cfg.apiKey,
      },
      body: JSON.stringify(body),
    };
    if (opts.signal) fetchOpts.signal = opts.signal;

    var data;
    if (USE_PROXY) {
      fetchOpts.headers['X-API-Endpoint'] = cfg.apiEndpoint;
      fetchOpts.headers['X-API-Key'] = cfg.apiKey;
      delete fetchOpts.headers['Authorization'];
      data = await proxyFetch('/api/chat', fetchOpts);
    } else {
      data = await directFetch(cfg.apiEndpoint + '/chat/completions', fetchOpts);
    }

    if (!data.choices || !data.choices[0]) {
      throw new Error('API 返回异常：缺少 choices 字段');
    }
    return data.choices[0].message.content || '';
  }

  async function proxyFetch(url, options) {
    var res;
    try {
      res = await fetch(url, options);
    } catch (err) {
      if (err.name === 'AbortError') throw err;
      throw new Error('网络请求失败: ' + err.message + '。可能是代理服务未启动，请运行 server.py。');
    }
    const data = await res.json();
    if (!res.ok) {
      const detail = data.error || res.statusText;
      if (res.status === 504) {
        throw new Error('评分请求超时。请尝试：1) 换一个更快的模型 2) 缩短演讲时长 3) 检查网络');
      }
      throw new Error('API 错误 (' + res.status + '): ' + detail);
    }
    if (data.error) {
      throw new Error('代理错误: ' + data.error);
    }
    return data;
  }

  async function directFetch(url, options) {
    var res;
    try {
      res = await fetch(url, options);
    } catch (err) {
      if (err.name === 'AbortError') throw err;
      if (err.message === 'Load failed' || err.message === 'Failed to fetch') {
        throw new Error('浏览器跨域限制（CORS）无法直接调用 API。请使用 server.py 启动服务（已集成代理）。');
      }
      throw new Error('网络请求失败: ' + err.message + '。请检查 API 地址和网络连接。');
    }
    if (!res.ok) {
      var detail = '';
      try { detail = await res.text(); } catch (_) {}
      var msg = 'API 错误 (' + res.status + ')';
      if (detail) msg += ': ' + detail.slice(0, 300);
      throw new Error(msg);
    }
    var data;
    try {
      data = await res.json();
    } catch (_) {
      throw new Error('API 返回数据无法解析，请检查响应格式');
    }
    return data;
  }

  // ============================
  //  Timer
  // ============================
  var timerId = null;
  var timerRemaining = 0;
  var timerOnDone = null;
  var timerOnTick = null;
  var timerPaused = false;

  function startTimer(seconds, onTick, onDone) {
    timerRemaining = seconds;
    timerOnTick = onTick;
    timerOnDone = onDone;
    timerPaused = false;
    if (timerRemaining <= 0) {
      if (timerOnDone) timerOnDone();
      return;
    }
    timerRemaining--;
    if (timerOnTick) timerOnTick(timerRemaining);
    timerId = setInterval(function() {
      if (timerPaused) return;
      if (timerRemaining <= 0) {
        stopTimer();
        if (timerOnDone) timerOnDone();
        return;
      }
      timerRemaining--;
      if (timerOnTick) timerOnTick(timerRemaining);
    }, 1000);
  }

  function stopTimer() {
    if (timerId) { clearInterval(timerId); timerId = null; }
  }

  function pauseTimer() {
    if (!timerId) return;
    timerPaused = true;
    clearInterval(timerId);
    timerId = null;
  }

  function resumeTimer() {
    if (!timerPaused) return;
    timerPaused = false;
    if (timerOnTick) timerOnTick(timerRemaining);
    if (timerRemaining <= 0) {
      if (timerOnDone) timerOnDone();
      return;
    }
    timerId = setInterval(function() {
      if (timerPaused) return;
      if (timerRemaining <= 0) {
        stopTimer();
        if (timerOnDone) timerOnDone();
        return;
      }
      timerRemaining--;
      if (timerOnTick) timerOnTick(timerRemaining);
    }, 1000);
  }

  // ============================
  //  Preparation
  // ============================
  function startPreparation() {
    dom['prep-topic'].textContent = state.topic;
    switchPhase('preparation');
    prepPaused = false;
    dom['btn-pause-prep'].textContent = t('prep.pause');
    // Warm up microphone in preparation
    if (!state._micStream) {
      navigator.mediaDevices.getUserMedia({ audio: true }).then(function(s) {
        state._micStream = s;
      }).catch(function() {});
    }
    const total = state.config.prepTime;
    if (total <= 0) { startRecording(); return; }
    dom['prep-countdown'].textContent = total;
    startTimer(total, function(r) { dom['prep-countdown'].textContent = r; }, function() { startRecording(); });
  }

  // ============================
  //  Recording
  // ============================
  var warn10Triggered = false;

  function initAudio() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playTone(freq, duration, vol) {
    if (vol === undefined) vol = 0.5;
    const ctx = audioCtx;
    if (!ctx || ctx.state === 'closed') return;
    if (ctx.state === 'suspended') ctx.resume();
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(vol, ctx.currentTime + 0.05);
      gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.05 + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + 0.05);
      osc.stop(ctx.currentTime + 0.05 + duration);
    } catch(e) { console.warn('Audio:', e); }
  }

  function playCountdownBeep() { playTone(800, 0.25); }
  function playWarningBeep() { playTone(500, 0.4); }
  function playEndBells() {
    setTimeout(function() { playTone(523, 0.35); }, 0);
    setTimeout(function() { playTone(659, 0.35); }, 350);
    setTimeout(function() { playTone(784, 0.5); }, 700);
  }

  function getAudioType() {
    if (MediaRecorder.isTypeSupported('audio/mp4')) return 'audio/mp4';
    if (MediaRecorder.isTypeSupported('audio/webm;codecs=opus')) return 'audio/webm;codecs=opus';
    return 'audio/webm';
  }

  async function startRecording() {
    stopTimer();
    initAudio();
    dom['recording-topic'].textContent = state.topic;
    dom['transcript-text'].textContent = t('recording.waiting');
    dom['progress-fill'].style.width = '0%';
    dom['cd-overlay'].classList.remove('hidden');
    dom['cd-number'].textContent = '3';
    dom['recording-indicator'].textContent = t('recording.ready_label');
    dom['recording-timer'].textContent = '0:00 / ...';
    switchPhase('recording');
    document.body.className = document.body.className.replace(/scene-\w+/g, '') + ' scene-' + state.scene;
    applySceneStats(state.scene);

    state.audioChunks = [];
    state.transcript = '';
    warn10Triggered = false;

    const cdEl = dom['cd-number'];
    for (var n = 3; n >= 1; n--) {
      cdEl.textContent = n;
      playCountdownBeep();
      await new Promise(function(resolve) { setTimeout(resolve, 1000); });
    }
    dom['cd-overlay'].classList.add('hidden');
    dom['recording-indicator'].textContent = t('recording.recording');

    try {
      if (state._micStream && state._micStream.active) {
        state.stream = state._micStream;
      } else {
        state.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        state._micStream = state.stream;
      }
      const audioType = getAudioType();
      state.mediaRecorder = new MediaRecorder(state.stream, { mimeType: audioType });
      state.mediaRecorder.ondataavailable = function(e) { if (e.data.size > 0) state.audioChunks.push(e.data); };
      state.mediaRecorder.onstop = function() {
        state.audioBlob = new Blob(state.audioChunks, { type: audioType });
        if (state.stream && state.stream !== state._micStream) {
          state.stream.getTracks().forEach(function(t) { t.stop(); });
        }
        state.stream = null;
      };
      state.mediaRecorder.start();
    } catch (err) {
      console.warn('MediaRecorder:', err);
    }

    startSpeechRecognition();

    const durationMs = state.config.speechDuration * 1000;
    const startTime = Date.now();

    startTimer(999999, function() {
      const elapsed = Date.now() - startTime;
      const totalSec = state.config.speechDuration;
      const curSec = Math.floor(elapsed / 1000);
      const remaining = totalSec - curSec;
      const em = Math.floor(curSec / 60);
      const es = curSec % 60;
      const tm = Math.floor(totalSec / 60);
      const ts = totalSec % 60;
      dom['recording-timer'].textContent = em + ':' + String(es).padStart(2,'0') + ' / ' + tm + ':' + String(ts).padStart(2,'0');
      if (dom['duration-elapsed']) dom['duration-elapsed'].textContent = em + ':' + String(es).padStart(2,'0');
      if (dom['duration-total']) dom['duration-total'].textContent = tm + ':' + String(ts).padStart(2,'0');
      dom['progress-fill'].style.width = Math.min(100, (elapsed/durationMs)*100) + '%';

      const words = (state.transcript || '').replace(/\\s/g, '').length;
      dom['stat-wc'].textContent = t('recording.wc', { n: words });
      if (curSec > 0) {
        const cps = Math.round(words / curSec * 10) / 10;
        dom['stat-speed'].textContent = t('recording.speed', { n: cps });
      }

      if (remaining <= 10 && remaining > 0 && !warn10Triggered) {
        warn10Triggered = true;
        playWarningBeep();
      }
      if (elapsed >= durationMs) {
        playEndBells();
        stopRecording();
      }
    }, function() {});
  }

  function startSpeechRecognition() {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
      dom['transcript-text'].textContent = t('recording.no_browser');
      return;
    }
    state.recognition = new SR();
    state.recognition.lang = getSpeechLang();
    state.recognition.continuous = true;
    state.recognition.interimResults = true;

    state.recognition.onresult = function(e) {
      var finalText = '', interim = '';
      for (var i = e.resultIndex; i < e.results.length; i++) {
        if (e.results[i].isFinal) finalText += e.results[i][0].transcript;
        else interim += e.results[i][0].transcript;
      }
      if (finalText) state.transcript += finalText;
      const intText = interim ? '\n\n' + t('recording.recognizing') + ' ' + interim : '';
      dom['transcript-text'].textContent = state.transcript + intText || t('recording.waiting');
    };

    state.recognition.onerror = function(e) {
      console.warn('SR error:', e.error);
      if (e.error === 'no-speech' || e.error === 'aborted') {
        try { state.recognition.start(); } catch(_) {}
      }
    };

    state.recognition.onend = function() {
      if (state.phase === 'recording') {
        try { state.recognition.start(); } catch(_) {}
      }
    };

    try { state.recognition.start(); } catch (e) { console.warn('SR start:', e); }
  }

  function stopSpeechRecognition() {
    if (state.recognition) {
      try { state.recognition.onend = null; state.recognition.stop(); } catch (_) {}
      state.recognition = null;
    }
  }

  function stopRecording() {
    stopTimer();
    stopSpeechRecognition();
    dom['recording-indicator'].textContent = t('recording.stopped');
    if (state.mediaRecorder && state.mediaRecorder.state !== 'inactive') {
      state.mediaRecorder.stop();
    }
    setTimeout(function() { processResult(); }, 500);
  }

  // ============================
  //  Process Result
  // ============================
  async function processResult() {
    switchPhase('processing');
    dom['step-transcribe'].className = '';
    dom['step-evaluate'].className = 'dim';
    dom['processing-error'].classList.add('hidden');
    dom['processing-error'].textContent = '';

    var finalTranscript = state.transcript;

    if (state.config.sttMethod === 'whisper' && state.audioBlob) {
      dom['step-transcribe'].textContent = t('processing.whisper');
      try {
        finalTranscript = await transcribeWithWhisper(state.audioBlob);
      } catch (err) {
        console.warn('Whisper failed, using browser STT:', err);
        dom['step-transcribe'].textContent = t('processing.whisper_fail');
      }
    }

    state.transcript = finalTranscript;
    dom['step-transcribe'].textContent = t('processing.transcribed');
    dom['step-transcribe'].className = 'dim';
    dom['step-evaluate'].textContent = t('processing.evaluating');
    dom['step-evaluate'].className = '';

    try {
      state.evaluation = await evaluateSpeech(state.topic, finalTranscript);
    } catch (err) {
      console.error('Evaluation error:', err);
      dom['step-evaluate'].textContent = t('processing.eval_fail');
      dom['step-evaluate'].className = '';
      dom['processing-error'].classList.remove('hidden');
      dom['processing-error'].textContent = t('processing.eval_error', { msg: err.message });
      state.evaluation = {
        language: { score: 0, detail: t('processing.eval_fail') },
        thinking: { score: 0, detail: t('processing.eval_fail') },
        overall: { score: 0, detail: t('processing.eval_fail') },
        suggestions: t('processing.eval_fail') + '. ' + err.message,
      };
    }

    if (state.evaluation && state.evaluation.language) {
      dom['step-evaluate'].textContent = t('processing.evaluated');
      dom['step-evaluate'].className = 'dim';
      setTimeout(function() { showResult(); }, 300);
    }
  }

  async function transcribeWithWhisper(blob) {
    const cfg = state.config;
    const fd = new FormData();
    fd.append('file', blob, 'recording.webm');
    fd.append('model', 'whisper-1');
    fd.append('language', getSpeechLang().split('-')[0]);

    var data;
    if (USE_PROXY) {
      data = await proxyFetch('/api/transcribe', {
        method: 'POST',
        headers: {
          'X-API-Endpoint': cfg.apiEndpoint,
          'X-API-Key': cfg.apiKey,
        },
        body: fd,
      });
    } else {
      var res;
      try {
        res = await fetch(cfg.apiEndpoint + '/audio/transcriptions', {
          method: 'POST',
          headers: { 'Authorization': 'Bearer ' + cfg.apiKey },
          body: fd,
        });
      } catch (err) {
        throw new Error('Whisper 网络请求失败: ' + err.message);
      }
      if (!res.ok) {
        var txt = '';
        try { txt = await res.text(); } catch(_) {}
        throw new Error('Whisper (' + res.status + '): ' + txt.slice(0, 200));
      }
      data = await res.json();
    }
    return data.text || '';
  }

  async function evaluateSpeech(topic, transcript) {
    if (!transcript || transcript.trim().length < 3) {
      return {
        language: { score: 0, detail: t('processing.eval_fail') },
        thinking: { score: 0, detail: t('processing.eval_fail') },
        overall: { score: 0, detail: t('processing.eval_fail') },
        suggestions: t('processing.eval_fail'),
      };
    }

    // Truncate long transcript to speed up evaluation
    if (transcript && transcript.length > 1500) {
      transcript = transcript.slice(0, 1500) + '\n...[truncated]';
    }
    const speechLang = state.config.speechLang || 'zh-CN';
    const evalPrompts = {
      'en-US': {
        personas: [
          { style: 'balanced', bias: 0 },
          { style: 'encouraging', bias: 0 },
          { style: 'constructive', bias: 0 },
        ],
        template: 'You are evaluating a SPEECH, not an essay. Ignore punctuation, pronoun misuse (he/she/it), filler word repetition, and other written-language issues.\nFocus on:\n- Content quality & logical reasoning\n- Word choice accuracy\n- Delivery fluency\n\nGive a {style} evaluation:\nTopic: {topic}\nTranscript: """{transcript}"""\n\nScore 0-10:\n1 Language (fluency/vocab)\n2 Depth (arguments/reasoning)\n3 Overall (content/structure)\n\nReply JSON:\n{"language":{"score":6.5,"detail":"cite evidence"},"thinking":{"score":5.0,"detail":"cite evidence"},"overall":{"score":5.5,"detail":"judgment"},"suggestions":"tip 1\\\ntip 2"}',
      },
      'ja-JP': {
        personas: [
          { style: 'バランス重視', bias: 0 },
          { style: '励ます', bias: 0 },
          { style: '建設的', bias: 0 },
        ],
        template: 'これはスピーチ評価であり、作文評価ではありません。句読点、代名詞の誤用(彼/彼女/それ)、フィラーの繰り返しなど、書き言葉の問題は無視してください。\n評価基準：\n- 内容の質と論理的思考\n- 語彙の正確さ\n- 話し方の流暢さ\n\n{style}審査：\n題目：{topic}\n文字起こし："""\n{transcript}"""\n\n0-10点評価：\n1 言語表現（流暢さ/語彙）\n2 思考深度（論証/多角的）\n3 総合（内容/構成）\n\nJSONで回答：\n{"language":{"score":6.5,"detail":"評価"},"thinking":{"score":5.0,"detail":"評価"},"overall":{"score":5.5,"detail":"評価"},"suggestions":"提案1\\\n提案2"}',
      },
      'de-DE': {
        personas: [
          { style: 'ausgewogen', bias: 0 },
          { style: 'ermutigend', bias: 0 },
          { style: 'konstruktiv', bias: 0 },
        ],
        template: 'Dies ist eine Rede-Bewertung, kein Aufsatz. Ignorieren Sie Satzzeichen, Pronomenfehler (er/sie/es), Füllwort-Wiederholungen und andere Schriftsprach-Probleme.\nKonzentrieren Sie sich auf:\n- Inhaltliche Qualität & Argumentation\n- Wortwahl-Genauigkeit\n- Sprachlicher Redefluss\n\n{style}e Bewertung:\nThema: {topic}\nTranskript: """{transcript}"""\n\n0-10 Punkte:\n1 Sprache (Flüssigkeit/Wortschatz)\n2 Tiefe (Argumentation)\n3 Gesamt (Inhalt/Struktur)\n\nJSON:\n{"language":{"score":6.5,"detail":"Zitat"},"thinking":{"score":5.0,"detail":"Zitat"},"overall":{"score":5.5,"detail":"Urteil"},"suggestions":"Tipp 1\\\nTipp 2"}',
      },
    };

    var personas, template;
    if (evalPrompts[speechLang]) {
      const langEval = evalPrompts[speechLang];
      personas = langEval.personas;
      template = langEval.template;
    } else {
      personas = [
        { style: '平衡', bias: 0 },
        { style: '鼓励为主', bias: 0 },
        { style: '建设性', bias: 0 },
      ];
    }
    const eva = personas[Math.floor(Math.random() * personas.length)];

    var prompt;
    if (template) {
      prompt = template
        .replace('{style}', eva.style)
        .replace('{topic}', topic)
        .replace('{transcript}', transcript);
    } else {
      prompt = eva.style + '评分（这是演讲评分，非作文评分。忽略标点符号、代词误用（他/它）、口头禅重复等书面语问题。关注内容质量、用词准确性和话语流畅度）：\n题目：' + topic + '\n原文："""\n' + transcript + '"""\n\n0-10分：\n1 语言（流畅度/用词）\n2 思辩（论证/多角度）\n3 总体（内容/结构）\n\nJSON回复：\n{"language":{"score":7.0,"detail":"引原文"},"thinking":{"score":6.5,"detail":"引原文"},"overall":{"score":7.0,"detail":"判断"},"suggestions":"建议1\\\n建议2"}';
    }

    const result = await callAPI([{ role: 'user', content: prompt }], {
      temperature: 0.7,
      max_tokens: 500,
    });

    const jsonMatch = result.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('AI 返回格式异常，无法解析评分');

    var parsed;
    try {
      parsed = JSON.parse(jsonMatch[0]);
    } catch (e) {
      throw new Error('评分结果 JSON 解析失败');
    }

    return {
      language: parsed.language || { score: 0, detail: '无法评分' },
      thinking: parsed.thinking || { score: 0, detail: '无法评分' },
      overall: parsed.overall || { score: 0, detail: '无法评分' },
      suggestions: parsed.suggestions || '暂无建议。',
    };
  }

  // ============================
  //  Results
  // ============================
  function showResult() {
    switchPhase('result');

    const ev = state.evaluation;
    var items = [
      { key: 'language', el: 'language' },
      { key: 'thinking', el: 'thinking' },
      { key: 'overall', el: 'overall' },
    ];
    items.forEach(function(item) {
      const s = Math.round((ev[item.key]?.score || 0) * 10) / 10;
      dom['score-' + item.el].textContent = s.toFixed(1);
      dom['score-fill-' + item.el].style.width = (s * 10) + '%';
      dom['detail-' + item.el].textContent = ev[item.key]?.detail || '';
      dom['score-' + item.el].className = 'score-value n' + Math.round(s);
    });

    var displayTranscript = state.transcript || '';
    if (displayTranscript) {
      displayTranscript = displayTranscript
        .replace(/([^\s])$/gm, '$1。')
        .replace(/([。.！!？?])([^\s])/g, '$1 $2');
    }
    dom['result-transcript'].textContent = displayTranscript || t('result.transcript_empty');
    const suggestions = ev.suggestions || t('result.no_suggestions');
    dom['result-suggestions'].innerHTML = suggestions
      .split('\n')
      .filter(function(s) { return s.trim(); })
      .map(function(s) { return '• ' + s.trim(); })
      .join('\n');
  }

  function saveResult() {
    const ev = state.evaluation;
    if (!ev) return;
    const lines = [
      t('result.title').replace(/^[^\w]*/, '') + ' ===',
      '',
      new Date().toLocaleString(uiLang === 'zh-CN' ? 'zh-CN' : uiLang),
      state.topic,
      t('setup.duration') + ': ' + (state.config.speechDuration >= 60 ? (state.config.speechDuration / 60).toFixed(1) : state.config.speechDuration) + ' ' + (state.config.speechDuration >= 60 ? t('setup.minutes') : t('setup.seconds')),
      '',
      t('result.lang_detail', { score: ev.language?.score || 0 }),
      t('result.think_score').replace(/🧠 /, '') + ': ' + (ev.thinking?.score || 0) + '/10',
      t('result.overall_score').replace('⭐ ', '') + ': ' + (ev.overall?.score || 0) + '/10',
      '',
      '=== ' + t('result.transcript') + ' ===',
      state.transcript || '(N/A)',
      '',
      '=== ' + t('result.suggestions') + ' ===',
      ev.suggestions || 'N/A',
    ].join('\n');

    const blob = new Blob([lines], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'speech_report_' + new Date().toISOString().slice(0, 10) + '.txt';
    a.click();
    URL.revokeObjectURL(url);
  }

  // ============================
  //  History
  // ============================
  function loadHistory() {
    try {
      const saved = load('practice_history');
      if (saved) state.history = JSON.parse(saved);
    } catch (_) { state.history = []; }
  }

  function saveHistory() {
    try {
      store('practice_history', JSON.stringify(state.history));
    } catch (_) {}
  }

  function loadFavorites() {
    try {
      const saved = load('practice_favorites');
      if (saved) state.favorites = new Set(JSON.parse(saved));
    } catch (_) { state.favorites = new Set(); }
  }

  function saveFavorites() {
    try {
      store('practice_favorites', JSON.stringify([...state.favorites]));
    } catch (_) {}
  }

  function toggleFavorite(id) {
    if (state.favorites.has(id)) {
      state.favorites.delete(id);
    } else {
      state.favorites.add(id);
    }
    saveFavorites();
    if (activeTab === 'collection') renderHistoryList();
  }

  // ============================
  //  Audio Storage (IndexedDB)
  // ============================
  function openAudioDB() {
    return new Promise(function(resolve, reject) {
      const req = indexedDB.open('speech_practice', 1);
      req.onupgradeneeded = function() {
        if (!req.result.objectStoreNames.contains('audio')) {
          req.result.createObjectStore('audio');
        }
      };
      req.onsuccess = function() { resolve(req.result); };
      req.onerror = function() { console.warn('IDB open failed:', req.error); resolve(null); };
    });
  }

  async function saveAudioToDB(id, blob) {
    if (!blob) return null;
    const db = await openAudioDB();
    if (!db) return null;
    return new Promise(function(resolve) {
      try {
        const tx = db.transaction('audio', 'readwrite');
        tx.objectStore('audio').put(blob, id);
        tx.oncomplete = function() { resolve(id); };
        tx.onerror = function() { console.warn('Audio save failed'); resolve(null); };
      } catch (_) { resolve(null); }
    });
  }

  async function loadAudioFromDB(id) {
    const db = await openAudioDB();
    if (!db) return null;
    return new Promise(function(resolve) {
      try {
        const tx = db.transaction('audio', 'readonly');
        const req = tx.objectStore('audio').get(id);
        req.onsuccess = function() { resolve(req.result || null); };
        req.onerror = function() { resolve(null); };
      } catch (_) { resolve(null); }
    });
  }

  async function deleteAudioFromDB(id) {
    const db = await openAudioDB();
    if (!db) return;
    try {
      const tx = db.transaction('audio', 'readwrite');
      tx.objectStore('audio').delete(id);
    } catch (_) {}
  }

  function deleteHistoryItem(id) {
    if (!confirm('确定要删除这条练习记录吗？录音也会一并删除。')) return;
    const idx = state.history.findIndex(function(e) { return e.id === id; });
    if (idx === -1) return;
    const entry = state.history[idx];
    state.history.splice(idx, 1);
    saveHistory();
    if (entry.audioId) deleteAudioFromDB(entry.audioId);
    renderHistoryList();
  }

  function addToHistory() {
    const ev = state.evaluation;
    if (!ev) return;

    const d = new Date();
    const id = Date.now();
    const dateStr = d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0') + 'T' + String(d.getHours()).padStart(2,'0') + ':' + String(d.getMinutes()).padStart(2,'0') + ':' + String(d.getSeconds()).padStart(2,'0');
    const entry = {
      id: id,
      date: dateStr,
      topic: state.topic,
      category: state.topicCategory || '即兴',
      duration: state.config.speechDuration,
      speechLang: state.config.speechLang || 'zh-CN',
      scene: state.scene || 'hall',
      transcript: state.transcript,
      audioId: state.audioBlob ? id : null,
      scores: {
        language: Math.round((ev.language?.score || 0) * 10) / 10,
        thinking: Math.round((ev.thinking?.score || 0) * 10) / 10,
        overall: Math.round((ev.overall?.score || 0) * 10) / 10,
      },
      details: {
        language: ev.language?.detail || '',
        thinking: ev.thinking?.detail || '',
        overall: ev.overall?.detail || '',
      },
      suggestions: ev.suggestions || '',
    };

    state.history.unshift(entry);
    saveHistory();

    if (state.audioBlob) {
      saveAudioToDB(entry.id, state.audioBlob);
    }
  }



  function getStreak() {
    if (!state.history.length) return 0;
    const today = new Date();
    const todayStr = today.getFullYear() + '-' + String(today.getMonth()+1).padStart(2,'0') + '-' + String(today.getDate()).padStart(2,'0');
    const dates = [...new Set(state.history.map(function(e) { return e.date.slice(0, 10); }))].sort().reverse();
    if (dates.length === 0) return 0;
    var streak = 0;
    const check = new Date(today);
    for (const d of dates) {
      const dateStr = check.getFullYear() + '-' + String(check.getMonth()+1).padStart(2,'0') + '-' + String(check.getDate()).padStart(2,'0');
      if (d === dateStr) {
        streak++;
        check.setDate(check.getDate() - 1);
      } else {
        break;
      }
    }
    return streak;
  }

  function getLongestStreak() {
    if (!state.history.length) return 0;
    var allDates = [...new Set(state.history.map(function(e) { return e.date.slice(0, 10); }))].sort();
    if (allDates.length === 0) return 0;
    var longest = 1, current = 1;
    for (var i = 1; i < allDates.length; i++) {
      var prev = new Date(allDates[i-1]);
      var curr = new Date(allDates[i]);
      var diff = (curr - prev) / (1000 * 60 * 60 * 24);
      if (Math.round(diff) === 1) {
        current++;
        if (current > longest) longest = current;
      } else {
        current = 1;
      }
    }
    return longest;
  }

  function getTodayCount() {
    const d = new Date();
    const today = d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
    return state.history.filter(function(e) { return e.date.slice(0, 10) === today; }).length;
  }

  function getStats() {
    const n = state.history.length;
    if (n === 0) return { total: 0, lang: null, think: null, overall: null };
    function avg(key) {
      return Math.round(state.history.reduce(function(s, e) { return s + (e.scores[key] || 0); }, 0) / n * 10) / 10;
    }
    return { total: n, lang: avg('language'), think: avg('thinking'), overall: avg('overall') };
  }

  // ============================
  //  Home Page
  // ============================
  function applySceneTheme() {
    const themeMode = localStorage.getItem('theme_mode') || 'auto';
    var scene;
    if (themeMode === 'auto') {
      scene = load('selectedScene') || state.scene || 'hall';
    } else {
      scene = themeMode;
    }
    state.scene = scene;
    document.body.className = document.body.className.replace(/scene-\w+/g, '') + ' scene-' + scene;
  }

  function switchTab(tab) {
    document.querySelectorAll('.phase').forEach(function(p) { p.classList.remove('active'); });
    document.querySelectorAll('.sidebar-btn').forEach(function(b) { b.classList.remove('active'); });
    const btn = document.querySelector('.sidebar-btn[data-tab="' + tab + '"]');
    if (btn) btn.classList.add('active');
    document.querySelectorAll('.tab-panel').forEach(function(p) { p.classList.remove('active'); });
    const panel = document.getElementById('tab-' + tab);
    if (panel) panel.classList.add('active');
    activeTab = tab;
    document.body.classList.remove('phase-active');
    applyI18n();
    if (tab === 'home') renderHome();
    else if (tab === 'profile') renderProfile();
    else if (tab === 'collection') renderCollection();
    else if (tab === 'notes') renderNotes();
    else if (tab === 'career') renderCareer();
    else if (tab === 'settings') renderSettings();
  }

  // ============================
  //  Home helpers
  // ============================
  function showHome() {
    loadHistory();
    loadFavorites();
    switchTab('home');
    applySceneTheme();
    applyI18n();
  }

  function setDefaultLangFilter() {
    const defaultLang = getDefaultSpeechLang();
    if (dom['filter-lang']) {
      dom['filter-lang'].value = defaultLang;
    }
  }

  function getDefaultSpeechLang() {
    const speechMap = { 'zh-CN': 'zh-CN', 'en': 'en-US', 'ja': 'ja-JP', 'de': 'de-DE' };
    return speechMap[uiLang] || 'zh-CN';
  }

  function getUniqueCategories() {
    const cats = new Set(state.history.map(function(e) { return e.category; }));
    return ['全部', ...cats];
  }

  // ============================
  //  History Filtering
  // ============================
  function renderHistoryList() {
    var items = [...state.history];
    var langFilter = (dom['filter-lang']?.value || '');
    var categoryFilter = (dom['filter-category']?.value || '');
    var sceneFilter = (dom['filter-scene']?.value || '');
    var topicSearch = (dom['filter-topic']?.value || '').trim().toLowerCase();

    if (langFilter) items = items.filter(function(e) { return (e.speechLang || 'zh-CN') === langFilter; });
    if (categoryFilter) items = items.filter(function(e) { return e.category === categoryFilter; });
    if (sceneFilter) items = items.filter(function(e) { return (e.scene || 'hall') === sceneFilter; });
    if (topicSearch) items = items.filter(function(e) { return e.topic.toLowerCase().includes(topicSearch); });

    var sortBtns = document.querySelectorAll('#filter-bar .sort-btn');
    var sortMode = 'time-desc';
    sortBtns.forEach(function(btn) { if (btn.classList.contains('active')) sortMode = btn.dataset.sort; });
    if (sortMode === 'score-desc') {
      items.sort(function(a, b) { return (b.scores.overall || 0) - (a.scores.overall || 0); });
    } else if (sortMode === 'score-asc') {
      items.sort(function(a, b) { return (a.scores.overall || 0) - (b.scores.overall || 0); });
    } else {
      items.sort(function(a, b) { return new Date(b.date) - new Date(a.date); });
    }

    var showFavs = dom['btn-show-favorites']?.classList.contains('active');
    if (showFavs) items = items.filter(function(e) { return state.favorites.has(e.id); });

    if (state.history.length === 0) {
      dom['history-list'].innerHTML = '<p class="empty-hint">' + t('home.empty') + '</p>';
      dom['batch-bar'].classList.add('hidden');
      return;
    }
    if (items.length === 0) {
      dom['history-list'].innerHTML = '<p class="empty-hint">' + t('home.empty') + '</p>';
      dom['batch-bar'].classList.add('hidden');
      return;
    }

    var inSelectMode = document.body.classList.contains('select-mode');
    var selectedIds = state._selectedIds || new Set();
    var avgLabel = t('history.avg_score');
    var redoLabel = t('history.repractice');
    var noTranscript = t('result.transcript_empty');
    var dateLocale = uiLang === 'zh-CN' ? 'zh-CN' : uiLang;
    var sceneNames = { hall: '🏛', stream: '📡', campus: '🎓' };
    var langLabelMap = { 'zh-CN': '🇨🇳', 'en-US': '🇺🇸', 'ja-JP': '🇯🇵', 'de-DE': '🇩🇪' };
    var catLabels = (I18N[uiLang] && I18N[uiLang]['topic.categories']) || I18N['zh-CN']['topic.categories'];

    dom['history-list'].innerHTML = items.map(function(e) {
      var avg = Math.round((e.scores.language + e.scores.thinking + e.scores.overall) / 3 * 10) / 10;
      var scoreClass = avg >= 7 ? 'score-high' : avg >= 4 ? 'score-mid' : 'score-low';
      var dateObj = new Date(e.date);
      var dateStr = dateObj.toLocaleString(dateLocale, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
      var hasAudio = !!e.audioId;
      var hasTranscript = e.transcript && e.transcript.trim().length > 0;
      var isFaved = state.favorites.has(e.id);
      var langLabel = langLabelMap[e.speechLang] || '🌐';
      var sceneIcon = sceneNames[e.scene] || '';
      var memo = e.memo || '';
      var checked = selectedIds.has(e.id) ? 'checked' : '';
      var favStar = isFaved ? '⭐' : '☆';
      var favClass = isFaved ? 'faved' : '';

      var html = '<div class="history-item" data-id="' + e.id + '">';
      html += '<input type="checkbox" class="select-cb" data-cb-id="' + e.id + '" ' + checked + '>';
      html += '<div class="history-item-top"><div class="history-item-left">';
      html += '<div class="history-item-row1"><div class="history-topic">' + e.topic + '</div></div>';
      html += '<div class="history-tags"><span class="history-tag">' + (catLabels[e.category] || e.category) + '</span>';
      html += '<span class="history-tag ' + scoreClass + '">' + avgLabel + ' ' + avg.toFixed(1) + '/10</span>';
      html += '<span class="history-tag">' + langLabel + '</span>';
      if (sceneIcon) html += '<span class="history-tag">' + sceneIcon + '</span>';
      if (hasAudio) html += '<span class="history-tag audio-tag">🎙</span>';
      html += '</div></div><div class="history-meta">' + dateStr + '</div>';
      html += '<div class="history-inline-actions"><span class="fav-star ' + favClass + '" data-fav-id="' + e.id + '">' + favStar + '</span>';
      html += '<button class="btn-delete-inline" data-delete-id="' + e.id + '">🗑</button></div></div>';
      html += '<div class="history-detail"><div class="history-detail-scores">';
      html += '<span>🗣️ <strong>' + e.scores.language.toFixed(1) + '/10</strong></span>';
      html += '<span>🧠 <strong>' + e.scores.thinking.toFixed(1) + '/10</strong></span>';
      html += '<span>⭐ <strong>' + e.scores.overall.toFixed(1) + '/10</strong></span>';
      html += '<span>⏱ ' + (e.duration < 60 ? e.duration : (e.duration / 60).toFixed(1)) + (e.duration < 60 ? t('setup.seconds') : t('setup.minutes')) + '</span></div>';
      html += '<div class="history-detail-suggest">' + (e.suggestions || '').split('\\n').filter(function(s) { return s.trim(); }).map(function(s) { return '• ' + s.trim(); }).join('\\n') + '</div>';
      if (hasAudio) html += '<div class="history-audio" data-audio-id="' + e.id + '" style="margin-top:10px"><em>' + t('recording.transcript_label') + '</em></div>';
      if (hasTranscript) {
        html += '<div class="history-transcript-full">' + e.transcript + '</div>';
      } else {
        html += '<div class="history-transcript-full" style="color:#94a3b8">' + noTranscript + '</div>';
      }
      html += '<div class="history-memo"><textarea placeholder="' + t('memo.placeholder') + '" data-memo-id="' + e.id + '">' + memo + '</textarea>';
      if (memo) html += '<div class="memo-saved">' + t('memo.saved') + '</div>';
      html += '</div><div class="history-actions">';
      html += '<button class="btn-repractice" data-topic="' + e.topic.replace(/"/g, '&quot;') + '" data-category="' + e.category + '" data-speech-lang="' + (e.speechLang || 'zh-CN') + '">🔄 ' + redoLabel + '</button>';
      html += '</div></div></div>';
      return html;
    }).join('');

    dom['batch-bar'].classList.toggle('hidden', !inSelectMode);
    if (inSelectMode) {
      dom['batch-count'].textContent = t('filter.selected', { n: selectedIds.size });
    }

    // Click to expand
    dom['history-list'].querySelectorAll('.history-item').forEach(function(el) {
      var audioDiv = el.querySelector('.history-audio');
      var audioLoaded = false;
      el.addEventListener('click', function(ev) {
        if (document.body.classList.contains('select-mode')) return;
        el.classList.toggle('expanded');
        if (el.classList.contains('expanded') && audioDiv && !audioLoaded) {
          audioLoaded = true;
          var audioId = parseInt(audioDiv.dataset.audioId, 10);
          loadAudioFromDB(audioId).then(function(blob) {
            if (blob) {
              var url = URL.createObjectURL(blob);
              audioDiv.innerHTML = '<audio controls src="' + url + '" preload="none" style="width:100%;max-width:400px;height:36px;margin-top:4px"></audio>';
              var audioEl = audioDiv.querySelector('audio');
              if (audioEl) audioEl.addEventListener('click', function(e) { e.stopPropagation(); });
            } else {
              audioDiv.innerHTML = '<em style="color:#94a3b8">' + t('memo.audio_unavailable') + '</em>';
            }
          });
        }
      });
      var detail = el.querySelector('.history-detail');
      if (detail) detail.addEventListener('click', function(e) { e.stopPropagation(); });
    });

    // Checkbox
    dom['history-list'].querySelectorAll('.select-cb').forEach(function(cb) {
      cb.addEventListener('click', function(e) {
        e.stopPropagation();
        var id = parseInt(cb.dataset.cbId, 10);
        if (cb.checked) selectedIds.add(id);
        else selectedIds.delete(id);
        state._selectedIds = selectedIds;
        dom['batch-count'].textContent = t('filter.selected', { n: selectedIds.size });
      });
    });

    // Favorite star
    dom['history-list'].querySelectorAll('.fav-star').forEach(function(star) {
      star.addEventListener('click', function(e) {
        e.stopPropagation();
        var id = parseInt(star.dataset.favId, 10);
        toggleFavorite(id);
      });
    });

    // Inline delete
    dom['history-list'].querySelectorAll('.btn-delete-inline').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        var id = parseInt(btn.dataset.deleteId, 10);
        deleteHistoryItem(id);
      });
    });

    // Repractice
    dom['history-list'].querySelectorAll('.btn-repractice').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        rePractice(btn.dataset.topic, btn.dataset.category, btn.dataset.speechLang);
      });
    });

    // Memo textarea
    dom['history-list'].querySelectorAll('.history-memo textarea').forEach(function(ta) {
      ta.addEventListener('click', function(e) { e.stopPropagation(); });
      ta.addEventListener('blur', function() {
        var id = parseInt(ta.dataset.memoId, 10);
        var val = ta.value.trim();
        var entry = state.history.find(function(e) { return e.id === id; });
        if (entry) {
          entry.memo = val;
          saveHistory();
          var parent = ta.parentElement;
          var savedEl = parent.querySelector('.memo-saved');
          if (val && !savedEl) {
            var s = document.createElement('div');
            s.className = 'memo-saved';
            s.textContent = t('memo.saved');
            parent.appendChild(s);
            setTimeout(function() { s.remove(); }, 2000);
          }
        }
      });
    });

    if (inSelectMode) {
      dom['history-list'].querySelectorAll('.history-item').forEach(function(el) {
        el.addEventListener('click', function(e) {
          var cb = el.querySelector('.select-cb');
          if (cb && e.target !== cb) {
            cb.checked = !cb.checked;
            cb.dispatchEvent(new Event('click', { bubbles: true }));
          }
        });
      });
    }
  }

  function updateFilterBarText() {
    var langMap = { 'zh-CN': '中文', 'en-US': 'English', 'ja-JP': '日本語', 'de-DE': 'Deutsch' };
    var sceneMap = { hall: t('setup.hall_name'), stream: t('setup.stream_name'), campus: t('setup.campus_name') };

    var langFilter = dom['filter-lang'];
    if (langFilter) {
      langFilter.querySelector('option[value=""]').textContent = t('filter.all_lang');
      Array.from(langFilter.options).forEach(function(opt) {
        if (opt.value && langMap[opt.value]) opt.textContent = langMap[opt.value];
      });
    }

    var sceneFilter = dom['filter-scene'];
    if (sceneFilter) {
      sceneFilter.querySelector('option[value=""]').textContent = t('filter.all_scene');
      Array.from(sceneFilter.options).forEach(function(opt) {
        if (opt.value && sceneMap[opt.value]) opt.textContent = sceneMap[opt.value];
      });
    }

    var categoryFilter = dom['filter-category'];
    if (categoryFilter) {
      categoryFilter.querySelector('option[value=""]').textContent = t('filter.all_category');
      var catLabels = (I18N[uiLang] && I18N[uiLang]['topic.categories']) || I18N['zh-CN']['topic.categories'];
      Array.from(categoryFilter.options).forEach(function(opt) {
        if (opt.value && catLabels[opt.value]) opt.textContent = catLabels[opt.value];
      });
    }

    var searchInput = dom['filter-topic'];
    if (searchInput) searchInput.placeholder = t('filter.search_placeholder');

    var sortBtns = document.querySelectorAll('#filter-bar .sort-btn');
    var sortLabels = { 'time-desc': 'filter.sort_newest', 'score-desc': 'filter.sort_high', 'score-asc': 'filter.sort_low' };
    sortBtns.forEach(function(btn) {
      var key = sortLabels[btn.dataset.sort];
      if (key) btn.textContent = t(key);
    });

    var selectBtn = dom['btn-select-mode'];
    if (selectBtn) {
      var isSelectMode = document.body.classList.contains('select-mode');
      selectBtn.textContent = t(isSelectMode ? 'filter.cancel_select' : 'filter.select_btn');
    }

    if (dom['btn-batch-fav']) dom['btn-batch-fav'].textContent = t('filter.batch_fav');
    if (dom['btn-batch-del']) dom['btn-batch-del'].textContent = t('filter.batch_del');
    if (dom['btn-cancel-select']) dom['btn-cancel-select'].textContent = t('filter.cancel_btn');
    if (dom['btn-select-all']) dom['btn-select-all'].textContent = t('filter.select_all');
  }

  function showNotesBackButton() {
    if (!state._cameFromNotes) return;
    var backEl = document.getElementById('notes-back-btn');
    if (!backEl) {
      backEl = document.createElement('button');
      backEl.id = 'notes-back-btn';
      backEl.className = 'btn-back';
      backEl.style.cssText = 'margin-bottom:10px;display:block';
      backEl.textContent = '← ' + t('nav.notes');
      backEl.addEventListener('click', goBackToNotes);
      var card = document.getElementById('tab-collection').querySelector('.card');
      if (card) card.insertBefore(backEl, card.firstChild);
    } else {
      backEl.style.display = 'block';
    }
  }

  function goBackToNotes() {
    state._cameFromNotes = false;
    document.querySelectorAll('.nav-item').forEach(function(n) { n.classList.remove('active'); });
    var notesNav = document.querySelector('.nav-item[data-tab="notes"]');
    if (notesNav) notesNav.classList.add('active');
    activeTab = 'notes';
    document.querySelectorAll('.tab-panel').forEach(function(p) { p.classList.remove('active'); });
    var panel = document.getElementById('tab-notes');
    if (panel) panel.classList.add('active');
    setDefaultLangFilter();
    renderNotes();
  }

  function initHistoryFilters() {
    var rerender = function() { renderHistoryList(); };

    ['filter-lang', 'filter-category', 'filter-scene'].forEach(function(id) {
      var el = dom[id];
      if (el) el.addEventListener('change', rerender);
    });

    var topicInput = dom['filter-topic'];
    if (topicInput) {
      var timer;
      topicInput.addEventListener('input', function() {
        clearTimeout(timer);
        timer = setTimeout(rerender, 300);
      });
    }

    document.querySelectorAll('#filter-bar .sort-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        document.querySelectorAll('#filter-bar .sort-btn').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        rerender();
      });
    });

    var favBtn = dom['btn-show-favorites'];
    if (favBtn) {
      favBtn.addEventListener('click', function() {
        favBtn.classList.toggle('active');
        rerender();
      });
    }

    var selectBtn = dom['btn-select-mode'];
    if (selectBtn) {
      selectBtn.addEventListener('click', function() {
        var on = !document.body.classList.contains('select-mode');
        document.body.classList.toggle('select-mode', on);
        state._selectedIds = new Set();
        updateFilterBarText();
        if (!on) dom['batch-bar'].classList.add('hidden');
        rerender();
      });
    }

    var btnSelectAll = dom['btn-select-all'];
    if (btnSelectAll) {
      btnSelectAll.addEventListener('click', function() {
        var ids = state._selectedIds || new Set();
        var cbs = dom['history-list'].querySelectorAll('.select-cb');
        var allChecked = Array.from(cbs).every(function(cb) { return cb.checked; });
        cbs.forEach(function(cb) {
          cb.checked = !allChecked;
          var id = parseInt(cb.dataset.cbId, 10);
          if (cb.checked) ids.add(id);
          else ids.delete(id);
        });
        state._selectedIds = ids;
        dom['batch-count'].textContent = t('filter.selected', { n: ids.size });
      });
    }

    var btnBatchFav = dom['btn-batch-fav'];
    if (btnBatchFav) {
      btnBatchFav.addEventListener('click', function() {
        var ids = state._selectedIds || new Set();
        if (ids.size === 0) return;
        ids.forEach(function(id) { state.favorites.add(id); });
        saveFavorites();
        state._selectedIds = new Set();
        rerender();
      });
    }

    var btnBatchDel = dom['btn-batch-del'];
    if (btnBatchDel) {
      btnBatchDel.addEventListener('click', function() {
        var ids = state._selectedIds || new Set();
        if (ids.size === 0) return;
        if (!confirm(t('filter.batch_confirm', { n: ids.size }))) return;
        ids.forEach(function(id) { state.favorites.delete(id); });
        state.history = state.history.filter(function(e) { return !ids.has(e.id); });
        saveHistory();
        saveFavorites();
        state._selectedIds = new Set();
        document.body.classList.remove('select-mode');
        updateFilterBarText();
        dom['batch-bar'].classList.add('hidden');
        rerender();
      });
    }

    var btnCancel = dom['btn-cancel-select'];
    if (btnCancel) {
      btnCancel.addEventListener('click', function() {
        document.body.classList.remove('select-mode');
        updateFilterBarText();
        state._selectedIds = new Set();
        dom['batch-bar'].classList.add('hidden');
        rerender();
      });
    }
  }

  // ============================
  //  Practice Navigation
  // ============================
  function goHome() {
    stopTimer();
    stopSpeechRecognition();
    if (state.mediaRecorder && state.mediaRecorder.state !== 'inactive') state.mediaRecorder.stop();
    if (state.stream && state.stream !== state._micStream) { state.stream.getTracks().forEach(function(t) { t.stop(); }); state.stream = null; }
    state.audioBlob = null;
    state.audioChunks = [];
    state.transcript = '';
    state.evaluation = null;
    showHome();
  }

  function goToSetup() {
    switchPhase('setup');
    renderTopicTags();
    var speechMap = { 'zh-CN': 'zh-CN', 'en': 'en-US', 'ja': 'ja-JP', 'de': 'de-DE' };
    dom['speech-lang'].value = speechMap[uiLang] || 'zh-CN';
    state.topicSeen.clear();
    state.topicGen++;
    if (state._topicAbortController) state._topicAbortController.abort();
    state._topicAbortController = new AbortController();
    state._prefetchPromise = null;
    // Warm up microphone permission in setup
    if (!state._micStream) {
      navigator.mediaDevices.getUserMedia({ audio: true }).then(function(s) {
        state._micStream = s;
      }).catch(function() {});
    }
    prefetchTopic();
  }

  async function prefetchTopic() {
    if (!state.config.apiKey) return;
    try {
      var promise = generateTopicInternal();
      state._prefetchPromise = promise;
      await promise;
    } catch (_) {
      state._prefetchPromise = null;
    }
  }

  function abandonPractice() {
    stopTimer();
    stopSpeechRecognition();
    if (state.mediaRecorder && state.mediaRecorder.state !== 'inactive') state.mediaRecorder.stop();
    if (state.stream && state.stream !== state._micStream) { state.stream.getTracks().forEach(function(t) { t.stop(); }); state.stream = null; }
    state.audioBlob = null;
    state.audioChunks = [];
    state.transcript = '';
    state.evaluation = null;
    showHome();
  }

  function rePractice(topic, category, speechLang) {
    state.topic = topic;
    state.topicCategory = category || '即兴';
    if (speechLang) {
      state.config.speechLang = speechLang;
      store('speech_lang_pref', speechLang);
      var sel = document.getElementById('speech-lang');
      if (sel) sel.value = speechLang;
    }
    startPreparation();
  }

  function applySceneStats(scene) {
    var el = dom['stat-extra'];
    if (!el) return;
    if (scene === 'hall') el.textContent = t('scene.judge');
    else if (scene === 'stream') {
      var n = 100 + Math.floor(Math.random() * 900);
      el.textContent = t('scene.online', { n: n });
    } else el.textContent = t('scene.classroom');
  }

  var prepPaused = false;

  function togglePrepPause() {
    if (!prepPaused) {
      pauseTimer();
      prepPaused = true;
      dom['btn-pause-prep'].textContent = t('prep.resume');
    } else {
      resumeTimer();
      prepPaused = false;
      dom['btn-pause-prep'].textContent = t('prep.pause');
    }
  }

  function loadSettingsTab() { }

  function closeNoteModal() {
    var modal = document.getElementById('note-modal');
    if (modal) modal.classList.add('hidden');
  }

  function openNoteModal(entry) {
    // Creates a modal overlay for a history entry
    var existing = document.getElementById('note-modal-temp');
    if (existing) existing.remove();

    var catLabels = (I18N[uiLang] && I18N[uiLang]['topic.categories']) || I18N['zh-CN']['topic.categories'];
    var overlay = document.createElement('div');
    overlay.id = 'note-modal-temp';
    overlay.className = 'modal-overlay';
    overlay.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.5);z-index:200;display:flex;align-items:center;justify-content:center';
    var scoreLang = (entry.scores.language || 0).toFixed(1);
    var scoreThink = (entry.scores.thinking || 0).toFixed(1);
    var scoreOverall = (entry.scores.overall || 0).toFixed(1);
    var suggestions = entry.suggestions || '';
    var suggestionsHtml = suggestions.split('\\n').filter(function(s) { return s.trim(); }).map(function(s) { return '• ' + s.trim(); }).join('<br>');
    var memoContent = entry.memo || '';
    var categoryLabel = catLabels[entry.category] || entry.category || '';

    overlay.innerHTML = '<div class="modal" style="background:#fff;border-radius:16px;max-width:600px;width:90%;max-height:80vh;overflow-y:auto">'
      + '<div class="modal-header" style="display:flex;justify-content:space-between;padding:16px 20px;border-bottom:1px solid #e2e8f0">'
      + '<h3 style="margin:0;font-size:16px">' + (entry.topic || '') + '</h3>'
      + '<button class="btn-close" style="background:none;border:none;font-size:20px;cursor:pointer;color:#94a3b8">✕</button></div>'
      + '<div class="modal-body" style="padding:20px">'
      + '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:16px">'
      + '<div style="text-align:center;padding:10px;background:#f8fafc;border-radius:10px"><div style="font-size:22px;font-weight:700;color:#8b5cf6">' + scoreLang + '<span style="font-size:12px;color:#94a3b8">/10</span></div><div style="font-size:11px;color:#64748b">' + t('result.lang_score') + '</div></div>'
      + '<div style="text-align:center;padding:10px;background:#f8fafc;border-radius:10px"><div style="font-size:22px;font-weight:700;color:#3b82f6">' + scoreThink + '<span style="font-size:12px;color:#94a3b8">/10</span></div><div style="font-size:11px;color:#64748b">' + t('result.think_score') + '</div></div>'
      + '<div style="text-align:center;padding:10px;background:#f8fafc;border-radius:10px"><div style="font-size:22px;font-weight:700;color:#f59e0b">' + scoreOverall + '<span style="font-size:12px;color:#94a3b8">/10</span></div><div style="font-size:11px;color:#64748b">' + t('result.overall_score') + '</div></div>'
      + '</div>'
      + '<div style="font-size:12px;color:#94a3b8;margin-bottom:8px">' + categoryLabel + ' · ⏱ ' + (entry.duration < 60 ? entry.duration : (entry.duration / 60).toFixed(1)) + (entry.duration < 60 ? t('setup.seconds') : t('setup.minutes')) + ' · ' + new Date(entry.date).toLocaleString() + '</div>'
      + '<div style="background:#fffbeb;border:1px solid #fde68a;border-radius:10px;padding:12px;margin-bottom:12px;white-space:pre-wrap;font-size:14px">' + memoContent + '</div>'
      + (entry.transcript ? '<div style="margin-bottom:12px"><h4 style="font-size:13px;color:#64748b">' + t('result.transcript') + '</h4><div style="font-size:13px;color:#334155;white-space:pre-wrap;max-height:150px;overflow-y:auto">' + entry.transcript + '</div></div>' : '')
      + (suggestions ? '<div style="margin-bottom:12px"><h4 style="font-size:13px;color:#64748b">' + t('result.suggestions') + '</h4><div style="font-size:13px;color:#334155">' + suggestionsHtml + '</div></div>' : '')
      + (entry.audioId ? '<div style="margin-bottom:12px"><h4 style="font-size:13px;color:#64748b">' + t('recording.transcript_label') + '</h4><div class="note-audio" data-audio-id="' + entry.audioId + '" style="margin-top:4px"><em style="color:#94a3b8">' + t('memo.audio_unavailable') + '</em></div></div>' : '')
      + '</div></div>';
    document.body.appendChild(overlay);

    // Load audio if present
    if (entry.audioId) {
      var audioContainer = overlay.querySelector('.note-audio');
      if (audioContainer) {
        loadAudioFromDB(entry.audioId).then(function(blob) {
          if (blob) {
            var url = URL.createObjectURL(blob);
            audioContainer.innerHTML = '<audio controls src="' + url + '" preload="none" style="width:100%;max-width:100%;height:36px;margin-top:4px"></audio>';
          }
        });
      }
    }

    overlay.querySelector('.btn-close').addEventListener('click', function() { overlay.remove(); });
    overlay.addEventListener('click', function(e) { if (e.target === overlay) overlay.remove(); });
  }

  // ============================
  //  Tab Renderers
  // ============================
  function renderHome() {
    fetchDailyMaterial();
    renderDrawHistory();
  }

  function fetchDailyMaterial() {
    var drawBtn = document.getElementById('btn-draw');
    var today = new Date().toISOString().slice(0, 10);

    if (!state.config.apiKey) {
      if (dom['material-text']) dom['material-text'].textContent = t('home.material_default');
      if (dom['material-source']) dom['material-source'].textContent = t('home.material_hint');
      if (drawBtn) { drawBtn.style.display = 'none'; }
      return;
    }

    if (drawBtn) {
      drawBtn.style.display = '';
      var drawDate = load('draw_date');
      var drawCount = parseInt(load('draw_count', '0'), 10);
      if (drawDate !== today) { drawCount = 0; drawDate = today; store('draw_date', today); store('draw_count', '0'); }
      if (drawDate === today && drawCount >= 3) {
        drawBtn.disabled = true;
        drawBtn.textContent = t('home.draw_limit');
      } else {
        drawBtn.disabled = false;
        drawBtn.textContent = t('home.draw_btn');
      }
    }

    // Seed a test draw if API is configured but no history yet
    var history = loadJSON('draw_history', []);
    if (history.length === 0) {
      var defaultTexts = {
        'zh-CN': '演讲的源头可追溯至古希腊的广场，它不仅是修辞的艺术与辩论的锋芒，更是人类灵魂沟通的桥梁，让思想的火花在公共空间的碰撞中化作推动历史与文明前行的力量。',
        'en': 'Oratory finds its roots in the ancient Greek agoras, emerging not merely as an art of rhetoric or the sharpness of debate, but as a bridge for the human soul, where the collision of ideas in the public sphere ignites the spark that propels history and civilization forward.',
        'ja': '演説の源流は古代ギリシャの広場にあり、それは単なる修辞や弁論の技芸に留まらず、魂と魂を繋ぐ架け橋として、公的な場で思想が火花を散らし、歴史と文明を前へと突き動かす力となりました。',
        'de': 'Die Wurzeln der Redekunst liegen auf den Marktplätzen des antiken Griechenlands, wo sie weit mehr war als nur Rhetorik oder die Schärfe der Debatte: Sie wurde zur Brücke zwischen den Seelen, an der sich im Austausch der Ideen jene Funken entzündeten, die den Lauf der Geschichte und den Fortschritt der Zivilisation vorantrieben.'
      };
      var sourceTexts = { 'zh-CN': '默认素材', 'en': 'Default material', 'ja': 'デフォルト素材', 'de': 'Standardmaterial' };
      history.push({ date: today, time: '00:00:00', texts: defaultTexts, source: sourceTexts[uiLang] || sourceTexts['zh-CN'] });
      store('draw_history', JSON.stringify(history));
    }

    // Check if already drawn today (use translation matching current UI language)
    var cached = loadJSON('daily_material', {});
    if (cached.date === today) {
      var langKey = uiLang === 'zh-CN' ? 'zh-CN' : uiLang;
      var displayText = '';
      var displaySource = '';
      if (cached.texts) {
        displayText = cached.texts[langKey] || cached.texts['zh-CN'] || '';
        displaySource = (cached.sources && cached.sources[langKey]) || cached.source || '';
      } else if (cached.text) {
        displayText = cached.text;
        displaySource = cached.source || '';
      }
      if (displayText) {
        if (dom['material-text']) dom['material-text'].textContent = displayText;
        if (dom['material-source']) dom['material-source'].textContent = displaySource;
        return;
      }
    }
    if (dom['material-text']) dom['material-text'].textContent = t('home.material_default');
    if (dom['material-source']) dom['material-source'].textContent = t('home.draw_hint');
    renderDrawHistory();
  }

  var _drawnTopics = [];

  function drawDailyMaterial() {
    if (!state.config.apiKey) return;
    var today = new Date().toISOString().slice(0, 10);
    var drawDate = load('draw_date');
    var drawCount = parseInt(load('draw_count', '0'), 10);
    if (drawDate !== today) { drawCount = 0; store('draw_date', today); }
    if (drawCount >= 3) return;
    drawCount++;
    store('draw_count', String(drawCount));
    if (dom['material-text']) dom['material-text'].textContent = t('home.gathering');
    if (dom['material-source']) dom['material-source'].textContent = '';
    var drawBtn = document.getElementById('btn-draw');
    if (drawBtn) { drawBtn.disabled = true; drawBtn.textContent = t('home.drawing'); }
    var ts = Date.now();
    var avoid = _drawnTopics.length > 0 ? '\nPreviously shown (DO NOT repeat):\n' + _drawnTopics.slice(-3).join('\n') : '';
    var prompt = 'Generate ONE short speech material (quote, news, or anecdote, 2-4 sentences) and translate it into 4 languages. Return JSON:\n{"texts":{"zh-CN":"...","en":"...","ja":"...","de":"..."},"source":"author/place"}\nVariation seed: ' + ts + avoid;
    callAPI([{ role: 'user', content: prompt }], { temperature: 0.95, max_tokens: 400 }).then(function(result) {
      var m = result.match(/\{[\s\S]*\}/);
      var texts = {}, source = '';
      if (m) {
        try { var p = JSON.parse(m[0]); texts = p.texts || {}; source = p.source || ''; } catch (_) {
          try { var p2 = JSON.parse(m[0]); texts = { 'zh-CN': p2.text || result }; source = p2.source || ''; } catch (_2) { texts = { 'zh-CN': result }; }
        }
      } else {
        texts = { 'zh-CN': result };
      }
      var firstText = texts['zh-CN'] || texts['en'] || texts['ja'] || texts['de'] || result;
      if (firstText) _drawnTopics.push(firstText.slice(0, 50));
      var langKey = uiLang === 'zh-CN' ? 'zh-CN' : uiLang;
      if (dom['material-text']) dom['material-text'].textContent = texts[langKey] || firstText;
      if (dom['material-source']) dom['material-source'].textContent = source || '';
      store('daily_material', JSON.stringify({ date: today, texts: texts, source: source }));
      // Save to history
      var history = loadJSON('draw_history', []);
      history.unshift({ date: today, time: new Date().toLocaleTimeString(), texts: texts, source: source });
      if (history.length > 50) history = history.slice(0, 50);
      store('draw_history', JSON.stringify(history));
      renderDrawHistory();
      if (drawBtn) {
        if (drawCount >= 3) {
          drawBtn.disabled = true;
          drawBtn.textContent = t('home.draw_limit');
        } else {
          drawBtn.disabled = false;
          drawBtn.textContent = t('home.draw_btn');
        }
      }
    }).catch(function(err) {
      drawCount--;
      store('draw_count', String(Math.max(0, drawCount)));
      if (dom['material-text']) dom['material-text'].textContent = '素材加载失败: ' + err.message;
      if (drawBtn) { drawBtn.disabled = false; drawBtn.textContent = t('home.draw_btn'); }
    });
  }

  function renderDrawHistory() {
    var history = loadJSON('draw_history', []);
    var list = document.getElementById('draw-history-list');
    var btnWrap = document.getElementById('draw-history-btn-wrap');
    var modal = document.getElementById('draw-history-modal');
    var historyBtn = document.getElementById('btn-draw-history');
    if (!list || !btnWrap || !modal) return;
    if (history.length === 0) { btnWrap.style.display = 'none'; return; }
    btnWrap.style.display = 'block';
    if (historyBtn) { historyBtn.textContent = '📜 ' + t('home.draw_history'); }
    var today = new Date().toISOString().slice(0, 10);
    var langKey = uiLang === 'zh-CN' ? 'zh-CN' : uiLang;
    var html = '';
    for (var i = 0; i < history.length; i++) {
      var h = history[i];
      var text = (h.texts && h.texts[langKey]) || (h.texts && h.texts['zh-CN']) || h.text || '';
      var source = h.source || '';
      var isToday = (h.date === today);
      var label = isToday ? ' <span style="font-size:10px;color:#3b82f6;font-weight:600">[' + t('home.draw_today') + ']</span>' : '';
      html += '<div style="padding:8px 0;border-bottom:1px solid #e2e8f0">'
        + '<div style="font-size:11px;color:#94a3b8">' + h.date + ' ' + (h.time || '') + label + '</div>'
        + '<div style="font-size:13px;margin:4px 0;color:#334155">' + text + '</div>'
        + (source ? '<div style="font-size:11px;color:#94a3b8">— ' + source + '</div>' : '')
        + '</div>';
    }
    list.innerHTML = html;
  }

  function renderProfile() {
    // Profile nickname = current user name
    var nick = currentUser() === 'default' ? '' : currentUser();
    var bio = load('profile_bio') || '';
    if (dom['profile-nickname']) dom['profile-nickname'].value = nick;
    if (dom['profile-bio']) dom['profile-bio'].value = bio;
    // Sync sidebar
    var userInput = document.getElementById('sidebar-user-input');
    if (userInput && nick) { userInput.value = nick; }
    var speechMap = { 'zh-CN': 'zh-CN', 'en': 'en-US', 'ja': 'ja-JP', 'de': 'de-DE' };
    var currentLang = speechMap[uiLang] || 'zh-CN';
    var filtered = state.history.filter(function(e) { return (e.speechLang || 'zh-CN') === currentLang; });
    var origHistory = state.history;
    state.history = filtered;
    var stats = getStats();
    if (dom['pstat-total']) dom['pstat-total'].textContent = stats.total;
    if (dom['pstat-streak']) dom['pstat-streak'].textContent = getStreak();
    if (dom['pstat-avg']) dom['pstat-avg'].textContent = stats.overall !== null ? stats.overall.toFixed(1) : '-';
    state.history = origHistory;
    if (dom['pstat-favs']) dom['pstat-favs'].textContent = state.favorites.size;
  }

  function renderCollection() {
    loadHistory();
    loadFavorites();
    var speechMap = { 'zh-CN': 'zh-CN', 'en': 'en-US', 'ja': 'ja-JP', 'de': 'de-DE' };
    var defaultLang = speechMap[uiLang] || 'zh-CN';
    if (dom['filter-lang']) dom['filter-lang'].value = defaultLang;
    renderHistoryList();
    if (!window._initHistoryFiltersDone) { initHistoryFilters(); window._initHistoryFiltersDone = true; }
    updateFilterBarText();
    var favBtn = dom['btn-show-favorites'];
    if (favBtn) favBtn.textContent = t('home.favorites_btn');
  }

  var initHistoryFiltersDone = false;

  function renderNotes() {
    loadHistory();
    var speechMap = { 'zh-CN': 'zh-CN', 'en': 'en-US', 'ja': 'ja-JP', 'de': 'de-DE' };
    var defaultLang = speechMap[uiLang] || 'zh-CN';
    var items = state.history.filter(function(e) { return e.memo && e.memo.trim() && (e.speechLang || 'zh-CN') === defaultLang; });
    var container = dom['notes-list'];
    if (!container) return;
    if (items.length === 0) {
      container.innerHTML = '<p class="empty-hint">' + t('notes.empty') + '</p>';
      return;
    }
    var catLabels = (I18N[uiLang] && I18N[uiLang]['topic.categories']) || I18N['zh-CN']['topic.categories'];
    var dateLocale = uiLang === 'zh-CN' ? 'zh-CN' : uiLang;
    container.innerHTML = items.map(function(e) {
      return '<div class="note-item" data-note-id="' + e.id + '">'
        + '<div><strong>' + e.topic + '</strong> <span style="font-size:11px;color:#94a3b8">[' + (catLabels[e.category] || e.category) + ']</span>'
        + '<div style="margin:6px 0;color:#475569;font-size:14px">' + e.memo + '</div></div>'
        + '<div class="note-meta">' + new Date(e.date).toLocaleDateString(dateLocale) + ' · ⭐ ' + e.scores.overall.toFixed(1) + '</div>'
        + '</div>';
    }).join('');

    container.querySelectorAll('.note-item').forEach(function(el) {
      el.addEventListener('click', function() {
        var id = parseInt(el.dataset.noteId, 10);
        openNoteModalFromId(id);
      });
    });
  }

  function openNoteModalFromId(recordId) {
    var entry = state.history.find(function(e) { return e.id === recordId; });
    if (entry) openNoteModal(entry);
  }

  function renderCalendar() {
    var grid = dom['calendar-grid'];
    if (!grid) return;
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var daysInMonth = new Date(year, month + 1, 0).getDate();
    var startDay = new Date(year, month, 1).getDay();
    var todayStr = year + '-' + String(month + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');
    var practiceDates = new Set(state.history.map(function(e) { return e.date.slice(0, 10); }));
    var checkedInRaw = load('checked_in_dates');
    var checkedInArr = [];
    try { if (checkedInRaw) checkedInArr = JSON.parse(checkedInRaw); } catch (_) {}
    var checkedIn = new Set(checkedInArr);
    // Debug: show checked-in state
    var debugEl = document.getElementById('cal-debug');
    var weekHeaders = { 'zh-CN': ['日','一','二','三','四','五','六'], 'en': ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'], 'ja': ['日','月','火','水','木','金','土'], 'de': ['So','Mo','Di','Mi','Do','Fr','Sa'] };
    var headers = weekHeaders[uiLang] || weekHeaders['zh-CN'];
    grid.innerHTML = '';
    headers.forEach(function(h) {
      var el = document.createElement('div');
      el.className = 'calendar-day header';
      el.textContent = h;
      grid.appendChild(el);
    });
    for (var i = 0; i < startDay; i++) {
      var el = document.createElement('div');
      el.className = 'calendar-day empty';
      grid.appendChild(el);
    }
    for (var d = 1; d <= daysInMonth; d++) {
      var ds = year + '-' + String(month + 1).padStart(2, '0') + '-' + String(d).padStart(2, '0');
      var el = document.createElement('div');
      el.className = 'calendar-day';
      el.setAttribute('data-date', ds);
      if (ds === todayStr) el.classList.add('today');
      if (practiceDates.has(ds)) {
        el.classList.add('practiced');
      } else if (ds > todayStr) {
        el.classList.add('future');
      } else {
        el.classList.add('clickable');
      }
      if (checkedIn.has(ds)) {
        el.style.backgroundColor = '#bbf7d0';
        var ck = document.createElement('div');
        ck.className = 'cal-check';
        ck.textContent = '✓';
        el.appendChild(ck);
      }
      var num = document.createElement('span');
      num.className = 'cal-num';
      num.textContent = d;
      el.appendChild(num);
      grid.appendChild(el);
    }

    // Click to toggle check-in
    grid.onclick = function(e) {
      var cell = e.target.closest('[data-date]');
      if (!cell || cell.classList.contains('future') || cell.classList.contains('header') || cell.classList.contains('empty')) return;
      var ds = cell.dataset.date;
      var ci = new Set();
      try { ci = new Set(JSON.parse(load('checked_in_dates') || '[]')); } catch (_) {}
      if (ci.has(ds)) ci.delete(ds);
      else ci.add(ds);
      store('checked_in_dates', JSON.stringify([...ci]));
      if (ci.has(ds)) {
        cell.style.backgroundColor = '#bbf7d0';
        if (!cell.querySelector('.cal-check')) {
          var ck = document.createElement('div');
          ck.className = 'cal-check';
          ck.textContent = '✓';
          cell.insertBefore(ck, cell.firstChild);
        }
      } else {
        cell.style.backgroundColor = '';
        var ck = cell.querySelector('.cal-check');
        if (ck) ck.remove();
      }
    };
  }

  function renderTrendChart() {
    var container = dom['trend-chart'];
    if (!container) return;
    var speechMap = { 'zh-CN': 'zh-CN', 'en': 'en-US', 'ja': 'ja-JP', 'de': 'de-DE' };
    var currentSpeechLang = speechMap[uiLang] || 'zh-CN';
    var filtered = state.history.filter(function(e) { return (e.speechLang || 'zh-CN') === currentSpeechLang; });
    var scores = filtered.slice(0, 20).reverse().map(function(e, i) {
      return { x: i, score: e.scores.overall || 0, label: e.topic.slice(0, 8) };
    });
    if (scores.length < 2) {
      container.innerHTML = '<p class="empty-hint">' + t('career.chart_empty') + '</p>';
      return;
    }

    var W = container.clientWidth || 600;
    var H = 180;
    var padTop = 16, padRight = 16, padBottom = 28, padLeft = 36;
    var pw = W - padLeft - padRight;
    var ph = H - padTop - padBottom;
    var maxS = Math.max.apply(null, scores.map(function(s) { return s.score; }));
    maxS = Math.max(maxS, 10);
    var yStep = 2;
    var svg = '<svg viewBox="0 0 ' + W + ' ' + H + '" width="100%" height="' + H + '" style="display:block">';
    for (var v = 0; v <= maxS; v += yStep) {
      var y = padTop + ph - (v / maxS) * ph;
      svg += '<line x1="' + padLeft + '" y1="' + y + '" x2="' + (W - padRight) + '" y2="' + y + '" stroke="#e2e8f0" stroke-dasharray="3,3"/>';
       svg += '<text x="' + (padLeft - 6) + '" y="' + (y + 4) + '" text-anchor="end" font-size="10" fill="#94a3b8">' + v.toFixed(1) + '</text>';
    }
    svg += '<line x1="' + padLeft + '" y1="' + padTop + '" x2="' + padLeft + '" y2="' + (H - padBottom) + '" stroke="#94a3b8"/>';
    svg += '<line x1="' + padLeft + '" y1="' + (H - padBottom) + '" x2="' + (W - padRight) + '" y2="' + (H - padBottom) + '" stroke="#94a3b8"/>';

    if (scores.length > 1) {
      var pts = scores.map(function(s, i) {
        var x = padLeft + (i / Math.max(scores.length - 1, 1)) * pw;
        var y = padTop + ph - (s.score / maxS) * ph;
        return x.toFixed(1) + ',' + y.toFixed(1);
      });
      svg += '<polyline points="' + pts.join(' ') + '" fill="none" stroke="#3b82f6" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>';
      scores.forEach(function(s, i) {
        var x = padLeft + (i / Math.max(scores.length - 1, 1)) * pw;
        var y = padTop + ph - (s.score / maxS) * ph;
        svg += '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="3.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"><title>' + s.label + ' - ' + s.score + '</title></circle>';
      });
      svg += '<text x="' + padLeft + '" y="' + (H - 8) + '" text-anchor="start" font-size="9" fill="#94a3b8">1</text>';
      svg += '<text x="' + (W - padRight) + '" y="' + (H - 8) + '" text-anchor="end" font-size="9" fill="#94a3b8">' + scores.length + '</text>';
    }
    svg += '</svg>';
    container.innerHTML = svg;
  }

  function renderCareer() {
    loadHistory();
    var speechMap = { 'zh-CN': 'zh-CN', 'en': 'en-US', 'ja': 'ja-JP', 'de': 'de-DE' };
    var currentLang = speechMap[uiLang] || 'zh-CN';
    var filtered = state.history.filter(function(e) { return (e.speechLang || 'zh-CN') === currentLang; });
    // Use filtered data for stats
    var origHistory = state.history;
    state.history = filtered;
    var stats = getStats();
    if (dom['cstat-total']) dom['cstat-total'].textContent = stats.total;
    if (dom['cstat-streak']) dom['cstat-streak'].textContent = getLongestStreak();
    if (dom['cstat-avg']) dom['cstat-avg'].textContent = stats.overall !== null ? stats.overall.toFixed(1) : '-';
    if (dom['cstat-best']) {
      var best = filtered.length > 0 ? Math.max.apply(null, filtered.map(function(e) { return e.scores.overall || 0; })) : 0;
      dom['cstat-best'].textContent = best > 0 ? best.toFixed(1) : '-';
    }
    state.history = origHistory; // Restore full history for other functions
    renderCalendar();
    renderTrendChart();
    var adviceContent = dom['advice-content'];
    var btnAnalyze = dom['btn-generate-advice'];
    if (filtered.length >= 5) {
      if (adviceContent) adviceContent.innerHTML = '<p class="empty-hint">' + t('career.click_generate') + '</p>';
      if (btnAnalyze) btnAnalyze.classList.remove('hidden');
    } else {
      if (adviceContent) adviceContent.innerHTML = '<p class="empty-hint">' + t('career.need_more') + '</p>';
      if (btnAnalyze) btnAnalyze.classList.add('hidden');
    }
  }

  function renderSettings() {
    if (dom['api-endpoint']) dom['api-endpoint'].value = state.config.apiEndpoint;
    if (dom['api-key']) dom['api-key'].value = state.config.apiKey;
    if (dom['api-model']) { dom['api-model'].value = state.config.model; updateEndpointFromModel(); }
    if (dom['stt-method']) dom['stt-method'].value = state.config.sttMethod || 'browser';
    var themeMode = localStorage.getItem('theme_mode') || 'auto';
    if (dom['theme-mode']) dom['theme-mode'].value = themeMode;
    var btns = document.querySelectorAll('#settings-lang-switch .lang-btn-settings');
    btns.forEach(function(b) { b.classList.toggle('active', b.dataset.lang === uiLang); });
    btns.forEach(function(b) {
      b.onclick = null;
      b.onclick = function() {
        btns.forEach(function(x) { x.classList.remove('active'); });
        b.classList.add('active');
        setUILang(b.dataset.lang);
        refreshUITexts();
        renderSettings();
      };
    });
  }

  async function generateAdvice() {
    if (!state.config.apiKey) { alert('请先配置API Key'); return; }
    var speechMap = { 'zh-CN': 'zh-CN', 'en': 'en-US', 'ja': 'ja-JP', 'de': 'de-DE' };
    var currentLang = speechMap[uiLang] || 'zh-CN';
    var filtered = state.history.filter(function(e) { return (e.speechLang || 'zh-CN') === currentLang; });
    if (filtered.length < 5) return;
    var btn = dom['btn-generate-advice'];
    if (btn) btn.disabled = true;
    var content = dom['advice-content'];
    if (content) content.innerHTML = '<div class="spinner"></div><p>' + t('career.analyzing') + '</p>';

    var recent = filtered.slice(-10);
    var summary = recent.map(function(e) { return '[' + (e.speechLang || 'zh') + '][' + e.scores.overall + '] ' + e.topic; }).join('\n');
    var prompts = {
      'zh-CN': '你是一位演讲教练。根据以下练习记录，分析演讲者的优势和劣势，给出改进建议。\n\n记录：\n' + summary + '\n\n请用中文回复：\n优势：...\n劣势：...\n建议：...',
      'en': 'You are a speech coach. Based on the following practice records, identify the speakers strengths and weaknesses. Provide a concise analysis.\n\nRecords:\n' + summary + '\n\nRespond in English with:\nStrengths: ...\nWeaknesses: ...\nAdvice: ...',
      'ja': 'あなたはスピーチコーチです。以下の練習記録に基づいて、話者の長所と短所を分析してください。簡潔に答えてください。\n\n記録:\n' + summary + '\n\n日本語で回答：\n長所: ...\n短所: ...\nアドバイス: ...',
      'de': 'Du bist ein Redecoach. Analysiere die Stärken und Schwächen des Sprechers anhand der Übungsaufzeichnungen.\n\nAufzeichnungen:\n' + summary + '\n\nAntworte auf Deutsch:\nStärken: ...\nSchwächen: ...\nRatschlag: ...',
    };
    var prompt = prompts[uiLang] || prompts['zh-CN'];

    try {
      var result = await callAPI([{ role: 'user', content: prompt }], { temperature: 0.7, max_tokens: 500 });
      var cleanResult = result.replace(/\*\*(.*?)\*\*/g, '$1').replace(/^[-*]\s/gm, '• ').replace(/^#+\s*/gm, '');
      if (content) content.innerHTML = '<div class="advice-text">' + cleanResult + '</div>';
    } catch (err) {
      var msg = err.message || String(err);
      if (content) content.innerHTML = '<p class="advice-text">' + msg + '</p>';
    }
    if (btn) btn.disabled = false;
  }

  async function analyzePerformance() {
    if (!state.config.apiKey) {
      dom['analysis-result'].textContent = '请先在系统设置中配置 API Key';
      return;
    }
    if (state.history.length < 2) {
      dom['analysis-result'].textContent = '需要至少2次练习记录才能进行分析';
      return;
    }
    dom['btn-analyze'].disabled = true;
    dom['btn-analyze'].textContent = t('career.analyzing');
    loadHistory();
    var summary = state.history.map(function(e) {
      return { topic: e.topic, lang: e.scores.language, think: e.scores.thinking, overall: e.scores.overall, duration: e.duration };
    });
    var langAvg = (state.history.reduce(function(s, e) { return s + e.scores.language; }, 0) / state.history.length).toFixed(1);
    var prompts = {
      'zh-CN': '分析即兴演讲练习记录：\n' + JSON.stringify(summary) + '\n\n平均语言分：' + langAvg + '/10。\n\n用中文简要分析：\n1. 优势\n2. 待改进\n3. 一条具体建议',
      'en': 'Analyze this impromptu speech history:\n' + JSON.stringify(summary) + '\n\nAvg language: ' + langAvg + '/10.\n\nProvide concise analysis in English:\n1. Strengths (bullets)\n2. Improvements (bullets)\n3. One recommendation',
      'ja': '即興スピーチ履歴を分析：\n' + JSON.stringify(summary) + '\n\n平均言語: ' + langAvg + '/10。\n\n日本語で簡潔に：\n1. 強み\n2. 改善点\n3. 提案',
      'de': 'Analysiere Redeverlauf:\n' + JSON.stringify(summary) + '\n\nØ Sprache: ' + langAvg + '/10.\n\nAuf Deutsch:\n1. Stärken\n2. Verbesserungen\n3. Empfehlung',
    };
    var prompt = prompts[uiLang] || prompts['zh-CN'];
    try {
      var result = await callAPI([{ role: 'user', content: prompt }], { temperature: 0.7, max_tokens: 500 });
      dom['analysis-result'].innerHTML = result;
    } catch (err) {
      dom['analysis-result'].textContent = '分析失败：' + err.message;
    }
    dom['btn-analyze'].disabled = false;
    dom['btn-analyze'].textContent = '开始分析';
  }

  // ============================
  //  Init
  // ============================
  function init() {
    // Debug marker
    var dbg = document.createElement('div');
    dbg.id = 'js-loaded-marker';
    dbg.style.cssText = 'position:fixed;top:0;left:0;right:0;background:#10b981;color:#fff;text-align:center;padding:4px;font-size:12px;z-index:9999;display:block';
    dbg.textContent = '✓ JS 已加载';
    document.body.prepend(dbg);

    try {
      // One-time migration: move legacy unprefixed data to current user
      var migrateKeys = ['practice_history','practice_favorites','draw_history','daily_material','checked_in_dates','draw_count','draw_date','profile_nickname','profile_bio','speech_config','speech_lang_pref','userNickname','userAvatar','selectedScene'];
      var migrated = localStorage.getItem('_migrated_');
      if (!migrated) {
        var user = currentUser();
        migrateKeys.forEach(function(k) {
          var v = localStorage.getItem(k);
          if (v) { localStorage.setItem(user + '_' + k, v); localStorage.removeItem(k); }
        });
        localStorage.setItem('_migrated_', '1');
      }

      cacheDom();
      applyI18n();

      // Sidebar navigation
      document.querySelectorAll('.sidebar-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
          const tab = btn.dataset.tab;
          if (tab) switchTab(tab);
        });
      });

      // Mobile sidebar toggle
      (function() {
        const menuBtn = document.getElementById('mobile-menu-btn');
        const overlay = document.getElementById('sidebar-overlay');
        const sidebar = document.getElementById('sidebar');
        function closeSidebar() {
          sidebar.classList.remove('open');
          if (overlay) overlay.classList.remove('open');
        }
        if (menuBtn) {
          menuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            sidebar.classList.toggle('open');
            if (overlay) overlay.classList.toggle('open');
          });
        }
        if (overlay) {
          overlay.addEventListener('click', closeSidebar);
        }
        document.querySelectorAll('.sidebar-btn, #btn-sidebar-start').forEach(function(el) {
          el.addEventListener('click', closeSidebar);
        });
      })();

      // UI Language switcher
      var langBtns = document.querySelectorAll('#lang-switch .lang-btn');
      langBtns.forEach(function(btn) { btn.classList.remove('active'); });
      langBtns.forEach(function(btn) {
        if (btn.dataset.lang === uiLang) btn.classList.add('active');
        btn.addEventListener('click', function() {
          langBtns.forEach(function(b) { b.classList.remove('active'); });
          btn.classList.add('active');
          setUILang(btn.dataset.lang);
          refreshUITexts();
        });
      });

      loadConfig();
      loadHistory();
      loadFavorites();

      state._tagChangeCallback = function() {
        const tags = dom['topic-tags'].querySelectorAll('.tag.active');
        const vals = Array.from(tags).map(function(t) { return t.dataset.value; });
        state.config.categories = vals.includes('随机') ? [] : vals;
        state.topicSeen.clear();
        state.topicGen++;
      };

      // Sliders
      dom['speech-duration'].addEventListener('input', updateDurationDisplay);
      dom['prep-time'].addEventListener('input', updatePrepDisplay);
      // Step buttons for number inputs
      document.querySelectorAll('.btn-step').forEach(function(btn) {
        btn.addEventListener('click', function() {
          var targetId = btn.dataset.target;
          var delta = parseInt(btn.dataset.delta, 10);
          var input = document.getElementById(targetId);
          if (!input) return;
          var cur = parseInt(input.value, 10) || 0;
          var newVal = cur + delta;
          if (targetId === 'speech-duration-input') {
            newVal = Math.max(0, Math.min(600, newVal));
            dom['speech-duration'].value = newVal;
            updateDurationDisplay();
          } else if (targetId === 'prep-time-input') {
            newVal = Math.max(0, Math.min(600, newVal));
            dom['prep-time'].value = newVal;
            updatePrepDisplay();
          }
        });
      });

      // Sync number input -> range slider
      var durInput = document.getElementById('speech-duration-input');
      if (durInput) {
        durInput.addEventListener('change', function() {
          var sec = parseInt(durInput.value, 10);
          if (!isNaN(sec) && sec >= 0 && sec <= 600) {
            dom['speech-duration'].value = sec;
            updateDurationDisplay();
          } else {
            updateDurationDisplay();
          }
        });
      }
      var prepInput = document.getElementById('prep-time-input');
      if (prepInput) {
        prepInput.addEventListener('change', function() {
          var v = parseInt(prepInput.value, 10);
          if (!isNaN(v) && v >= 0 && v <= 600) {
            dom['prep-time'].value = v;
            updatePrepDisplay();
          } else {
            updatePrepDisplay();
          }
        });
      }

      // Model -> auto-fill endpoint
      dom['api-model'].addEventListener('change', updateEndpointFromModel);
      setTimeout(updateEndpointFromModel, 100);

      // Save API config
      dom['btn-save-api'].addEventListener('click', function() {
        saveConfig();
        showApiStatus('✓ ' + (uiLang === 'zh-CN' ? '已保存' : 'Saved'), '#10b981');
      });

      // Sidebar -> Setup
      if (dom['btn-sidebar-start']) {
        dom['btn-sidebar-start'].addEventListener('click', function() {
          document.querySelectorAll('.tab-panel').forEach(function(p) { p.classList.remove('active'); });
          document.querySelectorAll('.phase').forEach(function(p) { p.classList.remove('active'); });
          goToSetup();
        });
      }

      // Setup -> Back
      dom['btn-setup-back'].addEventListener('click', showHome);

      // Start practice
      dom['btn-start'].addEventListener('click', function() {
        saveConfig();
        if (!state.config.apiKey) {
          showApiStatus('⚠️ ' + (uiLang === 'zh-CN' ? '请先在「系统设置」中填写 API Key' : 'Please enter API Key in Settings'), '#ef4444');
          return;
        }
        state.topicSeen.clear();
        generateTopic();
      });

      // Topic
      dom['btn-regenerate'].addEventListener('click', function() {
        state.topicSeen.clear();
        generateTopic();
      });
      dom['btn-prep'].addEventListener('click', startPreparation);
      dom['btn-topic-abandon'].addEventListener('click', function() {
        if (state._topicAbortController) state._topicAbortController.abort();
        state._prefetchPromise = null;
        goToSetup();
      });
      // Topic pause/resume
      var topicPauseBtn = document.getElementById('btn-topic-pause');
      if (topicPauseBtn) {
        topicPauseBtn.addEventListener('click', function() {
          if (topicPauseBtn.dataset.state === 'paused') {
            topicPauseBtn.textContent = t('prep.pause');
            topicPauseBtn.dataset.state = 'generating';
            dom['topic-loading'].querySelector('.spinner').classList.remove('hidden');
            dom['topic-loading'].querySelector('p').textContent = t('topic.loading');
            state.topicSeen.clear();
            generateTopic();
          } else {
            if (state._topicAbortController) {
              state._topicAbortController.abort();
            } else {
              topicPauseBtn.textContent = t('prep.resume');
              topicPauseBtn.dataset.state = 'paused';
              dom['topic-loading'].querySelector('.spinner').classList.add('hidden');
              dom['topic-loading'].querySelector('p').textContent = t('topic.paused');
            }
          }
        });
      }


      // Prep
      dom['btn-speak'].addEventListener('click', function() {
        if (prepPaused) resumeTimer();
        prepPaused = false;
        startRecording();
      });
      dom['btn-pause-prep'].addEventListener('click', togglePrepPause);
      dom['btn-prep-abandon'].addEventListener('click', abandonPractice);

      // Processing
      var btnProcessingAbandon = document.getElementById('btn-processing-abandon');
      if (btnProcessingAbandon) {
        btnProcessingAbandon.addEventListener('click', abandonPractice);
      }

      // Recording
      dom['btn-stop'].addEventListener('click', stopRecording);
      dom['btn-record-abandon'].addEventListener('click', abandonPractice);

      // Result
      dom['btn-save-result'].addEventListener('click', saveResult);
      dom['btn-result-back'].addEventListener('click', function() {
        addToHistory();
        goHome();
      });
      dom['btn-restart'].addEventListener('click', function() {
        addToHistory();
        goToSetup();
      });

      // Scene selector
      var savedScene = load('selectedScene');
      if (savedScene && ['hall', 'stream', 'campus'].indexOf(savedScene) >= 0) {
        state.scene = savedScene;
        dom['scene-select'].querySelectorAll('.scene-card').forEach(function(c) {
          c.classList.toggle('active', c.dataset.scene === savedScene);
        });
      }

      dom['scene-select'].addEventListener('click', function(e) {
        const card = e.target.closest('.scene-card');
        if (!card) return;
        const scene = card.dataset.scene;
        state.scene = scene;
        store('selectedScene', scene);
        dom['scene-select'].querySelectorAll('.scene-card').forEach(function(c) { c.classList.remove('active'); });
        card.classList.add('active');
        document.body.className = document.body.className.replace(/scene-\w+/g, '') + ' scene-' + scene;
      });

      // Keyboard shortcut
      document.addEventListener('keydown', function(e) {
        if (e.key === ' ' && state.phase === 'recording' && e.target === document.body) {
          e.preventDefault();
          stopRecording();
        }
        if (e.key === 'Escape') {
          if (['topic', 'preparation', 'recording'].indexOf(state.phase) >= 0) {
            abandonPractice();
          }
        }
      });

      // Profile save
      var btnSaveProfile = dom['btn-save-profile'];
      if (btnSaveProfile) {
        btnSaveProfile.addEventListener('click', function() {
          var nick = (dom['profile-nickname']?.value || '').trim();
          var bio = (dom['profile-bio']?.value || '').trim();
          if (nick) setCurrentUser(nick);
          store('profile_bio', bio);
          var userInput = document.getElementById('sidebar-user-input');
          if (userInput) userInput.value = nick || '';
          alert(uiLang === 'zh-CN' ? '已保存' : 'Saved');
        });
      }

      // Theme mode change
      var themeModeEl = dom['theme-mode'];
      if (themeModeEl) {
        themeModeEl.addEventListener('change', function() {
          localStorage.setItem('theme_mode', themeModeEl.value);
          applySceneTheme();
        });
      }

      // User switcher
      var userInput = document.getElementById('sidebar-user-input');
      var userReset = document.getElementById('sidebar-user-reset');
      if (userInput) {
        userInput.value = currentUser() === 'default' ? '' : currentUser();
        userInput.addEventListener('blur', function() {
          var name = userInput.value.trim() || 'default';
          if (name !== currentUser()) {
            setCurrentUser(name);
            location.reload();
          }
        });
      }
      if (userReset) {
        userReset.addEventListener('click', function() {
          userInput.value = '';
          // Clear default user data
          var prefix = 'default_';
          var keysToDel = [];
          for (var i = localStorage.length - 1; i >= 0; i--) {
            var k = localStorage.key(i);
            if (k && k.startsWith(prefix)) keysToDel.push(k);
          }
          keysToDel.forEach(function(k) { localStorage.removeItem(k); });
          localStorage.removeItem('_migrated_');
          setCurrentUser('default');
          location.reload();
        });
      }

      // Export / Import
      var btnExport = document.getElementById('btn-export-data');
      var btnImport = document.getElementById('btn-import-data');
      var fileInput = document.getElementById('import-file');
      if (btnExport) {
        btnExport.addEventListener('click', function() {
          var data = exportUserData();
          var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
          var a = document.createElement('a');
          a.href = URL.createObjectURL(blob);
          a.download = 'speechflow_' + currentUser() + '_' + new Date().toISOString().slice(0, 10) + '.json';
          a.click();
        });
      }
      if (btnImport && fileInput) {
        btnImport.addEventListener('click', function() { fileInput.click(); });
        fileInput.addEventListener('change', function() {
          var file = fileInput.files[0];
          if (!file) return;
          var reader = new FileReader();
          reader.onload = function(e) {
            try {
              var data = JSON.parse(e.target.result);
              importUserData(data);
              var statusEl = document.getElementById('import-status');
              if (statusEl) { statusEl.textContent = t('settings.import_done'); statusEl.style.color = '#10b981'; }
              setTimeout(function() { location.reload(); }, 1500);
            } catch (err) {
              var statusEl = document.getElementById('import-status');
              if (statusEl) { statusEl.textContent = '导入失败: ' + err.message; statusEl.style.color = '#ef4444'; }
            }
          };
          reader.readAsText(file);
        });
      }
      var btnGenAdvice = dom['btn-generate-advice'];
      if (btnGenAdvice) {
        btnGenAdvice.addEventListener('click', generateAdvice);
      }

      // Daily draw button
      var drawBtn = document.getElementById('btn-draw');
      if (drawBtn) {
        drawBtn.addEventListener('click', drawDailyMaterial);
      }

      // Draw history modal
      var historyBtn = document.getElementById('btn-draw-history');
      var historyModal = document.getElementById('draw-history-modal');
      var historyClose = document.getElementById('btn-draw-history-close');
      if (historyBtn && historyModal) {
        historyBtn.addEventListener('click', function() { historyModal.classList.remove('hidden'); });
        if (historyClose) historyClose.addEventListener('click', function() { historyModal.classList.add('hidden'); });
        historyModal.addEventListener('click', function(e) { if (e.target === historyModal) { historyModal.classList.add('hidden'); } });
      }

      // Settings lang switch
      var settingsLangBtns = document.querySelectorAll('#settings-lang-switch .lang-btn-settings');
      settingsLangBtns.forEach(function(btn) { btn.classList.remove('active'); });
      settingsLangBtns.forEach(function(btn) {
        if (btn.dataset.lang === uiLang) btn.classList.add('active');
        btn.addEventListener('click', function() {
          settingsLangBtns.forEach(function(b) { b.classList.remove('active'); });
          btn.classList.add('active');
          setUILang(btn.dataset.lang);
          refreshUITexts();
          renderSettings();
        });
      });

      // Start on home
      showHome();

      if (dbg) { dbg.style.display = 'block'; setTimeout(function() { dbg.style.display = 'none'; }, 3000); }
    } catch (initErr) {
      console.error('Init error:', initErr);
      var errEl = document.createElement('div');
      errEl.style.cssText = 'position:fixed;top:0;left:0;right:0;background:#dc2626;color:#fff;padding:16px;font-size:14px;z-index:999;font-family:sans-serif';
      errEl.textContent = '初始化失败: ' + (initErr.message || initErr);
      document.body.prepend(errEl);
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();
