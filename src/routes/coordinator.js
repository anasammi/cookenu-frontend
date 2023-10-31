export const goToAddRecipe = (navigate) => {
    navigate("/add-recipe")
}

export const goToFeed = (navigate) => {
    navigate("/feed")
}

export const goToLogin = (navigate) => {
    navigate("/")
}

export const goToRecipeDetail = (navigate, id) => {
    navigate(`/recipe/${id}`)
}

export const goToSignUp = (navigate) => {
    navigate("/signup")
}