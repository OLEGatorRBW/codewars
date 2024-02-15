function alphabetized(s) {
    return s.replace(/[^a-zA-Z]/g, '').split('').sort((a, b) => a.toUpperCase().localeCompare(b.toUpperCase())).join('')
}
