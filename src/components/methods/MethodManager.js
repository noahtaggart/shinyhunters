import Settings from "../repositories/Settings"

export const getAllMethods = () => {
    return fetch(`${Settings.remoteURL}/methods`, {
        headers: {
          "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
      })
    .then(res => res.json())
}