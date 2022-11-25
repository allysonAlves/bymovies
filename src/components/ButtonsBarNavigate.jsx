
const ButtonsBarNavigate = ({value,id}) => {
    function gotopage()
    {
        console.log(`foi para a pagina ${id}`);
    }
  return (
    <button onClick={() => gotopage()}>{value}</button>
  )
}

export default ButtonsBarNavigate