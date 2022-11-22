import React from "react";
import { StyledRegisterVideo } from "./styles";
//WhiteBording -> pesquisar
//Custom Hook
function useForm(propsDoForm) {
    const [values, setValues] = React.useState(propsDoForm.initialValues);

    return {
        values,
        handleChange: (evento) => {
            const value = evento.target.value;
            const name = evento.target.name
            setValues({
                ...values,
                [name]: value,
            });
        },
        clearForm() {
            setValues({});
        }
    };
}

export default function RegisterVideo() {
    const formCadastro = useForm({
        initialValues: { titulo: "Piano", url: "https://youtube..." }
    });
    const [formVisivel, setFormVisivel] = React.useState(true);

    /*
## O que precisamos para o form funcionar?
- pegar os dados, que precisam vir do state
- titulo
-url do video
- precisamos ter um submit do nosso form
*/

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)} >
                +
            </button>
            {/* Ternário */}
            {/* Operadores de Curto-circuito */}
            {/* Uma opção para criar o if seria essa com && */}
            {/* {formVisivel && ( 
        <form>
            <div>
            <button className="close-modal">
                X
            </button>
            <input placeholder="Título do video" />
            <input placeholder="URL" />
            <button type="submit">
                Cadastrar
            </button>
            </div>
        </form>
        )} */}
            {formVisivel
             ? (
                <form onSubmit={(evento) => {
                    evento.preventDefault();
                    console.log(formCadastro.values);

                
                    setFormVisivel(false);
                   formCadastro.clearForm();
                }}>
                    <div>
                        <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                            X
                        </button>
                        <input
                            placeholder="Título do video"
                            name="titulo"
                            value={formCadastro.values.titulo}
                            onChange={formCadastro.handleChange}
                        />
                        <input placeholder="URL"
                            name="url"
                            value={formCadastro.values.url}
                            onChange={formCadastro.handleChange}
                        // onChange={(evento) => {
                        //     const value = evento.target.value;
                        //     console.log(value);
                        //     setValues({
                        //         ...values,
                        //         url: value,
                        //     });
                        // }}
                        />
                        <button type="submit">
                            Cadastrar
                        </button>
                    </div>
                </form>
            )
                : null}  {/*ou false*/}


        </StyledRegisterVideo>
    )
}

 // Falta o botao para adicionar
 // modal
 // Precisamos controlar o state
 // => Formulario em si