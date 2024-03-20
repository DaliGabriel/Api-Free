
import Select from "react-select";
import { useFetchCatTagsOptions } from "../../../../../hooks/Cats/useFetchCatTagsOptions";
import { useFetchTagCat } from "../../../../../hooks/Cats/useFetchTagCat";

interface CardTagSelectProps {
  setBlobImageurl: React.Dispatch<React.SetStateAction<Blob | undefined>>;
}

const CardTagSelect: React.FC<CardTagSelectProps> = ({setBlobImageurl}) => {


  const {data:options } = useFetchCatTagsOptions();


  const handleTagChange = (event:any) => {
    const { data } = useFetchTagCat();
    console.log(data, event)
  }
  

  return (
    <>
      <Select
        onChange={handleTagChange}
        options={options}
        menuPortalTarget={document.body}
        menuPosition="fixed"
        theme={(theme) => ({
          ...theme,
          borderRadius: 10,
          colors: {
            ...theme.colors,
            //after select dropdown option
            primary50: "gray",
            //Border and Background dropdown color
            primary: "#CAFFFA",
            //Background hover dropdown color
            primary25: "gray",
            //Background color
            neutral0: "black",
            //Border before select
            neutral20: "#CAFFCA",
            //Hover border
            neutral30: "#82FFE7",
            //No options color
            neutral40: "#CAFFCA",
            //Select color
            neutral50: "#F4FFFD",
            //arrow icon when click select
            neutral60: "#42FFDD",
            //Text color
            neutral80: "#F4FFFD",
          },
        })}
      />
    </>
  );
}

export default CardTagSelect;
