import { BooleanInput, Edit, ReferenceInput, required, SimpleForm, TextInput } from "react-admin"

export const ChallengeOptionEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="text" validate={[required()]} label="Text" />
        <BooleanInput source="correct" />
        <ReferenceInput source="challengeId" reference="challenges" />
        <TextInput source="imageSrc" label="Image Src" />
        <TextInput source="audioSrc" label="Audio Src" />
      </SimpleForm>
    </Edit>
  )
}