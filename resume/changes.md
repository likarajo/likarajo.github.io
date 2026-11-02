# Resume 2026: change log (draft for Raj's review)

**Files**
- `resume_2026.docx`: editable source, single-column and ATS-friendly (no tables, text boxes, images or icons; Arial; standard headings)
- `resume_2026.pdf`: 2 pages, US Letter, exported from the DOCX
- `original/resume.pdf`: current site resume (likarajo.github.io/docs/resume.pdf, 1 page, dated Mar 2023)
- `original/cv_resume_2019.html`, `original/rajarshi_resume_2019_cv_repo.pdf`: 2019 resume (/cv/resume)
- `original/cv_full.html`, `original/cv_full_2020.txt`: full 2020 CV (/cv), where the badge list and earlier jobs came from
- `original/home.html`: snapshot of the live homepage
- `build/make_resume.py`: regenerates the DOCX. Then run `soffice --headless --convert-to pdf resume_2026.docx`

Nothing was published, pushed or committed. **Rev 2 (Oct 14, 11:16 PM CT):** Raj answered the [VERIFY] items. All inline markers are removed from the DOCX and PDF. The rev 1 files are saved as `build/resume_2026_v1.docx/.pdf`.

## Kept (reworded lightly where needed)
- Every Tesla bullet from the 2023 resume: credit trading app, ML model discovery and documentation app, company-wide metadata explorer, security architecture and deployment pipelines, Data Engineer Intern ETLs for Sales/Delivery/Logistics
- Copart: reconciliation microservices (fraud prevention), architecture and design docs, billing and payments modules (from the 2019 resume)
- Tesla 2019 IT internship (infrastructure-access automation)
- IBM: L3 support automations, 15-member team, client back end, DB update and queue-monitoring automation, MQ reporting tools (from the CV), on-the-job training, Best Emerging Techie 2016 (Maersk Diamond Awards)
- Education: UTD M.S., CGPA 3.64, coursework; WBUT B.Tech. RISC/Harvard thesis. The B.Tech. CGPA was dropped in rev 2 (see below).
- Projects: Customer Targeting and Twitter Sentiments in full. House price, movie-review sentiment, temperature anomaly, search app and chatbot/assistant are kept on one "More" line, with a link to likarajo.github.io/Projects
- Skills: every skill from the 2019 and 2023 resumes (System Design, OOP, Data Modeling, full-stack, Python, React JS/TS, UNIX/Linux, SQL/NoSQL/Elastic/Graph, Java, Scala, Spring Boot, Hadoop, Spark, Git, Jenkins, Docker, AWS S3/EC2/EMR), regrouped
- All 13 Oracle/IBM digital badges from the CV, with their years
- Activities: HackForHumanity 2018, Graduate Student Assembly and ACM at UTD, blogs and LinkedIn articles, 2013 presentations
- Earlier roles from the CV (UTD student worker, Hi-Q, BSNL, Siemens VAI), squeezed into one "Earlier" line

## Changed
- **Name/header:** passport name Rajarshi Chattopadhyay, with the site headline "Software Architect | AI Systems & Business Applications"
- **Contact:** phone removed. Email, site, GitHub and LinkedIn are kept.
- **Summary:** "Continuous learner…" and the 2019 line "4 years experience" are replaced with an architect summary stating **about 10 years** (IBM 2014–2018 plus Tesla 2020–present)
- **M.S. dates:** the backwards "2020 - 2018" is now **2018 – 2020**
- **Badges:** youracclaim.com is now **credly.com/users/likarajo**. I checked the profile and three badge IDs (Spark L1, OCA Java SE 8, Design Thinking); all resolve on Credly.
- **Tesla:** one employer block, Dallas, TX, with progressive titles: Staff Software Engineer (Feb 2026–Present), Senior Software Development Engineer (Mar 2023–Feb 2026), Software Engineer (Mar 2021–Feb 2023), Data Engineer Intern (Fremont, CA, Jun–Nov 2020). The Sep–Dec 2019 Tesla IT internship is a separate entry.
- **Tesla 2019 intern:** "increasing productivity by 80%" (2023 PDF) is now "cut turnaround by 90%" (from the 2019 resume and the brief)
- **"Tesla OS applications"** is now "other internal applications". **"$1B revenue department"** is now "revenue-critical department". No revenue figure appears anywhere.
- **B.Tech.:** "Electronics Engr" is now the full degree name, "Electronics and Communication Engineering"
- **Copart:** title is "Software Development Engineer Intern"; dates are May 2019 – Aug 2019. The Jan–May 2020 term listed on the 2023 resume was removed per Raj.

## Added
- **Staff-level Tesla work, all described generically with no internal system names and no internal metrics:**
  - AI agents that generate, run and explain SQL/DAX from natural language
  - Secure access: SQL-injection prevention, row-level security, token-based access
  - Hybrid semantic search (vector + BM25)
