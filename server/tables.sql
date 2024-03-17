CREATE TABLE IF NOT EXISTS Testimonials (
    author TEXT NOT NULL,
    quote TEXT NOT NULL,
    active INTEGER DEFAULT 1
);

CREATE TABLE IF NOT EXISTS HorseInfo (
    horseName TEXT NOT NULL,
    height INTEGER,
    sex TEXT NOT NULL,
    gaits TEXT,
    bio TEXT,
    photo BLOB,
    active INTEGER DEFAULT 1
);