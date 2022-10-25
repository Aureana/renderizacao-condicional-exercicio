
import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton } from "./styled";

function TelaCadastroEndereco(props) {
  return (
    <FormContainer>
      <h1>Endereço </h1>
      <Form>
        <StyledLabel htmlFor="endereco">
          Endereço:
          <Input id="endereco" />
        </StyledLabel>

        <StyledLabel htmlFor="foto">
          Numero:
          <Input id="foto" />
        </StyledLabel>

        <StyledLabel htmlFor="telefone">
          Telefone:
          <Input id="telefone" />
        </StyledLabel>

        <StyledLabel htmlFor="complemento">
          Complemento:
          <Input id="complemento" />
        </StyledLabel>

        <SendButton onClick={() => props.mudarTela(4)}>Concluir</SendButton>
        <BackToLoginButton onClick={() => props.mudarTela(1)}>Já possuo um cadastro</BackToLoginButton>
      </Form>
    </FormContainer>
  );
} 

export default TelaCadastroEndereco;
