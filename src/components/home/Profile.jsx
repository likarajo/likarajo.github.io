import "../../profile.css";

function Profile() {
    return (
        <main className="profile">
            <p className="eyebrow">Dallas, Texas</p>
            <h1>Rajarshi Chattopadhyay</h1>
            <p className="role">Software Architect | AI Systems &amp; Business Applications</p>
            <p className="lead">
                I design and build scalable, production-grade intelligent systems that power
                analytics platforms and business-critical applications. My work focuses on
                architecting distributed systems, data pipelines, and AI-driven solutions
                that improve reliability, performance, and decision-making at scale.
            </p>
            <p className="profile-links">
                <a href="docs/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
            </p>

            <section className="example" aria-label="One example">
                <p>
                    <a className="text-link" href="https://github.com/likarajo/ai-agent-chatbot" target="_blank" rel="noreferrer">AI agent for energy data</a>
                    {" "}answers questions about U.S. electricity generation published by the Energy Information Administration.
                </p>
                <dl>
                    <dt>Question</dt>
                    <dd>How much wind generation did Texas produce in 2023?</dd>
                    <dt>Check</dt>
                    <dd>
                        The question is one aggregate: 2023, Texas, wind.
                        The query is a single SELECT with those values as parameters.
                        The sentence is not copied into SQL.
                    </dd>
                    <dt>Answer</dt>
                    <dd>119,855,132 megawatthours, the EIA wind row for Texas in 2023.</dd>
                    <dt>Refusal</dt>
                    <dd>
                        “What was customer revenue in Texas in 2023?” is refused.
                        The table has no revenue column, so no query runs.
                    </dd>
                </dl>
            </section>

            <section>
                <h2>Public work</h2>
                <ul>
                    <li>
                        <a className="text-link" href="/work/ai-agent-chatbot/">AI agent for energy data</a>
                        {" "}— the example above, written up as a case study.
                    </li>
                    <li>
                        <a className="text-link" href="/work/language-translation/">Neural machine translation</a>
                        {" "}— a sequence-to-sequence model that translates a sentence from one language into another.
                    </li>
                    <li>
                        <a className="text-link" href="/work/covid19-sentiments/">COVID-19 sentiment</a>
                        {" "}— classifies the sentiment of COVID-19 tweets.{" "}
                        <a className="text-link" href="https://www.linkedin.com/pulse/covid-19-sentiment-analysis-rajarshi-chattopadhyay/" target="_blank" rel="noreferrer">Write-up</a>.
                    </li>
                    <li>
                        <a className="text-link" href="https://likarajoblogs.wordpress.com/2018/06/08/risc-using-harvard/" target="_blank" rel="noreferrer">A 16-bit RISC processor on an FPGA</a>
                        {" "}— first runner-up, IETE Technical Paper Contest, 2014.
                    </li>
                </ul>
                <p>
                    <a className="text-link" href="/work/">All projects</a>
                </p>
            </section>

            <section>
                <h2>Background</h2>
                <ul>
                    <li>Staff Software Engineer at Tesla since 2026. Software engineer at Tesla since 2020.</li>
                    <li>M.S. Computer Science, Intelligent Systems, The University of Texas at Dallas, 2020.</li>
                    <li>IBM, 2014–2018. Enterprise systems for a global shipping operation, and lead of a support team. IBM Best Emerging Techie, 2016.</li>
                    <li>B.Tech. Electronics and Communication Engineering, West Bengal University of Technology, 2014.</li>
                </ul>
            </section>
        </main>
    );
}

export default Profile;
