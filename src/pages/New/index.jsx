import { useState } from "react";
import { Container, Form } from "./styles";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { FiArrowLeft } from "react-icons/fi";
import { ButtonText } from "../../components/ButtonText";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { MovieItem } from "../../components/MovieItem"
import { Button } from "../../components/Button";



export function New() {
    const [title, setTitle] = useState("")
    const [rating, setRating] = useState("");
    const [description, setDescription] = useState("")

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    const navigate = useNavigate()

    function handleBack() {
    navigate(-1)
    }


    function handleAddTag() {
        setTags(prevState => [...prevState, newTag])

        setNewTag('')
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    async function handleNewMovie() {
        
        if(!title){
            return alert("Preencha o titulo do filme")
        };

        if(!description){
            return alert("Preencha a descrição")
        }
        
        const isRatingValid = rating >= 0 && rating <= 5;
        if (!isRatingValid) {
            return alert("A nota do filme deve ser entre 0 e 5");
          };

        if (!rating){
            return alert("Preencha a nota do filme de 1 a 5")
        };
        
        

        
        
        if(newTag){
            return alert("você deixou uma tag no campo para adicionar, mas não adicionou. Clique para adicionar ou deixe o campo vazio")
        };

        alert("Filme adicionado com sucesso!")
        navigate(-1)
        
        await api.post("/notes", {
            title,
            description,
            rating,
            tags,
        });
        

        
    
    }

    return (
        <Container>
            <Header>
            <Input
          placeholder="Pesquisar pelo título"
         
            />
            </Header>
            <main>
                <Form>
                    <header>
                        <ButtonText onClick={handleBack} icon={FiArrowLeft} title="Voltar" />
                        <h1>Novo filme</h1>
                    </header>

                    <div>
                        <Input
                            placeholder="Título"
                            onChange={e => setTitle(e.target.value)}
                        />

                        <Input
                            placeholder="Sua nota (de 0 a 5)"
                            type="number"
                            min="0"
                            max="5"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}

                        />
                    </div>

                    <Textarea
                        placeholder="Observações"
                        onChange={e => setDescription(e.target.value)}

                    />

                    <Section title="Marcadores">
                        <div className="tags">
                            {
                                tags.map((tag, index) =>
                                    <MovieItem
                                        key={String(index)}
                                        value={tag}
                                        onClick={() => handleRemoveTag(tag)}
                                    />
                                )
                            }
                            <MovieItem
                                isNew
                                placeholder="Nova Tag"
                                onChange={e => setNewTag(e.target.value)}
                                value={newTag}
                                onClick={handleAddTag}
                            />
                        </div>
                    </Section>
                    <div>
                        <Button className="button-styled" title="Descartar alterações" onClick={handleBack} />
                        <Button
                            title="Salvar alterações"
                            onClick={handleNewMovie}
                        />
                    </div>


                </Form>
            </main>


        </Container >


    )

}