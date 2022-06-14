import Settings from "../repositories/Settings"

export const getAllPokemon = () => {
    return fetch(`${Settings.remoteURL}/pokemon`, {
        headers: {
          "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
      })
    .then(res => res.json())
}