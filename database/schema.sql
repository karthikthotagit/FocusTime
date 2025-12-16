-- Users
CREATE TABLE user_base (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Accessibility settings
CREATE TABLE user_accessibility_settings (
    user_id INT PRIMARY KEY REFERENCES user_base(id),
    font_size VARCHAR(20),
    theme VARCHAR(20),
    color_blind_mode BOOLEAN DEFAULT FALSE
);

-- Study sessions
CREATE TABLE study_session_base (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES user_base(id),
    duration_minutes INT NOT NULL,
    status VARCHAR(20) NOT NULL,
    started_at TIMESTAMP,
    completed_at TIMESTAMP
);

-- Session events (event-driven design)
CREATE TABLE study_session_events (
    id SERIAL PRIMARY KEY,
    session_id INT REFERENCES study_session_base(id),
    event_type VARCHAR(50),
    event_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_session_user ON study_session_base(user_id);
