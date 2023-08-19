import './InputFormStyle.jsx'
import {FormInputLabel, Group, Input} from "./InputFormStyle.jsx";

const InputForm = ({label, ...otherProps}) => {
    return (
        <Group>
            <Input {...otherProps} />
            { label && (
                <FormInputLabel shrink={otherProps.value.length}>
                    {label}
                </FormInputLabel>
             )}
        </Group>
    );
};

export default InputForm;
