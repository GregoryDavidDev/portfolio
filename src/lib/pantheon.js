export const pantheonBaseUrl = "https://services.cacahuete.dev/api/pantheon"

export function fetchPantheonProjects() {
    return fetch(`${pantheonBaseUrl}/projects/eligible`)
}