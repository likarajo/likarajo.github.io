import Links from '../components/footer/Links'

function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Links/>
      <p className="footer-note">&copy; {year} Rajarshi Chattopadhyay | <a href="/#/contact">Contact</a></p>
    </footer>
  )
}

export default Footer
