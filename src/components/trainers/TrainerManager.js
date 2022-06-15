import Settings from "../repositories/Settings"

export const getAllTrainers = () => {
    return fetch(`${Settings.remoteURL}/trainers`, {
        headers: {
          "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
      })
    .then(res => res.json())
}

export const getTrainer = (trainerId) => {
    return fetch(`${Settings.remoteURL}/trainers/${trainerId}`, {
        headers: {
          "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
      })
    .then(res => res.json())
}

export const newSubscribe = (trainerId) => {
  return fetch(`${Settings.remoteURL}/trainers/${trainerId}/subscribe`, {
    method: "POST",
    headers: {
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    }
  })
.then(res => res.json())
}
export const removeSub = (trainerId) => {
  return fetch(`${Settings.remoteURL}/trainers/${trainerId}/subscribe`, {
    method: "DELETE",
    headers: {
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    }
  })
}


export const createPhoto = (photo) => {
  return fetch(`${Settings.remoteURL}/photos`, {
      method: `POST`, 
      headers:{
          "Content-Type": "application/json",
          "Authorization": `Token ${localStorage.getItem("auth_token")}`
      },
      body: JSON.stringify(photo)
  })
      .then(response => response.json())
}

export const searchTrainers = (searchTerm) => {
  return fetch(`${Settings.remoteURL}/trainers?search_name=${searchTerm}`, {
  headers: {
    "Authorization": `Token ${localStorage.getItem("auth_token")}`
  }
})
.then(res => res.json())
}