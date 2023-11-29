import { FormSearchMovie, FormInput, FormButton } from './Form.styled';

export const MovieForm = ({ onSubmit, query, change }) => {
  return (
    <FormSearchMovie onSubmit={onSubmit}>
      <FormInput
        type="text"
        name="searchFilms"
        defaultValue={query}
        onChange={change}
      />
      <FormButton type="submit">Search</FormButton>
    </FormSearchMovie>
  );
};
