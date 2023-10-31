import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AddRecipePage,
  FeedPage,
  LoginPage,
  RecipeDetailPage,
  SignUpPage,
} from "../pages";
import { Header } from "../components";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="feed" element={<FeedPage />} />
        <Route path="add-recipe" element={<AddRecipePage />} />
        <Route path="recipe/:id" element={<RecipeDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};
