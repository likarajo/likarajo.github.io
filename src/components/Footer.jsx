import Links from '../components/footer/Links'

function Footer() {

  const year = new Date().getFullYear();

  return (
    <div style={{justifyContent:'center', height:'100px', width:'100%', bottom:0}}>
      <Links/>
      <div style={{textAlign:'center', padding: "15px 0"}}>
        <span>&copy; {year} likarajo | <a href="/#/contact" style={{fontWeight:500, textDecoration:null}}>Contact</a></span>
      </div>
    </div>
  )
}

export default Footer
