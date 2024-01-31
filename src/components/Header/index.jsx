import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Container, Brand, Search, Profile, Logout } from "./styles";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Header({ children }) {
    const { signOut, user } = useAuth()
    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const navigation = useNavigate();
    function handleSignOut() {
        navigation("/");
        signOut();
      }

    return (
        <Container>
            <Brand>
                <h1>RocketMovies</h1>
            </Brand>
            
            {/* <Search></Search> */}
            <Search 
            // placeholder="Pesquisar pelo titulo"
            >{children}</Search>
            
            

            <Profile to="/profile">
                <div>
                    <span>{user.name}</span>

                </div>
                
                <img
                    src={avatarURL}
                    alt="{user.name}"
                />
            </Profile>

            <Logout onClick={handleSignOut} >Sair</Logout>
        </Container>
    )
}