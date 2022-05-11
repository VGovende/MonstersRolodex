// import { ChangeEventHandler } from 'react';
import { ChangeEvent } from 'react';
import './search-box.styles.css';

type SearchBoxProps = {
    // SearchChange: React.ChangeEventHandler<HTMLInputElement>;
    // SearchChange: ChangeEventHandler<HTMLInputElement>;
    SearchChange:(event: ChangeEvent<HTMLInputElement>) => void;
    placeholder?:string;
    className:string;
}

// interface ISearchBoxProps extends IChangeHandlerProps{
//     className : string
//     placeholder?: string | null
// }

// interface IChangeHandlerProps {
//     SearchChange: (a: string) => void
// }

const searchBox = (props : SearchBoxProps) => {

    const {SearchChange,placeholder,className} = props;
    return(        
        <input 
            className={className}
            type ='search'
            placeholder={placeholder} 
            onChange={SearchChange}
        /> 
    )

}


export default searchBox