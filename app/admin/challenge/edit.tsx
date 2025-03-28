import { Edit, NumberInput, ReferenceInput, required, SelectInput, SimpleForm, TextInput } from "react-admin"

export const ChallengeEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" validate={[required()]} label="ID" />
        <TextInput source="question" validate={[required()]} label="Question" />
        <ReferenceInput source="lessonId" reference="lessons" />
        <SelectInput source="type" choices={[
          {
            id: 'SELECT',
            name: 'SELECT'
          },
          {
            id: 'ASSIST',
            name: 'ASSIST'
          }
        ]} validate={[required()]}/>
        <NumberInput source="order" validate={[required()]} label="Order" />
      </SimpleForm>
    </Edit>
  )
}