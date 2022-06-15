
import Settings from "../repositories/Settings"


export const getAllHunts = () => {
    return fetch(`${Settings.remoteURL}/hunts`, {
        headers: {
          "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
      })
    .then(res => res.json())
}
export const getSingleHunt = (huntId) => {
    return fetch(`${Settings.remoteURL}/hunts/${huntId}`, {
        headers: {
          "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
      })
    .then(res => res.json())
}

export const getHuntSubscriptions = () => {
  return fetch(`${Settings.remoteURL}/hunts/subscriptions`, {
    headers: {
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    }
  })
.then(res => res.json())
}

export const getCompletedUserHunts = () => {
  return fetch(`${Settings.remoteURL}/hunts/user_completed`, {
    headers: {
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    }
  })
.then(res => res.json())
}
export const getOngoingUserHunts = () => {
  return fetch(`${Settings.remoteURL}/hunts/user_ongoing`, {
    headers: {
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    }
  })
.then(res => res.json())
}

export const createNewHunt = (newHunt) => {
  return fetch(`${Settings.remoteURL}/hunts`, {
      method: 'POST',
      headers: {
        "Authorization": `Token ${localStorage.getItem("auth_token")}`,
        "Content-Type": "application/json",
      "Accept": "application/json"
      },
      body: JSON.stringify(newHunt)
    })
    .then(res => res.json())
    
}

export const addEncounter = (huntId) => {
  return fetch(`${Settings.remoteURL}/hunts/${huntId}/add_encounter`, {
    method: 'PUT',
    headers: {
      "Authorization": `Token ${localStorage.getItem("auth_token")}`,
    },
  })
}

export const completeHunt = (huntId) => {
  return fetch(`${Settings.remoteURL}/hunts/${huntId}/complete_hunt`, {
    method: 'PUT',
    headers: {
      "Authorization": `Token ${localStorage.getItem("auth_token")}`,
    },
  })
}

export const sortHunts = (sortTerm) => {
  return fetch(`${Settings.remoteURL}/hunts/user_completed?${sortTerm}`, {
    headers: {
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    }
  })
.then(res => res.json())
}