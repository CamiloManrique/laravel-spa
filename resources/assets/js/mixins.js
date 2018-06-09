const TOKEN_KEY = "tarjetareal_token"

function getToken(){
    return window.localStorage.getItem(TOKEN_KEY)
}

export function requireAuth(to, from, next){
    console.log("Navv")
    if (!getToken()) {
        next({
            path: '/login',
            query: {
                redirect: to.fullPath,
            },
        });
    } else {
        next();
    }
}

