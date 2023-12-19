import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import RootLayout from "./layouts/RootLayout"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="profile/:username" element={<Profile />} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
