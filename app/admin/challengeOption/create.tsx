import { BooleanInput, Create, ReferenceInput, required, SimpleForm, TextInput } from "react-admin"

export const ChallengeOptionCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="text" validate={[required()]} label="Text" />
        <BooleanInput source="correct" />
        <ReferenceInput source="challengeId" reference="challenges" />
        <TextInput source="imageSrc" label="Image Src" />
        <TextInput source="audioSrc" label="Audio Src" />
      </SimpleForm>
    </Create>
  )
}