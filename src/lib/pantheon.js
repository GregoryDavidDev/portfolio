export const pantheonBaseUrl = "https://services.cacahuete.dev/api/pantheon"

export function fetchPantheonProjects() {
    return fetch(`${pantheonBaseUrl}/projects/eligible`)
}

export function fetchPantheonProjectsByCategory(category) {
    return fetch(`${pantheonBaseUrl}/projects/by/${category}`)
}

export function notify(resource) {
    return;

    return fetch(`${pantheonBaseUrl}/notify/${resource}`, {
        method: "POST"
    })
}