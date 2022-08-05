
const API = "https://api.themoviedb.org/3";
export function get(path) {

    return fetch(API + path, {
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODUwMTA5MzIxNjg4OWRjN2FjNTk2OTNmMmI4NTgzYyIsInN1YiI6IjYyZWM0N2JjY2U5OTdhMDA1ODlkNjRhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eI-p3IKD7NCD8kBpJ1RVNtPrPQIToEFea0clYjqv9Tw",
            "Content-Type": "application/json;charset=utf-8",
        },
    }).then((result) => result.json())
}


