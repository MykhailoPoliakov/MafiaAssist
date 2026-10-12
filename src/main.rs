use serde::{Serialize, Deserialize};

mod analyze;


#[derive(Serialize, Deserialize, Copy, Clone, PartialEq)]
enum Role {
    // The town
    Civilian,
    Witness, // свидетель
    Bodyguard,
    Doctor,
    Sheriff,
    Hooker, // шлюха
	// Mafia
    Mafia,
    Godfather,
    // Third-parties
    Maniac,
    Jester, // самоубийца
}




#[derive(Serialize, Deserialize, Clone)]
struct User {
    name: String,
    role: Option<Role>,
    target: Option<String>
}

impl User {
    pub fn new(name: String) -> Self {
        User {
            name,
            role: None,
            target: None,
        }
    }
}


#[derive(Serialize, Deserialize, Clone)]
struct Result {
    name: Option<String>,
    text: String,
}




#[derive(Serialize, Deserialize, Clone)]
struct Game {
    users: Vec<User>,
    settings: bool,
    results: Vec<Result>,
    
}

impl Game {
    pub fn new() -> Self {
        Game {
            users: Vec::new(),
            settings: false,
            results: Vec::new(),
        }
    }

    pub fn load() -> Game {
        if !std::path::Path::new("game.json").exists() {
            return Game::new();
        }
        let text = std::fs::read_to_string("game.json").unwrap_or_default();
        return serde_json::from_str(&text).unwrap();
    }

    pub fn save(&mut self) {
        let text = serde_json::to_string_pretty(self).unwrap();
        _ = std::fs::write("game.json", text);  
    }
}







fn main() {
    let mut game = Game::load();

    // for name in ["Bob", "Misha"] {
    //     game.users.push(User::new(name.to_string()));
    // }

    analyze::analyze(&mut game);

    game.save();

}




