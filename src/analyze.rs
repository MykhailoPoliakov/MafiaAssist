use super::*;

use Role::*;
const ORDER: [Role; 8] = [Hooker, Doctor, Bodyguard, Witness, Maniac, Godfather, Mafia, Sheriff];

pub fn analyze(game: &mut Game) {
    for role in ORDER {
        for user in &game.users {
            if user.role != Some(role) || user.target.is_none() { continue;}

            match user.role {
                _ => {},
            }


        }
    }
    

}