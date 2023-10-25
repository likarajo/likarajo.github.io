import Social from '../components/footer/Social'

function Footer() {

  return (
    <div style={{justifyContent:'center', height:'100px', width:'100%', bottom:0}}>
      <Social/>
      <div style={{textAlign:'center'}}>
        <span>&copy; 2023 likarajo | <a href="/#/contact" style={{fontWeight:500, textDecoration:null}}>Contact</a></span>
      </div>
    </div>
  )
}

export default Footer
