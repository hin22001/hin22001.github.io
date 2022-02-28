import { useState } from 'react'
import { Autocomplete, createFilterOptions } from '@mui/material'
import _ from 'lodash'

const useAutocomleteValue = (initialValue) => {

    const [ value, setValue ] = useState(initialValue)

    const handleValue = (newValue) => {
        if (typeof newValue === 'string') setValue({ title: newValue, value: newValue })
        setValue(newValue)
    }

    return [ value, handleValue ]
}

const Component = ({ creatable, onChange, ...other }) => {

    const [ value, setValue ] = useAutocomleteValue(null)

    return (
        <Autocomplete 
            value={value}
            getOptionLabel={(option) => {
                if (typeof option === 'string') return option
                return _.get(option, "value") || _.get(option, "title") 
            }}
            renderOption={(props, option) => <li {...props}>{ _.get(option, "title") || option }</li>}
            filterOptions={(options, params) => {
                const filtered = createFilterOptions()(options, params);
                const { inputValue } = params;
                // Suggest the creation of a new value
                const isExisting = options.some((option) => inputValue === _.get(option, "title"));
                if (inputValue !== '' && !isExisting && creatable) {
                    filtered.push({
                        value: inputValue,
                        title: `Create "${inputValue}"`,
                    });
                }
                return filtered;
            }}
            onChange={(event, value) => {
                setValue(value)
                return onChange(event, _.get(value, "value") || value)
            }}
            {...other}
        />
    )
}

export default Component