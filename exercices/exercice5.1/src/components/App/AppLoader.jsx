import { ProviderWrapper as LanguageProviderWrapper } from "../../context/countersContext";
import App from "../App/App"

const AppLoader= () => {
  return (
    <LanguageProviderWrapper >
        <App />
 
      </LanguageProviderWrapper >
  )
}

export default AppLoader