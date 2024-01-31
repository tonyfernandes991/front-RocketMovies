import { useState, useEffect } from 'react'
import { FiArrowLeft, FiClock } from "react-icons/fi";
import { Container } from "./styles"
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import moment from "moment-timezone";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { Input } from '../../components/Input';
import { Header } from "../../components/Header"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"
import { Rating } from "../../components/Rating";
import { Button } from "../../components/Button";
export function Details() {
  const [data, setData] = useState({})
  
  const params = useParams()

  const { user } = useAuth();

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;


    const formattedDate = moment
    .utc(data.updated_at)
    .tz("America/Sao_Paulo")
    .format("DD/MM/YYYY HH:mm:ss");

  const navigate = useNavigate();

  // function handleBack() {
  //   return navigate(-1);
  // }

  async function handleRemove(){
      const confirm = window.confirm("Deseja remover o Filme?")
      
      if(confirm){
        await api.delete(`/notes/${params.id}`)
        navigate(-1)
      }
    }

  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  }, [])

  return (
    <Container>
       <Header>
       <Input placeholder="Pesquisar pelo título" />
       </Header>
       {
        data &&
       <main>
        <header>
        <ButtonText className="button-voltar" to="/" icon={FiArrowLeft} title="Voltar" />

        
        <div>
              <h1>{data.title}</h1>
              <Rating grade={data.rating} isBigSize />
        </div>

            <div className="movie-info">
              <p>
              <img src={avatarURL} alt={user.name} />
                Por <span>{user.name}</span>
              </p>

              <div>
                <FiClock />

                <span>{formattedDate}</span>
              </div>
            </div>
               
        </header>

        {data.tags && (
        <div>
        {data.tags.map((tag) => (
                <Tag 
                key={String(tag.id)} 
                title={tag.name} 
                />
              ))}
        </div>
        )}
        
        <p>{data.description}</p>

          <div className="ButtonRemove">
            <Button
              title="Excluir filme"
              onClick={handleRemove}
            />
          </div>
       
        </main>
        }
    </Container>
  )
}