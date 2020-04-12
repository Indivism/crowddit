export default () => ({
    app: {
        showLoginModal: false,
        validUsername: null,
        cookie: document.cookie.includes('crowddit='),
        username: document.cookie.slice(document.cookie.indexOf('crowddit') + 9),
        invalidLoginAttempt: false,
        createUserAlert: false,
        page: "/",
        initAccountAlert: false,
        showAuthAlert: true,
        auth: false
    }
})