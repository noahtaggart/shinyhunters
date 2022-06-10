import Settings from "../repositories/Settings"

export const getAllTrainers = () => {
    return fetch(`${Settings.remoteURL}/trainers`, {
        headers: {
          "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
      })
    .then(res => res.json())
}