const API_URL = "https://jsonplaceholder.typicode.com"

export const endpoints = {
    INDEX: `${API_URL}/posts`,
    SHOW: (id) =>  `${API_URL}/posts/${id}`
  }