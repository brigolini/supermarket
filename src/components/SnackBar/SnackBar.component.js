

const SnackBar = ({visible}) => {
    if (!visible) return null;
    return(
    <div
        style={{position:"fixed",textAlign:"center",fontSize:"2rem",top:0,left:"50%",transform: "translate(-50%, 0)",width:"700px",height:"50px",backgroundColor:"aquamarine"}}>
        Product Added Successfully
    </div>
        );
}

export default SnackBar;
