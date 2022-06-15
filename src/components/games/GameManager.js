import Settings from "../repositories/Settings"

export const getAllGames = () => {
    return fetch(`${Settings.remoteURL}/games`, {
        headers: {
          "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
      })
    .then(res => res.json())
}