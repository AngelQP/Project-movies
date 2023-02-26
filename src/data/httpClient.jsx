const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODlkYTg1YzI1ODAyNjYyMDZiMzI4NWNjZDNlMTkzZiIsInN1YiI6IjYzMTY4MTk2MTUxMWFhMDA4MGQ5MDhlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K2qO4vAoCZ49gSTZXBsCgBCW9czL4T8stBY41yZay9c",
      "Content-Type": "application/json; charset=utf-8",
    },
  }).then((result) => result.json());
}

