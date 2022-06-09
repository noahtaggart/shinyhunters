import Settings from "../repositories/Settings"

export const getAllHunts = () => {
    return fetch(`${Settings.remoteURL}/hunts`, {
        headers: {
          "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
      })
    .then(res => res.json())
}