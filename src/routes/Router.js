import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AddRecipePage, FeedPage, LoginPage, RecipeDetailPage, SignUpPage } from "../pages"

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<LoginPage/>}/>
                <Route path="signup" element={<SignUpPage/>}/>
                <Route path="feed" element={<FeedPage/>}/>
                <Route path="add-recipe" element={<AddRecipePage/>}/>
                <Route path="recipe/:id" element={<RecipeDetailPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}