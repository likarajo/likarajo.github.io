import "../../profile.css";

function Profile() {
    return (
        <main className="profile">
            <p className="eyebrow">Dallas, Texas</p>
            <h1>Rajarshi Chattopadhyay</h1>
            <p className="role">Staff Software Engineer at Tesla</p>
            <p className="lead">
                I design trustworthy AI systems that let people ask questions of large
                operational, financial, and energy datasets in plain language. The work
                is to turn those questions into checked analytical queries, keep access
                controls in place, and run the systems on data infrastructure other
                people can use.
            </p>
            <nav className="profile-links" aria-label="Professional links">
                <a href="https://github.com/likarajo" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/likarajo/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="docs/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
                <a href="https://www.credly.com/users/likarajo/" target="_blank" rel="noreferrer">Credentials</a>
                <a href="/#/blogs">Writing</a>
                <a href="/#/contact">Contact</a>
            </nav>

            <section>
                <h2>What this work is</h2>
                <p className="section-copy">
                    Organizations already store the data. The gap is a safe way to ask it
                    a question. I build the layer that translates a plain-language question
                    into a verified query, explains the answer, and refuses queries the
                    person is not allowed to run. The same patterns apply in finance,
                    energy, manufacturing, and public-sector data, not only inside one company.
                </p>
            </section>

            <section>
                <h2>Public work</h2>
                <ul>
                    <li>
                        <a className="text-link" href="https://github.com/likarajo/ai-agent-chatbot" target="_blank" rel="noreferrer">ai-agent-chatbot</a>
                        {" "}— a safe natural-language-to-SQL agent over public U.S. electricity generation data. It checks the query, blocks injection, and limits a state reader to one state.
                    </li>
                    <li>
                        <a className="text-link" href="https://github.com/likarajo/language_translation" target="_blank" rel="noreferrer">language_translation</a>
                        {" "}— a sequence-to-sequence LSTM translation model. This is the public project other people have forked.
                    </li>
                    <li>
                        <a className="text-link" href="https://github.com/likarajo/covid19Sentiments" target="_blank" rel="noreferrer">covid19Sentiments</a>
                        {" "}— sentiment analysis of COVID-19 tweets. Write-up:{" "}
                        <a className="text-link" href="https://www.linkedin.com/pulse/covid-19-sentiment-analysis-rajarshi-chattopadhyay/" target="_blank" rel="noreferrer">COVID-19 sentiment analysis</a>.
                    </li>
                    <li>
                        <a className="text-link" href="https://likarajoblogs.wordpress.com/2018/06/08/risc-using-harvard/" target="_blank" rel="noreferrer">A 16-bit RISC processor on an FPGA</a>
                        {" "}— first runner-up, IETE Technical Paper Contest, 2014.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Background</h2>
                <ul>
                    <li>Staff Software Engineer, Tesla, since 2026. Software engineer at Tesla since 2020, in Dallas.</li>
                    <li>M.S. Computer Science, Intelligent Systems, The University of Texas at Dallas, 2020.</li>
                    <li>IBM, 2014–2018. Enterprise systems for a global shipping operation, including leading a support team. IBM Best Emerging Techie, 2016.</li>
                    <li>B.Tech. Electronics and Communication Engineering, West Bengal University of Technology, 2014.</li>
                </ul>
            </section>

            <p className="aside">
                Notes from travel and cooking are still on this site.{" "}
                <a className="text-link" href="/#/travel">Travel</a>
                {" · "}
                <a className="text-link" href="/#/leisure">Leisure</a>
            </p>
        </main>
    );
}

export default Profile;
