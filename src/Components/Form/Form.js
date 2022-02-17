import { StyledFormWapper, StyledFormInput, StyledFormFieldSet, StyledFormTextArea, StyledFormError, StyledFormButton } from "../Styles/Form.style";
import { StyledForm } from "../Styles/Form.style";
const Form = () => {
  return (
    <>
      <StyledFormWapper>
        <StyledForm>
          <h2>Contact Form</h2>
          <label htmlFor="name">Name</label>
          <StyledFormInput type="text" name="name" />

          <label htmlFor="email">Name</label>
          <StyledFormInput type="email" name="email" />

          <StyledFormFieldSet>
            <legend>Gender</legend>
            <label>
              <input type="radio" value="female" name="gender" />
              Female
            </label>

            <label>
              <input type="radio" value="male" name="gender" />
              Male
            </label>
          </StyledFormFieldSet>

          <label htmlFor="message">Message</label>
          <StyledFormTextArea name="message" />
          <StyledFormError><p>Error message here</p></StyledFormError>
          <StyledFormButton type="submit">Send Message</StyledFormButton>
        </StyledForm>
      </StyledFormWapper>
    </>
  );
};

export default Form;
