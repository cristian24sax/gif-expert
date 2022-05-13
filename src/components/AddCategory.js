import { useForm } from '../hooks/useForm'
export const AddCategory = ( {setCategories}) => {
  const [formValues,handleInputChange,reset]=useForm({
    title:''
  })
  const{title}=formValues
  const handleSubmit=e=>{
    e.preventDefault()
    setCategories(categorie=>[title,...categorie])
    reset()
    }
    return (
    <form onSubmit={handleSubmit}>
          <input 
            type='text' 
            value={title}
            name='title'
            onChange={handleInputChange}
            />
          </form>
        )

}
