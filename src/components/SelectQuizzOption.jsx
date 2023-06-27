import { Box, FormControl, IconButton, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleCategoryChange } from "../redux/actions";

const SelectQuizzOption = (props) => {
    const { label, options } = props;
    const [choosenQuizzCategory, setChoosenQuizzCategory] = useState("");
    const dispatch = useDispatch();
    const question_category = useSelector((state) => state.question_category);

    const handleChange = (e) => {
        setChoosenQuizzCategory(e.target.value);
        dispatch(handleCategoryChange(e.target.value));
    }

    const handleClearClick = () => {
        setChoosenQuizzCategory("");
        dispatch(handleCategoryChange(""));
    }

    return (
        <Box mt={3} width="100%">
            <FormControl fullWidth>
                <InputLabel>{label}</InputLabel>
                <Select value={question_category ? question_category : choosenQuizzCategory} label={label} 
                        onChange={handleChange} endAdornment={<IconButton sx={{display: question_category ? "" : "none"}} 
                        onClick={handleClearClick}>X</IconButton>}>
                    {options && options.map(({ id, name }) => (
                        <MenuItem value={id} key={id}>
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}

export default SelectQuizzOption