- **Senior-level Tesla work:**
  - Sole owner of the Airflow-based visual data-engineering platform (MVP Sep 2024, launched Jan 2025; features listed)
  - Sole owner of the financial planning and analytics (OPEX) app
  - Semantic layer v1.0 and data modeler
  - Analytics-platform AI agent, workbook and datasource editor
  - Co-authored the 2024 lakehouse proposal
- **New Skills group "AI & Data":** LLM agents, NL-to-SQL/DAX, prompt engineering, semantic search, NLP, ML/DL. Airflow, DAX and Kubernetes are also added.
- **Projects:** AI agent for energy data (2026), neural machine translation (language_translation), COVID-19 sentiment (covid19Sentiments)
- **Awards section:** IETE Technical Paper Contest First Runner-Up 2014 (16-bit RISC on an FPGA, national seminar), alongside the IBM award
- **Certifications:** Chegg Skills AI Prompt Engineering Certificate (2024). Oracle SQL was removed in rev 2.
- **Activities:** mentoring interns and new engineers

**Left out on purpose:**
- Internal names (Flow, FPlan, Deals, Luma, Macak, Tesla Analytics, ZipLabs, GCSS)
- Internal metrics: days→hours, 45s→<10s, ~40%, 50+ users, 5–10 min/report, 1.3M queries/day, 150+ QPS, ~15-dev team size
- Performance ratings
- The MBA scholarship
- The MCS51 board

You can add any approved metric back later.

## Rev 2: resolved items (Raj's answers, Oct 14, 2026)
1. **Tesla location:** Dallas, TX (was Austin).
2. **Staff Software Engineer:** Feb 2026 – Present.
3. **Senior Software Development Engineer:** Mar 2023 – Feb 2026.
4. **Software Engineer (full-time):** Mar 2021 – Feb 2023.
5. **2020 internship:** kept as Data Engineer Intern, Fremont, CA, **Jun 2020 – Nov 2020**. The end month comes from the 2023 resume, which is before Mar 2021 as required.
6. **2019 Tesla internship:** Software Engineer Intern, IT, Fremont, CA, Sep 2019 – Dec 2019. The 90% turnaround bullet is kept.
7. **Copart:** Software Development Engineer Intern, May 2019 – Aug 2019.
8. **Revenue:** no figures anywhere; "revenue-critical department" is kept.
9. **Oracle SQL certification:** removed.
10. **"About 10 years":** kept.
11. **IBM "100% SLA":** kept. It is sourced from an internal profile note that says "Led a 15-person support team at 100% SLA." No earlier resume or CV has it.
12. **B.Tech. CGPA 3.5:** dropped. No source states the scale.
13. **All `[VERIFY]` markers are removed.** The italic line "Verify all badges at …" was also reworded to "Digital badges: credly.com/users/likarajo" so no "verify" text remains.

## Rev 2: layout and ATS checks
- **Length:** 2 pages, US Letter.
- **Structure:** single column, no tables, text boxes, images, headers or footers.
- **Bullets:** Word's auto-bullets exported as a private-use Symbol glyph (U+F0B7), which ATS parsers can garble. They are now a plain "•" character in Arial, so the PDF embeds only Liberation Sans (the Arial-metric font). Text extraction has no private-use or replacement glyphs.
- **Page breaks:** section headings and job titles are set to keep with the next line, so a title is never stranded at the bottom of a page.
- **Text scan:** the PDF text has no "verify", "$", phone number, Austin, Oracle SQL, B.Tech. CGPA, internal Tesla system names, or youracclaim.

## Still uncertain (not shown on the resume; for Raj's awareness)
- **"Software engineer since 2020" vs. the resume:** the site says this, and the master file says SE from **Jun 2020**. The resume now shows a Jun–Nov 2020 internship and full-time SE from **Mar 2021**, per Raj. Dec 2020 – Feb 2021 is a gap on the resume. Consider aligning the site wording and the master file's "Software Engineer Jun 2020" line with the paperwork.
- **2020 internship:** its title (Data Engineer Intern), its Fremont, CA location and its Nov 2020 end month come only from the 2023 resume.
- **Copart Jan–May 2020 term:** listed on the 2023 resume, now dropped per Raj. Confirm it wasn't a real second term, or that leaving it off is intended.
- **"100% SLA":** sourced only in the master file, which marks it as needing proof.
- **"About 10 years":** counts IBM plus Tesla only. The master file says 12+ because it includes the 2012–13 apprenticeships.
- **M.S. CGPA 3.64:** kept from the 2023 resume. The scale isn't stated there either, but a UTD GPA is on 4.0.
- **AI agent for energy data:** the repo `likarajo/ai-agent-chatbot` is still empty on GitHub, so the resume links the site case study. The site case study says "over 50 years" of EIA data, but the master file says 2020–2024.
- **Badge years:** copied from the 2020 CV. Three badge IDs were spot-checked on Credly; the rest weren't.
- **B.Tech. dates:** only "2014" is shown. Sources disagree on the start year (2012 vs 2010).
