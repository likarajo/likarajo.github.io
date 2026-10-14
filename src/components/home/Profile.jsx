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
            </nav>

            <section className="example" aria-label="Worked example">
                <h2>A worked example</h2>
                <p>
                    This is the public agent in{" "}
                    <a className="text-link" href="https://github.com/likarajo/ai-agent-chatbot" target="_blank" rel="noreferrer">ai-agent-chatbot</a>
                    , over U.S. electricity generation published by the Energy Information Administration.
                </p>
                <dl>
                    <dt>Question</dt>
                    <dd>How much wind generation did Texas produce in 2023?</dd>
                    <dt>Check</dt>
                    <dd>
                        The question maps to one aggregate: year 2023, Texas, wind.
                        The statement is a single SELECT with those values bound as parameters.
                        The sentence itself is not copied into SQL.
                    </dd>
                    <dt>Answer</dt>
                    <dd>119,855,132 megawatthours. That is the EIA wind row for Texas in 2023.</dd>
                    <dt>Refusal</dt>
                    <dd>
                        “What was customer revenue in Texas in 2023?” is refused.
                        The table has no revenue column, so the agent explains that and does not run a query.
                    </dd>
                </dl>
            </section>

            <section>
                <h2>Public work</h2>
                <ul>
                    <li>
                        <a className="text-link" href="https://github.com/likarajo/ai-agent-chatbot" target="_blank" rel="noreferrer">ai-agent-chatbot</a>
                        {" "}— answers a plain-language question about U.S. electricity generation with a checked query, and refuses a question the table cannot support.
                    </li>
                    <li>
                        <a className="text-link" href="https://github.com/likarajo/language_translation" target="_blank" rel="noreferrer">language_translation</a>
                        {" "}— a sequence-to-sequence model that translates a sentence from one language into another.
                    </li>
                    <li>
                        <a className="text-link" href="https://github.com/likarajo/covid19Sentiments" target="_blank" rel="noreferrer">covid19Sentiments</a>
                        {" "}— classifies the sentiment of COVID-19 tweets. Write-up:{" "}
                        <a className="text-link" href="https://www.linkedin.com/pulse/covid-19-sentiment-analysis-rajarshi-chattopadhyay/" target="_blank" rel="noreferrer">COVID-19 sentiment analysis</a>.
                    </li>
                    <li>
                        <a className="text-link" href="https://likarajoblogs.wordpress.com/2018/06/08/risc-using-harvard/" target="_blank" rel="noreferrer">A 16-bit RISC processor on an FPGA</a>
                        {" "}— a small processor built on an FPGA. First runner-up, IETE Technical Paper Contest, 2014.
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
                    <li>
                        Oracle Java SE 8 (OCA) and Oracle SQL.{" "}
                        <a className="text-link" href="https://www.credly.com/users/likarajo/" target="_blank" rel="noreferrer">The full set is on Credly</a>.
                    </li>
                </ul>
            </section>
        </main>
    );
}

export default Profile;
